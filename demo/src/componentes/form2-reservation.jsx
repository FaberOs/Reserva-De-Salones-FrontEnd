import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../hojas-de-estilo/form2-styles.css';

import ReservationOption from '../componentes/reservation-option.jsx';
import TextInput from '../componentes/textInput.jsx';
import { BotonCancelar, BotonRegresar } from './button';

import { BotonAceptar } from './button';

function Form2({ selectedOptions, fechaSeleccionada, onPrevStep }) {
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [correoInstitucional, setCorreoInstitucional] = useState('');
  const [numEstudiantes, setNumEstudiantes] = useState('');
  const [programaPregrado, setProgramaPregrado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [selectedSalon, setSelectedSalon] = useState(null);

  const handleSalonClick = (salon) => {
    setSelectedSalon(salon);
  };

  return (
    <div className="form2-container">
      <div className="row">
        <div className="col-md-6">
          <TextInput
            id="nombreProfesor"
            type="text"
            placeholder="Nombre del profesor"
            value={nombreProfesor}
            onChange={(e) => setNombreProfesor(e.target.value)}
            required
          />
          <TextInput
            id="correoInstitucional"
            type="text"
            placeholder="Correo Institucional"
            value={correoInstitucional}
            onChange={(e) => setCorreoInstitucional(e.target.value)}
            required
          />
          <TextInput
            id="numEstudiantes"
            type="text"
            placeholder="Número de estudiantes"
            value={numEstudiantes}
            onChange={(e) => setNumEstudiantes(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <select
            id="programaPregrado"
            value={programaPregrado}
            onChange={(e) => setProgramaPregrado(e.target.value)}
            className="form-select"
          >
            <option value="">Programa de Posgrado</option>
            <option value="Programa 1">Programa 1</option>
            <option value="Programa 2">Programa 2</option>
            <option value="Programa 3">Programa 3</option>
          </select>
          <textarea
            id="mensaje"
            placeholder="Mensaje (Opcional)"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
      </div>
      <div className="form2-separator"></div>
      <div className="form2-section">
        <h3>Seleccione el salón:</h3>
        <div className="salon-grid">
          {[1, 2, 3, 4, 5, 6, 7].map((salon) => (
            <ReservationOption
              key={salon}
              time={`Salón ${salon}`}
              selected={selectedSalon === salon}
              onClick={() => handleSalonClick(salon)}
            />
          ))}
        </div>        
      </div>   
      <div className="buttons d-flex justify-content-between">
      <div>
        <BotonRegresar color="#0D4185" onClick={onPrevStep} />
      </div>
      <div className="d-flex">
        <div className="mr-2">
          <Link to="/home">
            <BotonCancelar color="#999999" />
          </Link>
        </div>
        <BotonAceptar
          selectedOptions={selectedOptions}
          selectedDate={fechaSeleccionada}
          sSalon={selectedSalon}
          cI={correoInstitucional}
          nProfesor={nombreProfesor}
          pP={programaPregrado}
          nE={numEstudiantes}
          m={mensaje}
        />
      </div>
    </div>
    </div>
  );
}

export default Form2;


