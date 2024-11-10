import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import LoginScreen from './src/screens/login';
import { useEffect } from 'react';
import AppNavigation from './src/navigation/AppNavigation';


export default function App() {
  const [loaded, error] = useFonts({
    'Title': require('./assets/fonts/Text.ttf'), 
    'Text': require('./assets/fonts/Text.ttf'),   
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  // Verificação inicial: enquanto as fontes não estão carregadas e não há erro, retorna 'null' para não renderizar nada
  if (!loaded && !error) {
    return null;
  }

  // Renderiza a navegação principal do aplicativo após o carregamento das fontes
  return (
    <AppNavigation />
  );
}
