import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <NavLink className="navbar-brand" to="#"> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink className="nav-link text-light" activeclassname="active" to={"/"}> HOME </NavLink>
<NavLink className="nav-link text-light" activeclassname="active" to={"/category/productos"}> PRODUCTOS </NavLink>
<NavLink className="nav-link text-light" activeclassname="active" to={"/category/cereales-legumbres"}> CEREALES Y LEGUMBRES </NavLink>
<NavLink className="nav-link text-light" activeclassname="active" to={"/category/frutos-secos"}>FRUTOS SECOS </NavLink>
        
        
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavBar;