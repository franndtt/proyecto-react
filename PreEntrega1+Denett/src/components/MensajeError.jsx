const MensajeError = ({greeting}) => {
    return (

        <div className="container my-5">

         <div className="row">
           <div className="col text-center">

         <div className="alert alert-dark" role="alert">{greeting} </div> 
            </div>
         </div>
         

           
        

        </div>
        
    )
}

export default MensajeError