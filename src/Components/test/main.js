import React from 'react'
import { Personal } from './personal'

export default  class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            personal: [],
            social: [],
            questions: []
        }
    }

    render(){
        return(
            <Personal {...this.state.personal}></Personal>
        );
    }
    
}