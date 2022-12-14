import React from "react";
import IndividualStars from "./IndividualStars.jsx";
import User from "./User.jsx";
import Date from "./Date.jsx";
import ReviewBody from "./ReviewBody.jsx";
import IndividualRecommend from "./IndividualRecommend.jsx";
import SellerResponse from "./SellerResponse.jsx";
import Helpfulness from "./Helpfulness.jsx";
import Report from "./Report.jsx";
import ReviewSummary from "./ReviewSummary.jsx";
import ReviewPhotos from "./ReviewPhotos.jsx";
// import loadable from '@loadable/component';
// const ReviewPhotos = loadable(() => import('./ReviewPhotos.jsx'));


export default function IndividualReview(props) {

  return(<div className="individul-review-container">
    <div className="Individul-Review-Header">
      <IndividualStars star={props.review.rating}/>
      <div className="User-Date">
        <User user={props.review.reviewer_name} />
        <Date date={props.review.date} />
      </div>
    </div>
    <ReviewSummary summary={props.review.summary} />
    <ReviewBody body={props.review.body}
                term={props.term} />
    <ReviewPhotos photos={props.review.photos} />
    {props.review.recommend && <IndividualRecommend />}
    {props.review.response && <SellerResponse />}
    <div className="Helpfulness-Report">
      <Helpfulness vote={props.review.helpfulness}
                   review={props.review}
                   getReviews={props.getReviews} />
      <Report review={props.review} />
    </div>
    <hr
        style={{
            color: "grey",
            backgroundColor: "grey",
            height: "0.5px",
            width: "99%",
            textAlign: "left",
            marginLeft: "0px"
        }}
    />
  </div>)
}