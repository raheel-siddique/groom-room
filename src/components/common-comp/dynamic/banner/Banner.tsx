import { RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Row className="main_box_banner">
        <Col lg={14} xs={24} className="main_left_content_box">
          <h1 className="heading_banner">The Groom Room</h1>
          <p className="para_banner">Health and Hygiene for Your Pets</p>
          <button className="btn_banner">
            Explore more{" "}
            <RightOutlined
              style={{ fontSize: 12, paddingTop: 2, paddingLeft: 2 }}
            />
          </button>
        </Col>
        <Col lg={10} xs={22} className="main_right_content_box">
          <img src="assets/banner/Group 4374-A.png" alt="first_side_img" className="banner_img" />
        </Col>
      </Row>
    </>
  );
};
export default Banner;
