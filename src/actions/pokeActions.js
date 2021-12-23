import { Axios } from "axios"
import { typesData, typesPk } from "../types/pokeTypes"
import axios from "axios";



export const loadDataAsync = () => {
    return async (dispatch) =>{
        const dataArr = []
        let i=1
        while(i <= 27){

        try{
            dispatch(requestSync())
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`
            const resp = await axios.get(url)
            console.log(resp.data)
            dataArr.push(resp.data)
            console.log(dataArr)
            dispatch(successSync(dataArr))
        }
        catch(err){
            dispatch(failureSync(err))
        }
        i++
    }
    }
}

const requestSync = () =>{
    return{
        type: typesData.request
    }
}
const successSync = (data) =>{
    return{
        type: typesData.success,
        payload: data
    }
} 
const failureSync = (err) =>{
    return{
        type: typesData.failure,
        payload: err
    }
} 


export const loadPkAsync = (pokeName) => {
    return async (dispatch) =>{
        console.log(pokeName)
        try{
            dispatch(requestPkSync())
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
            const resp = await axios.get(url)
            
            console.log(resp.data)
            
            dispatch(successPkSync(resp.data))
        }
        catch(err){
            dispatch(failurePkSync(err))
        }
    }
}

const requestPkSync = () =>{
    return{
        type: typesPk.requestPk
    }
}
const successPkSync = (data) =>{
    return{
        type: typesPk.successPk,
        payload: data
    }
} 
const failurePkSync = (err) =>{
    return{
        type: typesPk.failurePk,
        payload: err
    }
}  