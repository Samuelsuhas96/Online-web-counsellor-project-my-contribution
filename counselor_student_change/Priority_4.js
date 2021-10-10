import React, { Component, Fragment } from 'react';
// Axios module is an http wrapper-make requests and get responses
import axios from "axios";
// import './priority4.css';
export default class Change extends Component
{
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
// Used to get data from Dynamodb
	  componentDidMount() {
		this.fetchdata();
	  }
// To set the value of sname
  read=(e)=>
  {
	  this.setState({sname:Object.values(e)[0]});
	//   console.log(Object.values(e)[0])
	  console.log(this.state.sname)
  }
// To set the value of cname
  readc=(e)=>
  {
	  this.setState({cname:Object.values(e)[0]});
	//   console.log(Object.values(e)[0])
	  console.log(this.state.cname)
  }
 
fetchdata = async () => {
	  // add call to AWS API Gateway to fetch products here
	  // then set them in state
// 	  try {
// // Inovking the API url grom API gateway
// 		const res = await axios.get(`https://r3pu4lkkih.execute-api.ap-south-1.amazonaws.com/prod/getstudent`);
// 		const data = res.data;
// 		// this.setState({students:data[0]["student_name"]});
// 		// this.setState({ products: products });
// 		// const string4 = new String(`${this.state.students}`);
// 		// this.setState({students:string4});
// // Getting student data
// 		var string = data[0]["student_name"];
// 		var real_data = string.split(",");
// // Inserting student data into student array
// 		this.setState({ students: real_data });
// 		// console.log(`${this.state.students}`);
// 		// console.log(real_data);

// 		// console.log(`${this.state.students}`)
// 	  } catch (err) {
// 		console.log(`An error has occurred: ${err}`);
// 	  }
console.log(this.state.data)
var s=[]
const mySet1 = new Set()
for(var i=0; i<this.state.data.length;i++){
	var check=this.state.data[i]["Counsellor_emailId"]
	if(check==this.state.counsellor){
		s.push(this.state.data[i]["Student_name"])
		mySet1.add(this.state.data[i]["Counsellor_name"])
	}
}

this.setState({students:s})
this.setState({counsellors:mySet1})
	  console.log(this.state.students)
	  console.log(this.state.counsellors)

	//   this.setState({counsellors:c})

	}
// Use to post data to the dynamodb
	send = async () => {
// call to AWS API Gateway add product endpoint here
		try {
		  await axios.post(`https://r6nvkkv3oi.execute-api.ap-south-1.amazonaws.com/prod/prio2`,{
			"email_id":"bhav@gmail.com",		
			"Refer_to":`${this.state.cname}`,	
			"Student_name":`${this.state.sname}`			
		  });
		console.log("Done")
		}
		catch (err) {
		  console.log(`An error has occurred: ${err.message}`);
		}
	  };
  render(){
	return (     
		<div class="container-fluid">
			<h1>{this.state.one}</h1>
			<div class="row">
				<div class="col">
					<table class="table table-responsive table-custom table-striped">
						<thead>
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Student name</th>
							</tr>
						</thead>
						<tbody>
{/* To populate table rows using the student array data */}

                    	{this.state.students.map((item) => {
                      	return (<tr>
									<td>2020501109</td>
									<td><a class="text-decoration-none" href="#" value={item} onClick={()=>{{this.read({item})}}}><b>{item}</b></a></td>
                          		</tr>)
                      			})}
                    	</tbody>
					</table>
				</div>
			</div>
{/* To display counsellor's list */}
	<div class="row">
		<div class="col">
			<p><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Counsellor-List</button></p>
				<div class="collapse" id="collapseExample">
					<div class="card card-body text-center">
{/* To populate counsellor names */}
						{this.state.students.map((item) => {
                     		return ( 
                          	<a class="text-decoration-none" href="#" value={item} onClick={()=>{{this.readc({item})}}}><b>{item}</b></a>
                        	)
                      		})}
					</div>
				</div>
				<br></br>
				<div class="d-grid gap-2 col-6 mx-auto">
					<button onClick={this.send} class="btn btn-primary mb-5" type="button">Request for assignment</button>
				</div>
			</div>
	</div>
</div>
);
}
}
