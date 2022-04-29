import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Item from "./components/Item";
import "./css/App.css";

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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
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

      <main>
        <section className="main-banner">
          <a href="/home">
            <img
              alt=""
              className="main-banner__img"
              src="https://image.nbkorea.com/NBRB_Site/20220426/NB20220426162348127001.jpg"
            />
          </a>
        </section>

        <section className="main-items">
          <Item />
        </section>
      </main>
    </div>
  );
}

export default App;
