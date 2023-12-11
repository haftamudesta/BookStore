import React from 'react';
import { BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import classes from './navbar.module.css';

const SiteNavbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      Text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      Text: 'CATEGORIES',
    },
  ];
  return (
    <>
      <nav className={classes.nav__bar}>
        <h1 className={classes.bookstore}>Bookstore CMS</h1>
        <ul>
          {links.map((nlink) => (
            // eslint-disable-next-line
            <li key={nlink.id} className={'li' + nlink.id.toString()}>
              <NavLink to={nlink.path} className={classes.navlinks}>
                {nlink.Text}
              </NavLink>
            </li>
          ))}
        </ul>
        <h1 className={classes.user}>
          <BiUser />
        </h1>
      </nav>
    </>
  );
};

export default SiteNavbar;
