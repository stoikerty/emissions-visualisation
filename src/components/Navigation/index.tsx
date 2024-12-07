"use client";
import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
  padding: 0px 16px;
`;

const LeftItems = styled.div`
  display: flex;

  a {
    color: #ffffff;
    text-decoration: none;
    padding: 12px 16px 9px 16px;
    border-bottom: 3px solid transparent;

    &:first-of-type {
      padding: 12px 16px 9px 8px;
    }

    &:hover {
      border-color: #00eace;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 8px 12px 0;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Divider = styled.div`
  display: flex;
  margin: 12px 16px;
  border-left: 1px solid #353b3f;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
`;

const Navigation: React.FC = () => {
  return (
    <Navbar>
      <LeftItems>
        <Logo>
          <img src="/app-logo.svg" alt="ACME Logo" />
        </Logo>
        <Divider />
        <a href="/collect">Collect</a>
        <a href="/analyse">Analyse</a>
        <a href="/reduce">Reduce</a>
        <a href="/report">Report</a>
      </LeftItems>
      <User>ACME</User>
    </Navbar>
  );
};

export default Navigation;
