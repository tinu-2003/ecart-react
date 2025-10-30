
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ViewProuduct from './ViewProuduct';
import Footer from '../components/Footer';
import { FaStar } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
function Prouduct() {


  const [products,setProducts]=useState([])
  
     console.log(products);

  const baseurl = 'https://dummyjson.com/products'

  const getData = async ()=>{
     const response = await fetch(baseurl)
     const productData = await response.json()
    //  console.log(productData.products);
     setProducts(productData.products)
     
       
  }

  useEffect(()=>{
    getData()
  },[])

  return (
  <>
        <Header/>
        
<div className='bg-info p-4 '>
  
          <div className=' text-center'>
            <h2 className='m-5'>All Products</h2>
          </div>
          <div>
  
               <Container>
        <Row>
       
       {
        products.length>0? products.map((item,index)=>(
             <Col key={index} className='m-4'> 
        <Link  to={`/viewprouduct/${item.id}`} element={<ViewProuduct/>} className="text-decoration-none">
          <Card style={{ width: '18rem' }}  >
        <Card.Img variant="top" src={item.thumbnail} height={'200px'} />
        <Card.Body>
          <Card.Title >{item.title}</Card.Title>
          <Card.Text>
          <FaRupeeSign />{item.price}
          </Card.Text>

          <Card.Text> <FaStar /> {item.rating}</Card.Text>
             <Button variant="primary">View</Button>
   
        </Card.Body>
      </Card></Link>
      </Col>
        )):"empty"
       }

        </Row>
      </Container>
  
     
          </div>
</div>

        <Footer/>
  </>
  )
}

export default Prouduct