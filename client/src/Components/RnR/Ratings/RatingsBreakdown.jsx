import React from "react";
import ScaleBar from "./ScaleBar.jsx";

export default function RatingsBreakdown(props) {

return(<>
{props.characteristics && Object.keys(props.characteristics).map((c) => {
  return (
    <div key={props.characteristics[c].id}>
      <p style={{fontSize:"medium", marginTop:"30px", marginBottom: "5px"}}>{`${c}`}</p>
      <ScaleBar characteristic={[c, props.characteristics[c]]} />
    </div>
  )
})}
</>)
}