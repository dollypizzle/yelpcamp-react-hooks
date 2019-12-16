import React, {  } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Thumbnail = styled.div`
  padding: 0;
  img {
    width: 100%;
    height: 200px;
    padding-top: 10px;
  }
  .caption(padding: 9px;);
`;

 
const Body = (props) => {
 
    return (
      <div className="col-md-3 col-sm-6">
          <Thumbnail>
            <img alt="" src={props.obj.image} />
            <div>
              <h4>{props.obj.name}</h4>
            </div>

            <p>
                <Link
                  to={'/campgrounds/' + props.obj._id + '/show'}
                  className="btn btn-purple"
                >
                  More info
                </Link>
              </p>
          </Thumbnail>    
        </div>    
    );
  
}

export default Body;

