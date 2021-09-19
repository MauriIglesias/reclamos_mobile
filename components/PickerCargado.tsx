import React, {useState} from "react";
import axios from "axios";

// Utilizar Modal para avisar 
// https://www.kindacode.com/article/how-to-implement-a-picker-in-react-native/
// https://www.kindacode.com/article/how-to-implement-a-picker-in-react-native/
// https://redux.js.org/introduction/getting-started
// https://reactnative.dev/docs/keyboardavoidingview
// https://reactnative.dev/docs/button
// https://reactnative.dev/docs/modal
// https://blog.logrocket.com/how-to-use-the-react-native-picker-select/
// https://blog.logrocket.com/how-to-use-the-react-native-picker-select/
// https://reactnative.dev/docs/picker

const Formulario = () => {

    const [datos, setDatos] = useState({
        email: '',
        razon: '',
        motivo: '',
        descripcion: ''
    })

    var razonA = false;
    var razonB = false;
    var razonC = false;
    if(datos.razon === "a") {
        razonA = true;
    } else if(datos.razon === "b") {
        razonB = true;
    } else if(datos.razon === "c") {
        razonC = true;
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
        if(event.target.name == "razon") {
            razonA = false;
            razonB = false;
            razonC = false;
            if(datos.razon === "a") {
                razonA = true;
            } else if(datos.razon === "b") {
                razonB = true;
            } else if(datos.razon === "c") {
                razonC = true;
            }
        }
    }

    //no se muestra el div de res/err
    const enviarDatos = (event) => {
        event.preventDefault();
        //console.log(`${datos.email} ${datos.razon} ${datos.motivo} ${datos.descripcion}`);
        axios.post('http://localhost:8080/api/v1/correo/enviar', {
            email: datos.email,
            razon: datos.razon,
            motivo: datos.motivo,
            descripcion: datos.descripcion
        }).then(res => <div>
                            <h1>El mensaje se ha enviado con exito</h1>
                        </div>).catch(err => <div>
                                                <h1>El mensaje no ha sido enviado</h1>
                                            </div>);
    }

    return (
        <div className="form-container">
            <h1 align="center"> Formulario Reclamos </h1>
            <br/>
            <form className="register-form" onSubmit={enviarDatos}>
                <div>
                    <label>
                        email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese el email"
                        name="email"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <br/>
                <br/>
                <div>
                    <label className="col-md-2">
                        razon del reclamo
                    </label>
                    <select 
                        className="custom-select"
                        name="razon"
                        onChange={handleInputChange}
                    >
                        <option value="seleccione"> --Seleccione una opcion-- </option>
                        <option value="a"> A </option>
                        <option value="b"> B </option>
                        <option value="c"> C </option>
                    </select>
                </div>
                <br/>
                <br/>
                <div>
                <label className="col-md-2">
                    motivo del reclamo
                </label>
                    <select 
                        className="custom-select"
                        name="motivo"
                        onChange={handleInputChange}
                    >
                        <option value="seleccione"> --Seleccione una opcion-- </option>
                        <option value={razonA ? "a1" : razonB ? "b1" : razonC ? "c1" : "default"}>
                            {razonA ? "a1" : razonB ? "b1" : razonC ? "c1" : "default"}</option>
                        <option value={razonA ? "a2" : razonB ? "b2" : razonC ? "c2" : "default"}>
                            {razonA ? "a2" : razonB ? "b2" : razonC ? "c2" : "default"} </option>
                        <option value={razonA ? "a3" : razonB ? "b3" : razonC ? "c3" : "default"}>
                            {razonA ? "a3" : razonB ? "b3" : razonC ? "c3" : "default"} </option>
                    </select>
                </div>
                <br/>
                <br/>
                <div>
                    <label>
                        descripcion    
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ingrese una descripcion"
                        name="descripcion"
                        onChange={handleInputChange}
                    ></input>
                </div>
                <br/>
                <br/>
                <div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                    > Enviar </button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;
