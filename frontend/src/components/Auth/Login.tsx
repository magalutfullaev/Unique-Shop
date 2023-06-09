import React from 'react';

type LoginProp = {
    closeModal: () => void;
    toRegistration: () => void;
}
const Login: React.FC<LoginProp> = ({closeModal, toRegistration}) => {
    return (
        <div className="modal">
            <button className='close-modal' onClick={closeModal}>&times;</button>
            <h3 className='title'>Войти</h3>
            <p className='subtitle'>Если у вас есть учетная запись, пожалуйста, войдите в систему</p>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' placeholder='E-mail' className="input"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password" name='password' placeholder='Пароль' className="input"/>
                <a className='btn btn-link'>Забыли пароль?</a>
            </div>
            <div className="btns">
                <button className='btn btn-solid' onClick={closeModal}>Войти</button>
            </div>
            <p className="subtitle">У вас еще нет аккаунта? <a className='btn btn-link' onClick={toRegistration}>Пройдите
                процесс регистрации</a></p>
            <div className="auth-line">
                <div></div>
                <p className="subtitle">или</p>
            </div>
            <div className="btns">
                <button className='btn blue-hover'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path
                            d="M18.204 8.55111L11.4058 8.55078C11.1056 8.55078 10.8623 8.79407 10.8623 9.09427V11.266C10.8623 11.5661 11.1056 11.8095 11.4058 11.8095H15.2341C14.8149 12.8974 14.0325 13.8085 13.0342 14.3874L14.6666 17.2132C17.2852 15.6988 18.8333 13.0416 18.8333 10.0671C18.8333 9.64352 18.8021 9.34075 18.7396 8.99984C18.6922 8.74082 18.4673 8.55111 18.204 8.55111Z"
                        />
                        <path
                            d="M10.5 15.0726C8.62653 15.0726 6.99099 14.0489 6.11257 12.5342L3.28687 14.1629C4.72485 16.6551 7.41866 18.3334 10.5 18.3334C12.0116 18.3334 13.438 17.9264 14.6667 17.2171V17.2133L13.0343 14.3874C12.2876 14.8205 11.4236 15.0726 10.5 15.0726Z"
                        />
                        <path
                            d="M14.6667 17.2172V17.2133L13.0343 14.3875C12.2876 14.8205 11.4236 15.0726 10.5 15.0726V18.3334C12.0116 18.3334 13.438 17.9264 14.6667 17.2172Z"
                        />
                        <path
                            d="M5.42761 9.99993C5.42761 9.07647 5.67963 8.21251 6.1126 7.46586L3.28689 5.83716C2.57371 7.06199 2.16675 8.48445 2.16675 9.99993C2.16675 11.5154 2.57371 12.9379 3.28689 14.1627L6.1126 12.534C5.67963 11.7874 5.42761 10.9234 5.42761 9.99993Z"
                        />
                        <path
                            d="M10.5 4.92761C11.7217 4.92761 12.8439 5.36173 13.7205 6.08383C13.9367 6.26195 14.251 6.24909 14.4491 6.05101L15.9878 4.51228C16.2125 4.28754 16.1965 3.91967 15.9565 3.7114C14.4879 2.43735 12.5771 1.66675 10.5 1.66675C7.41866 1.66675 4.72485 3.34503 3.28687 5.83728L6.11257 7.46598C6.99099 5.95124 8.62653 4.92761 10.5 4.92761Z"
                        />
                        <path
                            d="M13.7204 6.08383C13.9367 6.26195 14.251 6.24909 14.4491 6.05101L15.9878 4.51228C16.2125 4.28754 16.1965 3.91967 15.9564 3.7114C14.4879 2.43732 12.577 1.66675 10.5 1.66675V4.92761C11.7217 4.92761 12.8439 5.36173 13.7204 6.08383Z"
                        />
                    </svg>
                </button>
                <button className='btn blue-hover'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <g clipPath="url(#clip0_4130_2103)">
                            <path
                                d="M17.0958 10.8565C16.7725 10.4482 16.865 10.2665 17.0958 9.9015C17.1 9.89734 19.7692 6.209 20.0442 4.95817L20.0458 4.95734C20.1825 4.5015 20.0458 4.1665 19.385 4.1665H17.1983C16.6417 4.1665 16.385 4.454 16.2475 4.77567C16.2475 4.77567 15.1342 7.44067 13.5592 9.16817C13.0508 9.66734 12.8158 9.82734 12.5383 9.82734C12.4017 9.82734 12.1892 9.66734 12.1892 9.2115V4.95734C12.1892 4.41067 12.0333 4.1665 11.5725 4.1665H8.13417C7.785 4.1665 7.5775 4.4215 7.5775 4.659C7.5775 5.17734 8.365 5.2965 8.44667 6.75484V9.919C8.44667 10.6123 8.32083 10.7398 8.04167 10.7398C7.29833 10.7398 5.49417 8.064 4.425 5.0015C4.20917 4.40734 3.99833 4.16734 3.4375 4.16734H1.25C0.625833 4.16734 0.5 4.45484 0.5 4.7765C0.5 5.34484 1.24333 8.17067 3.95667 11.904C5.765 14.4523 8.31167 15.8332 10.6283 15.8332C12.0208 15.8332 12.1908 15.5265 12.1908 14.999C12.1908 12.564 12.065 12.334 12.7625 12.334C13.0858 12.334 13.6425 12.494 14.9425 13.7232C16.4283 15.1807 16.6725 15.8332 17.5042 15.8332H19.6908C20.3142 15.8332 20.63 15.5265 20.4483 14.9215C20.0325 13.649 17.2225 11.0315 17.0958 10.8565Z"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_4130_2103">
                                <rect width="20" height="20" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Login;