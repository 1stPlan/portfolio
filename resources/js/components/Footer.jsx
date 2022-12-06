// import logo from './logo.svg';
// import './App.css';
import {useState} from "react"
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

function Footer() {


return (
    <>
    <footer class="footer">
      <div class="footer__tittle">
        <h4>R.N Portfolio </h4> 
        <p>本サイトはlaravelとReactで制作しています。
        <br class="sp--br"/>詳しくは <a href="https://github.com/1stPlan" target="_blank" rel="noopener noreferrer">GitHub</a>をご確認ください。
        </p> 
      </div>
      <p class="footer__copyright">
        copyright©R.N Portfolio ALL right reserved.
      </p>

    </footer>
    </>
  );
}

export default Footer;
