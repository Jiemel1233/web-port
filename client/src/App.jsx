import React, { useEffect } from 'react';
import './styles.css'; 


export default function App() {
  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
    
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <main className="container">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about-me">About-Me</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>

      <section id="home">
        <p class="a"> Gie Mil Baltazar is a</p>
        <p class="b"> web designer, front-end developer </p>
        <p class="aa"> and a</p>
        <p class="bb"> frisbee player</p>
        <img src="my-picture.jpg" alt="Gie Mil Baltazar" className="about-me-image" />
        <div className="hide"></div>
        <div className="hide1"></div>
        <p class="c">"Code, Catch, and Conquer: Where IT Meets the Spirit of Ultimate!"</p>
        <img src="qoute.png" alt="Gie Mil Baltazar" className="qoute" />
        <img src="qoute.png" alt="Gie Mil Baltazar" className="qoute1" />
        <div className="border-box">
    
  </div>
      </section>
      <div className='line'></div>
      <section id="works">
      <p class="d">#</p>
      <p class="dd">works</p>
      <img src="baba.jpg" alt="Gie Mil Baltazar" className="baba" />
      <img src="ba.jpg" alt="Gie Mil Baltazar" className="ba" />
      </section>

    <section id="skills">
    <div className='line1'></div>
    <p class="e">#</p>
    <p class="ee">skills</p>
    <img src="ajva.png" alt="Gie Mil Baltazar" className="ajva" />
    <img src="html.png" alt="Gie Mil Baltazar" className="html" />
    <img src="css.png" alt="Gie Mil Baltazar" className="css" />
    <img src="java.png" alt="Gie Mil Baltazar" className="java" />
    <p class="f">JAVA: 2 Years</p>
    <p class="ff">HTML: 2 Years</p>
    <p class="fff">CSS: 2 Years</p>
    <p class="ffff">JAVASCRIPT: 1 Year</p>
    </section>



      <section id="about-me">
      <div className='line2'></div>
    <p class="g">#</p>
    <p class="gg">about-me</p>
    <p class="h">Hello, I’m Gie Mil Baltazar! I’m 21 years old, currently pursuing a Bachelor of Science in Information Technology (BSIT) at the Western Institute of Technology. Hailing from Igbaras, Iloilo, I have a passion for technology and problem-solving, always seeking to expand my knowledge in the IT field.
<p></p>
When I’m not focused on my studies, I dedicate my time to my favorite hobby—playing Ultimate Frisbee. I find frisbee not only a fun and competitive sport but also a way to stay active and improve teamwork skills. Balancing academics and my love for the game has helped me grow both personally and professionally.
<p></p>
I’m constantly eager to learn and improve, whether it’s through discovering new technologies or mastering my next throw on the field.</p>
<img src="giee.jpg" alt="Gie Mil Baltazar" className="giee" />
<div className='line3'></div>
      </section>




      <section id="contacts">
      <div className='line4'></div>
    <p class="i">#</p>
    <p class="ii">contacts</p>
    <p class="iii">Message me here:</p>
    <img src="fb.png" alt="Gie Mil Baltazar" className="fb" />
    <p><a href="https://www.facebook.com/jiiemel/" target="_blank" rel="noopener noreferrer" className="my-link">https://www.facebook.com/jiiemel/</a></p>
    <img src="gmail.png" alt="Gie Mil Baltazar" className="gmail" />
    <p><a href="baltazar.giemileit2011@gmail.com" target="_blank" rel="noopener noreferrer" className="my-link1">baltazar.giemileit2011@gmail.com</a></p>
            <div className='line5'></div>
            <p class="j">©  2024 Gie Mil Baltazar</p>
      </section>

    </main>
  );
}
