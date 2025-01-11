import React from "react";

const CollegeGoals = ({ visionOfCollege, goals }) => {
  return (
    <div className="college-goals-section">
      <div className="college-goals-head">
        <p>
          <span>رؤية وأهداف </span> الكلية
        </p>
      </div>
      <hr />
      <div className="college-goals-text">
        <p>{visionOfCollege}</p>
      </div>

      <div className="college-goals">
        {goals.map((goal, index) => {
          return (
            <div key={index} className="sigle-goal">
              <img
                src={goal.picture || "/images/statistic-img-1 (1).png"}
                alt="statistic-img"
              />
              <div className="single-goal-info">
                <p className="single-goal-text">
                  {goal.goal ||
                    "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollegeGoals;
