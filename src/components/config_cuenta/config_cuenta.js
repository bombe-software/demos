//NPM packages
import React, { Component } from "react";
import { connect } from "react-redux";
//Components
import ConfigForm from './config_form';


/**
* @class Perfil
* @author MedinaVilla <net_medina@hotmail.com>
* @author Someone <none>
* @version  1.0 <11/12/17>
* @description: 
* El objetivo de la clase es mostrar toda la informacion relacionada con el usuario y 
* dar la opcion que pueda cambiar algun dato.
*/
class Perfil extends Component {
  /**
   * Permite acceder al método constructor de la clase principal
   * @constructor
   */
  constructor(props) {
    super(props);
  }

  /**
  * Es una forma de capturar cualquier error en la clase 
  * y que este no crashe el programa, ayuda con la depuracion
  * de errores
  * @method componentDidCatch
  * @const info Es más informacion acerca del error
  * @const error Es el titulo del error
  */
  componentDidCatch(error, info) {
    console.log("Error: " + error);
    console.log("Info: " + info);
  }

/**
  * Realiza el renderizado de la aplicacion 
  * en base a la informacion anterior
  * @returns La cadena HTML que sera mostrada al usuario
  * @method render
  */
  render() {
    let {user} = this.props;
    if(JSON.stringify(user) == '{}'){
      return(
        <div>
          Inicia sesion para acceder a este modulo
        </div>
      );
    }else{
      return (
        <div className="columns">
          <div className="column is-8 is-10-mobile is-offset-2 is-offset-1-mobile">
            <br />
            <div className="columns">
              <div className="column is-4 is-12-mobile">
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={"../../../assets/img/"+user.avatar+".png"} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">@{user.nombre_usuario}</p>
                    <p className="subtitle is-7">{user.email}</p>
                  </div>
                </div>
                  <div className="content">
                    {user.fecha_registro}<br />
                    {user.curp}<br />
                    {user.localidad}<br />
                    {user.puntos}<br />
                  </div>
                  </div>
                </div>
              </div>
              <div className="column is-8 is-12-mobile">
              <ConfigForm
                user={this.props.user}
              />
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      ) ;
  }
    }
}
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps,  null )(Perfil);
