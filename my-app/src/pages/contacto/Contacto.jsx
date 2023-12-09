import { InfoRedes } from "../../components/contacto/InfoRedes";
import { Formulario } from "../../components/contacto/Formulario";
import "./Contacto.css";
import { Carrusel } from "../../components/contacto/Carrusel";

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
