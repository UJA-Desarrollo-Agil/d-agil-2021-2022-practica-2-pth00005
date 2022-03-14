// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "b8641640-99ff-11ec-8bc2-0800200c9a66"; // GEnerado por http://www.famkruithof.net/uuid/uuidgen

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

// En modo depuración, que no haya efectos de jquery
jQuery.fx.off=false

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
		"<h1>Tu habitación</h1>\
        <img src='C:/Users/palom/Desktop/d-agil-2021-2022-practica-2-pth00005/games/media/img/infierno.jpg' class='float_right' width='300' height='170'>\
	    <p>Acaba de sonar el despertador, has dormido tus 8 horitas porque PLATEA se cayó y decidiste ir pronto a la cama.\
        Sin embargo, no te encuentras descansado en absoluto, pero justo hoy tienes clase con Víctor, el profesor de Desarrollo Ágil.\ Tras unos minutos de reflexión en la cama, decides:\
         <a href='iraclase'> ir a clase </a>,<a href='seguirdurmiendo'> seguir durmiendo. </a> </p>"
                
    ),
    iraclase: new undum.SimpleSituation(
        "<h1>Edificio A3</h1>\
        <img src='C:/Users/palom/Desktop/d-agil-2021-2022-practica-2-pth00005/games/media/img/a3.jpg' class='float_right' width='300' height='170'>\
        <p>Decidiste ir a clase, gran elección, de otro modo, Víctor se sentiría defraudado contigo. Llegas al laboratorio de prácticas tras\
         un soleado y tranquilo paseo pero; sorprendentemente, el profesor aún no ha llegado y decides: \
         <a href='buscarvictor'> pasar por su despacho </a>, total, ya has madrugado, o <a href='esperar'> esperar </a> , mejor si no viene.</p>"
    ),

    esperar: new undum.SimpleSituation(
        "<p>Decides esperar al profesor, han pasado 20 minutos, tus compañeros comienzan a irse, esta vez <a href='buscarvictor'>pasas por su despacho</a>,<a href='volveracasa'> solo quieres volver a casa a dormir</a></p>"
    ),

    seguirdurmiendo: new undum.SimpleSituation(
        "<p>Decidiste seguir durmiendo, ahora nunca vivirás la misteriosa aventura que te esperaba en el campus.\
        <h1>FIN</h1></p>"
    ),

    volveracasa: new undum.SimpleSituation(
        "<p>Enhorabuena! Decidiste volver a casa porque eres una persona muy perezosa que dificilmente llegará a ser alguien en la vida. <h1>FIN</h1></p>"
    ),

    cafeteria: new undum.SimpleSituation(
        " <img src='C:/Users/palom/Desktop/d-agil-2021-2022-practica-2-pth00005/games/media/img/Kosovo es Serbia.jpg' class='float_right' width='250' height='370'>\
        <p>Llegas a la cafetería y hay un abarrotamiento de gente, crees que por fin vas a encontrar respuestas\
        a lo acontecido. Cuando ves que hay muchos jóvenes universitarios que  sujetan pancartas y parecen descontentos; tú, sin\
        entender nada lees de una cartulina con la bandera de Serbia: &quot;Kosovo es Serbia&quot;.\
        Como es costumbre y bien sabido por todos, las nuevas generaciones aprovechan cualquier situacion para manifestarse.\
        Al final, aquí tampoco vas a encontrar respuestas</p>"
        ,
        {
            tags: ["buscarvictoropciones","buscarvictoropcionesaux"],
            heading: "Cafetería Universidad",
            enter: function(character,system,from){
                system.doLink("buscarvictoraux");
            }
        }

    ),

    malavida: new undum.SimpleSituation(
        "<p>Has decidido ir al Malavida, ya sabes como va a acabar esto...\
        ¿Por qué eres así? Ya estás borracho otra vez, ni si quiera tu madre está orgullosa de ti.\
       <a href='replanteatelavida'>Replantéate tu vida</a>  o <a href='siguesbebiendo'>sigue bebiendo.</a></p>"
        ,
        {
            tags: ["buscarvictoropciones","buscarvictoropcionesaux"],
            heading: "Cafetería Malavida"
        }
    ),

    siguesbebiendo: new undum.SimpleSituation(
        "<center><img src='C:/Users/palom/Desktop/d-agil-2021-2022-practica-2-pth00005/games/media/img/indigencia.jpg' class='middle' width='400' height='200'></centre>\
        <p>Has escogido el camino del alcoholismo, tus padres se han cansado de advertirte en vano sobre las consecuencias del abuso del alcohol. Así que han decidido echarte de casa, ya nunca sabrás lo que le ocurrió a Victor y tampoco aprenderás a programar. \
        Tu vida se ha convertido en absoluta decadencia debido a tus nefastas decisiones. <h1>FIN</h1></p>"
    ),

    replanteatelavida: new undum.SimpleSituation(
        "<p>De nuevo... </p>"
        ,
        {
            enter: function(character,system,from){
                system.doLink("buscarvictoraux");
            }
        }
    ),

    a4: new undum.SimpleSituation(
        "<div align='center'><img src='C:/Users/palom/Desktop/d-agil-2021-2022-practica-2-pth00005/games/media/img/dino.jpg' class='float_right' width='450' height='280'></div></center>\
        <p>Acabas de entrar por la puerta del edificio conocido como &quot; el flan &quot;. \
        Aquí todo está extrañamente desierto, decides pasar al fondo a ver qué está ocurriendo, para tu sorpresa:\
        ¡HAY UN TIRANOSAURIO REX ENANO! Además, no solo has encontrado a un dinosaurio en el campus, sino que\
        está devorándose los restos de lo que solía ser Carmen, tu profesora de Álgebra de primer, segundo, tercer\
        y hasta quinto curso. Estás tan anonadado que ni te has percatado de que el dinosaurio luce una bata\
        blanca en la que se lee &quot; Dr. Víctor M. Rivas &quot;. Todo encaja por fin, tu profesor ha sido\
        brutalmente asesinado a manos de nada menos que un Tiranosaurio Rex con enanismo; pero, un momento, \
        has pasado tanto tiempo flipando, que el dinosaurio te ha descubierto y te ha separado la cabeza del resto del cuerpo.\
        <h1>¡Enhorabuena! Has descubierto el misterio, lástima que hayas sido devorado por un dinosaurio, ya nunca podrás contarle tu aventura a nadie y volverás a casa en un lujoso ataud. ¡FIN!</h1> </p>"
        ,
        {
            tags: ["buscarvictoropciones","buscarvictoropcionesaux"],
            heading: "Edificio A4"
        }

    ),

    plazadelospueblos: new undum.SimpleSituation(
        "<center><img src='C:/Users/palom/Desktop/d-agil-2021-2022-practica-2-pth00005/games/media/img/plaza.jpg' class='middle' width='370' height='200'></center>\
        <p>Por alguna extraña razón has decidido ir a la plaza de los pueblos, como si ahí fueras a encontrar al asesino de tu profesor tomando el sol...\
        Y la escena que acompaña no es en realidad muy distinta, solo que en lugar del asesino, son los alumnos de magisterio y en lugar de tomando el sol, están haciendo educación física. \
        Concretamente, jugando a balón prisionero con una pelota roja que para tu desdicha ha aterrizado en tu cabeza.\
        Por favor inténtalo de nuevo, esta vez sin acabar herido.</p>"
        ,
        {
            tags: ["buscarvictoropciones","buscarvictoropcionesaux"],
            heading: "Plaza de los pueblos",
            enter: function(character,system,from){
                system.doLink("buscarvictoraux");
            }
        }

    )
};

undum.game.start = "start";


