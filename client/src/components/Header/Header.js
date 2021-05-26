import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router";

//* IMPORTING STYLES HERE...
import styles from "./style.module.css";

export const Header = ({ data, history, username }) => {

  const {
    location: { pathname },
  } = history;

  const handleClick = (path, title) => {
    history.push(path);
    document.title = title;
  };

  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        expand="lg"
        className="justify-content-between"
      >
        <Container fluid>
          <Navbar.Brand onClick={() => handleClick("/", "Netflix Clone")}>
            Netflix Clone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="justify-content-end"
              defaultActiveKey="/"
              activeKey={pathname}
            >
              {data.map(({ label, path, title, ...rest }) =>
                rest.tabs ? (
                  <NavDropdown title={username} id="basic-nav-dropdown">
                    {rest.tabs &&
                      rest.tabs.map(({ label, path, title }) => (
                        <NavDropdown.Item
                          className="mr-auto"
                          eventKey={path}
                          key={`header-${label}`}
                          onClick={() => handleClick(path, title)}
                        >
                          {label}
                        </NavDropdown.Item>
                      ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    eventKey={path}
                    key={`header-${label}`}
                    onClick={() => handleClick(path, title)}
                  >
                    {label}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default withRouter(Header);
