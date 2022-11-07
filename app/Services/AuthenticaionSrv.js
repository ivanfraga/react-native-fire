import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from 'firebase/auth'

export const ingresar=(email, password)=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log("Ingreso exitoso", user);
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al ingresar", errorCode);
        });
}

export const endSession =()=>{
    const auth = getAuth();
    signOut(auth).then(()=>{
        console.log("Cierre chevere")
    }).catch((error)=>{
        console.log("Cierre no chevere");
    })
}

export const registrarUser =(email,password)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(
        auth, email, password
    ).then((userCredential)=>{
        const user = userCredential.user;
        console.log("usuario creado", user);
    }).catch((error)=>{
        const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al ingresar", errorCode);
    })
}

export const resetearClave=(email)=>{
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(()=>{
            console.log("Envio a correo chevere!");
        })
        .catch((error)=>{
            const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error al resetear", errorCode);
        })
}