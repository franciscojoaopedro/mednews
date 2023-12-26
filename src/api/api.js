import axios from "axios"

const url="http://localhost:3333"
 const api=axios.create({
    
    baseURL:"https://api-mednews.onrender.com",
    headers:{
        "Content-Type":"application/json",
    }
 })


 export default api