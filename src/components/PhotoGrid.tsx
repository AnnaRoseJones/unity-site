import React from "react";
import anthony from "../assets/img/anthony.jpeg";
import esther from "../assets/img/Esther.png";
import gabby from "../assets/img/Gabby.png";
import hope from "../assets/img/Hope.jpeg";
import molly from "../assets/img/molly.jpeg";
import anika from "../assets/img/Anika.png";
import yolanda from "../assets/img/yolanda2.jpg";
import cate from "../assets/img/cate2.jpg";
import annarose from "../assets/img/AnnaRose.jpg";

const PhotoGrid: React.FC = () => {
  return (
    <ul className="image-list-small">
      <li className="grid-item">
        <img src={anthony} alt="anthony" />
        <div className="details">
          <h3>Anthony Engle</h3>
          <p className="title"> Executive Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={hope} alt="hope" />
        <div className="details">
          <h3>Hope Jin</h3>
          <p className="title">Business Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={yolanda} alt="yolanda" />
        <div className="details">
          <h3>Yolanda Chen</h3>
          <p className="title">Creative Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={esther} alt="apollo" />
        <div className="details">
          <h3>Esther Kim</h3>
          <p className="title">Fashion Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={anika} alt="sophie" />
        <div className="details">
          <h3>Anika Wilsnack</h3>
          <p className="title">Productions Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={gabby} alt="grayson" />
        <div className="details">
          <h3>Gabby Bliss</h3>
          <p className="title">Productions Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={annarose} alt="halliday" />
        <div className="details">
          <h3>AnnaRose Jones</h3>
          <p className="title">Marketing Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={molly} alt="molly" />
        <div className="details">
          <h3>Molly Van Gorp</h3>
          <p className="title">Modeling Director</p>
        </div>
      </li>
      <li className="grid-item">
        <img src={cate} alt="cate" />
        <div className="details">
          <h3>Cate Matthews</h3>
          <p className="title"> Finance Director</p>
        </div>
      </li>
    </ul>
  );
};

export default PhotoGrid;
