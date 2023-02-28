import { Duo } from "@mui/icons-material";
import "../Content/Content.css";

const FourthUser = () => {
  return (
    <>
      <div className="videobox">
        <video
          autoPlay
          loop
          width="100%"
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

        <div className="name" style={{ left: "80%" }}>
          <h3>John</h3>
        </div>
      </div>
      <div className="videobox">
        <video
          autoPlay
          loop
          width="100%"
          height="100%"
          className="box_container"
          controls
        >
          <source
            src={process.env.PUBLIC_URL + "/video-2.mp4"}
            type="video/mp4"
          ></source>
        </video>

        <div className="name" style={{ left: "80%" }}>
          <h3>Chris</h3>
        </div>
      </div>
      <div className="videobox">
        <video
          autoPlay
          loop
          width="100%"
          height="100%"
          className="box_container"
          controls
        >
          <source
            src={process.env.PUBLIC_URL + "/video-3.mp4"}
            type="video/mp4"
          ></source>
        </video>

        <div className="name" style={{ left: "80%" }}>
          <h3>Jane</h3>
        </div>
      </div>
      <div className="videobox">
        <video
          autoPlay
          loop
          width="100%"
          height="100%"
          className="box_container"
          controls
        >
          <source
            src={process.env.PUBLIC_URL + "/video-4.mp4"}
            type="video/mp4"
          ></source>
        </video>

        <div className="name" style={{ left: "80%" }}>
          <h3>Sofia</h3>
        </div>
      </div>
    </>
  );
};

export default FourthUser;
