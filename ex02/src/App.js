import './App.css';
import imageCard1 from './imgs/images_main/image_machine_learning.jpeg';
import imageCard2 from './imgs/images_main/image_software_developer.jpg';
import imageCard3 from './imgs/images_main/image_software_engineer.jpg';

import Footer from './components/Main/footer';

function App() {
  return (
    <div className="App">
      <div className='div_header'>
        <div className='div_header_left'>
          <h1>Vinicius Neves Corrêa</h1>
          <h2>Software Developer</h2>
          <h2>Software engineer student</h2>
        </div>
        <div className='div_header_right'></div>
      </div>
      <div className='div_services'>
        <div className='cards_service'>
          <img src={imageCard1} alt='image card 1'/>
          <h2>Machine Learning</h2>
          <p>Machine Learning (ML) é um subcampo da inteligência artificial (IA) que se concentra no desenvolvimento de algoritmos e modelos que permitem a um sistema aprender e melhorar sua capacidade de realizar tarefas específicas com base em dados. Em vez de programar explicitamente regras e instruções, os sistemas de ML utilizam técnicas estatísticas para identificar padrões nos dados e criar modelos preditivos.
          </p>
          <button className='btn_services'>Show more</button>
        </div>
        <div className='cards_service'>
          <img src={imageCard2} alt='image card 2'/>
          <h2>Software Developer</h2>
          <p>Um desenvolvedor de software é um profissional que cria, mantém e aprimora programas de computador e aplicativos. Eles são responsáveis por escrever código de computador usando várias linguagens de programação, como Java, Python, C++, entre outras. Os desenvolvedores de software trabalham em uma variedade de setores, incluindo tecnologia da informação, jogos, saúde, finanças e muito mais.
          </p>
          <button className='btn_services'>Show more</button>
        </div>
        <div className='cards_service'>
          <img src={imageCard3} alt='image card 3'/>
          <h2>Software Engineer</h2>
          <p>Um engenheiro de software é um profissional especializado na criação, desenvolvimento e manutenção de software. Eles desempenham um papel fundamental na concepção de programas de computador e sistemas que atendam às necessidades específicas de empresas e organizações. Aqui estão algumas das principais responsabilidades e características de um engenheiro de software:
          </p>
          <button className='btn_services'>Show more</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
