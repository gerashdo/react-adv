import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { routes } from './routes'

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map( ({ to, name }) => (
                  <li key={ to }>
                    <NavLink className={ ({ isActive }) => isActive ? 'nav-active':'' } to={ to }>
                      { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map( ({ path, Component }) => (
                <Route  key={ path } path={ path } element={ <Component /> } />
              ))
            }
            <Route path='/*' element={ <Navigate to={ routes[0].to } replace/> }/>
          </Routes>

        </div>
      </Router>
    </Suspense>

  );
}