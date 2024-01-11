import CartWidget from "./CartWidget"
import NavBar from "./NavBar"
import LogoPrincipal from "./logoPrincipal"

const Header = () => {
    return (
        <div className="container my-3 bg-dark">
            <div className="row">
                <div className="col-md-3 p-2">
                    <LogoPrincipal />
                </div>
                <div className="col-md-6 d-flex alling-items-center">
                    <NavBar />
                </div>
                <div className="col-md-3 p-5 d-flex alling-items-center">
                    <CartWidget />
                </div>
            </div>
    


        </div>
        


    )
}

export default Header