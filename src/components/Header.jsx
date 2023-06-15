function Header(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient shadow shadow-lg sticky-top py-2 px-4">
      <div className="container-fluid">
        <div className="nav-brand display-5 textgr3 px-4">{props.dName}</div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end ms-auto">
            <li className="nav-item px-4" style={{ maxWidth: "170px" }}>
              <a className="nav-link active fs-3 textgr3" href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-4" style={{ maxWidth: "170px" }}>
              <a className="nav-link fs-3 textgr3" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item px-4" style={{ maxWidth: "170px" }}>
              <a className="nav-link fs-3 textgr3" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
