import React from 'react';
import image from '../assets/img.png'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider';
import {auth} from '../Firebase/Firebase';

const Header = () => {
    // const [state, dispatch] = useReducer()..format

    const [{basket, user} , dispatch] = useStateValue();

    console.log(basket);
    console.log(user);

    const login = () => {
        if(user){
            auth.signOut();
        }
    }
    
    return ( 
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src={image}
                    alt="amazonImage"
                />
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* 3 links */}
            {/* 1st link */}
            <div className="header__nav">
                <Link to={ !user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{ user ? "Sign Out" : "Sign In"}</span>
                    </div>
                
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& orders</span>
                    </div>
                
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* number of icons in the basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

            {/* icon basket */}
        </nav>
     );
}
 
export default Header;