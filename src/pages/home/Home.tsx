import HeaderContact from '../../components/header-contact/HeaderContact';
import Sections from '../../components/sections/Sections';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

const texto = `Mussum Ipsum, cacilds vidis
 litro abertis. Praesent vel viverra nisi.
  Mauris aliquet nunc non turpis scelerisque, 
  eget.Atirei o pau no gatis, per gatis num
  morreus.Não sou faixa preta cumpadi, sou preto
   inteiris, inteiris.Quem num gosta di mé, boa 
   gentis num é.`;

function Home() {
    return (
        <div>
            <HeaderContact height="50vh" size="50px" text="Minha Primeira Página React" />
            <Nav />
            <Sections reverse={false} url="./assets/image1.jpg" text={texto} />
            <Sections reverse url="./assets/image2.jpg" text={texto} />
            <Sections reverse={false} url="./assets/image3.jpg" text={texto} />
            <HeaderContact height="25vh" size="50px" text="Contato" />
            <Footer />
        </div>
    );
}

export default Home;
