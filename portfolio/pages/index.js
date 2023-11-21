import style from '../styles/Home.module.css'
// import '../styles/globals.css'

export default function Home() {

  const arr_educ = ['Hschool', 'The Complete Guide to Build RESTful APIs, Udemy', 'unit testing/integration tests with Jest, Udemy',
    'Interactive SQL Simulator, Stepic', 'React Native, Udemy']

  const arr_lang = ['English B1', 'Russian', 'Belarussian']

  return (
    <div className={style.wrapper}>

      <div className={style.contacts}>

        <div className={style.img}></div>

        <div className={style.info}>
          <h3>My name is Viktoriya</h3>
          <p><span>Based:</span>  Republic of Belarus</p>
          <p><span>Phone:</span> +375-29-821-08-23</p>
          <p><span>E-mail:</span> vikynyshka@mail.ru</p>
        </div>

      </div>

      <h2>WORK EXPERIENCE</h2>

      <div className={style.experience}>

        <h4> FullStack Developer</h4>
        <h5>HSC Technology</h5>
        <h6>May 2023 - Present</h6>
        <p><span>Responsibilities:</span> - Backend modules and REST API architecture
          developing;
          - Frontend development;
          - bug fixing;
          - refactoring code;
          - Development of the project database architecture.

        </p>

      </div>

      <h2>SKILLS</h2>

      <div className={style.skills}>

        <div className={style.list}>
          <p><span>Programming Languagies:</span>JavaScript(ES6+), TypeScript</p>
          <p><span>Web Tecnologies:</span>Node.js, React, Express, Next, Nodemon,
            axios, babel, Material UI, Mantine, JSON, XML, Jest,
            Mocha, html, css, sass(scss), git</p>
          <p><span>Application Servers:</span>Node.js</p>
          <p><span>Databases:</span>MySQL, PostgreSQL, MongoDB</p>
          <p><span>Operating Systems:</span>Windows family</p>
        </div>

      </div>

      <div className={style.back}>

        <div className={style.back1}>
          <div className={style.education}>
            {arr_educ.map((el) => <p>{el}</p>)}
          </div>
        </div>

        <div className={style.back2}>
          <div className={style.lang}>
            <div className={style.img}></div>
            {arr_lang.map((el) => <p>{el}</p>)}
          </div>
        </div>
        
      </div>

    </div >
  )
}
