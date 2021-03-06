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

const NewCampground = (props) => {

  const [redirect, setRedirect] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);



  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: name,
      price: price,
      image: image,
      description: description
    };
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .post("https://yelpcamp-dollyp-api.herokuapp.com/campgrounds", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setRedirect( true );
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  
    if (redirect) {
      return <Redirect to={"/campgrounds"} />;
    }

    if (!localStorage.getItem("token")) {
      return <Redirect to={"/campgrounds"} />;
    }

    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center my-5 pb-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <p className="h4 text-center py-2">Add New Campground</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={handlePriceChange}
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image"
                    value={image}
                    onChange={handleImageChange}
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
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

export default NewCampground;
