import React, { Component } from 'react';

import Header from './components/Header/Header';
import MainButton from './components/MainButton/MainButton';
import Question from './components/Question/Question'

class App extends Component {
  state = {
    displayQuestions : false,
    questions : [],
    rand : 0 
  }
  whatButtonHandler = () => {
    this.setState({displayQuestions : true});
  };

  addButtonHandler = (dataFromQuestion) => {
    const newQuestionArray = [...this.state.questions, dataFromQuestion];
    this.setState({questions : newQuestionArray});
  }

  removeButtonHandler = () => {
    const newQuestionArray = [];
    this.setState({questions : newQuestionArray});
  }

  hideOptions = () => {
    this.setState({displayQuestions : false});
  }

  render() {    
    return (
      <div>
        <Header />
        <MainButton clicked={this.whatButtonHandler} />
        {
          this.state.displayQuestions ? 
          <Question 
            callBackForAdd = {this.addButtonHandler} 
            /*question = {this.state.questions[this.state.rand]} */
            callBackForRemoveAll = {this.removeButtonHandler}
            callBackForHide={this.hideOptions}
		        allQuestions={this.state.questions}/>
          : null
        }
        
      </div>
    );
  }
}

export default App;
