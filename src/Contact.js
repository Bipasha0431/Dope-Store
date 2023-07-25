import styled from "styled-components";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <Wrapper>
      <div className="common-heading">
        <h2>- Let's Talk -</h2>
        <p>LEAVE A MESSAGE - Happy to help you!! </p>
      </div>

      <div className="contacts">
        <div className="contact-1">
          <h3>Feel Free To Touch</h3>
          <p>Visit one of our store location</p>
          <h5>Head Office</h5>
          <div>
            <li>
              <CiLocationOn />
              <span> Argyle Street, Halifax, Nova Scotia</span>
            </li>
            <li>
              <AiFillMail />
              <span> bipasha@gmail.com</span>
            </li>
            <li>
              <BsFillTelephoneFill />
              <span> xxx78964</span>
            </li>
            <li>
              <SlCalender />
              <span> Monday-Friday | 10:00 AM -5:00 PM</span>
            </li>
          </div>
        </div>

        <div className="contact-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mzblbrdl"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0 5rem 0;
  text-align: center;

  .contacts {
    display: flex;
    padding: 30px;
  }

  .contact-1 {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {
      margin: 3px;
      font-weight: 100;
      font-size: 15px;
      color: #837c7c;
    }

    p {
      font-size: 35px;
      margin-top: 5px;
      font-weight: bold;
      margin-left: 0;
    }

    h5 {
      margin: 0;
      margin-bottom: 25px;
      font-size: 16px;
    }
    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      li {
        list-style: none;
        padding: 8px 0;
        color: #0d0d0d;
        font-size: 16px;
      }
      span {
        padding-left: 4px;
        color: #837c7c;
      }
    }
  }

  .contact-2 {
    width: 50%;
  }

  .common-heading {
    h2 {
      font-size: 35px;
    }

    p {
      font-size: 15px;
      margin-top: 10px;
    }
  }

  iframe {
    height: 50vh;
  }

  .contact-container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contacts {
      flex-direction: column;

      .contact-1,
      .contact-2 {
        width: 100%;
      }
      .contact-2 {
        margin-top: 15px;
      }
    }
    .contact-container {
      margin: 10px 25px;
      margin-bottom: 30px;
    }
  }
`;

export default Contact;
