import { Button, Form } from "react-bootstrap";
import "./Contact.css";
import { CustomInput } from "../../CustomInput/CustomInput";

export const Contact = () => {
  const inputs = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter your Name",
      required: true,
    },
    {
      label: "Phone",
      type: "number",
      placeholder: "Number",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your Email",
      required: true,
    },
    {
      label: "Message",
      type: "text",
      placeholder: "Message Here",
      required: true,
    },
  ];
  const links = [
    {
      href: "tel:0404030929",
      class: "fa-solid fa-phone",
    },
    {
      href: "mailto:sushan.maharjan18@email.com",
      class: "fa-solid fa-envelope",
    },
    {
      href: "https://www.linkedin.com/in/sushan-mjhn/",
      class: "fa-brands fa-linkedin",
    },
  ];
  return (
    <div id="contact" class="container contact rounded-5 py-2">
      <h1>Contact Me</h1>

      <div class="row fa-3x">
        <div class="col d-flex justify-content-evenly pb-4 ">
          {links.map((item, i) => (
            <a key={i} href={item.href}>
              <i class={item.class}></i>
            </a>
          ))}
        </div>
      </div>
      <h3 className="text-center">or</h3>
      <div>
        <Form className="border m-5 p-5 rounded shadow ">
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}
          <div className="d-grid pt-2">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
