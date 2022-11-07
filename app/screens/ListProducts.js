import { Button } from "@rneui/base";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"
import { consultar } from "../Services/ProductSrv";
import { FAB, ListItem, Avatar } from '@rneui/base';


export const ListProducts = ({navigation}) => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getProducts();
        console.log("Ejecución de UseEffect");
    }, []);

    const getProducts = () => {
        console.log("Recuperando Productos");
        consultar(setProductos);
    }

    return <View style={styles.container}> 
        <FlatList
            data={productos}
            renderItem={
                ({ item }) => {
                    return <View>
                        
                        <ListItem topDivider>
                            <Avatar
                                title={item.nombre.substring(0, 1)}
                                containerStyle={{ backgroundColor: '#6733b9' }}
                                rounded
                            />
                            <ListItem.Content>

                                <ListItem.Title>
                                    {item.nombre}
                                </ListItem.Title>

                            </ListItem.Content>
                            <ListItem.Content>

                                <ListItem.Title>
                                    $ {item.precio}
                                </ListItem.Title>

                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        
                    </View>
                }
            }
            keyExtractor={(item) => { return item.codigo }}
        />
        <FAB
            title='+'
            placement="right"
            onPress={()=>{
                navigation.navigate('ProductoFormNav', {fnRecargarLista: getProducts});
            }}
            />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});