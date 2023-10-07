import axios from 'axios'
const domain = "https://fusion-delight-website-server.onrender.com";
export const registerHandler =async (payload)=>{
    try{

        const response = await axios.post(`${domain}/api/user/signup`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        alert(err.message);
    }
}

export const loginHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/user/login`,payload);
        return response;
    }
    catch (err){
        console.log(err.message);
        alert(err.message);
    }
}

export const chnagePasswordHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/user/change-password`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const chnagePasswordWithTokenHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/user/change-password-token`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const forgotPasswordHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/user/forgot-password`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateUserHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/update-profile/${id}`,payload,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const allUsersHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/user/all-users`);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
