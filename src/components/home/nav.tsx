import React from "react";
import { Content, NavItem } from "../../styles/styled";
import { navItems } from "../../common";

const Nav: React.FC = () => {
  return (
    <Content data-testid="nav">
      {navItems.map((item, index) => (
        <NavItem key={index}>{item.name}</NavItem>
      ))}
    </Content>
  );
};
export default Nav;
