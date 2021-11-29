import React from "react";
const SingleLink = ({ link, name }) => {
  return (
    <div>
      <h5>{name}</h5>
      <img src={`${link}/favicon.ico`} width="32" height="32" alt="Favicon Icon" />
    </div>
  );
};

export default SingleLink;
