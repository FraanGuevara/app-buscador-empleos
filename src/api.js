import axios from 'axios'

const url = "https://backendnodejstzuzulcode.uw.r.appspot.com/api/"

const instance = axios.create({
    baseURL: url
})

const post = (url,data) => {
    console.log(data)
    return instance.post(url,data)
}

const postJwt = async (url,data) => {
    const token = localStorage.getItem("token")
    if (token) {
        return await instance.post(url,data,{
            headers:{"Authorization": "Bearer "+token}
        })
    }
    return {
        data: {failed:true,message:"no token"}
    }
}

export default instance

export {post,postJwt}