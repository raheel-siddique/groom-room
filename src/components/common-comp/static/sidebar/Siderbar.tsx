import React from "react";
import { LogoutOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import "./Sidebar.css";

const Sidebar=()=>{
    return(
        <>
        <div className="main_sidebar_box">
            <div className="main_avatar_box">
                <div className="avatar_main">
                <img
              style={{cursor:"pointer", width:76, height:76}}
             
                  src="assets/nav/profileavtar.svg"
                //   width="40"
                //   height="30"
                  alt="logo-img"
                />
                </div>
                <div className="text_box">
                    <p className="avatar_text">John Mari</p>
                    <Button className="avatar_logout" type="link" icon={<LogoutOutlined  />}>
        Logout
      </Button>

                </div>

            </div>
            <div style={{marginTop:20, marginLeft:37}}>
                <hr className="horizontal_row" />
            </div>
           <div className="menu_sidebar_list"  style={{marginTop:40}}>
            <ul className="menu_list">
                <li className="side_menu_text"> <img 
                  src="assets/side_menu/Group 3356.svg"
                
                 alt="first_side_img" /> <span>Users Managements</span>  
                 
                 </li>
                 <li className="side_menu_text"> <img 
                  src="assets/side_menu/Vector (5).svg"
                
                 alt="first_side_img" /> <span>Payment
                 </span>  
                 
                 </li>
                 <li className="side_menu_text"> <img 
                  src="assets/side_menu/Vector (6).svg"
                
                 alt="first_side_img" /> <span>Orders</span>  
                 
                 </li>
                 <li className="side_menu_text"> <img 
                  src="assets/side_menu/Vector (7).svg"
                
                 alt="first_side_img" /> <span>Promo Codes</span>  
                 
                 </li>
                 <li className="side_menu_text"> <img 
                  src="assets/side_menu/Group 4279.svg"
                
                 alt="first_side_img" /> <span>Order’s Schedule</span>  
                 
                 </li>


            </ul>
           </div>
        </div>
        </>
    )
}

export default Sidebar
