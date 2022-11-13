"use client"; 
import React, { useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ToggleButton = styled.button`
  outline: none;
  border: none;
  background: none; 
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <ToggleButton>
            <FaIcons.FaBars onClick={toggleSidebar}/>
          </ToggleButton>
        </Nav>
        <SidebarNav sidebar={ sidebar }>
          <SidebarWrap>
            <ToggleButton>
              <AiIcons.AiOutlineClose onClick={toggleSidebar}/>
            </ToggleButton>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} toggleSidebar={toggleSidebar}/>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};