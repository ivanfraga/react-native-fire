import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native"
import { Input, Icon, Button } from "@rneui/base";
import { registrarUser } from "../Services/AuthenticaionSrv";

export const RegistroForm=()=>{
    const [user, setUser]= useState(null);
    const [clave, setClave]= useState(null);
    const [confirmation, setConfirmation]= useState(null);
    const [errorRegister, setErrorRegister]= useState();
    let hasErrors = false;

    const registrar=()=>{
        validation();
        if(hasErrors==false){
        registrarUser(user, clave)};
    }

    const validation=()=>{
        if(user==null || user=='' || clave==null || clave=='' || confirmation==null || confirmation==''){
            Alert.alert("Requisito","Debe completar todos los campos");
            console.log("campos incompletos");
            hasErrors=true;
        }
        if(clave!=confirmation){
            setErrorRegister("La contraseña es distinta");
            console.log("confirmación no exitosa");
            hasErrors=true;
        }
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
        <Input
            value={confirmation}
            onChangeText={setConfirmation}
            label='Confirmar Contraseña'
            leftIcon={
                <Icon
                name='idcard'
                type='ant-design'
                  
                  size={24}
                  color='black'
                  
                />
              }
            errorMessage={errorRegister}
        
        />
        <Button
        title="Registrar"
        onPress={registrar}
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