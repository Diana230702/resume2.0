import React from "react";

const Portfolio = () => {
  return (
    <div
      className="card_wrapper"
      style={{
        margin: "100px 0px 0px 300px",
      }}
    >
      <img
        className="portfolio_img"
        src="https://media.foundit.in/career-advice/wp-content/uploads/2021/11/web-developer-interview-questions-and-answers.jpg"
        alt=""
      />
      <div className="cards">
        <div className="card">Тут должен был быть контент с партфолио</div>
        <div className="card">Тут должен был быть контент с партфолио</div>
        <div className="card">Тут должен был быть контент с партфолио </div>
      </div>
    </div>
  );
};

export default Portfolio;
