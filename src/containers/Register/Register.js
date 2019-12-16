import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

const Register = (props) => {

  const [redirect, setRedirect] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);


  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username: username,
      password: password
    };
    axios
      .post("https://yelpcamp-dollyp-api.herokuapp.com/register", data)
      .then(response => {
        if (response.data) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", response.data.user);
          setRedirect( true );
        } else {
          console.log("Register Error");
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  
    if (redirect) {
      return <Redirect to={"/campgrounds"} />;
    }

    if (localStorage.getItem("token")) {
      return <Redirect to={"/campgrounds"} />;
    }

    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center pb-5 my-5">
          <MDBCol sm="12" md="8" lg="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-2">Register</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn btn-outline-purple" type="submit">
                      Submit
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  
}

export default Register;
