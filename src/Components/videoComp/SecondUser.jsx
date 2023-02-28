import "../Content/Content.css";

const SecondUser = () => {
  return (
    <>
      <video autoPlay width="100%" height="100%" className="box_container" controls>
        <source
          src={process.env.PUBLIC_URL + "/video-1.mp4"}
          type="video/mp4"
        ></source>
        <div className="host">
          <span>(HOST)</span>
        </div>

        <div className="name">
          <h3></h3>
        </div>
      </video>
      <video autoPlay width="100%" height="100%" className="box_container" controls>
        <source
          src={process.env.PUBLIC_URL + "/video-2.mp4"}
          type="video/mp4"
        ></source>
        <div className="host">
          <span>(HOST)</span>
        </div>

        <div className="name">
          <h3></h3>
        </div>
      </video>
    </>
  );
};

export default SecondUser;
