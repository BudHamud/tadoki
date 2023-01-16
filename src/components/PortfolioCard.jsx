import styled from "styled-components";
import { useLangContext } from "../context/LangContext";

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    max-height: 400px;
  }
  .onHover {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    background-color: #0005;
    transition: ease-in-out .3s;
    display: flex;
    justify-content: center;
    align-items: center
  }
  &:hover .onHover {
    opacity: 1;
  }
  button {
    padding: 5px;
    background-color: transparent;
    color: #FFF;
    border: solid 2px #d3a7e0;
    font-size: 16px;
    transition: ease-in-out .3s;
    &:hover {
      background-color: #d3a7e0;
      cursor: pointer;
    }

  }
`;

const PortfolioCard = ({ img, func }) => {
  const { contextLang } = useLangContext();
  return (
    <>
    <CardStyle>
      <div className="onHover">
      <button onClick={func}>{contextLang === 'ES' ? 'Expandir' : 'Expand'}</button>
      </div>
      <img src={img} />
    </CardStyle>
    </>
  );
};

export default PortfolioCard;
