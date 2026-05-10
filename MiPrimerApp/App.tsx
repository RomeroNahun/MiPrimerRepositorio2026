import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustoInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {
  //Definicion de una variable de estado en ReacNative
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hola Mundoo!</Text>
      <Text>Mi primera Tarea</Text>
      <StatusBar style="auto" />

      <CustoInput
         type={"text"}
        placeholder={'Ingresa tu Nombre'}
        value={name}
        onChange={setname} />
      <CustoInput
         type={"number"}
        placeholder={'Ingrese Su Numero de Telefono'}
        value={phoneNumber}
        onChange={setphoneNumber} />

      <CustoInput
        type={'email'}
        placeholder={'Nombre de Usuario'}
        value={email}
        onChange={setemail} />
      <CustoInput
        type={'password'}
        placeholder={'Ingresa tu Contraseña'}
        value={password}
        onChange={setpassword} />


      <CustomButton
        title={"App 🖲️"}
        onPressButton={() => {
          console.log('Press desde Boton App');
        }}
      />

      <CustomButton
        title={"Secondary Buttton"}
        onPressButton={() => {
          console.log('Press desde Boton Secundario ✅');
        }}
        variant="Secondary"
      />


      <CustomButton
        title={"⚙️ Configuracion"}
        onPressButton={() => {
          console.log('Press desde Configuracion✅');
        }}
        variant="Tertiary"
      />

    </View>






  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
