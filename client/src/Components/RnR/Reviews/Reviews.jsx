import React from "react";
import SearchingBar from "./SearchingBar.jsx";
import Sorting from "./Sorting.jsx";
import ReviewsList from "./ReviewsList.jsx";
import ButtonRow from "./ButtonRow.jsx";

export default function Reviews(props) {

return(<>
<div>
  <SearchingBar filterReviews={props.filterReviews} />
  <Sorting product_id={props.product.id}
           result={props.result}
           dropdownHandler={props.dropdownHandler}
           />
  <ReviewsList result={props.result}
               moreReviewsClickHandler={props.moreReviewsClickHandler}
               reviewsCount={props.reviewsCount}
               moreclicked={props.moreclicked}
               getReviews={props.getReviews}
               term={props.term} />
  <ButtonRow result={props.result}
             moreReviewsClickHandler={props.moreReviewsClickHandler}
             reviewsCount={props.reviewsCount}
             moreclicked={props.moreclicked}
             product={props.product} />
</div>
</>)
}