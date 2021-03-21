import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from "./Header";

const AllBiers = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://ih-beers-api2.herokuapp.com/beers");
        const items = await data.json();
        setItems(items)
    }

    return (
        <div>
            <Header />
            <section>
                {items.map(item => (
                    <div className="item" key={item._id}>
                        <div>
                            <img src={item.image_url} alt="" />

                        </div>

                        <div>
                            <h1 className="names_font">{item.name}</h1>
                            <h2>{item.tagline}</h2>
                            <p>{item.contributed_by}</p>
                            <Link style={{ color:"black"}} to = {`/allbiers/${item._id}`}>
                                <h3 >see Details</h3>
                            </Link>

                        </div>

                    </div>


                ))}
            </section>
        </div>
    );
}

export default AllBiers;