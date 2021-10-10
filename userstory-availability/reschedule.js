// Axios is a HTTP wrapper - sends requests and receives responses.
import axios from "axios";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";


// Hooks implemented
const Reschedule = (props)=>{
//Calendar component's; for selecting the days
  var [selectedDays, setSelectedDays] = useState([]);
//an array to store the dates
  const [list,setList]=useState([]);
// To store a time that is selected
  const [timing,settiming] = useState([]);
//   To capture the logged in counselor details 
  const [c_email,setc_email] = useState("")
//   An array to store dates that are selected
const [time,settime]=useState([]);



function  read(e)
          {
              settiming(e.target.value)
              console.log(timing)
      
          } 
   // Stores every time selected into time array
function  send(e)
    {
        settime([...time, timing]);
    };

async function post ()
{
    setc_email(props.counsellor)
    console.log(c_email)
    //   add call to AWS API Gateway add product endpoint here
                try {
                  await axios.post(`https://mc2evjaky6.execute-api.ap-south-1.amazonaws.com/prod/sprior1`,
                  {
                    "Counselor_email_id":`${props.counsellor}`,
                    "Date":`${list}`,
                    "Time":`${time}`
                  });
                console.log("Done")
                }
                catch (err) {
                  console.log(`An error has occurred: ${err.message}`);
                }
}

  return(
    <div>
        <div class="container-fluid">
            <div class="row mt-2 text-center">
                        <h1 class="mb-none">Manage your availability</h1>
                        <p class="pt-2 pb-1">Kindly mark your availbility in terms of the dates along with their respective timings.</p>
            </div>
            <div class="row text-center">
                        <div class="col-sm-12 col-md-12 col-lg-4 text-center  mx-auto">
                            <Calendar
                                value={selectedDays}
                                onChange={setSelectedDays}
                                colorPrimary="#0d6efd" 
                                calendarClassName="responsive-calendar"
                                shouldHighlightWeekends
                                renderFooter={() => (
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 2rem', margin:'0rem' }}>
                                      {/* To capture the selected dates and reset the selection */}
                                        <button type="button" class="btn btn-primary mt-2 text-center" 
                                        onClick={()=>{
                                        // setList(selectedDays)
                                        // console.log(setList);
                                        console.log(selectedDays);
                                        // selectedDays=[];
                                        var a,b,c,d="";
                                        var s=[]
                                        setList(s)
                                        for(var i=0;i<selectedDays.length;i++){
                                            a=(selectedDays[i]["day"]) 
                                            b=(selectedDays[i]["month"])  
                                            c=(selectedDays[i]["year"])  
                                            d=a+'/'+b+'/'+ c 
                                            // console.log(d)
                                            s.push(d)
                                        }
                                        setList(s)
                                        console.log(list)
                                        console.log(s)
                                        {setSelectedDays(selectedDays=[])}
                                        selectedDays=[]}}
                                        // Styling
                                        style={{
                                            border: '#0fbcf9',
                                            color: '#fff',
                                            // borderRadius: '0.5rem',
                                            padding: '1rem 2rem',
                                          }}
                                        >Book the above dates</button>
                                    </div>
                                  )}
                                />
                        
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-8 ">
                                <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group btn-group mx-auto " role="group" aria-label="First group">
                                    {list.map((item) => {
                                        return (    
                                        <div> 
                                        <button type="button" class="btn btn-primary mr-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" name="date" value="8/6/2021" >{item}</button>
                                        </div>
                                        )
                                                })}
                                    </div>
                                </div>
                                <div class="collapse" id="collapseExample1">
                                     <div class="card card-body w-75 mx-auto">
                                         <div class="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
                                         </div>
                                         <button onClick={send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">update</button>

                                     </div>
                                 </div>
                                 <div class="collapse" id="collapseExample2">
                                     <div class="card card-body w-75 mx-auto">
                                         <div class="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
                                         </div>
                                         <button onClick={send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">update</button>
                                     </div>
                                 </div>
                                 <div class="collapse" id="collapseExample3">
                                     <div class="card card-body w-75 mx-auto">
                                         <div class="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
                                         </div>
                                         <button onClick={send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">update</button>

                                     </div>
                                 </div>
                                 <div class="collapse" id="collapseExample4">
                                     <div class="card card-body w-75 mx-auto">
                                         <div class="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM" onClick={read} />                                            <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
                                         </div>
                                         <button onClick={send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">update</button>
                                     </div>
                                 </div>
                                 <div class="collapse" id="collapseExample5">
                                     <div class="card card-body w-75 mx-auto">
                                         <div class="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>
                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
                                         </div>
                                         <button onClick={send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">update</button>

                                     </div>
                                 </div>
                                 <div class="collapse" id="collapseExample6">
                                     <div class="card card-body w-75 mx-auto">
                                         <div class="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
                                         </div>
                                         <button onClick={send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">update</button>
                                     </div>
                                 </div>
                                 <div class="collapse" id="collapseExample7">
                                     <div class="card card-body w-75 mx-auto">
                                         <div class="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM" onClick={read} />
                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
                                         </div>
                                         <button onClick={send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">update</button>
                                    </div>
                                 </div>

                            
                        </div>
                        
            </div>
            <div class="row">
                 <div class="col-12 text-center">
                     <button type="button" class="btn btn-primary " onClick={post}>Save your schedule</button>
                 </div>
            </div>
            
        </div>
    </div>
  );

};

// {

//     // constructor(props) {
//     //         super(props);
//     //         this.state = {
//     //         // To store the unique id(email-id) of the counsellor
//     //         c_email: "rajesh@msitprogram.net",

//     //         // To store a selected date
//     //         date : "",
//     //         // An array to store all the selected dates
//     //         d:[],
            
//     //         // To store a selected date
//     //         time:"",
//     //         // An array to store all the selected dates
//     //         t:[]
//     //         };
//     //       }
    
//     // Sets the value of date and time states initialized above
//     read=(e)=>
//         {
//             this.setState({[e.target.name]:e.target.value});
//             // To debug the implementation - check console.log
//             console.log(`${this.state.date}`)
//             console.log(`${this.state.time}`)
    
//         }

//     // Stores every date and time selected into respective arrays
//     send=(e)=>
//     {
//         this.setState({ d: [...this.state.d, this.state.date] });
//         console.log(this.state.d)
//         this.setState({ t: [...this.state.t, this.state.time] });


//         // if (e.target.name == "date")
//         // {
//         //     // this.setState({ d: [...this.state.d, this.state.date] });
//         //     // console.log(this.state.d)

//         // }
//         // else if (e.target.name == "time")
//         // {
//         //     this.setState({ t: [...this.state.t, this.state.time] });
//         // }

//     }

//     // To send all the data to the DynamoDB table
//         post = async () => {

//                 // for debugging
//                 // console.log(this.state.d);
//                 // console.log(this.state.t);

//                 // add call to AWS API Gateway add product endpoint here
//                 try {
//                   await axios.post(`https://mc2evjaky6.execute-api.ap-south-1.amazonaws.com/prod/sprior1`,
//                   {
//                     "Counselor_email_id":`${this.state.c_email}`,
//                     "Date":`${this.state.d}`,
//                     "Time":`${this.state.t}`
//                   });
//                 //   this.setState({ d: [] });
//                 //   this.setState({ t: [] });
//                   // this.setState({ newproduct: { "productname": "", "id": "" }})
//                 console.log("Done")
//                 }
//                 catch (err) {
//                   console.log(`An error has occurred: ${err.message}`);
//                 }
//               }

//     // All the below code will be displayed on the web page
//     render()
//     {
//         return (
//             <div>
//             <div class="container-fluid">
                
//                 <div class="row mt-5 text-center">
//                     <div class="col-12">
//                         <h1 class="mb-none">Manage your availability</h1>
//                         <p class="pt-2 pb-2">Kindly select your available time in the order of the dates mentioned below.</p>
//                     </div>
//                 </div>
                    
//                 <div class="row">
//                     <div class="col-12">

//                     </div>
//                     <div class="col-12 text-center mb-2">

//                             <div class="container">
//                                 <div class="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
//                                     <div class="btn-group btn-group mx-auto " role="group" aria-label="First group">
//                                         <button type="button" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" name="date" value="8/6/2021" ><b>8</b>/6/2021</button>
//                                         <button type="button" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" name="date" value="9/6/2021" ><b>9</b>/6/2021</button>
//                                         <button type="button" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" name="date" value="10/6/2021" ><b>10</b>/6/2021</button>
//                                         <button type="button" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" name="date" value="11/6/2021" ><b>11</b>/6/2021</button>
//                                         <button type="button" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5" name="date" value="12/6/2021" ><b>12</b>/6/2021</button>
//                                         <button type="button" class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6" name="date" value="13/6/2021" ><b>13</b>/6/2021</button>
//                                     </div>

//                                 </div>
//                                 <div class="collapse" id="collapseExample1">
//                                     <div class="card card-body w-75 mx-auto">
//                                         <div class="btn-group btn-group-lg" role="group" aria-label="Basic checkbox toggle button group">
//                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
//                                         </div>
//                                         <button onClick={this.send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">update</button>

//                                     </div>
//                                 </div>
//                                 <div class="collapse" id="collapseExample2">
//                                     <div class="card card-body w-75 mx-auto">
//                                         <div class="btn-group btn-group-lg" role="group" aria-label="Basic checkbox toggle button group">
//                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
//                                         </div>
//                                         <button onClick={this.send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">update</button>
//                                     </div>
//                                 </div>
//                                 <div class="collapse" id="collapseExample3">
//                                     <div class="card card-body w-75 mx-auto">
//                                         <div class="btn-group btn-group-lg" role="group" aria-label="Basic checkbox toggle button group">
//                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
//                                         </div>
//                                         <button onClick={this.send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">update</button>

//                                     </div>
//                                 </div>
//                                 <div class="collapse" id="collapseExample4">
//                                     <div class="card card-body w-75 mx-auto">
//                                         <div class="btn-group btn-group-lg" role="group" aria-label="Basic checkbox toggle button group">
//                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
//                                         </div>
//                                         <button onClick={this.send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">update</button>
//                                     </div>
//                                 </div>
//                                 <div class="collapse" id="collapseExample5">
//                                     <div class="card card-body w-75 mx-auto">
//                                         <div class="btn-group btn-group-lg" role="group" aria-label="Basic checkbox toggle button group">
//                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
//                                         </div>
//                                         <button onClick={this.send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">update</button>

//                                     </div>
//                                 </div>
//                                 <div class="collapse" id="collapseExample6">
//                                     <div class="card card-body w-75 mx-auto">
//                                         <div class="btn-group btn-group-lg" role="group" aria-label="Basic checkbox toggle button group">
//                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
//                                         </div>
//                                         <button onClick={this.send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">update</button>
//                                     </div>
//                                 </div>
//                                 <div class="collapse" id="collapseExample7">
//                                     <div class="card card-body w-75 mx-auto">
//                                         <div class="btn-group btn-group-lg" role="group" aria-label="Basic checkbox toggle button group">
//                                             <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" name="time" value="10 AM - 11 AM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck1" >10 AM - 11 AM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" name="time" value="3 PM - 4 PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck2" >3 PM - 4 PM</label>

//                                             <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" name="time" value="5PM - 6PM"  />
//                                             <label class="btn btn-outline-primary" for="btncheck3" > 5PM - 6PM</label>
//                                         </div>
//                                         <button onClick={this.send} class="btn btn-primary w-50 mx-auto mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">update</button>
//                                     </div>
//                                 </div>

    
//                     </div>
//                 </div>

//                     {/* <button conClick={this.post}>Save your schedule</button> */}
                    
//             </div>
                    
//             <div class="row">
//                 <div class="col-12 text-center">
//                     <button type="button" class="btn btn-primary " onClick={this.post}>Save your schedule</button>
//                 </div>
//             </div>
//             <div class="row mt-5">
//             {/* <div class="col-12">
//                 <h1 class="text-center">Your schedule for the week</h1>
//                 <h5 >Date: {this.state.date}</h5>
//                 <h5 >Time: {this.state.time}</h5>
                
//             </div> */}
            
//         </div>
//         </div>
//         </div>
//         );
//     }
    
// }

   

export default Reschedule;