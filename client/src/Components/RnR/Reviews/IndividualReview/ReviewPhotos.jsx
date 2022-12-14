import React from "react";
import { useState } from "react";
import FullSizePhoto from "./FullSizePhoto.jsx";

export default function ReviewPhotos(props) {

  const [enlarged, setEnlarged] = useState(false);
  const [imageURL, setImageURL] = useState("");

  function zoomInImage(e) {
    setImageURL(e.target.src)
    setEnlarged(true)
  }

  function zoomOutImage() {
    setEnlarged(false)
  }

  return(<span>
    {props.photos.map((photo) => {
      return <img src={photo.url}
                  alt="photo"
                  key={photo.url}
                  className="thumbnail-photo"
                  style={{width:"60px", height:"60px", objectFit:"cover"}}
                  onClick={zoomInImage}
                  draggable="false"
                  loading="lazy"
                  fetchpriority="low"
                  sizes="(max-width: 60px) 60px"
              />
      })
    }
    {enlarged
     ? <FullSizePhoto zoomOutImage={zoomOutImage}
                      imageURL={imageURL} />
     : null }
  </span>)
}