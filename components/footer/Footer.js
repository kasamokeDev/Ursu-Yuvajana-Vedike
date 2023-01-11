import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted w-100"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="www.facebook.com" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="www.twitter.com" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="www.google.com" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="www.instagram.com" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Ursu Yuvajana Vedike
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Life Members
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Vision
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Member Registration
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Admin Login
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Bangalore, 23
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                kasamoke.dev@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                01 01 01 01
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                12 12 12
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://kasamoke.com/">
          kasamoke.com
        </a>
      </div>
    </MDBFooter>
  );
}
