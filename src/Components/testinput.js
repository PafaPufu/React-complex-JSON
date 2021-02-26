import React from 'react';
// import './testinput.css'

const genders = ["Male", "Female", "Others"]

  //list of countries
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla"
];
    //choices arr
    const choices = ["Yes", "No"];
    //beats arr
    const beats = ["Pop", "Rock", "Lofi", "HipHop", "bruh"];

export default class Form extends React.Component{

    constructor(){
        super()
        this.state = {
            personal_gender: '',
            personal_DOB: new Date('2014-08-18T21:11:54'),
            personal_region: '',
            personal_city: '',
            social_soundcloud: '',
            social_instagram: '',
            social_tiktok: '',
            social_youtube: '',
            questions_full_name: '',
            questions_producer_name: '',
            questions_affiliated: '',
            questions_beats_type_beat1: '', 
            questions_beats_type_beat2: '', 
            questions_beats_type_beat3: ''
    
        }
    }   
    

    handleDateChange = (date) => {
        this.setState({
            date_of_birth: date
        });
    }

    handleChange = (e) => {
        this.setState({...this.state,
          [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        let initial ={
            personal: {
                gender: this.state.personal_gender,
                date_of_birth: this.state.personal_DOB,
                country_region: this.state.personal_region,
                city: this.state.personal_city
            },
            social:{
                soundcloud: this.state.social_soundcloud,
                instagram: this.state.social_instagram,
                tiktok: this.state.social_tiktok,
                youtube: this.state.social_youtube
            },
            questions:{
                full_name: this.state.questions_full_name,
                producer_name: this.state.questions_producer_name,
                affiliated: this.state.questions_affiliated,
                beats_type: {
                    beat1: this.state.questions_beats_type_beat1,
                    beat2: this.state.questions_beats_type_beat2,
                    beat3: this.state.questions_beats_type_beat3
                }
            },
            
        }
    
        // initial.personal.gender = this.state.gender
        
        console.log(JSON.stringify(initial));
    }

    render(){
        return(
            <div className="test-input">
                <h1>Personal</h1>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="personal_gender"
                    onChange={this.handleChange}
                    />
                    <label>Gender</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="personal_DOB"
                    onChange={this.handleChange}
                    />
                    <label>Date of Birth</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="personal_region"
                    onChange={this.handleChange}
                    />
                    <label>Region</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="personal_city"
                    onChange={this.handleChange}
                    />
                    <label>City</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                {/* SOCIAL MEDIA LINK INPUT */}
                <h1>
                    Social
                </h1>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="social_soundcloud"
                    onChange={this.handleChange}
                    />
                    <label>Soundcloud</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="social_instagram"
                    onChange={this.handleChange}
                    />
                    <label>Instagram</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="social_tiktok"
                    onChange={this.handleChange}
                    />
                    <label>TikTok</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="social_youtube"
                    onChange={this.handleChange}
                    />
                    <label>YouTube</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                {/* Questions part */}
                <h1>Questions</h1>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="questions_full_name"
                    onChange={this.handleChange}
                    />
                    <label>Full Name</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div className="col-3 input-effect">
                    <input 
                    className="effect-21" 
                    type="text" 
                    placeholder=""
                    name="questions_affiliated"
                    onChange={this.handleChange}
                    />
                    <label>Are you affiliated</label>
                    <span className="focus-border focus-bg">
                        <i></i>
                    </span>                
                </div>
                <div>
                    <button
                    type="submit"
                    onClick={this.handleSubmit}
                    >
                        
                        Pleasehelpme
                    </button>
                </div>
            </div>
            

            
            
        );
    }
}
