import estilos from './Banner.module.scss';

const Banner = () => {
    return(<section className={estilos.BannerArea}>
        <div className={estilos.Container}>
            <h1 className={estilos.Titulo}>Aluguel São Pedro</h1>
            <p>Alugar é mais barato!</p>
        </div>
    </section>)
}

export default Banner