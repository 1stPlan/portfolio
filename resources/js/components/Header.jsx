import { 
  BrowserRouter, 
  Route, 
  Switch, 
  NavLink, 
  Link,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';

import Langswitch from '../components/Langswitch';
import React, { useState,useRef,useEffect } from 'react';


function Header() {

    /*
    Menu Open---------------------*/
    const [active, setActive] = useState(false);

    const classToggle = () => {
      setActive(!active);
    }
    const classFalse = () => {
      setActive(false);
    }
    
    React.useEffect(() => {
    }, []);


  return (
    <>

    <div className={`header ${active ? "open" : ""}`}>
    
        <div className='header__logo'>
          <h2>R.N Portfolio</h2>
        </div>

        <div className="header__nav-toggle" id="nav-toggle" onClick={classToggle}>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span>MENU</span>
          </div>
        </div>

        <nav className='header__menu'>
          <ul className='header__menu-list'>
            <li className='header__menu-item' onClick={classFalse}>
              <NavLink className="header__menu-item_nav" activeStyle={{ fontWeight: 'bold' }} exact to="/home">
                <div className='header__menu-item_box'>
                  <span className='header__menu-item_num'>01</span>
                  <span className='header__menu-item_line'></span>
                </div>
                <div className='header__menu-item_text'>Home</div>
              </NavLink>
            </li>
            <li className='header__menu-item' onClick={classFalse}>
              <NavLink className="header__menu-item_nav" activeClassName="active" to="/qiita">
                <div className='header__menu-item_box'>
                  <span className='header__menu-item_num'>02</span>
                  <span className='header__menu-item_line'></span>
                </div>
                <div className='header__menu-item_text'>Qiita</div>
              </NavLink>
            </li>
            {/* <li className='header__menu-item' onClick={classFalse}>
              <NavLink className="header__menu-item_nav" activeClassName="active" to="/blog">
                <div className='header__menu-item_box'>
                  <span className='header__menu-item_num'>03</span>
                  <span className='header__menu-item_line'></span>
                </div>
                <div className='header__menu-item_text'>Blog</div>
              </NavLink>
            </li> */}
            <li className='header__menu-item'>
              <Langswitch />
            </li>
            {/* <li className='nav_sns header__menu-item'>
              <a href="" target="_blank" rel="nofollow noopener">
                <img src={`/img/icon_instagram.png`} width={'20px'}/>
              </a>
            </li> */}
            <li className='nav_sns header__menu-item'>
              <a  href="https://github.com/1stPlan" target="_blank" rel="noopener noreferrer">
                <img src={`/img/icon_github.png`} width={'20px'}/>
              </a>
            </li>
          </ul>
        </nav>

    </div>

  </>
  )
}

export default Header;

