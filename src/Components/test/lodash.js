import React from 'react'
import _ from 'lodash'

export default class LodashTest extends React.Component{
    constructor(){
        super();
        this.state = {
            "module":{
                "personal" :{
                    "gender" : "",
                    "date_of_birth": "",
                    "country_region" : "",
                    "city": "",
                },
                "social":{
                    "soundcloud" : "",
                    "instagram" : "",
                    "tikTok": "",
                    "youTube": ""
                },
                "questions": {
                    "full_name" : "",
                    "producer_name": "",
                    "affiliated": false,
                    "beats_type": [{
                        "beat1": "",
                        "beat2": "",
                        "beat3": ""
                    }]
                }
            }
        }                
    }

    onChange = (e) => {
        let path = e.target.name;
        let value = e.target.value;
        let newNestedJson = this.state.module;
        newNestedJson = _.set(newNestedJson, path, value);
        this.setState({ module: newNestedJson });
    }

    handleLog = () => {
        console.log(this.state);
    }

    render(){
        let genderPath = 'personal.gender'
        let beatsPath_1 = 'questions.beats_type.beat1'

        return(
            <div>
                <label>Gender</label>
                <input value = {_.get(this.state.module, genderPath)}
                name = {genderPath}
                onChange = {this.onChange}
                placeholder="gender" />

                <label>beat1</label>
                <input value = {_.get(this.state.module, beatsPath_1)}
                name = {beatsPath_1}
                onChange = {this.onChange}
                placeholder="beats1" />

                <button onClick={this.handleLog}> log state </button>
            </div>
        );



    }

}
