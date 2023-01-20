import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Drawer, Radio, Space } from 'antd';

import {
  Col,
//   Drawer,
  DrawerProps,
  Dropdown,
  MenuProps,
  Popover,
  Row,
//   Space,
} from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserOutlined,DownOutlined, ShoppingCartOutlined  } from '@ant-design/icons';

import { Avatar } from 'antd';

import "./Navbar.css";

interface SecondNavbarProps {
    showHideSideBar:any
}
const SecondNavbar = ({showHideSideBar}:SecondNavbarProps) => {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left')
  const [showSolutionDropDownUi, setShowSolutionDropDownUi] =
    useState<boolean>(false)
  const [showResourcesDropDownUi, setShowResourcesDropDownUi] =
    useState<boolean>(false)

  const [showPartnersDropDownUi, setShowPartnersDropDownUi] =
    useState<boolean>(false)
  const [hideFirstNavbar, setHideFirstNavbar] = useState<any>('')
  const [popOverShow, setPopOverShow] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = (event: any) => {
      console.log('window.scrollY', window.scrollY)
      setHideFirstNavbar(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const showSolutionDropDown = () => {
    setShowSolutionDropDownUi(!showSolutionDropDownUi)
  }

  const showResourcesDropDown = () => {
    setShowResourcesDropDownUi(!showResourcesDropDownUi)
  }

  const showPartnersDropDown = () => {
    setShowPartnersDropDownUi(!showPartnersDropDownUi)
  }
  

  const items: MenuProps['items'] = [
    {
      label: <Link to="/become-a-partner">Become a Partner</Link>,
      key: '0',
    },
    // {
    //   label: <Link to="/partner-policy">Partner Policy</Link>,
    //   key: '1',
    // },

    // {
    //   label: <Link to="#">Partner Portal</Link>,
    //   key: '3',
    // },
  ]

  const items2: MenuProps['items'] = [
    {
      label: <Link to="/resources/blogs">Blogs</Link>,
      key: '0',
    },
    {
      label: <Link to="/resources/whitePaper">White Papers </Link>,
      key: '1',
    },

    // {
    //   label: <Link to="/resources/ebooks">E-Books </Link>,
    //   key: '3',
    // },

    // {
    //   label: <Link to="/resources/casestudy">Case Studies </Link>,
    //   key: '4',
    // },

    {
      label: <Link to="/resources/glossary">Glossary </Link>,
      key: '5',
    },

    // {
    //   label: <Link to="/resources/videos">Videos </Link>,
    //   key: '6',
    // },
    // {
    //   label: <Link to="/resources/support">Support</Link>,
    //   key: '7',
    // },

    // {
    //   label: <Link to="/resources/announcement">Announcement</Link>,
    //   key: '8',
    // },
  ]

  const items3: MenuProps['items'] = [
    {
      label: <Link to="/resources/blogs">English</Link>,
      key: '0',
    },
    {
      label: <Link to="/resources/whitePaper">Urdu</Link>,
      key: '1',
    },

    {
      label: <Link to="/resources/ebooks">Chinese</Link>,
      key: '2',
    },
    {
      label: <Link to="/resources/ebooks">Arabic</Link>,
      key: '3',
    },
  ]

  const showModalPopOver = () => {
    setTimeout(() => {
      setPopOverShow(false)
    }, 500)
  }
  const showPopOverOnHover = () => {
    setPopOverShow(true)
  }
 

  return (
    <>
      <div className="removeScreenMargin">
        
          <Row className="main_row_for_first_navabr">
           <Col lg={6}>
            
           </Col>
           <Col lg={12}>
             <p className='top_head_left_text'>The Groom Room offers mobile pet grooming services in <span className='top_head_right_text'> Riyadh, Jeddah, and the Eastern Province.</span></p>
            </Col>
           <Col lg={6}>
            
            </Col>

          </Row>
        <div className="mobile_navbar">
          <div className="main_toggle_img_box">
            <MenuOutlined
              onClick={showDrawer}
              style={{ fontSize: 30, color: 'black' }}
            />
            <Link to="/">
              <img src="" alt="" />
            </Link>
          </div>
        </div>

        {/* Mobile Responsive */}
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <ul className="list_content_mb_nav">
            <li style={{ display: 'flex', gap: 85 }} onClick={onClose}>
              <Link to="/">
                <img
                  src="/PureDome-svg.svg"
                  width="157"
                  height="45"
                  alt="logo-img"
                />
              </Link>
              <CloseOutlined
                onClick={onClose}
                style={{
                  fontSize: 18,
                  color: 'black',
                  position: 'relative',
                  top: 10,
                }}
              />
            </li>
            <li
              onClick={showSolutionDropDown}
              className="list_content_center_mb"
            >
              Solutions
             
            </li>
          

            <li className="list_content_center_mb" onClick={onClose}>
              <Link to="/pricing">Pricing</Link>
            </li>

            <li
              onClick={showResourcesDropDown}
              className="list_content_center_mb"
            >
              <Link to="#">
                Resources
               
              </Link>
            </li>
      
            {/* </li> */}
            <li className="list_content_center_mb" onClick={onClose}>
              <Link to="/download">Download</Link>
            </li>
            <li
              onClick={showPartnersDropDown}
              className="list_content_center_mb"
            >
              Partners
            
            </li>

        
            <li className="list_content_center_mb" onClick={onClose}>
              <Link to="/contact-us">Contact Us</Link>
            </li>

            <li>
              <button
                id="request-demo"
                className="secondary_cta"
              >
                Request Demo
              </button>
            </li>
          </ul>
        </Drawer>

        <div>
          <Row
            className="responsive_navbar"
            style={{
                background: "#156BE9",
              top: hideFirstNavbar ? 0 : '',
            }}
          >
            <div className="sec_navbar">
            
              <div className='first_section_nav_logos' > 
              <img
              onClick={showHideSideBar}
              style={{cursor:"pointer"}}
             
                  src="assets/nav/Group 3208.svg"
                  width="40"
                  height="30"
                  alt="logo-img"
                />
                <Link to="/">
                <img
                  src="assets/nav/logo_main.svg"
                  width="117"
                  height="65"
                  alt="logo-img"
                  style={{display:'flex',alignItems:'center'}}
                />
                </Link>
              </div>
              <div
                className="center_list_navbar"
                style={{ position: 'relative',left: 130 }}
              >
                <ul className="list_center_content">
               

                  <li  >
                    <Link to="/"  className="list_content_menu_left">Order</Link>
                  </li>

                  <li >
                    <Link to="/" className="list_content_menu_left">Offer</Link>
                  </li>

                  <li >
                    <Link to="/" className="list_content_menu_left">About Us</Link>
                  </li>

               
                </ul>
              </div>

              <div className="last_content_right_navbar">
             <div>
             <Avatar style={{backgroundColor:"white", cursor:'pointer'}} size={40} icon={<UserOutlined  style={{color:'black'}} />} />
             <span style={{marginLeft:4, cursor:'pointer'}}>
             <DownOutlined size={17}style={{color:'white'}}  />
                
             </span>
             </div>
             <div>
                <p className='accoun_para_Logo'>Account</p>
             </div>
             
              </div>
              <div className="last_content_right_navbar_last">
   
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                <ShoppingCartOutlined  style={{marginLeft:10,fontSize:40, color:'white', cursor:'pointer'}} />
                </div>

            </div>
          </Row>
        </div>
      </div>
      <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
<Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
export default SecondNavbar
