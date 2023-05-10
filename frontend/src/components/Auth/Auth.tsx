import React, {useState} from 'react';

import './auth.scss';
import Login from "./Login";
import Registration from "./Registration";
import RegistrationProp from "./Registration";

type AuthProp = {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>
}
const Auth: React.FC<AuthProp> = ({state, setState}) => {
    const [firstModal, setFirstModal] = useState(true);
    const [login, setLogin] = useState(false);
    const [registration, setRegistration] = useState(false)
    const closeModal = () => {
        setState(false)
    }
    const toLogin = () => {
        setFirstModal(false)
        setRegistration(false);
        setLogin(true);
    }
    const toRegistration = () => {
        setFirstModal(false)
        setRegistration(true);
        setLogin(false);
    }
    return (
        <div className='auth'>
            {firstModal &&
                <div className="modal">
                    <button className='close-modal' onClick={closeModal}>&times;</button>
                    <h3 className='title'>Необходима авторизация</h3>
                    <p className='subtitle'>Для входа в аккаунт необходимо войти или зарегистрироваться!</p>
                    <div className="btns">
                        <button className='btn btn-solid' onClick={toLogin}>Войти</button>
                        <button className="btn btn-outline" onClick={toRegistration}>Зарегистрироваться</button>
                    </div>
                </div>
            }

            {login && <Login closeModal={closeModal} toRegistration={toRegistration} />}

            {registration && <Registration closeModal={closeModal} toLogin={toLogin}/>}
        </div>
    );
};

export default Auth;