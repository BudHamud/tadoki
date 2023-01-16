import styled from "styled-components";
import PortfolioCard from "../components/PortfolioCard";
import { useLangContext } from "../context/LangContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { theme } from "../context/theme";
import { useState } from "react";
import Modal from "../components/Modal";

const StyledMain = styled.main`
  color: #fff;
  .aboutMe {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    width: 100%;
    .text {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-size: 18px;
      p {
        color: #abb2bf;
        margin: 40px 0;
        width: 80%;
      }
      button {
        border: solid 2px ${theme.primColor};
        background-color: transparent;
        font-size: 16px;
        padding: 10px;
        color: #fff;
        transition: ease-in-out 0.3s;
        &:hover {
          background-color: ${theme.primColor};
        }
        a {
          text-decoration: none;
        }
      }
    }
    .frame {
      text-align: center;
      img {
        width: 300px;
      }
      .header {
        border: solid 1.5px #fff;
        padding: 10px;
        p {
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
  .portfolio {
    margin: 150px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .divider {
        margin: 0 30px;
        width: 500px;
        height: 3px;
        background-color: ${theme.primColor};
      }
      p {
        transition: ease-in-out 0.3s;
        padding: 5px;
        border: solid 2px transparent;
        &:hover {
          cursor: pointer;
          border: solid 2px ${theme.primColor};
        }
      }
    }
    .content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      width: 830px;
      gap: 40px;
    }
    .carousel {
      z-index: 4;
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000c;
      img {
        max-width: 100%;
        height: 80%;
      }
      button {
        font-size: 20px;
        padding: 2px 8px;
        background-color: transparent;
        border: none;
        position: absolute;
        top: 20px;
        right: 20px;
        border-radius: 10px;
        transition: ease-in-out 0.3s;
        &:hover {
          background-color: #d3a7e0;
          cursor: pointer;
        }
      }
    }
  }
  .portfolio.contact {
    .terms {
      span {
        color: #abb2bf;
        &:nth-child(2) {
          color: #FFF;
          &:hover {
            border-bottom: solid 1px #d3a7e0;
            cursor: pointer;
          }
        }
      }
      
    }
    .msg {
      margin-top: 40px;
      padding: 10px;
      border: solid 2px #fff;
      p {
        display: flex;
        align-items: center;
        color: #abb2bf;
        img {
          width: 35px;
          margin-right: 5px;
        }
        &:nth-child(1) {
          color: #fff;
          margin-bottom: 5px;
        }
        &:nth-child(4) {
          img {
            filter: invert(86%) sepia(100%) saturate(0%) hue-rotate(293deg)
              brightness(107%) contrast(101%);
          }
        }
      }
    }
  }
`;

const Home = () => {
  const { contextLang } = useLangContext();
  const [change, setChange] = useState(false);
  const [carousel, setCarousel] = useState(false);
  const [modal, setModal] = useState(false);
  const [num, setNum] = useState(0);
  const arrPrim = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.png",
    "img5.jpg",
    "img6.jpg",
    "img7.png",
    "img8.png",
    "img9.png",
  ];
  const arrSec = ["img1.jpg", "img2.jpg", "img3.jpg"];

  const showCarousel = (e) => {
    setCarousel(!carousel);
    setNum(e);
  };

  return (
    <>
      <StyledMain>
        <article className="aboutMe">
          <section className="text">
            <h3>{contextLang === "ES" ? "Sobre mi" : "About Me"}</h3>
            <p>
              {contextLang === "ES"
                ? `¡Hola! Soy un artista digital, me encantaría ayudarle a hacer sus
            ideas se hagan realidad. Puedo hacer OC's, fanarts, diseños; me puedo adaptar fácilmente a
            lo que estás buscando! estoy empezando pero, con ganas de hacer lo que más me gusta
            lo que más me gusta :)`
                : `Hello! I am a digital artist, I would love to help you make your
            ideas come true. I can do OC’s, fanarts, designs; I can easily fit
            what you are looking for! just starting but, eager to do what I like
            the most :)`}
            </p>
            <button>
              <a href="#contact">
                {contextLang === "ES" ? "Contáctame" : "Contact me"}
              </a>
            </button>
          </section>

          <section className="frame">
            <img src="/icon.png" />
            <div className="header">
              <p>
                {contextLang === "ES" ? "Comisiones:" : "Comissions:"}{" "}
                <span>{contextLang === "ES" ? "Abiertas" : "Open"}</span>
              </p>
            </div>
          </section>
        </article>

        <article className="portfolio" id="portfolio">
          <section className="header">
            <h3>Portfolio</h3>
            <div className="divider" />
            {!change ? (
              <p onClick={() => setChange(!change)}>
                {contextLang === "ES" ? "Ver todos" : "View all"}
              </p>
            ) : (
              <p onClick={() => setChange(!change)}>
                {contextLang === "ES" ? "Ocultar" : "Hide"}
              </p>
            )}
          </section>

          <section className="content">
            {change
              ? arrPrim.map((e, i) => (
                  <PortfolioCard
                    key={i}
                    func={() => showCarousel(i)}
                    img={`/img/${e}`}
                  />
                ))
              : arrSec.map((e, i) => (
                  <PortfolioCard
                    key={i}
                    func={() => showCarousel(i)}
                    img={`/img/${e}`}
                  />
                ))}
          </section>

          {carousel ? (
            <section className="carousel">
              <button onClick={() => setCarousel(!carousel)}>X</button>
              <img src={`/img/${arrPrim[num]}`} />
            </section>
          ) : (
            ""
          )}
        </article>

        <article className="portfolio contact" id="contact">
          <section className="header">
            <h3>{contextLang === "ES" ? "Contacto" : "Contact"}</h3>
            <div className="divider" />
          </section>

          <section className="terms">
            <p>
              <span>{contextLang === 'ES' ? 'Al pedirme una comisión, usted acepta estos ' : 'By commissioning me, you agree to these '}</span>
              <span onClick={() => setModal(!modal)}>{ contextLang === 'ES' ? 'términos de servicio' : 'terms of service' }</span>.
            </p>
          </section>

          {
            modal ?
            <Modal state={() => setModal(!modal)} /> : ''
          }

          <section className="msg">
            <p>{contextLang === "ES" ? "Háblame por aquí" : "Message me here"}</p>
            <p>
              <img src="/insta.svg" /> Tadokitaa
            </p>
            <p>
              <img src="/twit.svg" /> HellGirl
            </p>
            <p>
              <img src="mail.svg" /> bluisana505@gmail.com
            </p>
          </section>
        </article>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
