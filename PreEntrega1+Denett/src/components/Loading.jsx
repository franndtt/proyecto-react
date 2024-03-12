const Loading = () => {
    return (
        <div className="container ,y-5">
            <div className="row">
                <div className="col text-center alling-items">
                   <div className="spinner-grow text-dark" role="status">
                     <span className="visually-hidden">Cargando....</span>
                     </div>
                     <div className="spinner-grow text-dark" role="status">
                     <span className="visually-hidden">Cargando....</span>
                     </div>
                     <div className="spinner-grow text-dark" role="status">
                     <span className="visually-hidden">Cargando....</span>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;