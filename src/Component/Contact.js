import "./Contact.css";

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
    </div>
  );
};
