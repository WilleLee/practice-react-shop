import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
/*routes*/
import Main from "./routes/Main";
import DetailScreen from "./routes/DetailScreen";
/*data*/
import links from "./data/links";
import items from "./data/items";
/*css*/
import "./css/App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" variant="light" className="nav">
        <Container className="nav-container">
          <Navbar.Brand className="nav__title">
            <Link to={links["home"]}>
              <h1>Wille World</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="nav__toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate(links["home"]);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate(links["detail"] + "0");
                }}
              >
                Shop
              </Nav.Link>
              <NavDropdown title="my page" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Cart
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Good Bye</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path={links["home"]} element={<Main />} />
        <Route path={links["detail"] + ":id"} element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
