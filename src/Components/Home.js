import React from 'react';
import './Home.css'
import Product from '../Components/Product'
import Amazon from '../assets/amazon.jpg';
import LeanStartUp from '../assets/LeanStartUp.jpg';


const Home = () => {
    return ( 
        <div className="home">
            <img
                className="home__image"
                src={Amazon}
                alt=""
            />

            {/* Product id, title, price, rating, image */}
            <Product
                id="12321341"
                title="The Lean StartUp"
                price={11.96}
                rating={5}
                image={LeanStartUp}
            />

        </div>
     );
}
 
export default Home;