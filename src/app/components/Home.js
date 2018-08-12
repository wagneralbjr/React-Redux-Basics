import React from "react";
import propTypes from 'prop-types';

export class Home extends React.Component{
    render(){
        console.log(this.props);
        return (
            
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name} and your age is {this.props.name}</p>
                <p> User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hoobies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i)=><li key={i}>{hobby}</li>)}
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>
                
            </div>
        );
    }
}

Home.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    user: propTypes.object,
    children: propTypes.element.isRequired
}

