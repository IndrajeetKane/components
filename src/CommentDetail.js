import React from "react";
import faker from "faker";
const ComentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="metadata">Today at 6:00 PM</span>
        </div>
        <div className="text">Nice blog post !</div>
      </div>
    </div>
  );
};

export default ComentDetail;
