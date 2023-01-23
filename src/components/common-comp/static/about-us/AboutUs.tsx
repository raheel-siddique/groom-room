import { Col, Row } from "antd";
import "./AboutUs.css";

const AboutUs=()=>{
    return(
        <>
         <Row className="main_row_box_about">
            <Col lg={2} xs={2}></Col>
            <Col lg={10} xs={24} className='main_img_about_box'>
            <img src="assets/about-us/Group 4376.png" alt="first_side_img" className="img_aboutUsSec"/>

                {/* <div className="img_background"></div> */}
            </Col>
            <Col lg={10} xs={24} className='main_content_about_box'>
                <h1 className="head_aboutus">About Us</h1>
                <p className="para_aboutUs">The Groom Room offers mobile pet grooming services in <span style={{color:"#156BE9"}}>Riyadh, Jeddah, and the Eastern Province.</span> <br /><br /> 
Complete pet grooming includes bathing, blow drying, brushing, hair cutting as per customer request, ear cleaning, nail clipping, and rectal grooming. Our commitment is to help ensure your pet's health by providing services that promote good hygiene from nails to cuticles.</p>
            </Col>


         </Row>
        </>
    )
}

export default AboutUs