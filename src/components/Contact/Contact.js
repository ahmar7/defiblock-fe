import logo from "./assets/images/logo/logo.png";
import logo_dark from "./assets/images/logo/logo-dark.png";
import us from "./assets/images/flags/us.jpg";
import spain from "./assets/images/flags/spain.jpg";
import germany from "./assets/images/flags/germany.jpg";
import italy from "./assets/images/flags/italy.jpg";
import russia from "./assets/images/flags/russia.jpg";
import avt_01 from "./assets/images/avt/avt-01.jpg";
import log_footer from "./assets/images/logo/log-footer.png";

import contact from "./assets/images/layout/banner-01.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isThemes, setisThemes] = useState(false);
  let toggleTheme = () => {
    let body = document.querySelector("body");
    body.classList.add("is_dark");
    body.classList.remove("is_light");
    setisThemes(true);
  };
  let toggleTheme2 = () => {
    let body = document.querySelector("body");
    body.classList.remove("is_dark");
    setisThemes(false);

    body.classList.add("is_light");
  };
  return (
    <div className="body header-fixed  new-hm  ">
      <header id="header_main" className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header__body d-flex justify-content-between">
                <div className="header__left">
                  <div className="logo">
                    <a className="light" href="/">
                      <img
                        src={logo}
                        alt
                        width={118}
                        height={32}
                        data-retina="assets/images/logo/logo@2x.png"
                        data-width={118}
                        data-height={32}
                      />
                    </a>
                    <a className="dark" href="/">
                      <img
                        src={logo_dark}
                        alt
                        width={118}
                        height={32}
                        data-retina="assets/images/logo/logo-dark@2x.png"
                        data-width={118}
                        data-height={32}
                      />
                    </a>
                  </div>
                  <div className="left__main">
                    <nav id="main-nav" className="main-nav">
                      <ul id="menu-primary-menu" className="menu">
                        <li className="menu-item-has-children">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item-has-children  current-menu-item">
                          <Link to="/contactus">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                    {/* /#main-nav */}
                  </div>
                </div>
                <div className="header__right">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Assets
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Binance Visa Card
                      </a>
                      <a className="dropdown-item" href="#">
                        Crypto Loans
                      </a>
                      <a className="dropdown-item" href="#">
                        Binance Pay
                      </a>
                    </div>
                  </div>

                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      EN/USD
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item language"
                        data-lang="en"
                      >
                        <img
                          src={us}
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">English</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item language"
                        data-lang="sp"
                      >
                        <img
                          src={spain}
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">Spanish</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item language"
                        data-lang="gr"
                      >
                        <img
                          src={germany}
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">German</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item language"
                        data-lang="it"
                      >
                        <img
                          src={italy}
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">Italian</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item language"
                        data-lang="ru"
                      >
                        <img
                          src={russia}
                          alt="user-image"
                          className="me-1"
                          height={12}
                        />
                        <span className="align-middle">Russian</span>
                      </a>
                    </div>
                  </div>
                  <div className="mode-switcher">
                    {isThemes ? (
                      <a href="#" className="moon" onClick={toggleTheme2}>
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.0089 8.97241C12.7855 9.64616 12.4491 10.2807 12.0107 10.8477C11.277 11.7966 10.2883 12.5169 9.1602 12.9244C8.03209 13.3319 6.81126 13.4097 5.64056 13.1486C4.46987 12.8876 3.39772 12.2986 2.54959 11.4504C1.70145 10.6023 1.1124 9.53013 0.851363 8.35944C0.590325 7.18874 0.668097 5.96791 1.07558 4.8398C1.48306 3.71169 2.2034 2.72296 3.1523 1.9893C3.71928 1.55094 4.35384 1.21447 5.02759 0.991088C4.69163 1.84583 4.54862 2.77147 4.61793 3.7009C4.72758 5.17128 5.36134 6.55346 6.40394 7.59606C7.44654 8.63866 8.82873 9.27242 10.2991 9.38207C11.2285 9.45138 12.1542 9.30837 13.0089 8.97241Z"
                            stroke="white"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ) : (
                      <a className="sun" href="#" onClick={toggleTheme}>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99993 11.182C9.7572 11.182 11.1818 9.75745 11.1818 8.00018C11.1818 6.24291 9.7572 4.81836 7.99993 4.81836C6.24266 4.81836 4.81812 6.24291 4.81812 8.00018C4.81812 9.75745 6.24266 11.182 7.99993 11.182Z"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 1V2.27273"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 13.7271V14.9998"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.04956 3.04932L3.9532 3.95295"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.0469 12.0469L12.9505 12.9505"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 8H2.27273"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.7273 8H15"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.04956 12.9505L3.9532 12.0469"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.0469 3.95295L12.9505 3.04932"
                            stroke="#23262F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="wallet">
                    <a href="/auth/login"> Sign In </a>
                  </div>
                  <div className="dropdown user">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src={avt_01} alt />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton4"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-user font-size-16 align-middle me-1" />
                        <span>Profile</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-wallet font-size-16 align-middle me-1" />
                        <span>My Wallet</span>
                      </a>
                      <a className="dropdown-item d-block" href="#">
                        <span className="badge bg-success float-end">11</span>
                        <i className="bx bx-wrench font-size-16 align-middle me-1" />
                        <span>Settings</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="bx bx-lock-open font-size-16 align-middle me-1" />
                        <span>Lock screen</span>
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item text-danger"
                        href="user-login.html"
                      >
                        <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                        <span>Logout</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: 50 }} />
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="heading">Contact</h3>
            </div>
            <div className="col-md-6">
              <ul className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <p className="fs-18">/</p>
                </li>
                <li>
                  <p className="fs-18">Contact</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="image">
                <img src={contact} alt />
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="contact-main">
                <div className="block-text center">
                  <h3 className="heading">Leave a message for us</h3>
                  <p className="desc fs-20">Get in touch with Rockie</p>
                </div>
                <form>
                  <div className="form-group">
                    <label>Your name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter mail"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>NFT Items</option>
                      <option>NFT Items 1</option>
                      <option>NFT Items 1</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message </label>
                    <textarea
                      cols={30}
                      rows={10}
                      className="form-control"
                      placeholder="Enter your message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn-action">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sale">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="block-text">
                <h4 className="heading">Earn up to $25 worth of crypto</h4>
                <p className="desc">
                  Discover how specific cryptocurrencies work — and get a bit of
                  each crypto to try out for yourself.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="button">
                <a href="#">Create Account</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__main">
            <div className="row">
              <div className="col-xl-4 col-md-8">
                <div className="info">
                  <a href="/" className="logo">
                    <img src={log_footer} alt />
                  </a>
                  <h6>Let's talk! 🤙</h6>
                  <ul className="list">
                    <li>
                      <p>+12 345 678 9101</p>
                    </li>
                    <li>
                      <p>Info.Avitex@Gmail.Com</p>
                    </li>
                    <li>
                      <p>
                        Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi
                        96522
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="widget-link s1">
                  <h6 className="title">PRODUCTS</h6>
                  <ul>
                    <li>
                      <a href="spot.html">Spot</a>
                    </li>
                    <li>
                      <a href="#">Inverse Perpetual</a>
                    </li>
                    <li>
                      <a href="#">USDT Perpetual</a>
                    </li>
                    <li>
                      <a href="exchange.html">Exchange</a>
                    </li>
                    <li>
                      <a href="#">Launchpad</a>
                    </li>
                    <li>
                      <a href="#">Binance Pay</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="widget-link s2">
                  <h6 className="title">SERVICES</h6>
                  <ul>
                    <li>
                      <a href="buy-crypto-select.html">Buy Crypto</a>
                    </li>
                    <li>
                      <a href="markets.html">Markets</a>
                    </li>
                    <li>
                      <a href="#">Tranding Fee</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="#">Referral Program</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="widget-link s3">
                  <h6 className="title">SUPPORT</h6>
                  <ul>
                    <li>
                      <a href="#">Bybit Learn</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="user-profile.html">User Feedback</a>
                    </li>
                    <li>
                      <a href="#">Submit a request</a>
                    </li>
                    <li>
                      <a href="#">API Documentation</a>
                    </li>
                    <li>
                      <a href="#">Trading Rules</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-4">
                <div className="widget-link s4">
                  <h6 className="title">ABOUT US</h6>
                  <ul>
                    <li>
                      <a href="#">About Bybit</a>
                    </li>
                    <li>
                      <a href="#">Authenticity Check</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Business Contacts</a>
                    </li>
                    <li>
                      <a href="blog-default.html">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg">
          <div className="footer__bottom">
            <p>Copyright © 2022 Themesflat</p>
            <ul className="list-social">
              <li>
                <a href>
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
