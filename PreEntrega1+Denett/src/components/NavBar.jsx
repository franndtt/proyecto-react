

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-light" href="#">NOSOTROS</a>
        <a className="nav-link text-light" href="#">PRODUCTOS</a>
        <a className="nav-link text-light" href="#">SUCURSALES</a>
        <a className="nav-link text-light" href="#">CONTACTO</a>
        
        
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar;