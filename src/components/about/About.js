import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div>
        <h2 className="a-title">About Me</h2>
      </div>
      <div className="about">
        <div className="a-left">
          <div className="a-card-bg"></div>
          <div className="a-card">
            <p className="a-text">
              Work out, go for a run, kickboxing, listen to music and podcasts!
            </p>
          </div>
        </div>
        <div className="a-right">
          <div className="a-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

