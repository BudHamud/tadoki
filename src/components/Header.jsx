import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLangContext } from "../context/LangContext";

const HeaderStyle = styled.header`
  width: 100%;
  padding: 20px 0;
  nav {
    display: flex;
    justify-content: space-around;
    ul {
      display: flex;
      gap: 20px;
      justify-content: center;
      li {
        a {
          text-decoration: none;
          color: #fff;
        }
        list-style: none;
        select {
          border: none;
          background-color: transparent;
          color: #fff;
          option {
            color: #000;
          }
        }
      }
    }
  }
`;

const Header = () => {
  const { contextLang, setContextLang } = useLangContext();

  return (
    <HeaderStyle>
      <nav>
        <h2>Tadoki Naan</h2>
        <ul>
          <li>
          <Link to={'/'}>
          {contextLang === "ES" ? "Inicio" : "Home"}
          </Link>
          </li>
          <li>
          <a href={'#portfolio'}>
          Portfolio
          </a>
          </li>
          <li>
            <a href={"#contact"}>
              {contextLang === "ES" ? "Contacto" : "Contact"}
            </a>
          </li>
          <li>
            <select
              value={contextLang}
              onChange={(e) => setContextLang(e.target.value)}
            >
              <option value={"EN"}>EN</option>
              <option value={"ES"}>ES</option>
            </select>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
