import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import './Item.css'; 
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { specificOrderDetailHandler, specificOrderHandler } from '../../services/orderApi';
import toast from 'react-hot-toast';


const OrderPage = () => {
  
  const navigate = useNavigate();
  const userData = (JSON.parse(localStorage.getItem("user")));
  if(!userData){
    navigate("/login");
  }

    const { orderId } = useParams();
    const [data , setData ] = useState([]);


    useEffect(()=>{
      const data = specificOrderDetailHandler(orderId)
      .then((res)=>{
        setData(res.data);
        toast.success("Successfully fetched"); 
      }).
      catch((err)=>{
        toast.error("Failed");
      })
    },[orderId]);

  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "lightgray", width: "100%", height: "100%" }}>
    <div className="order-page" >
      <h1>Your Order of Id : {orderId}</h1>
      
      {data?.foodDescription?.map((order) => (
        <div key={order._id} className="order-item">
          <div className="order-image" style={{width:"20%",height:"20%",marginLeft:"40%"}}>
            <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAPEBAwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABgUEAwECB//aAAgBAQAAAAClENWdoAAA8/39Dk4OuNs+4AAGbgZXl+9qp9XL7RWxoR1n3gAHlJ4oNK5YWNXxmvpR1n3gAc8RxgNvwqcnLsI3X0Y+z7wA/MHxAC9jLLJy7GM19GPte4AS84APT+j8EbZZOVYxuln8dv3APH+efkA+3va4IyyysmwgPj2uewDDkABrWoz42wx8D8jWtQJadAPt53BwRfXmBSU4ErPAFTRAcER5Baa4ExNgKCrAOCJ8R2XHuH5heAHpUb4AcUp36Etzddv0nnF5js83Vq73sAAOaG5ui37PKI4FZvgAAByQvj7VsvyKqhAAAA4YbzFHUAAAAGDJGpbgAAAGbF+R9rd0AAADJjfw7OMqqEAAAMWP+NG3wJYpaYAAAwJM7rn0TUyb9YAABNzB13PuJWeNyu+gACVnj3u+kEhhmvZfoAD5I4Z7XHaB8jcc07T0AD8xuQfu40AD8xWWd9t7AH4i8s/VrqAB5xGedtt0AecTnH2x2QAPKG4jqt+oEdiiv3AADwhuQ1LcGDJFVQgABzQ3N9tNYDAlKiiAAA5JGi1wCQrwAAD59D//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACgICEAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAA1EAACAgECAgkDAwMEAwAAAAABAwIEBQARMlEQEiAhIjAxQWFAQnETIyQGkrI0NVKDQ2Jz/9oACAEBAAE/AOw112nfYycyHb6o3lXVbx7pjjh9OWqHq2H9w0CCNwQR2r1o1K03CHW1Qy8LRCnAQbq/QXeVyZHglqMrNCz7wbA6oXlXVbjumOOH0drK1Kvv158oafnbrODZQ0x7mndjZzPySeiDJrO8JyieYO2qmceogP8A3YaS5b1xYqQlE9Nm7WqmAczYy0Qp6yPDOE4/kEHWRoTot5qPBLWKy3X2RZl4vsnrI49d1fJseGWoysUbHvBsDqhfVdVuO6Y44fQOcpCyxsxGA1fzLrO607rV28ZeNN43P7U+PpzNAviLCh44DxDWOyc6R6kvEk6IRcR7MUwav0GUmc1HgnrFZbrbV7EviE9ZHHLur5NHDLUZWKNj3g2B1Qvquq5THHHzrNlNRRa0/ge5Orl111nXYe77Yew8lWZetUIb8MQNNffo3ZyYw/q+/KeqN5V1e8e6Y4oay2K4rNcfM4ax2RZSnzUeKOiK9yv7TVMav0GUmc1ngnrFZbfavYl8QnrI46F1fJw4ZajKxRse8GwOqF9d1W47pjjh5k5wVCbJnaERuTq/dndeZnuiOCPl36K7qtj3THBLX8mhZ94NgdUL6rquTBxw1lcVxWK8fmcNY7Isoz5qPFHRFe7X9pqmNX6DKTOazwT1istwosy+IT1kcdC6vk4cJ1Cb6b9xvBkDqheVdVuO6Y44eXnbu8xUgfmflxVOQBA6L9Bd1XJg4J6/k0LPvBsDqhfVdVyaOOGsriuKxXj8zhqhkGUWc1Hjhr+Per+01TGr9BlJvNZ4J6xmY6gCLR8H2z1lbKbVuU1cAAGkPbXbFqpbSGqN5V1XWHdMccPJsOCENcfSEd9TnJk5Tkd5SJJPyfKAJIA0mjXWhUCPEIAHpv0F3VcmDgnr+RRse8GwOqGQVdXyaOKGstivWxXHzOGqF9tJnNZ4oaJq36hJIkqQ/t0fU9New2s2LVS2kNUrirqQyHqOOPkZ9phVUv8A5z8vDVv17YmeBXi7N+gu6rkyPDPRFilY91tWdY7JLuw2PhcPWOszjoq/kpG0CfHHQnOMZREyIn1APcezhWShfUPae4Pkf1Cf3q4/9PKiDIiIG5J2A1j6Yp1ow+898+1foLur5MHBPU4vpv2O8GQOrmVsXEwVMRAHawFbctsn28EfI/qL/UI/+PlYXHdTa23/AKx5F+gu6vkwcE9OSyuyS2R2kO1hJQNCAHqJy38j+oh46p+JeTisSW7PsDwfZDyr9BV1ex7pjgnp6G12yW2O0h2aV1tJwnD8Sjz1WsqtKDFS7U5wXCU5yEYRG5J1kbpu2DP0gO6A7alMdMQXAykfYaoYWCtmWfFP2h5l2iq6rqz7pDgnqeIvxnt+jvqtgJnvss2+I6ngqRhtHrwOrdR1RpWwfg+x6Kdx1NvXWfiUfY6q2021Biz+R7jsNatK5MZIRhH1OsjkmXZ7DwqHpHpjQuziJCszRqWh612/2HQqWpeldv8AYdLxF9n/AIdvmWkYAer3b/ENIrorx6qliI+ht1FW1FbB+D7g6t1W1HFTR0VbTqjQxUtUrybqutDukOKHQ96q6pNbLaA1fvtvM5LHBDpxeJCgH2I+P2h9RdpqupMJ+o4JasV21myU2O0h0Ie2u2LVS2kNKzdQ1i1ncweq9XLjrjeuw/iPsOnEYvqbWXjxfZD6q/QXdVse5g4J6apiGSWyJjKJ2I7OIxm+1l4+YR+sz0Kv6MDM7P8As7GJr17FoB0vkQ/5/WZHIrpQ5uPpHTnNeyTGzMpy9T2ASCCDsRrF5UP2S87N9pc/qslk4UwYQ8T9MZNs5TnIykTuSelNC09LHLXvGHYxeX6+yLJ8X2T+oyeVFXdKTu7/AA1KUpEykSSTuSenHUJ3WclDjlpa4KhGEIgRiNgNZbFdfezXj8zh2MXl/RFmfxBn02Ty4VuisfH7z0ST00KLLruqO6A45aSlaFQWuO0Y9OWxXFZRH5ZDsYvLFWyLB8H2z0CCAR9HlMvxV6svibOxTptuOC4fmUuQ1WrKqqipQ7h2cti/0t7CB4Pvh2MXljW2S/vT/hqMoyAlEggjcEfQ5TLlu6Kx8H3z7Fas206KljVSoqokLWPyeZ7RAIIOsti/0CXpH7XYxmUnTPUZ4k6hODIRnCQlEjcEedKQiDKRAAG5J1lMsbO6UEhP+fYQhlhsVLjvI6o0l0k9SPEeOfkECQMSAQRsQdZTGGpP9Rfek9jHZJlKex8ST6x0pq3LixchKMvQ+ZKUIQlOchGMRuSdZLKStkrXuE9ha5tnFa4mUpHYDWPoQpK5slxy8qcIMjKE4iUSNiDrJ46VJm8e9MuE9ihfbSZzWeKGkPVYVFqpbxPlNatK5MZIRjH1Osjkp3ZbDwpHpHsQhJkowhEmROwA1jcdClDeWxdLzGqW5clsiJRkNiNX6E6TeazwS7FK86k3rw9DxQ1WtJtKDFS8hrlIXJrZdWEdZDItvM5KHBDsAGRAAJJ1i8YKsQ1o3cfOehdhUlMjvE6vUWUnGEu+J4J9ipbdTaGLP5HsdVLabigxZ/MfcdvOPZO7NRPgV2cTjBXAe4fu/QWayrSZKaNXKjabiuf5jLmOxhpzjfT87g9vMY0v/kJHjA8Y7GJxXU2sPHj+yH0Vuoq2krYPweR1aqtqOkpg6IxlKQjEEknYAaxeOFOHXn3ul5GUxP6u76w8f3w0QQSCNjrFYnqbWLEfmEPpLlNVxJhP1+yWpYi/GZj+hrG4uNPxs2k7yrn++/8AdD6z/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAgEBPwAIf//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQMBAT8ACH//2Q=="} alt={order.name} style={{width:"100%",height:"100%"}}/>
          </div>
          <div className="order-details">
            <h2>{order.foodTitle}</h2>
            <p><strong>Quantity:</strong> {order.Quantity}</p>
            <p><strong>Price:</strong> ${order.prize.toFixed(2)}</p>
            {order.foodChoices === true && (<p><strong>Description:</strong> {order.foodChoices[0].choice_type} - ${order.foodChoices[0].choice_prize}</p>)}
            <p><strong>Order Date/Time:</strong> {new Date(data.createdAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
    <div className = "order-page" style={{backgroundColor:"white",fontWeight:"bold",fontSize:"48px"}}>
    <div key={data?.deliveryInfo?._id} className="order-item">
    <div className="order-image" style={{width:"100%",height:"100%"}}>
    
    <h2 style={{color:"orangered"}}>{data.orderStatus}</h2>
    {data.address === "undefined undefined undefined undefined" && (<h2 style={{color:"orangered"}}>PickUp Order</h2>)}
     <h1 style={{color:"green"}}>Total Prize : ${data.totalPrize}</h1>
    </div>
    {data?.deliveryInfo  ===true && (<div className="order-details">
      <h2>Delivery Info:</h2>
      <p><strong>Name:</strong> {data?.deliveryInfo?.name}</p>
      <p><strong>Number Date/Time:</strong> {data?.deliveryInfo?.number}</p>
    </div>)}
  </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrderPage;
