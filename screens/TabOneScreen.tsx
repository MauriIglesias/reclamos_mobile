import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';

//Externos
import { Picker } from "@react-native-picker/picker";
import CustomPicker from '../components/CustomPicker';

import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import enviarDatos from '../components/EnviarDatos';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [email, setEmail] = React.useState("");
  const [razon, setRazon] = React.useState("Unknown");
  const [desc, setDesc] = React.useState("");
  const [motivo, setMotivo] = React.useState("Unknown");
  //motivo = React.useContext(MotivoContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Reclamos</Text>

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
      <CustomPicker opcion={razon}></CustomPicker>

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

    </View>
    </KeyboardAvoidingView>
  );

}

/*
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina principal</Text>
      <Text style={styles.title}>Formulario Reclamos</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  inputMultilie: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});
