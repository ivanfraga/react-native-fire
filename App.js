import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { loadConfiguration } from './app/utils/firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductoForm } from './app/screens/ProductoForm';
import { ListProducts } from './app/screens/ListProducts';
import { LoginForm } from './app/screens/Login';
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import { useState } from 'react';
import { RegistroForm } from './app/screens/RegistroForm';
import { CambioClaveForm } from './app/screens/CambioClaveForm';


const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();



const LoginNav=()=>{
  return <LoginStack.Navigator>
    <LoginStack.Screen
    name='LoginNavigation'
    component={LoginForm}
    options={{
      headerShown:false
    }}
    />
    <LoginStack.Screen
    name='RegistroNavigation'
    component={RegistroForm}
    options={{
      headerShown:false
    }}
    />
    <LoginStack.Screen
    name='CambioClaveNavigation'
    component={CambioClaveForm}
    options={{
      headerShown:false
    }}
    />
  </LoginStack.Navigator>
}

const ProductsNav=()=>{
  return (
  <Stack.Navigator 
    screenOptions={{
      
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }}>

      <Stack.Screen 
      name='ListProducts' 
      component={ListProducts}
      options={{
        title: 'Lista de Productos',
      }}
      />

      <Stack.Screen 
      name='ProductoFormNav' 
      component={ProductoForm}
      options={{
        title: 'Formulario Productos',
      }}
      />

      
    </Stack.Navigator>)
}

export default function App() {


  const [login, setLogin]=useState(false);

  const registrarObserver=()=>{
    const auth = getAuth();
    
    if(!global.desSuscribirObs){
      global.desSuscribirObs = onAuthStateChanged(auth, (user)=>{
        if (user){
          const uid = user.uid;
          console.log("Observer cambia estado a SignIn");
          setLogin(true);
        }
        else{
          console.log("Observer cambia estado a SignOut");
          setLogin(false);
        }
      })
    }
  
    
  }

  loadConfiguration();
  registrarObserver();
  return (
    <NavigationContainer>
      
      {login?<ProductsNav/>:<LoginNav/>}
    </NavigationContainer>
  );
}


