import React from 'react';
import logotipe from './logotipe.png';
import photo from './sait1.png';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import ot1 from './ot1.jpg';
import ot2 from './ot2.jpg';
import ot3 from './ot3.jpg';
import './App.css';
import { Link } from 'react-router-dom'; // Импорт Link из react-router-dom


function App() {
  return (
    <div>
          <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><Link to="/about">О нас</Link></li> 
            <li><a href="#">Контакты</a></li>
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
      <div className="company-block">
        <div className="inner-block">
          <div className="company-info">
            <h2>Наша компания - ваше лучшее решение</h2>
            <p className="company-details"> 
              Наша компания выстраивает индивидуальные стратегии для каждого клиента, основанные на глубоком анализе рынка 
              и тщательном изучении конкурентной среды. 
              Мы предлагаем не просто консультации, а стратегические решения, которые помогут вашему бизнесу процветать в современном мире.
              Присоединяйтесь к нам, чтобы вместе построить 
              успешное будущее вашего бизнеса.
            </p>
          </div>
          <img src={photo} className="company-photo-image" alt="company" />
            
          
          
        </div>
        
      </div>
       <div className="image-with-text-block">
        <img src={logotipe} alt="" />
        <p>СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ / 
ФИНАНСОВЫЙ АНАЛИЗ И ОПТИМИЗАЦИЯ / 
УПРАВЛЕНЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ</p>
      </div>

      <div className="projects-section">
        <h2>НАШИ ПРОЕКТЫ</h2>
        <div className="project">
          <div className="project-content">
            <img src={project1} alt="project1" />
            <div className="project-details">
              <p className="project-title">ОПТИМИЗАЦИЯ ОРГАНИЗАЦИОННОЙ СТРУКТУРЫ ТЕПЛОЭНЕРГО</p>
              <p className="project-description">
                Наш проект по оптимизации организационной структуры теплоэнергетики предназначен для повышения эффективности и улучшения управления в вашей компании.
                <br />
                Мы предлагаем комплексный подход к реорганизации оргструктуры, учитывая особенности вашего бизнеса и целей развития.
                <br />
                Результаты нашей работы помогут оптимизировать бизнес-процессы, снизить издержки и повысить конкурентоспособность вашего предприятия.
              </p>
            </div>
          </div>
          <button className="learn-more-button">Узнать больше</button>
        </div>
        <div className="project">
          <img src={project2} alt="project2" />
          <div className="project-details">
            <p className="project-title">ЭКОНОМИЧЕСКАЯ СТРАТЕГИЯ 2030</p>
            <p className="project-description">
              Проект  ориентирован на создание долгосрочных стратегий развития компаний, учитывающих текущие экономические тенденции и инновационные подходы. Целью данного проекта является обеспечение устойчивого и эффективного развития бизнеса в условиях быстро меняющейся экономической среды. Результаты работы над проектом позволят компаниям адаптироваться к новым вызовам и достичь конкурентных преимуществ в долгосрочной перспективе.</p>
          </div>
          <button className="learn-more-button">Узнать больше</button>
        </div>
        <div className="project">
          <img src={project3} alt="project3" />
          <div className="project-details">
            <p className="project-title">ФИНАНСОВЫЙ РЕНЕССАНС</p>
            <p className="project-description">
              Инициатива "Финансовый ренессанс" представляет собой комплексный подход к финансовому консультированию для бизнеса, направленный на повышение эффективности деятельности компаний. В рамках этой инициативы предлагается проведение анализа эффективности инвестиций с целью определения наиболее перспективных направлений развития и роста бизнеса.</p>
          </div>
          <button className="learn-more-button">Узнать больше</button>
        </div>
      </div>
     
<div className="testimonials-section">
  <h2>ЧТО ЛЮДИ ГОВОРЯТ О НАС ?</h2>
<div className="testimonials-section">
  <div className="testimonial">
    <img src={ot1} alt="testimonial1" />
    <p>Очень благодарен консалтинговой компании за профессиональный подход к решению наших бизнес-задач. Их команда экспертов предложила инновационные стратегии, которые помогли нам значительно улучшить нашу эффективность и увеличить прибыль. Рекомендую всем!</p>
  </div>
  <div className="testimonial">
    <img src={ot2} alt="testimonial2" />
    <p>чень благодарен консалтинговой компании за профессиональный подход к решению наших бизнес-задач. Их команда экспертов предложила инновационные стратегии, которые помогли нам значительно улучшить нашу эффективность и увеличить прибыль. Рекомендую всем!</p>
  </div>
  <div className="testimonial">
    <img src={ot3} alt="testimonial3" />
    <p>чень благодарен консалтинговой компании за профессиональный подход к решению наших бизнес-задач. Их команда экспертов предложила инновационные стратегии, которые помогли нам значительно улучшить нашу эффективность и увеличить прибыль. Рекомендую всем!</p>
  </div>
</div>

</div>
      <footer className="footer">
        <div className="contact-info">
          <h3>Контакты</h3>
          <p>Телефон: +123456789</p>
          <p>Email: example@example.com</p>
          <p>Адрес: Улица, Город, Страна</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
