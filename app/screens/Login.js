import { useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import { Input, Icon, Button, Divider } from "@rneui/base";
import { ingresar, endSession } from "../Services/AuthenticaionSrv";



export const LoginForm=({navigation})=>{

    const [user, setUser]= useState(null);
    const [clave, setClave]= useState(null);

    const validarLogin=()=>{
        console.log("Validando")
        ingresar(user, clave);
    }

    const navegarRegistro=()=>{
        navigation.navigate('RegistroNavigation');
    }

    const navegarReestablecer=()=>{
        navigation.navigate('CambioClaveNavigation');
    }

    return <View style={styles.container}>
        <Input
            value={user}
            onChangeText={setUser}
            label='Mail'
            keyboardType='email-address'
            leftIcon={
                <Icon
                  name='user'
                  type='ant-design'
                  size={24}
                  color='black'
                  
                />
              }
        
        />
        <Input
            value={clave}
            onChangeText={setClave}
            label='Contraseña'
            leftIcon={
                <Icon
                name='idcard'
                type='ant-design'
                  
                  size={24}
                  color='black'
                  
                />
              }
        
        />
        <Button
        title="Ingresar"
        onPress={validarLogin}
        />
        <Divider width={20} color='white'/>
        <Button
        title="Registrar Usuario"
        onPress={navegarRegistro}
        />
        <Divider width={20} color='white'/>
        <Button
        title="Cerrar Sesión"
        onPress={endSession}
        />
        <Divider width={20} color='white'/>
        <Button
        title="Reestablecer Contraseña"
        onPress={navegarReestablecer}
        />
        
    </View>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
  });