import React, {Component} from "react";
import classes from './Question.css'

class Question extends Component {

    state = {
        newQuestion : '',
        
    }
    inputFieldHandler(event){
        this.setState({
            newQuestion:event.target.value
        })
    }

    addQuestionHandler = () => {
        if(this.state.newQuestion !== '') {
            this.props.callBackForAdd(this.state.newQuestion);
            document.getElementById('option').value='';
        }
    }

    removeAllQuestionHandler = () =>{
        this.props.callBackForRemoveAll();
    }
    render() {
        
        return (
            <div className={classes.Question}>
                <header className={classes.header}>
                    <h1>Your Options</h1>
                    <div>
                    <button onClick = {this.removeAllQuestionHandler}>Remove All</button>
                    <button onClick = {this.props.callBackForHide}>X</button></div>
                </header>
                <section>
                   <p>{this.props.allQuestions.length ? this.props.allQuestions[Math.floor(Math.random() * this.props.allQuestions.length)] : "Please add an option to get started" }</p>
				   {/*<p><ul>{
					   this.props.allQuestions.map( q => <li>{q}</li>)
                   }</ul></p>*/}
                </section>
                <footer>
                    <input id='option' type = "text" onChange = {this.inputFieldHandler.bind(this)} />
                    <button onClick={this.addQuestionHandler}>Add Option</button>
                </footer>
        </div>
        );
    }
} 

export default Question;