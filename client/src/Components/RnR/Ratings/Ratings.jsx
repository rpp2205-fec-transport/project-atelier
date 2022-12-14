import React from "react";
import Score from "./Score.jsx";
import Stars from "./Stars.jsx";
import Recommend from "./Recommend.jsx";
import RatingsChart from "./RatingsChart.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";

export default function Ratings(props) {

  return(<>
    <div className="Ratings-Sider">
      <div className="Score-Star">
        <Score score={props.score}/>
        <Stars score={props.score}
               darkTheme={props.darkTheme} />
      </div>
      <Recommend recommended={props.recommended} />
      <RatingsChart chart={props.chart} />
      <RatingsBreakdown characteristics={props.ratings.characteristics} />
    </div>
  </>)
}