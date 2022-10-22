import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Ratings from "./Ratings/Ratings.jsx";
import Reviews from "./Reviews/Reviews.jsx";

export default function RnR(props) {

  const [reviews, setReviews] = useState({});
  const [ratings, setRatings] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    getReviews(props);
    getRatings(props)
  }, [props])

  function getReviews(props) {
    axios.get('/reviews', {
      params: {id: props.products.id}
    })
    .then((response) => {
      setReviews(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function getRatings(props) {
    axios.get('/reviews/meta', {
      params: {id: props.products.id}
    })
    .then((response) => {
      setRatings(response.data);
      return getAverage(response.data.ratings);
    })
    .catch((err) => {
      console.log(err);
    })
    .then((avg) => {
      setScore(avg)
    })
  }

  function getAverage(ratings) {
    var s = 0;
    var responses = 0;
    var average;
    for (var key in ratings) {
      s += (ratings[key] * key);
      responses += Number(ratings[key]);
    }
    average = s / responses;
    return (Math.round(average * 4) / 4).toFixed(2);
  }


  return(<>
    <h4>Ratings & Reviews</h4>
    <div className="Ratings-Reviews">
      <Ratings ratings={ratings} getAverage={getAverage}
               score={score} />
      <Reviews reviews={reviews} />
    </div>
  </>)
}