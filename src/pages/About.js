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
            Taught programming concepts to high school students through workshops and educational programs, helping students develop their coding skills.
          </p>
          <p className="about-sec">
            <b>Training Program Lead</b><br/>
            UNSW DevSoc | 2023 - 2023 <br/>
            Led the planning and delivery of a student training program, coordinating learning materials and supporting participants through technical workshops. <br/>
          </p>
          <p className="about-sec">
            In addition, I am also a freelance artist, specialising in character illustrations, 2D animations, and video editing. I create artwork for personal projects and client commissions.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;


