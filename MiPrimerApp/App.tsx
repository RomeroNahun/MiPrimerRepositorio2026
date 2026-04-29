import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hola Mundoo!</Text>
      <Text>Mi primera Tarea</Text>
      <StatusBar style="auto" />

      <CustomButton
        title={"App"}
        onPressButton={() => {
          console.log('Press desde Boton App');
        }}
      />

   <Text> </Text>

 <CustomButton
        title={"Secondary Buttton"}
        onPressButton={() => {
          console.log('Press desde Boton Secundario');
        }}
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
