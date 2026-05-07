import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustoInput from './src/components/CustomInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hola Mundoo!</Text>
      <Text>Mi primera Tarea</Text>
      <StatusBar style="auto" />

      <CustoInput
        type={'text'}
        placeholder={'Nombre de Usuario'}
        value={''}
        onChange={function (text: string): void { }} />

      <Text> </Text>

      <CustomButton
        title={"App 🖲️"}
        onPressButton={() => {
          console.log('Press desde Boton App');
        }}
      />

      <Text> </Text>

      <CustomButton
        title={"Secondary Buttton"}
        onPressButton={() => {
          console.log('Press desde Boton Secundario ✅');
        }}
        variant="Secondary"
      />


      <Text> </Text>

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
