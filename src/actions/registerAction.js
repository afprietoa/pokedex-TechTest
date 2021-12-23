import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth"

import Swal from 'sweetalert2'
import { types } from "../types/authTypes"

export const register = (email, password, name) =>{
    return{
        type: types.register,
        payload:{
            email,
            password,
            name
        }
    }
}
export const registerEmailPassword = (email, password, name) =>{
    return (dispatch) =>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
            await updateProfile(auth.currentUser, {displayName: name})
            dispatch(register(user.email, user.uid, user.displayName))
        })
        .catch(error=>{
            console.log(error)
            console.log(error)
            console.log(Object.keys(error))
            console.log(error.code)
            console.log(error.name)
            console.log(error.customData)
            //auth/email-already-in-use
            Swal.fire('Error',error.code === 'auth/email-already-in-use' && 'The email address is already in use by another account.', 'error' )
        })
    }
}