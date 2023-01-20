import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <>
      <Row className="main_row_copyright">
        <Col lg={6}>
          <ul className="main_list_copy_footer">
            <li>
              <Link to="/" className="list_content_footer_left">
                Order
              </Link>
            </li>

            <li>
              <Link to="/" className="list_content_footer_left">
                Offer
              </Link>
            </li>

            <li>
              <Link to="/" className="list_content_footer_left">
                About Us
              </Link>
            </li>
          </ul>
        </Col>
        <Col lg={10} className="main_payment_icon">
          <img src="assets/copy_right/image 17.svg" alt="first_side_img" />
          <img src="assets/copy_right/image 18.svg" alt="first_side_img" />
        </Col>
        <Col lg={8}>
          <p className="copy_right_text">
            Copyright © 2022 Groomroomsa All Right Reserved
          </p>
        </Col>
      </Row>
    </>
  );
};
export default CopyRight;
