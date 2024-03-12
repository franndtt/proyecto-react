import CartWidget from "./CartWidget"
import NavBar from "./NavBar"
import LogoPrincipal from "./logoPrincipal"


const Header = () => {
    return (
        <div className="container-fluid bg-dark mb-5">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-3 p-2 text-center ">
                    <LogoPrincipal  />
                </div>
                <div className="col-md-6  d-flex align-items-center justify-content-center ">
                    <NavBar />
                </div>
                <div className="col-md-3 p-2 d-flex ">
                    <CartWidget />
                </div>
            </div>

            
    


        </div>
        


    )
}

export default Header