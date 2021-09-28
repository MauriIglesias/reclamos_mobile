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
    if(email==="" || razon==="Unknown" || motivo==="Unknown" || descripcion==="") {
        return (
            Alert.alert(
                "Reclamo no enviado",
                `Debe ingresar todos los datos`,
                [
                  { text: "OK", style: "default", onPress: () => console.log("OK Pressed") }
                ]
            )
        );
    } else {
            axios.post('http://localhost:3000/api/v1/correo/enviar', {
                email: email,
                razon: razon,
                motivo: motivo,
                descripcion: descripcion
            }).then(res => {
            return (
                Alert.alert(
                    "Reclamo enviado",
                    `Email: ${email} \nRazon: ${razon} \nMotivo: ${motivo} \nDescripcion: ${descripcion}`,
                    [
                      { text: "OK", style: "default", onPress: () => console.log("OK Pressed") }
                    ]
                )
            );
            }).catch(err => {
                return (
                    Alert.alert(
                        "Reclamo no enviado",
                        "Error de comunicacion",
                        [
                          { text: "OK", style: "default", onPress: () => console.log("OK Pressed") }
                        ]
                    )
                );
            });
    }
}