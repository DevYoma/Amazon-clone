import React from 'react';
import './Home.css'
import Product from '../Components/Product'
import Amazon from '../assets/amazon.jpg';
import LeanStartUp from '../assets/LeanStartUp.jpg';
import Ps4 from '../assets/Ps4.jpg';
import Laptop from  '../assets/laptop.jpg';
import Blender from '../assets/blender.jpg';
import Tv from '../assets/Tv.jpg';
import Bitcoin from '../assets/Bitcoin.jpg';


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
                    title="PlayStation 4 Gaming Console"
                    price={400.50}
                    rating={5}
                    image={Ps4}
                />

                <Product
                    id="43448583"
                    title="Dell XPS 15"
                    price={500.96}
                    rating={5}
                    image={Laptop}
                />
            </div>

            <div className="home__row">
                <Product
                    id="12326661"
                    title="Blender for grinding pepper 🤣"
                    price={150.96}
                    rating={3}
                    image={Blender}
                />
                 <Product
                    id="12320303"
                    title="Smart Television with Hifi"
                    price={900.96}
                    rating={6}
                    image={Tv}
                />
                 <Product
                    id="12454341"
                    title="Bitcoin 😲"
                    price={1000000}
                    rating={7}
                    image={Bitcoin}
                />
            </div>

            <div className="home__row">
                <Product
                    id="12321541"
                    title="The Lean StartUp"
                    price={1000.96}
                    rating={5}
                    image={LeanStartUp}
                />
            </div>
            

        </div>
     );
}
 
export default Home;