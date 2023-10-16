import React, { useState } from 'react';
import Navbar from './Navbar/Navbar'; // Import the React component for navbar.html
import Hero1 from './Hero/Hero1'; // Import the React component for hero1.html
import Menu1 from './Menu/Menu'; // Import the React component for menu1.html
import Cart1 from './Cart/Cart'; // Import the React component for cart1.html
import Footer from './Footer/Footer'; // Import the React component for footer.html
import '../App.css'; // Import your external CSS styles
import Modal from './Footer/CartModal';
import AddressModal from './Footer/AddressModal';
import { useNavigate } from 'react-router';

function App() {

  
  const navigate = useNavigate();
  const userData = (JSON.parse(localStorage.getItem("user")));
   
  const [showModal, setShowModal] = useState(false);

  const [isPickup, setIsPickup] = useState(false);

  const [showAddressModal, setShowAddressModal] = useState(false);

  const [cartItem , setCartItem] = useState([]);

  const handleAddressCloseModal = () => {
    setShowAddressModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const checkoutWithCartHandler = (val)=>{
    if(!userData){
      navigate("/login");
    }
    setIsPickup(val);
    setShowAddressModal(true);
  }

  return (
    <div style={{position:"relative"}}>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero1 />
        <div className="maincontent">
          <div className="container">
            <section id="menu">
              <Menu1 cartItem={cartItem} setCartItem={setCartItem}/>
            </section>
          </div>
        </div>
       <Cart1   cartItem= {cartItem} />
       </main>
      <footer >
        <Footer  setShowModal={setShowModal}/>
      </footer>
      {showModal && (
        <Modal
          cartItem= {cartItem} 
          setCartItem={setCartItem}
          show={showModal}
          setIsPickup = {setIsPickup}
          handleClose={handleCloseModal}
          checkoutWithCartHandler={checkoutWithCartHandler}
          title="My Modal"
          content="This is the modal content."
        />
      )}
      {showAddressModal && (
        <AddressModal
         isPickup = {isPickup}
          show={showAddressModal}
          handleClose={handleAddressCloseModal}
          title="My Modal"
          content="This is the modal content."
        />
      )}
    </div>
  );
}

export default App;

