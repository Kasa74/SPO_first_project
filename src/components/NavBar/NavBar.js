import React from "react";
import search_icon from "../../img/search_icon.png";
import common from "../../common.module.css";
import styles from "./NavBar.module.css";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import {
  BASKET_ROUTE,
  DISCOVER_PAGE,
  KIDS_PAGE,
  LOGIN_ROUTE,
  MENSWEAR_PAGE,
  SALE_PAGE,
  SHOP_ROUTE,
  WOMENSWEAR_PAGE,
} from "../../utils/consts";

const NavBar = observer(() => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const { user } = useContext(Context);

  return (
    <header className={styles.header}>
      <div className={common.container}>
        <nav className={styles.navbar}>
          <div className={styles.burger_menu}>
            <span className={styles.burger_span}></span>
          </div>
          <Link to={SHOP_ROUTE} className={styles.logo}>
            <svg
              width="86"
              height="54"
              viewBox="0 0 86 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.787865 7.49666C0.583603 7.49666 0.481473 6.86459 0.481473 5.60045C0.481473 2.1608 0.758685 0.440982 1.31311 0.440982H15.2758C15.4801 0.440982 15.9324 1.08775 16.6327 2.38129C17.333 3.67483 17.6832 4.4098 17.6832 4.58619C17.6832 4.73319 17.6686 4.82138 17.6394 4.85078L9.14798 15.6107L16.764 15.0815C17.2309 15.0815 17.4643 16.1252 17.4643 18.2125C17.4643 19.0062 17.3914 19.9176 17.2455 20.9466C17.0996 21.9755 16.8515 22.49 16.5014 22.49H2.4949C2.0572 22.49 1.53196 21.755 0.919175 20.2851C0.306392 18.8151 0 17.9332 0 17.6392C0 17.3158 0.0291802 17.1247 0.0875405 17.0659L8.44766 7.23207L0.787865 7.49666Z"
                fill="black"
              />
              <path
                d="M24.3845 6.48241C23.5674 5.01247 23.1589 3.82183 23.1589 2.91047C23.1589 1.96971 23.4069 1.36704 23.903 1.10245C25.5663 0.367484 27.8423 0 30.7312 0C33.6492 0 35.7064 0.690869 36.9028 2.07261C38.0992 3.42495 38.6973 5.43875 38.6973 8.11403V15.0815H40.1855C40.6816 15.0815 41.0609 15.3755 41.3236 15.9635C41.6154 16.5515 41.7613 17.3599 41.7613 18.3889C41.7613 19.4178 41.4986 20.4321 40.9734 21.4316C40.4773 22.4312 39.7916 22.931 38.9162 22.931C37.3405 22.931 36.0711 22.5047 35.1082 21.6521C34.6705 21.2993 34.3349 20.8731 34.1015 20.3733C32.7592 22.0784 30.6728 22.931 27.8423 22.931C25.7122 22.931 23.9176 22.1666 22.4586 20.6379C20.9996 19.1091 20.2701 17.3011 20.2701 15.2138C20.2701 10.4218 23.1151 8.02584 28.8053 8.02584H31.2126V7.58486C31.2126 6.82049 31.0813 6.33541 30.8187 6.12962C30.5853 5.89443 30.0162 5.77684 29.1117 5.77684C28.0028 5.77684 26.4271 6.01203 24.3845 6.48241ZM27.8861 14.5964C27.8861 15.2432 28.0612 15.743 28.4113 16.0958C28.7615 16.4192 29.1992 16.5808 29.7244 16.5808C30.2789 16.5808 30.7749 16.3604 31.2126 15.9194V12.5238H29.9871C28.5864 12.5238 27.8861 13.2147 27.8861 14.5964Z"
                fill="black"
              />
              <path
                d="M45.0266 7.49666C44.8223 7.49666 44.7202 6.86459 44.7202 5.60045C44.7202 2.1608 44.9974 0.440982 45.5518 0.440982H59.5145C59.7188 0.440982 60.1711 1.08775 60.8714 2.38129C61.5718 3.67483 61.9219 4.4098 61.9219 4.58619C61.9219 4.73319 61.9073 4.82138 61.8781 4.85078L53.3867 15.6107L61.0027 15.0815C61.4696 15.0815 61.7031 16.1252 61.7031 18.2125C61.7031 19.0062 61.6301 19.9176 61.4842 20.9466C61.3383 21.9755 61.0903 22.49 60.7401 22.49H46.7336C46.2959 22.49 45.7707 21.755 45.1579 20.2851C44.5451 18.8151 44.2387 17.9332 44.2387 17.6392C44.2387 17.3158 44.2679 17.1247 44.3263 17.0659L52.6864 7.23207L45.0266 7.49666Z"
                fill="black"
              />
              <path
                d="M68.6232 6.48241C67.8062 5.01247 67.3976 3.82183 67.3976 2.91047C67.3976 1.96971 67.6457 1.36704 68.1417 1.10245C69.805 0.367484 72.0811 0 74.9699 0C77.8879 0 79.9451 0.690869 81.1415 2.07261C82.3379 3.42495 82.9361 5.43875 82.9361 8.11403V15.0815H84.4243C84.9203 15.0815 85.2997 15.3755 85.5623 15.9635C85.8541 16.5515 86 17.3599 86 18.3889C86 19.4178 85.7374 20.4321 85.2121 21.4316C84.7161 22.4312 84.0303 22.931 83.1549 22.931C81.5792 22.931 80.3099 22.5047 79.3469 21.6521C78.9092 21.2993 78.5736 20.8731 78.3402 20.3733C76.9979 22.0784 74.9115 22.931 72.0811 22.931C69.9509 22.931 68.1563 22.1666 66.6973 20.6379C65.2383 19.1091 64.5088 17.3011 64.5088 15.2138C64.5088 10.4218 67.3539 8.02584 73.044 8.02584H75.4514V7.58486C75.4514 6.82049 75.3201 6.33541 75.0574 6.12962C74.824 5.89443 74.255 5.77684 73.3504 5.77684C72.2415 5.77684 70.6658 6.01203 68.6232 6.48241ZM72.1248 14.5964C72.1248 15.2432 72.2999 15.743 72.6501 16.0958C73.0002 16.4192 73.4379 16.5808 73.9632 16.5808C74.5176 16.5808 75.0137 16.3604 75.4514 15.9194V12.5238H74.2258C72.8252 12.5238 72.1248 13.2147 72.1248 14.5964Z"
                fill="black"
              />
              <path
                d="M1.79458 45.6214C4.15817 47.0619 6.0257 47.7822 7.39717 47.7822C8.27258 47.7822 8.71028 47.4735 8.71028 46.8561C8.71028 46.4151 7.9516 45.8419 6.43423 45.1363C2.78671 43.637 0.962946 41.1822 0.962946 37.7719C0.962946 35.5964 1.75081 33.9354 3.32654 32.7889C4.90227 31.6423 6.78439 31.069 8.9729 31.069C11.1906 31.069 13.0581 31.3042 14.5755 31.7746C16.122 32.245 16.8953 32.8624 16.8953 33.6267C16.8953 34.2735 16.5743 35.1261 15.9324 36.1844C15.3196 37.2428 14.8965 37.816 14.663 37.9042C13.4083 37.1987 12.0514 36.8459 10.5924 36.8459C9.80454 36.8459 9.4106 37.1252 9.4106 37.6837C9.4106 38.0365 9.55651 38.3452 9.84831 38.6098C10.1693 38.845 10.7383 39.1537 11.5553 39.5359C12.3724 39.8886 13.0435 40.212 13.5688 40.506C14.1232 40.8 14.736 41.2116 15.4071 41.7408C16.8078 42.8579 17.5081 44.3131 17.5081 46.1065C17.5081 48.4584 16.7348 50.3693 15.1883 51.8392C13.6417 53.2797 11.3073 54 8.18504 54C6.11325 54 4.23112 53.6472 2.53867 52.9417C0.846225 52.2361 0 51.2659 0 50.0312C0 49.208 0.189671 48.3408 0.569013 47.4294C0.977536 46.518 1.38606 45.9154 1.79458 45.6214Z"
                fill="black"
              />
              <path
                d="M24.2135 37.5514C23.3965 36.0815 22.9879 34.8909 22.9879 33.9795C22.9879 33.0388 23.236 32.4361 23.732 32.1715C25.3953 31.4365 27.6713 31.069 30.5602 31.069C33.4782 31.069 35.5354 31.7599 36.7318 33.1417C37.9282 34.494 38.5264 36.5078 38.5264 39.1831V46.1506H40.0146C40.5106 46.1506 40.89 46.4445 41.1526 47.0325C41.4444 47.6205 41.5903 48.429 41.5903 49.4579C41.5903 50.4869 41.3277 51.5011 40.8024 52.5007C40.3064 53.5002 39.6206 54 38.7452 54C37.1695 54 35.9002 53.5737 34.9372 52.7212C34.4995 52.3684 34.1639 51.9421 33.9305 51.4423C32.5882 53.1474 30.5018 54 27.6713 54C25.5412 54 23.7466 53.2356 22.2876 51.7069C20.8286 50.1782 20.0991 48.3702 20.0991 46.2829C20.0991 41.4909 22.9442 39.0949 28.6343 39.0949H31.0417V38.6539C31.0417 37.8895 30.9103 37.4045 30.6477 37.1987C30.4143 36.9635 29.8453 36.8459 28.9407 36.8459C27.8318 36.8459 26.2561 37.0811 24.2135 37.5514ZM27.7151 45.6655C27.7151 46.3123 27.8902 46.812 28.2404 47.1648C28.5905 47.4882 29.0282 47.6499 29.5535 47.6499C30.1079 47.6499 30.604 47.4294 31.0417 46.9884V43.5929H29.8161C28.4154 43.5929 27.7151 44.2837 27.7151 45.6655Z"
                fill="black"
              />
              <path
                d="M45.8623 45.6214C48.2259 47.0619 50.0935 47.7822 51.4649 47.7822C52.3403 47.7822 52.778 47.4735 52.778 46.8561C52.778 46.4151 52.0193 45.8419 50.502 45.1363C46.8545 43.637 45.0307 41.1822 45.0307 37.7719C45.0307 35.5964 45.8186 33.9354 47.3943 32.7889C48.97 31.6423 50.8521 31.069 53.0407 31.069C55.2583 31.069 57.1259 31.3042 58.6432 31.7746C60.1898 32.245 60.9631 32.8624 60.9631 33.6267C60.9631 34.2735 60.6421 35.1261 60.0001 36.1844C59.3873 37.2428 58.9642 37.816 58.7308 37.9042C57.476 37.1987 56.1192 36.8459 54.6602 36.8459C53.8723 36.8459 53.4784 37.1252 53.4784 37.6837C53.4784 38.0365 53.6243 38.3452 53.9161 38.6098C54.237 38.845 54.8061 39.1537 55.6231 39.5359C56.4401 39.8886 57.1113 40.212 57.6365 40.506C58.191 40.8 58.8037 41.2116 59.4749 41.7408C60.8755 42.8579 61.5759 44.3131 61.5759 46.1065C61.5759 48.4584 60.8026 50.3693 59.256 51.8392C57.7095 53.2797 55.3751 54 52.2528 54C50.181 54 48.2989 53.6472 46.6064 52.9417C44.914 52.2361 44.0678 51.2659 44.0678 50.0312C44.0678 49.208 44.2574 48.3408 44.6368 47.4294C45.0453 46.518 45.4538 45.9154 45.8623 45.6214Z"
                fill="black"
              />
              <path
                d="M68.2812 37.5514C67.4642 36.0815 67.0557 34.8909 67.0557 33.9795C67.0557 33.0388 67.3037 32.4361 67.7998 32.1715C69.463 31.4365 71.7391 31.069 74.6279 31.069C77.546 31.069 79.6032 31.7599 80.7995 33.1417C81.9959 34.494 82.5941 36.5078 82.5941 39.1831V46.1506H84.0823C84.5784 46.1506 84.9577 46.4445 85.2203 47.0325C85.5121 47.6205 85.658 48.429 85.658 49.4579C85.658 50.4869 85.3954 51.5011 84.8702 52.5007C84.3741 53.5002 83.6884 54 82.813 54C81.2372 54 79.9679 53.5737 79.005 52.7212C78.5673 52.3684 78.2317 51.9421 77.9982 51.4423C76.656 53.1474 74.5696 54 71.7391 54C69.6089 54 67.8144 53.2356 66.3554 51.7069C64.8964 50.1782 64.1668 48.3702 64.1668 46.2829C64.1668 41.4909 67.0119 39.0949 72.702 39.0949H75.1094V38.6539C75.1094 37.8895 74.9781 37.4045 74.7155 37.1987C74.482 36.9635 73.913 36.8459 73.0084 36.8459C71.8996 36.8459 70.3239 37.0811 68.2812 37.5514ZM71.7829 45.6655C71.7829 46.3123 71.9579 46.812 72.3081 47.1648C72.6583 47.4882 73.096 47.6499 73.6212 47.6499C74.1756 47.6499 74.6717 47.4294 75.1094 46.9884V43.5929H73.8839C72.4832 43.5929 71.7829 44.2837 71.7829 45.6655Z"
                fill="black"
              />
            </svg>
          </Link>
          {/*  */}
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link to={MENSWEAR_PAGE} className={styles.navLinks}>
                MENSWEAR
              </Link>
              {/* dropdown sublist menu */}
              <div className={styles.dropdown_sublist}>
                <div className={common.container}>
                  <nav className={styles.dropdown_sublist__menu}>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link to={WOMENSWEAR_PAGE} className={styles.navLinks}>
                WOMENSWEAR
              </Link>
              <div className={styles.dropdown_sublist}>
                <div className={common.container}>
                  <nav className={styles.dropdown_sublist__menu}>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <Link to={KIDS_PAGE} className={styles.navLinks}>
                KIDS
              </Link>
              <div className={styles.dropdown_sublist}>
                <div className={common.container}>
                  <nav className={styles.dropdown_sublist__menu}>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link to={SALE_PAGE} className={styles.navLinks}>
                SALE
              </Link>
              <div className={styles.dropdown_sublist}>
                <div className={common.container}>
                  <nav className={styles.dropdown_sublist__menu}>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link to={DISCOVER_PAGE} className={styles.navLinks}>
                DISCOVER
              </Link>
              <div className={styles.dropdown_sublist}>
                <div className={common.container}>
                  <nav className={styles.dropdown_sublist__menu}>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.dropdown_sublist__row}>
                      <a href="2" className={styles.dropdown_sublist__title}>
                        Все бренды
                      </a>
                      <ul className={styles.dropdown_sublist__list}>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            Abiboss(Hugo)
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            All cash
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            SASA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZAZA
                          </a>
                        </li>
                        <li className={styles.dropdown_sublist__item}>
                          <a href="1" className={styles.dropdown_sublist__link}>
                            ZNY
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </li>
          </ul>

          {/*  */}
          <div className={styles.search_liked_mail}>
            <div className={styles.search_box}>
              <img src={search_icon} alt="search_btn" />
              <input
                type="text"
                className={styles.search_txt}
                placeholder="Search"
              ></input>
            </div>
            <Link to={BASKET_ROUTE}>
              <svg
                className={styles.search_liked_mail_icon}
                width="35"
                height="30"
                viewBox="0 0 45 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M38.5289 2.82608C36.5921 1.22627 34.1047 0.347083 31.5265 0.347083C28.5486 0.347083 25.6659 1.52932 23.6189 3.59427C23.2509 3.96604 22.9059 4.36511 22.5821 4.79854C20.0753 1.46765 15.8868 -0.241392 11.7442 0.514465C8.30651 1.1373 5.60387 3.02342 3.71651 6.11644C1.05357 10.4833 0.835631 14.6952 3.0724 18.6357C4.26798 20.7438 5.81916 22.7982 7.81504 24.916C11.4706 28.7957 15.7977 32.4781 21.4333 36.5005C21.7933 36.7586 22.1789 36.889 22.5812 36.889C23.2006 36.889 23.6189 36.5763 23.8262 36.423C28.9112 32.7978 32.9056 29.4564 36.398 25.9018C38.348 23.9178 40.5609 21.4794 42.1792 18.4339C42.8727 17.1327 43.6633 15.3814 43.6165 13.3808C43.5124 9.07556 41.8015 5.52444 38.5289 2.82608ZM39.5303 17.0297C38.0895 19.7377 36.0565 21.9727 34.2565 23.8033C31.0271 27.091 27.3345 30.2026 22.5759 33.633C17.3974 29.8925 13.3889 26.4576 10.0006 22.8598C8.17151 20.9191 6.75887 19.0541 5.68151 17.1557C3.97592 14.1516 4.16563 11.137 6.27975 7.67308C7.7021 5.34032 9.72092 3.92199 12.2815 3.45773C12.7721 3.36787 13.2689 3.32382 13.7586 3.32382C16.7939 3.32382 19.4824 4.99763 21.0009 7.90389L21.2586 8.3893C21.5233 8.88527 22.0686 9.16718 22.6068 9.18039C23.1706 9.16982 23.6797 8.84828 23.9277 8.34261C24.4606 7.25728 25.0421 6.41508 25.7515 5.69799C27.2392 4.19949 29.3436 3.3388 31.5265 3.3388C33.4086 3.3388 35.2165 3.97573 36.6186 5.1333C39.2268 7.2837 40.5345 10.0058 40.6183 13.4486C40.6474 14.748 40.0853 15.9866 39.5303 17.0297Z" />
              </svg>
            </Link>
            <Link to={BASKET_ROUTE}>
              <svg
                className={styles.search_liked_mail_icon}
                width="35"
                height="30"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.1585 35.75H7.53347C6.38602 35.7497 5.25378 35.4875 4.22311 34.9831C3.19245 34.4788 2.29058 33.7457 1.58629 32.8398C0.882012 31.9339 0.393923 30.8792 0.159257 29.756C-0.0754082 28.6328 -0.050452 27.4708 0.232222 26.3587L4.41222 9.29497C4.4875 8.9899 4.66501 8.7198 4.91519 8.52967C5.16537 8.33953 5.47312 8.24082 5.78722 8.24997H28.8185C29.1218 8.23609 29.4211 8.32298 29.6699 8.49709C29.9186 8.6712 30.1027 8.92274 30.1935 9.21247L35.391 25.9325C35.7463 27.0681 35.8282 28.2717 35.6298 29.4449C35.4315 30.6182 34.9586 31.728 34.2497 32.6837C33.5525 33.6435 32.6358 34.4226 31.5762 34.956C30.5165 35.4894 29.3447 35.7616 28.1585 35.75ZM6.81847 11L2.84472 27.0187C2.66777 27.7255 2.65359 28.4632 2.80325 29.1762C2.95292 29.8892 3.26252 30.559 3.70871 31.1349C4.15491 31.7109 4.72605 32.178 5.37906 32.5011C6.03208 32.8241 6.74993 32.9947 7.47847 33H28.1035C28.8518 33.0012 29.5897 32.8248 30.2566 32.4854C30.9235 32.146 31.5003 31.6532 31.9397 31.0475C32.3918 30.4383 32.6935 29.7309 32.8201 28.983C32.9467 28.235 32.8948 27.4678 32.6685 26.7437L27.8285 11H6.81847Z" />
                <path d="M23.3185 19.25C22.9538 19.25 22.6041 19.1051 22.3462 18.8473C22.0883 18.5894 21.9435 18.2397 21.9435 17.875V6.875C21.9435 5.78098 21.5089 4.73177 20.7353 3.95818C19.9617 3.1846 18.9125 2.75 17.8185 2.75C16.7245 2.75 15.6753 3.1846 14.9017 3.95818C14.1281 4.73177 13.6935 5.78098 13.6935 6.875V17.875C13.6935 18.2397 13.5486 18.5894 13.2908 18.8473C13.0329 19.1051 12.6832 19.25 12.3185 19.25C11.9538 19.25 11.6041 19.1051 11.3462 18.8473C11.0883 18.5894 10.9435 18.2397 10.9435 17.875V6.875C10.9435 5.05164 11.6678 3.30295 12.9571 2.01364C14.2464 0.724328 15.9951 0 17.8185 0C19.6418 0 21.3905 0.724328 22.6798 2.01364C23.9692 3.30295 24.6935 5.05164 24.6935 6.875V17.875C24.6935 18.2397 24.5486 18.5894 24.2908 18.8473C24.0329 19.1051 23.6832 19.25 23.3185 19.25Z" />
              </svg>
            </Link>
            <Link to={LOGIN_ROUTE}>
              <svg
                className={styles.search_liked_mail_icon}
                width="35"
                height="30"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 2.41304C22.7651 2.41773 26.8542 4.1141 29.87 7.12998C32.8859 10.1459 34.5823 14.2349 34.587 18.5C34.5947 21.0884 33.9707 23.6396 32.7691 25.9322C31.606 28.1497 29.9467 30.0688 27.9205 31.5401C25.1788 33.5208 21.8824 34.5869 18.5 34.5869C15.1176 34.5869 11.8213 33.5208 9.07949 31.5401C7.05238 30.0693 5.39248 28.1501 4.22927 25.9322C3.02828 23.6394 2.40484 21.0882 2.41305 18.5C2.41774 14.2349 4.11411 10.1459 7.12998 7.12998C10.1459 4.1141 14.2349 2.41773 18.5 2.41304ZM18.5 0C14.8411 0 11.2643 1.08501 8.22196 3.11781C5.17965 5.15062 2.80846 8.03992 1.40824 11.4204C0.00801574 14.8008 -0.358346 18.5205 0.355481 22.1092C1.06931 25.6978 2.83126 28.9942 5.41853 31.5815C8.0058 34.1687 11.3022 35.9307 14.8908 36.6445C18.4795 37.3583 22.1992 36.992 25.5796 35.5918C28.9601 34.1915 31.8494 31.8204 33.8822 28.778C35.915 25.7357 37 22.159 37 18.5C37 13.5935 35.0509 8.88795 31.5815 5.41852C28.1121 1.9491 23.4065 0 18.5 0Z" />
                <path d="M19.6695 23.3389C21.5924 23.3414 23.4357 24.1065 24.7952 25.4663C26.1547 26.8261 26.9194 28.6696 26.9215 30.5925V32.2012C24.3873 33.7559 21.4723 34.5788 18.4992 34.5788C15.5261 34.5788 12.6111 33.7559 10.0769 32.2012V30.5925C10.079 28.6696 10.8437 26.8261 12.2032 25.4663C13.5627 24.1065 15.406 23.3414 17.3289 23.3389H19.6695ZM19.6695 20.9258H17.3289C16.0595 20.9258 14.8026 21.1759 13.6298 21.6617C12.4571 22.1475 11.3916 22.8596 10.4941 23.7572C9.59657 24.6549 8.88468 25.7205 8.39906 26.8933C7.91344 28.0661 7.66361 29.3231 7.66382 30.5925V33.4881C10.8172 35.7668 14.6087 36.9933 18.4992 36.9933C22.3897 36.9933 26.1812 35.7668 29.3346 33.4881V30.5925C29.3348 29.3231 29.0849 28.0661 28.5993 26.8933C28.1137 25.7205 27.4018 24.6549 26.5043 23.7572C25.6068 22.8596 24.5413 22.1475 23.3685 21.6617C22.1958 21.1759 20.9389 20.9258 19.6695 20.9258Z" />
                <path d="M18.5 11.7934C19.0988 11.7934 19.6842 11.971 20.1822 12.3037C20.6801 12.6364 21.0681 13.1094 21.2972 13.6627C21.5263 14.216 21.5862 14.8248 21.4692 15.4122C21.3523 15.9995 21.0638 16.539 20.6402 16.9623C20.2166 17.3856 19.677 17.6739 19.0896 17.7905C18.5022 17.9071 17.8934 17.847 17.3402 17.6176C16.7871 17.3882 16.3143 16.9999 15.9818 16.5018C15.6494 16.0037 15.4721 15.4182 15.4724 14.8193C15.4732 14.0168 15.7925 13.2473 16.3602 12.68C16.9278 12.1127 17.6974 11.7938 18.5 11.7934ZM18.5 9.38031C17.4238 9.37999 16.3717 9.69885 15.4767 10.2965C14.5818 10.8942 13.8842 11.7439 13.4722 12.7381C13.0602 13.7324 12.9523 14.8264 13.1622 15.8819C13.3721 16.9375 13.8903 17.907 14.6513 18.668C15.4122 19.429 16.3818 19.9472 17.4373 20.1571C18.4929 20.3669 19.5869 20.2591 20.5811 19.8471C21.5753 19.4351 22.425 18.7375 23.0227 17.8426C23.6204 16.9476 23.9393 15.8955 23.939 14.8193C23.9385 13.3769 23.3654 11.9937 22.3454 10.9738C21.3255 9.95391 19.9423 9.38074 18.5 9.38031Z" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
});

export default NavBar;
