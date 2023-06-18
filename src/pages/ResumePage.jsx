function ResumePage({ education, experience, skills }) {
  return (
    <div
      className="py-3 text-center bgimg2"
      style={{
        backgroundColor: "rgb(33, 37, 41)",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h1 className="display-1 textgr3 my-5">Resume</h1>
      <div className="container w-100 text-start text-light">
        <h1>Education</h1>
        {education.map((edu, index) => (
          <div className="lead" key={index}>
            {edu}
          </div>
        ))}

        <h1 className="mt-5">Experience</h1>
        {experience.map((exp, index) => (
          <div className="lead" key={index}>
            {exp}
          </div>
        ))}

        <h1 className="mt-5">Skills</h1>
        {/* Make a slider for skills which is disabled to be moved from web page */}
        <div className="row row-cols-auto">
          {Object.keys(skills).map((skill, index) => (
            <div className="col-5 me-5" key={index}>
              <div className="lead mt-2">
                {skill}
              </div>
              <div className="row p-0 ms-0">
                <div
                  className="progress my-3 col-10 p-0"
                  style={{ minWidth: "200px", height: "20px" }}
                >
                  <div
                    className="progress-bar m-0"
                    role="progressbar"
                    style={{
                      width: skills[skill],
                      backgroundColor: "rgb(93, 169, 225)",
                    }}
                    aria-valuenow={skills[skill]}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="col-2 d-flex align-items-center">
                  {skills[skill]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ResumePage.defaultProps = {
  education: [
    "B.Tech in Computer Science and Engineering with Specialization in Blockchain Technology from",
    "Vellore Institute of Technology, Vellore, Tamil Nadu, India",
  ],
  experience: [
    "MERN Stack Internship at Ethnus Training",
    "Member of Apple Developers Group VIT as Android Developer",
  ],
  skills: {
    "C": "80%",
    "C++": "85%",
    "Java": "90%",
    "Python": "80%",
    "HTML": "80%",
    "CSS": "40%",
    "JavaScript": "80%",
    "Express.js": "70%",
    "React": "85%",
    "Node.js": "80%",
    "MongoDB": "80%",
    "MySQL": "70%",
    "GoLang": "60%",
    "PHP": "75%",
    "Android Development": "50%",
    "Flutter Development": "60%",
    "UI Design": "30%",
  },
};

export default ResumePage;
