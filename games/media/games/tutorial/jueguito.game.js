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
	    <p>Acaba de sonar el despertador, has dormido tus 8 horitas porque PLATEA se cayó y decidiste ir pronto a la cama.\
        Sin embargo, no te encuentras descansado en absoluto, pero justo hoy tienes clase con Víctor, el profesor de Desarrollo Ágil.\ Tras unos minutos de reflexión en la cama, decides:\
         <a href='iraclase'> ir a clase </a>,<a href='seguirdurmiendo'> seguir durmiendo. </a> </p>"
                
    ),
    iraclase: new undum.SimpleSituation(
        "<h1>Edificio A3</h1>\
        <p>Decidiste ir a clase, gran elección, de otro modo, Víctor se sentiría defraudado contigo. Llegas al laboratorio de prácticas tras\
         un soleado y tranquilo paseo pero; sorprendentemente, el profesor aún no ha llegado y decides: \
         <a href='buscarvictor'> pasar por su despacho </a>, total, ya has madrugado, o <a href='esperar'> esperar </a> , mejor si no viene.</p>"
    ),

    esperar: new undum.SimpleSituation(
        "<p>Decides esperar al profesor, han pasado 20 minutos, tus compañeros comienzan a irse, esta vez <a href='buscarvictor'>pasas por su despacho</a></p>"
    ),

    seguirdurmiendo: new undum.SimpleSituation(
        "<p>Decidiste seguir durmiendo, ahora nunca vivirás la misteriosa aventura que te esperaba en el campus.\
        <h1>FIN</h1></p>"
    ),

    cafeteria: new undum.SimpleSituation(
        "<p>Llegas a la cafetería y hay un abarrotamiento de gente, crees que por fin vas a encontrar respuestas\
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
        "<p>fghj</p>"
        ,
        {
            tags: ["buscarvictoropciones","buscarvictoropcionesaux"],
            heading: "Cafetería Malavida"
        }

    ),

    a4: new undum.SimpleSituation(
        "<p>fghj</p>"
        ,
        {
            tags: ["buscarvictoropciones","buscarvictoropcionesaux"],
            heading: "Edificio A4"
        }

    ),

    plazadelospueblos: new undum.SimpleSituation(
        "<p>fghj</p>"
        ,
        {
            tags: ["buscarvictoropciones","buscarvictoropcionesaux"],
            heading: "Plaza de los pueblos"
        }

    )
};




// Ejemplo de declaración separada
undum.game.situations["calabozo"]=new undum.SimpleSituation(
			"<h1>Calabozo</h1>\
			<p>En el proyecto original del arquitecto, el calabozo era con diferencia la sala más grande del castillo.</p>\
			Estaba formado por tres estancias comunicadas entre si por aperturas diáfanas. La primera estancia contenía una\
			completa cocina, con dos ambientes separados que distinguían la zona de trabajo del <em>living</em>.\
			La segunda, aún mayor, era el recinto seleccionado para incluir un baño completo con jacuzzi, sauna turca y ducha\
			de aromas. Finalmente, la tercera, albergaba una habitación de estilo colonial cuya principal \
			joya era la cómoda cama <em>king size</em>, autocalefactable.</p>\
			<p>Desgraciadamente, en un pequeño despiste del ayudante del arquitecto, los planos dieron a parar al foso de los cocodrilos.\
			Por más que el pobre muchacho se afanó en convencer a los reptiles de que soltaran de sus fauces los importantes pergaminos,\
			el resultado fue nulo.</p>\
			<p>Finalmente, se optó por hacer un profundo agujero en la tierra que hiciera las funciones de calabozo. \
			Por supuesto, era una solución temporal... por lo que es lo único del castillo que sigue intacto tras varios siglos.</p>\
			<p>Por tanto aquí acaba tu aventura. Fue un notable intento, pero has acabado con tus huesos \
			en el calabozo por los siglos de los siglos.</p>\
			<h1>Fin</h1>"
		);

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    antorcha: new undum.OnOffQuality(
        "Antorcha", {priority:"0001", group:'inventario', onDisplay:"&#10003;"}
    ),
	  llave: new undum.OnOffQuality(
        "Llave", {priority:"0002", group:'inventario', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality( "antorcha" , false )
    system.setQuality( "llave" , false )
    system.setCharacterText("<p>¡Comienzas tu fascinante aventura!</p>");
};