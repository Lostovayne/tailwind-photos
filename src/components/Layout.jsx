import Header from './Header';
import Imagen from './Imagen';
import Perfil from './Perfil';

const Layout = () => {
    return (
        <div className=' bg-slate-100 mb-10 box-border'>
            <Header />
            <main className='w-3/4 mx-auto  h-[85%]'>
                <Perfil />

                <section className='flex gap-y-5 flex-wrap mt-10 justify-evenly px-11 '>
                    <Imagen
                        urlImagen={
                            'jb2yz35/pexels-oliver-sj-str-m-931007.jpg'
                        }
                    />
                    <Imagen
                        urlImagen={
                            'khJCQJq/pexels-eberhard-grossgasteiger-1670187.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            '99fKSY1/pexels-eberhard-grossgasteiger-1624438.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            'gDXXGWH/pexels-min-an-1006121.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            'BBxhPWz/pexels-yogendra-singh-1703021.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            '84Bp4q7/pexels-sebastian-palomino-1955134.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            '4VJ6DBH/pexels-jonas-ferlin-2224956.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            'VV0Xyjj/pexels-james-wheeler-1486974.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            'xfJZZZv/pexels-eberhard-grossgasteiger-1366919.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            'YjR8PJ0/pexels-aron-visuals-1743165.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            'QkM7jqr/pexels-tobias-bj-rkli-1559821.jpg'
                        }
                    />

                    <Imagen
                        urlImagen={
                            'Ws16gh9/pexels-marlon-martinez-1450082.jpg'
                        }
                    />
                </section>
            </main>
        </div>
    );
};

export default Layout;
