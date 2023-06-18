import ContactCard from "../components/ContactCard";

function ResumePage({
  email,
  phone,
  github,
  linkedin,
  instagram,
  twitter,
  linkedinLink,
  githubLink,
  mailto,
  instagramLink,
  twitterLink,
}) {
  return (
    <div
      className="py-3 text-center bgimg2"
      style={{
        backgroundColor: "rgb(33, 37, 41)",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h1 className="display-1 textgr3 my-5">Contacts</h1>
      <div className="container w-100">
        <div className="row">
          <ContactCard
            name="Email"
            content={email}
            fontawosomeclass="fa-regular fa-envelope-open"
            disableAnchor={false}
            link={mailto}
          />
          <ContactCard
            name="Phone"
            content={phone}
            fontawosomeclass="fa-solid fa-phone"
          />
          <ContactCard
            name="GitHub"
            content={github}
            fontawosomeclass="fa-brands fa-github"
            disableAnchor={false}
            link={githubLink}
          />
          <ContactCard
            name="LinkedIn"
            content={linkedin}
            fontawosomeclass="fa-brands fa-linkedin"
            disableAnchor={false}
            link={linkedinLink}
          />
          <ContactCard
            name="Instagram"
            content={instagram}
            fontawosomeclass="fa-brands fa-instagram"
            disableAnchor={false}
            link={instagramLink}
          />
          <ContactCard
            name="Twitter"
            content={twitter}
            fontawosomeclass="fa-brands fa-twitter"
            disableAnchor={false}
            link={twitterLink}
          />
        </div>
        {/* Make card for each with icons from fontawosome */}
      </div>
    </div>
  );
}

ResumePage.defaultProps = {
  email: "aryan.vishwakarma0902@gmail.com",
  phone: "+91 9452674438",
  github: "github.com/aryanv8",
  linkedin: "aryan-vishwakarma",
  instagram: "aryanv_aryan",
  facebook: "facebook",
  twitter: "@aryanv_aryan",
  linkedinLink: "https://www.linkedin.com/in/aryan-vishwakarma/",
  githubLink: "https://www.github.com/aryanv8",
  mailto: `mailto:aryan.vishwakarma0902@gmail.com`,
  instagramLink: "https://www.instagram.com/aryanv_aryan/",
  twitterLink: "https://www.twitter.com/aryanv_aryan/",
};

export default ResumePage;
