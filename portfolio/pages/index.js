import style from '../styles/Home.module.css'
// import '../styles/globals.css'

export default function Home() {

  const arr = []

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




      </div>

    </div>
  )
}
