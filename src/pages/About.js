import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="container-about">
          <p className="about-sec">
            I graduated from the University of New South Wales with a Bachelor of Science (Computer Science) with experience in frontend development, software projects, and teaching.
          </p>
          <p className="about-sec">
            During my studies, I have taken on roles including:
          </p>
          <p className="about-sec">
            <b>Casual Academic</b><br/>
            UNSW | 2024 - Present <br/>
            Supported students in Software Engineering Fundamentals and Web Front-End Development courses through lab demonstrations, guidance, and technical assistance.
          </p>
          <p className="about-sec">
            <b>Student Ambassador</b><br/>
            UNSW | 2024 - 2024 <br/>
            Represented UNSW at student events, assisting with outreach activities and providing guidance to prospective and current students.
          </p>
          <p className="about-sec">
            <b>Coding Teacher</b><br/>
            CompClub | 2023 - 2025 <br/>
            Taught programming concepts to high school students through workshops and educational programs, adapting lessons to different levels of experience.
          </p>
          <p className="about-sec">
            <b>Training Program Lead</b><br/>
            UNSW DevSoc | 2023 - 2023 <br/>
            Participated in a term-long training program, working in a team to plan and develop a web project while gaining experience in collaborative software development.
          </p>
          <p className="about-sec">
            In my free time, I am a digital artist specialising in character illustrations, 2D animations, and video editing. I create artwork for personal projects and client commissions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;


