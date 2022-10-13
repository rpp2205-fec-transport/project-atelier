import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import QuestionsList from './QuestionsList.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
      moreQuestionsClicked: false,
    }
  }

  componentDidMount(props) {
    this.getQuestionsList(props)
  }

  componentDidUpdate(prevProps) {
    if(this.props.products.id !== prevProps.products.id)
    {
      this.getQuestionsList();
    }
  }

  getQuestionsList() {
    axios.get('/qa/questions', {params: {product_id: this.props.products.id}})
      .then((response) => {
        this.setState({
          questions: response.data.results
        })
      })
      .catch((err) => {
        console.log('failed to get questions list')
      })
  }

  questionClickHandler() {
    (this.state.moreQuestionsClicked === false) ? this.setState({
      moreQuestionsClicked: true
    }) : this.setState({
      moreQuestionsClicked: false
    })
  }

  render() {
    return (<div>
      <h4>Questions {'&'} Answers</h4>
      <SearchBar />
      <QuestionsList
        questions={this.state.questions}
        product={this.props.products}
        moreQuestionsClicked={this.state.moreQuestionsClicked}
        getQList={this.getQuestionsList.bind(this)} />
      <div className="containerRow">
        {(this.state.questions.length > 2) &&
        <MoreQuestions  moreQuestionsClicked={this.state.moreQuestionsClicked}
          questionClickHandler={this.questionClickHandler.bind(this)}/>}
        <AddQuestion />
      </div>
    </div>)
  }
};

export default QnA;