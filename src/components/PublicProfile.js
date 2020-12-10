import React, { Component } from 'react';
import axios from 'axios';



class PublicProfile extends Component {

/*     constructor() {
        super()

        this.state = {
            user: {}
        }
    } */


    /* componentDidMount() {
        let user = this.props.user._id;


        axios
            .get((`${process.env.REACT_APP_API_URL}/user/${user.id}`), { withCredentials: true })
            .then(res => {
                
                this.setState({ user: res.data });
            });
    } */


    render() {
        /* const {  photo, name, position, technologies, uploadCV, channels } = this.state.user; */
   
      
       

        return (
            <>
         { /*   <div id="singleback">
                <br></br>
                <section id="content">
                    <div style={{ alignSelf: 'center', height: 400, width: 400, display: "flex", borderRadius: 50 }}>
                        <img width={417} height={298} alt="user-profile" src={photo} className="#"/>
                    </div>

                    <div className="block" id="block-content">
                        <div className="inner width-3 courseID">
                            <div className="entry">
                                <div className="entry-text item-scroll animate" style={{ textAlign: "center" }}>
                                    <h2 style={{ textAlign: 'center' }}><strong>{name}</strong></h2>
                                  
                                    <ul>
                                        <li>when: <b>{channels}</b></li><br></br>
                                        <li>at: <b>{position}</b></li><br></br>
                                        <li>where: <b>{technologies}</b></li><br></br>
                                        <li>who is attending: <b>{uploadCV}</b></li><br></br>
                                    </ul>

<symbol id="linkedin" viewbox="0 0 2160 2160">
        <path fill="#0077b5" d="M 2000.01,0 159.441,0 C 71.4453,0 0,69.77 0,155.62 L 0,2004.141 C 0,2090.1602 71.4453,2160 159.441,2160 l 1840.569,0 c 88.09,0 159.99,-69.8398 159.99,-155.859 L 2160,155.62 C 2160,69.77 2088.1,0 2000.01,0">
          <path fill="#ffffff" d="m 480.371,297.38 c 102.422,0 185.664,83.24 185.664,185.71 0,102.57 -83.242,185.82 -185.664,185.82 -102.695,0 -185.703,-83.25 -185.703,-185.82 0,-102.47 83.008,-185.71 185.703,-185.71 m -160.273,512.46 320.507,0 0,1030.789 -320.507,0 0,-1030.789">
            <path fill="#ffffff" d="m 841.543,809.84 307.347,0 0,140.78 4.37,0 c 42.78,-81.01 147.31,-166.48 303.17,-166.48 324.18,0 384.06,213.44 384.06,491.09 l 0,565.399 -320,0 0,-501.25 c 0,-119.609 -2.35,-273.359 -166.53,-273.359 -166.71,0 -192.14,130.23 -192.14,264.679 l 0,509.93 -320.277,0 0,-1030.789">
            </path></path></path></symbol> 

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>*/}
</>
        )
    }
} 


export default PublicProfile;

