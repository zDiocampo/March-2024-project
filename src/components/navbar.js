import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.css";


function Navbar() {
  return (
    <Nav className='justify-content-center'>
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/calculator">Calculator</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href='/todo'>TodoList</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href='/weather'>How's the weather?</Nav.Link>
      </Nav.Item>
      </Nav>
  );
}

export default Navbar;