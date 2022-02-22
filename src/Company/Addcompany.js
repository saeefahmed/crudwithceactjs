import React from 'react';  
import axios from 'axios';  
import '../Company/Addcompany.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addcompany extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'' 
}  
}   
Addcompany=()=>{  
    console.log(this.state.Name);
  axios.post('https://localhost:7180/api/company', {CompanyName:this.state.Name })  
.then(json => {  
    console.log(json);
if(json.status===200){  
  
  alert("Data Save Successfully");  
//this.props.history.push('/Companylist')  
}  
else{  
//alert('Data not Saved');  

//this.props.history.push('/Companylist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Company Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="Name" onChange={this.handleChange} value={this.state.Name} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addcompany} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addcompany;  