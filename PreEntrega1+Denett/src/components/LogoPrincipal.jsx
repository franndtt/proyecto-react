import Logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom";

const LogoPrincipal = () => {
    return ( <Link to={"/"} > 
      <img src={Logo} alt="logo Principal" width={120} />
      </Link>
    )
}

export default LogoPrincipal