import { Button } from "bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Prouduct from "./Prouduct";

function Landingpage() {
  return (
<>
<Header/>


        <div>
                 <Carousel>
      <Carousel.Item>
       <img src="https://img.freepik.com/premium-photo/3d-render-smartphone-shopping-cart-isolated-blue-background-banner_387680-873.jpg" alt="img" className="w-100" height={'500px'} />
        
      </Carousel.Item>
      <Carousel.Item>
     <img src="https://img.pikbest.com/origin/10/01/82/867pIkbEsTAIq.png!w700wp" alt="img1" className="w-100"  height={'500px'}/>
       
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://img.lovepik.com//back_pic/05/71/77/565baef950a0664.jpg_wh300.jpg" alt="img2" className="w-100" height={'500px'}/>
     
      </Carousel.Item>

    </Carousel>

         <Link to={'/prouduct'} element={<Prouduct/>}>
          <button className="btn btn-dark ">View Items</button></Link>

        </div>

        <Footer/>
</>
  )
}

export default Landingpage