import "./Contact.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  return (
    <div id="contact" class="container contact rounded-5 py-2">
      <h1>Contact Me</h1>

      <div class="row fa-3x">
        <div class="col d-flex justify-content-evenly pb-4">
          <a href="tel:0404030929">
            <i class="fa-solid fa-mobile"></i>
          </a>
          <a href="mailto:sushan.maharjan18@email.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/sushan-mjhn/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <h3 className="text-center">or</h3>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              maxLength={10}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Message"
              maxLength={500}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
