import './App.css';
import { BiUser } from 'react-icons/bi';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Books from './component/Books';
import Categories from './component/Categories';
import BookStore from './component/BookStore';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/bookstore" element={<BookStore />} />
        <Route index="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    )
  );
  return (
    <main className="main__container">
      <RouterProvider router={router} />
    </main>
  );
}

const Root = () => {
  return (
    <>
      <nav className="main__nav">
        <div className="nav__link">
          <Link className="nav__link-links bookstore" to="/bookstore">
            Bookstore CMS
          </Link>
          <Link className="nav__link-links books" to="/">
            Books
          </Link>
          <Link className="nav__link-links books" to="/categories">
            Categories
          </Link>
        </div>
        <div>
          <h1 className="user">
            <BiUser />
          </h1>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
