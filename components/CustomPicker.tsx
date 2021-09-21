import React, { Component, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

import { Picker, PickerProps } from "@react-native-picker/picker";

interface Props extends Omit<PickerProps, 'onValueChange'> {
  opcion: string;
  //styles: any;
}

export default function CustomPicker({ opcion }: Props) {
  const [motivo, setMotivo] = React.useState('');
  //const MotivoContext = React.createContext(motivo);
  //<MotivoContext.Provider value={4}></MotivoContext.Provider>

  const opcionesA = [
    {
      label: "A1",
      value: "a1"
    },
    {
      label: "A2",
      value: "a2"
    },
    {
      label: "A3",
      value: "a3"
    }
  ];
  const opcionesB = [
    {
      label: "B1",
      value: "b1"
    },
    {
      label: "B2",
      value: "b2"
    },
    {
      label: "B3",
      value: "b3"
    }
  ];
  const opcionesC = [
    {
      label: "C1",
      value: "c1"
    },
    {
      label: "C2",
      value: "c2"
    },
    {
      label: "C3",
      value: "c3"
    }
  ];
      if (opcion==="a") {
        return (
              <Picker
                selectedValue={motivo}
                onValueChange={(value, index) => setMotivo(value)}
                mode="dropdown" // Android only
                style={styles.picker}
              >
                {opcionesA.map((i, index) => 
                  <Picker.Item key={index} label={i.label} value={i.value} />
                )}
              </Picker>
        );
      } else if (opcion==="b") {
        return (
              <Picker
                selectedValue={motivo}
                onValueChange={(value, index) => setMotivo(value)}
                mode="dropdown" // Android only
                style={styles.picker}
              >
                {opcionesB.map((i, index) => 
                  <Picker.Item key={index} label={i.label} value={i.value} />
                )}
              </Picker>
        );
      } else if (opcion==="c") {
        return (
              <Picker
                selectedValue={motivo}
                onValueChange={(value, index) => setMotivo(value)}
                mode="dropdown" // Android only
                style={styles.picker}
              >
                {opcionesC.map((i, index) => 
                  <Picker.Item key={index} label={i.label} value={i.value} />
                )}
              </Picker>
        );
      } else {
        return (
            <Text style={styles.title}>Motivo no seleccionado</Text>
        );
      }
}

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
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});