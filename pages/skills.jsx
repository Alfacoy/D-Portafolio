import style from '../styles/Curriculum.module.css';

const Curriculum = () => {

/*     function closeDetails(type) {
        const skills = document.querySelectorAll(`[data-type="skills"]`);
        const jobs = document.querySelectorAll(`[data-type="job"]`);
        const laboral = document.querySelectorAll(`[data-type="laboral"]`);

        switch(type){
            case "skills": 
                skills.forEach(item => {
                    item.open = false;
                    item.removeAttribute('class',`${style.markOnDetails}`);
                });
                break;
            case "job": 
                jobs.forEach(item => {
                    item.open = false;
                    item.removeAttribute('class',`${style.markOnDetails}`);
                });
                break;
            case "laboral": 
                laboral.forEach(item => {
                    item.open = false;
                    item.removeAttribute('class',`${style.markOnDetails}`);
                });
                break;  
        }
    }

    function onClickJob(e){
      
        switch(e.currentTarget.getAttribute('data-type')) {
            case "skills": 
                if(!e.currentTarget.open){
                    closeDetails("skills");
                    e.currentTarget.open = false;
                    e.currentTarget.setAttribute('class',`${style.markOnDetails}`)
                    
                } else {
                    e.currentTarget.open = true;
                    e.currentTarget.classList.remove('className',`${style.markOnDetails}`);
                }
                break;
            case "job": 
                if(!e.currentTarget.open){
                    closeDetails("job");
                    e.currentTarget.open = false;
                } else {
                    e.currentTarget.open = true;
                }
                break; 
            case "laboral": 
                if(!e.currentTarget.open){
                    closeDetails("laboral");
                    closeDetails("job");
                    e.currentTarget.open = false;
                    e.currentTarget.setAttribute('class',`${style.markOnDetails}`)
                } else {
                    e.currentTarget.open = true;
                    e.currentTarget.classList.remove('className',`${style.markOnDetails}`);
                }
                break;
        }
    
    }
 */
    return(
        <div className='g_container'>
            <div className={style.curriculum}>
                <div className={style.curriculum__personal}>
                    <div className={style.curriculum__personal__information}>
                        <div className={style.curriculum__personal__image_center}>
                            <img className={style.curriculum__personal__image} src="/images/others/brian_durand.jpeg" alt="Brian Durand" />
                        </div>
                        <h3>Brian Ezequiel Durand</h3>
                        <address>Avellaneda-BSAS (🇦🇷)</address>
                        <p>briandurand1990@gmail.com</p>
                    </div>
                    <div> 
                        <details open data-type="skills" >
                            <summary><b>Habilidades duras</b></summary>
                            <ul>
                                <li>Salesforce Admin</li>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>JSON</li>
                                <li>Postman</li>
                                <li>HTML & CSS</li>
                                <li>React</li>
                                <li>Figma</li>
                                <li>Jira</li>
                            </ul>
                        </details>
                        <details data-type="skills">
                            <summary><b>Habilidades blandas</b></summary>
                            <ul>
                                <li>Aprendizaje continuo</li>
                                <li>Trabajo en equipo</li>
                                <li>Servicio al cliente</li>
                            </ul>
                        </details>
                        <details data-type="skills">
                            <summary><b>Intereses</b></summary>
                            <ul>
                                <li>Salesforce Einstein (Bots)</li>
                                <li>SQL</li>
                                <li>APEX y LWC</li>
                                <li>Data Science</li>
                            </ul>
                        </details>
                        <details data-type="skills">
                            <summary><b>Idiomas</b></summary>
                            <ul>
                                <li>Español (Nativo)</li>
                                <li>Inglés</li>
                            </ul>
                        </details>
                        <details data-type="skills">
                            <summary><b>Hobbies</b></summary>
                            <ul>
                                <li>Desarrollo de Software</li>
                                <li>Arduino</li>
                                <li>Velas</li>
                                <li>Gaming</li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className={style.curriculum__laboral} >
                    <details open data-type="laboral">
                        <summary><b>Empleos</b></summary>
                        <ul className={style.curriculum__laboral__jobsList}>
                            <li>
                                <details data-type="job">
                                    <summary>Cambalache Technologies<br /> <i>[Sep. 2022 - Actualidad]</i></summary>
                                    <div className={style.curriculum__laboral__jobContent}>
                                        <div className={style.curriculum__laboral__tagsBox}>
                                            <span className={style.curriculum__laboral__tag}>Salesforce Admin</span>
                                            <span className={style.curriculum__laboral__tag}>SQL</span>
                                            <span className={style.curriculum__laboral__tag}>HTML</span>
                                            <span className={style.curriculum__laboral__tag}>CSS</span>
                                            <span className={style.curriculum__laboral__tag}>Jira</span>
                                        </div>
                                        <div className={style.curriculum__laboral__jobDescription}>
                                            <b className={style.curriculum__laboral__jobDescription__title}>Salesforce Administrator</b>
                                            <p>
                                                Tuve la oportunidad de realizar implementaciones del CRM desde cero para diferentes organizaciones, entendiendo la necesidad del cliente y analizando cómo la 
                                                plataforma podría ayudar a cubrirla.
                                            </p>
                                            <p>
                                                Descubrí funciones claves de los objetos estándar que antes desconocía, tales como mapeo de campos de los Lead, alertas de negocios para oportunidades, territorios, etc.
                                            </p>
                                            <p>
                                                Realice implementaciones de mensajería con Whatsapp, habilitando canales de comunicación para el sector de Contact Center. Así como también Mail to Case y Web to Case, 
                                                dando la posibilidad de ampliar los canales de comunicación hacía la organización.
                                            </p>
                                            <p>
                                                Gracias a mis conocimientos de HTML y CSS implementé en una tienda online la captura de Leads mediante un formulario web personalizado.
                                            </p>
                                            <p>
                                                Además, me encargué del maquetado de PDF para presupuestos con las herramientas que brinda CPQ y S-Docs. Con este último realice PDF más complejos haciendo uso de lógica 
                                                y SOQL. 
                                            </p>
                                            <p>
                                                Me encanta armar automatizaciones con la herramienta Flow. Armé flujos desencadenados, agendados y de pantalla (mi favorito).
                                            </p>
                                            <p>
                                                Dentro de la empresa utilizamos Jira para hacer el seguimiento de tareas por Sprint, ver las cargas de trabajo de cada empleado, carga de horas y para la comunicación 
                                                con el cliente dentro de la incidencia. Si bien al principio me costó acostumbrarme, luego todo fluyó hasta el punto de ser mi día a día.
                                            </p>
                                        </div>
                                    </div>
                                </details>
                            </li>
                            <li>
                                <details data-type="job">
                                    <summary>Integrity Seguros<br /> <i>[Oct. 2020 - Sep. 2022 - 2 años]</i></summary>
                                    <div className={style.curriculum__laboral__jobContent}>
                                        <div className={style.curriculum__laboral__tagsBox}>
                                            <span className={style.curriculum__laboral__tag}>Salesforce Admin</span>
                                        </div>
                                        <div className={style.curriculum__laboral__jobDescription}>
                                            <b className={style.curriculum__laboral__jobDescription__title}>Salesforce Administrator</b>
                                            <p>
                                                Dentro de la empresa tuve mi primer acercamiento a la plataforma de Salesforce. Comencé a trabajar sin experiencia previa en el CRM y 
                                                a resolver problemas con la ayuda de Trailhead y la documentación. Fue muy desafiante ya que había una organización formada y en funcionamiento, 
                                                por lo que me tocó aprender cómo estaba armado para poder construir sobre eso. 
                                            </p>
                                            <p>
                                                Si bien yo era el único administrador, superé muchas de las dificultades gracias al equipo de trabajo con el que estaba. Las distintas áreas siempre tuvieron muy 
                                                buena predisposición. 
                                            </p>
                                            <p>
                                                Las principales tareas que realice fueron desde implementar el sistema de encuestas y la reportería de las mismas, informes y tableros de diferentes calibres junto con un tablero de Analytic, configuración de Email to case, soporte e 
                                                implementación de MFA para la autenticación, etc.
                                            </p>
                                            <b className={style.curriculum__laboral__jobDescription__title}>Automation Anywhere</b>
                                            <p>
                                                Como me gusta todo lo referido al mundo de las automatizaciones, me ofrecieron trabajar en un proyecto paralelo con Automation Anywhere el cual acepté con gusto. 
                                            </p>
                                            <p>
                                                Mi tarea consistía en dar mantenimiento y soporte cuando un bot comenzaba a fallar, así como también agregar nuevas funcionalidades o verificaciones. Una de mis últimas tareas fue colaborar con 
                                                la migración de todos los bots en la versión 11 a la 360 siendo la más moderna de Automation.
                                            </p>
                                        </div>
                                    </div>
                                </details>
                            </li>
                            <li> 
                                <details data-type="job">
                                    <summary>Martinez de Alzaga<br /> <i>[Oct. 2017 - Nov. 2017 - 2 meses]</i></summary>
                                    <div className={style.curriculum__laboral__jobContent}>
                                        <div className={style.curriculum__laboral__tagsBox}>
                                            <span className={style.curriculum__laboral__tag}>SQL</span>
                                        </div>
                                        <div className={style.curriculum__laboral__jobDescription}>
                                            <b className={style.curriculum__laboral__jobDescription__title}>Analista de Desarrollo Junior</b>
                                            <p>
                                                Fue mi primera experiencia en un trabajo del área IT. Aprendí las bases de SQL y algo muy importante como el ser autodidacta. 
                                            </p>    
                                        </div>
                                    </div>
                                </details>
                            </li>
                            <li>
                                <details data-type="job">
                                    <summary>OCA<br /> <i>[Oct. 2014 - Sep. 2017 - 3 años]</i></summary>
                                    <div className={style.curriculum__laboral__jobContent}>
                                        <div className={style.curriculum__laboral__jobDescription}>
                                            <div className={style.curriculum__laboral__tagsBox}>
                                                <span className={style.curriculum__laboral__tag}>Aprendizaje continuo</span>
                                            </div>
                                            <b className={style.curriculum__laboral__jobDescription__title}>Operador auxiliar 1ra</b>
                                            <p>
                                                Dentro de la empresa tuve la suerte de poder rotar en todos los puestos operativos, desde el más repetitivo al más dinámico. Siempre traté de no quedarme quieto. 
                                            </p>
                                            <p>
                                                Aprendí a usar todas las máquinas que había, cómo la ensobradora, enfundadora, cortadora, plegadora e impresora. También estuve en el sector de palomares/playón, lugar donde toda 
                                                la paquetería se filtra por sucursal y luego se paletiza para cargarla en un camión. No hace falta decir que también hice la carga y descarga de los mismos.
                                            </p>
                                            <p>
                                                Ciertos días a la semana, tenía que retirar folletería o revistas de diferentes empresas para luego ingresarlas al proceso de distribución. Así como también me encargaba de 
                                                varios trámites administrativos. 
                                            </p>
                                            <p>
                                                Una vez al mes, llevaba a cabo el proceso de apertura de los resúmenes de tarjeta de crédito. Es una tarea que implica paciencia y atención ya que son demasiados palets con muchas cantidades de hojas. Luego estas se ensobran y se despachan. 
                                            </p>
                                        </div>
                                    </div>
                                </details>
                            </li>
                            <li>
                                <details data-type="job">
                                    <summary>Ejercito Argentino<br /> <i>[Dic. 2011 - Feb. 2014 - 2 años 3 meses]</i></summary>
                                    <div className={style.curriculum__laboral__jobContent}>
                                        <div className={style.curriculum__laboral__tagsBox}>
                                            <span className={style.curriculum__laboral__tag}>Trabajo en equipo</span>
                                        </div>
                                        <div className={style.curriculum__laboral__jobDescription}>
                                            <b className={style.curriculum__laboral__jobDescription__title}>Regimiento de Asalto Aéreo 601</b>
                                            <p>
                                                Me desempeñé durante todo ese tiempo como un Soldado Voluntario de segunda en comisión, la cúal es la categoría más baja dentro de un soldado.
                                            </p>
                                            <p>
                                                Gracias a que tenía conocimientos de computación, pude dar asistencia en la Plana Mayor en el sector de Mesa de Entrada. Mi rol simplemente era desplazar 
                                                la información del regimiento de Comunicaciones al nuestro y derivarla a quien corresponda. También cuando estaba de turno me tocaba hacer tareas de fajina en el edificio. 
                                            </p>
                                            <p>
                                                Luego, mi día a día era el entrenamiento con el uso de fusil, marcha, carrera de obstáculos, guardias, etc. Todo ese esfuerzo diario me forjó lo suficiente como para completar con éxito el curso 
                                                insignia de Asalto Aéreo, el cúal me habilitaba a embarcarme en helicópteros y hacer descenso rapel o fast rope.
                                            </p>
                                            <p>
                                                También participé en las ayudas comunitarias cuando hubo inundaciones en La Plata y el huracán que azotó a Ituzaingó.
                                            </p>
                                            <b className={style.curriculum__laboral__jobDescription__title}>MINUSTAH: Organización de las Naciones Unidas (ONU)</b>
                                            <p>
                                                De no haber tenido el curso de Asalto Aéreo completo, viajar para Haití hubiera sido imposible, ya que era obligatorio y no todos lo tenían. También el hecho de prestar servicios en la plana mayor ayudó bastante, 
                                                aunque, el superar las pruebas físicas dependían solo de mi y de mis ganas de viajar.
                                            </p>
                                            <p>
                                                Mis tareas iban desde patrulla diurna y nocturna, escolta, ayuda humanitaria y montar guardia en posiciones estratégicas. 
                                            </p>
                                        </div>
                                    </div>
                                </details>
                            </li>
                        </ul>
                    </details>
                    <details data-type="laboral">
                        <summary><b>Estudios</b></summary>
                        <ul>
                            <li>Curso de Python <i>(En curso)</i></li>
                            <li>Inglés básico <i>(En curso)</i></li>
                            <li>Curso de Backend <i>(Finalizado)</i></li>
                            <li>Analista de sistemas [2do año] <i>(Abandonado)</i></li>
                        </ul>
                    </details>
                    <details data-type="laboral">
                        <summary><b>Certificaciones</b></summary>
                        <ul>
                            <li>Salesforce Certified Associate</li>
                            <li>Programación Backend con NodeJS</li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Curriculum;