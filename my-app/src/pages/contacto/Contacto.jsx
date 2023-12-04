import { InfoRedes } from "../../components/InfoRedes";
import { Formulario } from "../../components/Formulario";
import "./Contacto.css";
import { Carrusel } from "../../components/Carrusel";

export const Contacto = () => {
  return (
    <>
      <Carrusel />
      {/*<h1 className="contactanos">¡Contactanos!</h1>*/}
      <div className="contact-container">
        <InfoRedes className="infoRedes" />
        <Formulario className="form-container"></Formulario>
      </div>
    </>
  );
};
