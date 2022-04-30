import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Main from "./screens/Main";
import "./css/App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" variant="light" className="nav">
        <Container>
          <Navbar.Brand href="#home" className="nav__title">
            Wille World
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav__toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Shop</Nav.Link>
              <NavDropdown title="more infos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<div>detailed pages</div>} />
        <Route path="/about" element={<div>about pages</div>} />
      </Routes>
    </div>
  );
}

export default App;
