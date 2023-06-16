function Tarjeta(prop) {
    return (
        <div className="tarjeta">
            <div className='box-img'>
                <img className="img-gato" src={prop.img} alt="gato" />
            </div>
            <div className='descrip'>
                <h1>{prop.nombre}</h1>
                <h2>{prop.Logros}</h2>
            </div>
            
        </div>
    )
}
export default Tarjeta