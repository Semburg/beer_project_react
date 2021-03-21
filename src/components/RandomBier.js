import React, { useState, useEffect } from 'react';

import Header from "./Header";

const RandomBier = () => {

    useEffect(() => {
        fetchItem();
    }, [])

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        const item = await fetchItem.json();
        setItem(item)
    }

    return (
        <div>
            <Header />
            <section className="item_detail">
                <img src={item.image_url} alt="" />
                <div>
                    <h2 className="names_font">{item.name}</h2>
                    <h3 className="render_down">{item.attenuation_level}</h3>
                </div>
                <div>
                    <h2 className="render_down">{item.tagline}</h2>
                    <h3>{item.first_brewed}</h3>
                </div>
                
                <h3>{item.description}</h3>
                <h4>{item.contributed_by}</h4>

            </section>
        </div>
    );
}

export default RandomBier;