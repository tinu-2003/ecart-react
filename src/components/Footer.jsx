import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    <>
        <div className='mt-5'>
            <Card className="text-center">
          <Card.Header>E-cart </Card.Header>
          <Card.Body>
            <Card.Title>Contact us</Card.Title>
            <Card.Text>

Building Number: 12
<br/>
Street Name: Vile Parle<br/>

Post Code: 400057
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">©2025 </Card.Footer>
        </Card>
        </div>
    </>
  )
}
