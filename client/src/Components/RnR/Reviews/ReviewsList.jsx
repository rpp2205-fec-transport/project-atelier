import React from "react";
import { useState, useEffect } from "react";
import IndividualReview from "./IndividualReview/IndividualReview.jsx"

export default function ReviewsList(props) {

  return(<>
    <div className="Reviews-List">
      {
        props.result.map((review) => {
          return <IndividualReview key={review.review_id} review={review} />
        })
      }
    </div>
  </>)
}