import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native"
import { Input, Icon, Button } from "@rneui/base";
import { resetearClave } from "../Services/AuthenticaionSrv";

export const CambioClaveForm =()=>{
    const [mail, setMail]= useState(null);

    const resetear=()=>{
        resetearClave(mail);
    };

    return (
        <View style={styles.container}>
            <Input
            value={mail}
            onChangeText={setMail}
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
            <Button
            title="Resetear Clave"
            onPress={resetear}
            />
        </View>
    )
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