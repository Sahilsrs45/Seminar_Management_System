import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function PreSignupPage() {
    // Use navigate hook from react-router-dom to redirect the user
    const navigate = useNavigate();
  
    // Function to navigate to the prelogin page
    const signUp = () => {
        navigate('/prelogin');
      };

 // Function to navigate to the student signup page     
const studentclick =()=>{
    navigate('/stusignup')
}
// Function to navigate to the coordinator signup page
const coordinatorclick =()=>{
    navigate('/cosignup')
}
// Function to navigate to the guide signup page
const guideclick =()=>{
    navigate('/guidesignup')
}

  return (<>
  <Navbar/>
    <Container fluid> 
    <div
        className='container-fluid'
        style={{
          backgroundImage:'url(bg-mit.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100vw',
          position: 'relative',
          marginTop: '0px',
        }}
      >
        <div className="btn bg-white text-success mx-1 mr-0 p"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
 <h1>MIT-WPU</h1>
 <hr />
      <Row className="justify-content-center mt-5">
        <Col md={4}>
          <Card className="login-card" >
            <Card.Body>
              <Card.Title onClick={coordinatorclick}>Coordinator SignUp</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="login-card">
            <Card.Body>
              <Card.Title onClick={guideclick}>Guide SignUp</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="login-card">
            <Card.Body>
              <Card.Title onClick={studentclick}>Student SignUp</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <button onClick={signUp} type='submit' className='btn btn-warning'>
              Already a user to Seminar? Login
            </button>
      </div>
      </div>
      <style jsx>{`
        .card {
          background-color: #fff;
          border: 1px solid #eee;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        
        .card:hover {
          transform: scale(1.02);
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
       
        
        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #194D33;
          color:white
          
        }
        
        .card-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .removeitbtn {
          display: flex;
          justify-content: flex-end;
        }
        
        button {
          background-color: #5cb85c;
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }
        
        button:hover {
          background-color: #4cae4c;
        }
      `}</style>
        </Container>
        </>
  )}

export default PreSignupPage;