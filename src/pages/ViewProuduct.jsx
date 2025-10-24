import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Prouduct from './Prouduct';
import { FaStar } from "react-icons/fa";
import { Card } from 'react-bootstrap';


function ViewProuduct() {


   const [products,setProducts]=useState([])
   console.log(products);
   
const {id}= useParams()
// console.log(id);

const baseurl = `https://dummyjson.com/products/${id}`

const  getData= async ()=>{
   const response = await fetch(baseurl)
     const productData = await response.json()
    //  console.log(productData);
     setProducts(productData)
     
  
}
useEffect(()=>{
  getData()
},[])


  return (


    <>

    <Header/>

    <div className='bg-info p-5'>
       <div className='mt-5'>
          <Container>
      {
      
            <Row>
          <Col>
          <img src={products.thumbnail} alt="product" width={'500px'} height={'500px'} />
          </Col>
          <Col>
        <div className='p-5'>
            <h3 className='text-center'>{products.title}</h3>
            <p>{products.description}</p>
            <p>$ {products.price}</p>
            <p> <FaStar /> {products.rating}</p>

     <button className='btn btn-dark m-4'>Add To Wishlist</button>        
     <button className='btn btn-dark m-4'>Add To Cart</button> 


     <p></p>
        </div>       
               </Col>
        </Row>
      
      }
      </Container>


     
       </div>
    </div>

     <div>
         <h1 className='text-center m-5'> User Reviews</h1>

         <Container>
          <Row>

            {/* reviews */}
      {
        products?.reviews?.map((item,index)=>(
            <Col key={index}>
              <Card className='p-2'>
                
               <p className='m-3 text-center'>
                  <Card.Text>
                  {item.comment}
                  </Card.Text>
                     <Card.Text>
                  ~ {item.reviewerName}~
                  </Card.Text>
                  
                  <Card.Text>
                    <FaStar />  {item.rating}
                  </Card.Text>
  
               </p>
               
              </Card>
        </Col>

        ))
      }
        
          </Row>
         </Container>
      </div>
<Footer/>
    </>
  )
}

export default ViewProuduct