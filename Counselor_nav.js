import './counselor_student_change/counselor_change.css';
import Logout from "../Authentication/Logout";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Change from './counselor_student_change/Priority_4.js';
import Myprofile from './counselor_profile/myprofile.js';
import Reschedule from './userstory-availability/reschedule.js';
// import Resources from './Priority_2.js';
// import Connect from './Priority-3.js';
import Resources from './counselor_upload/counselor_upload_media.js';
// importing home
import Home from './counselor_landing_page/counselor_home.js';

function Counselor_nav(props) {
  return (
    <Router>

      <div class="row">
        <div class="col-12">
          {/* Navigation bar */}
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container ">
              <a class="navbar-brand" href="index.html">Online web counsellor</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item"><Link class="text-decoration-none" to="/"><a class="nav-link" href="myprofile">Home</a></Link></li>
                  <li class="nav-item"><Link class="text-decoration-none" to="/myprofile"><a class="nav-link" href="myprofile">My profile</a></Link></li>
                  <li class="nav-item"><Link class="text-decoration-none" to="/resources"><a class="nav-link" href="resources">Resources</a></Link></li>
                  <li class="nav-item"><Link class="text-decoration-none" to="/Connect"><a class="nav-link" href="connect">Connect</a></Link></li>
                  <li class="nav-item"><Link class="text-decoration-none" to="/Change"><a class="nav-link " href="change">Change</a></Link></li>
                  <li class="nav-item"><Link class="text-decoration-none" to="/reschedule"><a class="nav-link" href="reschedule">Reschedule</a></Link></li>
                  {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li> */}
                  <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Drop down</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">View Profile</a></li>
                      <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                      <Link to="logout"><li className="nav-link nav-item"><Logout
                        updateLogin={props.updateLogin}
                        updateJsonData={props.updateJsonData}
                        updateData={props.updateData}
                        updateStudents={props.updateStudents}
                        updateCounsellors={props.updateCounsellors}
                        updateAdmin={props.updateAdmin}
                      /></li></Link>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </div>



      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/myprofile">
          <Myprofile />
        </Route>

        <Route exact path="/resources">
          <Resources />
        </Route>

        {/* <Route exact path="/connect">
            <Connect/>

          </Route> */}

        <Route exact path="/Change">
          <Change
            counsellor={props.counsellor}
            data={props.data}
            batch={props.batch}
          />
        </Route>

        <Route exact path="/reschedule">
          <Reschedule 
          counsellor={props.counsellor}
          />
        </Route>

      </Switch>
    </Router>
  );
}

export default Counselor_nav;
