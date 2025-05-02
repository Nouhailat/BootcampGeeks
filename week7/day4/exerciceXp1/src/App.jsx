import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import ErrorBoundary from "./ErrorBoundary";

// Functional components
const HomeScreen = () => <h1>home</h1>;

const ProfileScreen = () => <h1>profile</h1>;

const ShopScreen = () => {
  throw new Error("Shop error");
};

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>My App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
            <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
