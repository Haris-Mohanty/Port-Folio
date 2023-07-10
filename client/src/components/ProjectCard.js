import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={link} target="_blank">
            {title}
            <h6>{description}</h6>
          </a>
        </div>
      </div>
    </Col>
  );
};
export const ProjectCard2 = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a href={link} target="_blank">
            {title}
            <h6></h6>
          </a>
        </div>
      </div>
    </Col>
  );
};
