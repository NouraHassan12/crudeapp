import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow , MDBCardBody , MDBCard} from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import Courseform from './Components/Courseform';
import Coursrlist from './Components/Coursrlist';

class App extends Component {

  state = {
    coursrs :[
      {name:"html"},
      {name:"css"},
      {name:"javascript"},
    
    ],
    current :''

  }

  updatecourse = (e) => {
     this.setState({
      current:e.target.value
     })
  }

  addcourse =(e) => {
 e.preventDefault();
 let current = this.state.current;
 let courses = this.state.coursrs;
 courses.push({name:current});
 this.setState({
  courses,
  current:''
 })

  }

  deletecourse = (index) =>{
    let coursres = this.state.coursrs;
    coursres.splice(index , 1);
    this.setState({
      coursres
    })

  }

  updatcoures = (index,value) =>{
    let coursres = this.state.coursrs;
    let course = coursres[index];
     course['name'] = value;
     this.setState({
      coursres
     })

  }
  render() {
     const {coursrs} = this.state;
     const courselist = coursrs.map( (coursr , index)=>{
        return  <Coursrlist details={coursr} key={index}  deletecourse={this.deletecourse}
         index={index} updatcoures={this.updatcoures}/>
     })

    return (
      <MDBContainer >
        <MDBRow center style={{ height: "100vh" , }}>
          <MDBCol middle="true" sm="10" className="text-center">
            {/* <img src={logo} alt="logo" style={{ width: "10rem" }} />
            <h1>Welcome to Your MDB React App</h1> */}
            {/* <p className="mb-2">The application is configured and ready to import our components.</p> */}
            {/* <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></MDBBtn> */}

          
                <ul>{courselist}</ul>
             <Courseform  updatecourse={this.updatecourse} addcourse={this.addcourse} cuurent={this.state.current}/>
            
          </MDBCol>
        </MDBRow>

        
      </MDBContainer>
    );
  }
}

export default App;
