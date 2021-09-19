import * as React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

//Externos
import { Picker } from "@react-native-picker/picker";

import EditScreenInfo from '../components/EditScreenInfo';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");
  const [motivo, setMotivo] = React.useState('Unknown');
  const [razon, setRazon] = React.useState('Unknown');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina principal</Text>
      <Text style={styles.title}>Formulario Reclamos</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Text style={styles.title}>Razon del reclamo</Text>
      <Picker
        selectedValue={motivo}
        onValueChange={(value, index) => setMotivo(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Seleccione una opcion" value="Unknown" />
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
        <Picker.Item label="C" value="C" />
      </Picker>
      <Text style={styles.title}>Motivo: {motivo}</Text>

      <Text style={styles.title}>Motivo del reclamo</Text>
      <Picker
        selectedValue={razon}
        onValueChange={(value, index) => setRazon(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Seleccione una opcion" value="Unknown" />
        <Picker.Item label="A" value="A" />
        <Picker.Item label="B" value="B" />
        <Picker.Item label="C" value="C" />
      </Picker>
      <Text style={styles.title}>Razon: {razon}</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
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
