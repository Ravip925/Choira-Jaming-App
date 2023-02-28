import { Duo } from "@mui/icons-material";
import "../Content/Content.css";

const FirstUser = () => {
  return (
    <div className="videobox">
      <video
        loop
        autoPlay
        width="122%"
        height="100%"
        className="box_container"
        controls
      >
        <source
          src={process.env.PUBLIC_URL + "/video-1.mp4"}
          type="video/mp4"
        ></source>
      </video>
      <div className="host">
        <span>(HOST)</span> <Duo />
      </div>

      <div className="name">
        <h3>John</h3>
      </div>
    </div>
  );
};

export default FirstUser;
