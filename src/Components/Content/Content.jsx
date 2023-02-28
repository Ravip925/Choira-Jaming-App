import { Menu, Videocam } from "@mui/icons-material";
import FirstUser from "../videoComp/FirstUser";
import FourthUser from "../videoComp/FourthUser";
import SecondUser from "../videoComp/SecondUser";
import ThirdUser from "../videoComp/ThirdUser";
import "./Content.css";

const Content = ({ users }) => {
  console.log(users)
  return (
    <>
      <div className="main">
        <div className="content_wrapper">
          <div className="content_left">
            <div>
            <div className="sidebar"></div>
              <Videocam
                style={{
                  fontSize: "2.5rem",
                  color: "orange",
                  cursor: "pointer",
                }}
              />
            </div>
            <div>
              <Menu
                style={{ fontSize: "2.5rem", color: "gray", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="content_right">
            {users ? (
              <>
                {users === "0" && <FourthUser />}
                {users === "1" && <FirstUser />}
                {users === "2" && <SecondUser />}
                {users === "3" && <ThirdUser />}
                {users === "4" && <FourthUser />}
              </>
            ) : (
              <FirstUser/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
