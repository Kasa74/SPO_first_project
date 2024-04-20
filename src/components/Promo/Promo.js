import promo from "../../components/Promo/Promo.module.css";
import common from "../../common.module.css";
import arrow from "../../img/arrow.png";
import scroll_down from "../../img/scroll-down.svg";
import promo_right from "../../img/promo_background_right.png";
import shop_button from "../../img/shop_button.svg";
import bg_for_woman from "../../img/bg_for_woman.png";
import bg_for_man from "../../img/bg_for_man.png";
import bg_for_everyone from "../../img/bg_for_everyone.png";
const Promo = () => {
  return (
    <section className={promo.promo}>
      <div className={common.container}>
        <div className={promo.promo_content}>
          <div className={promo.promo_left}>
            <div className={promo.for_everyone}>
              <img src={bg_for_everyone} alt="bg_for_everyone" />
              <div className={promo.bold_text}>
                FOR <img src={arrow} alt="arrow" /> <br />
                EVERYONE BUT
                <br />
                NOT ANYONE
              </div>
              <div className={promo.description_text}>
                We establish personal relationships with our bootiques, to make
                <br /> sure each is vetted for a stress-free shoping experience
              </div>
            </div>
            <div className={promo.two_card_block}>
              <div className={promo.for_woman}>
                <img align="left" src={bg_for_woman} alt="bg_for_woman" />
                <div className={promo.card_block_text_woman}>
                  #FOR
                  <br />
                  WOMAN
                </div>
              </div>
              <div className={promo.for_man}>
                <img align="left" src={bg_for_man} alt="bg_for_man" />
                <div className={promo.card_block_text_man}>
                  #FOR
                  <br /> MAN
                </div>
              </div>
            </div>
          </div>
          <div className={promo.promo_right}>
            <div className={promo.promo_right_content}>
              <img align="left" alt="bg" src={promo_right} />
              <div className={promo.btn_block}>
                <div
                  className={promo.btn_learn_more}
                  onClick={window.scrollTo(1000, 0)}
                >
                  <div className={promo.btn_text}>learn more</div>
                  <img align="left" src={scroll_down} alt="scroll-down" />
                </div>
                <div className={promo.btn_shop_now}>
                  <div className={promo.btn_text}>shop now</div>
                  <img align="left" src={shop_button} alt="shop_button" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
