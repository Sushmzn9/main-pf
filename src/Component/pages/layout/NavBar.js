import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { motion } from "framer-motion";

export const NavBar = () => {
  const inputs = [
    {
      href: "#home",
      title: "Home",
    },
    {
      href: "#about-me",
      title: "About",
    },
    {
      href: "#skills",
      title: "Skills",
    },
    {
      href: "#projects",
      title: "projects",
    },
    {
      href: "#contact",
      title: "Contact",
    },
  ];
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.2,
      }}
    >
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container className="container">
          <Navbar.Brand href="#home">
            <div className="name">
              <div>
                <b>Sushan</b>
              </div>
              <div className="line"></div>
              <div>
                <b>Soft. Developer</b>
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {inputs.map((item, i) => (
                <Nav.Link key={i} href={item.href}>
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};
