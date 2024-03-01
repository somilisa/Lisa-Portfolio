import React from "react";
import "./style.scss";
import eyeCon from "../../Assets/eye-overlay.svg";
interface Props {
  numberImg: string;
  imageUrl: string;
  imageAlt: string;
  previewLink: string;
  title: string;
  description: string;
  deploymentLink?: string;
}
function Project({
  numberImg,
  imageUrl,
  imageAlt,
  previewLink,
  title,
  description,
  deploymentLink,
}: Props) {
  return (
    <div className="project-container">
      <header>
        <img src={numberImg} alt="" />
        <h3 className="h3-margin-bottom">Project Title: {title} </h3>
      </header>
      <div className="project-main">
        <a href={previewLink}>
          <div className="project-image">
            <div className="overlay">
              <img src={eyeCon} alt="" />
            </div>
            <img src={imageUrl} alt={imageAlt} />
          </div>
        </a>

        <article className="project-description">
          <p>{description}</p>
          <a href={deploymentLink}>link to project</a>
        </article>
      </div>
    </div>
  );
}

export default Project;
