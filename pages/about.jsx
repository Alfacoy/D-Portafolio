import Link from 'next/link';
import CustomHead from '../components/CustomHead';
import style from '../styles/About.module.css';

export default function About() {
    const NOMBRE_PUESTO = 'Analista programador Junior';
    const NOMBRE_EMPRESA = 'Integrity Seguros';
    const TIEMPO_EN_PUESTO_ACTUAL = '1 año y 9 meses';
    const AÑOS_EN_TECNOLOGÍA = ' 4 años';

    return (
        <>
            <CustomHead
                title="Sobre mí | Full Stack Developer"
                metaDescription="Te invito a que conozcas más de mi historia."
                index follow />
            <article className={`g_container ${style.about}`}> 
                <h1 className='g_title'>Sobre mí</h1>
                <header className={`${style.about_callout}`}>
                    <h4 className={`${style.subtitle}`}>Introducción</h4>
                    <p>
                        Antes que nada, un gusto que estes por acá y gracias por interesarte en mí &#128513;. Como ya sabrás, soy Brian y trabajo como <b className={`g_highlight__primary`}>{NOMBRE_PUESTO}</b> en <a href='https://integrityseguros.com.ar/' target="_blank" rel='noopener noreferrer'><b className={`g_highlight__primary`}>{NOMBRE_EMPRESA}</b></a> hace
                        <b className={`g_highlight__primary`}> {TIEMPO_EN_PUESTO_ACTUAL}</b>. Actualmente vivo en <b className={`g_highlight__primary`}>Buenos Aires (Avellaneda - Argentina)</b>.
                    </p>
                    <p>
                        No siempre tuve en mente dedicar mí vida de lleno al desarrollo web, la realidad es que todo empezó hace
                        <b className={`g_highlight__primary`}>{AÑOS_EN_TECNOLOGÍA}</b>. Dejen que les cuente una pequeña (o no tan pequeña) historia de cómo llegué hasta donde estoy hoy.
                    </p>
                </header>
                <section>
                    <h5 className={`${style.subtitle}`}>Inicios</h5>
                    <p>
                        Desde que tengo memoria, soy un amante de la naturaleza y de la tecnología. De chico me divertía mucho viviendo aventuras
                        con mis amigos del barrio, ya sea explorando la fábrica abandonada, andando en bicicleta o jugando con la infaltable Playstation
                        1 o la Sega Genesis, etc. Así como también, casi paralelo, tuve la suerte de poder contar con una primera computadora prestada
                        e incursionar en los foros de internet y la administración de estos.
                    </p>
                    <p>
                        Ya algo más crecido y con los pocos ahorros que había podido conseguir trabajando de <b className={`g_highlight__primary`}>volantero</b>, decidí tomar mis primeras vacaciones
                        solo en la Ciudad de Mendoza (Argentina), donde pude experimentar en primer plano la belleza de la naturaleza. Ver las montañas,
                        ríos y otro ambiente diferente al que estaba acostumbrado hizo que me enamorara y decidiera quedarme a vivir en ese hermoso lugar durante año
                        y medio.
                    </p>
                </section>
                <section>
                    <h5 className={`${style.subtitle}`}>Primeras metas</h5>
                    <p>
                        En ese viaje, salí por primera vez de la zona de confort de mi hogar. Solo y lejos, el primer paso que tuve que tomar era el de buscar un trabajo
                        nuevo, el cual por suerte, no se dejó esperar mucho, <b className={`g_highlight__primary`}>conserje de hostelería</b>.
                    </p>
                    <p>
                        Si bien no era el más capacitado para atender a turistas extranjeros, me esforcé mucho para que estos quedaran conformes y cómodos con mi atención,
                        haciendo que el idioma no sea una barrera. Los esfuerzos brindaron frutos y esto me brindó la oportunidad de tener una amistad con muchos de ellos.
                    </p>
                    <p>
                        Pasado un tiempo, me comenzó a picar el bichito del estudio, algo que nunca antes me había pasado. Tenía en mente convertirme en guía de turismo aventura
                        a raíz de que en mis tiempos libres solía llevar a los turistas a pasear por diferentes zonas que a mi parecer eran hermosas, así como también los acompañaba a
                        las diferentes actividades de bicicleta, rafting o trekking. El problema de esto, es que yo no contaba con el secundario completo para iniciar una carrera
                        terciaria.
                    </p>
                    <p>
                        Así que con la idea en mente y con poco dinero, decidí volver a Buenos Aires con el propósito de terminar la secundaría y conseguir un trabajo estable que me permitiera
                        costear la carrera, ya que esta era muy costosa debido al equipo y viajes que se tiene que realizar.
                    </p>
                    <p>
                        No recuerdo bien como fue en ese momento, pero a mis manos estaría llegando un folleto del Ejército Argentino para unirme como <b className={`g_highlight__primary`}>Soldado Voluntario</b>. Así terminaba mi primera
                        aventura y al poco tiempo comenzaba una nueva.
                    </p>
                </section>
                <section>
                    <h5 className={`${style.subtitle}`}>El exterior</h5>
                    <p>
                        Durante los 2 años que estuve dentro del Ejército, pude terminar la secundaría al tiempo que realizaba la instrucción militar. Cada regimiento cuenta con un curso
                        especial, en mi caso, “Asalto Aéreo”. Con mucho esfuerzo físico y dedicación pude terminarlo (pese a mi temor por las alturas), gracias a esto y al buen desempeño en
                        general, me dieron la oportunidad de asistir a una misión  de las Naciones Unidas como <b className={`g_highlight__primary`}>Peacekeeper</b> en Haití.
                    </p>
                    <p>
                        Fue una experiencia única, donde puse en práctica todo lo aprendido y <em className={`g_highlight__primary`}>trabajé codo a codo con mis camaradas</em>. En la misión, conocí y conviví con una cultura totalmente
                        contraria a la mía, comprendí sus problemas, asimile su idioma y traté de brindarles toda la ayuda que tenía a mi alcance.
                    </p>
                    <p>
                        De momento, ya contaba con la secundaría y algo de dinero para comenzar los estudios, pero el Ejército me quitaba demasiado tiempo, por lo que decidí darme la baja y buscar un empleo
                        más casual (?). Es así como terminé en OCA, una empresa de correo privado como <b className={`g_highlight__primary`}>Operador Auxiliar</b>.
                    </p>
                </section>
                <section>
                    <h5 className={`${style.subtitle}`}>Giro en 180°</h5>
                    <p>
                        Un cambio de trabajo conlleva un cambio de obligaciones, todo es nuevo. Al ser una persona <em className={`g_highlight__primary`}>flexible</em>, me tocó realizar gran variedad de tareas, desde utilizar máquinas en conjunto a otro operario
                        así como manipularlo en solitario, paletizar, ensobrar, distribuir en camión, etc, etc, etc.
                    </p>
                    <p>
                        Pese a que tenía que trabajar bastantes horas, me daba cierto tiempo para poder iniciar el terciario para guía de turismo aventura. Paralelo a esto, me compré una computadora y comencé también un
                        pequeño curso sobre desarrollo web, recordando mis viejos días en los foros.
                    </p>
                    <p>
                        Lo que llegué a armar no fue nada grandioso, pero el navegar por mis primeras páginas web hicieron que nuevamente me picara el dichoso bichito del estudio. <em className={`g_highlight__primary`}>Algo que me motiva mucho es el
                            armar cosas que la gente pueda usar y esto les sea de utilidad, es algo que me llena el alma.</em> Es así como inicie mi camino en el mundo de la programación. Un camino repleto de
                        altibajos, mucho esfuerzo, curiosidad, deseos de superarme y nunca ceder ante los miedos.
                    </p>
                </section>
                <section>
                    <h5 className={`${style.subtitle}`}>Lo que nos quedo</h5>
                    <p>
                        Con eso llegamos al fin de esta primera parte de la historia, pero todavía queda mucho más, como por ejemplo ¿Qué pasó con lo de turismo aventura?, ¿Cómo fue la transición de OCA a trabajar en tecnología?
                        Bueno, si te interesa saber podes <Link href='/#contact'><a><b className={`g_highlight__primary`}>contactarme</b></a></Link> o tal vez en un futuro escriba sobre eso.
                    </p>
                    <p>
                        Lo importante ahora, es vivir eso que todavía no está escrito. Queda seguir creciendo y crear  momentos con las personas que en verdad importan. Agradezco el trayecto que me tocó recorrer y estoy seguro que
                        el tramo que viene va a ser mucho mejor.
                    </p>
                    <p>
                        Espero te haya gustado leerlo así como a mí me gustó recordarlo.
                    </p>
                    <p>
                        ¡Hasta luego! &#128075;
                    </p>
                </section>
                <footer>
                    <p>
                        <strong className={`g_highlight__primary`}>Brian Durand</strong> <br />
                        <span>Full Stack Developer</span>
                    </p>
                </footer>
            </article>
        </>
    )
}

