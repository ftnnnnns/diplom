import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logotipe.png'; // Исправлено имя файла
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Link } from "react-router-dom";
import { RouterProvider } from "react-router";
import logotipe from './logotipe.png';
import photo from './photo.png';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import gorod from './gorod.jpg';
import ot1 from './ot1.jpg';
import ot2 from './ot2.jpg';
import ot3 from './ot3.jpg';
import first from './first.svg';
import two from './two.svg';
import tree from './tree.svg';
import uslugi from './usugi.png';
import start from './stratcon.jpg';
import per from './per.jpeg';
import fin from './finan.jpg';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import slide22 from './slide22.jpg';
import slide33 from './slide33.jpg';
import slide333 from './slide333.png';
import slide222 from './slide222.jpg';
import slide111 from './slide111.jpeg';
import './App.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
          <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><Link to="/about">О нас</Link></li> 
            
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
      <div className="company-block">
        <div className="inner-block">
          <div className="company-info">
            <h2>Наша компания - ваше лучшее решение</h2>
            <p className="history"> 
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
              <p className="project-title">ОПТИМИЗАЦИЯ ОРГАНИЗАЦИОННОЙ СТРУКТУРЫ </p>
              <p className="project-description">
                Наш проект по оптимизации организационной структуры  предназначен для повышения эффективности и улучшения управления в вашей компании.Результаты нашей работы помогут оптимизировать бизнес-процессы, снизить издержки и повысить конкурентоспособность вашего предприятия.
              </p>
            </div>
            <Link to="/more" className="learn-more-button">Узнать больше</Link>
          </div>
          
        </div>
        <div className="project">
          <img src={project2} alt="project2" />
          <div className="project-details">
            <p className="project-title">ЭКОНОМИЧЕСКАЯ СТРАТЕГИЯ 2030</p>
            <p className="project-description">
              Проект  ориентирован на создание долгосрочных стратегий развития компаний, учитывающих текущие экономические тенденции и инновационные подходы. Целью данного проекта является обеспечение устойчивого и эффективного развития бизнеса в условиях быстро меняющейся экономической среды. Результаты работы над проектом позволят компаниям адаптироваться к новым вызовам и достичь конкурентных преимуществ в долгосрочной перспективе.</p>
          </div>
          <Link to="/moreik" className="learn-more-button">Узнать больше</Link>
        </div>
        <div className="project">
          <img src={project3} alt="project3" />
          <div className="project-details">
            <p className="project-title">ФИНАНСОВЫЙ РЕНЕССАНС</p>
            <p className="project-description">
              Инициатива "Финансовый ренессанс" представляет собой комплексный подход к финансовому консультированию для бизнеса, направленный на повышение эффективности деятельности компаний. В рамках этой инициативы предлагается проведение анализа эффективности инвестиций с целью определения наиболее перспективных направлений развития и роста бизнеса.</p>
          </div>
          <Link to="/morefin" className="learn-more-button">Узнать больше</Link>

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
    <p>Отличный сервис и высокий уровень компетентности у сотрудников "ИНЭК-Поволжье". Благодаря их консультациям, мы смогли разработать инновационные решения, которые значительно улучшили нашу позицию на рынке</p>
  </div>
  <div className="testimonial">
    <img src={ot3} alt="testimonial3" />
    <p>Я приятно удивлена результатами работы с консалтинговой компанией "ИНЭК-Поволжье". Они не только помогли нам оптимизировать наши операции, но и предоставили ценные стратегические рекомендации, которые помогли нам преуспеть в нашем бизнесе.</p>
  </div>
</div>

</div>
      <footer className="footer">
        <div className="contact-info">
          <h3>Контакты</h3>
          <p>Телефон: +7 (831) 430-59-55</p>
          <p>Email: inecpovol@gamil.com</p>
          <p>Адрес: 603163, Нижегородская область, город Нижний Новгород, ул. Александра Хохлова, д.5, офис 22</p>
        </div>
      </footer>
    </div>
    ),
  },
{
  path: "/more",
  element: (
    <div>
      <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li> 
            <li><Link to="/about">О нас</Link></li> 
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
      
      <div className="company-block">
        <div className="inner-block">
          <div className="company-info">
            <h2>ОПТИМИЗАЦИЯ ОРГАНИЗАЦИОННОЙ СТРУКТУРЫ</h2>
            <p className="history"> 
              Наш проект по оптимизации организационной структуры представляет собой инновационную исследовательскую инициативу, направленную на улучшение функционирования и управления вашей компанией. Мы осознаем, что успешное предприятие строится не только на качественных продуктах или услугах, но и на эффективной организации внутренних процессов.
            </p>
          </div>
          <img src={project1} className="company-photo-image" alt="company" />
        </div>
        
      </div>
             <div className="image-with-text-block">
        <img src={logotipe} alt="" />
        <p>СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ / 
ФИНАНСОВЫЙ АНАЛИЗ И ОПТИМИЗАЦИЯ / 
УПРАВЛЕНЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ</p>
      </div>
      <div class="slider">
  <div class="slides">
    <div class="image-container">
      <div class="image-wrapper">
        <img src={slide1} alt="Slide 1" />
        <h3>Этап 1: Анализ</h3>
        <p>На этом этапе проводится глубокий анализ текущей организационной структуры компании. Специалисты изучают структуру управления, взаимосвязи между подразделениями, а также выявляют слабые места и узкие места в организации. В результате этого этапа формируется обширное понимание текущего состояния компании и определяются основные проблемы, требующие решения.</p>
      </div>
      <div class="image-wrapper">
        <img src={slide2} alt="Slide 2" />
        <h3>Этап 2: Планирование</h3>
        <p>На этом этапе разрабатывается стратегия оптимизации организационной структуры. Специалисты вырабатывают план действий, определяют ключевые шаги и ресурсы, необходимые для внедрения изменений. Планирование включает в себя определение целей и задач, выбор методов и инструментов для реализации изменений, а также оценку возможных рисков и ресурсов, требующихся для успешной реализации проекта.</p>
      </div>
      <div class="image-wrapper">
        <img src={slide3} alt="Slide 3" />
        <h3>Этап 3: Внедрение</h3>
        <p>На этом этапе происходит внедрение изменений в организационную структуру компании согласно разработанному плану. Реализация изменений может включать перестройку подразделений, изменение системы управления, перераспределение ролей и обязанностей сотрудников, а также внедрение новых технологий и процессов работы. Важным аспектом этого этапа является обеспечение плавного перехода к новой структуре без существенного нарушения бизнес-процессов и эффективности работы компании.</p>
      </div>
    </div>
  </div>
</div>
<div className="request-section">
  <h2>Оставьте заявку</h2>
  <form id="request-form" className="request-form">
    <label htmlFor="name">Введите ваше ФИО:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="message">Комментарий:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Отправить</button>
  </form>
</div>

<div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Ваша заявка успешно отправлена!</p>
  </div>
</div>


       <footer className="footer">
        <div className="contact-info">
          <h3>Контакты</h3>
          <p>Телефон: +7 (831) 430-59-55</p>
          <p>Email: inecpovol@gamil.com</p>
          <p>Адрес: 603163, Нижегородская область, город Нижний Новгород, ул. Александра Хохлова, д.5, офис 22</p>
        </div>
      </footer>
      </div>
   
  )
}


,
  {
    path: "/moreik",
    element: (
           <div>
      <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li> 
            <li><Link to="/about">О нас</Link></li> 
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
      
      <div className="company-block">
        <div className="inner-block">
          <div className="company-info">
            <h2>ЭКОНОМИЧЕСКАЯ СТРАТЕГИЯ 2030</h2>
            <p className="history"> 
              Проект  представляет собой масштабную программу консультационных услуг, направленных на поддержку предприятий и государственных органов в разработке и реализации стратегии развития экономики на ближайшие десятилетия. Цель данного проекта состоит в том, чтобы предоставить клиентам комплексное руководство и экспертную поддержку в формулировании и осуществлении долгосрочной экономической стратегии, соответствующей вызовам и возможностям будущего. </p>
          </div>
          <img src={project2} className="company-photo-image" alt="company" />
        </div>
        
      </div>
             <div className="image-with-text-block">
        <img src={logotipe} alt="" />
        <p>СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ / 
ФИНАНСОВЫЙ АНАЛИЗ И ОПТИМИЗАЦИЯ / 
УПРАВЛЕНЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ</p>
      </div>
      <div class="slider">
  <div class="slides">
    <div class="image-container">
      <div class="image-wrapper">
        <img src={slide1} alt="Slide 1" />
        <h3>1. Инициация проекта и сбор информации</h3>
        <p>Начальная фаза, включающая в себя обсуждение целей и задач проекта с клиентом, анализ текущего состояния экономики, сбор и анализ данных о социально-экономическом положении страны или региона.</p>
      </div>
      <div class="image-wrapper">
        <img src={slide22} alt="Slide 22" />
        <h3>2. Формулирование стратегии и планирование действий</h3>
        <p>Создание долгосрочной стратегии развития экономики на основе проведенного анализа, разработка конкретных целей, планов и мероприятий для ее реализации.</p>
      </div>
      <div class="image-wrapper">
        <img src={slide33} alt="Slide 33" />
        <h3>3. Внедрение и поддержка</h3>
        <p> Поддержка клиента в процессе внедрения стратегии, проведение обучающих мероприятий, мониторинг реализации планов и внесение коррективов при необходимости.

</p>
      </div>
    </div>
  </div>
</div>
<div className="request-section">
  <h2>Оставьте заявку</h2>
  <form id="request-form" className="request-form">
    <label htmlFor="name">Введите ваше ФИО:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="message">Комментарий:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Отправить</button>
  </form>
</div>

<div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Ваша заявка успешно отправлена!</p>
  </div>
</div>


       <footer className="footer">
        <div className="contact-info">
          <h3>Контакты</h3>
          <p>Телефон: +7 (831) 430-59-55</p>
          <p>Email: inecpovol@gamil.com</p>
          <p>Адрес: 603163, Нижегородская область, город Нижний Новгород, ул. Александра Хохлова, д.5, офис 22</p>
        </div>
      </footer>
      </div>
      
    ),
  },
  {
    path: "/morefin",
    element: (
     <div>
      <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li> 
            <li><Link to="/about">О нас</Link></li> 
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
      
      <div className="company-block">
        <div className="inner-block">
          <div className="company-info">
            <h2>ФИНАНСОВЫЙ РЕНЕССАНС</h2>
            <p className="history"> 
              Проект "Финансовый Ренессанс" представляет собой амбициозную программу финансового консалтинга, нацеленную на реформирование и оптимизацию финансовых систем предприятий и организаций. Цель данного проекта заключается в создании стратегических решений и инновационных подходов, способствующих росту финансовой стабильности и успешности бизнеса.  </p>
          </div>
          <img src={project3} className="company-photo-image" alt="company" />
        </div>
        
      </div>
             <div className="image-with-text-block">
        <img src={logotipe} alt="" />
        <p>СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ / 
ФИНАНСОВЫЙ АНАЛИЗ И ОПТИМИЗАЦИЯ / 
УПРАВЛЕНЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ</p>
      </div>
      <div class="slider">
  <div class="slides">
    <div class="image-container">
      <div class="image-wrapper">
        <img src={slide111} alt="Slide 1" />
        <h3>Этап 1: Анализ финансового положения</h3>
        <p>Начальная фаза, включающая сбор и анализ данных о финансовом состоянии клиента, выявление ключевых финансовых показателей, идентификацию проблемных областей и потенциальных возможностей для улучшения.</p>
      </div>
      <div class="image-wrapper">
        <img src={slide222} alt="Slide 2" />
        <h3>Этап 2: Разработка стратегии финансового ренессанса</h3>
        <p>Этап, на котором осуществляется формулирование стратегии и плана действий по оптимизации финансовой системы клиента. В рамках этого этапа определяются цели и приоритеты проекта, разрабатываются инновационные методы и инструменты для улучшения финансового положения.</p>
      </div>
      <div class="image-wrapper">
        <img src={slide333} alt="Slide 3" />
        <h3>Этап 3: Внедрение и мониторинг</h3>
        <p>Проведение реформ и внедрение новых финансовых практик и процессов в организацию. На этом этапе осуществляется систематический мониторинг и контроль за реализацией стратегии, а также оценка эффективности внедренных изменений и внесение коррективов при необходимости</p>
      </div>
    </div>
  </div>
</div>
<div className="request-section">
  <h2>Оставьте заявку</h2>
  <form id="request-form" className="request-form">
    <label htmlFor="name">Введите ваше ФИО:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="message">Комментарий:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Отправить</button>
  </form>
</div>

<div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Ваша заявка успешно отправлена!</p>
  </div>
</div>


       <footer className="footer">
        <div className="contact-info">
          <h3>Контакты</h3>
          <p>Телефон: +7 (831) 430-59-55</p>
          <p>Email: inecpovol@gamil.com</p>
          <p>Адрес: 603163, Нижегородская область, город Нижний Новгород, ул. Александра Хохлова, д.5, офис 22</p>
        </div>
      </footer>
      </div>
    ),
  },
  
  {
    path: "/about",
    element: (
      <div>
        <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li> 
            <li><Link to="/about">О нас</Link></li> 
            
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
      <div>
      
      <div className="company-block">
        <div className="inner-block">
          <div className="company-info">
            <h2>ИСТОРИЯ НАШЕЙ КОМПАНИИ</h2>
            <p className="history"> 
              История открытия компании ИНЭК Поволжье увлекательна и вдохновляюща. Она началась в начале 2000-х годов, когда группа предприимчивых и энергичных инженеров и бизнесменов объединили свои усилия с целью создания востребованного и технологически передового предприятия в сфере энергетики. Стремление к инновациям и постоянному совершенствованию в сфере производства и поставок энергетического оборудования было их главным мотивом.
            </p>
          </div>
          <img src={gorod} className="company-photo-image" alt="company" />
            
          
          
        </div>
        
      </div>
      </div>
             <div className="image-with-text-block">
        <img src={logotipe} alt="" />
        <p>СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ / 
ФИНАНСОВЫЙ АНАЛИЗ И ОПТИМИЗАЦИЯ / 
УПРАВЛЕНЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ</p>
      </div>
            <div className="projects-section">
        <h2>ЭТАПЫ РАЗВИТИЯ</h2>
        <div className="testimonial">
          <div className="project-content">
            <img src={first} alt="project1" />
            <div className="project-details">
              <p className="ravitie">ЗАРОЖДЕНИЕ И СТАНОВЛЕНИЕ</p>
              <p className="itap-description">
                Этот этап характеризовался идеей и мечтой о создании востребованного и технологически передового предприятия, способного не только предоставлять высококачественные услуги, но и вносить вклад в развитие отрасли.
              </p>
            </div>
        </div>
        </div>
        <div className="testimonial">
          <img src={two} alt="project2" />
          <div className="project-details">
            <p className="ravitie">РАЗВИТИЕ И РАСШИРЕНИЕ</p>
            <p className="itap-description">
              В течение следующего десятилетия компания активно развивалась и расширялась. Она фокусировалась на разработке и производстве передовых технологий для энергосистем и промышленных предприятий. В это время были накоплены ценный опыт и ресурсы, позволяющие компании укрепить свои позиции на рынке энергетики.</p>
          </div>
          
        </div>
        <div className="testimonial">
          <img src={tree} alt="project3" />
          <div className="project-details">
            <p className="ravitie">СТРАТЕГИЧЕСКОЕ РАЗВИТИЕ</p>
            <p className="itap-description">
              В текущем десятилетии компания ИНЭК Поволжье сосредоточена на стратегическом развитии и внедрении новейших технологий в сфере энергетики. Она успешно внедрила собственные разработки в области возобновляемой энергетики, став ведущим производителем альтернативной энергетики в регионе. Стремление к инновациям, высокие технологии и экологическая ответственность стали ключевыми принципами компании, определяющими её успешное развитие и влияние на отрасль.</p>
          </div>
          
        </div>
      </div>
       <footer className="footer">
        <div className="contact-info">
          <h3>Контакты</h3>
          <p>Телефон: +7 (831) 430-59-55</p>
          <p>Email: inecpovol@gamil.com</p>
          <p>Адрес: 603163, Нижегородская область, город Нижний Новгород, ул. Александра Хохлова, д.5, офис 22</p>
        </div>
      </footer>
</div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
  <header className="App-header">
        <img src={logotipe} className="App-logo" alt="logo" /> 
        <h1 className="App-title">ИНЭК-ПОВОЛЖЬЕ</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li> 
            <li><Link to="/about">О нас</Link></li> 
            <li><Link to="/services">Наши услуги</Link></li> 
          </ul>
        </nav>
      </header>
            <div className="company-block">
        <div className="inner-block">
          <div className="company-info">
            <h2>УСЛУГИ</h2>
            <p className="history"> 
              Услуги нашей организации  охватывают широкий спектр потребностей в различных сферах, предлагая инновационные решения и высококачественное обслуживание. Мы стремимся удовлетворить потребности наших клиентов, предоставляя комплексные услуги, которые помогут им оптимизировать свои энергетические системы и повысить эффективность своего бизнеса </p>
          </div>
          <img src={uslugi} className="company-photo-image" alt="company" />
            
          
          
        </div>
        
      </div>
       <div className="image-with-text-block">
        <img src={logotipe} alt="" />
        <p>СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ / 
ФИНАНСОВЫЙ АНАЛИЗ И ОПТИМИЗАЦИЯ / 
УПРАВЛЕНЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ</p>
      </div>
      <div className="services-section">
  <div className="service">
    <h3>СТРАТЕГИЧЕСКИЙ КОНСАЛТИНГ</h3>
    <img src={start} alt="Стратегический консалтинг" />
    <p> Наша компания предоставляет стратегический консалтинг для организаций, стремящихся оптимизировать свою деятельность и достичь выдающихся результатов. Мы разрабатываем индивидуальные стратегии роста и развития, основанные на анализе рынка, конкурентной среды и внутренних возможностей. Наши эксперты помогут вашей компании определить приоритетные направления деятельности, выстроить эффективные бизнес-процессы и укрепить ваше конкурентное преимущество.
.</p>
    <p className="price">Цена: от 100 000 руб</p>
  </div>
  <div className="service">
    <h3>ФИНАНСОВЫЙ АНАЛИЗ И ОПТИМИЗАЦИЯ</h3>
    <img src={fin} alt="Финансовый анализ и оптимизация" />
    <p>Наша команда специалистов по финансовому анализу поможет вам оценить текущее финансовое состояние вашей компании, выявить финансовые риски и возможности для улучшения. Мы проведем глубокий анализ вашей финансовой деятельности, предоставим ценные рекомендации по оптимизации расходов, управлению долгами и увеличению прибыли. Наши решения помогут вашей компании стать финансово устойчивой и успешной на рынке.
</p>
    <p className="price">Цена: от 60 000 руб</p>
  </div>
  <div className="service">
    <h3>УПРАВЛЕНЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ</h3>
    <img src={per} alt="Управленческое консультирование" />
    <p>Наши управленческие консультанты помогут вашей компании повысить эффективность управления и достичь стратегических целей. Мы предоставляем профессиональную поддержку в решении широкого спектра управленческих задач, включая оптимизацию организационной структуры, разработку лидерских качеств у руководства, улучшение коммуникаций в коллективе и многое другое. Наши консультанты работают с вами, чтобы создать эффективную стратегию управления, способствующую успеху вашего бизнеса.</p>
    <p className="price">Цена: от 50 000 руб</p>
  </div>
</div>
<div className="request-section">
  <h2>Оставьте заявку</h2>
  <form id="request-form" className="request-form">
    <label htmlFor="name">Введите ваше ФИО:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="message">Комментарий:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Отправить</button>
  </form>
</div>

<div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Ваша заявка успешно отправлена!</p>
  </div>
</div>


       <footer className="footer">
        <div className="contact-info">
          <h3>Контакты</h3>
          <p>Телефон: +7 (831) 430-59-55</p>
          <p>Email: inecpovol@gamil.com</p>
          <p>Адрес: 603163, Нижегородская область, город Нижний Новгород, ул. Александра Хохлова, д.5, офис 22</p>
        </div>
      </footer>
      </div>
    ),
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

reportWebVitals();
