import Swal from 'sweetalert2'
import {getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from '@firebase/auth'
import { facebook, google } from '../firebase/firebaseConfig'
import { types } from '../types/authTypes'



export const login = (id, displayname) =>{
    return{
        type: types.login,
        payload:{
            id,
            displayname
        }
    }
}
export const loginGoogle = () =>{
    return(dispatch) =>{
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}
export const loginFacebook = () => {

    return (dispatch) => {
        const auth = getAuth()       //* Función de FireBase que obtiene la authentication de Google y returna la info de quien se autentico
        signInWithPopup(auth, facebook)  //* Es una petición, hay distintos modos de visualización de signIn
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))  //* Manda en el dispatch login los parametros desestructurados del user
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const loginEmailPassword=(email, password) =>{
    return(dispatch) =>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName))
        })
        .catch(error=>{
            console.log(error)
            console.log(Object.keys(error))
            console.log(error.code)
            console.log(error.name)
            console.log(error.customData)
            console.log('Username does not exist')
            Swal.fire('Error',error.code === 'auth/user-not-found' ? 'There is no user record corresponding to this identifier. The user may have been deleted.': error.code === 'auth/wrong-password' ?'The password is invalid or the user does not have a  password.': '<strong>Invalid form!</strong><br> Please provide a value for the required fields in the form.' ,'error' )
            //auth/user-not-found
            //auth/wrong-password
        })
    }
}

export const logoutAsync = () => {
    return( dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSync())
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSync = () => {
   return{
       type: types.logout
   }
}