import React from 'react';
import ReactDOM from 'react-dom/client';
import "/resources/i18n/configs"; //i18
import Home from './Home';

import Qiita from './Qiita';

import Blogs from './blog/List';
import Blog from './blog/Show';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

// import '/resources/css/reset.css';
// import '/resources/css/style.css';

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

function App() {

  return (
    <BrowserRouter>
      <Header/>

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/qiita" component={Qiita} />

        <Route exact path="/blog" component={Blogs} />
        <Route path="/blog/:id" component={Blog} />

        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer/>
    </BrowserRouter>

  );
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

export default App;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
