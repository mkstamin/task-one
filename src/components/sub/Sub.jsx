import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import './sub.css';

const Sub = () => {
    const { details } = useContext(AppContext);
    const { title, desc, images } = details;

    return (
        <section>
            <div className="content">
                <div className="content__about">
                    <h3 className="content__about--title">{title} Loges</h3>
                    <div className="content__about--description">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="content__logos">
                    {images.map((image, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <img key={index} src={`/img/${image}`} alt={title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sub;
