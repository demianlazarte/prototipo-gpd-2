import React, {Component} from 'react';

class MiCuenta extends Component {
    render(){
        return(
            <div className="container px-5" id="contenedorMiCuenta">
                <div className="row">
                    <div className="col-3">
                        <div className="card h-100" id="Usuario">
                            <div className="card-body">
                                <div className="container pt-5 pb-3 d-flex justify-content-center" >
                                    <div className="d-flex flex-column " id="containerData">
                                    <div className="d-flex flex-column align-items-center">
                                        <img src="./img/icon.png" alt="..." width="100" height="100"></img>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <h2 className="pt-2">Usuario</h2>
                                        <h5>Nivel 1</h5>
                                    </div>
                                    </div>
                                    </div>
                                < hr className="mb-4"/>
                                <div className="container px-2">
                                    <div className="d-flex flex-row justify-content-evenly">
                                        <div className="d-flex flex-column">
                                            <p>Mis puntos</p>
                                            <h2>500</h2>
                                        </div>
                                        <div className="d-flex flex-column align-items-center">
                                            <p>Compras</p>
                                            <h2>0</h2>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="card h-75" id="Activity">
                            <div className="card-body px-4 pt-4">
                                <h3>Mi actividad</h3>
                                < hr />
                            </div>
                        </div>
                        <div className="card" id="Encuesta">
                            <div className="card-body d-flex justify-content-between">
                                <h3>Completá nuestra encuesta y sumá puntos</h3>
                                <a href="#" class="btn btn-primary">Ir a la encuesta</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default MiCuenta