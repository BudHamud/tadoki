import styled from "styled-components";
import { useLangContext } from "../context/LangContext";
import { theme } from "../context/theme";

const FooterStyle = styled.footer`
  width: 100%;
  border-top: 2px solid #fff;
  margin-top: 100px;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  p {
    span {
      color: #abb2bf;
      margin-left: 15px;
    }
  }
  .media {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icons {
      img {
        width: 35px;
      }
    }
  }
`;

const Footer = () => {
  const { contextLang } = useLangContext()
  return (
    <FooterStyle>
      <div className="personal">
        <p>Tadoki Naan <span>bluisana505@gmail.com</span></p>
        <p>{ contextLang === 'ES' ? 'Artista Digital' : 'Digital Artist' }</p>
      </div>

      <div className="media">
        <p>{ contextLang === 'ES' ? 'Redes' : 'Media' }</p>
        <div className="icons">
          <a target={'_blank'} href="https://www.instagram.com/tadokitaa/"><img src="/insta.svg" /></a>
          <a target={'_blank'} href="https://mobile.twitter.com/H3llgirl_666"><img src="/twit.svg" /></a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
