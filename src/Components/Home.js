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
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean StartUp"
                    price={11.96}
                    rating={5}
                    image={LeanStartUp}
                />

                <Product
                    id="43448583"
                    title="The Lean wizard of Oz"
                    price={110.96}
                    rating={4}
                    image={LeanStartUp}
                />
            </div>

            <div className="home__row">
                <Product
                    id="12326661"
                    title="The Lean StartUp of Padua"
                    price={150.96}
                    rating={4}
                    image={LeanStartUp}
                />
                 <Product
                    id="12320303"
                    title="The Lean StartUp of Magella"
                    price={50.96}
                    rating={3}
                    image={LeanStartUp}
                />
                 <Product
                    id="12454341"
                    title="The Lean StartUp of Italy"
                    price={1}
                    rating={1}
                    image={LeanStartUp}
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321541"
                    title="The Lean StartUp of Time"
                    price={1000.96}
                    rating={5}
                    image={LeanStartUp}
                />
            </div>
            

        </div>
     );
}
 
export default Home;