//  ****  LA FUNCIONALIDAD DE UN COMPONENTE WEB   **************************************************************************************

//  Vamos a analizar las "partes" de un "WebComponent" para comprender mejor su funcionamiento. En principio, la etiqueta de un 
//  "custom element" en un WebComponent no es más que una etiqueta HTML propia, definida por el programador, con algunas reglas 
//  sintaticas (un guion y por lo menos dos palabras en minusculas), que puede tener su propio funcionamiento personalizado asociado, 
//  gestionado por una "clase" en JS que extiende de HTMLElement.

//  SIEMPRE:  al cargar la página, y crearse por primera vez el DOM del documento web, registramos (explicitamente) la clase JS para 
//  el "custom element" en el navegador (en el "registro global de custom elements" del navegador), con una clase JS que representa a  
//  este elemento personalizado asociada a su etiqueta personalizada con el metodo de objeto "customElements":
//    

//                              customElements.define("app-element", AppElement);

//  Todas las etiquetas HTML que utilicen dicho nombre: "app-element", pasan a ser actualizadas como "custom element". Es entonces 
//  donde empiezan a actuar el elemento HTML creado en el "custom element" como componentes Web.


//  1.-  WebComponents: Particularidades propias de un WebComponent
/*
        La clase Javascript asociada a una etiqueta custom element que representa el "WebComponent", tiene una serie de elementos propios 
        de las clases de programación JS: extiende de la clase HTMLElement, tiene un constructor, tiene propiedades - atributos y metodos.

        Sin embargo, también tiene algunas "particularidades" propias de un "WebComponent".


    1.1.-  WebComponente (etiqueta Custom Element).

           Al definir el "WebComponent" como una etiqueta HTML "Custom Element", al igual que cualquier etiqueta HTML, tenemos a 
           nuestra disposición una serie de "características propias" (atributos) de las etiquetas HTML: clase, id, los atributos o los estilos 
           en línea, entre otras:

                                  <app-element id="unique" class="primary" attribute="value"></app-element>


          1.1.1.-  Atributos especificos de un WebComponent.

          Sin embargo, en un "componente web" los "atributos" juegan un papel importantísimo, ya que pueden existir "atributos específicos" con una 
          misión concreta, habitualmente, pasar información de entrada del componente a la lógica del componente en la clase JS.

          Nota: A diferencia de muchos frameworks Javascript, propiedades y atributos son cosas diferentes. El estándar HTML indica que a través 
                de atributos (en el marcado HTML) sólo se puede pasar "información de texto" (un string). Más adelante veremos que las propiedades 
                de Javascript si que pueden almacenar datos más complejos.


          1.1.2.-  Clase del componente web:  "class AppElement extends HTMLElement {}"

          Como habíamos visto hasta el momento, un "componente web" básico (más concretamente, un "custom element") tendría la siguiente 
          estructura, donde el constructor sólo se especifica si tiene lógica en su interior:

                                            class AppElement extends HTMLElement {

                                              constructor() {
                                                super();
                                              }
                                            }

                                            customElements.define("app-element", AppElement);


          Sin embargo, como toda estructura de clase de programación, podemos establecer "miembros":  "propiedades de clase" para guardar 
          información del estado del componente, así como "métodos de clase" (funciones de clase) para separar y dividir correctamente la 
          lógica de nuestra clase (su comportamiento)


          1.1.3.-  Propiedades de un "componente web" (propiedades de la clase)

          En Javascript, las "propiedades o miembros de clase" se añaden en las primeras líneas de codigo de una clase, siendo posible también 
          indicar la "visibilidad" de dichas propiedades. Esto es posible desde Javascript ES2020, donde se introducen estos nuevos cambios: 

          "private class fields".

                                            class AppElement extends HTMLElement {
                                              // Properties - miembros de clase
                                              name = "Manz";
                                              life = 5;
                                              #role = "Developer";  //  propiedad de clase privada

                                              // Methods
                                              constructor() {
                                                super();
                                                this.life = 10;
                                                this.#role = "JS Developer";
                                              }
                                            }


          Las propiedades "name" y "life" son "públicas" (visualizacion "publica", se pueden acceder desde el exterior a ellas), 
          mientras que la propiedad "#role" es "privada", (visualizacion "privada") y solo puede ser accedida dentro del ambito de la clase, 
          y se diferencia con el carácter "#"" antes de su nombre. 
          
          Nota.-  Ten en cuenta que ese carácter "#" forma parte tambien del nombre de la propiedad.

          Nota.-  Antiguamente, la forma de definir "propiedades de clases Javascript - miembros de clase" era simplemente asignándole su valor 
                  desde el constructor (sin definirlas fuera de este método), añadiendo la palabra clave "this" antes del nombre de la propiedad, 
                  la cuál "siempre era pública". Es posible que aún nos encontremos código similar, que no declare las propiedades fuera 
                  del constructor.

                                              constructor () {
                                                super();
                                                this.name = "Manz";
                                                this.life = 10;
                                                this.#role = "JS Developer";
                                              }


          1.1.4.-  Propiedades privadas: "#soyunapropiedadprivada"

          Ten en cuenta que si intentamos acceder desde fuera de la clase a las propiedades públicas, podremos hacerlo sin problemas, mientras que 
          si intentamos acceder a las "propiedades privadas" (propiedades que empiezan e incluyen el "#"), obtendremos un mensaje de error similar 
          al siguiente:

                                           Uncaught SyntaxError: Private field 'role' must be declared in an enclosing class

          Recuerda que también que se puede definir "propiedades estáticas" (static name;), y "propiedades computadas": getters y setters.

          Nota: Las "propiedades privadas" siempre deben declararse en la parte superior de la clase, mientras que las propiedades públicas no es 
                obligatorio que se declaren en dicha zona.


          1.1.4.-  Los "Métodos" del componente web ?=> definen el comportamiento particular del WebComponent.

          De la misma forma que la clase Javascript del "custom element" puede tener "propiedades - atributos", también puede tener "métodos - 
          funciones". Y estos también pueden ser "públicos" o "privados". Siguen la misma mecánica que las propiedades que vimos anteriormente:

                                              class AppElement extends HTMLElement {
                                                name;
                                                #DNI;

                                                constructor() {
                                                  this.name = "Manz";
                                                  this.#DNI = "334005678J"
                                                }

                                                test() {
                                                  console.log("Este método es público.");
                                                }

                                                #privateTest() {
                                                  console.log("Este método es privado.");
                                                }
                                                getDNI() {
                                                  return this.DNI;
                                                }
                                                setDNI(parDNI) {
                                                  this.#DNI = parDNI;
                                                }
                                              }

          En el caso de tener un "custom element", podríamos incluso ejecutar uno de sus métodos de la clase JS asociada (publicos), 
          utilizando un evento:

                                              <app-element onClick="this.test()"></app-element>

          En este caso, "this" hace referencia a la "instancia del elemento componente web", por lo que podríamos aprovechar para ejecutar 
          "métodos públicos". Los "métodos privados" sin embargo, sólo se podrán ejecutar desde el interior de la clase.

          Por su parte, los "métodos estáticos" (static) se podrán ejecutar sin necesidad de crear elementos personalizados (instanciar 
          objetos de la clase), sino ejecutándolos "sobre la clase" (siempre y cuando se tenga acceso a ella de alguna forma - metodos estaticos).

          Recuerda que además, las clases asociadas a WebComponents, al extender de "HTMLElement", poseen una serie de métodos especiales 
          que son llamados automáticamente cuando ocurre algo. Explico más en detalle en el artículo de ciclo de vida de un WebComponent.
*/

//  2.-  El "Ciclo de Vida" de un WebComponent.

//  El "ciclo de vida de "WebComponents" es un "proceso - ciclo - etapas" que integra "todas las fases de vida de un custom element" a lo 
//  largo del desarrollo y la ejecución del componente web. 
//  Los elementos personalizados (componentes web) pueden estar en uno de estos estados y realizar un tiempo de tareas específico en esa 
//  etapa del ciclo de vida.

/*
    Durante la carga de una página y el tiempo en el que la utilizamos, los "WebComponents" pasan por una serie de "fases o etapas", que se 
    conocen como el "ciclo de vida del WebComponent". Conociendo este "ciclo de vida" y las "fases" que lo componen, es mucho más fácil 
    predecir el funcionamiento de los "WebComponents" y trabajar con ellos directamente en la clase JS que esta asociada.

    Estos "estados - fases - tareas del "ciclo de vida" de un componente Web", se plasman mediante funciones "callback", que son de gran ayuda 
    para los desarrolladores web, pues se trata de elementos JavaScript que se ejecutan en el momento en el que los web components pasan por 
    los estados listados a continuación.


    2.1.- Fases del ciclo de vida de un "WebComponent".
    
    Hay "tres fases" dentro de un "ciclo de vida" de un "WebComponent":

      Fase 1: Componente no creado, ni insertado en el DOM (Documento HTML) => esta en el "limbo del programador, solo en la mente del programador.

      Fase 2: Componente creado, pero no insertado en el DOM (Etiqueta HTML) => esta en el "limbo de la memoria, referenciado en memoria.

      Fase 3: Componente creado e insertado en el DOM (Documento HTML) => aqui, en "WebComponent" esta por fin en el DOM, y ademas esta registrado 
                                                                          en el "registro global de custom elements" del navegador.


  || ComponenteWeb NO CREADO NI INSERTADO DOM || => || ComponenteWeb creado en memoria NO INSERTADO DOM || => || Componente Web INSERTADO DOM ||


  Cuando hablamos de el "ciclo de vida" de un "WebComponents", también estamos hablando de cómo estos elementos o componentes web pasan por un 
  "estado específico" dentro de un "ciclo de vida". De esta manera, cada uno de los "estados del ciclo de vida" <<derivan>> en la ejecución de  
  una "función callBack" definida en su interior.

   En el siguiente diagrama se puede ver los saltos de fase utilizando unos "métodos especiales" que existen y podemos utilizar en las 
   clases de los WebComponents:

      CREATE COMPONENT  => document.createElement("app-element") => HTMLElement => constructor() => CustomElement Desconectado  => INSERT INTO DOM

      => connectedCallback() => CustomElement conectado al DOM => MOVE TO OTHER DOCUMENT => adoptedCallBack()

      => CustomElement conectado => REMOVE FROM DOM => disconnectedCallBack()


      WebComponents: Lifecycle Diagram


  El "ciclo de vida" no aparece cuando el usuario interactúa con el "webComponent", sino cuando el "webComponent" se añade y se dispara 
  dentro de un programa de desarrollo web. Así pues, a continuación te traemos las "5" funciones callBack que derivan las distintas 
  etapas - fases del del ciclo de vida del WebComponent: 

  
  1.-  constructor():                      HTMLElement => constructor() => CustomElement Desconectado del DOM

       En primer lugar, encontramos la <<etapa de vida del "constructor">>, que es el momento en el que se "instancia" la clase; esta es la que 
       representa el estado y funcionamiento del el WebComponent. En este caso, el "estado de constructor" aparece cuando utilizamos un 
       WebComponent en el DOM y se instancia. 

       Tiene el mismo proceso que el elemento "new" de una clase en JavaScript.


  2.-  connectedCallbak():                 CustomElement Desconectado  => INSERT INTO DOM => connectedCallback() => CustomElement conectado

      El "estado del ciclo de vida definido por connectedCallback()" aparece cuando el navegador ha conectado el web component con el DOM.  Aqui,
      el WebComponent al final se encuentra conectado al DOM del documento.


  3.-  disconnectedCallback():              CustomElement conectado => REMOVE FROM DOM => disconnectedCallBack()

      A diferencia del anterior, el "estado de disconnectedCallback()" aparece cuando el navegador se ha desconectado del DOM o del árbol DOM.


  4.-  adoptedCallback():                   CustomElement conectado => MOVE TO OTHER DOCUMENT => adoptedCallBack()

      El "estado adoptedCallback()" sucede cuando un WebComponent se mueve de un documento o archivo escrito HTML a otro, como a un archivo iframe. 
      Este es uno de los estados menos frecuentes dentro del desarrollo web con estas herramientas.


  5.-  attributeChangedCallback():

      Este último estado es el de "attributeChangedCallback", que aparece cuando uno de los atributos del web component que se está observando 
      ha cambiado de valor. Si esta propiedad cambia, el web component avisará automaticamente


    Como hemos comentado, estos "métodos especiales" los podemos definir (poner codigo) dentro de la clase del componente asociada, como 
    funciones callBack. Sin embargo, dichos métodos no se llaman manualmente (como los que creamos los desarrolladores), sino que son unos 
    métodos que se "disparan automáticamente" cuando el componente llega a una fase - estado determinado - concreta de su «ciclo de vida».

    Resumen de los métodos callBack de cambio de fases del "ciclo de vida" de un WebComponent:

    Característica 	- metodo de cambio de fase del ciclo de vida                                    ¿Cuándo se ejecuta?

                  constructor() 	=>                                Cuando se crea por primera vez, se instancia, el "custom element" 
                                                                    (instancia de objeto de la clase asociada), y previamente ha sido definido 
                                                                    en el registro global de custom elements del navegador: 
                                                      
                                                                           customElements.define("app-element", AppElement);

                  <<etapa de vida del "constructor">>, que es el momento en el que se "instancia" la clase; esta es la que representa el estado 
                  y funcionamiento del el WebComponent. En este caso, el "estado de constructor" aparece cuando utilizamos un WebComponent en 
                  el DOM y se instancia. 

                  Tiene el mismo proceso que el elemento "new" de una clase en JavaScript.


                  connectedCallback() => 	                          Cuando el "custom element" se ha "insertado" en el documento HTML (DOM).

                  El "estado del ciclo de vida definido por connectedCallback()" aparece cuando el navegador ha conectado el web component 
                  con el DOM del documento.  Aqui, el WebComponent al final se encuentra conectado al DOM del documento.



                  disconnectedCallback() =>                         Cuando el "custom element" se ha eliminado del documento HTML (DOM).

                  El estado de "disconnectedCallback()" aparece cuando el navegador se ha desconectado del DOM o del árbol DOM.



                  adoptedCallback() => 	                            Cuando el "custom element" se ha movido a un nuevo documento (común en iframes).

                  El "estado adoptedCallback()" sucede cuando un WebComponent se mueve de un documento o archivo escrito HTML a otro, como en 
                  un archivo iframe. 

                  Este es uno de los estados menos frecuentes dentro del desarrollo web con estas herramientas.



                  attributeChangedCallback() =>                     Cuando se ha modificado un "atributo observado" del componente. Ver atributos

                  Este último estado es el de "attributeChangedCallback()", que aparece cuando uno de los atributos del WebComponent que se está 
                  observando ha cambiado de valor. Si esta propiedad cambia, el web component avisará automaticamente


    2.1.-  Métodos del "ciclo de vida" de un WebComponent en detalle.

           1.-  Construcción del WebComponent:  constructor() =>    momento en el que se "instancia" la clase asociada al WebComponent.

                Aunque la etiqueta HTML personalizada sea un "custom element", inicialmente el navegador la considera un "HTMLElement", 
                es decir, una etiqueta HTML normal. Si se cumple la condición de que está definida en el "registro global de custom elements 
                del navegador", entonces intentará actualizarla a un "custom element".

                El método "constructor()" de la clase asociada al WebComponent, tiene la misma función que en una clase de programación.
                
                = > Se ejecutará cada vez que se cree un "custom element" particular (se instancia un objeto de la clase asociada al custom element), 
                    y que previamente haya sido definido en el registro global del navegador con customElements.define(). 
                
                Por lo tanto, si escribimos en el documento varias etiquetas de un custom element, se instanciaran tantos "objetos" "custom elements" 
                como veces se hayan escrito estas etiquetas, pues se ejecutará cada vez el constructor() de la clase asociada al WebComponent.


                Nota.-  Esto ocurrirá de "forma automática" si el "custom element" en cuestión se creó después de haber sido registrado mediante 
                        "customElements.define()". En caso contrario, tendremos que hacerlo de forma manual mediante: "customElements.upgrade()". 
                
                
                El objetivo del "constructor" es hacer ciertas tareas de inicialización rápidas o tareas iniciales, como la creación del 
                "Shadow DOM". Es esencial que en el "constructor del componente" se hagan sólo las tareas más prioritarias y ligeras. 
                Como norma general, si es posible aplazar lógica al método: "connectedCallback()" (insercion del custom element en el DOM).

                Nota.-  En el caso de incluir lógica en el constructor que pueda llegar a "modificar el DOM" o los "atributos de un componente", 
                        podría afectar al rendimiento o aparecernos errores como el siguiente:

                                    Uncaught DOMException: Failed to construct 'CustomElement': The result must not have children


           2.-  Inserción en el DOM:  connectedCallback() => el "custom element" se ha "insertado" en el documento HTML (DOM).

                El método "connectedCallback()" es una suerte de "segundo constructor", que se ejecuta cuando el "custom element" es conectado 
                al DOM del documento HTML, es decir, cuando el componente es insertado o añadido al documento HTML. En el momento en que la 
                etiqueta del custom element se inserta en el DOM se ejecuta este callBack.

                Piensa, por ejemplo, que podemos crear un elemento HTML personalizado en una variable, que no esté incluido en el documento HTML:

                                    // Custom Element registrado (el navegador ya lo conoce)
                                    customElements.define("app-element", AppElement);

                                    // Custom Element creado -> Se ejecuta el constructor()
                                    const component = document.createElement("app-element");

                                    // Custom Element añadido al DOM -> Se ejecuta el connectedCallback()
                                    document.body.appendChild(component);


                Esta característica lo hace realmente útil para incluir, por ejemplo, tareas relacionadas con la renderización o dibujo. 
                Por esta razón, también resulta interesante desplazar a este método ciertas tareas que es posible que no lleguen a necesitarse 
                de manera inmediata.

                Nota.-  Ten en cuenta que si un "custom element" es movido a otra parte del DOM, se desconectará y volverá a conectarse al DOM, 
                        pasando por los métodos: "disconnectedCallback()" y "connectedCallback()" correspondientes.


           3.-  Eliminación del DOM:  disconnectedCallback()  =>  el "custom element" se ha eliminado del documento HTML (DOM).

                Por contrapartida al método "connectedCallback()" se tiene un método opuesto o contrario: "disconnectedCallback()". 
                Mientras que el primero es llamado cuando insertas un custom element en el documento HTML (en el DOM), el último es 
                llamado cuando un custom element es "eliminado del DOM" del documento HTML.

                                    // Localizamos un componente en el documento HTML
                                    const element = document.querySelector("app-element");

                                    // Eliminamos el Custom Element -> Se ejecuta "disconnectedCallback()"
                                    element.remove();


                El método "disconnectedCallback()" puede ser realmente útil para realizar tareas importantes de finalización que, de lo contrario, 
                estarían consumiendo recursos respecto a ese elemento.


           4.-  Mover a otro documento:  adoptedCallback()

                El método "adoptedCallback()", de un uso menos frecuente, tiene sentido cuando se trabaja en contextos multidocumento, y se dispara 
                cuando un "custom element" se mueve de un documento HTML a otro documento HTML diferente. 
                
                Para mover un custom element de un documento a otro se utiliza el método:  ".adoptNode()"

                Este método es muy útil cuando se trabaja con elementos <iframe>, por ejemplo.
*/

//  3.-  Eventos en WebComponents.
/*
    Al igual que en cualquier documento web, al crear "WebComponents" nos interesará que estos reaccionen ante ciertas acciones interactivas 
    que el usuario podría realizar, por lo que sería bueno echar un vistazo a las posibilidades que tenemos y las recomendaciones que existen al 
    utilizar "eventos" en componentes nativos.


    3.1.-  WebComponents: Events

          ¿Qué son los eventos? Los eventos son "acciones" que realiza el usuario (consciente o inconscientemente) o el documento, y que como 
          desarrolladores, podemos prever y preparar en el código para saber "gestionarlos" y decirle a nuestra página o aplicación como debe 
          actuar cuando ocurra un "evento" específico.

          Existen tres formas principales de definir y utilizar eventos en nuestro código:

                    Forma 	                                  Ejemplo 	                                Artículo en profundidad

                    Mediante atributos HTML 	          <button onClick="..."></button> 	            Eventos JS desde atributos HTML

                    Mediante propiedades Javascript 	  .onclick = function() { ... } 	              Eventos JS desde propiedades Javascript

                    Mediante addEventListener() 	      .addEventListener("click", ...) 	            Eventos JS desde listeners


          En general, en Javascript se suele utilizar la última forma (con addEventListener()).


          3.1.-  Eventos en WebComponents:  

          Dicho esto, vamos a ver como podríamos utilizar eventos en componentes web, analizando las tres estrategias anteriores, aplicándolo 
          a lo que hemos aprendido de WebComponents, y observando las limitaciones y características de cada estrategia.


          I.-  Usando eventos en las etiquetas HTML:   => mediante atributos HTML 

               Empecemos con la primera forma, gestionando eventos a través de atributos HTML:

                                      <app-element></app-element>

                                      <script>
                                        const sendMessage = () => alert("¡Has hecho click!");

                                        class AppElement extends HTMLElement {
                                          constructor() {
                                            super();
                                            this.attachShadow({ mode: "open" });
                                          }

                                          connectedCallback() {
                                            this.shadowRoot.innerHTML = /* html * /`
                                            <button onClick="sendMessage()">👀 Press me!</button>
                                            `;
                                          }
                                        };

                                        customElements.define("app-element", AppElement);
                                      </script>


               En este ejemplo vemos un componente muy sencillo con el evento aplicado. Sin embargo, hay un problema bastante evidente: 
               la función "sendMessage()" asociada al evento de click del raton que se crea en el "shadow DOM", debe estar en un contexto 
               global, lo que en nuestro ejemplo se traduce como poner la función fuera de la clase del componente.

               Esto no nos interesa, ya que precisamente lo que buscamos es el encapsulamiento (aislamiento)d ela funcionalidad del 
               WebComponent, es decir "modularizar" toda la funcionalidad relacionada del componente en el propio componente, evitando 
               "polucionar" el contexto global.


          II.-  Usando addEventListener / bind:  Mediante addEventListener()

                Vamos a intentar mejorar un poco nuestro ejemplo, utilizando el método "addEventListener" para eliminar las limitaciones 
                que tuvimos en el ejemplo anterior.

                Nota.-  Observa que al igual que añadimos el "listener" en el "connectedCallback()", es una buena práctica eliminarlos en el 
                        "disconnectedCallback()". Esto puede ser necesario o prescindible, dependiendo del uso que se le dé al componente y si 
                        puede llegar a ser eliminado de la página:

                                    <app-element></app-element>

                                    <script>
                                      class AppElement extends HTMLElement {
                                        button;

                                        constructor() {
                                          super();
                                          this.attachShadow({ mode: "open" });
                                        }

                                        sendMessage() {
                                          alert("¡Has hecho click!");
                                        }

                                        connectedCallback() {
                                          this.shadowRoot.innerHTML = "<button type="button">👀 Press me!</button>";
                                          this.button = this.shadowRoot.querySelector("button");
                                          this.button.addEventListener("click", this.sendMessage.bind(this));
                                        }

                                        disconnectedCallback() {
                                          this.button.removeEventListener("click", this.sendMessage.bind(this));
                                        }
                                      };

                                      customElements.define("app-element", AppElement);
                                    </script>


                La cosa se empieza a complicar. Repasemos que hemos hecho:

                  1.-  Encapsulacion de la funcion del evento dentro del componente:  la función "sendMessage" la hemos 
                       colocado dentro del componente, como un método de clase.

                                        sendMessage() {
                                          alert("¡Has hecho click!");
                                        }

                  2.-  Ahora, en el ".innerHTML" del shadow DOM del custom element, que hacíamos antes, solo insertamos 
                       el marcado HTML del botón, sin evento.

                                        connectedCallback() {
                                          this.shadowRoot.innerHTML = "<button type="button">👀 Press me!</button>";
                                        }

                  3.-  La propiedad de clase: "this.button" guardará una referencia al botón que añadimos en el Shadow DOM.

                                        connectedCallback() {
                                          this.button = this.shadowRoot.querySelector("button");
                                        }
    

                  4.-  En el callBack:   connectedCallback(), añadimos un "evento" de tipo "click" con un "addEventListener()" 
                                         que lance el método de clase "sendMessage()"".

                                        connectedCallback() {
                                          this.button.addEventListener("click", this.sendMessage.bind(this));
                                        }


                Quizás, lo más extraño del ejemplo anterior tenga relación con el último punto. Si quieres profundizar en las diferentes 
                formas de escuchar y manejar eventos y ese extraño ".bind()", echa un vistazo al artículo Escuchar y manejar eventos Javascript.


          III.-  Usando addEventListener / arrow

                  Si no nos convence la forma del apartado anterior, podemos utilizar "funciones flecha anónimas", donde nuestro componente 
                  quedaría como se puede ver a continuación:

                                        <app-element></app-element>

                                        <script>
                                          class AppElement extends HTMLElement {
                                            button;

                                            constructor() {
                                              super();
                                              this.attachShadow({ mode: "open" });
                                            }

                                            sendMessage() {
                                              alert("¡Has hecho click!");
                                            }

                                            connectedCallback() {
                                              this.shadowRoot.innerHTML = "<button>👀 Press me!</button>";
                                              this.button = this.shadowRoot.querySelector("button");
                                              this.button.addEventListener("click", () => this.sendMessage());
                                            }

                                            disconnectedCallback() {
                                              /* Ojo, esto no funcionará correctamente * /
                                              this.button.removeEventListener("click", () => this.sendMessage());
                                            }
                                          };

                                          customElements.define("app-element", AppElement);
                                        </script>


                  Observa que el problema de utilizar una función flecha anónima en el ".addEventListener()", es que complica la 
                  posibilidad de poder realizar un ".removeEventListener()", ya que este requiere la misma función que se utilizó 
                  al realizar el ".addEventListener()".

                  No nos sirve volver a definir una nueva función flecha anónima igual a la anterior (seguiría siendo una función diferente 
                  aunque haga lo mismo), sino que tendríamos que guardar la anterior en una propiedad de clase, lo que probablemente iría 
                  complicando demasiado la lógica y puede que a la larga, no nos interese.

                  Nota: Hay que tener mucho cuidado con los eventos cuando reescribimos parte del DOM de nuestro componente, especialmente 
                        cuando utilizamos ".innerHTML". Eventos como "click" o "mousedown" están asociados a los elementos del DOM, por lo 
                        que si los reescribimos perderemos el evento, que ya no estará escuchando en el nuevo elemento del DOM.


          IV.-  El método "mágico" HandleEvent.

                Existe una opción más para gestionar los eventos, que se basa en la función mágica "handleEvent". Con esta forma 
                solucionaríamos todos los problemas mencionados, y permite organizar un poco mejor el código, de forma que sea más 
                mantenible.

                Veamos a continuación como adaptarla a un WebComponent:

                                        <app-element></app-element>

                                        <script>
                                          class AppElement extends HTMLElement {
                                            button;

                                            constructor() {
                                              super();
                                              this.attachShadow({ mode: "open" });
                                            }

                                            handleEvent(event) {
                                              if (event.type === "click")
                                                this.sendMessage();
                                            }

                                            sendMessage() {
                                              alert("¡Has hecho click!");
                                            }

                                            connectedCallback() {
                                              this.shadowRoot.innerHTML = "<button type="button">👀 Press me!</button>";
                                              this.button = this.shadowRoot.querySelector("button");
                                              this.button.addEventListener("click", this);
                                            }

                                            disconnectedCallback() {
                                              this.button.removeEventListener("click", this);
                                            }
                                          };

                                          customElements.define("app-element", AppElement);
                                        </script>


                Observa que en el segundo parámetro del método ".addEventListener()" simplemente colocamos "this" (una referencia al objeto 
                instanciado a partir de la clase). Como es una referencia al objeto, el navegador buscará mágicamente si existe un método 
                llamado: ".handleEvent()" y si existe, procesa el evento con él.

                En dicho método, podemos comprobar el "event.type" (tipo de evento lanzado: click, mousedown, mousemove, etc...) y ejecutar 
                la función que buscamos. De esta forma centralizamos en este método la gestión de las funciones necesarias, por lo que nos 
                quedará todo mucho más organizado.

                Existen algunas librerías externas (de terceros) como lit-html o htm que facilitan la forma en la que trabajamos con el HTML, 
                DOM y eventos en componentes, y pueden hacernos la vida un poco más fácil. Las veremos un poco más adelante.
*/

//  4.-  Registro del Custom Elements.
/*
         Antes de escribir nuestras propias etiquetas HTML personalizadas ("custom elements"), el navegador debe "conocer" la existencia de 
         ese tipo de etiquetas que hayamos definido. No hay "magia", no hay automatismo, el navegador no registra automaticamente las 
         etiquetas que definamos, tenemos que ser nosotros explicitamente el que indiquemos, que etiqueta tiene asociada que clase JS para 
         su funcionamiento.
         
         Tras crear la clase JS del Custom Element, debemos escribir una línea de código adicional para asociar en el registro global de 
         custom elements del navegador, el nombre de la etiqueta HTML personalizada ("custom element") con la clase Javascript que represente 
         la funcionalidad y comportamiento del WebComponent. 

         Se debe por tanto registrar el "custom element" en el "registro global de Custom Elements" (registro global de custom elements).
         
         Dicho código suele ser algo parecido a esto:

                                                    customElements.define("app-element", AppElement);


         El elemento "customElements": "app-element", no es más que una "referencia" al "registro de Custom Elements" (registro global de 
         custom elements) del navegador. Un registro donde se almacenan los tipos de etiquetas HTML personalizadas ("custom elements") para 
         que el navegador las reconozca. 
         

         A través de este "registro global de custom elements" del navegador, podemos realizar varias tareas mediante metodos de la clase
         "customElements":

         4.1.-  Métodos disponibles para trabajar con el "registro de custom elements"

                                    Método 	                                      Descripción

                              .define(name,className) 	                    ".define " (registra) un "custom element" con una clase asociada  
                                                                            en el documento actual (navegador).

                              .get(name) 	                                  Obtiene la clase JS asociada  de un "custom element" definido y 
                                                                            registrado en el registro global del navegador.

                              .whenDefined(name) 	                          Idem, pero resuelve la promesa cuando el "custom element" es definido.

                              .upgrade(node) 	                              Permite actualizar "custom elements" manualmente.


    4.1.-  Definir (registrar) en el navegador (pila - registro global de custom elements) un "Custom Element":  
    
                              window.customElements.define("name-etiqueta", className)

    Como sabe el navegador, que una etiqueta personalizada HTML que hayamos creado, "custom element", esta asociada a una clase JS que define su 
    funcionalidad y comportamiento? Mediante su "registro global de custom elements" del navegador.

    En realidad esto hay que decirselo "explicitamente" al navegador, no es automatico. Como ultima sentencia al definir la clase que define 
    el comportamiento que se desea que tenga el "custom element", se debe escribir una "sentencia de registro" de la nueva etiqueta, indicandole 
    la  clase que define su funcionalidad.

      || este "custom element", tiene asociado esta clase que extiende de HTMLElement || => registro global de custom elements del navegador

                                                    customElement.define("my-etiqueta", MyClass);


    Nota.-  el método "customElements.define()", es un método mediante el cuál se puede establecer una relación entre una etiqueta HTML 
    personalizada (un "custom element") y una clase JS que define la funcionalidad del WebComponent, que debe extender obligatoriamente de 
    "HTMLElement" (o de una clase que extienda de ella):

                                class AppElement extends HTMLElement {
                                  constructor() {
                                    super();
                                  }
                                }

                                customElements.define("app-element", AppElement);


    No debemos olvidarnos de esta última línea, ya que definir la clase no es suficiente para crear (registrar en el navegador) la 
    etiqueta personalizada, hay que asociar la clase con la etiqueta del custon element, para que el navegador pueda entenderlas y 
    aplicarlas correctamente.


    4.2.- Errores que pueden aparecer, al registrar un "custom element" en el "registro global de custom elements" del navegador:

          1.-  Error: Custom Element ya usado.

            Uncaught DOMException: Failed to execute 'define' on 'CustomElementRegistry': the name "app-element" has already been used with 
            this registry.

          Este error parece bastante lógico y nos puede aparecer si intentamos utilizar "diferentes clases" para un mismo "custom element". 
          En el caso de querer dotar de múltiples funcionalidades a un mismo "custom element", lo conveniente quizás sería crear una clase 
          que herede de otras y contenga las funcionalidades buscadas, o crear diferentes "custom elements".


          2.-  Error: Clase ya usada.

            Uncaught DOMException: Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry`.

          Si intentamos utilizar una "misma clase" para varios "custom elements" diferentes obtendremos este problema. En el caso de querer 
          aplicar la misma clase en varios "custom elements" diferentes, nos bastaría con crear una nueva clase que extienda de la que queríamos 
          usar, y así resolver dicha limitación.


    4.3.-   Obtener un Custom Element.

    En la mayoría de los casos, sólo necesitaremos utilizar el metodo ".define()" de "customElements" para registrar los custom elements de la 
    página actual, pero en alguna situación concreta nos puede interesar acceder a "otros" custom elements ya registrados de forma manual. 
    
    Para ello, podemos utilizar el metodo: "customElements.get("app-element")":

                                    class AppElement extends HTMLElement {
                                      /* ... * /
                                    }

                                    customElements.define("app-element", AppElement);

                                    customElements.get("app-element") === AppElement; // true


    Como se puede ver, con el metodo: "customElements.get("app-element")", obtenemos la "clase del custom element asociado" en el registro 
    del navegador.


    4.4.-  ¿Está disponible ya?  => metodo:  "customElements.whenDefined()"  (da una "promise")

    Por otro lado, "customElements.whenDefined()" se podría utilizar para "avisarnos" cuando un "custom element" ha sido definido en el 
    "registro global de custom elements" de nuestra página. 
    
    Es una versión "asíncrona" del método "customElements.get("app-element")" para Custom Elements que aún no han sido definidos. 
    
    Esto puede ser realmente útil si queremos ejecutar acciones específicas sólo cuando un custom element ha sido inicializado.


    Por ejemplo, analicemos el siguiente código:

                                      customElements.whenDefined("app-element")
                                        .then((data) => {
                                            console.log(`El custom element "app-element" con la clase asociada: ${data} ha sido ya definido");
                                        });


    El console.log() se ejecutará cuando la página detecte que el custom element "app-element" ha sido definido y registrado, y ya está disponible 
    en el registro global de "custom elements" de la página. En "data" se devolverá tambien la clase que implementa el Custom Element.


    4.5.-  Actualización manual.  metodo: "customElements.upgrade(element)"

    Por último, tenemos el método: "customElements.upgrade(element)", que se podría utilizar en algunos casos menos frecuentes en los que queramos 
    actualizar un "custom element" de forma "manual".


    Normalmente, los "custom elements" son registrados en el "registro global de custom elements" del navegador al inicio de carga de la página, 
    cuando se crea el DOM, y se definen de forma automática. Sin embargo, podría darse el caso en el que hemos creado una etiqueta HTML personalizada 
    sin conectarla al DOM, y antes de haber definido el "custom element". En ese caso, el elemento personalizado seguiría siendo una etiqueta HTML 
    y no se habría actualizado aún.


    Veámoslo en un ejemplo:

                                      // 1) Creamos en memoria una etiqueta personalizada <app-element>
                                      const element = document.createElement("app-element");

                                      // 2) Posteriormente, definimos el custom element
                                      class AppElement extends HTMLElement { /* ... * / }
                                      customElements.define("app-element", AppElement);

                                      // 3) La etiqueta aún sigue siendo una etiqueta normal
                                      element.constructor === HTMLElement;   // true

                                      // 4) La actualizamos manualmente (HTMLElement -> AppElement)
                                      customElements.upgrade(element);

                                      element.constructor === HTMLElement;   // false
                                      element.constructor === AppElement;    // true

    Estas situaciones pueden ocurrir cuando no se hace el "customElements.define()" inmediatamente, o en situaciones asíncronas donde se 
    crea primero el elemento antes de tener definido y registrado el Custom Element.
*/



//   Notas:  OO en JS

//   1.-  ¿Qué es la orientación a objetos (OO)?
/*
     La "Programación Orientada a Objetos" (POO, o en inglés OOP) es un estilo de programación muy utilizado, donde creas y utilizas "estructuras 
     de datos" de una forma muy similar a la vida real, lo que facilita considerablemente la forma de planificar y preparar el código de tus 
     programas o aplicaciones.

      Una de las partes más complejas cuando estás empezando en el mundo de la programación (o incluso cuando ya llevas tiempo) es a la hora 
      de crear las "estructuras de datos". Con ejemplos sencillos, esto no es un problema, sin embargo, cuando los ejercicios se complican, 
      una buena elección de una "estructura de datos" adecuada puede simplificar mucho el ejercicio, o complicarlo demasiado.


    I.-  Problemas comunes.

    Cuando comenzamos a programar, nuestros ejemplos son bastante sencillos y faciles de controlar y modificar. Sin embargo, a medida que 
    tenemos que programar cosas más complejas, todo se vuelve más complicado de organizar. Uno de los problemas más faciles de observar, es 
    que comenzamos a tener una gran cantidad de variables y funciones, que al estar inconexas en nuestro código, es fácil que al seguir 
    añadiendo más variables y funciones, nuestro código se descontrole y se vuelva muy difícil de entender.

    Por esa razón, necesitamos una forma de "organizar las variables y constantes", las "funciones" y tenerlo todo bien "agrupado", de modo 
    que con el tiempo, sea sencillo de entender, modificar y ampliar. Esa agrupación, en programación, se denomina "Clase".


    II.-  Orientación a objetos.

    El concepto de "orientación a objetos" se ve muy claro cuando tenemos en nuestra mente el concepto de "Clase". Todos los elementos 
    relacionados con esa "Clase" los vamos a incluir en su interior. Por un lado, las variables y constantes que teníamos «sueltas» en 
    nuestro programa, las agruparemos dentro de una "clase", donde también incluiremos todas las "funciones".

    Las "variables y constantes" incluidas en una "clase" se denominan propiedades - atributos de la clase, y se utilizan para guardar 
    información relacionada (se suele denominar "estado" del objeto). Por otro lado, las "funciones" incluidas en una clase se denominan 
    "métodos" y se utilizan para realizar una "acción - comportamiento" relacionada con la "clase".

    Ejemplo:

    Piensa, por ejemplo, en el protagonista (héroe) de un juego. Tiene una serie de variables relacionadas con él (vidas, fuerza, energía, etc...), 
    pero también tiene una serie de "funciones" relacionadas con él (hablar, disparar, curar, etc...). 
    
    Todas ellas, las podríamos agrupar en una "clase" (clase Personaje) porque tienen relación con ese "concepto" de personaje:

                Personaje
                ----------

                - Vidas restantes (propiedad)      # Número de vidas que le quedan al personaje
                - Fuerza (propiedad)               # Número que representa la fuerza del personaje
                - Energía (propiedad)              # Número que representa la energía de la vida actual
                - Velocidad (propiedad)            # Número que representa la velocidad actual del personaje
                - Hablar (método)                  # Función que hará que el personaje diga algo
                - Disparar (método)                # Función que hará que el personaje dispare con su arma
                - Curar (método)                   # Función que hará que el personaje use un botiquín


    Sin embargo, el concepto de "Clase" es un concepto "abstracto". En el juego, por ejemplo, podríamos tener dos héroes que podemos elegir 
    al principio. Ambos héroes tienen los mismos atributos y funciones, pero son dos personajes diferentes. Por esa razón, en la programación 
    orientada a objetos se tiene un concepto llamado "Clase" y otro concepto llamado "Objeto".

    El primero de ellos, la "Clase" se refiere al <<concepto abstracto de personaje>>, mientras que el segundo de ellos, el "objeto" se 
    refiere a un <<elemento particular>>  (personaje particular). Por ejemplo, la clase podría ser "Personaje", mientras que los objetos 
    serían "Mario" y "Luigi", ya que ambos se basan en un "Personaje", pero tienen sus detalles particulares (Mario podría tener más vida, 
    o Luigi más energía, diferentes velocidades, etc...).


    III.-  Similitud con la vida real.

    Además de proveernos una forma de "agrupar y organizar nuestro código" y crear nuevos elementos basados en ellas sin repetirnos, las clases 
    nos ofrecen una forma similar a la vida real de crear "estructuras de datos", que de otra forma podría ser mucho más complejo.

    Si por ejemplo, necesitaramos añadir una variable que indique la velocidad que tiene el personaje, podríamos añadir una propiedad denominada 
    "velocidad" que contenga un valor de "5". Luego, podríamos incluir un método denominado "correr" que cambie esa propiedad velocidad a "10", 
    y un método denominado "caminar" que la vuelva a cambiar a "5".

    Como ves, se trata de una forma que se asemeja bastante al mundo real, y puede ser mucho más sencillo para nosotros crear "estructuras de datos" 
    para nuestros programas porque sólo tenemos que pensar en el elemento en la vida real, e imitarlo al programarlo.

    Todo esto puede complicarse bastante, pero una vez sentadas estas bases, ya podemos comenzar a ver un poco de código para entender como 
    funciona la Programación orientada a objetos en Javascript.

*/

//  2.-  Clases en Javascript.
/*
    Una vez dominamos las bases de la programación y nuestro código va creciendo cada vez más, comprobaremos que las variables y funciones no 
    suelen ser suficiente como para que nuestro código esté bien organizado y los mecanismos que tenemos a nuestro alcance quizás no resultan 
    todo lo prácticos que deberían ser.

    Tradicionalmente, Javascript no soportaba clases de forma nativa, pero en "ECMAScript 2015" se introdujo la posibilidad de usar "clases" 
    simulando como se utilizan en otros lenguajes de programación. Internamente, Javascript traduce estas clases al "sistema basado en prototipos"
    que usa en realidad, sin embargo, los programadores no necesitarán saber como funcionan los "prototipos", sino que les bastará con utilizar 
    las "clases" a modo de azúcar sintáctico, es decir, un sistema que «endulza» la forma de trabajar para que sea más agradable y familiar.


    I.-  ¿Qué es una Clase?

    Como mencionamos en el apartado anterior, una "clase" sólo es una forma de organizar código de forma entendible con el objetivo de simplificar 
    el funcionamiento de nuestro programa. Además, hay que tener en cuenta que las clases son «conceptos abstractos» de los que se pueden 
    crear "objetos" de programación (instancias de la clase), cada uno con sus características concretas.

    Esto puede ser complicado de entender con palabras, pero se ve muy claro con ejemplos.


    II.-  Clases y objetos

    En primer lugar tenemos la "clase". La "clase" es el "concepto abstracto de un objeto", mientras que el "objeto" es el elemento final 
    que se basa en la "clase".

    En el primer ejemplo tenemos dos objetos: pato y ratón. Ambos son "animales", por lo que son objetos que están basados en la clase Animal. 
    Tanto pato como ratón tienen las características que estarán definidas en la clase Animal: color, sonido que emiten, nombre, etc...

    En el segundo ejemplo tenemos dos objetos: seat y opel. Se trata de dos "coches", que son vehículos, puesto que están basados en la 
    clase Vehículo. Cada uno tendrá las características de su clase: color del vehículo, número de ruedas, marca, modelo, etc...

    En el tercer ejemplo tenemos dos objetos: cuadrado y c2. Se trata de dos "formas geométricas", que al igual que los ejemplos anteriores 
    tendrán sus propias características, como por ejemplo el tamaño de sus lados. El elemento cuadrado puede tener un lado de 3 cm y el 
    elemento c2 puede tener un lado de 6 cm.


    III.-  Instanciar una clase.

    Se le llama "instanciar una clase", "crear un objeto" o "crear una instancia" a la acción de "crear un nuevo objeto basado en una 
    clase particular". Esta acción la realizamos a través de la palabra clave "new", seguida del nombre de la clase, la cuál puede tener 
    parámetros, en cuyo caso se controlarían desde un constructor, concepto que veremos más adelante.


    En Javascript, para "instancia una clase", se utiliza una sintaxis muy similar a otros lenguajes como, por ejemplo, Java. Es tan sencillo 
    como escribir lo siguiente:

                                          // Declaración de una clase (de momento, vacía)
                                          class Animal {}

                                          // Crear (instanciar) un objeto basada en una clase
                                          const pato = new Animal();


    El nombre elegido debería hacer referencia a la información que va a contener dicha "clase". Piensa que el objetivo de las clases es almacenar 
    en ella todo lo que tenga relación (en este ejemplo, con los animales).

    Observa que luego creamos una variable "pato" donde hacemos un "new Animal()". Estamos creando un objeto "pato" que es de "tipo Animal", 
    y que contendrá todas las características definidas dentro de la "clase Animal" (de momento, vacía).

    Una norma de estilo en el mundo de la programación es que las clases deben siempre empezar en mayúsculas (nomenclatura llamada PascalCase). 
    Esto nos ayudará a diferenciarlas sólo con leerlas.


    IV.-  Miembros de una clase: propiedades - atributos y metodos.

    Una "clase" tiene diferentes "características" que lo conforman y definen, que generalmente se denominan "miembros", y que normalmente 
    son de dos tipos: "propiedades" y "métodos". Vamos a ir explicándolas detalladamente. Pero primero, una tabla general para verlas en 
    conjunto, con sus tipos:


                      Elemento 	                      Descripción 	                                                        Más información

                      Propiedad 	            Variable que existe dentro de una clase. Puede ser pública o privada. 	  Ver propiedades

                      Propiedad pública 	    Propiedad a la que se puede acceder desde fuera de la clase.

                      Propiedad privada 	    Propiedad a la que no se puede acceder desde fuera de la clase.

                      Propiedad computada 	  Función para acceder a una propiedad con modificaciones (getter/setter).

                      Método 	                Función que existe dentro de una clase. Puede ser pública o privada. 	        Ver métodos

                      Método público 	        Método que se puede ejecutar desde dentro y fuera de la clase.

                      Método privado 	        Método que sólo se puede ejecutar desde dentro de la clase.

                      Constructor 	          Método especial que se ejecuta automáticamente cuando se crea una instancia.

                      Método estático 	      Método que se ejecuta directamente desde la clase, no desde la instancia.

                      Inicializador estático 	Bloque de código que se ejecuta al definir la clase, sin necesidad de instancia.


    Como vemos, todos estas características se dividen en dos grupos:

                      1.-  Las propiedades - atributos de la clase: a grandes rasgos, "variables" dentro de clases.

                      2.-  Los métodos: a grandes rasgos, funciones dentro de clases.


    Un ejemplo sencillo de cada uno:

                                        class Animal {
                                          // Propiedades
                                          name = "Garfield";
                                          type = "cat";
                                          color= "orange";

                                          constructor (name) {
                                            this.name = name;
                                          }

                                          // Métodos
                                          hablar() {
                                            return "Odio los lunes."
                                          }
                                          comer () {
                                            return "Me gusta la Lasaya"
                                          }
                                        }


    En los siguientes capítulos veremos que son exactamente, como se utilizan y que tipos de propiedades y métodos diferentes existen 
    dentro del mundo de la programación orientada a objetos y sus clases.


    V.-  La palabra clave "this".

    Más adelante utilizaremos mucho la palabra clave "this". Esta es una palabra clave que se utiliza mucho dentro de las clases para 
    hacer referencia al "objeto instanciado". Ojo, que hace referencia al objeto instanciado y no a la clase:

                                        class Animal {
                                          name;                 // Propiedad (variable de clase sin valor definido)

                                          constructor(name) {
                                            this.name = name;   // Hacemos referencia a la propiedad "name" del objeto instanciado
                                          }
                                        }


    Observa que la palabra clave "this" no se refiere a la clase Animal exactamente, sino a la variable que utilizamos al instanciarla. 
    Es decir, si hacemos un: const pato = new Animal(), se ejecutaría el constructor y la palabra clave "this" haría referencia al objeto 
    "pato", por lo que "this.name" estaría haciendo referencia a "pato.name".

    Nota.-  Es importante tener mucho cuidado con la palabra clave "this", ya que en muchas situaciones creemos que devuelve una referencia 
            al elemento padre que la contiene, pero en su lugar, devolverá el objeto "Window", ya que se encuentra fuera de una clase o 
            dentro de una función con otro contexto:

                                      function hello() {
                                        return this;
                                      }

                                      hello();                      // Window
                                      const object = { hello }      // Metemos la función dentro del objeto
                                      object.hello() === object;    // true

    En este caso, podemos ver que si ejecutamos la función "hello()" en un contexto global, nos devuelve el padre, es decir, el objeto Window. 
    Sin embargo, si metemos la función "hello()" dentro de un objeto, al ejecutar "object.hello()" nos devuelve el padre, es decir, 
    el propio objeto "object".

    Ten cuidado al utilizar "this". Asegúrate siempre de que "this" tiene el valor que realmente crees que tiene.


    VI.-  Buenas prácticas.

    Veamos una serie de buenas prácticas a la hora de trabajar con clases, antes de profundizar en sus características.

    1.-  Clases en ficheros externos.

    Generalmente, para tener el código lo más organizado posible, las "clases" se suelen almacenar en ficheros individuales, de forma que cada 
    "clase" que creamos, debería estar en un fichero con su mismo nombre:

                                      // Animal.js

                                      export class Animal {
                                        /* Contenido de la clase * /
                                      }


    Luego, si queremos crear objetos basados en esta clase, lo habitual suele ser importar el fichero de la clase en cuestión y crear el objeto 
    a partir de la clase. Algo similar al siguiente fragmento de código:

                                      // index.js

                                      import { Animal } from "./Animal.js";

                                      const pato = new Animal();


    Si nuestra aplicación se complica mucho, podríamos comenzar a crear carpetas para organizar mejor aún nuestros ficheros de "clases", 
    y por ejemplo, tener la clase "Animal.js" dentro de una carpeta "classes" (o algo similar). Esto nos brindaría una mejor experiencia 
    de desarrollo, pero el nombre de las carpetas o su organización ya dependería del desarrollador o del equipo de desarrollo.


    2.-  Nombrado de miembros - propiedades - atributos.

    En los próximos capítulos ya profundizaremos en las propiedades y los métodos de una clase, pero una buena práctica para no confundirnos 
    a la hora de utilizarlos, es a la hora de ponerles nombres. Es muy aconsejable que las "propiedades" de una clase tengan nombre de 
    "sustantivos" (son elementos, valores, ítems...), mientras que los "métodos" de una clase deberían tener nombre de "verbos" (son acciones, 
    operaciones, etc...).


    Otro buen consejo, mucho más general, es que intentes escribir código en inglés, ya que eso hará que el código que hagas sea mucho más 
    universal, y sea más fácil de modificar por otras personas.


    3.-  Clases con pocas líneas.

    Otro consejo interesante a la hora de trabajar con clases sería intentar que las clases se mantengan "pequeñas", con pocas líneas de código. 
    El número de líneas de código ideal es difícil de saber, pero un buen número, por ejemplo, podría ser entre 100-500 líneas de código, 
    como menciona la regla max-lines de la herramienta de revisión de código ESLint.


    Si descuidamos la cantidad de líneas de código por fichero al programar, es muy probable que con el tiempo la clase (o el fichero) vaya 
    creciendo en líneas y se vuelva muy dificil de mantener y modificar.

    Para evitar esto, lo ideal siempre es mantener, siempre que sea posible, un número bajo de líneas de código, y si la clase se está haciendo 
    muy grande, intentar dividirla en varias clases. Es decir, buscar una serie de criterios para poder refactorizar y separar ciertos detalles 
    en una nueva clase:


                                Personaje.js                        Personaje.js                  Vida.js
                                -------------                       -------------                 --------

                                - Vidas restantes (propiedad)       - Vida (propiedad) ------->   - Vidas restantes (propiedad)
                                - Fuerza (propiedad)                - Fuerza (propiedad)          - Energía (propiedad)
                                - Energía (propiedad)               - Hablar (método)             - Curar (método)
                                - Velocidad (propiedad)             - Disparar (método)
                                - Hablar (método)
                                - Disparar (método)
                                - Curar (método)

    En este ejemplo, hemos separado en una nueva clase "Vida" en el fichero "Vida.js", los conceptos <<Vidas restantes, Energía y Curar>> 
    ya que tienen relación entre sí (hacen referencia a la vida del personaje), de modo que ahora en la clase "Personaje" simplemente tenemos 
    una propiedad que hace referencia a un "objeto" de esa clase Vida, con sus valores particulares.

    Esto hará que, si el fichero "Personaje.js" ocupaba demasiadas líneas, consigamos reducirlas, puesto que hemos movido parte de su código 
    a otro fichero, y de paso hemos mejorado mucho nuestro código, ya que ahora está separado en temas más específicos, que son más pequeños 
    y más fáciles de controlar.

*/

//  3.-  Propiedades de clase.
/*
     Hasta ahora, hemos hablado de "Programación Orientada a Objetos" (OOP) y del concepto de "clase" dentro de este estilo de programación. 
     Sin embargo, tenemos que profundizar en los "miembros de clase", que a grandes rasgos son "propiedades" y "métodos". 
     

    I.-  ¿Qué es una propiedad de clase?

    Las clases, siendo estructuras de datos para guardar y almacenar información, tienen unas "variables - constantes" que viven dentro de ellas. 
    Estas "variables - constantes" se denominan "propiedades - atributos" o "propiedades de clase", ydefinen el "estado" del objeto instanciado 
    en una clase. Desde ECMAScript 2020 para crearlas se hace de la siguiente forma:

                                class Personaje {
                                  name;                 // Propiedad publica sin definir (undefined)
                                  type = "Player";      // Propiedad publica definida
                                  lifes = 5;            // Propiedad publica definida con 5 vidas restantes
                                  energy = 10;          // Propiedad publica definida con 10 puntos de energía
                                }

    Tradicionalmente en Javascript, las propiedades se acostumbraban a definirse a través del "constructor", mediante la palabra clave "this", 
    por lo que es muy probable que también te las encuentres declaradas de esta forma, es decir dentro del constructor:

                                class Personaje {
                                  constructor() {
                                    this.name;                 // Propiedad sin definir (undefined)
                                    this.type = "Player";      // Propiedad definida
                                    this.lifes = 5;            // Propiedad definida con 5 vidas restantes
                                    this.energy = 10;          // Propiedad definida con 10 puntos de energía
                                  }
                                }


    Puesto que se trata de "propiedades - atributos de clase" y el "constructor()" de una clase es un método especial que se ejecuta cuando 
    se crea un objeto (instancia de clase), ambas son equivalentes, ya que al crear un objeto se ejecutará el constructor y se crearán esas 
    propiedades inmediatamente.

    A la hora de utilizarlas, simplemente accedemos a ellas de la misma forma que vimos en el último ejemplo, haciendo uso de la palabra 
    clave "this". 
    
    Veamos un ejemplo un poco más elaborado, utilizando propiedades y métodos:

                                class Personaje {
                                  name;                 // Propiedad sin definir (undefined)
                                  type = "Player";      // Propiedad definida
                                  lifes = 5;            // Propiedad definida con 5 vidas restantes
                                  energy = 10;          // Propiedad definida con 10 puntos de energía

                                  constructor(name) {
                                    this.name = name;   // Modificamos el valor de la propiedad name
                                    console.log(`¡Bienvenido/a, ${this.name}!`);  // Accedemos al valor actual de la propiedad name
                                  }
                                }

                                const mario = new Personaje("Mario");   // '¡Bienvenido/a, Mario!'


    Como se puede ver, estas propiedades "existen en la clase", y se puede establecer de forma que todos los objetos tengan el mismo valor, 
    o como en el ejemplo anterior, tengan valores diferentes dependiendo del objeto en cuestión, pasándole los valores específicos por parámetro.


    II.-  Visibilidad de propiedades.

    Observa que, las "propiedades de clase" siempre van a tener una "visibilidad específica", que puede ser "pública" (por defecto) o "privada". 
    En el primer caso, las propiedades pueden ser leídas o modificadas tanto desde dentro de la clase como desde fuera, en el segundo caso, 
    sólo pueden ser leídas o modificadas desde el interior de la clase.


                      Nombre 	                      Sintaxis 	                Descripción

                    Propiedad pública 	       name o this.name 	      Se puede acceder a la propiedad desde dentro y fuera de la clase.

                    Propiedad privada          #name o this.#name 	    Se puede acceder a la propiedad sólo desde dentro de la clase.


    Vamos a echar un vistazo a un ejemplo para entenderlo mejor.


    III.-  Propiedades públicas.

    Por defecto, las propiedades en las clases son "públicas". Observa que siempre vamos a poder acceder a las propiedades desde el constructor 
    u otros métodos (dentro de la clase), ya sean propiedades públicas o privadas:

                                          class Personaje {
                                            name;
                                            energy = 10;

                                            constructor(name) {
                                              this.name = name;
                                            }
                                          }

                                          const mario = new Personaje("Mario");     // { name: "Mario", energy: 10 }
                                          mario.name;                               // "Mario" (se puede acceder desde fuera)
                                          mario.name = "Evil Mario";
                                          mario.name;                               // "Evil Mario" (se ha modificado desde fuera)


    Observa también que en las últimas líneas, accedemos a la propiedad "name" desde fuera de la clase y la modificamos. Esto ocurre porque 
    es una propiedad "pública", y es posible hacerlo.


    IV.-  Propiedades privadas.

    A partir de la versión "ECMAScript ES2020", se introduce la posibilidad de crear "propiedades de clase privadas". Por defecto, todas 
    las propiedades y métodos son públicos, sin embargo, si añadimos el carácter "#"" justo antes del nombre de la propiedad (o metodo), 
    se tratará de una propiedad (o metodo) privada:

                                          class Personaje {
                                            #name;
                                            energy = 10;

                                            constructor(name) {
                                              this.#name = name;
                                            }
                                          }

                                          const mario = new Personaje("Mario");     // { name: "Mario", energy: 10 }

                                          // Es incorrecto, el nombre correcto de la propiedad es #name
                                          mario.name; // undefined

                                        // Los dos siguientes dan el mismo error (no se puede acceder a la propiedad privada)
                                        // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
                                        mario.#name;
                                        mario.#name = "Evil Mario";

                                        // Lo siguiente funcionará, pero ha creado otra propiedad 'name' que no es la misma que '#name'
                                        mario.name = "Evil Mario";


    Como se puede ver, las propiedades precedidas del carácter "#2 son automáticamente "privadas" y sólo se podrá acceder a ellas desde 
    un método de clase, ya que si se hace desde fuera obtendremos un error similar al siguiente:

                              Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class


    Sin embargo, si se llama a un "método público", que a su vez accede a la "propiedad privada" mediante: "this.#name" todo funcionará 
    correctamente, ya que ese método público si es accesible desde fuera de la clase y la propiedad privada si es accesible desde dentro 
    de la clase.


    V.-  Ámbitos de propiedades de clase.

    Dentro de una clase tenemos "dos tipos de ámbitos": "ámbito de método" y "ámbito de clase". 
    
    En primer lugar, veamos el "ámbito dentro de un método". Si declaramos propiedades dentro de un método, con let o const, estos 
    elementos existirán sólo en el método en cuestión. Además, NO serán accesibles desde fuera del método:

                                          class Personaje {
                                            constructor() {
                                              const name = "Manz";
                                              console.log("Constructor: " + name);
                                            }

                                            method() {
                                              console.log("Método: " + name);
                                            }
                                          }

                                          const c = new Personaje(); // 'Constructor: Manz'

                                          c.name;       // undefined
                                          c.method();   // 'Método: '


    Observa que la variable "name" solo se muestra cuando se hace referencia a ella dentro del metodo constructor(), que es donde se creó, 
    y el ámbito donde existe (ambito de metodo).


    En segundo lugar, tenemos el "ámbito de clase". Si creamos propiedades de las dos formas que vimos al principio del artículo:

                              Precedidas por this. desde dentro del constructor
                              Al inicio de la clase, fuera del constructor  => "ECMAScript ES2020"

    En cualquiera de estos dos casos, las propiedades tendrán "alcance en toda la clase", por lo que podremos acceder a ellas tanto desde 
    el constructor, como desde otros métodos de la clase:

                                          class Personaje {
                                            name = "Manz";           // ES2020+

                                            constructor() {
                                              this.name = "Manz";    // ES2015+
                                              console.log("Constructor: " + this.name);
                                            }

                                            metodo() {
                                              console.log("Método: " + this.name);
                                            }
                                          }

                                          const c = new Clase(); // 'Constructor: Manz'

                                          c.name;     // 'Manz'
                                          c.metodo(); // 'Método: Manz'

    Nota.-  Propiedades de clase privadas: recuerda que si quieres evitar que estas "propiedades de clase" se puedan modificar desde 
            fuera de la clase, añade el "#" antes del nombre de la propiedad al declararla. De esta forma serán propiedades privadas, 
            y sólo se podrá acceder a ellas desde el interior de los métodos de la clase.


    VI.-  Propiedades computadas.

    En algunos casos nos puede interesar utilizar lo que se llaman "propiedades computadas". Las "propiedades computadas" son un tipo 
    de propiedad especial que se declara como una función, y que se ejecuta cuando accedemos a la propiedad con dicho nombre. 
    
    Hay dos tipos de propiedades computadas, los "getters" y los "setters".


    1.-  Propiedades get (getters)

    Veamos el primer caso, la "propiedad computada get" o también llamada "getter". Para definirla, simplemente añadimos la palabra clave 
    "get" antes del nombre de la función - metodo de la clase. De resto, se define exactamente igual que una función:

                                        class Personaje {
                                          name;
                                          energy;

                                          constructor(name, energy = 10) {
                                            this.name = name;
                                            this.energy = energy;
                                          }

                                          get status() {
                                            return '⭐'.repeat(this.energy);
                                          }
                                        }

                                        const mario = new Personaje("Mario");
                                        mario.energy    // 10
                                        mario.status    // '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐'


    Observa que aunque la definimos como una función "status()"", luego "accedemos a ella como una propiedad", mario.status. 
    Por eso se llama "propiedad computada". La idea de este tipo de propiedades, es permitir pequeñas modificaciones sobre propiedades 
    ya existentes (en nuestro caso, energy). En lugar de devolver el valor numérico, devolvemos el número de estrellas que representa 
    la vida del personaje.

    Nota.-  Ten mucho cuidado con acceder a la misma propiedad definida desde dentro del "get". Si dentro del get "status()" accedes 
            a "this.status", se produciría un bucle infinito que podría bloquear el navegador.


    2.-  Propiedades set (setters).

    De la misma forma que podemos crear un "get" para obtener un valor, podemos utilizar un "set" para establecerlo. 
    
    La idea es exactamente la misma, pero para modificar el valor. En este caso, el ejemplo no es tan didáctico, pero vamos a dar la 
    funcionalidad inversa. Si establecemos un número de estrellas a "status", las cuenta y asigna el número a "energy":

                                        class Personaje {
                                          name;
                                          energy;

                                          constructor(name, energy = 10) {
                                            this.name = name;
                                            this.energy = energy;
                                          }

                                          get status() {
                                            return '⭐'.repeat(this.energy);
                                          }

                                          set status(stars) {
                                            this.energy = stars.length;
                                          }
                                        }

                                        const mario = new Personaje("Mario");
                                        mario.energy    // 10
                                        mario.status = '⭐⭐⭐'
                                        mario.energy    // 3
                                        mario.status    // '⭐⭐⭐'

    Observa que ahora la "magia" está en el "set status(stars)". Se comporta como una "función", y al asignar "tres estrellas" 
    a "mario.status", automágicamente se ha cambiado el valor de "mario.energy". 
    
    Estas propiedades computadas nos pueden venir muy bien cuando queramos modificar ligeramente ciertos elementos de una forma automática 
    y organizada.

*/

//  4.-  Métodos de clase.
/*
     Simplificando mucho, un método es el nombre que recibe una función que existe dentro de una clase. Se utilizan para englobar "comportamientos" 
     o funcionalidades relacionadas en conjunto con la clase, y mediante las cuales podemos segmentar y separar en bloques de código.

     Por ejemplo, en el siguiente fragmento de código definimos una constante "text" que contiene el valor: "Manz". En la siguiente línea, ejecutamos 
     el método ".repeat()", que es una función que pertenece a todos los objetos que son definidos como "string", y que simplemente repite el texto 
     el número de veces que le pasamos por parámetro:

                                      const text = "Manz";
                                      text.repeat(3);     // "ManzManzManz"

     Cada variable de un determinado tipo de dato, tiene métodos asociados a dicho tipo de dato, los puedes ver muy claramente en la CheatSheet de 
     Javascript. Los objetos de tipo "string" tienen sus propios métodos, los objetos de tipo "number" tienen los suyos, etc...


    I.-  ¿Qué es un método?  Funcion de una clase que define un comportamiento de la misma.

         En nuestro caso, hablamos de "métodos" cuando nos referimos a "funciones" que existen en el interior de una clase. 
         
         Observa el siguiente ejemplo, donde tenemos una función independiente:

                                      function hablar() {
                                        return "Hola";
                                      }

        Esta función no está asociada a ningún otro elemento. Simplemente existe en el ámbito global de nuestro programa. Vamos ahora a convertirla 
        en un "método" de la clase "Animal" (y por lo tanto, devolver en ella algo más acorde):

                                    // Forma corta (recomendado)
                                    class Animal {
                                      hablar() {
                                        return "Cuak";
                                      }
                                    }

        Observa que esto no es más una forma de incluir la función anterior dentro de nuestra clase "Animal". Realmente, podríamos también hacerlo 
        de la siguiente forma, sin embargo, la anterior es mucho más compacta y sencilla, por lo que es la que más se suele utilizar, pero quizás 
        con esta te resulte más claro lo que se está haciendo dentro de la clase:

                                    // Forma larga
                                    class Animal {
                                      hablar = function() {
                                        return "Cuak";
                                      }
                                    }


        Una vez declarado el método "hablar()" dentro de la clase "Animal", podemos instanciar un objeto mediante un "new Animal()" y tener ese 
        método disponible. Ten en cuenta que podemos crear varias variables - objetos - instancias de tipo "Animal" y serán totalmente 
        independientes una de la otra:

                                    // Creación de una instancia u objeto (pato)
                                    const pato = new Animal();
                                    pato.hablar(); // 'Cuak'

                                    // Creación de otra instancia u objeto (donald)
                                    const donald = new Animal();
                                    donald.hablar(); // 'Cuak'

        Observa que el método "hablar()"" existe tanto en las variables - instancias "pato" como "donald", porque ambas son de tipo Animal. 
        Al igual que ocurre con una función normal, se le pueden pasar varios parámetros al método y trabajar con ellos como venimos haciendo 
        normalmente con las funciones.

                                    class Animal {
                                      #tipo

                                      constructor (tipo) {
                                        this.tipo = tipo
                                        console.log("Soy un:  " + this.tipo)
                                      }

                                      hablar () {
                                        switch(this.tipo) {
                                            case "pato":
                                              return "Cuak, cuak"
                                            case "perro":
                                              return "Guau, guau"
                                            case "gato":
                                              return "Miau, miau"
                                            case "vaca":
                                              return "Muuu, muuu"
                                            default:
                                              return "No tengo ese animal para hablar"
                                      }
                                    }

                                    const patito = new Animal("pato");
                                    const perrito = new Animal("perro");
                                    const gatito = new Animal("gato");
                                    const vaca = new Animal("vaca");

                                    perrito.hablar(); //  "Guau, guau"
                                    vaca.hablar();  //  "Muuu, muuu"


    II.-  Constructor de clase.

    Se le llama "constructor" a un "método de clase especial", que se ejecuta automáticamente cuando se hace un "new" de dicha clase 
    (es decir, al instanciar un objeto de esa clase). Una clase solo puede tener un constructor, y en el caso de que no se especifique 
    un constructor a una clase, tendrá uno vacío de forma implícita.

    Veamos el ejemplo anterior, donde añadiremos un constructor a la clase:

                                    class Animal {
                                      constructor() {
                                        console.log("Ha nacido un pato. 🦆");
                                      }

                                      hablar() {
                                        return "Cuak";
                                      }
                                    }

                                    // Creación de instancia/objeto
                                    const pato = new Animal();  // "Ha nacido un pato. 🦆" (Se ha ejecutado implicitamente el constructor)
                                    pato.hablar();              // 'Cuak' (Se ha ejecutado explícitamente el método hablar)


    El "constructor" es un mecanismo muy interesante y utilizado para tareas de inicialización o que quieres realizar tras haber creado 
    el nuevo objeto por primera vez. Otros lenguajes de programación tienen concepto de "destructor" (el opuesto al constructor), sin embargo, 
    en Javascript no existe este concepto.


    III.-  ¿Qué es un método estático?

    En el caso anterior, al utilizar un método como por ejemplo "hablar()", debemos crear el objeto basado en la clase haciendo un "new Animal()"". 
    Es lo que se denomina crear - instanciar un objeto, crear una instancia de clase o instanciar un objeto.

    Sin embargo, nos podría interesar crear "métodos estáticos" en una clase, ya que este tipo de métodos no requieren crear una instancia, sino 
    que se pueden ejecutar directamente sobre la clase:

                                    class Animal {
                                      static despedirse() {
                                        return "Adiós";
                                      }

                                      hablar() {
                                        return "Cuak";
                                      }
                                    }

                                    Animal.despedirse();        // Método estático (no requiere instancia): 'Adiós'
                                    Animal.hablar();            // Uncaught TypeError: Animal.hablar is not a function

                                    const pato = new Animal();  // Creamos una instancia

                                    pato.despedirse();          // Uncaught TypeError: pato.despedirse is not a function
                                    pato.hablar();              // Método no estático (requiere instancia): 'Cuak'


    Nota.-  Como veremos más adelante, lo habitual suele ser utilizar métodos normales (no estáticos), ya que normalmente nos suele interesar crear 
            múltiples objetos y guardar información (estado) en cada uno de ellos, y para eso necesitaríamos instanciar un objeto.


    Nota.-  Una de las limitaciones de los "métodos estáticos" es que en su interior sólo podremos hacer referencia a elementos que también sean 
            estáticos. No podremos acceder a propiedades o métodos no estáticos.

    Los métodos estáticos se suelen utilizar para crear "funciones de apoyo", que realicen tareas genéricas que no necesiten estado de la clase, 
    pero siguen estando relacionadas con la clase y no queremos mantenerlas separadas.


    IV.-  Inicialización estática.  Bloque estatico.

    Una reciente característica denominada "Class static initialization blocks" nos permite ejecutar un bloque de código de forma muy similar a 
    una especie de constructor estático.

    La diferencia radica en que, mientras el "constructor" se ejecuta cuando se crea el objeto por primera vez(se crea una instancia de clase), 
    el "bloque estático" "static {}"" se ejecuta nada más declarar la clase (antes de la instancia), por lo que puede ser realmente útil para realizar 
    tareas de inicialización donde no necesitas la instancia del objeto, o previas al constructor:

                                    class Animal {
                                      static {
                                        console.log("Bloque inicializado");
                                      }

                                      constructor() {
                                        console.log("Constructor ejecutado");
                                      }
                                    }
                                    // <-- Aquí nos aparece "Bloque inicializado"

                                    const pato = new Animal();   // <-- Tras el new Animal(), aparece "Constructor ejecutado"

    Ten en cuenta que desde el "bloque static {}" tendrás acceso a propiedades estáticas, pero no a propiedades de clase 
    (necesitan instancia de clase). Por otro lado, desde el constructor() podrás acceder tanto a las propiedades de clase como a las 
    propiedades estáticas.


    V.-  Visibilidad de métodos.

    Al igual que ocurre con las "propiedades de clase" (atributos o propiedades de una clase), los "métodos de una clase" tienen una 
    visibilidad específica que por defecto es "pública". Esto es, los métodos son accesibles tanto desde fuera de la clase como desde dentro.


                                  Nombre 	               Sintaxis 	                      Descripción
                                  Método público 	    name() o this.name() 	        Se puede acceder al método desde dentro y fuera de la clase.

                                  Método privado 	    #name() o this.#name() 	      Se puede acceder al método sólo desde dentro de la clase.


    Veamos un ejemplo de cada caso.

    1.-  Métodos públicos

         Por norma general, los métodos de una clase son públicos, por lo que podemos acceder tanto desde dentro de la clase como desde fuera. 
         Observa que desde el constructor estamos accediendo a "hablar()" desde dentro de la clase y al crear el objeto, se llamará a ese método:

                                  class Personaje {
                                    name = "Mario";

                                    constructor() {
                                      this.hablar();
                                    }

                                    hablar() {
                                      console.log("It's me, Mario!");
                                    }
                                  }

                                  const mario = new Personaje();      // It's me, Mario! (se ha accedido a hablar() desde dentro de la clase)
                                  mario.hablar();                     // It's me, Mario! (se ha accedido a hablar() desde fuera de la clase)

         Por otro lado, al llamar a "mario.hablar()", se puede ver que se permite acceder desde fuera de la clase.


    2.-  Métodos privados.

    ¿Qué es lo que ocurre si definimos el método "hablar()" como un "método privado"? Para ello, simplemente le añadimos el símbolo "#"" antes 
    del nombre, asegurándonos también de incluirlo en las llamadas al método. Quedaría algo así:

                                  class Personaje {
                                    name = "Mario";

                                    constructor() {
                                      this.#hablar();
                                    }

                                    #hablar() {
                                      console.log("It's me, Mario!");
                                    }
                                  }

                                  const mario = new Personaje();      // It's me, Mario! (se ha accedido a #hablar() desde dentro de la clase)

                                  // Da error, no se permite acceder a un método privado desde fuera de la clase
                                  // Uncaught SyntaxError: Private field '#hablar' must be declared in an enclosing class
                                  mario.#hablar();

                                  // Da error, el método hablar() no existe, ya que el nombre del método es #hablar()
                                  // Uncaught TypeError: mario.hablar is not a function
                                  mario.hablar();

    Como se puede contemplar, en el caso de definir el "método privado", no es posible ejecutarlo desde fuera de una clase, salvo que lo hagamos 
    a través de un método público que llame internamente al método privado.

*/

//  5.-  Herencia de Clases
/*
    A medida que trabajamos con Clases y objetos en nuestro código, una de las características fundamentales que nos ayudan a reutilizar y 
    simplificar código es la "herencia de Clases". Con esta característica podemos establecer una jerarquía de elementos y reutilizar código 
    según en que nivel se encuentre cada elemento.


    I.-  ¿Qué es la herencia de clases?

    A grandes rasgos, se puede denominar "herencia de clases" a la característica donde una "clase hija" obtiene todas las propiedades y métodos 
    de una "clase padre" porque se ha establecido una relación entre ambas. Esa relación se establece a través de la palabra clave "extends", 
    como veremos más adelante.

    Por ejemplo, tomemos el caso del capítulo anterior donde teníamos formas geométricas para trabajar con él. Observa que en primer lugar tenemos 
    una "clase padre" llamada "Forma" que representa una forma geométrica abstracta. Dicha forma geométrica tendrá las características comunes a 
    todos los elementos inferiores (el color, grosor del borde, etc...):

    Herencia  =>  Luego, tenemos varias "clases" más concretas denominadas "clases hijas": Cuadrado, Circulo y Triangulo. Dichas clases tendrán 
                  las características propias que necesitará cada una de ellas:

                            El Cuadrado tendrá una propiedad que será lado.
                            El Círculo tendrá una propiedad radio y otra diametro.
                            El Triángulo tendrá una propiedad base y otra altura.

    Además, estas clases "heredan todas las características comunes de su padre", en este caso de la clase "Forma". Así, finalmente tendremos 
    una jerarquía de clases que se basa en clases anteriores heredadas.

    Por ejemplo, en el primer caso, los elementos c1 y c2 son cuadrados, objetos generados (instanciados) a partir de la clase "Cuadrado", que 
    tienen cada uno una propiedad "lado", definida en "Cuadrado", y además heredan propiedades comunes de la clase Forma, como "color". 
    De la misma forma, ocurrirá con el resto de elementos.


    II  Extender una clase.

    En Javascript, a partir de "ECMAScript ES2015, podemos «extender clases» de forma muy similar a como se hace en otros lenguajes de programación. 
    Vamos a pasar a código el ejemplo anterior, utilizando "herencia". Observa que en la "clase hija" se utiliza la palabra clave "extends" seguida 
    de la clase padre que va a heredar:

                                // Clase padre
                                class Forma {
                                  constructor() {
                                    console.log("Soy una forma geométrica.");
                                  }
                                }

                                // Clase hija
                                class Cuadrado extends Forma {
                                  constructor() {
                                    super();
                                    console.log("Soy un cuadrado.");
                                  }
                                }

    Fíjate que la "clase padre Forma" muestra un mensaje en su constructor. Cada clase hija "extiende" (hereda) de su "clase padre", por lo que 
    la clase "Cuadrado" será una mezcla de lo que tiene la clase "Forma" más lo que tiene la clase "Cuadrado". 
    
    Vamos a instanciar los objetos del ejemplo y a comprobarlo:

                                const c1 = new Cuadrado();
                                // Soy una forma geométrica.
                                // Soy un cuadrado.

    Observa que al crear la instancia "c1" a partir de la clase "Cuadrado", se ha ejecutado el constructor de "Cuadrado", el cuál tiene una 
    llamada a "super()" (constructor de la clase padre). Esta es una función especial que llama al "constructor de la clase padre", por lo 
    que antes de continuar, pasa a ejecutarse el constructor de "Forma", donde se muestra el mensaje: "Soy una forma geométrica". Al terminar, 
    se vuelve al constructor de la clase "Cuadrado", y se muestra el texto: "Soy un cuadrado".


    III.-  El método super() => llamada al constructor de la clase padre.

    Como hemos visto, el método especial: "super()" se encarga de llamar al "constructor de la clase padre" (también denominada superclase, 
    de ahí su nombre), por lo que funcionará en cascada e irá ejecutando primero el constructor del padre, y luego el texto del constructor 
    del hijo. Hagamos algunos cambios interesantes en el ejemplo anterior, para reutilizar algunos elementos heredados.

    Observa el siguiente ejemplo. La clase "padre" tiene una propiedad "type" y otra "color". Además, tiene un método "show()" y otro método 
    "setColor()". Estos cuatro elementos son elementos que pertenecen a la clase "padre", pero que cualquier clase "hija" que extienda de ella, 
    "heredará" esos elementos. Por otro lado, fíjate que la clase hijo sobreescribe la propiedad "type":

                                class Forma {
                                  type = "geométrica";
                                  color = "naranja";

                                  constructor() {
                                    console.log("Constructor padre finalizado.");
                                  }

                                  show() {
                                    console.log(`Soy una forma ${this.type} de color ${this.color}`);
                                  }

                                  setColor(color) {
                                    this.color = color;
                                  }
                                }

                                class Cuadrado extends Forma {
                                  type = "cuadrada";

                                  constructor() {
                                    super();
                                    console.log("Constructor hijo finalizado.");
                                  }
                                }

                                const c1 = new Cuadrado();
                                c1.show();    // Soy una forma cuadrada de color naranja

                                const c2 = new Cuadrado();
                                c2.setColor("amarillo");
                                c2.show();    // Soy una forma cuadrada de color amarillo


    Vamos a crear los dos objetos del gráfico anterior. Al crear la instancia del objeto "c1" a partir de la clase "Cuadrado" y luego 
    ejecutar el método ".show()" heredado del padre, veremos que se está ejecutando el código del método del padre, pero obtiene la 
    información de "type" sobreescrita por el hijo.

    Si miramos el segundo ejemplo, del objeto c2, veremos que en él ejecutamos el método ".setColor()" del padre, que modifica la 
    propiedad "color" del hijo, cambiándola por el color "amarillo". Al ejecutar el método ".show()" comprobaremos que nos muestra la 
    información sobreescrita por la clase hijo.

    Nota.-  Recuerda que es obligatorio llamar a "super()" en el constructor de la clase "hija" antes de acceder a una propiedad 
            mediante "this". De lo contrario, te aparecerá el siguiente mensaje: 
            
            Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.


    IV.-  Acceder a métodos de la clase padre.

    Como hemos visto, la palabra clave "super()" hace referencia a la "superclase", es decir, a la clase "padre". No obstante, también podemos 
    utilizarlas en métodos para llamar a métodos del padre según nos interese heredar o no:

                                class Padre {
                                  soloPadre() { console.log("Tarea en el padre..."); }
                                  padreHijo() { console.log("Tarea en el padre..."); }
                                  sobreHijo() { console.log("Tarea en el padre..."); }
                                }

                                class Hijo extends Padre {
                                  constructor () {
                                    super();
                                  }
                                  padreHijo() {
                                    super.padreHijo();
                                    console.log("Tarea en el hijo...");
                                  }

                                  soloHijo() { console.log("Tarea en el hijo..."); }
                                  sobreHijo() { console.log("Tarea en el hijo..."); }
                                }


    Observa que la clase "Padre" implementa los métodos: "soloPadre()", "padreHijo()" y "sobreHijo()". 
    
    Por otro lado, la clase "Hijo" implementa los métodos: "padreHijo()", "soloHijo()" y "sobreHijo()". 
    
    Veamos como se comportan si creamos una instancia de la clase hija por medio de un new Hijo() y ejecutamos cada uno de ellos:

    Método 	                Clase Padre 	          Clase Hija 	              ¿Se ejecuta el método en una instancia de la clase hija?

    soloPadre() 	              ✅ 	                  ❌ 	                  Se ejecuta porque se hereda el método del padre hacia el hijo.

    soloHijo() 	                ❌ 	                  ✅ 	                  Se ejecuta porque simplemente existe en el hijo.

    padreHijo() 	              ✅ 	                  ✅ 	                  Se ejecutan ambos porque "super" llama al padre primero.

    sobreHijo() 	              ✅ 	                  ✅ 	                  Se ejecuta sólo el hijo, porque sobreescribe el heredado del padre.
*/

//  Eventos

/*
    Hay situaciones en las que necesitamos realizar una determinada "acción" cuando ocurra un determinado caso en el documento web. 
    
    En estas situaciones, no sabemos exactamente cuando tenemos que activar nuestra funcionalidad, ya que no podemos predecir cuando 
    el usuario de nuestra página realizará la acción necesaria (y podrá ser diferente en cada situación).

    En estas situaciones es cuando entran en juego los eventos.


    1.-  ¿Qué es un evento?

    En Javascript existe un concepto llamado "evento", que no es más que una "notificación" de que alguna característica interesante 
    acaba de ocurrir, generalmente relacionada con el usuario que navega por la página.

    Dichas características pueden ser muy variadas:

          1.-  Click de ratón del usuario sobre un elemento de la página
          2.-  Pulsación de una tecla específica del teclado
          3.-  Reproducción de un archivo de audio/video
          4.-  Scroll de ratón sobre un elemento de la página
          5.-  El usuario ha activado la opción «Imprimir página»


    Como desarrolladores, nuestro objetivo es preparar nuestro código para que cuando ocurra un determinado "evento", se lleve a cabo 
    una funcionalidad determinada (que esta asociada al evento). De esta forma, podemos preparar nuestra página o aplicación para que 
    cuando ocurran ciertos eventos (que no podemos predecir de otra forma), reaccionen a ellos.


    2.-  ¿Qué es un evento Javascript?

    Uno de los eventos más comunes, es el evento "click", que es el que se produce cuando el usuario hace "click" con el ratón en un 
    elemento de la página. Vamos a utilizar este evento a modo de ejemplo en las siguientes secciones de la página, pero recuerda que 
    hay muchos tipos de eventos diferentes.


    3.-  Formas de manejar eventos.

    Existen varias formas diferentes de manejar eventos en Javascript. Vamos a ver cada una de ellas, con sus particularidades, pero 
    antes hagamos un pequeño resumen:


                  Forma 	                                      Ejemplo 	                                Artículo en profundidad
                  Mediante atributos HTML 	            <button onClick="..."></button> 	            Eventos JS desde atributos HTML
                  Mediante propiedades Javascript 	    .onclick = function() { ... } 	              Eventos JS desde propiedades Javascript
                  Mediante addEventListener() 	        .addEventListener("click", ...) 	            Eventos JS desde listeners


    Cada una de estas opciones se puede utilizar para gestionar eventos en Javascript de forma equivalente, pero cada una de ellas tiene 
    sus ventajas y sus desventajas. En los siguientes apartados veremos detalladamente sus características, pero por norma general, 
    lo aconsejable es utilizar la última, los "listeners", ya que son las más potentes y flexibles.
*/

//  1.-  Eventos mediante HTML:  Eventos JS desde atributos HTML.

/*
    Probablemente, la forma más fácil de trabajar con eventos Javascript es mediante "atributos de una etiqueta HTML". Sin embargo, aunque 
    es la más sencilla, también es la menos recomendable, pero es un buen punto de partida para comenzar a trabajar con eventos.


    1.1.-  ¿Qué es un evento Javascript?

    Un "evento Javascript" es una característica - accion  especial que ha sucedido en nuestra página web, en nuestro DOM, y a la cuál le 
    asociamos una "funcionalidad" determinada, de modo que se ejecute cada vez que suceda dicho evento. 
    
    Por ejemplo, el evento "click" se dispara cuando el usuario hace "click" en un elemento de nuestra página.


    Imaginemos el siguiente código HTML:

                                                    <button>Saludar</button>


    En nuestro navegador nos aparecerá un botón con el texto «Saludar». Sin embargo, si lo pulsamos, no realizará ninguna acción ni tendrá 
    funcionalidad. Para solucionar esto, podemos asociarle un evento:


                                                    <button onClick="alert('Hello!')">Saludar</button>


    En este ejemplo, cuando el usuario haga "click" con el ratón en el botón Saludar, se "disparará" el "evento click" en ese elemento HTML 
    (<button>). Dicho botón, al tener un "atributo onClick" (cuando hagas click), ejecutará el código que tenemos asociado en el valor del 
    atributo HTML (en este caso un alert()), que no es más que un mensaje emergente con el texto indicado.

    Nota.-  Ten en cuenta que el nombre del evento es "click", sin embargo, en los atributos HTML se coloca siempre precedido de "on". 
            Las minúsculas/mayúsculas dan igual, aunque lo más habitual es utilizar camelCase.


    1.2.-  Organizando la funcionalidad.

    El valor del atributo "onClick" es una funcion, que llevará la funcionalidad en cuestión que queremos ejecutar cuando se produzca el evento. 
    En nuestro ejemplo anterior, hemos colocado un alert(), pero lo habitual es que necesitemos ejecutar un fragmento de código más extenso, 
    por lo que lo ideal sería meter todo ese código en una función, y en lugar del alert(), ejecutar dicha función:

                                                    <script>
                                                      function doTask() {
                                                        alert("Hello!");
                                                      }
                                                    </script>

                                                    <button onClick="doTask()">Saludar</button>

    Ahora sí, todo está un poco mejor organizado. Sin embargo, no es muy habitual tener bloques <script> de código Javascript en nuestro HTML, 
    sino que lo habitual suele ser externalizarlo en ficheros .js para dividir y organizar mejor nuestro código:


                                                    <script src="tasks.js"></script>
                                                    <button onClick="doTask()">Saludar</button>


    Ahora aparece un nuevo problema que quizás puede que aún no sea muy evidente. En nuestro <button> estamos haciendo referencia a una función 
    llamada doTask() que, aparentemente, confiaremos en que se encuentra declarada dentro del fichero tasks.js.

    Esto podría convertirse en un problema, si posteriormente, o dentro de cierto tiempo, nos encontramos modificando código en el fichero tasks.js 
    y le cambiamos el nombre a la función doTask(), ya que podríamos olvidar que hay una llamada a una función Javascript en uno (o varios) .html.

    Por esta razón, suele ser buena práctica no incluir llamadas a funciones Javascript en nuestro código ".html", sino que es mejor hacerlo 
    desde el fichero externo .js, localizando los elementos del DOM con un .querySelector() o similar.


    En resumen:

    1.-  Gestionar eventos Javascript desde HTML (atributos de una etiqueta - elemento DOM) es muy sencillo.
    2.-  Hay que tener en cuenta que «mezclamos» código Javascript dentro de HTML.
    3.-  Para que el código sea más legible y fácil de mantener, se recomienda gestionar eventos desde Javascript (DOM) o, mejor aún, gestionar 
         eventos mediante addEventListener().
*/

//  2.-  Eventos JS desde propiedades Javascript.  Gestionar eventos Javascript desde propiedades del DOM.

/*
    En los artículos anteriores explicamos que es un evento Javascript y como gestionar eventos a través del HTML, concretamente, desde un 
    atributo de una etiqueta HTML. Sin embargo, vimos que es preferible hacerlo todo desde el código Javascript, en nuestros ficheros ".js" a 
    tener llamadas a funciones Javascript sueltas en nuestro código HTML.


    2.1.-  Eventos a través del DOM.

    Existe una forma de gestionar eventos Javascript sin necesidad de hacerlo desde nuestros ficheros ".html". No obstante, se trata de una «trampa», 
    puesto que seguimos haciéndolo desde HTML, sólo que ese HTML se crea desde Javascript, y nos permite llevarlo a los ficheros ".js".


    2.1.1.-  Utilizando propiedad Javascript:  Eventos JS desde propiedades Javascript

    La idea es la misma que vimos en el artículo anterior, sólo que en esta ocasión haremos uso de una propiedad Javascript, a la que le asignaremos 
    la función con el código asociado.

    Vamos a realizar el mismo ejemplo anterior para verlo claramente:

                                              <button>Saludar</button>

                                              <script>
                                              const button = document.querySelector("button");
                                              button.onclick = function() {
                                                alert("Hello!");
                                              }
                                              </script>

    Observa que en este caso, en lugar de añadir el "atributo onClick" a nuestro <button>, lo que hacemos es localizar el elemento "button"
    mediante querySelector(). Con la variable JS que hace referencia a este elemento button, llamamos directamente a la propiedad "onClick()",
    una función con el código deseado (el código que queremos ejecutar cuando ocurre el evento) en la propiedad ".onClick" del elemento <button>.

    Nota.-  La propiedad ".onclick" de un  elemento button, siempre irá en minúsculas, ya que se trata de una propiedad Javascript, y Javascript 
            es sensible a mayúsculas y minúsculas.


    2.1.2.-  Utilizando setAttribute().

    Realmente lo que estamos haciendo es equivalente a añadir un atributo "onclick" en nuestro <button>, solo que lo hacemos a través de la API 
    de Javascript. Otra forma similar, donde si se verá más claro, sería la siguiente:

                                                <button>Saludar</button>

                                                <script>
                                                const button = document.querySelector("button");
                                                const doTask = () => alert("Hello!");
                                                button.setAttribute("onclick", "doTask()");
                                                </script>


    Observa que en este caso, si vemos la similitud con la forma del artículo anterior, ya que estamos utilizando el método ".setAttribute()", 
    donde añadimos el atributo "onclick" con el valor indicado a continuación (una funcion)


    En resumen:

        1.-  A grandes rasgos, se trata de una forma alternativa a gestionar los eventos Javascript desde HTML, pero creando el HTML mediante 
             la API del DOM de Javascript.

        2.-  En el caso de que necesitemos añadir más de una función al evento, la cosa se puede complicar. Podríamos tener una función que 
             ejecute varias funciones, pero sin duda alguna, utilizar el método .addEventListener() será mucho más cómodo, sencillo y legible.
*/

//  3.-  Eventos JS desde "listeners".  Gestionar eventos Javascript mediante el método "addEventListener".

/*
    En los artículos anteriores hemos visto que son los eventos Javascript y como gestionarlos a través de código HTML, o a través de código 
    Javascript, utilizando la API del DOM. Sin embargo, la forma más recomendable es hacer uso del método: "".addEventListener()", el cuál es 
    mucho más potente y versatil para la mayoría de los casos.

        .-  Con ".addEventListener()" se pueden añadir fácilmente varias funcionalidades a un mismo evento (tipo de evento).
        .-  Con ".removeEventListener()" se puede eliminar una funcionalidad previamente añadida.
        .-  Con ".addEventListener()" se pueden indicar ciertos "comportamientos especiales".


    3.1.-  El método ".addEventListener()"

    El método ".addEventListener()" permite añadir una "escucha de eventos", "listener", a diferentes tipos de eventos en un elemento HTML del DOM,
    indicado (primer parámetro el tipo de evento a escuchar en el "listener"), y en el caso de que ocurra, se ejecutará una función asociada como 
    segundo parametro(un callBack()). 
    
    De forma opcional, se le puede pasar un "tercer parámetro" con ciertas "opciones", que veremos más adelante:

                                Método 	                                        Descripción

                          .addEventListener(event,func) 	                  Escucha el evento "event2, y si ocurre, ejecuta la funcion "func".

                          .addEventListener(event,func,options) 	          Idem, pasándole ciertas opciones.


    Para verlo en acción, vamos a crear a continuación, el mismo ejemplo de apartados anteriores, de esta forma veremos como funciona y podremos 
    comparar con los anteriores:

                                    <button>Saludar</button>

                                    const button = document.querySelector("button");

                                    button.addEventListener("click", function() {
                                      alert("Hello!");
                                    });


    Observa algunas cosas de este ejemplo:

        1.-  En el primer parámetro indicamos el nombre del evento (en este caso "click"). Con ".addEventListener()" no se precede con "on" 
             los nombres de eventos y se escriben en minúsculas, sin camelCase.

        2.-  En el segundo parámetro indicamos la función con el código que queremos que se ejecute cuando ocurra el evento.

    Aunque es muy habitual escribir los eventos de esta forma, es posible que veas mucho más organizado este código si sacamos la función y 
    la guardamos en una constante previamente, para luego hacer referencia a ella desde el ".addEventListener()":

                                    const button = document.querySelector("button");

                                    function action() {
                                      alert("Hello!");
                                    };
                                    button.addEventListener("click", action);

    Si prefieres utilizar las funciones flecha de Javascript, quedaría incluso más legible:

                                  const button = document.querySelector("button");

                                  const action = () => alert("Hello!");
                                  button.addEventListener("click", action);


    Sin embargo, una de las características más cómodas de utilizar ".addEventListener()" es que puedes añadir "múltiples listeners" de una 
    forma muy sencilla.


    3.1.1.-  Múltiples listeners

    El método ".addEventListener()" permite asociar "múltiples funciones a un mismo evento", algo que, aunque no es imposible, es menos sencillo 
    e intuitivo en las modalidades de gestionar eventos que vimos anteriormente:

                                  <button>Saludar</button>

                                  <style>
                                    .red { background: red }
                                  </style>

                                  <script>
                                    const button = document.querySelector("button");

                                    const action = () => alert("Hello!");
                                    const toggle = () => button.classList.toggle("red");

                                    button.addEventListener("click", action);         // Hello message
                                    button.addEventListener("click", toggle);         // Add/remove red CSS
                                  </script>


    Observa que en este ejemplo, hemos añadido una clase .red de CSS, que coloca el color de fondo del botón en rojo. Además, hemos creado 
    dos funcionalidades:

        1.-  "action", que muestra un mensaje de saludo
        2.-  toggle, que añade o quita el color rojo del botón (anade o quita la clase "red")

    Observa que al pulsar el botón se efectuan ambas acciones, ya que hay dos listeners en escucha.


    3.1.2.-  Las opciones del metodo: addEventListener("name_event", callBack(), options)

    Al utilizar el método ".addEventListener()", se puede indicar un "tercer parámetro opcional". Se trata de un opcional en el cual podemos 
    indicar alguna de las siguientes opciones para modificar alguna característica del listener en cuestión que vamos a crear:


                              Opción 	                              Descripción

                            capture 	                        El evento se dispara al inicio (capture), en lugar de al final (bubble).

                            once 	                            Sólo ejecuta la función la primera vez. Luego, elimina listener.

                            passive 	                        La función nunca llama a ".preventDefault()" (mejora rendimiento).


    Repasemos cada una de estas opciones:

        1.-  En primer lugar, la opción "capture" nos permite modificar la modalidad en la que escuchará el evento (capture/bubbles, ver más adelante). 
             Esto, básicamente, lo que hace es modificar "en que momento" se procesa el evento.

        2.-  En segundo lugar, la opción "once" nos permite indicar que el evento se procesará solo la primera vez que se dispare un evento. 
             Internamente, lo que hace es ejecutarse una primera vez y luego llamar al ".removeEventListener()", eliminando el "listener" una vez 
             ha sido ejecutado.

        3.-  En tercer y último lugar, la opción "passive" nos permite crear un "evento pasivo" en el que indicamos que nunca llamaremos al método
             ".preventDefault()" para alterar el funcionamiento del evento. Esto puede ser muy interesante en temas de rendimiento (por ejemplo, 
              al hacer scroll en una página), ya que los eventos pasivos son mucho menos costosos.


    3.2.-  Método ".removeEventListener()"

    El ejemplo anterior, se puede completar haciendo uso del método ".removeEventListener()", que sirve como su propio nombre indica para 
    eliminar un "listener" que se ha añadido previamente al elemento. Para ello es muy importante indicar la misma función que añadimos 
    con el ".addEventListener()" y no una función diferente que haga lo mismo que la primera.


                                  Método 	                                  Descripción

                              .removeEventListener(event,func) 	      Elimina el "listener", la funcionalidad "func" asociada al evento "event".


    Veamos el ejemplo anterior, eliminando la funcionalidad action mediante ".removeEventListener()", es decir, sólo debería actuar la 
    funcionalidad "toggle":

                                          <button>Saludar</button>

                                          <style>
                                            .red { background: red }
                                          </style>

                                          <script>
                                          const button = document.querySelector("button");
                                          const action = () => alert("Hello!");
                                          const toggle = () => button.classList.toggle("red");

                                          button.addEventListener("click", action);         // Add listener
                                          button.addEventListener("click", toggle);         // Toggle red CSS
                                          button.removeEventListener("click", action);      // Delete listener de action
                                          </script>

    Nota.-  Ten en cuenta que es posible eliminar el "listener del evento" porque hemos guardado en una constante la función, y tanto 
            en .addEventListener() como en .removeEventListener() estamos haciendo referencia a la misma función. Si en lugar de esto, 
            añadieramos la función literalmente, aunque hagan lo mismo, serían funciones diferentes y no realizaría lo que esperamos.
*/

//  4.-   Escuchar eventos y "handleEvent"

/*  
    En el artículo anterior, hemos visto como funciona el método ".addEventListener()". Sin embargo, sólo hemos visto la superficie, ya que 
    existen multitud de formas de "asociar una función a un evento" determinado. Recordemos la forma más simple y habitual de utilizar 
    ".addEventListener()", que es mediante una función:

                                      const button = document.querySelector("button");

                                      button.addEventListener("click", function() {
                                        alert("Has hecho click en el botón");
                                      });

    Veamos que otras formas existen, y a repasar cada una de ellas y verlas aplicadas a un ejemplo.


    4.1.-  Escuchar eventos con funciones. 

    Primero, establezcamos unas bases para jugar con los diferentes ejemplos que veremos a continuación y entender mejor cada uno de ellos. 
    Vamos a trabajar con la clase "EventManager", que básicamente gestionará nuestros eventos de una forma más cómoda:

                                      class EventManager {
                                        constructor(element) {
                                          element.addEventListener("click", this.sendMessage());  /* Error * /
                                        }

                                        sendMessage() {
                                          alert("Has hecho click en el botón");
                                        }
                                      }

                                      const button = document.querySelector("button");
                                      const eventManager = new EventManager(button);


    Observa que al hacer un "new EventManager()" y pasarle el botón (elemento button) por parámetro, el constructor() de la clase empezará 
    a escuchar el evento de tipo "click" y en el caso de que se produzca (evento de tipo click) ejecutará el método de clase "sendMessage()". 
    
    Sin embargo, hay un error en este código.

      Es muy frecuente que se cometa este error, y es que si nos fijamos en el segundo parámetro del ".addEventListener()", se espera una 
      función "function", sin embargo, lo que estamos haciendo realmente es "ejecutar" una función y pasarle lo que devuelva.

      En este caso, "sendMessage()" no devuelve nada, pero si pusieramos un 42 en su interior, estaríamos realmente haciendo un:
      
                                          .addEventListener("click", 42), lo que obviamente, es incorrecto.


    Solucion:  Mediante funciones (referencia).

               Al asociar una función a un evento utilizando ".addEventListener()" dentro de una clase, se nos podría ocurrir definirla 
               con this.sendMessage(). Sin embargo, como hemos visto antes, esto es incorrecto.

              La forma correcta de hacerlo, es pasando por parámetro la "referencia" de la función. Es decir, la opción anterior no nos vale 
              porque estamos ejecutando el método sendMessage(). En su lugar, podríamos indicar this.sendMessage (sin especificar los paréntesis 
              que hacen que se ejecute el método). Con esto, estaríamos efectivamente pasando una "referencia" al método de clase y nos funcionaría 
              correctamente:

                                          class EventManager {
                                            constructor(element) {
                                              element.addEventListener("click", this.sendMessage);
                                            }

                                            sendMessage() {
                                              alert("Has hecho click en el botón");
                                              console.log(this);    // this = referencia al <button>
                                            }
                                          }

                                          const button = document.querySelector("button");
                                          const eventManager = new EventManager(button);


    Sin embargo, esta opción tiene un pequeño inconveniente. Si no necesitamos hacer referencia a la clase, perfecto. En caso contrario, no nos 
    vale. El método de clase se ejecutará correctamente, pero habremos perdido el contexto de "this" dentro del método, que en este caso, será 
    una referencia al elemento que contiene el evento (button) y no a la clase del componente.

    Por lo tanto, dentro de "sendMessage()" no podríamos, por ejemplo, llamar a otro método de clase o guardar información como propiedad. 
    Además, al no poder añadirle los paréntesis, tampoco podríamos pasarle parámetros.


    Solucion:  Mediante funciones con "bind".

    Otra opción, es escribir "this.sendMessage.bind(this)2 que lo que hace es llamar al "método .bind()" pasandole "this" por parámetro, 
    del método de clase que queremos ejecutar. ¿Qué hace esto realmente? Pues en pocas palabras, realiza una copia de la función que queremos 
    ejecutar, y le pasa por parámetro el elemento al que va a apuntar "this".

                                          class EventManager {
                                            constructor(element) {
                                              element.addEventListener("click", this.sendMessage.bind(this));
                                            }

                                            sendMessage() {
                                              alert("Has hecho click en el botón");
                                              console.log(this);    // this = referencia a EventManager
                                            }
                                          }

                                          const button = document.querySelector("button");
                                          const eventManager = new EventManager(button);

    De esta forma solucionamos el problema anterior, ya que ahora cuando se ejecute el método "sendMessage()", "this" si hará referencia a la 
    clase en cuestión, siendo posible ejecutar otros métodos o consultar y guardar información en las propiedades. Si queremos añadirle 
    parámetros, basta con incluirlos después del "this" del primer parámetro del ".bind()".

    Nota.-  Esta era la solución usada en Javascript y anteriores. Personalmente, me parece bastante confusa de entender y leer, y prefiero evitarla 
            siempre que sea posible.
 

    Solucion: Mediante funciones anónimas.

    Una de mis preferidas es utilizar las "funciones flecha anónimas". Como el segundo parámetro de ".addEventListener()2se espera una función, 
    podemos pasar una función flecha anónima que «envuelva» y ejecute la función que nos interesa y devuelva su resultado. Al estar dentro de 
    una función flecha, no tiene concepto propio de "this", por lo que no pierde el valor, y "this" sigue haciendo referencia a la clase del 
    componente. Además de ser mucho más legible, y permite el paso de parámetros a la función de forma sencilla y clara.

                                          class EventManager {
                                            constructor(element) {
                                              element.addEventListener("click", () => this.sendMessage());
                                            }

                                            sendMessage() {
                                              alert("Has hecho click en el botón");
                                              console.log(this);    // this = referencia a EventManager
                                            }
                                          }

                                          const button = document.querySelector("button");
                                          const eventManager = new EventManager(button);



    4.2.-  Escuchar eventos con objetos.  Asociar "eventos" a "objetos". El metodo "handleEvent()"

           Como hemos visto, aunque el trabajo con eventos no es especialmente complejo, dependiendo de la situación se puede complicar mucho. 
           Además, cuando tenemos muchos eventos, se vuelve tedioso de organizar, y corremos el riesgo de que se vuelva muy complejo. 
           Existe un patrón Javascript muy interesante y desconocido que permite organizar y administrar los eventos de una forma muy elegante.

          En lugar de a una función , es posible "asociar un evento a un objeto". Este objeto debe contener un método mágico ".handleEvent()". 
          Si lo hacemos, dicho método recibirá el evento (que puede ser de distintos tipos) y podremos gestionarlo desde su interior:

                                          const button = document.querySelector("button");

                                          const eventManager = {
                                            handleEvent: function(ev) {
                                              if(ev.type === 'click') {
                                                alert("¡Has hecho click!");
                                              }
                                              if (ev.type === '...') {
                                                ....
                                              }
                                              ....
                                            }
                                          }

                                          button.addEventListener("click", eventManager);
                                          button.addEventListener('...', eventManager);


          De esta forma, si tenemos "múltiples eventos" sobre un mismo "element", podemos "centralizar la administración de eventos" 
          desde dicho objeto, accediendo a "ev", que es el objeto con información sobre el evento disparado, donde podemos consultar 
          muchas de sus propiedades, que nos brindan información interesante:

                                        ev.type     =>  devuelve el "tipo de evento" disparado: click
                                        ev.target   =>  devuelve el "elemento que disparó el evento": <button>
                                        ev.ctrlKey  =>  devuelve si la tecla estaba pulsada
                                        etc...


          Veamoslo con un ejemplo:

                                      const buttonA = document.querySelector("#buttonA");
                                      const buttonB = document.querySelector("#buttonB");

                                      const eventManager = {
                                        handleEvent: function(ev) {
                                          if (ev.type === "click" && ev.target === buttonA) {
                                            alert("¡Has hecho click! en el boton A");
                                          } else if (ev.type === "click" && ev.target === buttonB) {
                                            alert("¡Has hecho click! en el boton B");
                                          } else if (ev.type === "mouseleave) {
                                            if(ev.target === buttonA) {
                                              alert("¡Has abandonado el botón A!");
                                            } else if(ev.target === buttonB) {
                                              alert("¡Has abandonado el botón B!");
                                            }
                                          } else if( ....) {
                                            ...
                                          }
                                        }
                                      }

                                      buttonA.addEventListener("click", eventManager);
                                      buttonA.addEventListener("mouseleave", eventManager);
                                      buttonB.addEventListener("click", eventManager);
                                      buttonB.addEventListener("mouseleave", eventManager);


    4.3.-  Escuchar eventos con clases

           Como ya habrás imaginado, esto se puede trasladar a un objeto instanciado a partir de una clase. Podemos crear una clase, o incluso 
           varias instancias del objeto, de forma que sea mucho más flexible y reutilizable para nosotros.

           Ten en cuenta que "this" en el contexto del método "handleEvent()" apunta al propio objeto "eventManager", por lo que podemos utilizarlo 
           para acceder a otros métodos o propiedades del objeto:

                                      <button>Click me!</button>

                                      <script>
                                        const button = document.querySelector("button");

                                        class EventManager {
                                          handleEvent(ev) {
                                            if (ev.type === "click") {
                                              this.onClick(ev.type, ev.target);
                                            } else if (ev.type === "mouseleave") {
                                              this.onLeave(ev.type, ev.target);
                                            }
                                        }

                                        onClick(type, element) {
                                          alert("¡Has hecho click!");
                                          console.log({ type, element });
                                        }

                                        onLeave(type, element) {
                                          alert("¡Has abandonado el botón!");
                                          console.log({ type, element });
                                        }
                                      }

                                      const eventManager = new EventManager();

                                      button.addEventListener("click", eventManager);
                                      button.addEventListener("mouseleave", eventManager);
                                      </script>


          Trabajando y ampliando un poco más la clase, podríamos incluso pasarle el objeto que queremos escuchar en el new y que el constructor 
          realice los addEventListener() necesarios para gestionarlo todo de una forma limpia y legible.
*/

//  5.-   Eventos nativos.  Cómo gestionar los eventos Javascript

/*
          Cuando se disparan ciertos eventos, hay casos en los que nos podría interesar obtener información relacionada con la naturaleza del 
          evento en cuestión. Por ejemplo, si estamos escuchando un evento de tipo "click" de ratón, nos podría interesar saber con que botón 
          del ratón se ha hecho click, en que punto concreto de la pantalla se ha hecho click, etc.


          5.1.-  El objeto Event.

                 Estos detalles se pueden obtener de forma opcional, a través de un "objeto event" que se proporciona en la función asociada 
                 al evento. Para ello, sólo es necesario indicar el objeto "event" como primer parámetro en la función que gestiona el evento, 
                 y dicho parámetro, será de tipo evento con dicha información asociada.


                 Observa el siguiente ejemplo de código:

                                                const button = document.querySelector("button");

                                                button.addEventListener("click", (event) => {
                                                  console.log(event);
                                                });


                 Simplemente se trata de una función que escucha los eventos de tipo "click" en un <button> del HTML. Observa que la función 
                 asociada tiene el parámetro "event". Si hacemos "click" en el botón, en la consola se nos mostrará la información de este evento, 
                 que en nuestro ejemplo anterior está basado en "PointerEvent", ya que "click" es un evento realizado con un puntero (generalmente, 
                 de ratón).

                 Dicho evento contiene una serie de "propiedades" interesantes a la hora de trabajar con el evento en cuestión, y dependen del tipo 
                 de evento. Por ejemplo, en el ejemplo anterior hemos gestionado un evento "click", por lo que el "tipo de evento2 asociado es 
                 "PointerEvent", y conlleva una serie de propiedades que no tienen porque estar presentes en otros tipos de eventos.


                 En nuestro ejemplo anterior, contendrían algo parecido a lo siguiente:

                                                // Objeto PointerEvent
                                                {
                                                  type: "click",        // Nombre - tipo del evento
                                                  pointerType: "mouse"  // Tipo de dispositivo
                                                  altKey: false,        // ¿La tecla ALT estaba presionada?
                                                  ctrlKey: false,       // ¿La tecla CTRL estaba presionada?
                                                  shiftKey: false,      // ¿La tecla SHIFT estaba presionada?
                                                  target: button,       // Referencia al elemento que disparó el evento
                                                  clientX: 43,          // Posición en eje X donde se hizo click
                                                  clientY: 16,          // Posición en eje Y donde se hizo click
                                                  detail: 1,            // Contador de veces que se ha hecho click
                                                  path: [],             // Camino por donde ha pasado el evento
                                                  ...                   // Otros...
                                                }


                Nota.-  Ten en cuenta que en este caso, se trata de un "objeto PointerEvent" porque el evento que estamos escuchando es un 
                        evento "click" de un dispositivo que permite apuntar. Sin embargo, si utilizaramos otro evento, posiblemente obtendríamos 
                        un "objeto evento" con propiedades diferentes (de otro tipo).


          5.2.-  Propiedades del evento.

                 Veamos algunas de la "propiedades comunes", que están disponibles en cualquier tipo de evento. Ampliemos un poco la escucha del 
                 evento anterior, donde vamos a observar el contenido de cada una de las siguientes propiedades básicas:

                                                const button = document.querySelector("button");

                                                button.addEventListener("click", (event) => {
                                                  const { type, timeStamp, isTrusted } = event;
                                                  console.log({ type, timeStamp, isTrusted });
                                                });


                 Como se puede ver, desestructuramos las tres propiedades siguientes del "objeto event" y las mostramos a través de una sentencia 
                 console.log(), de modo que podamos ver su contenido.


                                                Propiedad 	                    Descripción
                                                .type 	                    Indica el "tipo de evento" en cuestión (nombre o tipo de evento)

                                                .timeStamp 	                Hora en milisegundos en la que se creó el evento.

                                                .isTrusted 	                Indica si es un "evento real" de un usuario o uno enviado manualmente 
                                                                            con ".dispatchEvent()".


                 Analicemos cada una de ellas:

                    1.-  Tipo de evento (type): mediante la propiedad ".type" del objeto "event" podemos obtener el "tipo de evento". 
                                                Esto es, simplemente, el "nombre del evento" con el que escuchamos en el ".addEventListener()", 
                                                o en el caso de un evento personalizado, el establecido en el primer parámetro de la instancia 
                                                del "new CustomEvent()".


                          En el ejemplo inicial de este artículo estabamos escuchando un evento nativo donde type sería "click".


                    2.-  Hora del evento (timeStamp): la propiedad ".timeStamp" devuelve el número de milisegundos transcurridos desde que se 
                                                      creó el evento. Generalmente, para que esto sea sencillo de gestionar, podemos hacer lo 
                                                      siguiente utilizando la API de Fechas de Javascript:

                                                                  const currentTime = new Date().getTime();
                                                                  const eventTime = new Date(currentTime - event.timeStamp);


                         Observa que en la constante "currentTime" tenemos el "timeStamp" de la fecha actual, es decir, el número de milisegundos 
                         transcurridos desde el 01/01/1970. A ese número de milisegundos, le restaremos el número de milisegundos desde que se creó 
                         el evento, y de esta forma, obtendremos justo el momento exacto en el que que se creó.


                    3.-  Evento de confianza (isTrusted): se denomina un "evento de confianza" al evento que ha lanzado el navegador por una acción 
                                                          del usuario, ya que un desarrollador puede falsear y crear eventos para simular una acción 
                                                          del usuario. La propiedad ".isTrusted" sirve precisamente para diferenciar uno de otro.


                         Mediante la propiedad ".isTrusted" a "true" podemos saber si el evento en cuestión que estamos examinando es un evento real 
                         que ha surgido de una acción del usuario, o de lo contrario, ha devuelto "false" y es un evento que ha sido emitido mediante 
                         código con un ".dispatchEvent()".


          5.3.-  Evitar la acción por defecto.

                 Algunos elementos HTML tienen un "comportamiento por defecto". Por ejemplo, el elemento <details> muestra el texto del elemento 
                 <summary>, si se pulsa sobre el, se despliega el resto del contenido de <details>. Si se vuelve a pulsar, se oculta nuevamente. 
                 Ese es su comportamiento por defecto.


                                                          <details>
                                                            <summary>More info</summary>
                                                            <div>The cake is a lie The cake is a lie The cake is a lie The cake is a lie</div>
                                                          </details>


                 Sin embargo, pueden existir situaciones donde queremos "anular" este comportamiento y no se realice. Por ejemplo, para 
                 reimplementarlo nosotros, o cambiar su funcionalidad habitual. Para ello, tenemos a nuestra disposición una propiedad y un 
                 método que harán que sea muy sencillo:


                                Propiedad o Método 	        Valor por defecto 	          Descripción

                                Propiedad
                                  .defaultPrevented 	         false 	              Indica si el comportamiento por defecto se ha evitado.

                                Métodos
                                  .preventDefault() 	                              Evita que se realice el comportamiento por defecto del evento.


                 Mediante el método ".preventDefault()" se establecerá el flag ".defaultPrevented" a "true" y podremos evitar el comportamiento 
                 base por defecto de dicho evento y añadirle otro diferente:


                                              const details = document.querySelector("details");

                                              details.addEventListener("click", (event) => {
                                                event.preventDefault();
                                              });


                  De esta forma, veremos que al pulsar sobre el elemento <details> ya no se expande ni se contrae, por lo que ahora podríamos crear 
                  nuestra propia lógica (comportamiento) del evento para reimplementar esta funcionalidad.
*/

//  6.-  Eventos personalizados (Custom Events).  Crear eventos personalizados propios.

/*
    En Javascript, al igual que existen varios "eventos nativos" que podemos escuchar mediante ".addEventListener()" como "click", 
    "keydown" o "mouseenter", sería fantástico poder crear nuestros propios eventos para que se disparen automáticamente al ocurrir un 
    suceso determinado. Eso es exactamente lo que son los "Custom Events" (Eventos personalizados).


    6.1.-  Custom Events

    Crear un "evento personalizado" (custom event) en Javascript es muy sencillo. Se basa en crear una "instancia del objeto CustomEvent", 
    al cuál le pasaremos un "string" con el "nombre del evento". Como segundo parámetro le indicaremos un "object" de opciones, que 
    explicaremos más adelante.


    Así pues, definir un evento personalizado (custom event) se haría de la siguiente forma:

                                    const messageEvent = new CustomEvent("message", options);


    Nota.-  En lugar de "CustomEvent" también se puede indicar simplemente "Event" (o alguno de sus objetos derivados). La diferencia radica 
            en que "CustomEvent" se suele utilizar cuando queremos añadir datos personalizados, como vamos a hacer a continuación en las opciones.


    6.2.-  Nombre del evento del "custom event".

    En ejemplos sencillos no suele importar demasiado, pero una buena práctica a largo plazo es comenzar eligiendo una buena convención de nombres 
    para los "nombres de eventos", que sea «autoexplicativo» en cuanto la acción que vamos a realizar y a la vez sea coherente y fácil de recordar.

    Aunque no hay una forma universal de hacerlo, algunos consejos podrían ser los siguientes:

            1.-  Los eventos son "case sensitive", por lo que es preferible usar "todo en minúsculas".

            2.-  Evita camelCase, que suele inducir a dudas. Si has elegido todo en minúsculas, puedes optar a usar kebab-case.

            3.-  Usa namespaces y elegir un separador: Por ejemplo, user:data-message o user.data-message.

    En este último caso, se ve claro y se entiende bien: un evento de usuario user, que recibe un mensaje de datos.


    6.3.-  Opciones del evento.

    El segundo parámetro del "CustomEvent" es un "donde" podremos especificar varios detalles en relación al comportamiento o contenido 
    del evento.

    A continuación, tienes una lista de las propiedades que pueden contener estas opciones:

                          Opciones 	          Valor inicial 	            Descripción

                          detail 	                  null 	            Objeto que contiene la información que queremos transmitir.

                          bubbles 	                false 	          Indica si el evento debe burbujear en el DOM «hacia la superficie» 
                                                                              o no.

                          composed 	                false 	          Indica si la propagación puede atravesar "Shadow DOM" o no.

                          cancelable 	              false 	          Indica si el comportamiento se puede cancelar con ".preventDefault()".


    En el siguiente fragmento de código vemos como se declara una instancia de "CustomEvent" llamada: "user:data-message", la cuál tiene 
    ciertas opciones definidas, entre las que se encuentran que:

                          El evento debe "burbujear" hacia arriba en el DOM (lo veremos más adelante)
                          El evento "puede atravesar Shadow DOM" (útil cuando son WebComponents)
                          El evento "contiene información en el atributo detail".

    Veamos ahora el código:

                          const MessageEvent = new CustomEvent("user:data-message", {
                            detail: {
                              from: "Manz",
                              message: "Hello!"
                            },
                            bubbles: true,
                            composed: true
                          });


    Dentro del "objeto de opciones", podemos ver que tenemos un objeto "detail" que es definido por el desarrollador, ya que es el 
    diseñador del evento personalizado. El resto, son opciones del evento que explicaremos más adelante.


    6.4.-  Event vs CustomEvent.

    Los "eventos nativos Event" se suelen utilizar de forma interna por el navegador para crear un evento de navegador disparado por una 
    acción real del usuario. Así pues, si el usuario pulsa en un <button>, el navegador dispara un evento Event que además, siendo más 
    específicos es un evento "PointerEvent".

    Aún así, nosotros podemos «falsear» un evento de navegador y crearlo nosotros mismos, simulando que ha sido realizado por un usuario real. 
    En el siguiente ejemplo, tenemos dos elementos: un <button> y un <span>:

                                          <button>Click me</button>
                                          <span class="text">Hover me</span>

                                          <script>
                                              const button = document.querySelector("button");
                                              const text = document.querySelector(".text");

                                              button.addEventListener("click", () => alert("Has pulsado el botón"));

                                              text.addEventListener("mouseenter", () => {
                                                const event = new Event("click");
                                                button.dispatchEvent(event);
                                              });
                                          </script>


    Hemos "añadido un evento" para que muestre un mensaje cuando hagas "click" en el <button>. Sin embargo, también hemos añadido otro 
    evento en el <span> para que cuando muevas el ratón sobre él, cree un nuevo evento de "click" de ratón y lo envíe al botón. De esta forma, 
    se disparará el otro evento en escucha como si el usuario real hubiera hecho "click" en el botón.

    Al margen de este detalle, normalmente los Event se usan solamente para eventos reales del navegador. Si necesitamos controlar alguna acción 
    determinada utilizaremos "CustomEvent", asignándole un nombre de evento y personalizando su funcionamiento.

                                          const event = new Event("click", { detail: 123 });
                                          event.detail    // undefined

                                          const event = new CustomEvent("super-click", { detail: 123 });
                                          event.detail    // 123


    Por ejemplo, entre otras cosas, los "CustomEvent" permiten añadir información adicional al crear el objeto, mientras que el objeto "Event" no 
    lo permite.
*/

//  7.-  Eventos del navegador.  Eventos de teclado, ratón, formularios, etc...

/*
         Generalmente, cuando ocurre un "evento" debido a una acción del usuario, se dispara un "evento de navegador". 
         
         Son "eventos nativos específicos" que realizan una cierta tarea y donde su "objeto de evento" tiene propiedades o métodos especiales 
         para dicha tarea.


        7.1.-  Tipos de eventos.

               Normalmente, el evento del navegador, que es un evento nativo específico, que se dispara es de tipo "Event", sin embargo, 
               existe una amplia lista de eventos más específicos. Existen muchos y muy variados. Veamos una lista de algunos de los eventos 
               de navegador disponibles (no están todos):


               Tipo de evento 	                    Evento relacionado con...

                Animaciones
                  AnimationEvent 	            Información general de animaciones CSS.
                  AnimationPlaybackEvent 	    Estado de reproducción de la animación CSS.
                  TransitionEvent 	          Información de estado de la transición CSS.


                Interfaz de usuario
                  KeyboardEvent 	            Interacciones con teclas de teclado como keydown, keyup o keypress.
                  MouseEvent 	                Interacciones con dispositivo apuntador (ratón) como click, dblclick, mousedown, mouseup.
                  PointerEvent 	              Interacciones con dispositivo apuntador como pointerdown, pointerup... Acepta los de mouse.
                  TouchEvent 	                Interacciones con dispositivos con superficie táctil como touchstart, touchend, etc...
                  WheelEvent 	                Interacciones con la rueda de ratón o elemento similar como wheel.


                Carga de página
                  BeforeUnloadEvent 	        El instante justo antes de cerrar una pestaña o ventana del navegador como unload.


                Portapapeles
                  ClipboardEvent 	            Modificación del portapapeles con eventos como cut, copy o paste.


                Eventos de giroscopio
                  DeviceMotionEvent 	        Cambios en la posición o aceleración del giroscopio con devicemotion.
                  DeviceOrientationEvent 	    Cambios en la orientación del dispositivo con deviceorientation.


                Eventos de Drag and Drop
                  DragEvent 	                Acciones Drag and Drop del usuario mediante drag, drop, dragstart, dragend...


                Formularios
                  FocusEvent 	                Interacciones con el foco de un elemento con focus, blur, focusin y focusout.
                  InputEvent 	                Interacción al introducir texto en un elemento con input.
                  FormDataEvent 	            Envío de datos de formulario mediante formdata.
                  SubmitEvent 	              Envío de un formulario a través de un botón con submit.


                Tipografías
                  FontFaceSetLoadEvent 	      Carga de tipografías mediante loading, loadingdone o loadingerror.


                Gamepad API
                  GamepadAxisEvent 	          Interacción con la cruceta de un joystick o gamepad. Experimental.
                  GamepadButtonEvent 	        Interacción con los botones de un gamepad. Experimental.
                  GamepadEvent 	              Interacción al conectar un gamepad con gamepadconnected o gamepaddisconnected.


                Eventos de URL
                  HashChangeEvent 	          Modificación o cambio del anchor de una URL mediante hashchange.
                  NavigateEvent 	            Interacción que interfiere con el historial de navegación mediante navigate.
                  PopStateEvent 	            Interacción con una entrada del historial de navegación mediante popstate.


                Eventos de Mensajería
                  MessageEvent 	              Envío de mensaje a través de WebSocket, SSE, iframes, workers, WebRTC, etc...
                  CloseEvent 	                Cierre de evento de WebSocket.


                Pagos a través de navegador
                  PaymentMethodChangeEvent 	  Cambio del método de pago a través de la API de pagos del navegador.
                  PaymentRequestUpdateEvent 	Se ha modificado algún detalle del diálogo de pago del navegador.


                PictureInPicture
                  PictureInPictureEvent 	    Sistema de Picture-in-picture como enterpictureinpicture o resize.


                Eventos de voz
                  SpeechRecognitionEvent 	    Interacción con el sistema de reconocimiento de voz mediante result o nomatch.
                  SpeechSynthesisErrorEvent 	Errores en la interacción creando un mensaje con el sintetizador de voz.
                  SpeechSynthesisEvent 	      Interacción con el sintetizador de voz con pause, boundary, etc...


                Eventos personalizados
                  CustomEvent 	              Creación de eventos personalizados que explicamos detalladamente en Ver Custom Events


                Recuerda que esto es sólo una pequeña lista de todos los eventos de navegador que existen.


            Ejemplo de eventos:  Ejemplo con PointerEvent.

                                 Vamos a realizar un ejemplo con el evento "click". Nuestro código nos permitirá hacer "click" con el 
                                 ratón en cualquier parte de la pantalla. Nos mostrará los siguientes datos:

                                    1.-  El número de veces consecutivas que hemos hecho click: event.detail
                                    2.-  Las coordenadas de X donde has hecho click en la pantalla: event.x
                                    3.-  Las coordenadas de Y donde has hecho click en la pantalla: event.y


                                              <span></span>

                                              <script>
                                                const span = document.body.querySelector("span");

                                                document.body.addEventListener("click", (event) => {
                                                  const { x, y, detail } = event;
                                                  span.textContent = `Has hecho ${detail} CLICK en las coordenadas (${x}x${y})`;
                                                });
                                              </script>

                                              <style>
                                                body {
                                                  margin: 0;
                                                  width: 100vw;
                                                  height: 100vh;
                                                  background: lightgrey;
                                                  user-select: none;
                                                  font-size: 2rem;
                                                }
                                              </style>

            En la función "action" realizamos una desestructuración para simplificar el código y modificamos el contenido de texto del 
            elemento <span> cada vez que hacemos "click".
*/

//  8.-  Emisión de eventos.  Cómo emitir eventos (burbujeo y captura).

/*
En principio, puede parecer que emitir eventos en Javascript sea tarea fácil (y lo es), pero la emisión de eventos tiene muchos detalles que merece la pena abarcar en profundidad para entenderlos bien y no llevarnos sorpresas por no saber como funciona realmente.

Para verlo más claro, vamos a partir de un fragmento de código donde tenemos tres elementos <div> anidados, es decir, uno dentro de otro. Lo utilizaremos de base para los ejemplos:

<div class="root">
  <div class="parent">
    <div class="child">
      <button>Press me!</button>
    </div>
  </div>
</div>

Lo explico:

    El primer <div> tiene clase .root (abuelo), lo numeraremos con un 1
    El segundo <div> tiene clase .parent (padre), lo numeraremos con un 2
    El tercer <div> tiene clase .child (hijo), lo numeraremos con un 3

¿Cómo emitir eventos?

Para emitir eventos en Javascript, lo primero y obvio es que necesitaremos crear un evento, que puede ser de varios tipos:
Tipo de evento 	Descripción
Event 	Evento genérico. Ver eventos nativos
Evento de navegador 	Evento concreto de algún tipo de acción de usuario. Ver eventos específicos de navegador
CustomEvent 	Evento personalizado para dar funcionalidad propia. Ver eventos personalizados

Una vez creado, podremos emitirlo hacia un elemento HTML utilizando la función dispatchEvent(). Dependiendo de lo que queramos hacer, tenemos varias opciones al emitir el evento:

    Enviar el evento directamente a un elemento específico
    Enviar el evento a un elemento específico y que burbujee hacia sus contenedores padres
    Enviar el evento a un elemento específico, que burbujee hacia sus padres, capturarlo y procesarlo en la vuelta

Analicemos cada una de estas formas.
Emisión directa de un evento

La primera forma, y la más básica, sería emitir el evento directamente a un elemento del DOM:

    Creamos un evento. En nuestro ejemplo vamos a hacerlo con un CustomEvent.
    Seleccionamos un elemento del DOM para enviárselo.
    Lo emitimos hacia él usando .dispatchEvent().

El fragmento de código en cuestión sería el siguiente:

const event = new CustomEvent("user:message", {
  detail: {
    from: "Manz",
    message: "Hello!"
  }
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  button.dispatchEvent(event);
});

En este caso, al pulsar el botón, se ha emitido el evento a ese mismo elemento del DOM. Si este está escuchando el tipo de evento user:message con .addEventListener(), se disparará y ejecutará la función asociada.

    Este ejemplo quizás no tiene demasiado sentido, ya que es sólo un ejemplo teórico, sin demasiada utilidad práctica en muchos casos. Pero vamos a complicarlo un poco para hacerlo más interesante.

Propagación de eventos (bubbles)

Vamos con el segundo caso, una emisión de eventos donde existe propagación. Esta modalidad es exactamente igual a la anterior, sólo que tenemos definida la opción bubbles a true, por lo que el evento no sólo se emitirá al elemento indicado, sino que además de ello, luego comenzará a emitirse sucesivamente a sus contenedores padres hasta llegar al tope.

Para verlo claramente, vamos añadir unos atributos data-number en el marcado HTML. Esto no es más que unos metadatos de marcado HTML que podremos obtener desde Javascript más adelante:

<div class="root" data-number="1">
  <div class="parent" data-number="2">
    <div class="child" data-number="3">
      <button data-number="4">Press me!</button>
    </div>
  </div>
</div>

En tercer lugar, seguimos emitiendo el evento al elemento <button>, la diferencia es que ahora escuchamos el evento en el elemento .root para comprobar si se ha propagado hasta él. En la modalidad directa anterior, si lo hicieramos, no recibiría nada. Pero en esta modalidad, donde hay propagación de eventos, si efectivamente el evento se está propagando, debería recibirlo:

const root = document.querySelector(".root");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.dispatchEvent(new CustomEvent("user:message", {
    detail: {
      name: "Manz"
    },
    bubbles: true,
  }));
});

root.addEventListener("user:message", (event) => {
  const name = event.detail.name;
  const number = event.target.dataset.number;
  console.log(`Message received from ${name} (${number})`);
});

Al establecer bubbles a true, en lugar de emitir el evento y detenerse en ese mismo elemento, el evento se irá propagando por cada uno de sus padres, hasta llegar al elemento padre del documento:

    El evento se emite al <button>.
    El evento se propaga al elemento <div> con clase .child.
    El evento se propaga al elemento <div> con clase .parent.
    El evento se propaga al elemento <div> con clase .root.
    El evento se propaga al elemento <body>, que es el contenedor que contiene todo el documento.
    El evento se propaga al elemento <html>, que es el contenedor de toda la página HTML.
    El evento se propaga al elemento document, que es el que representa todo el DOM.
    Finalmente, el evento se propaga al elemento Window, que es la referencia a la pestaña actual del navegador.

Observa también, que hemos utilizado como parámetro de la función event, lo que nos va a dar información sobre el evento. Por ejemplo, mediante event.target podemos acceder al elemento al que se ha emitido originalmente el evento, mientras que con event.detail podemos acceder a la información que se incluyó en el evento al crearlo.

    Podemos indicar expresamente que una propagación de eventos se detenga. Para profundizar en este tema, echa un vistazo al artículo Propagación de eventos.

Captura de eventos (capture)

Si registraramos como se emiten los eventos del ejemplo anterior, con un .addEventListener() en cada uno de los elementos <div>, observaríamos que el orden de recepción de eventos es 3, 2, 1, es decir, primero se disparan los eventos en los elementos interiores, y luego en los elementos padres a medida que se burbujea hacia arriba.

Este es el comportamiento por defecto de la fase de burbujeo de Javascript, sin embargo, podemos activar la fase de captura, que invierte el orden. Realmente, lo que hace es ir capturando todos los eventos en cada fase del burbujeo y cuando termina toda la trayectoria de propagación, vuelve sobre sus pasos y realiza el mismo paso pero en orden inverso.

Para ello, solo tenemos que modificar el ejemplo anterior, añadiendo un tercer parámetro en el .addEventListener() que será un objeto de opciones que contendrá capture a true:

root.addEventListener("user:message", (event) => {
  const name = event.detail.name;
  const number = event.target.dataset.num;
  console.log(`Message received from ${name} (${number})`);
}, { capture: true });

De esta forma, el orden terminaría siendo 1, 2, 3 en lugar de 3, 2, 1.
Detectar fase del evento

Si buscamos una forma más directa de saber en que fase nos encontramos, podemos acceder a la propiedad .eventPhase del evento. Esta propiedad nos devolverá un que nos dará la fase concreta:
Propiedad 	Valor 	Descripción
Propiedad
.eventPhase 	Devuelve la fase en la que se encuentra el evento.
Valores posibles
Event.NONE 	0 	Evento no está procesándose.
Event.CAPTURING_PHASE 	1 	El evento se ha emitido en modo captura (desciende al elemento específico).
Event.AT_TARGET 	2 	El evento se ha emitido sin ningún modo (sólo al elemento específico).
Event.BUBBLING_PHASE 	3 	El evento se ha emitido en modo burbujeo (asciende al elemento raíz).

En el caso de devolvernos un valor 1, significa que el evento fue escuchado con el flag capture a true, si devuelve 2 es que el evento fue emitido directamente, y si devuelve 3 es que fue propagado con el flag bubbles a true.

*/

//  9.-  Propagación de eventos.  Como gestionar y manejar la propagación de eventos.

/*
Ahora que conocemos lo básico sobre los eventos nativos y los eventos personalizados, así como la emisión y propagación de eventos que afecta a ambos, vamos a aprender un poco más sobre esta propagación, como gestionarla, prevenirla y modificarla si es necesario.

En primer lugar, recordemos como gestionamos un evento y su propagación:

<div class="root">
  <div class="parent">
    <div class="child">
      <button>Click me!</button>
    </div>
  </div>
</div>

Tenemos esta estructura HTML, donde existe un botón dentro de tres elementos <div> anidados uno dentro del otro en el DOM. Vamos a escuchar los eventos de tipo click en el <button> y cuando ocurra alguno, crearemos un evento personalizado y lo enviaremos al botón. Como tenemos el bubbles activado, no se detendrá, sino que seguirá propagándose hacia sus contenedores padres:

const button = document.querySelector("button");
const root = document.querySelector(".root");
button.addEventListener("click", (event) => {
  const customEvent = new CustomEvent("warning", { bubbles: true });
  button.dispatchEvent(customEvent);
});

root.addEventListener("warning", (event) => {
  console.log("Evento click recibido en el root.", event);
});

Observa que al final nos hemos puesto a escuchar los eventos ocurridos en el elemento <div> raíz, es decir, el primero de todos. Si llega hasta ahí nuestro evento personalizado, ejecutará el console.log() mostrando dicho evento. De no tener el bubbles a true, el custom event nunca se habría propagado hasta al elemento root, sino que se habría quedado en el el elemento <button>.
Propagación de eventos

Vamos a analizar como funciona la propagación de eventos en Javascript. Los eventos tienen una serie de propiedades que analizaremos a continuación. Son las siguientes:
Propiedad o Método 	Descripción
Propiedades
.bubbles 	Indica si el evento se propagará hacia contenedores padres o se detendrá en el elemento emitido.
.composed 	Indica si el evento puede atravesar un Shadow DOM en su propagación, o no.
Destino del evento
.target 	Indica el elemento objetivo (donde se hizo el dispatchEvent()).
.currentTarget 	Indica el elemento actual donde se ha escuchado el evento.
Método
.composedPath() 	Muestra el camino de elementos por donde se ha propagado el evento.

Centremonos en el fragmento de código anterior, donde creamos el evento personalizado y establecemos si se va a propagar el evento. En el caso anterior, hemos activado la propiedad bubbles del segundo parámetro de opciones de la instancia del evento personalizado con new CustomEvent():

const customEvent = new CustomEvent("warning", { bubbles: true });
button.dispatchEvent(customEvent);

Propagación y Shadow DOM

Hay que tener en cuenta que pueden ocurrir varias cosas:

    Si el flag bubbles está desactivado, el evento se emite a <button> y se detiene ahí.
    Si el flag bubbles está activado, el evento se emite a <button>, luego a su contenedor padre, y así sucesivamente.
    Si el flag composed está desactivado, el evento se detendrá al encontrar un Shadow DOM.
    Si el flag composed está activado, el evento no se detendrá si encuentra un Shadow DOM.

Trayectoria de propagación

Si tienes dudas, una buena forma de comprobar el camino que ha seguido el evento emitido con bubbles es ejecutando el método .composedPath(). Este nos mostrará por donde ha ido pasando el evento:

root.addEventListener("warning", (event) => {
  console.log("Evento click recibido en el root.");
  const path = event.composedPath();
  console.log(path);
});

// path = [button, div.child, div.parent, div.root, body, html, document, Window]

Observa que la constante path tiene un con los elementos por donde ha ido pasando. En primer lugar, el evento fue emitido al <button>, luego a su padre .child, luego a su padre .parent, luego a su padre .root, luego al <body>, luego al <html> y por último al document (el documento actual) y Window la pestaña actual del navegador.

Por otro lado, la propiedad .target nos dará el elemento desde donde se emitió el evento, <button> en nuestro caso, y la propiedad .currentTarget nos devolverá el elemento actual en el que se encuentra, .root en nuestro caso.
Detener la propagación

Por defecto, los eventos nativos tienen la propiedad .cancelable a true. Esto significa que los eventos pueden cancelar su propagación utilizando los métodos .stopPropagation() o .stopImmediatePropagation().
Propiedad o Método 	Valor por defecto 	Descripción
Propiedad
.cancelable 	true 	Indica si es posible cancelar el evento.
Métodos
.stopPropagation() 	Detiene la propagación en el evento en cuestión.
.stopImmediatePropagation() 	Detiene la propagación en todos los eventos del mismo tipo.

Vamos a modificar el ejemplo inicial que teníamos, y añadir un evento en el elemento intermedio .parent que cancele la propagación de eventos mediante .stopPropagation(). Esta detención de la propagación de eventos en .parent debería evitar que el evento llegue hasta .root, a pesar de tener el flag bubbles activo.

const root = document.querySelector(".root");
root.addEventListener("warning", (event) => {
  console.log("Evento click recibido en el root.", event);
});

const parent = document.querySelector(".parent");
parent.addEventListener("warning", (event) => {
  parent.stopPropagation();
  console.log("Recibido en parent");
});

La diferencia de .stopPropagation() y .stopImmediatePropagation() es que este último detiene la propagación en todos los eventos de su mismo tipo, mientras que el primero sólo detiene el evento concreto donde lo escribimos. Recuerda que para que estos métodos funcionen, el evento debe tener el flag .cancelable a true.

*/



//  Nota.-  Funcion Function.prototype.bind(), la funcion "ligada"

/*
    1.-  Resumen.  El metodo "bind()"

    El metodo "bind()" devuelve una nueva función (llamada funcion ligada), con el mismo "cuerpo" (codigo) que la funcion origen que la utiliza, 
    pero que cambia su objeto "this", poniendo y utilizando el objeto "this" que se le pase como parametro.

    El método "bind()" crea una "nueva función" (funcion ligada), que cuando es llamada, asigna a su operador "this" el valor entregado, con una 
    secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

    Nota.-  El valor de "this" es ignorado cuando la función es llamada con el operador "new".

    Nota.-  A diferencia de los métodos "call()" y "apply()", el metodo "bind()" no ejecuta inmediatamente la función. Simplemente devuelve una 
            nueva versión de la función, cuyos objeto "this" toma el que se le pase como argumento: "thisArg".


    Sintaxis:  funcion.bind(thisArg[, arg1[, arg2[, ...]]])  => nueva "funcion ligada", copia de la original con el objeto "this" cambiado al 
                                                                que se le pase como argumento "thisArg"

              Parametros:
                          thisArg: es un valor (objeto) que será enviado a la función destino cuando se llame a la función de enlace, y que 
                                   representara el valor del objeto "this" en la nueva funcion.
                                   Este valor será ignorado si la función de enlace es construida usando el operador "new".

                          arg1, arg2, ...:  son los argumentos que se enviarán además de los provistos a la función de enlace cuando se invoque 
                                            la función destino.

              Valor de retorno:  una "copia de la función entregada" con el valor especificado "this" en el argumento "thisArg" y los 
                                 "argumentos iniciales".


    Descripción: la función - metodo ligada "bind()", crea una "nueva función" ("función ligada") con el mismo cuerpo (propiedad interna call en 
                 términos de ECMAScript 5) como la función que será llamada (la función objetivo de la función ligada) pero con la referencia 
                 "this" asociada al primer argumento de "bind()", "thisArg", el cual no podrá ser sobreescrito. 
                 
                 La funcion "bind()" también acepta "parámetros predeterminados", que antecederán al resto de los parámetros específicos cuando 
                 la función objetivo sea llamada. Una "función ligada" "bind()" también puede ser construída utilizando el operador new: al hacerlo,
                 actuará como si en su lugar hubiera sido construída la función objetivo.

                 En este último caso, el parámetro correspondiente para "this" será ignorado, aunque los parámetros predeterminados que antecederán 
                 al resto sí serán provistos para la función emulada.


    Ejemplos:

    0.-  Uso del metodo "bind()" para el enlace de funciones.

         Cuando pasa un método, un objeto es a otra función como devolución de llamada , "this" se pierde. Por ejemplo:

                                                  const person = {
                                                      name: 'John Doe',
                                                      getName: function() {
                                                          console.log(this.name);
                                                      }
                                                  };

                                                  setTimeout(person.getName, 1000);

                                    Producción:

                                                  undefined

          Como puede ver claramente en la salida, los retornos de "person.getName()" son: "undefined" en lugar de: 'John Doe'.

          Esto se debe a que la funcion "setTimeout()" recibió la función "person.getName" por separado del objeto "person".

          La declaración:

                                                  setTimeout(person.getName, 1000);

          Se puede reescribir como:

                                                  let f = person.getName;
                                                  setTimeout(f, 1000); // lost person context


          El "this" interior de la funcion "setTimeout()"" se establece en el "objeto global" en modo no estricto y "undefined" en modo estricto.

          "person.getName" => Por lo tanto, cuando se invoca la devolución de llamada, "name" no existe en el objeto global, se establece 
                              en "undefined".


          Para solucionar el problema, puede envolver la llamada al metodo "person.getName" en una función anónima, como esta:

                                                    setTimeout(function () {
                                                        person.getName();
                                                    }, 1000);

          Esto funciona porque obtiene el "person" del alcance externo y luego llama al método "getName()".

          O puedes usar el metodo "bind()":

                                                    const f = person.getName.bind(person);
                                                    setTimeout(f, 1000);

          En este código:

                              1.-  Vincule el metodo "person.getName" al objeto "person".
                              2.-  En segundo lugar, pase la función enlazada "f" con el valor de "this" establecido en el objeto "person" 
                                   a la funcion "setTimeout()".


    1.-  Ejemplo: Crear una función ligada.

                  El uso más simple de "bind()" es hacer que una función que, sin importar cómo es llamada, siempre apunte al mismo objeto con 
                  la referencia "this". Un error común para nuevos programadores de JavaScript es que obtienen una referencia a un método de un 
                  objeto, posteriormente ejecutan ese método desde la referencia externa y esperan que la referencia de "this" siga apuntando al 
                  objeto original de donde se obtuvo el método (v.g. cuando se usa ese método en un callback). 
                  
                  Sin el debido cuidado, el objeto original es comúnmente perdido. Creando una "función ligada" desde la función empleando el 
                  objeto original, resuelve limpiamente este problema:


                                                this.x = 9;
                                                const module = {
                                                  x: 81,
                                                  getX: function() { return this.x; }
                                                };

                                                module.getX(); // 81

                                                let getX = module.getX;
                                                getX(); // 9, porque en este caso, "this" apunta al objeto global

                                                // Crear una nueva función con 'this' asociado al objeto original 'module'
                                                const boundGetX = getX.bind(module);
                                                boundGetX(); // 81


    2.-  Ejemplo: Funciones Parciales.

        El siguiente uso simple de "bind()" es definir una función con argumentos predeterminados que precederán a los argumentos finales 
        de la función ligada. Estos argumentos iniciales (en caso de haberlos) se definen a continuación de lo que será la referencia de "this"
        y son entonces enviados como argumentos de la función objetivo, seguidos por los argumentos enviados a la función ligada cada vez 
        que dicha función sea llamada.


                                                function list() {
                                                  return Array.prototype.slice.call(arguments);
                                                }

                                                const list1 = list(1, 2, 3); // [1, 2, 3]

                                                // Crear funcion (sin referencia "this") con argumento inicial predeterminado
                                                const leadingThirtysevenList = list.bind(undefined, 37);

                                                const  list2 = leadingThirtysevenList(); // [37]
                                                const  list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]


    3.-  Ejemplo: Con setTimeout.

         De manera predeterminada, dentro de window.setTimeout(), la palabra reservada "this" será "setteada" al objeto window (o a global). 
         Cuando se esté trabajando con métodos de clase que requieran que "this" se refiera a instancias de clase, usted puede explícitamente 
         ligar "this" a la función callback para mantener la referencia de la instancia.

                                                  function LateBloomer() {
                                                    this.petalCount = Math.ceil(Math.random() * 12) + 1;
                                                  }

                                                  // Declare bloom after a delay of 1 second
                                                  LateBloomer.prototype.bloom = function() {
                                                    window.setTimeout(this.declare.bind(this), 1000);
                                                  };

                                                  LateBloomer.prototype.declare = function() {
                                                    console.log('I am a beautiful flower with ' +
                                                      this.petalCount + ' petals!');
                                                  };


    4.-  Ejemplo: Funciones ligadas usadas como constructores.

         Advertencia: Esta sección demuestra las capacidades de JavaScript y documenta algunos usos extremos del método bind(). Los métodos 
                      mostrados a continuación no son la mejor forma de hacer las cosas y probablemente no deberían ser utilizados en ningún 
                      ambiente productivo.

         Las funciones ligadas "bind()" son automáticamente adecuadas para usarse con el operador new para construir nuevas instancias creadas 
         por la función objetivo. Cuando una función ligada es utilizada para construir un valor, el parámetro enviado para reemplazar la 
         referencia "this" es ignorado. De cualquier forma, los argumentos iniciales sí son tomados en consideración y antecederán a los parámetros 
         que se envíen al constructor:


                                                  function Point(x, y) {
                                                    this.x = x;
                                                    this.y = y;
                                                  }

                                                  Point.prototype.toString = function() {
                                                    return this.x + ',' + this.y;
                                                  };

                                                  var p = new Point(1, 2);
                                                  p.toString(); // '1,2'


                                                  var emptyObj = {};
                                                  var YAxisPoint = Point.bind(emptyObj, 0/*x* /);
                                                  // not supported in the polyfill below,
                                                  // works fine with native bind:
                                                  var YAxisPoint = Point.bind(null, 0/*x* /);

                                                  var axisPoint = new YAxisPoint(5);
                                                  axisPoint.toString(); // '0,5'

                                                  axisPoint instanceof Point; // true
                                                  axisPoint instanceof YAxisPoint; // true
                                                  new Point(17, 42) instanceof YAxisPoint; // true


          Note que no necesita hacer nada especial para crear una función ligada para usarse con "new". El razonamiento es que usted no necesita 
          hacer nada especial para crear una función ligada para ser llamada planamente, aún si usted prefiriera requerir que la función ligada 
          sea llamada únicamente utilizando new.

                                                // Ejemplo que puede ser ejecutado directamente en tu consola JavaScript
                                                // ...continúa de arriba

                                                // Aún puede ser invocada como una función normal
                                                // (aunque es usualmente indeseable)
                                                YAxisPoint(13);

                                                emptyObj.x + ',' + emptyObj.y;
                                                // >  '0,13'


          Si desea utilizar una función ligada únicamente usando "new", o únicamente mediante una llamada directa, la función objetivo debe forzar 
          esa restricción.


    5.-  Ejemplo: Crear atajos.

         "bind()" también es útil en casos en los que desea crear un "atajo" para una función que requiere una referencia específica para "this".

         Tomando "Array.prototype.slice", por ejemplo, el cual se desearía utilizar para convertir un objeto tipo array a un arreglo real. 
         Podría crear un atajo como el siguiente:

var slice = Array.prototype.slice;

// ...

slice.call(arguments);
Con bind(), esto puede ser simplificado. En el siguiente fragmento de código, slice es una función ligada a la función call() de Function.prototype (en-US), con la referencia this setteada a la función slice() de Array.prototype. Esto significa que llamadas adicionales a call() pueden omitirse:

JS
Copy to Clipboard

// same as "slice" in the previous example
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);
*/



