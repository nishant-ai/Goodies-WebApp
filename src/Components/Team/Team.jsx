import "./Team.scss";

// Images
import TeamHeading from "../../assets/TEAM_ZERO.svg";

function Team() {
  return (
    <div className="Team">
      <header>
        <div className="title">
          <img className="TeamHeading" src={TeamHeading} alt="Team Zero" />
        </div>
        <div className="content">
          <h5>who we are</h5>
          <p>
            We are team of creatively diverse. driven. innovative programmers.
          </p>
        </div>
      </header>
      <main>
        <div className="profile">
          <figure data-value="Frontend Developer">
            <img src={require("../../assets/nishant.jpeg")} alt="" />
            <figcaption>Nishant Sharma</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="Frontend Developer">
            <img src={require("../../assets/Pranshu.jpg")} alt="" />
            <figcaption>Pranshu Singh</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="Frontend Developer">
            <img src={require("../../assets/Samridhi.jpg")} alt="" />
            <figcaption>Samridhhi Yadav</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="Frontend Developer">
            <img src={require("../../assets/Dhruv.jpg")} alt="" />
            <figcaption>Dhruv Varshney</figcaption>
          </figure>
        </div>
      </main>
    </div>
  );
}

export default Team;
