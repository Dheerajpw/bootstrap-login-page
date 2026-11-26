
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          <span className="brand-icon">L</span> Loginify
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#login">
                Login
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="btn btn-primary px-4 rounded-pill" href="#login">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
