const Imagen = ({ urlImagen }) => {
    const url = `https://i.ibb.co/${urlImagen}`;

    return (
        <div className='p-2 bg-white rounded shadow shadow-slate-100 transition-all hover:shadow-xl cursor-pointer hover:scale-105 hover:transform-gpu '>
            <img src={url} alt='' className='h-96 w-72 rounded  ' />
        </div>
    );
};

export default Imagen;
