import axios from "axios";

//Constantes de funciones
export const SIGNUP_USER = "form_signup_user";
export const LOGIN_USER = "form_login_user";
export const CONFIRM_EMAIL = "form_confirm_email";
export const RECOVER_PASS = "form_recover_pass";
export const FETCH_CANDIDATO = "fetch_candidato";
export const FETCH_ESTADOS = "fetch_estados";
export const FETCH_POLITICOS = "fetch_politicos";
export const FETCH_POLITICO = "fetch_politico";
export const FETCH_PROPUESTAS = "fetch_propuestas";
export const FETCH_HISTORIAL = "fetch_historial";
export const FETCH_ISLIKED = "fetch_isliked";
export const FETCH_PUTISLIKED = "fetch_put_isliked";
export const FETCH_COUNTLIKES = "fetch_countlikes";
export const UPDATE_USER = "update_user";
export const FETCH_PARTIDOS = "fetch_partidos";
export const FETCH_TIPOPROPUESTA = "fetch_tipopropuesta";
export const INSERT_POLITICO = "insert_politico";
export const INSERT_PROPUESTA = "insert_propuesta";
export const INSERT_HISTORIAL = "insert_historial";
export const FETCH_PENDIENTESHISTORIAL = "pendientes_historial";
export const FETCH_PENDIENTESPOLITICO = "pendientes_politico";
export const FETCH_PENDIENTESPROPUESTA = "pendientes_propuesta";
export const CALL_HISTORIAL = "call_historial";
export const CALL_POLITICO = "call_politico";
export const CALL_PROPUESTA = "call_propuesta";
export const DELETE_HISTORIAL = "delete_historial";
export const DELETE_POLITICO = "delete_politico";
export const DELETE_PROPUESTA = "delete_propuesta";

//Constantes de peticiones ajax
const ROOT_URL = "http://localhost:3000";
const API_KEY = "?key=1234";

//Acciones
export function signupUser(values, avatar, callback) {
  const params = {
    NombreUsuario: values.usuario,
    CorreoElectronico: values.email,
    IdTipoUsuario: 1,
    Contrasena: values.password,
    CURP: values.curp,
    Avatar: avatar,
    Puntos: 0

  }

  const request = axios
    .post(`${ROOT_URL}/signup`, params);

  callback(request);
  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export function loginUser(values, callback) {
  const params = {
    CorreoElectronico: values.user,
    Contrasena: values.password
  }

  const request = axios.post(`${ROOT_URL}/login`, params);
  request.then(response => callback(response.data));
  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function confirmEmail(values, callback) {
  console.log(values);
  let request = CONFIRM_EMAIL;
  callback();
  return {
    type: CONFIRM_EMAIL,
    payload: request
  };
}

export function fetchEstados() {
  const request = axios.get(`${ROOT_URL}/estados`);
  return {
    type: FETCH_ESTADOS,
    payload: request
  };
}

export function fetchPoliticos(tipo, lugar) {
  const params = {
    id_tipo_politico: (tipo + 1),
    id_lugar: lugar
  }
  const request = axios.post(`${ROOT_URL}/politicos`, params);
  return {
    type: FETCH_POLITICOS,
    payload: request
  };
}

export function fetchPolitico(id) {
  const params = {
    id_politico: id
  }
  const request = axios.post(`${ROOT_URL}/politico`, params);
  return {
    type: FETCH_POLITICO,
    payload: request
  };
}

export function fetchPropuestas(id) {
  const params = {
    id_politico: id
  }
  const request = axios.post(`${ROOT_URL}/propuestas`, params);
  return {
    type: FETCH_PROPUESTAS,
    payload: request
  };
}

export function fetchHistorial(id) {
  const params = {
    id_politico: id
  }
  const request = axios.post(`${ROOT_URL}/historial`, params);
  return {
    type: FETCH_HISTORIAL,
    payload: request
  };
}

export function recoverPass(values, callback) {
  console.log(values);
  let request = RECOVER_PASS;
  callback();
  return {
    type: RECOVER_PASS,
    payload: request
  };
}

export function putIsliked(id_propuesta_param, id_usuario_param) {
  const params = {
    id_propuesta: id_propuesta_param,
    id_usuario: id_usuario_param
  }
  let request = axios.put(`${ROOT_URL}/propuesta_like`, params);
  return {
    type: FETCH_PUTISLIKED,
    payload: request
  };
}

export function fetchIsliked(id_usuario_param) {
  const params = {
    id_usuario: id_usuario_param
  }
  let request = axios.post(`${ROOT_URL}/propuesta_like`, params);
  return {
    type: FETCH_ISLIKED,
    payload: request
  };
}

export function fetchCountLikes(id_propuesta_param) {
  let request = axios.get(`${ROOT_URL}/propuesta_like`);
  return {
    type: FETCH_COUNTLIKES,
    payload: request
  };
}

export function update_user(values, avatar, id_user, callback) {
  const params = {
    NombreUsuario: values.usuario,
    Contrasena: values.password,
    Avatar: avatar,
    id_usuario: id_user
  }
  callback(request);

  const request = axios.post(`${ROOT_URL}/update_user`, params);
  return {
    type: UPDATE_USER,
    payload: request
  };
}

export function fetchPartidos() {
  let request = axios.get(`${ROOT_URL}/partidos`);
  return {
    type: FETCH_PARTIDOS,
    payload: request
  };
}

export function fetchTipoPropuesta() {
  let request = axios.get(`${ROOT_URL}/tipo_propuesta`);
  return {
    type: FETCH_TIPOPROPUESTA,
    payload: request
  };
}

export function insertPolitico(values, idUsuario, callback) {

  const params = {
    nombre: values.nombre,
    id_partido: values.partido,
    id_tipo_politico: values.tipo,
    motivacion: values.motivacion_param,
    id_lugar: values.estado,
    id_usuario: idUsuario
  }

  const request = axios.post(`${ROOT_URL}/insert_politico`, params);
  request.then(response => callback(response.data));
  return {
    type: INSERT_POLITICO,
    payload: request
  };
}

export function insertPropuesta(values, idPolitico, idUsuario, callback) {
  const params = {
    nombre: values.nombre,
    descripcion: values.descripcion,
    id_categoria_propuesta: values.categoria,
    id_politico: idPolitico,
    id_usuario: idUsuario,
  }

  const request = axios.post(`${ROOT_URL}/insert_propuesta`, params);
  request.then(response => callback(response.data));
  return {
    type: INSERT_PROPUESTA,
    payload: request
  };
}

export function insertHistorial(values, idPolitico, idUsuario, callback) {
  const params = {
    id_politico: idPolitico,
    fecha: values.fecha.toString(),
    nombre: values.titulo,
    descripcion: values.descripcion,
    id_usuario: idUsuario
  }

  const request = axios.post(`${ROOT_URL}/insert_historial`, params);
  request.then(response => callback(response.data));
  return {
    type: INSERT_HISTORIAL,
    payload: request
  };
}

export function fetchPendientesPropuesta() {
  let request = axios.get(`${ROOT_URL}/pendientes_propuesta`);
  return {
    type: FETCH_PENDIENTESPROPUESTA,
    payload: request
  };
}

export function fetchPendientesHistorial() {
  let request = axios.get(`${ROOT_URL}/pendientes_historial`);
  return {
    type: FETCH_PENDIENTESHISTORIAL,
    payload: request
  };
}

export function fetchPendientesPolitico() {
  let request = axios.get(`${ROOT_URL}/pendientes_politico`);
  return {
    type: FETCH_PENDIENTESPOLITICO,
    payload: request
  };
}

export function callHistorial(idHistorial, callback) {
  const params = {
    id_historial: idHistorial
  }

  const request = axios.post(`${ROOT_URL}/call_historial`, params);
  request.then(response => callback(response.data));
  return {
    type: CALL_HISTORIAL,
    payload: request
  };
}

export function callPropuesta(idPropuesta, callback) {
  const params = {
    id_propuesta: idPropuesta
  }

  const request = axios.post(`${ROOT_URL}/call_propuesta`, params);
  request.then(response => callback(response.data));
  return {
    type: CALL_PROPUESTA,
    payload: request
  };
}

export function callPolitico(idPolitico, callback) {
  const params = {
    id_politico: idPolitico
  }

  const request = axios.post(`${ROOT_URL}/call_politico`, params);
  request.then(response => callback(response.data));
  return {
    type: CALL_POLITICO,
    payload: request
  };
}


export function deleteHistorial(idHistorial, callback) {
  const params = {
    id_historial: idHistorial
  }

  const request = axios.post(`${ROOT_URL}/delete_historial`, params);
  request.then(response => callback(response.data));
  return {
    type: DELETE_HISTORIAL,
    payload: request
  };
}

export function deletePropuesta(idPropuesta, callback) {
  const params = {
    id_propuesta: idPropuesta
  }

  const request = axios.post(`${ROOT_URL}/delete_propuesta`, params);
  request.then(response => callback(response.data));
  return {
    type: DELETE_PROPUESTA,
    payload: request
  };
}

export function deletePolitico(idPolitico, callback) {
  const params = {
    id_politico: idPolitico
  }

  const request = axios.post(`${ROOT_URL}/delete_politico`, params);
  request.then(response => callback(response.data));
  return {
    type: DELETE_POLITICO,
    payload: request
  };
}
