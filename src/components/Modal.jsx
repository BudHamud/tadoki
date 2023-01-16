import styled from "styled-components";
import { useLangContext } from "../context/LangContext";

const ModalStyle = styled.div`
  background-color: #000a;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .modal {
    width: 700px;
    background-color: #444;
    position: relative;
    padding: 10px;
    p {
        margin: 10px 0;
    }
    h4 {
        margin-bottom: 10px;
    }
    button {
      background-color: transparent;
      border: none;
      position: absolute;
      right: 5px;
      top: 5px;
      &:hover {
        cursor: pointer;
      }
    }
    ul {
      li {
        list-style: none;
      }
    }
  }
`;

const Modal = ({ state }) => {
    const { contextLang } = useLangContext()
  return (
    <ModalStyle>
      <div className="modal">
        <button onClick={state}>X</button>
        <h3>{ contextLang === 'ES' ? 'Términos de Servicio' : 'Terms of Service' }</h3>
        <p>{ contextLang === 'ES' ? 'Puedo dibujar:' : 'I can draw:' }</p>
        <ul>
          <li>• { contextLang === 'ES' ? 'Furry y Anthro' : 'Furry and Anthro' }</li>
          <li>• Fan Art</li>
          <li>• OCs</li>
          <li>• { contextLang === 'ES' ? 'Leve NSFW' : 'Mild NSFW' }</li>
        </ul>
        <p>{ contextLang === 'ES' ? 'NO voy a dibujar:' : 'I will NOT draw:' }</p>
        <ul>
          <li>• { contextLang === 'ES' ? 'Realismo' : 'Realism' }</li>
          <li>• { contextLang === 'ES' ? 'Gore' : 'Gory' }</li>
          <li>• { contextLang === 'ES' ? 'Fondos complicados' : 'Complicated background' }</li>
        </ul>
        <p>{ contextLang === 'ES' ? 'Si algo específico no está en la lista, por favor, dígamelo.' : 'If something specific is not on the list, please discuss it with me.' }</p>
        <h4>GENERAL</h4>
        <ul>
        <li>• { contextLang === 'ES' ? 'Tadoki Naan (la artista) Me reservo el derecho de cancelar y reembolsar el pedido en cualquier momento y por cualquier motivo.' : 'Tadoki Naan (the artist) I reserve the right to cancel and refund the order at any time for any reason.' }</li>
        <li>• { contextLang === 'ES' ? 'Conservo todos los derechos de autor de las obras encargadas.' : 'I retain all copyrights to the artwork ordered.' }</li>
        <li>• { contextLang === 'ES' ? 'NO reclamaré la propiedad intelectual (PI) de la obra de arte encargada.' : 'I will NOT claim intellectual property (IP) of the commissioned artwork.' }</li>
        <li>• { contextLang === 'ES' ? 'NO me beneficiaré más de la obra a menos que usted (el cliente) incumpla alguna de las condiciones.' : 'I will NOT benefit further from the artwork unless you (the client) break any of the the terms.' }</li>
        <li>• { contextLang === 'ES' ? 'NO puede modificar obras de arte encargadas sin el consentimiento del artista' : 'You may NOT alter commissioned artwork without artist consent' }</li>
        <li>• { contextLang === 'ES' ? 'Usted conserva los derechos de propiedad intelectual (PI)' : 'You retain the intellectual property (IP) rights' }</li>
        <li>• { contextLang === 'ES' ? 'Puede solicitar la obra de arte en cualquier sitio web y canales sociales.' : 'You can order the artwork on any website and social channels.' }</li>
        <li>• { contextLang === 'ES' ? 'La divisa aceptada es USD a través de PayPal' : 'The accepted currency is USD through PayPal' }</li>
        </ul>
      </div>
    </ModalStyle>
  );
};

export default Modal;
