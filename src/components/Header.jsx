import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLangContext } from "../context/LangContext";
import { theme } from "../context/theme";

const HeaderStyle = styled.header`
  width: 100%;
  padding: 20px 0;
  position: fixed;
  top: 0;
  background-color: #222;
  z-index: 3;
  display: flex;
  justify-content: space-around;
  img {
    width: 20px;
    display: none;
    filter: invert(86%) sepia(100%) saturate(0%) hue-rotate(293deg)
      brightness(107%) contrast(101%);
  }
  nav {
    display: flex;
    ul {
      display: flex;
      gap: 20px;
      justify-content: center;
      li {
        a {
          text-decoration: none;
          color: #fff;
          &:hover {
            border-bottom: solid 2px ${theme.primColor};
          }
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

  @media screen and (max-width: 560px) {
    justify-content: space-between;
    img {
      display: block;
      margin-right: 20px;
    }
    h2 {
      margin-left: 20px;
    }
    nav {
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      background-color: #222;
      font-size: 20px;
      line-height: 2.8;
      .close {
        position: absolute;
        top: -10px;
        right: 20px;
      }
      ul {
        flex-direction: column;
        li {
          select {
            font-size: 20px;
          }
        }
      }
    }
    .show {
      display: flex;
    }
    .hide {
      display: none;
    }
  }
`;

const Header = () => {
  const { contextLang, setContextLang } = useLangContext();
  const [show, setShow] = useState(false);

  return (
    <HeaderStyle>
      <h2>Tadoki Naan</h2>
      <img onClick={() => setShow(!show)} src="menu.svg" />
      <nav className={show ? "show" : "hide"}>
        <p className="close" onClick={() => setShow(false)}>
          X
        </p>
        <ul>
          <li>
            <a onClick={() => setShow(false)} href={"#home"}>
              {contextLang === "ES" ? "Sobre mí" : "About me"}
            </a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href={"#portfolio"}>Portfolio</a>
          </li>
          <li>
            <a onClick={() => setShow(false)} href={"#contact"}>
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
