import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import "./Packages.css";

const Packages = () => {
  return (
    <>
      <Row className="main_row_for_packages">
        <Col lg={24} xs={24}>
          <h1 className="main_head_package">The Groom Room Packages</h1>
        </Col>
      </Row>
      <Row className="main_row_for_packages_cards">
        <Col lg={6} xs={24} className="card_packges">
        <div className="img_div_zero"></div>

        
          <h2 className="card_text">Flea and Tick Treatments</h2>
          <div className="card_price">
            <p className="price1">1215ABXC</p>
            <p className="price2">$45.99</p>
          </div>
          <div className="hr_row"></div>
          <div className="footer_div">
            <div className="clock_div">
            <img
            src="assets/packages/Group.svg"
            alt="first_side_img"
            style={{width:22, height:22}}
          />
          <p className="time_para">30 Minutes</p>
            </div>
            <div className="clock_div_right">
            <img
            src="assets/packages/Vector (14).svg"
            alt="first_side_img"
            style={{width:22, height:22}}
          />
          <p className="time_para">Dog</p>

            </div>

          </div>
          <div className="last_btn">
          <Button block className="btn_last">Order Now <RightOutlined style={{fontSize:13}}/>  </Button>
          </div>
        </Col>

        <Col lg={6} xs={24} className="card_packges">
        <div className="img_div_1"></div>

          {/* <img
            src="assets/packages/image 12.svg"
            alt="first_side_img"
            className="card_img"
          /> */}
          <h2 className="card_text">Haircut</h2>
          <div className="card_price">
            <p className="price1">1215ABXC</p>
            <p className="price2">$15.99</p>
          </div>
          <div className="hr_row"></div>
          <div className="footer_div">
            <div className="clock_div">
            <img
            src="assets/packages/Group.svg"
            alt="first_side_img"
            style={{width:22, height:22}}
          />
          <p className="time_para">15 Minutes</p>
            </div>
            <div className="clock_div_right">
            <img
            src="assets/packages/Vector (14).svg"
            alt="first_side_img"
            style={{width:22, height:22}}
          />
          <p className="time_para">Dog</p>

            </div>

          </div>
          <div className="last_btn">
          <Button block className="btn_last">Order Now <RightOutlined style={{fontSize:13}}/>  </Button>
          </div>
        </Col>



        <Col lg={6} xs={24} className="card_packges">
          {/* <img
            src="assets/packages/image 13.svg"
            alt="first_side_img"
            className="card_img"
          /> */}
          <div className="img_div"></div>
          <h2 className="card_text">Teeth Brushing</h2>
          <div className="card_price">
            <p className="price1">1215ABXC</p>
            <p className="price2">$30.99</p>
          </div>
          <div className="hr_row"></div>
          <div className="footer_div">
            <div className="clock_div">
            <img
            src="assets/packages/Group.svg"
            alt="first_side_img"
            style={{width:22, height:22}}
          />
          <p className="time_para">45 Minutes</p>
            </div>
            <div className="clock_div_right">
            <img
            src="assets/packages/Vector (14).svg"
            alt="first_side_img"
            style={{width:22, height:22}}
          />
          <p className="time_para">Dog</p>

            </div>

          </div>
          <div className="last_btn">
          <Button block className="btn_last">Order Now <RightOutlined style={{fontSize:13}}/>  </Button>
          </div>
        </Col>
        {/* <Col lg={7}></Col>
        <Col lg={7}></Col> */}
      </Row>
    </>
  );
};
export default Packages;
