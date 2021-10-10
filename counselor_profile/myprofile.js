import React, { Component, Fragment } from 'react';
// Axios module is an http wrapper-make requests and get responses
import axios from "axios";
import MultiStepForm from "./components/MultiStepForm.js";

export default class Myprofile extends Component {
  // Use to initialize states
  constructor(props) {
    super(props)
    this.state = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      s:[]
    }
  }


  // To set the value of the states

  read = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  test = (e) => {
      this.setState({s:e});
  }

  send = async () => {
    // add call to AWS API Gateway add product endpoint here
    try {
      await axios.post(`https://nce5pk5oy4.execute-api.ap-south-1.amazonaws.com/prod/corres`, {
        "email_id": `${this.state.three}`,
        "About": `${this.state.one}`,
        "City": `${this.state.five}`,
        "Mobile_number": `${this.state.four}`,
        "Name": `${this.state.two}`,
        "Skills": `${this.state.seven}`,
        "Social_links": `${this.state.six}`,
        "languages": `${this.state.seven}`
      });
      console.log("Done")
      // console.log
    }
    catch (err) {
      console.log(`An error has occurred: ${err.message}`);
    }
  }
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h1>Let us begin with knowing about you</h1><hr></hr><br />
          </div>
          <div className="App">
            <MultiStepForm/>
          </div>
        </div>
      </div>
    );
  }
}