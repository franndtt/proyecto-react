import TomyFoto from "../assets/images/158.jpg";

const Home = () => {
    return (
      <div className="container">
        <div className="row">
            <div className="col md-5">
             <div className="row">
                <div className="col">
                  <img className="img-fluid" src={TomyFoto} alt="Logo" />
                </div>
             </div>
            </div>

            <div className="col md-7">
             <div className="row">
                <div className="col">
                    <h1>Nosotros</h1>
                    <p className="fs-5">Somos Dietéticas Tomy. Y somos la opción más rica, saludable y económica en productos naturales. Si cada vez oye hablar más de nosotros es porque desde el año 2002 estamos en permanente expansión. Hoy, Dietéticas Tomy está integrada por más de 96 locales ubicados estratégicamente en los principales barrios de la Capital Federal, Gran Buenos Aires y el interior del país.
Nuestros altos estándares de calidad hacen posible que lleguemos a cada local con las más sanas y ricas opciones. Y esa calidad es insuperable cuando, además, llega a cada persona con el mejor precio. Porque para nosotros, un producto saludable lo es más cuando muchas personas pueden acceder a él.
Nuestra visión es seguir enfocados en la permanente apertura de locales, en la rápida reposición de la mercadería, y en todo lo que nos acerque a facilitar ese cambio de vida en quienes lo buscan.</p>
                </div>
             </div>
            </div>
        </div>
      </div>
      
     );

    
    

  
}

export default Home;