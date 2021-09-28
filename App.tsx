import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

//Externos
import { Picker } from "@react-native-picker/picker";
import CustomPicker from './components/CustomPicker';
import enviarDatos from './components/EnviarDatos';

export default function App() {
  const [email, setEmail] = React.useState("");
  const [razon, setRazon] = React.useState("Unknown");
  const [desc, setDesc] = React.useState("");
  const [motivo, motivoHome] = React.useState("Unknown");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de reclamos</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        placeholder="Ingrese su correo"
        value={email}
      />

      <Text style={styles.title}>Seleccione la razon</Text>
      <Picker
        selectedValue={razon}
        onValueChange={(value, index) => setRazon(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Seleccione una opcion" value="Unknown" />
        <Picker.Item label="A" value="a" />
        <Picker.Item label="B" value="b" />
        <Picker.Item label="C" value="c" />
      </Picker>
      
      <Text style={styles.title}>Seleccione el motivo</Text>

      <CustomPicker opcion={razon} motivoHome={motivoHome}></CustomPicker>

      <TextInput
        multiline
        numberOfLines={4}
        style={styles.textInput}
        onChangeText={setDesc}
        value={desc}
        placeholder="Ingrese una descripcion"
      />

      <Button
        title="Enviar Datos"
        onPress={() => {
          enviarDatos(email, razon, motivo, desc);
          //<EnviarDatos email={email} razon={razon} motivo={motivo} descripcion={desc}></EnviarDatos>
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
