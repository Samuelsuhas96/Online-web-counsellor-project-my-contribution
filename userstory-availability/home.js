import React, { Component, Fragment } from 'react';
import axios from "axios";
// const config = require('../config.json');



export default class Home extends Component
{

  state = {
    newdata: null,
    data: []
  }
   
  componentDidMount = () => {
    this.fetchdata();
  }
  fetchdata = async () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
    try {
      const res = await axios.get(`https://giz4eh3ou6.execute-api.ap-south-1.amazonaws.com/prod/counselor-students/${2020501109}`);
      const data =res.data;
      console.log({data});
      this.setState({ data: data });
    } catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  render () {
  return(
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-8 text-center">
          <div id="top1" class="container-fluid">
            <h5 class="container-fluid">List of students</h5>
          </div>
        <table class="table table-responsive table-success table-custom table-striped">
                  <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Student name</th>
                <th scope="col">Select</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mark</td>
                <td>  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
                <td>  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Larry the Bird</td>
                <td><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
              </tr>
            </tbody>
        </table>
        <div id="down1">
          <button><h5>Meet the student</h5></button>
        </div>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4 text-center">
        <div id="top1">
            <h5>Messages</h5>
          </div>
        <table class="table table-responsive table-success table-striped">
                  <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Student name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Larry the Bird</td>
              </tr>
            </tbody>
        </table>
        <div id="down2">
          <textarea class="form-control" placeholder="Your reply">

          </textarea> <br/>
          <button class="form-control"  type="button" >Post</button>
        </div>
                </div>
      </div>

      
    </div>
    
  );
  }
}

