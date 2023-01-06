import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className="float-right fixed-bottom bg-transparent text-center">
      <MDBContainer className="p-2 pb-0">
        <section className="mb-1">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>


        </section>
      </MDBContainer>

      {/* <div
        className="text-center p-1"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}
