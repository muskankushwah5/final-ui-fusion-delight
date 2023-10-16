
import './Footer.css';
import "../../App.css";
function Footer({hideCart,setShowModal}) {


  const handleShowModal = () => {
    setShowModal(true);
  };

    return(
      <div>
      <footer className="text-center" style={{border:"0px",borderColor:"white"}}>
      {!hideCart &&(
        <div className=" my-cart-icon my-cart-icon-affix cart-box" onClick={()=>handleShowModal()} style={{width:"6%",marginLeft:"2%"}}>
        <img src="./img/cart.svg"/> 
        <span className="badge badge-notify my-cart-badge">1</span>
        </div>
      )}
      <p 
        className='copyright'
      >&copy; <a href="https://bootstrapstarter.com/bootstrap-templates/template-fooddelivery-bootstrap-html/">All Rights are reserved </a> Thai buddha</p>
      </footer>
      </div>
    );
  }
  
  export default Footer;
  