import React from 'react';
import axios from 'axios';
import { AiOutlineStar, AiFillStar } from 'react-icons/Ai';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 5,
      rating: 0
    }

    this.getRatings = this.getRatings.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidMount() {
    this.getRatings();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getRatings();
    }
  }

  getRatings() {
    axios.get('/reviews/meta', {
      params: {product_id: this.props.id}
    })
    .then((response) => {
      console.log(response)
      var averageRating = this.getAverage(response.data.ratings);
      this.setState({ rating: averageRating });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getAverage(ratings) {
    var score = 0;
    var responses = 0;
    var average;

    for (var key in ratings) {
      score += (ratings[key] * key);
      responses += Number(ratings[key]);
    }

    average = score / responses;
    return (Math.round(average * 4) / 4).toFixed(2);
  }

  render() {
    return (<div className='star-rating'>
      <div className='stars'>
        <div>Star Rating: {this.state.rating}</div>
        <div className='stars-rating'>
        {[...Array(this.state.stars).keys()].map((index) => (
            <span className='star' key={index}><AiOutlineStar /></span>))}
        </div>
      </div>
      <div className='reviews-link'>
        <a href='http://localhost:3000' className='stars'>Read all reviews</a>
      </div>

    </div>)
  }
};

export default StarRating;