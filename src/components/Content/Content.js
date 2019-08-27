import React from "react";
import {Layout,Row,Col,Icon,Progress} from "antd";
import "./Content.css";
const { Content } = Layout;
export default class MyContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Content trigger={null} collapsible="false" theme="light" collapsed={this.state.collapsed}>
        <div className="div1">
          <div className="div2">
            <h2>Dashboard</h2>
          </div>
        </div>
            <Row className="row1">
              <Col span={6} className="div7">
                <div className="div3">
                  <div className="div4">
                    <Icon type="user" className="icon1"/>
                  </div>
                  <div className="div5">
                    <span>New
                      Clients</span>
                    <div>
                      <Progress percent={25} size="small" />
                    </div>
                  </div>
                  <div className="div6">
                    <span>25</span>
                  </div>
                </div>
              </Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
            </Row>
      </Content>
    );
  }
}
