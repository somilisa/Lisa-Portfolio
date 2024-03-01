import React from "react";
import "./style.scss";
interface Props {
  numberImg: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  link?: string;
}
function Project({ numberImg, imageUrl, title, description, link }: Props) {
  return (
    <div className="project-container">
      <header>
        <img src={numberImg} alt="" />
        <h3 className="h3-margin-bottom">Project Title: {title} </h3>
      </header>
      <div className="project-main">
        <img src={imageUrl} alt="" className="project-image" />

        <article className="project-description">
          <p>{description}</p>
          <a href={link}>link to project</a>
        </article>
      </div>
    </div>
  );
}

export default Project;
