import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';

export const appRoutes = {
    home: {
        path: '/',
        url: '/'
    }
}

function AppRouter() {


  return (
    <Router>
      <nav>
        <Link to={appRoutes.home.path}>Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path={appRoutes.home.path} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
