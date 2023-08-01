
//  *****   CUSTOM ELEMENTS EN WEBCOMPONENTS    *****************************************************************************************************

/*  1.-  "Custom elements" (elementos personalizados): Un conjunto de "APIs de JavaScript" que permiten definir "elementos HTML personalizados" y su
                                                       comportamiento (funcionalidad desde JS y estilo desde CSS), que entonces puede ser 
                                                       (re)utilizado tantas veces como se deseé en la interfaz del usuario.

        Los "custom elements" (elementos personalizados) son una de las características principales que forman los WebComponents. Con ellos, se nos
        permite crear nuestras "propias etiquetas HTML" personalizadas, pudiendo dotarlas de su propia funcionalidad, marcado HTML o estilo CSS.

        Ejemplo:
                    <!-- Card con etiquetas HTML normales -->
                    <div class="card">
                        <img src="manzdev.png" alt="ManzDev">
                        <h1>ManzDev</h1>
                        <p>ManzDev es un streamer de código.</p>
                    </div>

        En este primer ejemplo, se puede ver el marcado HTML completo de una "card de usuario". Sin embargo, en el ejemplo que muestro a continuación,
        utilizamos una "etiqueta HTML personalizada" llamada: <user-card>:

                    <!-- Card utilizando un custom element -->
                    <user-card name="ManzDev"></user-card>

        Al crear un "WebComponent" le indicamos al navegador que al leer esa etiqueta, debe interpretar en su lugar el código anterior. De esta forma,
        cada vez que escribamos la etiqueta personalizada del webComponent:  <user-card> sería como escribir todo el código anterior, mostrándolo 
        visualmente (y con la funcionalidad JS y estilo CSS que le anadimos)

        Nota.-  La forma rápida de diferenciar "etiquetas personalizadas" de los webComponents (custom elements) de las etiquetas nativas de HTML 
        es observando que las primeras deben incluir en su nombre al menos un guión y palabras en minusculas. Toda etiqueta HTML que tenga un guión 
        en su nombre minuscula, es una "etiqueta personalizada" - custom element. La funcionalidad de dicho Custom Element se implementará desde 
        Javascript, extendiendo de la clase "HTMLElement" como veremos más adelante. Tambien puede tener un estilo CSS particular.
*/

//  Los "Custom Elements" (Etiquetas HTML personalizadas) son una de las características que forman los WebComponents, y mediante los cuales 
//  podemos crear nuestras propias "etiquetas HTML personalizadas" de forma nativa, dotándolos de su propio marcado, funcionalidad y/o estilo.

//  1.-  Custom elements:  conjunto de "APIs de JavaScript" que permiten definir "elementos HTML personalizados", con su propio comportamiento 
//                         (funcionalidad desde JS y estilo desde CSS), que entonces puede ser (re)utilizado tantas veces como se deseé en la 
//                         interfaz del usuario.

/*  1.1.-  Nombres de las etiquetas HTML  => El estándar de HTML5 define que las etiquetas HTML "oficiales" deben estar formadas por una sola palabra, 
                                             mientras que los "custom elements" (nuestras propias etiquetas personalizables HTML) deben estar formadas 
                                             de al menos 2 palabras en minusculas, separadas por un guión.

                                             De esta forma, protegemos nuestras páginas o aplicaciones web para que, si en el futuro se añade una 
                                             nueva etiqueta HTML estándar, no coincida con el mismo nombre que alguna nuestra.

    Ejemplo:  
                <!-- Sencillo ejemplo de una etiqueta HTML propia (custom element) -->
                <app-element></app-element>

                <!-- Ejemplo incorrecto de custom element (no tiene guión) -->
                <element></element>

    Nota.-   Aprovechando la necesidad de utilizar "dos palabras" en un componente separadas por un guión, una buena práctica suele ser utilizar 
             la primera palabra como «namespace» del componente. Es decir, utilizar el nombre de la funcionalidad, librería o aplicación, y así 
             evitar posibles colisiones con otros elementos de terceros con nombre similar.


    1.2.-  Crear un custom element (etiqueta personalizada de un WebComponent) 

    A.-  Custom element básico: la forma más básica de crear una "etiqueta personalizada HTML" ("custom element") es simplemente escribirla. 
                                El navegador la tratará como si fuera un elemento "<span>".

                                <app-element>
                                  Contenido de nuestro elemento personalizado ( custom element de un WebComponent)
                                </app-element>

                                <style>
                                  app-element {
                                    background: black;
                                    color: white;
                                    padding: 5px;
                                  }
                                </style>

          Recuerda que también podemos darle estilo CSS al "custom element", teniendo siempre en cuenta de que por defecto se trata de un elemento 
          en línea, por lo que tenemos añadir un display diferente y darle unas dimensiones para observar cambios si no le hemos añadido contenido:

                                app-element {
                                  display: block;
                                  background: black;
                                  color: white;
                                  padding: 5px;
                                  width: 125px;
                                  height: 125px;
                                }

          Centrémonos ahora en comprobar que, efectivamente, no nos estamos inventando nada. Vamos a "localizar" dos elementos HTML (uno definido 
          correctamente y otro definido incorrectamente) y vamos a comprobar que tipo de elemento nos devuelve:

                                <app-element></app-element>
                                <element></element>

                                <script>
                                  const appElement = document.querySelector("app-element");
                                  const element = document.querySelector("element");

                                  console.log("appElement: ", appElement, appElement.constructor.name);   // HTMLElement
                                  console.log("element: ", element, element.constructor.name);            // HTMLUnkownElement
                                </script>

          Lo único que estamos haciendo en las lineas anteriores es, localizando ambos "custom elements" y accediendo al nombre del constructor 
          para saber en que tipo de elemento HTML está basado:

              1.-  En el caso de <app-element> se trata efectivamente de un "custom element", ya que está basado (hereda) de "HTMLElement", 
                   el tipo de dato base de cualquier etiqueta HTML.

              2.-  En el caso de <element> nos dice que el tipo de dato es "HTMLUnknownElement", ya que al no tener guión considera que es un 
                   elemento HTML oficial, pero el navegador desconoce de que elemento se trata (es desconocido).


    B.-  Custom element extendido:  hasta ahora hemos creado un "custom element" sin funcionalidad. Básicamente, lo que hemos hecho hasta ahora 
                                    ha sido crear un elemento que se comporta como un elemento "<span>"" con un nombre diferente, que no hace 
                                    nada más que contener texto u otros elementos. Exactamente lo mismo que un <span>.

          Los "WebComponents" se programan a través de una "Clase Javascript", por lo que si no las conoces, deberías antes echar un vistazo al 
          artículo Clases en Javascript (POO).

          Vamos a dotar de funcionalidad nuestro Custom Element. Para ello, haremos lo siguiente: (escribir codigo JS, una clase que extiende 
          de la clase HTMLElement)

                      class AppElement extends HTMLElement {
                        constructor() {
                          super();
                          console.log("Inicializado...");
                        }
                      }

                      customElements.define("app-element", AppElement);  //  =>  "asociacion" del custom element con su funcionalidad de clase JS


          Hemos hecho tres cosas:

              .-  En primer lugar, hemos definido una clase llamada "AppElement". Observese que es una buena práctica utilizar PascalCase para nombrar 
                  las clases, en relación al nombre que le queremos dar al custom element. Dicha clase "extiende" de la clase "HTMLElement", una 
                  clase que es la "base" de cualquier elemento HTML, por lo que al heredarla nuestro "custom element" va a tener todas las 
                  características que tenga un elemento HTML estándar.

              .-  En segundo lugar, hemos definido un "constructor", que no es más que un "método especial" que se "ejecuta" cada vez que se crea una 
                  nueva instancia de clase, o en nuestro contexto, cada vez que alguien define o crea una etiqueta <app-element>. En nuestro ejemplo 
                  veremos que cada vez que creamos un elemento <app-element> nos aparece el texto del console.log() en la consola JS.

          Ojo: Si defines un constructor en tu clase, no se te debe olvidar indicar el "super()" en el mismo, ya que es obligatorio llamar al 
               constructor del padre si estás extendiendo de HTMLElement.

              .-  En tercer y último lugar, no olvidar la última línea, donde llamamos a "customElements.define()", para indicar al navegador 
                  que existe una "asociación" entre el nombre de la etiqueta (primer parámetro "app-element") y la clase que implementa su 
                  funcionalidad (segundo parámetro "AppElement"). 

                  customElements.define("app-element", AppElement);  //  =>  "asociacion" del custom element con su funcionalidad de clase JS

          Con todo esto, y junto a métodos del DOM, podríamos comenzar a implementar funcionalidad dentro de la clase "AppElement" para dotar de 
          características a nuestro "custom element", como iremos viendo.

                        // Nos devolverá que el "custom element": <app-element> es de tipo "AppElement"
                        const appElement = document.querySelector("app-element");
                        console.log("app-element: ", appElement, appElement.constructor.name);

          Ahora, si intentamos hacer esta prueba, veremos que Javascript nos dice que <app-element> es de tipo AppElement, la clase que hemos extendido.

*/

//  SHADOW DOM EN WEBCOMPONENT

//  Shadow DOM:  "Sombra DOM" => "Arbol DOM en la sombra" para "encapsular" a un elemento HTML (WebComponent), tanto su logica como su estilo CSS.
//                                Probablemente, una de las características más interesantes (y complejas) de WebComponents sea el "Shadow DOM". 
//                                Esta característica opcional se basa en "crear un DOM" (estructura arborea de elementos HTML) particular en un 
//                                elemento HTML. De esta forma, además del DOM "real" global del documento que normalmente utilizamos, tenemos uno 
//                                "particular", asociado solamente a este WebComponent.

//  1.-  Introduccion

//  Sin duda, uno de los conceptos más interesantes de los WebComponents (y también de los más complejos) es el "Shadow DOM" (DOM en la sombra). 

//  Para comprenderlo bien, primero debemos tener claro que el DOM es: la estructura (arborea) de elementos que tiene una página, estructurada 
//  en forma de árbol, donde se puede ver facilmente los descendientes (hijos), los "hermanos" o contenedores (padres) de un elemento.

//  El navegador, al cargar una página HTML, genera automaticamente el DOM del documento, esta estructura en forma de árbol, a la que generalmente 
//  llamamos solamente "DOM". Cada vez que ocurre un cambio en los elementos de una página, el navegador actualiza esta estructura para reflejarlos.


/*  "Shadow DOM" es un conjunto de "APIs de JavaScript" para crear y fijar un <<árbol DOM "sombra">> que es opcional, encapsulando asi un elemento 
    que es renderizado por separado del documento DOM principal — controlando asi la funcionalidad y estilo CSS del componente asociado. 

    De esta forma, se pueden mantener las "características" de un elemento en privado (encapsulado), así puede tener el estilo y los scripts (logica)
    del componente "aislado", sin miedo de colisiones con otras partes del documento.

    Así pues, un elemento HTML con "Shadow DOM" se podría ver de esta forma:

            <div class="element">
              #shadow-root
                <div class="inner-element">
                  ...
                </div>
            </div>

    En el ejemplo anterior, el elemento <div class="element"> forma parte del DOM "real" y global del documento. 
    Es un elemento que esta vacío, no tiene ni texto ni otros elementos hijos, sólo que en este ejemplo contiene un: #shadow-root, que es 
    un "DOM particular" ("Shadow DOM"). 
    
    En el interior de ese DOM particular del elemento, "Shadow DOM", existe una etiqueta de un "custom element": <div class="inner-element">. 
    Dicha etiqueta HTML forma parte del "Shadow DOM" del elemento <div class="element">, e incluira contenido (otros Elements HTML hijos, 
    logica y funcionalidad con JS y estilo con CSS)

    Nota: Aunque sirve para muchas cosas más, la misión mas comun del "Shadow DOM" es crear una "estructura aislada" del DOM principal del documento. 
    Es una excelente forma de crear estructuras con estilos CSS locales, que sólo repercutan en dicha estructura, y en la que nuestro CSS no afecte 
    al CSS exterior, ni desde el CSS exterior afecta al CSS interior, algo que los desarrolladores llevan buscando años de forma nativa.
*/

//  2.-  ¿Qué es el Shadow DOM?

/*  El concepto de "Shadow DOM" nace de la necesidad de tener una forma de "encapsular elementos HTML" y mantenerlos "aislados" del resto de la página,
    creando algo así como un "concepto DOM local", en contraposición al "concepto DOM global" con el que se solía trabajar en los navegadores.

    Quizás, la forma más fácil de entender el concepto de "Shadow DOM", es haciendo una analogía precisamente a lo que su propio nombre indica: 
    una "sombra" de un elemento.

    2.1.-  Shadow DOM.

           Imaginemos que tenemos un árbol DOM de un documento web de la página en la que nos encontramos. Uno de esos nodos del árbol 
           (destacado en azul) tiene un "Shadow DOM" (una sombra) en la cuál puede residir "otro árbol DOM", que realmente no forma parte del 
           DOM principal de la página.

           Como veremos más adelante, entre otras cosas, esta característica nos permitiría algo muy interesante con CSS: "aislar los estilos" de modo 
           que no afecten a los elementos que están fuera del "Shadow DOM", ni tampoco el CSS de fuera afecte a los elementos del "Shadow DOM".

    Nota: Aunque se suele asociar a WebComponents, realmente el "Shadow DOM" es una característica independiente que se puede aplicar a un 
          elemento HTML normal, sin necesidad de que sea un componente.


    2.2.-  ¿Qué es el Virtual DOM (VDOM)?

           Aunque tiene cierta relación, el concepto de "virtual DOM" (o VDOM) NO es una alternativa directa de "Shadow DOM", pero muchas veces se 
           suelen asociar (o confundir), ya que debido a sus nombres se suele intuir que son cosas similares o alternativas.

           Durante la aparición de los diferentes frameworks del ecosistema Javascript, estos idearon un concepto denominado "Virtual DOM": 
           
           DOM original => copia resumida del DOM en memoria => VDOM, es una "copia resumida en memoria del DOM real de la página web", donde se 
                           gestionan antes de pasarlos al DOM real directamente los cambios del mismo, para traducirlos posteriormente al DOM real 
                           del documento, con el objetivo de acelerar y optimizar los cambios del DOM en la página (mejora de prestaciones).


           Por ejemplo, la popular librería "React" introducía el concepto de "Virtual DOM" para detectar los cambios (diferencias entre los dos 
           árboles DOM), y asi actualizar solamente los nodos afectados a la vez (cambios y descendientes a quienes pueden afectar) y posteriormente, 
           consiguiendo dos cosas principales: velocidad de la aplicacion y abstraer de estos cambios para hacerlos de forma automática y 
           menos tediosa:

           Nota.- el surgimiento del concepto de "Virtual DOM2 y su definición, ayudó a promover el falso concepto de que «el DOM es lento», 
                  cuando en realidad, lo que puede hacerlo lento es la gestión que hagas (y cómo la hagas) del mismo.

           Hay que tener en cuenta también que "Shadow DOM" es una tecnología existente en los navegadores, mientras que Virtual DOM es un proceso 
           que se implementa y ocurre «fuera» del navegador, en las librerías de Javascript, en memoria.


    2.3.-  ¿Cómo crear un Shadow DOM?  El metodo ".attachShadow( object options)"

           Por defecto, los elementos HTML no tienen un "Shadow DOM" cuando estan presentes en el DOM.Si se requiere crear un Shadow DOM a un 
           elemento HTML, y adjuntarlo - registrarlo al elemento HTML, no tenemos más que utilizar el método: ".attachShadow(object options)" 
           sobre el elemento donde queramos crear el Shadow DOM.


                                          Método 	                                            Descripción

                                    shadowroot element.attachShadow(options) 	        Crea y adjunta un "Shadow DOM" al elemento HTML "element".

           En breve explicaremos el parámetro obligatorio "options" y algunas características más, sin embargo para empezar, con este método 
           podríamos crear un "Shadow DOM" utilizando el siguiente fragmento de código:


                                  const div = document.createElement("div");
                                  const shadowDiv = div.attachShadow({ mode: "open" });

          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          Nota.-  En un documento HTML, el método: "document.createElement(tagName, [options])" crea un "elemento HTML" en memoria especificado 
                  por su "tagName", o un "HTMLUnknownElement" si su "tagName" no se reconoce. 

                  Sintaxis:  const element = document.createElement(tagName, [options]);  donde:

                  "tagName":  es la cadena de texto que especifica el tipo de elemento a crear. El "nodeName" del elemento creado se inicializa 
                              con el valor de tagName. No utilizar nombres reservados (como "html:a") con este método. Al ser invocado en un documento HTML, 
                              createElement() convierte "tagName" a minúsculas antes de crear el elemento. En Firefox, Opera, y Chrome, createElement(null) 
                              funciona como createElement("null").

                 "options":   Opcional. Es un objeto opcional: "ElementCreationOptions", que contiene una única propiedad llamada: "is", cuyo valor es el de 
                              la etiqueta "name" de un elemento personalizado definido previamente utilizando customElements.define(). Para compatibilidad con 
                              versiones anteriores de Elements specification, algunos navegadores podrían permitir pasar una cadena aquí en vez de un objeto, 
                              donde el valor de la cadena es la etiqueta "name" del elemento creado.

                  El nuevo elemento creado "element", recibirá el atributo cuyo valor es la etiqueta name del elemento personalizado. Los elementos personalizados 
                  son una característica experimental solo disponible en algunos navegadores.

                  Retorno:  El nuevo objeto HTMLElement.


                  Ejemplo:  
                  
                                        document.body.onload = addElement;

                                        function addElement(parTagName, parTextContent) {

                                          if (typeof parTagName === 'string' && typeof parTextContent === 'string) {

                                            const newElement = document.createElement("parTagName");
                                            const newContent = document.createTextNode(parTextContent);

                                            newElement.appendChild(newContent); //añade texto al element creado creado.

                                             // añade el elemento creado y su contenido al DOM
                                            cont  currentDiv = document.getElementById("div1");
                                            document.body.insertBefore(newElement, currentDiv);

                                          } else {
                                            console.error('Error:  The arguments of the function "" must be strings!!)
                                          }
                                        }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                En la primera línea, const div = document.createElement("div");, creamos un elemento <div> desde Javascript. También podríamos seleccionar 
                un elemento existente mediante: ".querySelector()". En este elemento es donde vamos a crear un DOM particular, llamado "shadowDiv".

                                        const shadowDiv = div.attachShadow({ mode: "open" });

                Así pues, en la segunda línea, creamos un "Shadow DOM" en dicho <div>, estableciéndolo en "modo abierto" (habitualmente, el más utilizado). 
                En la constante "shadowDiv" se guarda el shadow DOM generado para este element div, que no es más que el nodo raíz (primer elemento) de ese 
                nuevo DOM particular (shadowroot)


                Nota: NO puedes adjuntar un "shadow DOM" en cualquier tipo de elemento HTML. Sólo está permitido en componentes Web ("custom elements"), 
                      cabeceras (h1, h2, h3, h4, h5 y h6), etiquetas semánticas (article, aside, footer, header, main, nav o section), contenedores 
                      (div, span, blockquote, p) o en la propia etiqueta <body>.


    2.4.-  Opciones del Shadow DOM

          El objeto parámetro "options" del método: shadowroot element.attachShadow(options), define las "características" de creación que tendrá el "Shadow DOM" 
          generado. Veamos que opciones tiene para indicar:


                                        Opción 	                              Valores posibles 	                    Descripción

                                        mode 	                                "open" | "closed" 	              Indica el modo de "encapsulación del Shadow DOM". Obligatorio.

                                        delegatesFocus 	                        true | false 	                  Indica si el Shadow DOM debería obtener el foco.


          La opción "mode" define el "modo de encapsulación" que queremos que tenga el Shadow DOM.

          1.-  Modo abierto ({mode: "open"}) => en el caso de que indiquemos "modo abierto" ("open"), el elemento HTML en el que creamos el "Shadow DOM" tendrá una propiedad: 
                                                ".shadowRoot" por la cuál se puede acceder al SHADOWROOT del elemento, y a partir de ahí, al árbol DOM (Shadow DOM) que contiene:

                                      // Encapsulamiento abierto ({mode: "open"})
                                      const div = document.createElement("div");
                                      const shadowDiv = div.attachShadow({ mode: "open" });

                                      div.shadowRoot === shadowDiv; // true (es el mismo elemento)

          2.-  Modo cerrado ({mode: "closed"}) => en el caso de que indiquemos "modo cerrado" ("closed"), la propiedad: ".shadowRoot" del elemento nos devolverá "null", siendo 
                                                  imposible acceder al árbol Shadow DOM que contiene. Es recomendable evitar este modo siempre que se pueda, ya que hay muy 
                                                  pocos casos en los que puede ser necesario:

                                      // Encapsulamiento cerrado
                                      const div = document.createElement("div");
                                      const shadowDiv = div.attachShadow({ mode: "closed" });

                                      div.shadowRoot === null; // true (no se guarda la referencia)


          En cualquiera de los dos modos anteriores, el metodo .attachShadow() siempre devolvera "ShadowRoot", una referencia al "Shadow DOM" para 
          acceder a su árbol interno. Esto puede ser particularmente útil en el modo cerrado, ya que no hay otra forma de obtenerlo. Si no guardamos 
          esa referencia, no podremos acceder.

          Por último, la opcion: "delegatesFocus: "true | false", es una opción establecida a "false" por defecto, que indica si queremos que 
          el propio "Shadow DOM" obtenga el foco o no. Esto puede ser particularmente útil cuando queremos dar estilo a través de la 
          pseudoclase :focus.


  2.5.-  Encapsulación con Shadow DOM

         Ahora que hemos entendido como funciona y como crear un "Shadow DOM" quizás no tengamos claro aún para que puede servirnos. La utilidad 
         principal de "Shadow DOM" es la posibilidad de "encapsular elementos", de modo que se encuentren "aislados" al DOM principal del documento
         y no repercutan con otros elementos externos.


         2.5.1.-  Encapsular CSS (Estilos locales)

                  Probablemente, una de las aplicaciones más interesantes del Shadow DOM es la de conseguir "estilos CSS locales" a un componente. 
                  Debido a la naturaleza global tradicional de CSS, siempre hemos creado CSS para aplicar en cascada y que afecte a todos los 
                  elementos. Y esto está bien. Es una característica deseable de diseño que bien organizada puede ahorrarnos mucho trabajo.

                  Sin embargo, en algunos casos, podemos querer aplicar CSS de "forma local" (como solemos estar más acostumbrados en el mundo 
                  de la programación) y que los estilos solo afecten, por ejemplo, al componente donde nos encontramos. Esto permitiría simplificar 
                  muchísimo el CSS y haría mucho más sencillo trabajar con estilos en aplicaciones grandes, heredadas o con un gran número de 
                  desarrolladores en ella.

                  Aquí es donde entra "Shadow DOM". Por defecto, CSS seguirá teniendo el comportamiento global que ha tenido siempre, permitiendo 
                  el uso de la cascada para dar estilos. Sin embargo, gracias a este "encapsulamiento" podemos aislar un "fragmento del DOM" y que 
                  el CSS dentro del "Shadow DOM" no afecte al del documento, ni que este CSS global, pueda pasar y aplicarse al del "Shadow DOM":

                  Esto, llevado a código y aprovechando lo que ya sabemos de WebComponents, se puede realizar de la siguiente forma. Crearemos un 
                  componente Web con un "Shadow DOM" que en su interior contendrá una etiqueta: "<style>"" con estilos CSS locales al componente. 
                  Tener en cuenta los estilos dados al elemento "<span>"". Al estar aislado con un Shadow DOM, solo los "<span>" del DOM de este 
                  componente se verán afectados:

                                    <app-element></app-element>

                                    <script>
                                        class AppElement extends HTMLElement {
                                          constructor() {
                                            super();
                                            this.attachShadow({ mode: "open" });
                                          }

                                          connectedCallback() {
                                            this.shadowRoot.innerHTML = /* html * /`
                                              <style>
                                                span {
                                                  background: steelblue;
                                                  padding: 5px;
                                                  color: white;
                                                }
                                              </style>

                                              <div>
                                                <p>¡Vuelve a la sombra, <span>CSS</span>! ¡NO... PUEDES... PASAR!</p>
                                              </div>
                                            `;
                                          }
                                        });

                                        customElements.define("app-element", AppElement);
                                    </script>


                  Observa que la creación del "Shadow DOM" se suele hacer cuanto antes, en el constructor de la clase del webComponent:

                                        class AppElement extends HTMLElement {
                                          constructor() {
                                            super();
                                            this.attachShadow({ mode: "open" });
                                          }
                                          ...
                                        }
                  
                  
                  Por otro lado, si queremos añadir elementos HTML en el nuevo "Shadow DOM" creado, tendremos que hacerlo con: 
                  
                                        this.shadowRoot.innerHTML, en lugar de "this.innerHTML". Hablaremos de este detalle en el siguiente artículo.

                                        connectedCallback() {
                                            this.shadowRoot.innerHTML = /* html * /
                                            `
                                              <style>
                                                span {
                                                  background: steelblue;
                                                  padding: 5px;
                                                  color: white;
                                                }
                                              </style>

                                              <div>
                                                <p>¡Vuelve a la sombra, <span>CSS</span>! ¡NO... PUEDES... PASAR!</p>
                                              </div>

                                            `;
                                          }

                  Hay que tener claro que al resto de "<span>" definidos en la página HTML no se le aplicarán los estilos indicados en este 
                  componente Web. De la misma forma, tampoco el DOM de este componente le verá afectado por estilos definidos fuera del mismo, 
                  aunque sus selectores encajen => ESTAN ENCAPSULADOS DENTRO DEL SHADOW DOM!!


                  Nota: En los frameworks de Javascript, una de las formas más extendidas de aislar estilos es utilizar CSS Modules, una estrategia 
                        no nativa que cambia las clases de los elementos HTML por hashes autogenerados (usándolos a modo de namespaces) para evitar 
                        la cascada CSS y las colisiones en clases con el mismo nombre.


        2.5.2.-  Encapsular Javascript (JS local)

                 De la misma forma que hemos visto en el apartado anterior, Javascript «sufre» la misma suerte de encapsulamiento que CSS. 
                 
                 Imaginemos la siguiente situación, junto al código anterior:

                                            <p>¡Hola a <span>todos</span>!</p>

                                            <app-element></app-element>
                                            <app-element></app-element>
                                            <app-element></app-element>

                                            
                  Ahora, en nuestro Javascript escribimos lo siguiente:

                                           const spans = document.querySelectorAll("span");

                  Al ejecutar este código Javascript, si tenemos definido un componente con "Shadow DOM" como vimos en el apartado anterior, 
                  la constante "spans" contendrá un array "con un sólo elemento", el <span>todos</span> que tenemos en el <p> de nuestra 
                  página principal. Todos los <span>CSS</span> del interior de los componentes no se obtendrán porque están aislados en un 
                  DOM particular, en un "Shadow DOM".

                  Por el contrario, si nuestro componente no estuviera aislado con un Shadow DOM sino que sólo utiliza los custom elements 
                  sin Shadow DOM como vimos en los primeros temas, obtendríamos un array con 4 elementos: el <span>todos</span> y los 3 
                  <span>CSS</span> que se encuentran en cada componente.

                  Sabiendo todo esto, podemos utilizar el encapsulamiento de CSS o Javascript a nuestro favor, y crear componentes 
                  (o elementos individuales encapsulados) dependiendo de nuestros objetivos, ya sea utilizar CSS/JS global o utilizar CSS/JS local.
*/

//  2.6.-  El  "Light DOM".

/*
           Es muy probable que en el contexto de frontend, estemos acostumbrados a trabajar con el DOM y lo conozcamos bien, sin embargo, es menos 
           común trabajar con el "Shadow DOM". Si comenzamos a profundizar en el tema, veremos que muchas veces se mencionan conceptos como 
           "Light DOM", que probablemente sean aún más desconocidos.


    2.6.1.- DOM en WebComponents: Light DOM vs Shadow DOM

            Como hemos mencionado en un artículo anterior, el "Shadow DOM" es un DOM particular, una "sombra" aislado del DOM general (y real) del 
            documento, que se encuentra aislado del árbol DOM principal de la página. Esto nos permite cosas interesantes como aislar CSS o 
            Javascript dentro de un componente Web, de modo que sólo afecta a él mismo.

            Nota: Aunque se suele asociar a WebComponents, realmente el "Shadow DOM" de un elemento HTML de un documento web es una característica 
                  independiente que se puede aplicar a un elemento HTML normal, ya que es una tecnologia presente en los navegadores,  y el elemento
                  HTML no tiene necesidad de ser un componente Web.

            Nota.-  recuerda que por defecto los elementos HTML no tienen "Shadow DOM" ya creado. Si se quiere tener un shadow DOM en un elemento HTML 
                    se debe de crear explicitamente y adjuntarlo tambien explicitamente a un elemento HTML, utilizando el metodo: .attachShadow(options), 
                    que devolvera un "ShadowRoot" object.
            
                                      ShadowRoot element.attachShadow(options) 	=> Crea y adjunta un Shadow DOM en un elemento referenciado por "element"

                    Ejemplo:
                                      En HTML:

                                      <primer-webcomponent>
                                        <header>
                                          <h4> Hola <span> Yo soy un <mark> WebComponent</mark> </span> </h4>
                                        </header>
                                      </primer-webcomponent>

                                      En JS:

                                      class PrimerWebComponent extends HTMLElement {
                                        constructor {
                                          super();
                                          this.attachShadow({ mode: "open" });
                                        }
                                        console.log("Cargando el WebComponent")

                                         connectedCallback() {
                                            this.shadowRoot.innerHTML = /* html * /
                                            `
                                              <style>
                                                span {
                                                  background: steelblue;
                                                  padding: 5px;
                                                  color: white;
                                                }
                                              </style>

                                              <div>
                                                <p>¡Vuelve a la sombra, <span>CSS</span>! ¡NO... PUEDES... PASAR!</p>
                                              </div>
                                            `;
                                          }
                                        }

                                        customElements.define("primer-webcomponent", PrimerWebComponent);


  2.6.1.-  ¿Shadow DOM oculta el DOM?

           Al crear un "Shadow DOM" (this.attachShadow({mode: "open"})) entran en escena nuevas características y casuísticas, 
           por lo que conviene aprender como funcionan y profundizar en sus posibilidades. 
           
           1.-  El componente no esta visible al principio:  la primera de ellas, que quizás ya habrás descubierto, es que al añadir un 
                                                             "Shadow DOM" a un elemento, si teníamos contenido en dicho elemento, este 
                                                             desaparecerá y no se mostrará visualmente en el navegador.


                Imaginemos que tenemos el siguiente componente donde no tenemos "Shadow DOM":

                                      <app-element>
                                        <div class="container">Contenido previo del elemento</div>
                                      </app-element>

                Desde que escribamos una línea donde hagamos un: "this.attachShadow({ mode: "open" });"", comprobaremos que el contenido 
                del componente deja de aparecer en el navegador. Sin embargo, si miramos en el código fuente, el código HTML sigue existiendo.

                Esto no es un error, es el funcionamiento correcto del "Shadow DOM" y más adelante entenderemos el por qué.


  2.6.2.-  ¿Qué es el Light DOM?

           Como su propio nombre sugiere, el "Light DOM" es la contrapartida del "Shadow DOM". Es el nombre con el que se suele hacer referencia 
           a la "parte oculta del DOM principal" (de la rama que contiene al elemento HTML que creamos el Shadow DOM y este oculta) que hemos 
           ocultado con el "Shadow DOM":

          A.-  Light DOM vs Shadow DOM

              Justo en el momento que ejecutamos un ".attachShadow({mode: "open"})", creamos un "Shadow DOM" que pasará a «ocultar» o oscurecer 
              (con su sombra) al DOM (real) que existía en el componente web (a los elementos HTML hijos del componente web), de modo que 
              desaparece de la página mostrada al usuario. Este DOM que desaparece se suele denominar: "Light DOM" (desaparece pero todavia existe)


          B.-  Componente sin Shadow DOM

              Imaginemos un ejemplo donde tenemos un componente Web que no tiene "Shadow DOM". El resultado es casi el mismo que usar un 
              <div> como contenedor (por ejemplo). Sin embargo, ganamos en modularidad al utilizar el componente web, ya que si tenemos que utilizar 
              múltiples veces el componente Web, con sólo escribir la etiqueta se replicará el mismo contenido:

                              <app-element></app-element>

                              <script>
                                class AppElement extends HTMLElement {
                                  constructor () {
                                    super();
                                    console.log("Cargando el WebComponent")
                                  }

                                  connectedCallback() {
                                    this.innerHTML = "<div>Hello, friend!</div>";
                                  }
                                };

                                customElements.define("app-element", AppElement);
                              </script>


              Ahora hagamos un pequeño cambio en nuestro HTML. Vamos a añadir contenido en el interior del componente, de modo que nuestro <app-element> contiene un <div> con texto:

                              <app-element>
                                <div class="container">Contenido previo del elemento</div>
                              </app-element>

              En este caso, lo que ocurrirá es que el navegador hará lo siguiente:

                              1.-  Renderiza la etiqueta: <app-element> y muestra su contenido => "Contenido previo del elemento"

                              2.-  Inmediatamente después, carga el componente Web (ejecuta el constructor de la clase), y se modifica 
                                   el contenido existente.

                                   "Hello"


              Hemos modificado el contenido inicial del componente por uno nuevo. En este caso, todo es bastante intuitivo, ya que carecemos de 
              un Shadow DOM.


          C.-  Componente con Shadow DOM.

              Vamos a complicarlo un poco. Hasta ahora los ejemplos han sido sin "Shadow DOM" en el componente. Vamos a crear un componente 
              donde creamos un "Shadow DOM" con encapsulamiento abierto.

                              <app-element>
                                <div class="container">Contenido previo del elemento</div>
                              </app-element>

                              <script>
                                customElements.define("app-element", class extends HTMLElement {
                                  constructor() {
                                    super();
                                    this.attachShadow({ mode: "open" });
                                  }

                                  connectedCallback() {
                                    this.shadowRoot.innerHTML = "<div>Hello, friend!</div>";
                                  }
                                });
                              </script>


              En este caso, lo que ocurrirá es que el navegador hará lo siguiente:

                              1.-  Renderiza la etiqueta <app-element> y muestra su contenido => "Contenido previo del elemento"

                              2.-  Creamos un Shadow DOM en el componente => constructor () { super(); this.attachShadow({mode: "open"})}

                              3.-  Se añade el nuevo contenido HTML en el Shadow DOM =>  
                              
                                          connectedCallback() { 
                                            this.shadowRoot.innerHTML = "<div>Hello, friend!</div>";
                                          }

                              Ten presente que en el último ejemplo estamos utilizando "this.shadowRoot.innerHTML" para modificar el "Shadow DOM". 
                              Si utilizaramos "this.innerHTML" modificaríamos sólo el "Light DOM".
                                
                              4.-  Justo al crear el "Shadow DOM", se muestra y se oculta el antiguo DOM.

              En otras palabras, cuando adjuntamos un "Shadow DOM", se oculta el "Light DOM". Sin embargo, un dato importante: 
              
                    Aunque el "Light DOM" se oculta, "sigue existiendo" en la página. No se ha modificado ni eliminado. Si inspeccionamos el 
                    HTML con el navegador, veremos algo así:

                                          <app-element>
                                            #shadow-root (open)
                                              <div>Hello, friend!</div>
                                            <div class="container">Contenido previo del elemento</div>
                                          </app-element>

              El contenido tanto del "Shadow DOM" como del "Light DOM" están presentes en el código, sin embargo, el "Shadow DOM" por el mero 
              hecho de existir, ya oculta visualmente cualquier contenido del "Light DOM". 
              
              ¿Por qué sigue existiendo el "Light DOM" si se oculta y no se muestra? Lo explicaremos un poco más adelante.
*/

//  2.7.-  Slots en WebComponents

/*


Si conocemos como funciona el Shadow DOM y las diferencias con el Light DOM, es muy probable que nos interese saber cuál es la finalidad del Light DOM en un componente con Shadow DOM.
¿Qué es un slot?

En HTML5 aparece un nuevo concepto denominado slot o ranura. Estos slots son «accesos directos» que nos permiten enviar contenido HTML desde el Light DOM para reutilizarlo en el Shadow DOM del componente. Si tenemos claro el concepto de Shadow DOM y Light DOM, esto se puede ver fácilmente como un hueco o ranura en el Shadow DOM que deja ver el contenido que está «debajo» en el Light DOM:

WebComponents: Slots HTML

    Para comunicar el Light DOM con el Shadow DOM debemos aprender a utilizar las etiquetas <slot>, que explicaremos a continuación. Recuerda que es obligatorio tener un Shadow DOM en el componente para poder utilizar slots. De lo contrario, no funcionarán.

Slot por defecto

La etiqueta <slot> se puede utilizar en el Shadow DOM de un componente, para determinar donde aparecerá el contenido del custom element. Si indicamos un contenido en el interior de la etiqueta <slot> se utilizará como contenido por defecto, en el caso de que el componente no tenga definido ningún contenido.

Observa el siguiente ejemplo, donde escribimos dos componentes <app-element>:

    Al primero, no se le define ningún contenido
    Al segundo, se le pasa el contenido <span>Manz</span>

El fragmento de código completo sería el siguiente:

<app-element></app-element>
<app-element><span>Manz</span></app-element>

<script>
  class AppElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = /* html * /`
      <div class="container">
      ¡Hola, usuario <slot>desconocido</slot>!
    </div>`;
}
};
customElements.define("app-element", AppElement);
</script>

Observemos ahora la etiqueta <slot> definida en el Shadow DOM de nuestro componente, concretamente, en el método especial connectedCallback(). El navegador tendrá un acceso directo e insertará el contenido del Light DOM que hemos colocado en el interior de <app-element> en el slot (reemplazando su contenido, si existiera).

Para cada componente, el navegador nos mostrará lo siguiente:

En el primer componente, mostrará el texto ¡Hola, usuario desconocido!.
En el segundo componente, mostrará el texto ¡Hola, usuario Manz!.

Slots nombrados

Pero es posible que, si nuestro componente es un poco más complejo, el slot se nos quede corto, ya que necesitaríamos varios slots por componente. Para ello tenemos los denominados slots nombrados o slots con nombre.

Si bien siguen la misma mecánica explicada anteriormente, veamos el siguiente ejemplo. Hemos ampliado el ejemplo, y el custom element ahora incluye 3 grupos de información: nombre, rol y descripción. Cada uno en su propia etiqueta HTML, con un atributo slot que le indicará el tipo de información que posee:

<app-element>
<h2 slot="name">Manz</h2>
<span slot="role">Developer</span>
<p slot="description">I hate Internet Explorer.</p>
</app-element>

<script>
class AppElement extends HTMLElement {
constructor() {
  super();
  this.attachShadow({ mode: "open" });
}

connectedCallback() {
  this.shadowRoot.innerHTML = /* html * /`
    <div class="card">
      <slot name="name"></slot>
      <slot name="description"></slot>
      <slot name="role"></slot>
    </div>
  `;
}
};
customElements.define("app-element", AppElement);
</script>

Por otro lado, dentro del componente creamos la estructura del marcado HTML incluyendo varios elementos <slot> con un atributo name que coincidirá con el atributo slot del custom element. El navegador reemplazará el contenido de los slots por la información indicada, coincidiendo también con la etiqueta definida en el custom element, siendo así un <h2> el nombre o un <p> la descripción.

Esto nos permitirá crear múltiples slots en un mismo componente. Al igual que el ejemplo del apartado anterior, podemos utilizar contenido a modo de fallback, por si tenemos el slot vacío, tenga información por defecto.

Ten en cuenta que los slots especificados en el Shadow DOM, al ser referencias al Light DOM, si modificamos cualquiera de los dos, se actualizarán en ambos lugares.

Estilos CSS en slots

Ahora hablemos de estilos. Si buscamos darle estilo a un elemento que se encuentra en un <slot> debemos pararnos a pensar donde está realmente el elemento para saber desde donde se le puede dar estilo. Recordemos que el componente, está aislado por un Shadow DOM y que los slots sólo son referencias a elementos que existen en el Light DOM.
Estilos desde el LightDOM

Como los elementos HTML realmente existen en el DOM global, es posible seleccionar los elementos por cualquiera de sus características: clases, id, atributos o por el propio elemento. En el siguiente ejemplo se ve como se le da estilo según el tipo de elemento <h2> y por su atributo slot="name":

<app-element>
<h2 slot="name">Manz</h2>
<span slot="role">Developer</span>
</app-element>

<style>
app-element h2 {
background: red;
}

app-element [slot="name"] {
background: blue;
}
</style>

Le hemos dado estilo al primer elemento del custom element, el elemento <h2>.
Estilos desde el Shadow DOM

Es posible que no queramos dar estilo a los elementos desde fuera del componente, sino desde dentro, desde el Shadow DOM. Así será mucho más fácil de localizar y mantener el código. En ese caso, tenemos varias opciones a nuestra disposición, que veremos a continuación:

class AppElement extends HTMLElement {
constructor() {
super();
this.attachShadow({ mode: "open" });
}

connectedCallback() {
this.shadowRoot.innerHTML = /* html * /`
  <style>
    h2 {
      background: red;    /* No funciona * /
    }
    [name="name"] {
      display: block;
      background: green;
    }
  </style>
  <div class="card">
    <slot name="name"></slot>
    <slot name="role"></slot>
  </div>
`;
}
};

customElements.define("app-element", AppElement);

La primera de ellas sería darle estilo directamente a <h2>, sin embargo, ese elemento está realmente fuera del Shadow DOM, por lo que no podríamos aplicarle estilos. Sin embargo, si hacemos referencia al <slot> o sus atributos, si podremos hacerlo, porque dichas etiquetas si que están en el Shadow DOM. Eso sí, no olvides cambiarle el display.

Recuerda que los estilos que se encuentren dentro del Shadow DOM siempre tendrán menos prioridad que los estilos del documento HTML global. Si se aplican estilos en ambos lugares, siempre tendrá preferencia el documento HTML global.

El pseudoelemento ::slotted()

Existe una forma más específica de dar estilo a los elementos slots de un componente con Shadow DOM: mediante el pseudoelemento CSS ::slotted().

Este pseudoelemento nos permite dar estilo a etiquetas insertadas en un slot, pero desde dentro del componente. En el interior de los paréntesis, deberemos indicar un selector CSS que encaje con la etiqueta insertada.

Por ejemplo, en el fragmento de código anterior vimos que h2 desde el Shadow DOM no tendría efecto. En lugar de ello, utilizaremos ::slotted(h2):

connectedCallback() {
this.shadowRoot.innerHTML = `
  <style>
    h2 {
      color: red;      /* No funciona * /
    }
    ::slotted(h2) {    /* Funciona * /
      color: green;
    }
  </style>
  <div class="card">
    <slot name="name"></slot>
    <slot name="role"></slot>
  </div>
`;
}

La diferencia de utilizar ::slotted() es que, en este caso también se le da preferencia al estilo global, sin embargo en este caso con un !important si podríamos cambiar la especificidad si lo desearamos, ya que los estilos se están insertando en el DOM global a través del ::slotted().

Eventos de slots

Por último, los <slots> tienen un evento que puede resultar útil para detectar cuando hay ciertos cambios en slots. Por ejemplo, el evento slotchange se dispara cuando:

Un <slot> cambia su atributo name, y por lo tanto apunta a otro elemento.
Una etiqueta del Light DOM cambia su atributo slot, y por lo tanto, es referencia de otro slot.

En resumen, cuando una asociación de slot-elemento cambia, apuntando a un nuevo elemento o dejando de apuntar al que ya lo hacía.
Evento 	Descripción
slotchange 	Se dispara cuando detecta que una asociación slot-elemento ha cambiado.

Para utilizarlo, lo haremos como cualquier evento, utilizando .addEventListener() sobre el <slot> en cuestión para escucharlo y detectar cuando se dispara, ejecutando una función asociada:

const slot = document.querySelector("slot");
slot.addEventListener("slotchange", () => console.log("¡El slot ha cambiado!"));

De esta forma podremos detectar cambios y disparar cierta lógica necesaria en consecuencia.

*/

//  2.8.-  CSS en WebComponents

/*
    Más atrás, vimos las diferentes formas de añadir CSS a nuestros"Custom Elements". Sin embargo, el gran problema que teníamos entonces es 
    que el CSS afectaba tanto al componente como al exterior del componente, ya que CSS tiene una naturaleza global por defecto. De la misma forma, 
    el CSS exterior afectaba al componente.
*/

//  2.9.-  CSS Scoping en Shadow DOM => 

/*
    Hemos comentado que cuando tenemos un componente con Shadow DOM, este se encuentra aislado del exterior. No tenemos ninguna forma de cambiar los estilos del componente desde fuera. Esto no es del todo cierto, ya que hay algunas excepciones específicas que trataremos en este artículo.

Antes de comenzar, recordemos la siguiente estructura HTML de un componente con Shadow DOM:

<html>
  <body>
    <div class="container">
      <app-element>
        #shadow-root
          <div class="container">
            Contenido del componente
          </div>
      </app-element>
    </div>
  </body>
</html>

Observa que el Shadow DOM comienza desde el #shadow-root en adelante, por lo que todos los elementos que se encuentran fuera de este #shadow-root están en el DOM global del documento, y por lo tanto, no están aislados.
Desde el DOM global

Un componente no es más que un elemento HTML personalizado, es decir, un elemento HTML al fin y al cabo. Como el Shadow DOM existe sólo dentro de él (que es lo que está aislado y no podemos alterar), si que podemos cambiar de forma global los estilos del elemento contenedor del componente, es decir, la propia etiqueta del componente:

app-element {
  display: block;
  background: indigo;
  color: white;
  padding: 10px;
  margin: 5px;
}

Estos estilos si afectarán al componente, por lo que podemos utilizarlos para darle estilo desde fuera si lo necesitamos. Recuerda que es necesario colocar un display, ya que por defecto, un componente tiene valor display: inline y muchas propiedades no le afectan.
La pseudoclase :host

Sin embargo, desde el interior del Shadow DOM, debido al aislamiento, perdemos el acceso al exterior del componente. No obstante, tenemos a nuestra disposición la pseudoclase :host que no es más que eso: un sistema de acceder al elemento contenedor que contiene el Shadow DOM, como lo hicimos justo antes desde el ámbito global, pero desde dentro del componente:

<app-element></app-element>

<script>
class AppElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html * /`
    <style>
    :host {
      display: block;
      background: indigo;
      color: white;
      padding: 10px;
      margin: 5px;
    }
    span {
      font-weight: bold;
      vertical-align: super;
      font-size: small;
      color: gold;
    }
  </style>
  <div class="element">
    Contenido del componente <span>New!</span>
  </div>
`;
}
};

customElements.define("app-element", AppElement);
</script>

Mediante la pseudoclase :host, vemos que el componente busca el contenedor padre que contiene el Shadow DOM y le aplica los estilos definidos. 
Ten en cuenta que un custom element es un elemento inline, por lo que algunas propiedades no harán efecto si no le cambias su forma de 
representación.


*/


//  HTML Templates:  Plantillas y HTML en Web Components

//  1.-  Introduccion

//  HTML Templates: plantillas de HTML - El elemento <template> que permite que los documentos contengan trozos "inertes" del DOM.

//  La creación de un "HTML template" en un documento web permite "declarar" "fragmentos de codigo HTML" reutilizables, que contienen 
//  contenido HTML que no se procesa inmediatamente. Estos se pueden "instanciar" a través de Javascript para crear nuevos elementos HTML
//  de acuerdo con la plantilla. Cuando se repiten las mismas estructuras de marcado repetidamente en una página, tiene sentido usar una 
//  plantilla HTML  en lugar de copiar la misma estructura muchas veces.

/*
    "HTML templates" (plantillas HTML): Los elementos <template> (y <slot>) permiten escribir "plantillas de marcado HTML" dentro de un 
                                        documento web para los WebComponets, que no son desplegadas (renderizadas) en la página directamente
                                        (contenido inerte), si no que posteriormente son referenciadas via JS para su despliege. 
                                        
                                        Éstas "HTML templates" pueden ser "reutilizadas" en el documento, como base de la estructura de un 
                                        elemento personalizado (custom element).

    Una característica muy interesante de los "WebComponents" son las "HTML templates" ("plantillas de marcado HTML"). Se trata de "etiquetas 
    nativas" de HTML (<template> y <slot> ) que permiten crear "contenido inicialmente inerte" en una página HTML, esto es, contenido HTML que 
    no se procesa inicialmente por el navegador (no se renderizara), y que permanece «muerto - inerte» hasta que lo "clonemos" mediante Javascript, 
    (se referencie por JS) y creemos nuevos elementos a partir de él.

    Ejemplo de creacion de una "plantilla HTML" (HTML template):

                                          <template id="user-template">
                                            <div class="user">
                                              <h1>Username</h1>
                                              <img src="user-image.png" alt="Username">
                                              <a href="https://website.com/">URL</a>
                                            </div>
                                          </template>

    Todos los elementos HTML en el interior de la plantilla (HTML templates) (imágenes, scripts, etc...) no son procesados inicialmente
    durante la carga de la página (no se anaden al DOM del documento), es decir, no son renderizados al llegar a el por la pagina, por 
    lo tanto, el navegador no invertirá recursos en su procesamiento.  Posteriormente y mediante codigo JS, son referenciados e instanciados 
    para que este codigo se anada al DOM del documento
*/

/*  
    Una de las razones principales por las que nos puede interesar crear un componente web en nuestra página es para "modularizar" una 
    característica o funcionalidad que sabemos que se va a repetir en el documento. El componente es una estupenda forma de unir marcado (HTML), 
    estilo (CSS) y funcionalidad (JS) en un mismo sitio, de forma que sea mucho más cómodo de mantener para nosotros, los desarrolladores.

    ¿Por qué plantillas HTML?

    Cuando tienes que "reutilizar" las mismas estructuras de lenguaje de marcado (fragmentos de codigo HTML) repetidas veces en una página web, 
    tiene sentido utilizar algún tipo de "plantilla HTML" en lugar de repetir la misma estructura una y otra vez. 

    Esto ya era posible hacerlo antes, pero ahora es mucho mas fácil con el elemento HTML: <template> (que está bien soportado en los navegadores 
    modernos). Este elemento y su contenido no son renderizados en el DOM, pero pueden ser "referenciados" vía JavaScript.

      Ejemplo sencillo:

                                html

                                <template id="my-paragraph">
                                  <p>Mi párrafo interno a un HTML template</p>
                                </template>

    Esto no aparecerá en tu página (no se pone en el DOM) hasta que hagas una "referencia" a él con JavaScript y luego lo agregues al DOM, 
    usando algo parecido a lo siguiente:

                                  js

                                  const template = document.getElementById("my-paragraph");
                                  const templateContent = template.content;
                                  document.body.appendChild(templateContent);

    Aunque de una manera simple, ya puedes empezar a ver su utilidad.

    Una de las finalidades de un WebComponent es "encapsular un marcado HTML" más complejo dentro de una etiqueta HTML personalizada más sencilla, 
    simplificando mucho su utilización, reduciendo la cantidad de código que tenemos que escribir y permitiendo reutilizarlo en el documento.

    Pero hay que recordar que un WebComponent, al fin y al cabo, es un fichero "javascript.js", por lo que no podemos escribir código HTML 
    directamente, sino que tenemos que utilizar alguna de las siguientes estrategias.

    En los siguientes apartados, vamos a ver las diferentes formas que tenemos de crear marcado en un componente.



    
    
    

  
*/

/*  2.-  HTML a través de "strings".

         Probablemente, la forma más rápida de crear marcado (codigo HTML) en nuestro componente es haciendo uso de la API Javascript que 
         permite escribir "etiquetas HTML tradicionales" dentro de un "string". Tenemos varias propiedades que se utilizan para trabajar 
         con el DOM de forma rápida, atómica y bastante cómoda para el desarrollador.

                  Propiedad 	                              Descripción

                  .innerHTML 	                        Añade o reemplaza el "marcado HTML" del componente - elemento HTML.

                  .outerHTML 	                        Idem al anterior, pero también reemplaza el componente - element HTML. 
                                                      Poco usado en WebComponents.

                  .textContent 	                      Reemplaza el "contenido textual" del componente - element HTML. No permite marcado HTML.

                  .innerText 	                        Similar al anterior. Utilizar ".textContent" en su lugar.


         Las dos primeras propiedades, ".innerHTML" y ".outerHTML" se utilizan para reemplazar el "marcado HTML" de un componente - element HTML, 
         aunque ".outerHTML" no es demasiado práctico en los componentes, puesto que también sustituye la propia etiqueta del componente.

         Por otro lado, las dos últimas propiedades, ".textContent" y ".innerText", se utilizan para obtener solo el "contenido textual", pero 
         se recomienda usar solamente ".textContent", ya que ".innerText" no funciona obteniendo texto de elementos de tipo "node", por ejemplo.

         De las anteriores, una de las más utilizadas es ".innerHTML" (añade o reemplaza el "marcado HTML" del componente - elemento HTML). 
         Veamos un ejemplo usándolo en un componente:

                                                    class AppElement extends HTMLElement {
                                                      constructor () {
                                                        super();
                                                      }

                                                      connectedCallback() {
                                                        this.name = this.getAttribute("name") || "Desconocido";
                                                        this.innerHTML = "<div>" "Atributo: " + this.name + "</div>";
                                                      }
                                                    }

    Nota.-  Metodo especial "connectedCallback()":  el método ".connectedCallback()" es un método especial que se ejecuta cuando el componente 
                                                    se inserta en el documento HTML. Lo explicamos más adelante, en el apartado de "ciclo de vida 
                                                    de un WebComponent".


        Esto se puede refactorizar un poco para mejorar la calidad de código y hacerlo más legible. Por ejemplo, podemos sacar el atributo "name" 
        fuera del método y ponerlo en la parte superior de la clase. También podemos utilizar los "backticks" para indentar mejor el marcado del 
        string y conseguir mayor legibilidad.

        Esto nos permite que si el marcado se vuelve más complejo se lea mucho mejor, pudiendo utilizar ${} para agrupar las expresiones o 
        variables JS, evitando también las múltiples concatenaciones:

                                                    class AppElement extends HTMLElement {
                                                      constructor () {
                                                        super()
                                                      }

                                                      let name = this.getAttribute("name") || "Desconocido";

                                                      connectedCallback() {
                                                        this.innerHTML = /* html * /`
                                                        <div class="container">
                                                          <div class="name">Atributo: ${this.name}</div>
                                                        </div>`;
                                                      }
                                                    }

    Consejo: Observa que justo antes del string template hemos añadido el comentario /* html * /. Esto es una práctica muy utilizada en 
    WebComponents. Con extensiones para Visual Studio Code como ES6-strings-html podemos indicarle al editor que lo que contiene el que viene 
    a continuación es código HTML, activando el resaltado de sintaxis en color o permitiendo otras características de HTML. También lo podemos 
    hacer con código CSS, SVG, SQL, XML o GLSL (OpenGL Shading).

    Es importante tener en cuenta que si en el ejemplo anterior utilizaramos ".textContent" en lugar de ".innerHTML" no se renderizarían las 
    etiquetas HTML, sino que se mostrarían literalmente el texto, ya que ".textContent" interpreta literalmente como texto el marcado HTML.

    Esta forma de incluir marcado HTML dentro de strings está muy sujeta a controversia y no gusta a todos los desarrolladores. En ciertas 
    comunidades como las de CSS-in-JS o React es muy utilizada (con considerables diferencias), pero en otras suele causar rechazo. Sin embargo, 
    se ha convertido en la forma más extendida. Más adelante veremos otras alternativas.


    3.-  EMMET en String templates.

    Es muy posible que queramos utilizar la posibilidad de utilizar "EMMET" en los "strings templates" al igual que lo hacemos en un documento HTML, 
    de forma que al escribir p y pulsar TAB, nos lo reemplace por <p></p> y posicione el cursor en su interior F1.

    En Visual Studio Code es muy sencillo. Basta con pulsar  y buscar la opción Open User Settings (JSON). Nos aparece un fichero .json con la 
    configuración actual del usuario. Buscaremos o añadiremos la siguiente línea:

                            {
                              [...],
                              "emmet.includeLanguages": {
                                "javascript": "html"
                              },
                              [...]
                            }

    Esto hará que EMMET pueda ser escrito en ficheros Javascript, algo que junto a la extensión de VSCode mencionada anteriormente, hará que escribir 
    código HTML en WebComponents sea más sencillo y cómodo.


    4.-  Introducir marcado HTML a través del DOM.
    
         Otra forma de manejar el "marcado HTML" del componente es a través de la "API del DOM" de Javascript. En principio es un poco más verboso 
         y puede resultar tedioso, pero ofrece mejor rendimiento y puede ser muy interesante si somos organizados.

         Algunos de los métodos que nos puede interesar usar:

                        Método 	                                            Descripción

                        document.createElement(tagName, [options]) 	    Crea y devuelve un elemento HTML con etiqueta HTML "tagName".
                        element.appendChild(child) 	              Añade el elemento child dentro de element.
                        element.insertAdjacentHTML(pos,html) 	    Inserta el código html en element.
                        element.insertAdjacentElement(pos,node) 	Inserta el elemento node en element.


        En primer lugar, el metodo: "document.createElement(tagName)" suele utilizarse conjuntamente con ".appendChild()". 
        El primero crea el elemento HTML pasado por parámetro el nombre de la etiqueta y lo devuelve, generalmente para almacenarlo en una variable. 
        Es importante recalcar que ese elemento no se guarda en el documento HTML, aunque se haga sobre document, esta en memoria y referenciado en 
        la variable que pongamos. Para poner el elemento HTML creado en el DOM, hay que utilizar el segundo de los métodos de la tabla, que lo que 
        hace es añadir el elemento que se le pasa por parámetro (la referencia JS) en el elemento (referencia) donde se llama a ".appendChild()".

        Nota.-  en un documento HTML, el método "document.createElement()" crea un elemento HTML especificado por su "tagName", o un 
                HTMLUnknownElement si su "tagName" no se reconoce. En otros documentos, crea un elemento con un namespace URI null.

                Sintaxis:  const element = document.createElement(tagName, [options]);

                Parámetros:

                            tagName: string que especifica el tipo de elemento a crear. El "nodeName" del elemento creado se inicializa con el 
                                     valor de "tagName". No utilizar nombres reservados (como "html:a") con este método. Al ser invocado en un 
                                     documento HTML, "createElement()" convierte "tagName" a minúsculas antes de crear el elemento. 
                                     En Firefox, Opera, y Chrome, createElement(null) funciona como createElement("null").

                            options: Opcional. Un objeto opcional "ElementCreationOptions", que contiene una única propiedad llamada "is", cuyo 
                                     valor es el de la etiqueta name de un elemento personalizado definido previamente utilizando 
                                     customElements.define(). Para compatibilidad con versiones anteriores de Elements specification, algunos 
                                     navegadores podrían permitir pasar una cadena aquí en vez de un objeto, donde el valor de la cadena es la 
                                     etiqueta name del elemento creado.

                El nuevo elemento HTML creado recibirá el atributo cuyo valor es la "etiqueta name" del elemento personalizado. 
                Los elementos personalizados son una característica experimental solo disponible en algunos navegadores.

                Retorna: El nuevo ElementHTML creado (no esta todavia en el DOM)

                Ejemplo:

                                      <!doctype html>
                                      <html>
                                        <head>
                                          <title>||Trabajando con elementos||</title>
                                        </head>
                                        <body>
                                          <div id="div1">El texto superior se ha creado dinámicamente.</div>
                                        </body>
                                      </html>

                                js

                                      document.body.onload = addElement;

                                      function addElement() {
                                        // crea un nuevo div y añade contenido
                                        const newDiv = document.createElement("div");
                                        const newContent = document.createTextNode("Hola!¿Qué tal?");

                                        newDiv.appendChild(newContent); //añade texto al div creado.

                                        // añade el elemento creado y su contenido al DOM
                                        const currentDiv = document.getElementById("div1");
                                        document.body.insertBefore(newDiv, currentDiv);
                                      }


        Veamos otro ejemplo:

                                    class AppElement extends HTMLElement {
                                      constructor ()
                                                    {
                                                      super()
                                                    }

                                      name = this.getAttribute("name") || "Desconocido";

                                      connectedCallback() {
                                        const container = document.createElement("div");
                                        container.classList.add("container");
                                        this.appendChild(container);

                                        const nameContainer = document.createElement("div");
                                        nameContainer.classList.add("name");
                                        nameContainer.textContent = this.name;
                                        container.appendChild(nameContainer);
                                      }
                                    }

        Como vemos, el código es algo más «verboso», pero puede ser realmente útil cuando queremos realizar bucles o una lógica dinámica 
        que es más compleja de crear al estilo del apartado anterior, mediante cadenas de texto .

        Por otro lado, los métodos ".insertAdjacentHTML()" o ".insertAdjacentElement()" son un híbrido entre las formas de manipulación del 
        DOM que hemos visto hasta ahora, donde tenemos más flexibilidad a la hora de insertar, ya que el parámetro pos es un que puede 
        determinar el punto exacto donde se añadirá el elemento.


  5.-  Marcado HTML mediante "templates"

       Otra forma interesante de trabajar con el "marcado HTML" en un componente web es utilizando la etiqueta <template>. 
       
       Esta etiqueta HTML permite crear un "fragmento de código" de forma "aislada" del documento, de modo que todo su contenido está "inerte"
       y no es procesado ni renderizado inmediatamente por el navegador (no lo ve el DOM), sino que se pospondrá hasta que "clonemos",
       referenciar por JS,  su contenido.



    Nota: Recalcar que el navegador no procesa el contenido de una etiqueta <template> (ni carga sus recursos, como scripts o imágenes). 
          Además, si se define una etiqueta <template> en el HTML del documento, su rendimiento es mayor que otras alternativas, 
          como ".innerHTML", ya que se evita todo el proceso dinámico de parseo y análisis de a marcado HTML.


    Podemos utilizar esta característica para usar ese marcado como "código de base HTML" que clonaremos posteriormente y utilizaremos en 
    la creación de instancias de un componente Web.

    Veamos el mismo ejemplo anterior, utilizando esta mecánica (recuerda que la etiqueta <template> puede definirse en el archivo .html 
    si se prefiere y localizar mediante un ".querySelector()""):


                                    // Marcado HTML del componente
                                    const template = document.createElement("template");
                                    template.innerHTML = /* html * /`
                                      <div class="container">
                                      <div class="name"></div>
                                    </div>`;


                                    // Lógica Javascript del componente
                                    class AppElement extends HTMLElement {
                                      constructor () {
                                        super()
                                      }

                                      const name = this.getAttribute("name") || "Desconocido";

                                      connectedCallback() {
                                        const html = template.content.cloneNode((true));
                                        html.querySelector(".name").textContent = this.name;
                                        this.appendChild(html);
                                      }
                                    }

    En este ejemplo hemos colocado el marcado en la parte superior del componente (fuera de la clase). De esta forma, se creará una sola vez 
    y se utilizará cuando sea necesario. El contenido de los métodos de clase los limitamos a trabajar con lógica de programación y 
    gestión de datos.

    Remarcar el uso de ".content.cloneNode(deep)" sobre un "template". Con esto, lo que estamos haciendo es clonar el código HTML de 
    un <template>, para posteriormente insertarlo en nuestro componente.

    En el caso de establecer deep a true, haremos una clonación profunda (deep clone), es decir, se clona el elemento y todos sus elementos hijos. 
    En caso de establecerlo a false, se hará una clonación superficial (shallow clone), es decir, clonará sólo el elemento indicado 
    (y no sus hijos, los cuales serán una referencia a los originales).
*/

//  6.-  El elemento HTML "template".  La verdad acerca del elemento <template>, el elemento HTML de contenido.

//       La "plantilla - template HTML" es una forma de crear "fragmentos de inserción de HTML" que se usan a voluntad en un documento web. 
//       El elemento template HTML es un mecanismo para contener HTML que no se debe representar inmediatamente cuando se carga una página, 
//       pero se puede crear una "instancia" de el, de los elementos HTML que contiene, posteriormente durante el tiempo de ejecución mediante 
//       JavaScript.

//       Piense que un <template> HTML es como un "fragmento de contenido HTML" que se almacena para su uso posterior en el documento. 
//       Si bien el analizador del navegador procesa el contenido del elemento <template> mientras carga la página, lo hace solo para asegurarse 
//       de que ese contenido sea válido; sin embargo, el contenido del elemento no se representa.

//       Sintaxis: 

//       La sintaxis de las plantillas HTML, etiqueta <template> tiene este aspecto:
/*
                                          <html>
                                              <template>
                                                  <p>The HTML you wish to instantiate on will</p>
                                              </template>
                                          </html>
*/
/*
         Cuando tienes que reutilizar las mismas estructuras de lenguaje de marcado (codigo HTML de marcado) repetidas veces en una página web, 
         tiene sentido utilizar algún tipo de "plantilla" en lugar de repetir la misma estructura una y otra vez. 
         
         Esto ya era posible hacerlo antes, pero ahora es mucho mas fácil con el elemento HTML <template> (que está bien soportado en los navegadores 
          modernos). 
          
          Este elemento y su contenido, aunque es leido por el navegador, no son renderizados en el DOM, pero pueden ser "referenciados" (y clonados) 
          vía JavaScript, donde se crearan "instancias" posteriores para poder visualizar el contenido del template en el documento.

         Echemos un vistazo a un ejemplo sencillo:

                                                        <template id="my-paragraph">
                                                          <p>Mi párrafo</p>
                                                        </template>

        Esto no aparecerá en tu página hasta que hagas una "referencia - crear una instancia" a él con JavaScript y luego lo agregues 
        al DOM, usando algo parecido a lo siguiente:

                                                        const template = document.getElementById("my-paragraph");
                                                        const templateContent = template.content;
                                                        document.body.appendChild(templateContent);


        6.1.- Atributos y propiedad "content":

              Los únicos atributos estándar que el elemento <template> admite son los atributos globales.

              En los navegadores basados ​​en Chromium, el elemento también admite un atributo <template> no estándar, como parte de una 
              propuesta experimental de "Declarative Shadow DOM". En los navegadores compatibles, el analizador HTML detecta un elemento 
              con el atributo y lo aplica inmediatamente como la raíz oculta de su elemento principal. Puede tomar un valor de o; estos 
              son equivalentes a los valores y de la opción.shadowrootmode<template>shadowrootmodeshadowrootmodeopenclosedopenclosedElement.attachShadow() mode

              Además, la interfaz "HTMLTemplateElement" correspondiente tiene una propiedad "content" estándar (sin un atributo de contenido/marcado 
              equivalente), que es de solo lectura y DocumentFragment contiene el subárbol DOM que representa la plantilla. 
              
              Tenga en cuenta que el uso directo del valor de la propiedad "content" podría provocar un comportamiento inesperado.


              Ejemplos:  primero comenzamos con la parte HTML del ejemplo.

                                                  <table id="producttable">
                                                    <thead>
                                                      <tr>
                                                        <td>UPC_Code</td>
                                                        <td>Product_Name</td>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <!-- existing data could optionally be included here -->
                                                    </tbody>
                                                  </table>

                                                  <template id="productrow">
                                                    <tr>
                                                      <td class="record"></td>
                                                      <td></td>
                                                    </tr>
                                                  </template>


                         Primero, tenemos una "tabla", element <table>, en la que luego insertaremos contenido usando código JavaScript. 
                         Luego viene la plantilla: <template>, que describe la estructura de un fragmento HTML que representa una sola fila de tabla.


              Ahora que se creó la tabla y se definió la plantilla, usamos JavaScript para insertar filas en la tabla, y cada fila se construye 
              utilizando la plantilla como base.

                                                  // Test to see if the browser supports the HTML template element by checking
                                                  // for the presence of the template element's content attribute.

                                                  if ("content" in document.createElement("template")) {
                                                    // Instantiate the table with the existing HTML tbody and the row with the template

                                                    const tbody = document.querySelector("tbody");
                                                    const template = document.querySelector("#productrow");

                                                    // Clone the new row and insert it into the table
                                                    const clone = template.content.cloneNode(true);
                                                    let td = clone.querySelectorAll("td");
                                                    td[0].textContent = "1235646565";
                                                    td[1].textContent = "Stuff";

                                                    tbody.appendChild(clone);

                                                    // Clone the new row and insert it into the table
                                                    const clone2 = template.content.cloneNode(true);
                                                    td = clone2.querySelectorAll("td");
                                                    td[0].textContent = "0384928528";
                                                    td[1].textContent = "Acme Kidney Beans 2";

                                                    tbody.appendChild(clone2);
                                                  } else {
                                                    // Find another way to add the rows to the table because
                                                    // the HTML template element is not supported.
                                                  }


        El resultado es la tabla HTML original, con dos nuevas filas añadidas a través de JavaScript, siguiendo la estructura de contenido definido 
        por el <template>.


    6.2.-  Evitar la trampa de "DocumentFragment".

           A "DocumentFragment" no es un destino válido para varios eventos, por lo que a menudo es preferible clonar o hacer referencia a los 
           elementos que contiene.

           Considere el siguiente HTML y JavaScript:

                                                  <div id="container"></div>

                                                  <template id="template">
                                                    <div>Click me</div>
                                                  </template>

                                                  const container = document.getElementById("container");
                                                  const template = document.getElementById("template");

                                                  function clickHandler(event) {
                                                    event.target.append(" — Clicked this div");
                                                  }

                                                  const firstClone = template.content.cloneNode(true);
                                                  firstClone.addEventListener("click", clickHandler);
                                                  container.appendChild(firstClone);

                                                  const secondClone = template.content.firstElementChild.cloneNode(true);
                                                  secondClone.addEventListener("click", clickHandler);
                                                  container.appendChild(secondClone);


        "firstClone" es una instancia de "DocumentFragment", por lo que, si bien se agrega dentro del contenedor como se esperaba, 
        al hacer clic en él no se activa el evento de clic. "secondClone" es una instancia de HTMLDivElement, al hacer clic en ella 
        funciona como cabría esperar.


      6.3.-  Usando el elemento <template> con "componentes web".

          Las plantillas ("templates") son útiles por si mismas, pero trabajan aún mejor con componentes web. 
          
          Definamos un "componente web" que use nuestra "plantilla - template" como el contenido de su "shadow DOM". Lo nombraremos <my-paragraph>:

                                                  customElements.define(
                                                    "my-paragraph",
                                                    class extends HTMLElement {
                                                      constructor() {
                                                        super();
                                                        let template = document.getElementById("my-paragraph");
                                                        let templateContent = template.content;

                                                        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
                                                          templateContent.cloneNode(true),
                                                        );
                                                      }
                                                    },
                                                  );

El punto clave a tener en cuenta aquí es que agregamos un clon del contenido de la plantilla al shadow root creado usando el método Node.cloneNode().

Y debido a que estamos agregando su contenido a un shadow DOM, podemos incluir cierta información de estilo dentro de la plantilla en un elemento <style>, que luego se encapsula dentro del elemento personalizado. Esto no funcionaría si nosotros solo lo agregásemos al DOM estandar.

Por ejemplo:

html

<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>Mi párrafo</p>
</template>

Ahora podemos usarlo simplemente agregándolo a nuestro documento HTML:

html

<my-paragraph></my-paragraph>

Nota: Las plantillas están bien soportadas en los navegadores: la API del Shadow DOM es compatible por defecto con Firefox (version 63 en adelante), Chrome, Opera y Safari, Edge está trabajando en una implementación.
Añadiendo flexibilidad con el elemento <slot>

Hasta aquí bien, pero el elemento no es muy flexible. Solo podemos mostrar una parte de texto dentro de él, lo que quiere decir que, hasta el momento, es menos útil que un párrafo normal. Podemos mostrar diferente texto en cada instancia de elemento de una forma declarativa agradable usando el elemento <slot>. Este tiene un soporte más limitado que el elemento <template>, disponible desde Chrome 53, Opera 40, Safari 10, Firefox 59, pero aún no disponible en Edge.

Los slots son identificados por su atributo name, y te permiten definir marcadores de posición en tu plantilla que pueden rellenarse con cualquier fragmento de marcado cuando el elemento es usado.

Así que, si queremos agregar un slot dentro de nuestro ejemplo sencillo, podemos actualizar el elemento de párrafo de la plantilla de la siguiente manera:

html

<p><slot name="my-text">Mi texto predeterminado</slot></p>

Si el contenido del slot no está definido cuando el elemento se agrega al marcado, o si el navegador no soporta el elemento slot, <my-paragraph> solo contiene el texto alternativo "Mi texto predeterminado".

Para definir el contenido de un slot, incluimos una estructura HTML dentro del elemento <my-paragraph> con un atributo slot cuyo valor es igual al nombre del slot que queremos rellenar. Al igual que antes, esto puede ser cualquier cosa, por ejemplo:

html

<my-paragraph>
  <span slot="my-text">¡Tengamos un texto diferente!</span>
</my-paragraph>

o

html

<my-paragraph>
  <ul slot="my-text">
    <li>¡Tengamos un texto diferente!</li>
    <li>¡En una lista!</li>
  </ul>
</my-paragraph>

Nota: Los elementos que pueden ser insertados en los slots son conocidos como Slotable (en-US); cuando un elemento ha sido insertado en un slot, se dice que fue eslotado por su término en inglés slotted.

Nota: Un <slot> sin nombre se rellenará con todos los nodos secundarios de nivel superior del elemento personalizado que no tengan el atributo slot. Esto incluye nodos de texto.

Y eso es todo nuestro ejemplo sencillo. Si quieres jugar con él un poco más, puedes encontrarlo en GitHub (también puedes verlo en vivo).
Un ejemplo más completo

Para finalizar el artículo, veamos algo menos trivial.

El siguiente conjunto de fragmentos de código muestra cómo usar <slot> junto con <template> y algo de JavaScript para:

    crear un elemento <element-details> con slots con atributo name en su shadow root (en-US)
    diseñar el elemento <element-details> de forma que, cuando se use en documentos, sea renderizado desde la composición del contenido del elemento junto con el contenido de su shadow root, (en-US) es decir, se utilizan partes del contenido del elemento para rellenar el shadow root (en-US) de los slots con atributo name

Observa que es técnicamente posible usar el elemento <slot> sin un elemento <template>, por ejemplo, dentro de un elemento <div> normal, y aun así tomar ventaja de los indicadores de posición de el elemento <slot> para el contenido del Shadow DOM, y al hacerlo puedes evitar el problema de tener que acceder primero a la propiedad content del elemento de la plantilla y clonarlo. Sin embargo, por lo general, es más práctico agregar slots dentro de un elemento <template>, ya que es poco probable que necesites definir un patrón basado en un elemento ya renderizado.

Además, incluso si no está renderizado, el propósito del contenedor como plantilla debería ser semánticamente más claro cuando se usa el elemento <template>. Además, el elemento <template> puede tener elementos agregados directamente a él, como <td>, que desaparecerían al añadirse a un <div>.

Nota: Puedes encontrar el ejemplo completo en element-details(también lo puedesver en vivo)
Creando una plantilla con algunos elementos <slot>

En primer lugar, usamos el elemento <slot> dentro de un elemento <template> para crear un nuevo fragmento de documento de tipo "element-details-template" que contiene algunos slots con el atributo name:

html

<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name"
          >&lt;<slot name="element-name">NECESITA NOMBRE</slot>&gt;</code
        >
        <i class="desc"><slot name="description">NECESITA DESCRIPCIÓN</slot></i>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Atributos</span></h4>
      <slot name="attributes"><p>Ninguno</p></slot>
    </div>
  </details>
  <hr />
</template>

Ese elemento <template> tiene varias características.

    El <template> tiene un elemento <style> con un conjunto de estilos CSS ajustados al ámbito del fragmento de documento que <template> crea.
    El elemento <template> usa <slot> y su atributo name para hacer tres slots con el atributo name:
        <slot name="element-name">
        <slot name="description">
        <slot name="attributes">
    El elemento <template> envuelve los slots con atributo name dentro de un elemento <details>.

Crear un nuevo elemento <element-details> desde el elemento <template>

A continuación, crearemos un nuevo elemento personalizado llamado <element-details> y usaremos Element.attachShadow para anclarlo, como su shadow root (en-US), a ese fragmento de documento que creamos anteriormente con nuestro elemento <template>. Usa exactamente el mismo patrón que vimos antes en el ejemplo sencillo.

js

customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      var template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);

Usando el elemento <element-details> con slots con el atributo name

Ahora tomaremos el elemento <element-details> para usarlo en nuestro documento.

html

<element-details>
  <span slot="element-name">slot</span>
  <span slot="description"
    >Un marcador de posición dentro de un componente web que los usuarios pueden
    rellenar con su propio marcado, con el efecto de componer diferentes árboles
    DOM juntos.</span
  >
  <dl slot="attributes">
    <dt>name</dt>
    <dd>El atributo name del slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description"
    >Un mecanismo para guardar contenido en el lado cliente que no se renderiza
    cuando la página se carga sino que posteriormente se puede instanciar en
    tiempo de ejecución usando JavaScript.</span
  >
</element-details>

Observa estos puntos sobre el fragmento anterior:

    El fragento tiene dos instancias de elementos <element-details> que usan el atributo slot para referenciar los slots con atributo name "element-name" y "description" que colocamos en el shadow root (en-US) del <element-details>
    Solo el primero de esos dos elementos <element-details> hace referencia a los "attributes" de slot con atributo name.El segundo elemento <element-details> carece de cualquier referencia a "attributes" de slot con atributo name.
    El primer elemento <element-details> está referenciando los "attributes" de slot con atributo name usando un elemento <dl> con <dt> y <dd> como hijos.

Añadamos algunos estilos

Como toque final, añadiremos algunos estilos CSS a los ellementos <dl>, <dt>, y <dd> en el documento:

css

dl {
  margin-left: 6px;
}
dt {
  font-weight: bold;
  color: #217ac0;
  font-size: 110%;
}
dt {
  font-family: Consolas, "Liberation Mono", Courier;
}
dd {
  margin-left: 16px;
}

Resultado

Finalmente, juntemos todos los fragmentos y veamos cómo se ve el resultado renderizado.
Screenshot	Live sample
	

Observa los siguientes puntos del resultado renderizado:

    Aún cuando las instancias del elemento <element-details> en el documento no usan directamente el elemento <details>, se renderizan usando <details> porque el shadow root (en-US) hace que ellos se rellenen.
    En la salida de <details>, el contenido de los elementos <element-details> llena los slots con atributo name desde el shadow root (en-US). En otras palabras, el árbol DOM de los elementos <element-details> se compone junto con el contenido del shadow root (en-US).
    Para ambos elementos <element-details>, un encabezado de Attributes se añade automáticamente desde el shadow root (en-US) antes de la posición "attributes" del slot con atributo name.
    Ya que el primer elemento <element-details> tiene un elemento <dl> que hace referencia explicita al slot con atributo name "attributes" desde su shadow root (en-US), el contenido de ese <dl> reemplaza el slot con atributo name "attributes" desde el shadow root (en-US)
    Ya que el segundo elemento <element-details> no hace referencia explícita al slot con atributo name "attributes" desde su shadow root (en-US), su contenido se rellena con el contenido predeterminado desde el shadow root (en-US).

*/




/*  Nota.-  Insertar contenido en elementos HTML del DOM

            En capítulos anteriores hemos visto formas de crear elementos en el DOM e incluso modificar el contenido de elementos HTML. 
            Aunque mediante propiedades como ".innerHTML" podemos insertar elementos en el DOM de un documento HTML, en muchas ocasiones 
            quizás no es la mejor forma.

            Si tenemos que hacer múltiples inserciones o necesitamos insertar elementos manteniendo intacta la estructura existente 
            (o los listeners de eventos asociados), estaría bien disponer de formas en las que podamos indicar exactamente donde queremos 
            añadir el elemento, de forma más controlada. Y eso es lo que vamos a ver en este artículo.


            Veamos 3 formas (de más tradicional a más moderna) de inserción o modificación de elementos:

                1️⃣ La API de nodos
                2️⃣ La API de elementos
                3️⃣ La API de inserción adyacente

            Puedes usar la que prefieras, que se adapte mejor a tus necesidades.
            
            
          1.-  API de nodos.

               La "API de nodos" de Javascript es la más tradicional y antigua, y aunque cumple bien determinados aspectos, suele ser más 
               complicado llegar al objetivo porque no hay ciertos métodos explícitos para hacer determinadas cosas. No obstante, suele ser 
               la más extendida que te encuentras, ya que ".appendChild()" está muy extendido al ser uno de los más usados:


                      Métodos 	                                  Descripción

                    .appendChild(node) 	                    Añade como hijo el nodo "node". Devuelve el nodo insertado.

                    .removeChild(node) 	                    Elimina y devuelve el nodo hijo "node".

                    .replaceChild(new, old) 	              Reemplaza el nodo hijo "old" por el nuevo node "new". Devuelve old.

                    .insertBefore(new, node) 	              Inserta el nodo "new" antes de "node" y como hijo del nodo actual.

                    .insertBefore(new, null) 	              Inserta el nodo "new" después del último nodo hijo. Equivale a .appendChild().


              De ellos, probablemente el método más extendido y conocido es ".appendChild()". Vamos a analizar cada uno de ellos y ver como 
              podemos utilizarlos.


          1.1.-  El método "element.appendChild(node)"

                Uno de los métodos más comunes para añadir un elemento HTML creado al DOM con Javascript es ".appendChild()". 
                Como su propio nombre indica, este método añade o inserta un nuevo elemento HTML al DOM, como si fuera un hijo al final 
                de todos los hijos del elemento sobre el que se realiza.

                createElement

                Es importante tener claro donde se inserta, porque aunque es bastante común, no siempre querremos insertar el elemento en 
                esa posición particular.


                Observa el siguiente fragmento de código:

                                                            const container = document.querySelector(".container");

                                                            const img = document.createElement("img");
                                                            img.src = "https://lenguajejs.com/assets/logo.svg";
                                                            img.alt = "Logo Javascript";

                                                            container.appendChild(img);

                En este ejemplo, creamos un elemento <img> que aún no está conectado al DOM de la página. Existe sólo en la constante <img>. 
                Posteriormente, añadimos los atributos src y alt y lo conectamos al DOM el elemento usando el método ".appendChild()".

                Donde se insertara??  Se insertará como último hijo del elemento "container", ya que es su comportamiento predefinido.


          1.2.-  El método .removeChild(node).

                En algunos casos, nos puede interesar "eliminar" un nodo hijo de un elemento. Para esas situaciones, podemos utilizar el 
                método: ".removeChild(node)" donde "node" es el nodo hijo que queremos eliminar:

                                                            const container = document.querySelector(".container");
                                                            const secondItem = container.querySelector(".item:nth-child(2)");

                                                            container.removeChild(secondItem); // Desconecta el segundo .item


          1.3.-  El método .replaceChild(new, old)

                De la misma forma, el método replaceChild(new, old) nos permite cambiar un nodo hijo "old" por un nuevo nodo hijo "new". 
                En ambos casos, el método nos devuelve el nodo reemplazado: "old":

                                                            const container = document.querySelector(".container");
                                                            const secondItem = container.querySelector(".item:nth-child(2)");

                                                            const newNode = document.createElement("div");
                                                            newNode.textContent = "DOS";

                                                            container.replaceChild(secondItem, newNode);


          1.4.-  El método .insertBefore(new, node)

                 Por último, el método ".insertBefore(newnode, node)" es un método más específico y menos utilizado en el que se puede 
                 especificar exactamente el lugar a insertar un nodo. El primer parámetro es el nodo a insertar ("newNode"), mientras que 
                 el segundo parámetro puede ser:

                        ► "null" inserta "newnode" después del último nodo hijo. Equivale a .appendChild().
                        ► "node" inserta "newnode" antes de dicho "node" de referencia.

                                                            const container = document.querySelector(".container");
                                                            const secondItem = container.querySelector(".item:nth-child(2)");

                                                            const newNode = document.createElement("div");
                                                            newNode.textContent = "Nuevo elemento";

                                                            container.insertBefore(newNode, secondItem);

                 En este caso, el nuevo elemento aparecería justo antes del segundo item.


    2.-  API de elementos

         Los métodos mencionados con anterioridad sirven en muchos casos, sin embargo, son poco específicos y puede que no cubran todas las 
         posibles situaciones. Existe otra familia de métodos para añadir e insertar elementos que quizás sea mucho más versátil.

         Todos los métodos permiten pasar por parámetro un elemento o una lista de elementos. También puedes pasar un string (para insertar un 
         fragmento de texto). Echemos un vistazo a estos métodos:


                        Métodos 	                                    Descripción

                      .before() 	                                  Añade el nuevo elemento justo antes.
                      .after() 	                                    Añade el nuevo elemento justo después.
                      .prepend() 	                                  Se añade el nuevo elemento antes del primer hijo.
                      .append() 	                                  Se añade el nuevo elemento después del último hijo.
                      .replaceChildren() 	                          Elimina todos los hijos y los sustituye por el nuevo elemento.
                      .replaceWith() 	                              Se sustituye por el nuevo elemento.
                      .remove() 	                                  Elimina el propio elemento.


        Vamos a suponer que estos métodos los vamos a ejecutar en base al elemento "container", por lo que todo se hará respecto a él. 
        Por ejemplo, "container.before()"".


    2.1.-  El método .before() y .after().

          Con el método ".before()" podemos "insertar" uno o varios elementos (nodes) antes del elemento que llama al "before" (en el ejemplo, 
          container). Con el método ".after()" ocurre exactamente lo mismo, pero después del elemento en lugar de antes.

                        const element = document.createElement("div");
                        element.textContent = "Item insertado";

                        // A) Inserta antes de .container
                        container.before(element);

                        // B) Inserta después de .container
                        container.after(element);


  2.2.-  El método .prepend() y .append()

         Con estos dos métodos podemos insertar elementos en sus elementos hijos, al principio o al final. El método ".prepend()" permite insertar 
         uno o varios elementos antes del primer elemento hijo de nuestro elemento base. En el caso de ".append()" ocurre lo mismo, pero después 
         del último elemento hijo:

                      const element = document.createElement("div");
                      element.textContent = "Item insertado";

                      // A) Inserta antes del primer hijo de .container
                      container.prepend(element);

                      // B) Inserta después del último hijo de .container
                      container.append(element);

  2.3.-  El método .append() es equivalente al .appendChild() que vimos más atrás.

  2.4.-  El método .replaceChildren() y .replaceWith()

         Por otro lado, también tenemos los métodos ".replaceChildren()" y ".replaceWith()". El primero de ellos, ".replaceChildren()" 
         permite eliminar todos los elementos hijos del elemento base, y sustituirlos por uno o varios que indiques por parámetro.

         El segundo método, ".replaceWith()", lo que permite es reemplazar el propio elemento base con uno o varios elementos que pasemos 
         por parámetro, por lo que se realiza un reemplazo completo:

                        const element = document.createElement("div");
                        element.textContent = "Nuevo Item hijo";

                        // A) Reemplaza por todos sus hijos
                        container.replaceChildren(element);

                        // B) El container es reemplazado por el nuevo item hijo
                        container.replaceWith(element);


    2.5.-  El método: ".remove()"

           Al igual que podemos insertar o reemplazar elementos, también podemos "eliminarlos". Ten en cuenta que al «eliminar» un nodo o 
           elemento HTML, lo que hacemos realmente no es borrarlo, sino "desconectarlo del DOM" o documento HTML, de modo que no están conectados, 
           pero siguen existiendo.

           El método ".remove()" se encarga de desconectarse del DOM a sí mismo,

                                              const div = document.querySelector(".deleteme");

                                              div.isConnected;    // true
                                              div.remove();
                                              div.isConnected;    // false


           En este caso, lo que hemos hecho es buscar el elemento HTML <div class="deleteme"> en el documento HTML, y desconectarlo de su 
           elemento padre, de forma que dicho elemento pasa a no pertenecer al documento HTML (se desconecta del DOM), pero sigue existiendo 
           en la constante div.


    3.-  API de inserción adyacente.

         Probablemente, una de las APIs de manejo del DOM más desconocidas y más interesantes, es la de "Inserción de elementos adjacentes". 
         Son una familia de 3 métodos que permiten hacer prácticamente cualquier operación posible en el DOM.

                            Métodos 	                                            Descripción
                        .insertAdjacentElement(position, element) 	          Inserta el element en la posición "position". Si falla, null.
                        .insertAdjacentHTML(position, htmlCode) 	            Inserta el código HTML de htmlCode en la posición "position".
                        .insertAdjacentText(position, text) 	                Inserta el texto "text" en la posición "position".


         Los métodos de la familia ".insertAdjacent()" son bastante más versátiles que ".appendChild()", ya que permiten muchas más posibilidades. 
         Tenemos tres versiones diferentes:

                        .insertAdjacentElement() donde insertamos una etiqueta HTML
                        .insertAdjacentHTML() donde insertamos código HTML directamente (similar a innerHTML)
                        .insertAdjacentText() donde insertamos un texto directamente (similar a textContent)

        Ten en cuenta que "position" es un que puede tener uno de los siguientes valores:  beforebegin, afterbegin, beforeend, y afterend


                        Valor 	             Descripción 	                                                       Equivalente a...

                        beforebegin 	    Inserta el elemento antes de la etiqueta HTML de apertura. 	            before()
                        afterbegin 	      Inserta el elemento dentro, antes de su primer hijo. 	                  preprend()
                        beforeend 	      Inserta el elemento dentro, justo antes de la etiqueta HTML de cierre. 	append() o appendChild()
                        afterend 	        Inserta el elemento después de la etiqueta HTML de cierre. 	            after()


        Veamos algunos ejemplo aplicando cada uno de ellos con el método .insertAdjacentElement():

                                              const container = document.querySelector(".container");

                                              // Creamos un nuevo <div>Ejemplo</div>
                                              const div = document.createElement("div");
                                              div.textContent = "Ejemplo";

                                              container.insertAdjacentElement("beforebegin", div);
                                              // A) <div>Ejemplo</div> <div class="container">container</div>

                                              container.insertAdjacentElement("afterbegin", div);
                                              // B) <div class="container"> <div>Ejemplo</div> container</div>

                                              container.insertAdjacentElement("beforeend", div);
                                              // C) <div class="container">container <div>Ejemplo</div> </div>

                                              container.insertAdjacentElement("afterend", div);
                                              // D) <div class="container">App</div> <div>Ejemplo</div>


        Ten en cuenta que en el ejemplo muestro varias opciones alternativas, no lo que ocurriría tras ejecutar las cuatro opciones una detrás 
        de otra.

        Por otro lado, notar que tenemos tres versiones en esta familia de métodos, una que actua sobre elementos HTML (la que hemos visto), 
        pero otras dos que actuan sobre código HTML y sobre nodos de texto. Veamos un ejemplo de cada una:

                                              container.insertAdjacentElement("beforebegin", div);
                                              // A) <div>Ejemplo</div> <div class="container">App</div>

                                              container.insertAdjacentHTML("beforebegin", "<p>Hola</p>");
                                              // B) <p>Hola</p> <div class="container">App</div>

                                              container.insertAdjacentText("beforebegin", "Hola a todos");
                                              // C) Hola a todos <div class="container">App</div>

*/