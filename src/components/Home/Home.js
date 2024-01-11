import React from "react";
import Header from "../../layout/HomeHeader/Header";
import "./Home.css";
import Price1 from "../../assets/img/prices-btc.svg";
import Price2 from "../../assets/img/prices-eth.svg";
import Price4 from "../../assets/img/prices-sol.svg";
import Price3 from "../../assets/img/prices-xlm.svg";
const Home = () => {
  return (
    <>
      <Header />
      <div className="Containers__Container-yamifu-1 Hero__HeroContainer-qcrt3z-0 llCkQr cePXDf">
        <div className="Containers__Wrap-yamifu-7 Hero__HeroWrap-qcrt3z-1 jqlzrh cmBafN">
          <div className="Hero__Content-qcrt3z-2 ldGnJz">
            <h1 className="Text__H1-sc-1fwf07x-0 Hero__Title-qcrt3z-3 kRtqet cCjakL">
              Be early to the future of finance
            </h1>
            <p className="Text__Subtitle1-sc-1fwf07x-5 Hero__Subtitle-qcrt3z-4 hrbjxU kYEboM">
              Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a
              platform trusted by millions.
            </p>
            <form className="Hero__Form-qcrt3z-5 dKTyun">
              <label
                htmlFor="email"
                className="Hero__HiddenLabel-qcrt3z-6 icspSe"
              >
                Your email address
              </label>
              <input
                type="email"
                autoComplete="on"
                id="email"
                name="email"
                placeholder="Your email address"
                required
                className="Hero__Input-qcrt3z-7 bKwmbl"
              />
              <button
                className="Button__BaseButton-sc-1e82yhp-0 llgLia Hero__SignUpButton-qcrt3z-8 kBRaGg"
                type="button"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="Containers__Wrap-yamifu-7 pages__PricesWrap-sc-4cqbfo-0 jqlzrh eBHa-Dv">
        <div className="Prices__Wrapper-n3azef-0 lextIZ pages__CoinsPrices-sc-4cqbfo-2 bQGIkV">
          <div className="Prices__ContentContainer-n3azef-1 evZIbd">
            <div className="Prices__ScrollContainer-n3azef-4 iGlXs">
              <div className="Prices__ListContainer-n3azef-5 hIwTsa">
                <a
                  href="#"
                  className="Link__CustomLink-sc-1p80yfz-0 hDjhKH Prices__CoinCardLink-n3azef-6 lhvJwz"
                >
                  <div className="Prices__Header-n3azef-15 gqAVrV">
                    <div className="Prices__IconContainer-n3azef-16 eymRoB">
                      <img
                        alt="BTC icon"
                        src={Price1}
                        className="Prices__Icon-n3azef-17 evkPTr"
                      />
                    </div>
                    <div className="Prices__Actions-n3azef-18 bwPenO">
                      <button className="Prices__BaseButton-n3azef-8 eAgFyd">
                        Buy
                      </button>
                      <button className="Prices__BaseButton-n3azef-8 Prices__TradeButton-n3azef-9 eAgFyd eyFFcP">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div className="Prices__CoinNameContainer-n3azef-11 jVbWjV">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      Bitcoin
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__SymbolText-n3azef-12 vvWMe kmtyGJ kfPjgL kKWdjS"
                    >
                      BTC
                    </p>
                  </div>
                  <div className="Prices__Info-n3azef-7 Prices__PriceInfo-n3azef-13 jXjlIz gkFfaz">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      $41,264.80
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__PriceChangeText-n3azef-14 vvWMe kmtyGJ kfPjgL heAKQt"
                    >
                      +0.00%
                    </p>
                  </div>
                  <div className="Prices__ChartContainer-n3azef-10 juWlis">
                    <div style={{ width: "100%", height: "100%" }} />
                  </div>
                </a>
                <a
                  href="#"
                  className="Link__CustomLink-sc-1p80yfz-0 hDjhKH Prices__CoinCardLink-n3azef-6 lhvJwz"
                >
                  <div className="Prices__Header-n3azef-15 gqAVrV">
                    <div className="Prices__IconContainer-n3azef-16 eymRoB">
                      <img
                        alt="ETH icon"
                        src={Price2}
                        className="Prices__Icon-n3azef-17 evkPTr"
                      />
                    </div>
                    <div className="Prices__Actions-n3azef-18 bwPenO">
                      <button className="Prices__BaseButton-n3azef-8 eAgFyd">
                        Buy
                      </button>
                      <button className="Prices__BaseButton-n3azef-8 Prices__TradeButton-n3azef-9 eAgFyd eyFFcP">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div className="Prices__CoinNameContainer-n3azef-11 jVbWjV">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      Ethereum
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__SymbolText-n3azef-12 vvWMe kmtyGJ kfPjgL kKWdjS"
                    >
                      ETH
                    </p>
                  </div>
                  <div className="Prices__Info-n3azef-7 Prices__PriceInfo-n3azef-13 jXjlIz gkFfaz">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      $2,153.58
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__PriceChangeText-n3azef-14 vvWMe kmtyGJ kfPjgL heAKQt"
                    >
                      +0.00%
                    </p>
                  </div>
                  <div className="Prices__ChartContainer-n3azef-10 juWlis">
                    <div style={{ width: "100%", height: "100%" }} />
                  </div>
                </a>
                <a
                  href="#"
                  className="Link__CustomLink-sc-1p80yfz-0 hDjhKH Prices__CoinCardLink-n3azef-6 lhvJwz"
                >
                  <div className="Prices__Header-n3azef-15 gqAVrV">
                    <div className="Prices__IconContainer-n3azef-16 eymRoB">
                      <img
                        alt="XLM icon"
                        src={Price3}
                        className="Prices__Icon-n3azef-17 evkPTr"
                      />
                    </div>
                    <div className="Prices__Actions-n3azef-18 bwPenO">
                      <button className="Prices__BaseButton-n3azef-8 eAgFyd">
                        Buy
                      </button>
                      <button className="Prices__BaseButton-n3azef-8 Prices__TradeButton-n3azef-9 eAgFyd eyFFcP">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div className="Prices__CoinNameContainer-n3azef-11 jVbWjV">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      Stellar
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__SymbolText-n3azef-12 vvWMe kmtyGJ kfPjgL kKWdjS"
                    >
                      XLM
                    </p>
                  </div>
                  <div className="Prices__Info-n3azef-7 Prices__PriceInfo-n3azef-13 jXjlIz gkFfaz">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      $0.12
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__PriceChangeText-n3azef-14 vvWMe kmtyGJ kfPjgL heAKQt"
                    >
                      +0.00%
                    </p>
                  </div>
                  <div className="Prices__ChartContainer-n3azef-10 juWlis">
                    <div style={{ width: "100%", height: "100%" }} />
                  </div>
                </a>
                <a
                  href="#"
                  className="Link__CustomLink-sc-1p80yfz-0 hDjhKH Prices__CoinCardLink-n3azef-6 lhvJwz"
                >
                  <div className="Prices__Header-n3azef-15 gqAVrV">
                    <div className="Prices__IconContainer-n3azef-16 eymRoB">
                      <img
                        alt="SOL icon"
                        src={Price4}
                        className="Prices__Icon-n3azef-17 evkPTr"
                      />
                    </div>
                    <div className="Prices__Actions-n3azef-18 bwPenO">
                      <button className="Prices__BaseButton-n3azef-8 eAgFyd">
                        Buy
                      </button>
                      <button className="Prices__BaseButton-n3azef-8 Prices__TradeButton-n3azef-9 eAgFyd eyFFcP">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div className="Prices__CoinNameContainer-n3azef-11 jVbWjV">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      Solana
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__SymbolText-n3azef-12 vvWMe kmtyGJ kfPjgL kKWdjS"
                    >
                      SOL
                    </p>
                  </div>
                  <div className="Prices__Info-n3azef-7 Prices__PriceInfo-n3azef-13 jXjlIz gkFfaz">
                    <p className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 vvWMe kmtyGJ iRSNHM">
                      $70.71
                    </p>
                    <p
                      color="grey400"
                      className="Text__Body1-sc-1fwf07x-7 Text__Body1Highlight-sc-1fwf07x-8 Prices__Text-n3azef-3 Prices__PriceChangeText-n3azef-14 vvWMe kmtyGJ kfPjgL heAKQt"
                    >
                      +0.00%
                    </p>
                  </div>
                  <div className="Prices__ChartContainer-n3azef-10 juWlis">
                    <div style={{ width: "100%", height: "100%" }} />
                  </div>
                </a>
              </div>
            </div>
            <div className="Prices__ButtonContainer-n3azef-21 cHgCcY">
              <a
                href="#"
                className="Link__CustomLink-sc-1p80yfz-0 hDjhKH Button__BaseButton-sc-1e82yhp-0 Button__ButtonLink-sc-1e82yhp-1 evVLDw"
              >
                More Prices
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4.16797 10H15.8346"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 4.16797L15.8333 10.0013L10 15.8346"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
