import React, { Component, Fragment } from 'react';
// Axios module is an http wrapper-make requests and get responses
import axios from "axios";
import boy from './Images/boy.jpg';
import girl from './Images/girl.jpg';

//The style sheet for counselor home page.
import './counselor_home.css';


export default class Home extends Component {

  constructor(props) {
		super(props);
		this.state = {
// Students array to store the list of all the students
		  students: [],
		  counsellors:[],
		  data:this.props.data,
		  counsellor:this.props.counsellor,
// To store the selected student name
		  sname :"",
// To store the selected counsellor name
		  cname :""
		  
		};
	  }

  render() {
    return (<div>
      <div class="col-12 text-center mt-5">
      <h1>"Become a counselor at MSIT and make a difference"</h1><hr></hr><br/>
      </div>
      <div class="container two-col-example ">
        <div class="row">
          <div class="col-lg-6 col-xs-12">
            <h2><b>Meet your students here</b></h2>
            <div class="card-deck mb-1 text-center">
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                  {/* <i class="fas fa-print fa-4x com-icon"></i> */}
                  <h4 class="card-title pricing-card-title">Justin beiber</h4>
                  <p class="mt-3 mb-4 pt-1 pb-1"><b>Registration Id : 2020501109</b></p>
                  <button type="button" class="btn-lg btn-primary btn-sm">Schedule meeting</button>
                </div>
              </div>
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <img src={girl} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                  {/* <i class="fas fa-cloud fa-4x com-icon"></i> */}
                  <h4 class="card-title pricing-card-title">Salena Gomez</h4>
                  <p class="mt-3 mb-4 pt-1 pb-1"><b>Registration Id : 2020501109</b></p>
                  <button type="button" class="btn btn-primary btn-sm">Schedule meeting</button>
                </div>
              </div>
            </div>
            <div class="card-deck mb-1 text-center">
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <img src={girl} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                  {/* <i class="fas fa-calendar-alt fa-4x com-icon"></i> */}
                  <h4 class="card-title pricing-card-title">Dua lipa</h4>
                  <p class="mt-3 mb-4 pt-1 pb-1"><b>Registration Id : 2020501109</b></p>
                  <button type="button" class="btn btn-primary btn-sm">Schedule meeting</button>
                </div>
              </div>
              <div class="card mb-4 box-shadow">
                <div class="card-body">
                  <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                  {/* <i class="fas fa-print fa-4x com-icon"></i> */}
                  <h4 class="card-title pricing-card-title">Justin beiber</h4>
                  <p class="mt-3 mb-4 pt-1 pb-1"><b>Registration Id : 2020501109</b></p>
                  <button type="button" class="btn-lg btn-primary btn-sm">Schedule meeting</button>
                </div>
              </div>
            </div>
            {/* <div class="main-button"><button type="button" class="btn btn-primary com-button">See More Topics</button></div> */}
          </div>
          <div class="col-lg-6 col-xs-12">
            <h2><b>Portal Guide</b></h2>
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1"><b>SOLVE THEIR PROBLEMS</b></h5>
                  {/* <!--             <small>3 days ago</small> --> */}
                </div>
                <p class="mb-1"><b>Have an online presence and be accessible to all who seek solutions to their problems.</b></p>
              </a>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1"><b>ONLINE APPOINTMENTS</b></h5>
                  {/* <!--             <small class="text-muted">3 days ago</small> --> */}
                </div>
                <p class="mb-1"><b>Schedule appointments online and connect with them via text chats/ audio calls/ video sessions or emails.</b></p>
              </a>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1"><b>EMAIL REMINDERS</b></h5>
                  {/* <!--             <small class="text-muted">3 days ago</small> --> */}
                </div>
                <p class="mb-1"><b>Get free email reminders for key events</b></p>
              </a>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1"><b>HISTORY</b></h5>
                  {/* <!--             <small class="text-muted">3 days ago</small> --> */}
                </div>
                <p class="mb-1"><b>Access history of client, so you can serve them better over time - no 'flash' advice!</b></p>
              </a>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1"><b>FELLOW INTERACTION</b></h5>
                  {/* <!--             <small class="text-muted">3 days ago</small> --> */}
                </div>
                <p class="mb-1"><b> Discuss cases, exchange ideas and much more with fellow counselors on the platform</b></p>
              </a>
            </div>
            <div class="main-button"><button type="button" class="btn btn-primary com-button"><a class="text-white text-decoration-none" href="https://www.google.com/drive/">Click here for documentation!</a></button></div>
          </div>




        </div>
      </div>

      <div class="container">

        <div class="card-deck mb-3 text-center">
          <div class="col-lg-12 col-xs-12">
            <h2><b>Get to know your fellow counsellors</b></h2>
            <div class="card mb-4 box-shadow">
              <div class="card-body">
                <div class="row ">
                <div class="col-4 ">
                <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                </div>
                <div class="col-7 text-left bg-light ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pt-0"><b>Name : K.Rajesh Kumar</b></li>
                    <li class="list-group-item pt-0 "><b>Designation : Mentor & student counselor</b></li>
                    <li class="list-group-item pt-0 "><b>languages known : Telugu, English</b></li>
                    <li class="list-group-item pt-0 "><b>City : Hyderabad</b></li>
                    <li class="list-group-item pt-0 pb-0"><b></b></li>
                </ul>
                </div>
                </div>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
            <div class="card-body">
                <div class="row ">
                <div class="col-4 ">
                <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                </div>
                <div class="col-7 text-left bg-light ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pt-0"><b>Name : N. shiva shankar</b></li>
                    <li class="list-group-item pt-0 "><b>Designation : Mentor & student counselor</b></li>
                    <li class="list-group-item pt-0 "><b>languages known : Telugu, English</b></li>
                    <li class="list-group-item pt-0 "><b>City : Hyderabad</b></li>
                    <li class="list-group-item pt-0 pb-0"><b></b></li>
                </ul>
                </div>
                </div>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
            <div class="card-body">
                <div class="row ">
                <div class="col-4 ">
                <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                </div>
                <div class="col-7 text-left bg-light ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pt-0"><b>Name : V.Murthy</b></li>
                    <li class="list-group-item pt-0 "><b>Designation : Mentor & student counselor</b></li>
                    <li class="list-group-item pt-0 "><b>languages known : Telugu, English</b></li>
                    <li class="list-group-item pt-0 "><b>City : Hyderabad</b></li>
                    <li class="list-group-item pt-0 pb-0"><b></b></li>
                </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
            <div class="card-body">
                <div class="row ">
                <div class="col-4 ">
                <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                </div>
                <div class="col-7 text-left bg-light ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pt-0"><b>Name : V. Laxmi kanth</b></li>
                    <li class="list-group-item pt-0 "><b>Designation : Mentor & student counselor</b></li>
                    <li class="list-group-item pt-0 "><b>languages known : Telugu, English</b></li>
                    <li class="list-group-item pt-0 "><b>City : Hyderabad</b></li>
                    <li class="list-group-item pt-0 pb-0"><b></b></li>
                </ul>
                </div>
                </div>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
            <div class="card-body">
                <div class="row ">
                <div class="col-4 ">
                <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                </div>
                <div class="col-7 text-left bg-light ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pt-0"><b>Name : Devulapalli.shanthi</b></li>
                    <li class="list-group-item pt-0 "><b>Designation : Mentor & student counselor</b></li>
                    <li class="list-group-item pt-0 "><b>languages known : Telugu, English</b></li>
                    <li class="list-group-item pt-0 "><b>City : Hyderabad</b></li>
                    <li class="list-group-item pt-0 pb-0"><b></b></li>
                </ul>
                </div>
                </div>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
            <div class="card-body">
                <div class="row ">
                <div class="col-4 ">
                <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                </div>
                <div class="col-7 text-left bg-light ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pt-0"><b>Name : V.Mamatha</b></li>
                    <li class="list-group-item pt-0 "><b>Designation : Mentor & student counselor</b></li>
                    <li class="list-group-item pt-0 "><b>languages known : Telugu, English</b></li>
                    <li class="list-group-item pt-0 "><b>City : Hyderabad</b></li>
                    <li class="list-group-item pt-0 pb-0"><b></b></li>
                </ul>
                </div>
                </div>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
            <div class="card-body">
                <div class="row ">
                <div class="col-4 ">
                <img src={boy} class='img-fluid' alt="Girl in a jacket" width="200" height="170" />
                </div>
                <div class="col-7 text-left bg-light ">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item pt-0"><b>Name : Esther Diana Nithya</b></li>
                    <li class="list-group-item pt-0 "><b>Designation : Mentor & student counselor</b></li>
                    <li class="list-group-item pt-0 "><b>languages known : Telugu, English</b></li>
                    <li class="list-group-item pt-0 "><b>City : Hyderabad</b></li>
                    <li class="list-group-item pt-0 pb-0"><b></b></li>
                </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>);
  }
}