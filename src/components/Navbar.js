import logo from '../images/logo.png';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { TiChevronRight, TiPhoneOutline } from "react-icons/ti";

function navbar() {
  return (
    <div className="App">
      <Navbar sticky="top" expand="sm" collapseOnSelect  >
        <Nav.Link href="/"><img src={logo} width="40px" className='navbar-logo' /></Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className='navbar-menu'>
          <Nav>
            <NavDropdown title="Products" className='navbar-dropdown' >
              <NavDropdown.Item href="book_a_product">Book a Product</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Solutions" className='navbar-dropdown' >
              <NavDropdown.Item href="#solutions/lorem1">Lorem1</NavDropdown.Item>
              <NavDropdown.Item href="#solutions/lorem2">Lorem2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#enterprise" className='navbar-dropdown' >Enterprise</Nav.Link>
            <NavDropdown title="Customers" className='navbar-dropdown' >
              <NavDropdown.Item href="#customers/lorem1">Lorem1</NavDropdown.Item>
              <NavDropdown.Item href="#customers/lorem2">Lorem2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Learn" className='navbar-dropdown' >
              <NavDropdown.Item href="#learn/lorem1">Lorem1</NavDropdown.Item>
              <NavDropdown.Item href="#learn/lorem1">Lorem2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" className='navbar-dropdown' >
              <NavDropdown.Item href="#about/lorem1">Lorem1</NavDropdown.Item>
              <NavDropdown.Item href="#about/lorem1">Lorem2</NavDropdown.Item>
            </NavDropdown>
            <div className='button'>
              <button className='book-a-demo-button-navbar'>
                Book a demo
                <TiChevronRight className="book-a-demo-button-icon" />
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
