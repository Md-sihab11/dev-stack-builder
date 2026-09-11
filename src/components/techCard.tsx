import React from 'react';
import type { TechTypes } from '../types/types';

interface PropsTech{
    tech: TechTypes
}

const TechCard = ({tech}:PropsTech) => {
    return (

        // card er design
        <div className="">
            <div key={tech.id} >

                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{tech.name}</h2>
                            <p>{tech.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default TechCard;

