import "./counselor_upload_media.css";
import media from './images/media.png';
import axios from "axios";
import React, { Component, Fragment } from 'react';

export default class resources extends Component {
    constructor(props) {
        super(props)
        this.state = {
            one: "",
            two: "",
            three: "",
            four: "",
            five: "",
            six:"",
            seven:"",
            eight:"",
            nine:"",
            ten:"",
            eleven:"",
            tweleve:"",
            thirteen:"",
            fourteen:"",
            fifteen:"",
            sixteen:"",
            seventeen:"",
            eighteen:"",
            nineteen:"",
            twenty:"",
            twenty_one:"",
            twenty_two:"",
            twenty_four:""
        }
    }

    read = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    send = async () => {
        // add call to AWS API Gateway add product endpoint here
        try {
            await axios.post(`https://qnmntjpu9b.execute-api.ap-south-1.amazonaws.com/prod/docres`, {
                "email_id":"bhavyasnandikolla@gmail.com",
                "name": `${this.state.one}`,
                "gender": `${this.state.two}`,
                "mother_tongue": `${this.state.three}`,
                "reg_num": `${this.state.four}`,
                "age": `${this.state.five}`,
                "date": `${this.state.six}`,
                "current_standard": `${this.state.seven}`,
                "school": `${this.state.eight}`,
                "medium": `${this.state.nine}`,
                "academic_performance": `${this.state.ten}`,
                "peer_interaction": `${this.state.eleven}`,
                "prenatal_factors": `${this.state.tweleve}`,
                "appearence":`${this.state.thirteen}`,
                "touch_with_surrondings": `${this.state.fourteen}`,
                "eye_contact": `${this.state.fifteen}`,
                "rapport": `${this.state.sixteen}`,
                "attitude_with_examiner": `${this.state.seventeen}`,
                "intensity_tone": `${this.state.eighteen}`,
                "reaction_time_to_stimulus": `${this.state.nineteen}`,
                "tempo": `${this.state.twenty_one}`,
                "speech": `${this.state.twenty_two}`,
                "ease_of_speech": `${this.state.twenty_three}`,
                "points_in_favour": `${this.state.twenty_four}`,
            });
            console.log("Done")
        }
        catch (err) {
            console.log(`An error has occurred: ${err.message}`);
        }
    }
    render() {
        return (<div>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center" >
                        <div id="back" class="pt-3 pb-1">
                            <h1>Documentation</h1>
                            <hr style={{width:'340px'}}></hr><br />
                        </div></div>
                </div>
            </div>
            <div class="container ">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                SOCIO-DEMOGRAPHIC DATA
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="container">
                            <div class="input-group mb-3 mt-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.two} name="two" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.three} name="three" placeholder="Gender" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.four} name="four" placeholder="Mother Tongue" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.five} name="five" placeholder="Reg.No" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.six} name="six" placeholder="Age" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.seven} name="seven" placeholder="Date" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                PERSONAL HISTORY
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="container">
                            <div class="input-group mb-3 mt-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.eight} name="eight" placeholder="Current standard" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.nine} name="nine" placeholder="School" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.ten} name="ten" placeholder="Medium" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.eleven} name="eleven" placeholder="Quality of academic performance" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.twelve} name="twelve" placeholder="Nature of peer interaction" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.thirteen} name="thirteen" placeholder="Significant Prenatal Factors" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            GENERAL APPEARENCE AND BEHAVIOUR
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="container">
                        <div class="input-group mb-3 mt-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.fourteen} name="fourteen" placeholder="Appearance" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.fifteen} name="fifteen" placeholder="Touch with the surroundings" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.sixteen} name="sixteen" placeholder="Eye Contact" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.seventeen} name="seventeen" placeholder="Rapport" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.eighteen} name="eighteen" placeholder="Attitude Towards Examiner" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            MOVEMENT AND BEHAVIOUR
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div class="container">
                        <div class="input-group mb-3 mt-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.nineteen} name="ninteen" placeholder="Intensity/tone" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.twenty} name="twenty" placeholder="Reaction Time to Stimulus" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.twenty_one} name="twenty_one" placeholder="Speed" aria-label="Eye Contact" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.twenty_two} name="twenty_two" placeholder="Prosody / Tempo" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" onChange={this.read} value={this.state.twenty_three} name="twenty_three" placeholder="Ease of Speech" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">PROVISIONAL DIAGNOSIS</button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div class="row">
                        <div class="col-md-12 m-10 mt-2">
                        <div class="container">
                        <div class="form-group"> <label for="form_message">Points in favour</label> <textarea id="form_message" onChange={this.read} value={this.state.twenty_four} name="twenty_four"name="message" class="form-control" placeholder="Write your message here." rows="4"></textarea> </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="container text-center mt-2 mb-5"> 
                      <button type="button" onClick={this.send} class="btn btn-primary">Update changes</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}