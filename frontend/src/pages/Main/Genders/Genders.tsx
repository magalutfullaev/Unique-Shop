import React from "react";

import "./genders.scss";

const genders = [
    {
        name: "man",
        value: "Мужской",
    },
    {
        name: "woman",
        value: "Женский",
    },
    {
        name: "unisex",
        value: "Унисекс",
    },
];

const Genders: React.FC<{ gender: string, setGender: React.Dispatch<React.SetStateAction<string>> }> = ({gender,setGender}) => {

    return (
        <section className="genders">
            <div className="gender-items">
                {genders.map((genderItem, i) =>
                    <button onClick={() => setGender(genderItem.name)}
                            className={`btn${gender === genderItem.name ? " active" : ""}`}
                            key={i}>{genderItem.value}
                        <div className="button-border"></div>
                    </button>)}
            </div>
            <div className="gender-border"></div>
        </section>
    );
};

export default Genders;