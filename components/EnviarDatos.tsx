import { PickerProps } from "@react-native-picker/picker";
import axios from "axios";
import { useState } from "react";
import { Alert, AlertButton, AlertOptions, AlertType, ButtonProps, TextInput, View } from "react-native";

/*interface Props extends Omit<PickerProps, 'onPress'> {
    email: string;
    razon: string;
    motivo: string;
    descripcion: string;
    //styles: any;
}*/

export default function enviarDatos(email: string, razon: string, motivo: string, descripcion: string) {
    /*const [datos, setDatos] = useState({
        email: email,
        razon: razon,
        motivo: motivo,
        descripcion: descripcion
    })*/
    if(email==="" || razon==="Unknown" || descripcion==="") {
        return (
            Alert.alert(
                "Datos no enviados",
                `Debe ingresar todos los datos ${email} ${razon} ${motivo} ${descripcion}`,
                [
                  { text: "OK", style: "default", onPress: () => console.log("OK Pressed") }
                ]
            )
        );
    } else {
            //console.log(`${datos.email} ${datos.razon} ${datos.motivo} ${datos.descripcion}`);
            axios.post('http://localhost:8080/api/v1/correo/enviar', {
                email: email,
                razon: razon,
                motivo: motivo,
                descripcion: descripcion
            }).then(res => {
            return (
                Alert.alert(
                    "Datos enviados",
                    "Se envio el reclamo",
                    [
                      { text: "OK", style: "default", onPress: () => console.log("OK Pressed") }
                    ]
                )
            );
            }).catch(err => {
                return (
                    Alert.alert(
                        "Datos no enviados",
                        "Hubo un error de comunicacion",
                        [
                          { text: "OK", style: "default", onPress: () => console.log("OK Pressed") }
                        ]
                    )
                );
            });
    }
}