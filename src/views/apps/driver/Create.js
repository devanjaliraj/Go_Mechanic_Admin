import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  
} from "reactstrap";
// import  axios from "axios";
import { Route } from "react-router-dom";


export default class Create extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         first_name: "",
//         last_name: "",
//         customer_email: "",
//         mobile_no: "",
        
//         selectedFile: null,
//         status: ""
//     };
//   }
  
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };
//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();


//     axios.post("http://3.108.185.7:4000/api/user/customersignup", this.state)
//       .then((response) => {
//         console.log(response);  
//         alert("Customer Added Successful")
//         this.props.history.push("/app/driver/ApprovalPendingDrivers");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
                <h1 sm="6" className="float-left">
                  Add Driver
                </h1>
            </Col>
            <Col>
              <Route render={({ history}) => (
                <Button
                className=" btn btn-danger float-right"                
                onClick={() => history.push("/app/driver/ApprovalPendingDrivers")}>                 
                Back
                </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" >
            {/* <Form className="m-1" onSubmit={this.submitHandler}> */}
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                  <Label>Select Area </Label>
                  <Input  
                    // required 
                    type="select" 
                    name="select"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                
               
    <option value="" selected="" disabled="">Select Area</option>
        <option value="df4e2f96-71d1-4e56-9577-2b0772ea2a7b">World</option>
  
         
                 
  
                 
                  </Input>
                </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name</Label>
                  <Input   
                    // required 
                    type="text" 
                    // name="last_name"
                    placeholder="Enter Name"  
                    // value={this.state.last_name}
                    // onChange={this.changeHandler}
                    >
                  </Input> 
                </Col>
                 <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label> Address</Label>
                  <Input  
                    // required 
                    type="text" 
                    // name="customer_email"
                    placeholder="Enter Address"  
                    // value={this.state.customer_email}
                    // onChange={this.changeHandler} 
                    >
                  </Input>    
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Gender</Label>
                  <Input  
                    // required 
                    type="select" 
                    name="select"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                     <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="fe-male">Female</option>
                    <option value="others">Others</option>
                  </Input>     
                </Col>
                 <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Is Company Driver</Label>
                  <Input  
                    // required 
                    type="select" 
                    name="select"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                   <option value="" selected="" disabled="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
                    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Select Company</Label>
                  <Input  
                    // required 
                    type="select" 
                    name="select"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                
    <option value="">Select Company</option>
    <option value="0">Individual</option>
    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile No.</Label>
                  <Input  
                    // required 
                    type="number" 
                    // name="mobile_no"
                    placeholder="Mobile No." 
                    // value={this.state.mobile_no}
                    // onChange={this.changeHandler}
                    >
                  </Input>    
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label> Email</Label>
                  <Input  
                    // required 
                     type="email" 
                    // name="customer_email"
                    placeholder="Email"  
                    // value={this.state.customer_email}
                    // onChange={this.changeHandler} 
                    >
                  </Input>    
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Password </Label>
                    <Input   
                    //   required 
                      type="password" 
                    //   name="sortorder"
                      placeholder="Enter Password"  
                    //   value={this.state.sortorder}
                    //   onChange={this.changeHandler}
                      >
                    </Input> 
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Confirm Password </Label>
                    <Input   
                    //   required 
                      type="password" 
                    //   name="sortorder"
                      placeholder="Enter Confirm  Password"  
                    //   value={this.state.sortorder}
                    //   onChange={this.changeHandler}
                      >
                    </Input> 
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Select Type </Label>
                  <Input  
                    // required 
                    type="select" 
                    name="select"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                   <option value="" selected="" disabled="">Select Type</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                </Col>
             
             
             
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Car Make</Label>
                  <Input  
                    // required 
                    type="select" 
                    name="select"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                   
            <option value="" selected="" disabled="">Select</option>
                        <option value="1">asdf</option>
                        <option value="2">Alfa Romeo</option>
                        <option value="3">Aston Martin</option>
                        <option value="4">Audi</option>
                        <option value="5">BMW</option>
                        <option value="6">Bentley</option>
                        <option value="7">Buick</option>
                        <option value="8">Cadillac</option>
                        <option value="9">Chevrolet</option>
                        <option value="10">v</option>
                        <option value="11">Dodge</option>
                        <option value="12">FIAT</option>
                        <option value="14">Fisker</option>
                        <option value="15">Ford</option>
                        <option value="16">GMC</option>
                        <option value="17">HUMMER</option>
                        <option value="18">Honda</option>
                        <option value="19">Hyundai</option>
                        <option value="20">INFINITI</option>
                        <option value="21">Isuzu</option>
                        <option value="22">Jaguar</option>
                        <option value="23">Jeep</option>
                        <option value="24">Kia</option>
                        <option value="25">Land Rover</option>
                        <option value="26">Lexus</option>
                        <option value="27">Lincoln</option>
                        <option value="28">MINI</option>
                        <option value="29">Maserati</option>
                        <option value="30">Mazda</option>
                        <option value="31">Mercedes-Benz</option>
                        <option value="32">Mercury</option>
                        <option value="33">Mitsubishi</option>
                        <option value="34">Nissan</option>
                        <option value="35">Oldsmobile</option>
                        <option value="36">Plymouth</option>
                        <option value="37">Pontiac</option>
                        <option value="38">Porsche</option>
                        <option value="39">Ram</option>
                        <option value="40">Rolls-Royce</option>
                        <option value="41">Saab</option>
                        <option value="42">Saturn</option>
                        <option value="43">Scion</option>
                        <option value="44">Subaru</option>
                        <option value="45">Suzuki</option>
                        <option value="46">Tesla</option>
                        <option value="47">Toyota</option>
                        <option value="48">Volkswagen</option>
                        <option value="49">Volvo</option>
                        <option value="50">smart</option>
                        <option value="52">Auto</option>
                        <option value="53">Test</option>
                        <option value="54">tetete</option>
                        <option value="55">ضضص</option>
                        <option value="56">test2022</option>
                        <option value="57">Viston</option>
                        <option value="58">KIA Rio</option>
                        <option value="59">Chrysler</option>
                 
                    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Car Model</Label>
                  <Input  
                    // required 
                    type="select" 
                    name="select"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                   <option value="" selected="" disabled="">Select</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label> Car Color </Label>
                  <Input  
                    // required 
                    type="text" 
                    // name="customer_email"
                    placeholder="Enter Car Color"  
                    // value={this.state.customer_email}
                    // onChange={this.changeHandler}
                     >
                  </Input>    
                </Col>
             
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Car Number </Label>
                  <Input  
                    // required 
                    type="number" 
                    // name="mobile_no"
                    placeholder="Enter Car Number." 
                    // value={this.state.mobile_no}
                    // onChange={this.changeHandler}
                    >
                  </Input>    
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Profile</Label>
                  <Input   
                    // required 
                    type="text" 
                    // name="first_name"
                    // placeholder="Enter First Name" 
                    // value={this.state.first_name}
                    // onChange={this.changeHandler}
                    >
                  </Input>
                </Col> 
             
              
                
              </Row>
             
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col> 
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1">
                    Add Driver
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}