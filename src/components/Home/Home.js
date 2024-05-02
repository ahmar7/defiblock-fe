import React, { useState } from "react";
import logo from "./assets/images/logo/logo.png";
import logo_dark from "./assets/images/logo/logo-dark.png";
import us from "./assets/images/flags/us.jpg";
import spain from "./assets/images/flags/spain.jpg";
import germany from "./assets/images/flags/germany.jpg";
import italy from "./assets/images/flags/italy.jpg";
import russia from "./assets/images/flags/russia.jpg";
import avt_01 from "./assets/images/avt/avt-01.jpg";
import logo_01 from "./assets/images/partner/logo-01.png";
import logo_02 from "./assets/images/partner/logo-02.png";
import logo_03 from "./assets/images/partner/logo-03.png";
import logo_04 from "./assets/images/partner/logo-04.png";
import banner_01 from "./assets/images/layout/banner-01.png";
import Cloud from "./assets/images/icon/Cloud.png";
import connect_line from "./assets/images/icon/connect-line.png";
import Wallet from "./assets/images/icon/Wallet.png";
import Mining from "./assets/images/icon/Mining.png";
import Comparison from "./assets/images/icon/Comparison.png";
import about_h1 from "./assets/images/layout/about-h1.png";
import icon_01 from "./assets/images/icon/icon-01.png";
import icon_02 from "./assets/images/icon/icon-02.png";
import icon_03 from "./assets/images/icon/icon-03.png";
import icon_04 from "./assets/images/icon/icon-04.png";
import icon_05 from "./assets/images/icon/icon-05.png";
import googleplay from "./assets/images/icon/googleplay.png";
import appstore from "./assets/images/icon/appstore.png";
import download from "./assets/images/layout/download.png";
import avt_02 from "./assets/images/avt/avt-02.png";
import avt_03 from "./assets/images/avt/avt-03.png";
import avt_04 from "./assets/images/avt/avt-04.png";
import logo_05 from "./assets/images/partner/logo-05.png";
import log_footer from "./assets/images/logo/log-footer.png";

// import "./Home.css";
import "./home2.css";

const Home = () => {
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
      {/* Header is_dark*/}
      <header id="header_main" className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header__body d-flex justify-content-between">
                <div className="header__left">
                  <div className="logo">
                    <a className="light" href="index.html">
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
                    <a className="dark" href="index.html">
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
                        <li className="menu-item-has-children current-menu-item">
                          <a href="#">Homepage </a>
                          <ul className="sub-menu">
                            <li className="menu-item current-item">
                              <a href="index.html">Home 01</a>
                            </li>
                            <li className="menu-item">
                              <a href="home-v2.html">Home 02</a>
                            </li>
                            <li className="menu-item">
                              <a href="home-v3.html">Home 03</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Buy Crypto</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="buy-crypto-select.html">
                                Buy Crypto Select
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="buy-crypto-confirm.html">
                                Buy Crypto Confirm
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="buy-crypto-details.html">
                                Buy Crypto Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="markets.html">Markets </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Sell Crypto</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="sell-crypto.html">Sell Select</a>
                            </li>
                            <li className="menu-item">
                              <a href="sell-crypto-amount.html">
                                Sell Crypto Amount
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="sell-crypto-confirm.html">
                                Sell Crypto Confirm
                              </a>
                            </li>
                            <li className="menu-item">
                              <a href="sell-crypto-details.html">
                                Sell Crypto Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Blog</a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="blog-default.html">Blog Default</a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-grid-v1.html">Blog Grid v1</a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-grid-v2.html">Blog Grid v2</a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-list.html">Blog List</a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="wallet.html"
                          >
                            BITUSDT
                            <svg
                              className="s1"
                              width={8}
                              height={10}
                              viewBox="0 0 8 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.75979 3.20154C6.69318 3.13681 6.59973 3.10739 6.50828 3.12243C6.41666 3.13741 6.33754 3.19493 6.29504 3.27747C6.14887 3.56144 5.9632 3.82239 5.74477 4.05308C5.76654 3.88644 5.7775 3.7188 5.7775 3.55072C5.7775 3.2282 5.73428 2.8963 5.64898 2.56413C5.36855 1.4731 4.6332 0.550422 3.63154 0.0327073C3.54434 -0.0123512 3.44043 -0.0107692 3.35463 0.0369261C3.26883 0.0846409 3.21264 0.172121 3.20494 0.269973C3.12686 1.26146 2.61615 2.16349 1.80301 2.74536C1.79225 2.75312 1.78156 2.76097 1.77088 2.76878C1.74875 2.78497 1.72789 2.80029 1.7084 2.81314C1.70535 2.81517 1.70232 2.81724 1.69936 2.81937C1.18795 3.18552 0.765977 3.67361 0.479004 4.23101C0.187402 4.79798 0.0395508 5.4064 0.0395508 6.03931C0.0395508 6.36173 0.0827734 6.69362 0.168027 7.02585C0.61793 8.77697 2.19379 9.99997 4.00023 9.99997C6.18404 9.99997 7.96068 8.22322 7.96068 6.03931C7.96068 4.96236 7.5342 3.95454 6.75979 3.20154Z"
                                fill="#3772FF"
                              />
                            </svg>
                          </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#"> Pages </a>
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="user-profile.html">User Profile</a>
                            </li>
                            <li className="menu-item">
                              <a href="login.html">Login</a>
                            </li>
                            <li className="menu-item">
                              <a href="register.html">Register</a>
                            </li>
                            <li className="menu-item">
                              <a href="contact.html">Contact</a>
                            </li>
                            <li className="menu-item">
                              <a href="faq.html">FAQ</a>
                            </li>
                          </ul>
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
                      id="dropdownMenuButton1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Orders &amp; Trades
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <a className="dropdown-item" href="#">
                        Binance Convert
                      </a>
                      <a className="dropdown-item" href="#">
                        Spot
                      </a>
                      <a className="dropdown-item" href="#">
                        Margin
                      </a>
                      <a className="dropdown-item" href="#">
                        P2P
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
                  <div className="dropdown notification">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="icon-notification" />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton3"
                    >
                      <div className="dropdown-item">
                        <div className="media server-log">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-server"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={8}
                              rx={2}
                              ry={2}
                            />
                            <rect
                              x={2}
                              y={14}
                              width={20}
                              height={8}
                              rx={2}
                              ry={2}
                            />
                            <line x1={6} y1={6} x2={6} y2={6} />
                            <line x1={6} y1={18} x2={6} y2={18} />
                          </svg>
                          <div className="media-body">
                            <div className="data-info">
                              <h6 className>Server Rebooted</h6>
                              <p className>45 min ago</p>
                            </div>
                            <div className="icon-status">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                              >
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="media">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-heart"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                          <div className="media-body">
                            <div className="data-info">
                              <h6 className>Licence Expiring Soon</h6>
                              <p className>8 hrs ago</p>
                            </div>
                            <div className="icon-status">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                              >
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-item">
                        <div className="media file-upload">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-file-text"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1={16} y1={13} x2={8} y2={13} />
                            <line x1={16} y1={17} x2={8} y2={17} />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                          <div className="media-body">
                            <div className="data-info">
                              <h6 className>Kelly Portfolio.pdf</h6>
                              <p className>670 kb</p>
                            </div>
                            <div className="icon-status">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-check"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-button">
                    <span />
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

      {/* end Header */}
      {/* Banner Top */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="banner__content">
                <h2 className="title">
                  Buy &amp; Sell Digital Assets In The Rockie
                </h2>
                <p className="fs-20 desc">
                  Coin rockie is the easiest, safest, and fastest way to buy
                  &amp; sell crypto asset exchange.
                </p>
                <a href="#" className="btn-action">
                  <span>Get started now</span>
                </a>
                <div className="partner">
                  <h6>Our Partners</h6>
                  <div className="partner__list">
                    <div className="swiper swiper-partner">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <a href="#">
                            <img src={logo_01} alt />
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#">
                            <img src={logo_02} alt />
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#">
                            <img src={logo_03} alt />
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#">
                            <img src={logo_04} alt />
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a href="#">
                            <img src={logo_01} alt />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="banner__image">
                <img src={banner_01} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Top */}
      <section
        className="crypto aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="crypto__main">
                <div className="flat-tabs">
                  <ul className="menu-tab">
                    <li className="active">
                      <h6 className="fs-16">Crypto</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">DeFi</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">BSC</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">NFT</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Metaverse</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Polkadot</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Solana</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Opensea</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Makersplace</h6>
                    </li>
                  </ul>
                  <div className="content-tab">
                    <div className="content-inner" style={{}}>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </span>
                            <span>BNB</span>{" "}
                            <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner" style={{ display: "none" }}>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </span>
                            <span>BNB</span>{" "}
                            <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner" style={{ display: "none" }}>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </span>
                            <span>BNB</span>{" "}
                            <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner" style={{ display: "none" }}>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </span>
                            <span>BNB</span>{" "}
                            <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner" style={{ display: "none" }}>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </span>
                            <span>BNB</span>{" "}
                            <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner" style={{ display: "none" }}>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </span>
                            <span>BNB</span>{" "}
                            <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                    <div className="content-inner" style={{ display: "none" }}>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-btc">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Bitcoin</span>
                            <span className="unit">BTC/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 46,168.95</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <p className="sale critical">-0.79%</p>
                        </div>
                      </div>
                      <div className="crypto-box active">
                        <div className="top">
                          <a href="#">
                            <span className="icon-eth">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </span>
                            <span>Ethereum</span>
                            <span className="unit">ETH/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD $3,480.04</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale success">+10.55%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-tether">
                              <span className="path1" />
                              <span className="path2" />
                            </span>
                            <span>Tether</span>
                            <span className="unit">USDT/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 1.00</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-0.01%%</div>
                        </div>
                      </div>
                      <div className="crypto-box">
                        <div className="top">
                          <a href="#">
                            <span className="icon-bnb">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                              <span className="path5" />
                              <span className="path6" />
                            </span>
                            <span>BNB</span>{" "}
                            <span className="unit">BNB/USD</span>
                          </a>
                        </div>
                        <h6 className="price">USD 443.56</h6>
                        <div className="bottom">
                          <p>36,641.20</p>
                          <div className="sale critical">-1.24%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coin-list">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text">
                <h3 className="heading">Market Update</h3>
                <a className="btn-action-2" href="#">
                  See All Coins
                </a>
              </div>
              <div className="coin-list__main">
                <div className="flat-tabs">
                  <ul className="menu-tab">
                    <li className="active">
                      <h6 className="fs-16">View All</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Metaverse</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Entertainment</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Energy</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">NFT</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Gaming</h6>
                    </li>
                    <li>
                      <h6 className="fs-16">Music</h6>
                    </li>
                  </ul>
                  <div className="content-tab">
                    <div className="content-inner">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24h %</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>1</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1" />
                                  <span className="path2" />
                                </span>
                                <span>Bitcoin</span>
                                <span className="unit">BTC</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-1" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>2</td>
                            <td>
                              <a href="#">
                                <span className="icon-eth">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </span>
                                <span>Ethereum</span>
                                <span className="unit">ETH</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-5.12%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-2" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>3</td>
                            <td>
                              <a href="#">
                                <span className="icon-bnb">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                  <span className="path6" />
                                </span>
                                <span>BNB</span>
                                <span className="unit">BNB/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-3.75%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-3" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>4</td>
                            <td>
                              <a href="#">
                                <span className="icon-tether">
                                  <span className="path1" />
                                  <span className="path2" />
                                </span>
                                <span>Tether</span>
                                <span className="unit">USDT/USD</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-4" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>5</td>
                            <td>
                              <a href="#">
                                <span className="icon-sol">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                </span>
                                <span>Solana</span>
                                <span className="unit">SOL</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.45%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-5" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>6</td>
                            <td>
                              <a href="#">
                                <span className="icon-btc">
                                  <span className="path1" />
                                  <span className="path2" />
                                </span>
                                <span>XRP</span>{" "}
                                <span className="unit">XRP</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="down">-2.22%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-6" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>7</td>
                            <td>
                              <a href="#">
                                <span className="icon-ada">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                  <span className="path6" />
                                  <span className="path7" />
                                  <span className="path8" />
                                  <span className="path9" />
                                </span>
                                <span>Cardano</span>
                                <span className="unit">ADA</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+0.8%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-7" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <span className="icon-star" />
                            </th>
                            <td>8</td>
                            <td>
                              <a href="#">
                                <span className="icon-avax">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </span>
                                <span>Avalanche</span>
                                <span className="unit">AVAX</span>
                              </a>
                            </td>
                            <td className="boild">$56,623.54</td>
                            <td className="up">+1.41%</td>
                            <td className="boild">$880,423,640,582</td>
                            <td>
                              <div id="total-revenue-chart-8" />
                            </td>
                            <td>
                              <a href="#" className="btn">
                                Trade
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block-text center">
                <h3 className="heading">How It Work</h3>
                <p className="fs-20 desc">
                  Stacks is a production-ready library of stackable content
                  blocks built in React Native.
                </p>
              </div>
              <div className="work__main">
                <div className="work-box">
                  <div className="image">
                    <img src={Cloud} alt />
                  </div>
                  <div className="content">
                    <p className="step">Step 1</p>
                    <a href="#" className="title">
                      Download
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content
                      blocks built in React Native.
                    </p>
                  </div>
                  <img className="line" src={connect_line} alt />
                </div>
                <div className="work-box">
                  <div className="image">
                    <img src={Wallet} alt />
                  </div>
                  <div className="content">
                    <p className="step">Step 2</p>
                    <a href="#" className="title">
                      Connect wallet
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content
                      blocks built in React Native.
                    </p>
                  </div>
                  <img className="line" src={connect_line} alt />
                </div>
                <div className="work-box">
                  <div className="image">
                    <img src={Mining} alt />
                  </div>
                  <div className="content">
                    <p className="step">Step 3</p>
                    <a href="#" className="title">
                      Start trading
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content
                      blocks built in React Native.
                    </p>
                  </div>
                  <img className="line" src={connect_line} alt />
                </div>
                <div className="work-box">
                  <div className="image">
                    <img src={Comparison} alt />
                  </div>
                  <div className="content">
                    <p className="step">Step 4</p>
                    <a href="#" className="title">
                      Earn money
                    </a>
                    <p className="text">
                      Stacks is a production-ready library of stackable content
                      blocks built in React Native.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="about_image">
                <div className="swiper img-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img className="img-main" src={about_h1} alt />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-main" src={about_h1} alt />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-main" src={about_h1} alt />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-main" src={about_h1} alt />
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
                <img className="icon icon-1" src={icon_01} alt />
                <img className="icon icon-2" src={icon_02} alt />
                <img className="icon icon-3" src={icon_03} alt />
                <img className="icon icon-4" src={icon_04} alt />
                <img className="icon icon-5" src={icon_05} alt />
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div
                className="about__content"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <h3 className="heading">What Is Rockie</h3>
                <p className="fs-20 decs">
                  Experience a variety of trading on Bitcost. You can use
                  various types of coin transactions such as Spot Trade, Futures
                  Trade, P2P, Staking, Mining, and margin.
                </p>
                <ul className="list">
                  <li>
                    <h6 className="title">
                      <span className="icon-check" />
                      View real-time cryptocurrency prices
                    </h6>
                    <p className="text">
                      Experience a variety of trading on Bitcost. You can use
                      various types of coin transactions such as Spot Trade,
                      Futures Trade, P2P, Staking, Mining, and margin.
                    </p>
                  </li>
                  <li>
                    <h6 className="title">
                      <span className="icon-check" />
                      Buy and sell BTC, ETH, XRP, OKB, Etc...
                    </h6>
                    <p className="text">
                      Experience a variety of trading on Bitcost. You can use
                      various types of coin transactions such as Spot Trade,
                      Futures Trade, P2P, Staking, Mining, and margin.
                    </p>
                  </li>
                </ul>
                <a href="#" className="btn-action">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="download">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div
                className="download__content"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <h3 className="heading">
                  Free your money &amp; Invest with confident
                </h3>
                <p className="fs-20 decs">
                  With Cryptor Trade, you can be sure your trading skills are
                  matched
                </p>
                <ul className="list">
                  <li>
                    <h6 className="title">
                      <span className="icon-check" />
                      Buy, Sell, And Trade On The Go
                    </h6>
                    <p className="text">
                      Managa your holdings from your mobile decive
                    </p>
                  </li>
                  <li>
                    <h6 className="title">
                      <span className="icon-check" />
                      Take Control Of Your Wealth
                    </h6>
                    <p className="text">
                      Rest assured you (and only you) have access to your funds
                    </p>
                  </li>
                </ul>
                <div className="group-button">
                  <a href="#">
                    <img src={googleplay} alt />
                  </a>
                  <a href="#">
                    <img src={appstore} alt />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="download__image">
                <div className="button">Scan To Download</div>
                <img src={download} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h3 className="heading">Our customers love what we do</h3>
                <h6 className="fs-20">
                  Transform Your idea into Reality With Finsweet
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="swiper swiper-thumb1">
                  <div className="swiper-wrapper list-img">
                    <div className="swiper-slide">
                      <img src={avt_02} alt />
                    </div>
                    <div className="swiper-slide">
                      <img src={avt_03} alt />
                    </div>
                    <div className="swiper-slide">
                      <img src={avt_04} alt />
                    </div>
                  </div>
                </div>
                <div className="couter">
                  <h6>30+</h6>
                  <p className="title">Customer Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="swiper swiper-testimonial-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonials-box">
                      <span className="icon-quote" />
                      <h6 className="text">
                        “Great course I really enjoyed it and the course was way
                        easy to learn with very good explanations of the code, I
                        could easily understand and develop applications with
                        the knowledge gathered during the course.”
                      </h6>
                      <div className="bottom">
                        <div className="info">
                          <img src={avt_02} alt />
                          <div className="content">
                            <h6 className="name">Johnny Andro</h6>
                            <p className="position">Director, Company</p>
                          </div>
                        </div>
                        <img src={logo_05} alt />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-box">
                      <span className="icon-quote" />
                      <h6 className="text">
                        “Great course I really enjoyed it and the course was way
                        easy to learn with very good explanations of the code, I
                        could easily understand and develop applications with
                        the knowledge gathered during the course.”
                      </h6>
                      <div className="bottom">
                        <div className="info">
                          <img src={avt_03} alt />
                          <div className="content">
                            <h6 className="name">Johnny Andro</h6>
                            <p className="position">Director, Company</p>
                          </div>
                        </div>
                        <img src={logo_05} alt />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonials-box">
                      <span className="icon-quote" />
                      <h6 className="text">
                        “Great course I really enjoyed it and the course was way
                        easy to learn with very good explanations of the code, I
                        could easily understand and develop applications with
                        the knowledge gathered during the course.”
                      </h6>
                      <div className="bottom">
                        <div className="info">
                          <img src={avt_04} alt />
                          <div className="content">
                            <h6 className="name">Johnny Andro</h6>
                            <p className="position">Director, Company</p>
                          </div>
                        </div>
                        <img src={logo_05} alt />
                      </div>
                    </div>
                  </div>
                </div>
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
                  <a href="index.html" className="logo">
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
      {/* Swiper JS */}
    </div>
  );
};

export default Home;
