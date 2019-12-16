import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table/Table";

import { MDBContainer } from "mdbreact";

const Show = (props) => {

  const [campground, setCampground] = useState(null);

  const [user, setUser] = useState(null);
 

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("user"));
    setUser( authUser );

    axios
      .get(
        "https://yelpcamp-dollyp-api.herokuapp.com/campgrounds/" +
          props.match.params.id
      )
      .then(response => {
        setCampground( response.data );
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props]);

  const tabRow = () => {
    
    return (
      campground && (
        <Table
          obj={campground}
          userId={user && user._id}
          key={campground._id}
        />
      )
    );
  }

  
    return <MDBContainer>{tabRow()}</MDBContainer>;
  
}

export default Show;
