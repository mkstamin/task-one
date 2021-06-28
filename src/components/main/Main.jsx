import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import './main.css';

const Main = () => {
    const { data, value, setValue } = useContext(AppContext);

    return (
        <section>
            <div className="main">
                <div className="main__header">
                    <div className="main__header__content">
                        <p>How do i know which logo id right for me</p>
                        <h3>Different types of logo style</h3>
                    </div>
                    <div className="main__header__button">
                        <button type="button">
                            Contact Us
                            <span>&#8594;</span>
                        </button>
                    </div>
                </div>

                <div className="main__items">
                    {data.map((item, index) => (
                        <div
                            role="button"
                            tabIndex={item.id}
                            className={`main__items--card ${
                                index === value && 'main__items--card-active'
                            } `}
                            key={item.id}
                            onClick={() => setValue(index)}
                        >
                            <span>{item.icon}</span>
                            <p className="logo-type">{item.title}</p>
                            <p>logo</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Main;
