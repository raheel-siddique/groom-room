import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import SecondNavbar from "./components/common-comp/static/navbar/Navbar";
import SubRoutes from "./SubRoutes";
import Sidebar from "./components/common-comp/static/sidebar/Siderbar";
import FooterMain from "./components/common-comp/static/footer/FooterMain";

const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(true);
  const showHideSideBar = () => {
    setTimeout(() => {
      setIsShowSideBar(!isShowSideBar);
    }, 300);
  };

  return (
    <>
      <Layout
        style={{
          paddingInline: "none",
          padding: 0,
          margin: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Header style={{ paddingInline: "0px", backgroundColor: "#FFFFFF" }}>
          <SecondNavbar showHideSideBar={showHideSideBar} />
        </Header>
        <Layout style={{ marginTop: 80, paddingInline: "none" }}>
          {/* {isShowSideBar ? (
            <>
              <Sider
                style={{
                  overflow: "auto",
                  height: "100vh",
                  position: "sticky",
                  top: 0,
                  left: 0,
                  background: "#FFFFFF",
                }}
                width={300}
                className="siderbar_main"
              >
                <Sidebar />
              </Sider>
            </>
          ) : (
            <></>
          )} */}
          <Content style={{ paddingInline: "none" }}>
            <SubRoutes />
          </Content>
        </Layout> 
        <Footer style={{ paddingInline: "none", padding: 0, margin: "none" }}>
          <FooterMain />
        </Footer>
      </Layout>
    </>
  );
};
export default App;
