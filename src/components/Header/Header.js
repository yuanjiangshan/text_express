import React from "react";
import { Layout, Button, Icon,Badge } from "antd";
import "./Header.css";
const { Header } = Layout;
export default class MyHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collapsed: true,
      toggleCollapsedHead: props.toggleCollapsedHome
    };
  }

  toggleCollapsed() {
    let buffer = this.state.collapsed;
    if (buffer) {
      buffer = false;
    } else {
      buffer = true;
    }

    this.setState({
      collapsed: buffer
    });

    this.state.toggleCollapsedHead(buffer);
  }
  render() {
    return (
      <Header className="headBox">
        <div className="titleBox">
          <div className="title">有限公司后台管理</div>

          <Icon
            className="icon"
            onClick={this.toggleCollapsed.bind(this)}
            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
          />
        </div>
        <div className="headRight">
          <Button type="link" > 
            <Icon type="search" className="icon1"/>
          </Button>
          <Button type="link">
            <Badge count={1}>
              <Icon type="bell" className="icon3"/>
            </Badge>
          </Button>
          <Button type="link">
            <Badge count={1}>
              <Icon type="message" className="icon3"/>
            </Badge>
          </Button>        
          {/* <Icon type="bell" className="icon2"" /> */}
          
          <Button type="link" className="icon4">
            <img src="http://demo.cssmoban.com/cssthemes6/cpts_1896_dha/img/flags/16/GB.png"></img>
            <span>English</span>
            <Icon type="down" />
          </Button>
          <Button type="link" className="icon4">
            <span>English</span>
            <Icon type="logout" />
          </Button>
        </div>
      </Header>
    );
  }
}
