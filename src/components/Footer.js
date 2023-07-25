import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className=" f_head grid grid-two-column">
            <div>
              <h3>Ready to Explore More?</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Dope Store</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>

            <div className="f_cont2">
              <div className="footer-subscribe">
                <h3>Subscribe to get important updates</h3>
                <form action="#">
                  <input type="email" name="email" placeholder="YOUR E-MAIL" />

                  <input type="submit" value="subscribe" />
                </form>
              </div>
              <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="footer-social--icons">
                  <div>
                    <FaFacebookSquare className="icons" />
                  </div>
                  <div>
                    <FaInstagram className="icons" />
                  </div>
                  <div>
                    <BsTwitter className="icons" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>@{new Date().getFullYear()} DopeStore. All Rights Reserved</p>
              <div>
                <span>PRIVACY POLICY, TERMS & CONDITIONS</span>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3.5rem 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .f_head {
      align-items: center;
    }
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 12rem 0 4rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    .container {
      display: flex;
      justify-content: space-around;
    }
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 1rem;
    }
    p,
    span {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-subscribe input[type="email"] {
      padding: 1.3rem 2.4rem;
    }
    .footer-subscribe input[type="submit"] {
      padding: 1.2rem 1.3rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 1rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-social {
      margin-top: 15px;
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    span {
      font-size: 15px;
    }
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 78vw;
      display: flex;

      40 .grid div:last-child {
        justify-self: center;
      }

      .f_head {
        display: flex;
        flex-direction: column;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }
    footer .container {
      margin-top: 25px;
      display: grid;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
