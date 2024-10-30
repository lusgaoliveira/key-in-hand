import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Input from './src/components/input';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Input
        placeholder='username'
        secureTextEntry={false}
      />
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
});
