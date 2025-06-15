import estilos from './Home.module.scss';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Rodape from '../../components/Rodape';


function App () {
    return (
        <>
            <Navbar/>
            <Banner/>
            <section className={estilos.Container}>
                <img src="https://static.wixstatic.com/media/960961_08f178e4ac964ab4887f3f354c2dc645~mv2.jpg/v1/crop/x_83,y_0,w_398,h_423/fill/w_323,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7462.jpg" 
                alt="Agende uma visita e conheça nosso ShowRoom" />
                <div className={estilos.Descricao}>
                    <p>É provável que o local escolhido para o seu evento, não disponha de todo o material necessário. 
                        Isto ocorre muito com quem opta por cerimônias em sua própria residência ou grandes eventos.
                    </p>
                    <p>Tendo como objetivo atender aos nossos clientes da melhor forma possível, a nossa empresa vem se destacando no mercado de locação de todo material para Festas e utensílios em geral.</p>
                    <p>Nesses casos a solução mais indicada é alugar todo o material necessário  que a ocasião exige.</p>
                </div>
            </section>
            <section className={estilos.Container}>
                <div className={estilos.Descricao}>
                    <p>A empresa "<strong>Aluguel São Pedro</strong>" vem colecionando o prestígio de seus mais exigentes clientes que aqui tiveram tratamento classe "<strong>A</strong>" e o melhor preço do mercado.</p>
                    <p>Alugamos Pratos, Talheres, Copos, Taças, Rechaud, Tinas, Bandejas, Travessas, Bandejas de vidro, Suqueiras de vidro, Ramequim, potes para mini refeições, Bowls, Utensílios para cozinha, Toalhas, Mesas Pranchão de 2 metros e muito mais.</p>
                    <p>Nossa empresa tem grande aceitação no mercado pela sua qualidade em todo o nosso material, e o menor preço.</p>
                </div>
                <img src="https://static.wixstatic.com/media/960961_480b4eee2b6d4616b2231fea66016f9b~mv2_d_1916_1280_s_2.jpg/v1/fill/w_508,h_339,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/960961_480b4eee2b6d4616b2231fea66016f9b~mv2_d_1916_1280_s_2.jpg" 
                alt="Agende uma visita e conheça nosso ShowRoom" />
            </section>
            <Rodape/>
        </>
    )
}

export default App