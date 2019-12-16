import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Table = props => {
  const [redirect, setRedirect] = useState(false);

  const deleted = () => {
    const token = localStorage.getItem('token');


    axios
      .delete(
        "https://yelpcamp-dollyp-api.herokuapp.com/campgrounds/" +
          props.obj._id,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        setRedirect( true );
      })
      
      .catch(err => console.log(err));
  }

  
    if (redirect) {
      return <Redirect to={"/campgrounds"} />;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="thumbnail">
              <h2>
                More information about:{" "}
                <strong>{props.obj.name} campground!</strong>
              </h2>
              <img
                style={{ width: "100%", height: "300px" }}
                alt=""
                className="img-responsive"
                src={props.obj.image}
              />
              <div className="caption-full">
                <h4 className="float-right">₦{props.obj.price} /Night</h4>
                <h4>{props.obj.name}</h4>
                <p>{props.obj.description}</p>

                <p>
                  <Link
                    style={{ marginRight: "5px" }}
                    to={"/campgrounds/"}
                    className="btn btn-success"
                  >
                    Go back
                  </Link>
                  {props.userId === props.obj.owner && (
                    <>
                      <Link
                        style={{ marginRight: "10px" }}
                        to={"/campgrounds/" + props.obj._id}
                        className="btn btn-warning"
                      >
                        Edit
                      </Link>
                      <button onClick={deleted} className="btn btn-danger">
                        Delete
                      </button>
                    </>
                  )}  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Table;
