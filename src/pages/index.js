import React from 'react';

import Layout from '../components/Layout';

import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Hola soy un desarrollador python. Con conocimientos repartidos de frontend y
            análisis de datos. Puedes ver mis proyectos o seguirme en estas redes sociales.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiencia</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              
           <h3 className="mb-0">Desarrollador Python</h3>
              <div className="subheading mb-3"></div>
              <p>
              </p> 
            </div>
          
            <div className="resume-date text-md-right">
              <span className="text-primary"></span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Desarrollador Web usando Wordpress</h3>
              <div className="subheading mb-3"></div>
              <p>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"></span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0"></h3>
              <div className="subheading mb-3"></div>
              <p>
              </p>
            </div>

          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educación</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidad Tecnológica de Panamá</h3>
              <div className="subheading mb-3">Ingeniería en Sistemas de Información</div>
              <div>Análisis de Datos y Seguridad Informática</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Febrero 2019 - Diciembre 2024</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Colegio Javier</h3>
              <div className="subheading mb-3">Bachiller en Ciencias, Letras y Filosofía</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Marzo 2007 - Diciembre 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          <div className="subheading mb-3">
            Lenguajes de Programación &amp; Herramientas
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-django"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-figma"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Flujo de Trabajo</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Diseño-Responsivo
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Trabajo Remoto y colaborativo
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Desarrollo Ágil &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Desarrollo de Prototipos
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Intereses</h2>
          <p>
            Aparte de ser un desarrollador web me encanta participar en actividades al aire libre.
            También en voluntariados y actividades que realizen cerca de mi universidad.
          </p>
          <p className="mb-0">
            Me encanta la lectura y la música de todos los géneros y tiempos. Soy músico y mi instrumento preferido es
            la guitarra.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Premios &amp; Certificaciones</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              IBM Data Science Specialist
            </li>    
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Microsoft Office Specialist
            </li>                
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
