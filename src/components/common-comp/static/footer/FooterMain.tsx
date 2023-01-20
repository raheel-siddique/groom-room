import { Col, Row } from "antd";
import CopyRight from "./CopyRight";
import "./Footer.css";

const FooterMain = () => {
  return (
    <>
      <Row className="main_row_footer">
        <Col lg={14} className="main_footer_left">
          <Row className="heading_main">
            <Col>
              <h1 className="heading_main_contact">Contact Information</h1>
            </Col>
          </Row>
          <Row style={{ gap: 20, marginTop: 20 }}>
            <Col>
              <li className="footer_text">
                {" "}
                <img src="assets/footer/www.svg" alt="first_side_img" />{" "}
                <span>www.groomroomsa.com</span>
              </li>
            </Col>
            <Col>
              <li className="footer_text">
                {" "}
                <img
                  src="assets/footer/message.svg"
                  alt="first_side_img"
                />{" "}
                <span>pets@groomroomsa.com</span>
              </li>
            </Col>
          </Row>

          <Row style={{ gap: 67, marginTop: 20 }}>
            <Col>
              <li className="footer_text">
                {" "}
                <img
                  src="assets/footer/twitter.svg"
                  alt="first_side_img"
                />{" "}
                <span>GroomRoom_SA</span>
              </li>
            </Col>
            <Col>
              <li className="footer_text">
                {" "}
                <img
                  src="assets/footer/logos_instagram-icon.svg"
                  alt="first_side_img"
                />
                <img src="assets/footer/Vector (12).svg" alt="first_side_img" />
                <img src="assets/footer/Vector (13).svg" alt="first_side_img" />
                <span>GroomRoom.SA</span>
              </li>
            </Col>
          </Row>

          <Row style={{ gap: 20, marginTop: 20 }}>
            <Col>
              <li className="footer_text">
                {" "}
                <img
                  src="assets/footer/fa-brands_whatsapp.svg"
                  alt="first_side_img"
                />
                <img
                  src="assets/footer/clarity_phone-handset-solid.svg"
                  alt="first_side_img"
                />
                <span>+966 500627373</span>
              </li>
            </Col>
          </Row>
        </Col>
        <Col lg={10} className="main_footer_right">
          <img src="assets/footer/car.svg" alt="first_side_img" />
        </Col>
      </Row>
      <CopyRight />
    </>
  );
};
export default FooterMain;
