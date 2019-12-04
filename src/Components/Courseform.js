import React from "react";
import { MDBBtn, MDBCol, MDBInput ,MDBContainer, MDBRow } from "mdbreact";

const Courseform =(props)=>{
    return(
        <div>

<MDBContainer >
               <MDBRow  >
               <MDBCol >
                      <form >

            <p className="h5 text-center mb-4">Add New Coursres</p>
              <MDBInput   label="Type your course"  group type="text"  
              validate   error="wrong"   success="right" 
              onChange={props.updatecourse}
              value={props.cuurent}/>
      
            <div className="text-center">
              <MDBBtn outline color="warning" onClick={props.addcourse}>Add Course</MDBBtn>
            </div>
          </form>
          </MDBCol>
          </MDBRow>
               </MDBContainer>
        </div>
    ) 

}

export default Courseform;