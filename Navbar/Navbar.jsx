  /* SIMPLE NAVBAR */
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container d-flex align-item-center">
    <NavLink className="navbar-brand order-0" to="/">
      <img src="Images/logo.png" alt="" />
    </NavLink>
    <div className="d-flex gap-4">
      <div className="nav-btn  d-lg-none d-block ">
        <button type="button" className="btn btn-primary">
          Download app
        </button>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars-staggered "></i>
      </button>
    </div>
    <div
      className="collapse navbar-collapse order-2"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            to="/popular"
          >
            Popular
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/toprated">
            TopRated
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/pcomming">
            Upcomming
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="nav-btn order-lg-3 order-4 d-lg-block d-none ">
      <button type="button" className="btn btn-primary">
        Download app
      </button>
    </div>
  </div>
</nav>;


  /* OFFCANVAS NAVBAR */
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container d-flex align-item-center">
    <NavLink className="navbar-brand" to="/">
      <h4>AddToCart</h4>
    </NavLink>
    <div className="d-flex gap-4">
      <div className="nav-btn  d-lg-none d-block ">
        <button type="button" className="btn btn-primary">
          Download app
        </button>
      </div>
      <a
        className="navbar-toggler"
        role="button"
        href="#offcanvasExample"
        data-bs-toggle="offcanvas"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars-staggered "></i>
      </a>
    </div>

    <div
      className="offcanvas offcanvas-start"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/popular"
            >
              Popular
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/toprated">
              TopRated
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/pcomming">
              Upcomming
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-btn  d-lg-block d-none ">
      <button type="button" className="btn btn-primary">
        Download app
      </button>
    </div>
  </div>
</nav>;
