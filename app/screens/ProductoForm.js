import { Input, Icon, Button, Divider } from "@rneui/base";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import { Guardar } from "../Services/ProductSrv";
import { endSession } from "../Services/AuthenticaionSrv";

export const ProductoForm=({navigation, route})=>{

    const [codigo, setCodigo]= useState();
    const [nombre, setNombre]=useState();
    const [precio, setPrecio]= useState();

    const saveProduct =()=>{
        console.log("Guardar producto");
        Guardar({
            codigo: codigo,
            nombre: nombre,
            precio: parseFloat(precio)
        })
        clean();
        navigation.goBack();

        if(route.params && route.params.fnRecargarLista){
            route.params.fnRecargarLista();
        }
    }

    const clean=()=>{
        setCodigo(null);
        setNombre(null);
        setPrecio(null);
    }

    return <View style={styles.container}>

        <Input
            value={codigo}
            onChangeText={setCodigo}
            label='Codigo'
            keyboardType='number-pad'
            leftIcon={
                <Icon
                  name='barcode'
                  type='ant-design'
                  size={24}
                  color='black'
                  
                />
              }
        
        />

        <Input
            value={nombre}
            onChangeText={setNombre}
            label='Nombre'
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
            value={precio}
            onChangeText={setPrecio}
            label='Precio'
            keyboardType='number-pad'
            leftIcon={
                <Icon
                  name='money'
                  type='font-awesome'
                  
                  size={24}
                  color='black'
                  
                />
              }
        
        />
        <Button
        title="Guardar"
        onPress={saveProduct}
        />
        <Divider width={20} color='white'/>
        <Button
        title="Cerrar Sesión"
        onPress={endSession}
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