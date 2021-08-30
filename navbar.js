import { Layout, Menu, Breadcrumb } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

import React from 'react';
import 'antd/dist/antd.css';

export default function Navbar() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div style={{ display: 'inline-block' }} className="logo">
            <h4>Video Analytics</h4>
          </div>
          {/* <div
            style={{
              display: 'inline',
              color: 'white',
              float: 'right',
              fontSize: '18px'
            }}
          >
            <i className="fa fa-user-circle" />
            &nbsp;
            <span>surya</span>
          </div> */}
          {/* <Menu  theme="dark" mode="horizontal" style={{color:'white'}}>
            <Menu.Item >surya</Menu.Item>
            </Menu> */}
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu> */}
        </Header>
      </Layout>
    </div>
    
  );
}
