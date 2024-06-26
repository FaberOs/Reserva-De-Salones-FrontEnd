import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../hojas-de-estilo/buttonStyle.css'
import { useNavigate } from 'react-router-dom';

import ModalRechazoSave from './modalRechazoSave.jsx';
import ModalSave from './modalSave.jsx';
import ConfirmModal from './confirm-modal.jsx';
import ClienteReserva from '../services/ClienteReservas';
import ClienteReservaAuditorio from '../services/ClienteReservaAuditorio.js';


export function BotonIniciarSesionHome({ onClick }) {
  return (
    <button className='btn border-custom text-light btn-sm' onClick={onClick}>Iniciar Sesión</button>
  );
}

export function BotonCrearFacultad({ onClick }) {
  return (
    <button className='btn custom-boton btn-sm' onClick={onClick}>Crear Facultad</button>
  );
}

export function BotonCrearPrograma({ onClick }) {
  return (
    <button className='btn custom-boton btn-sm' onClick={onClick}>Crear Programa</button>
  );
}

export function BotonCrearSalon({ onClick }) {
  return (
    <button className='btn custom-boton btn-sm' onClick={onClick}>Crear Salon</button>
  );
}

export function BotonIniciarSesionLogin({ onClick }) {
  return (
    <button className='btn custom-boton' onClick={onClick}>Iniciar Sesión</button>
  );
}

export function BotonCierraSesion({ onClick }) {
  return (
    <button className='btn border-custom text-light btn-sm' onClick={onClick}>Cerrar Sesión</button>
  );
}

export function BotonEliminar({ onClick }) {
  return (
    <button className='btn btn-light border-custom' onClick={onClick}>Eliminar</button>
  );
}

export function BotonAceptar({selectedOptions, selectedDate, sSalon, nProfesor,cI, pP, nE, m}) {
  const [showModal, setShowModal] = useState(false);
  const [showModalS, setShowModalS] = useState(false);
  const [showModalR, setShowModalR] = useState(false);
  const navigate = useNavigate();

  //const opcionesSeleccionadasString = selectedOptions.join(', ');
  const hora_inicio = selectedOptions[0];
  const hora_fin = selectedOptions[1];

  const buttonStyle = {
    backgroundColor: "#0D4185",
    border: `2px solid #0D4185`,
    color: '#fff',
  };

  const handleAcceptClick = () => {
    setShowModal(true);
  };

  const handleConfirmS = () => {
    setShowModalS(false);
    navigate('/home');
  };

  const handleConfirmR = () => {
    setShowModalR(false);
  };
  /*
  console.log("Fecha Seleccionada:", selectedDate);
  //console.log("Opciones Seleccionadas:", opcionesSeleccionadasString);
  console.log("ID del Salón:", parseInt(sSalon));
  console.log("Cédula Ciudadanía:", JSON.parse(localStorage.getItem('User')).numeroIdentificacion);
  console.log("Correo Institucional:", cI);
  console.log("Número de Estudiantes:", parseInt(nE));
  console.log("Programa Posgrado:", pP);
  console.log("Mensaje:", m);*/

  const handleConfirm = (e) => {
    // Realiza la acción de confirmación aqui.3
    setShowModal(false);    
    ClienteReserva.Reservar({
      "idSalon": parseInt(sSalon),
      "nombreProfesor": nProfesor,
      "correoInstitucional": cI,
      "programaProfesor": pP,
      "horaInicio": hora_inicio,
      "horaFinal": hora_fin,
      "mensaje": m,
      "cantidadDias": 1,
      "diaInicio": selectedDate, // Se debe acomodar para que sea generico
      "diaFin": selectedDate,
      "numeroEstudiantes": nE,
      "estadoReserva": "PENDIENTE"
    }).then(response => {
      //alert("Guardado con éxito");
      setShowModalS(true);        
    }).catch(error => {
      //alert("Fallo al guardar la reserva, revise los datos");
      setShowModalR(true);  
      console.log(error);       
    }); 
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn" style={buttonStyle} onClick={handleAcceptClick}>
        Aceptar
      </button>
      <ConfirmModal isOpen={showModal} onConfirm={handleConfirm} onCancel={handleCancel} />
      <ModalSave isOpen={showModalS} onConfirm={handleConfirmS}/>
      <ModalRechazoSave isOpen={showModalR} onConfirm={handleConfirmR}/>
    </div>
  );
}


export function BotonAceptarAuditorio({selectedOptions, selectedDate, sSalon, nProfesor,cI, pP, nE, m}) {
  const [showModal, setShowModal] = useState(false);
  const [showModalS, setShowModalS] = useState(false);
  const [showModalR, setShowModalR] = useState(false);
  const navigate = useNavigate();

  //const opcionesSeleccionadasString = selectedOptions.join(', ');
  const hora_inicio = selectedOptions[0];
  const hora_fin = selectedOptions[1];

  const buttonStyle = {
    backgroundColor: "#0D4185",
    border: `2px solid #0D4185`,
    color: '#fff',
  };

  const handleAcceptClick = () => {
    setShowModal(true);
  };

  const handleConfirmS = () => {
    setShowModalS(false);
    navigate('/home');
  };

  const handleConfirmR = () => {
    setShowModalR(false);
  };
  /*
  console.log("Fecha Seleccionada:", selectedDate);
  //console.log("Opciones Seleccionadas:", opcionesSeleccionadasString);
  console.log("ID del Salón:", parseInt(sSalon));
  console.log("Cédula Ciudadanía:", JSON.parse(localStorage.getItem('User')).numeroIdentificacion);
  console.log("Correo Institucional:", cI);
  console.log("Número de Estudiantes:", parseInt(nE));
  console.log("Programa Posgrado:", pP);
  console.log("Mensaje:", m);*/

  const handleConfirm = (e) => {
    // Realiza la acción de confirmación aqui.3
    setShowModal(false);    
    ClienteReservaAuditorio.crearReservaAuditorio({
      "idAuditorio": parseInt(sSalon),
      "nombreProfesor": nProfesor,
      "correoInstitucional": cI,
      "programaProfesor": pP,
      "horaInicio": hora_inicio,
      "horaFinal": hora_fin,
      "evento": m,
      "cantidadDias": 1,
      "diaInicio": selectedDate, // Se debe acomodar para que sea generico
      "diaFin": selectedDate,
      "numeroEstudiantes": nE,
      "estadoReserva": "PENDIENTE"
    }).then(response => {
      //alert("Guardado con éxito");
      setShowModalS(true);        
    }).catch(error => {
      //alert("Fallo al guardar la reserva, revise los datos");
      setShowModalR(true);  
      console.log(error);       
    }); 
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn" style={buttonStyle} onClick={handleAcceptClick}>
        Aceptar
      </button>
      <ConfirmModal isOpen={showModal} onConfirm={handleConfirm} onCancel={handleCancel} />
      <ModalSave isOpen={showModalS} onConfirm={handleConfirmS}/>
      <ModalRechazoSave isOpen={showModalR} onConfirm={handleConfirmR}/>
    </div>
  );
}
export function BotonSiguiente({ onClick, color }) {
  const buttonStyle = {
    backgroundColor: color, 
    border: `2px solid ${color}`,
    color: '#fff',
  };

  return (
    <button className='btn' style={buttonStyle} onClick={onClick}>
      Siguiente
    </button>
  );
}

export function BotonCancelar({ onClick, color }) {
  const buttonStyle = {
    backgroundColor: color, 
    border: `2px solid ${color}`, 
    color: '#fff',
  };

  return (
    <button className='btn' style={buttonStyle} onClick={onClick}>
      Cancelar
    </button>
  );
}

export function BotonRegresar({ onClick, color }) {
  const buttonStyle = {
    backgroundColor: color, 
    border: `2px solid ${color}`,
    color: '#fff',
  };

  return (
    <button className='btn' style={buttonStyle} onClick={onClick}>
      Regresar
    </button>
  );
}

export function Checkbox({ label, checked, onChange }) {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input mr-1 mt-2"
        id={label}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label ml-2 mt-0" htmlFor={label}>
        {label}
      </label>
    </div>
  );
}

export function BotonSolicitarReserva({ onClick, color, icon }) {
  const buttonStyle = {
    backgroundColor: color,
  };
  
  return (
    <button className='button w-100 mb-2' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Solicitar Reserva</span>
    </button>
  );
}

export function BotonConsultarReserva({ onClick, color, icon }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className='button w-100 mb-2' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Consultar Reserva</span>
    </button>
  );
}

export function BotonSolicitarAuditorio({ onClick, color, icon }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className='button w-100 mb-2' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Solicitar Auditorio</span>
    </button>
  );
}

export function BotonInbox({ onClick, color, icon }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className='button w-100 mb-2' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Bandeja de Entrada</span>
    </button>
  );
}