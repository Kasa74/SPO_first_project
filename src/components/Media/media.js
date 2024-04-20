import common from "../../common.module.css";
import media from "./media.module.css";
import media_img from "../../img/media_content.png";
const Media = () => {
  return (
    <section className={media.media}>
      <div className={common.container_1300px}>
        <div className={media.media_content}>
          <img alt="media content" src={media_img} />
        </div>
      </div>
    </section>
  );
};

export default Media;
