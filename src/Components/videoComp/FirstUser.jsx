import { Duo } from "@mui/icons-material";
import "../Content/Content.css";

const FirstUser = () => {
  return (
    <>
      <video
        autoPlay
        width="101%"
        height="100%"
        className="box_container"
        controls
      >
        <source
          src={process.env.PUBLIC_URL + "/video-1.mp4"}
          type="video/mp4"
        ></source>
        <div className="host">
          <span>(HOST)</span> <Duo />
        </div>

        <div className="name">
          <h3>rrvj</h3>
        </div>
      </video>
    </>
  );
};

export default FirstUser;
