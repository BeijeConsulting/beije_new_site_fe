import React from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const MenuLeft = () => {
  const navigate = useNavigate();
  const goToPage = (link) => () => {
    navigate(link);
  }
    return (
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        width="250"
      >
        <Menu mode="inline" theme="dark">
          <SubMenu key={0} title="Menu">
              <Menu.Item key={1} onClick={goToPage('/')}>{'HOME'}</Menu.Item>
              <Menu.Item key={2} onClick={goToPage('/routeA')}>{'RouteA'}</Menu.Item>
              <Menu.Item key={3} onClick={goToPage('/routeB')}>{'RouteB'}</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
}

export default MenuLeft;