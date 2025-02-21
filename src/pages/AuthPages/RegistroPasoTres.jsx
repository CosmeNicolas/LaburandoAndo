import React from "react";
import "../../App.css";
import "../../styles/registroPasoTres.css";
import Foto from "../../img/FotoPerfil.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useRegisterHook } from "../../hooks/useRegisterHook";

const RegistroPasoTres = () => {
  const { createProfessional } = useRegisterHook();

  const handleCreateProfessional = (e) => {
    e.preventDefault();
    createProfessional();
  };

  return (
    <Container className="my-5 border border-1 border-black p-5">
      <h1>Añade datos a tú perfil!</h1>
      <p>Completá los datos que se muestran a continuación.</p>
      <section className="border-1">
        <form>
          <Row className="d-flex justify-content-center  align-items-center">
            <Col md={6}>
              <label className="fs-5">Ubicación:</label>
              <input type="text" className="form-control" />
              <label className="fs-5">WhatsApp:</label>
              <input type="number" min={0} className="form-control" />
            </Col>
            <Col md={6}>
              <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <img src={Foto} className="img-fluid perfilImg" alt="" />
                <input
                  className="d-none"
                  type="file"
                  name="FotoPerfil"
                  id="FotoPerfil"
                  accept='"image/png, image/jpeg"'
                />
                <button className="btn-Profesional btn">Subir Imagen</button>
              </div>
            </Col>
            <div className="text-center d-flex justify-content-end gap-2">
              <button
                className="btn btn-success mt-4 fs-4"
                type="submit"
                onClick={handleCreateProfessional}
              >
                Crear Usuario
              </button>
            </div>
          </Row>
        </form>
      </section>
    </Container>
  );
};

export default RegistroPasoTres;
