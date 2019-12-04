import React,{ Component , Fragment } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow,MDBInput , MDBBtnGroup, MDBListGroup , MDBInputGroup ,MDBListGroupItem } from "mdbreact";
class Coursrlist extends Component{

     state ={
         isEdit:false
         }

    rendercourse = ()=>{
        return(
            <MDBContainer>

<MDBListGroup >
    <MDBListGroupItem className="d-flex justify-content-between align-items-center " >{this.props.details.name}
           <MDBBtnGroup size="sm" className="mb-4">
            <MDBBtn  color="red"  onClick={ ()=>{this.props.deletecourse(this.props.index)}}>Delete</MDBBtn>
            <MDBBtn color="warning" onClick={()=>{this.togglestate()}}>Edit</MDBBtn>
          </MDBBtnGroup>
    </MDBListGroupItem>
</MDBListGroup>
          </MDBContainer>
        

        )
    }


    
    togglestate = () =>{
        let {isEdit} = this.state;
        this.setState({
            isEdit:!isEdit
        })
    }


    editcourseitem = (e) =>{
      e.preventDefault();
      this.props.updatcoures(this.props.index,this.input.value)
      this.togglestate();
    }

    renderupdatecourse = () =>{
        return(
          
            <MDBContainer>
   <form>
            <MDBListGroup >
                <MDBListGroupItem className="d-flex justify-content-between align-items-center " >

 <div className="input-group">
  <input type="text" className="form-control"
   style={{height:"30px" ,borderTop:"none" , borderLeft:"none" ,borderRight:"none",}} 
  defaultValue={this.props.details.name}
  ref={(v)=>{this.input= v}} /> 
<div className="input-group-append">
      <MDBBtnGroup size="sm" className="mb-4">
        <MDBBtn color="success" onClick={this.editcourseitem}>update</MDBBtn>
      </MDBBtnGroup>
  </div>
</div>
                </MDBListGroupItem>
            </MDBListGroup>
            </form>
                      </MDBContainer>
                  
        )
    }

      

    render(){
        let {isEdit}=this.state;
        return(
        
            <Fragment>
                { isEdit ? this.renderupdatecourse() : this.rendercourse()}
          </Fragment>
        )
    }
};
 export default Coursrlist;

