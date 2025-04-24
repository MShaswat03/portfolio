import React from "react";
import "./Portfolio.css";
import backgroundImage from "./assets/portBack.jpg";

const projects = [
  {
    title: "Tesla Stock Market Forecasting",
    course: "50.038 Computational Data Science",
    description:
      "LSTM model for predicting market transitions using tweet sentiment. F1 Score: 0.88.",
    tech: "PyTorch, scikit-learn, Matplotlib",
    video: "/Tesla_BULL_BEAR_UI.mov", // ✅ Tesla demo
  },
  {
    title: "Hate Speech Detection System",
    course: "50.021 Artificial Intelligence",
    description:
      "DistilRoBERTa for filtering hate speech. Accuracy: 87.4% on 700k+ samples.",
    tech: "PyTorch, HuggingFace, Streamlit",
    video: "/Hate_Speech_AI.mov", // ✅ Hate speech demo
  },
  {
    title: "US Inflation Forecasting",
    course: "50.039 Deep Learning",
    description:
      "Custom LSTM predicting inflation. MAE: 0.39, F1: 0.94, Accuracy: 88%.",
    tech: "PyTorch, pandas",
  },
];

export default function Portfolio() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="container">
          <h1 className="header">Manishansh Shaswat's Portfolio</h1>
          <div className="projects">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <h2>{project.title}</h2>
                <p className="course">{project.course}</p>
                <p>{project.description}</p>
                <p className="tech">Tech Stack: {project.tech}</p>

                {project.video && (
                  <video
                    width="100%"
                    controls
                    style={{
                      marginTop: "15px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    }}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
