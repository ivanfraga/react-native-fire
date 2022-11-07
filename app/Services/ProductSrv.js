import {doc, setDoc, collection, getDoc, getDocs}from 'firebase/firestore'

export const Guardar=(producto)=>{
    const productRef = doc(global.dbCon, 'Productos', producto.codigo);
    setDoc(productRef, producto);
}

export const consultar=async(fnSetProductos)=>{
    const productosRef= collection(global.dbCon, 'Productos');
    const SnapProducts = await getDocs(productosRef);
    let ArrayProducts=[];

    SnapProducts.forEach((document)=>{
        console.log("Documento", document.data());
        ArrayProducts.push(document.data());
    });
    fnSetProductos(ArrayProducts);

}