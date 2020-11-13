import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DateContext from "../../context/DateContext";
import logo from "../../assets/images/journal-better.png";
import "./Header.css";

const Header = () => {
  const { Today } = useContext(DateContext);
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light'
        id='navbar'
      >
        <Link className='navbar-brand' to='/Week'>
          <img src={logo} className='logo' alt='Journal Better Home' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/Week'>
                Home
              </Link>
            </li>
            {/* TODO: Pass down current date on this link  DONE*/}
            <li className='nav-item'>
              <Link
                className='nav-link'
                to={{ pathname: "/DayJournal", Date: Today }}
              >
                Journal Entry
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/DaySummary'>
                Today's Summary
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Journal'>
                Journal
              </Link>
            </li>
            <li className='nav-item'>
              {/* TODO: Make a profile page and link it to this */}
              <Link
                className='nav-link disabled'
                tabIndex='-1'
                aria-disabled='true'
                to='/Week'
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="card-header text-muted" id="header">
                <a href={logo}>
                    <img
                        src={logo}
                        className="logo"
                        alt="logo"
                    />
                </a>
            </div> */}
    </div>
  );
};

export default Header;
