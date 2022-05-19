import axios from 'axios'

const url = "https://backendnodejstzuzulcode.uw.r.appspot.com/api/"

const instance = axios.create({
    baseURL: url
})

const post = (url, data) => {
    return instance.post(url, data)
}

const postJwt = async (url, data) => {
    const token = localStorage.getItem("token")
    if (token) {
        return await instance.post(url, data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
    }
    return {
        data: {
            failed: true,
            message: "no token"
        }
    }
}


/* Funcion para traer todos los empleos */
const getJwt = (web, data)=>{
    const token = localStorage.getItem("token");
    if(token){
        const config = {
            url: url + web,
            metod:'get',
            headers:{
                "Authorization": "Bearer " + token
            }
        }
        return axios(config)
    }else{
        data={
            failed: true,
            message: "no token"
        }
    }
}


export default instance;

export {post,postJwt,getJwt
}