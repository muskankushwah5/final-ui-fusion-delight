import axios from 'axios'
const domain = "https://fusion-delight-website-server.onrender.com";
const domain2 = "https://fusion-delight-server-backend-2-0.onrender.com";

export const addBookingHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/dish/add-dish`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateDishHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/api/dish/update-dish/${id}`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}


export const deleteDishHandler =async (id)=>{
    try{
        const response = await axios.delete(`${domain}/api/dish/delete-dish/${id}`);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}




export const allDishesHandler =async (type)=>{
    try{
        const response = await axios.get(`${domain2}/api/dish/specific-cuisine/${type}`);

        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
