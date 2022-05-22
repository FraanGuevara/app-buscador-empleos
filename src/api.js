import axios from 'axios'

const url = "https://backendnodejstzuzulcode.uw.r.appspot.com/api/"

const instance = axios.create({baseURL: url})

/* Funcion para enviar datos a la API */
const post = (url, data) => {return instance.post(url, data)}

/* Funcion para enviar datos a la API con JWT */
const postJwt = async (url, data) => {
    const token = localStorage.getItem("token")
    if (token) {
        return await instance.post(url, data, {headers: {"Authorization": "Bearer " + token}})
    } return {data: {failed: true,message: "no token"}
    }
}

/* Funcion para traer todos los empleos */
const getJwt = (web, data)=>{
    const token = localStorage.getItem("token");
    if (token) {
        const config = {
            url: url + web,
            metod:'get',
            headers:{
                "Authorization": "Bearer " + token
            }
        }
        return axios(config)
    } return {data: {failed: true,message: "no token"}
    }
}

/* Funcion para modificar datos a la APIcon JWT */
const putJwt = async (url,data)=>{
    const token = localStorage.getItem("token")
    if (token) {
        return await instance.put(url,data,{headers:{'Authorization':"Bearer "+localStorage.getItem("token")}})
    } return {data: {failed: true,message: "no token"}
    }
}

/* Funcion para eliminar datos a la APIcon JWT */
const deleteJwt = async (url,data) =>{
    const token = localStorage.getItem("token")
    if (token) {
        return await instance.delete(url,data,{headers:{'Authorization':"Bearer "+localStorage.getItem("token")}})
    } return {data: {failed: true,message: "no token"}
    }
}

export default instance

export {post,postJwt,getJwt,putJwt,deleteJwt}