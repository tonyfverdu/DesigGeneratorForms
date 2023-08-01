//    ****    Componentes Web (WebComponents)   *****************************************************************************************************
/*

  Los componentes web son un conjunto de "características" (standars) que actualmente están siendo añadidas por el W3C a las especificaciones HTML 
  y DOM de forma que permite la creación de "widgets" o "componentes reutilizables" en los documentos y aplicaciones web.
  
  La intención de estos componentes es traer la "ingeniería SW basada en componentes" a la World Wide Web. El modelo de componentes permite la 
  "encapsulación" e "interoperabilidad" de elementos de HTML individuales.

  Las principales características de los componentes web (WebComponents) son 4 y pueden utilizarse juntas o por separado:

    1.-  Custom Elements:  Elementos personalizados - APIs para definir elementos HTML nuevos.
    2.-  Shadow DOM:  Sombra DOM - DOM y estilos encapsulados, con composición.
    3.-  Imports MSC - módulos ECMAScript (ESModules o ESM): Importaciones de HTML - Métodos declarativos para importar documentos HTML 
                                                             (o modulos JS) a otros documentos.
    4.-  HTML Templates: Plantillas de HTML en WebComponets- El elemento <template> permite que los documentos contengan trozos "inertes" del DOM.
*/

/*  Los Componentes Web ( "WebComponents") son un "paquete" (características - standars -APIs) de diferentes tecnologías que permiten crear 
    "elementos HTML personalizados reutilizables", los componentes Web, con su funcionalidad "encapsulada" y apartada del resto del código 
    de la pagina-documento HTML, que se pueden reutilizar y comunicar entre si en el documento Web y en las aplicaciones web.

    "WebComponents" es el nombre por el que se conoce a un conjunto de estas "características relacionadas" con HTML, CSS y Javascript, 
    mediante las cuales se pueden crear estos "WebComponents", que no son mas que elementos HTML personalizados, encapsulados, mantenibles y 
    reutilizables, sin que sea necesario utilizar herramientas externas, librerías o frameworks.






*/

//  1.-  Conceptos y usos de los WebComponents.

//  ¿Por qué usar WebComponents?  => Los "WebComponents" persiguen varios objetivos, entre los que se encuentran los siguientes:

//   1.-  Ser fáciles de "reutilizar": A menudo, creamos elementos o partes Sw que se repiten en nuestra web. Los "WebComponents" nos permiten 
//                                     reutilizarlos en ciertas partes del documento Web, e incluirlas mediante una "etiqueta HTML personalizada". 
//                                     Es una manera de desarrollar aplicaciones forma cómoda y sencilla, permitiendo la reutilizar estos WebComponents 
//                                     en diferentes partes del documento                                   

//   2.-  "Encapsulación": Necesitamos una forma de crear estos elementos "aislados" unos de otros. Por varias razones. Para evitar cambiar su contenido 
//                         por error, para evitar "colisiones" de CSS de elementos que se llaman igual, etc. 
//                         Se trata de traer una característica muy popular y deseada en el mundo de la programación, que facilita la labor de los 
//                         desarrolladores y hace más fácil la reutilización en aplicaciones.

//   3.-  "Interoperabilidad": Facilitar la posibilidad de "intercambiar información" entre sistemas diferentes, utilizando tecnologías abiertas y 
//                             estándares, que aseguran que van a funcionar en diferentes dispositivos y con las que no dependemos de tecnologías de 
//                             empresas particulares y sus decisiones de negocio privadas.

//   4.-  Ser fáciles de mantener: A medida que escribimos código en una web, la cantidad de líneas de código se hace mayor y cada vez es más 
//                                 complicado con un enfoque global. Necesitamos una forma de poder enfocarnos en una característica concreta, que 
//                                 sólo tenga HTML, CSS y Javascript que influya a dicha característica específica.

/*
    Como desarrolladores, sabemos que "reutilizar código" tanto como sea posible es una buena idea. Esto tradicionalmente no es sencillo para
    estructuras de marcado personalizadas — piense en el complejo HTML (y sus estilos y scripts asociados) que en ocasiones se han tenido que
    escribir (incluso en diferentes ficheros) para renderizar controles de interfaz (UI) personalizados, y ahora usarlos múltiples veces puede
    crear un caos en la página si no se es cuidadoso.

    Los "Componentes Web" ("WebComponents") apuntan a resolver dichos problemas — consiste en "cuatro tecnologías" principalmente, las que se pueden
    usar "juntas" para crear "elementos HTML personalizables y versátiles", que encapsulan una funcionalidad particular en el WebComponent, y 
    pueda ser reutilizada donde sea y tantas veces como se quiera sin miedo a colisiones de código.

    Como hemos dicho anteriormente, los "WebComponents" son un conjunto de "características nativas - standars -APIs" que hacen posible la creación 
    de estos componentes webs sin necesitar librerías o frameworks particulares, sino haciendo uso únicamente de HTML, CSS y Javascript. 
    
    Veamos las cuatro características - tecnologias - standars -APIs en que se basa los WebComponents:

    1.-  "Custom elements" (elementos personalizados): Un conjunto de "APIs de JavaScript" que permiten definir "elementos HTML personalizados" y su
                                                       comportamiento (funcionalidad desde JS y estilo desde CSS), que entonces puede ser 
                                                       (re)utilizado tantas veces como se deseé en la interfaz del usuario.

        Los "custom elements" (elementos personalizados) son una de las características principales que forman los WebComponents. Con ellos, se nos
        permite crear nuestras "propias etiquetas HTML", pudiendo dotarlas de su propia funcionalidad, marcado HTML o estilo CSS.

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


    2.-  "Shadow DOM": Un conjunto de "APIs de JavaScript" para crear y fijar un <<árbol DOM "sombra">> (opcional) encapsulando a un elemento — 
                       que es renderizado por separado del documento DOM principal — controlando la funcionalidad  y estilo CSS del componente asociado. 
                     
                       De esta forma, se pueden mantener características de un elemento en privado, así puede tener el estilo y los scripts sin miedo 
                       de colisiones con otras partes del documento.

          Probablemente, una de las características más interesantes (y complejas) de WebComponents sea el "Shadow DOM". Esta característica opcional 
          se basa en "crear un DOM" (estructura arborea de elementos HTML) particular en un elemento HTML. De esta forma, además del DOM "real" global 
          del documento que normalmente utilizamos, tenemos uno particular, asociado solamente a este WebComponent.

          Así pues, un elemento HTML con "Shadow DOM" se podría ver de esta forma:

                                <div class="element">
                                  #shadow-root
                                    <div class="inner-element">
                                      ...
                                    </div>
                                </div>

          En el ejemplo anterior, el elemento <div class="element"> forma parte del DOM "real" global del documento. Es un elemento vacío, sólo que 
          en este ejemplo contiene un #shadow-root, que es un "DOM particular" ("Shadow DOM"). En el interior de ese DOM particular del elemento, 
          existe una etiqueta "custom element": <div class="inner-element">. Dicha etiqueta HTML forma parte del "Shadow DOM" del elemento 
          <div class="element">, e incluira contenido (Elements HTML, logica y funcionalidad con JS y estilo con CSS)

          Nota: Aunque sirve para muchas cosas más, la misión del "Shadow DOM" es crear una "estructura aislada". Es una excelente forma de crear 
                estructuras con estilos CSS locales, que sólo repercutan en dicha estructura, y en la que nuestro CSS no afecte al CSS exterior, 
                ni desde el CSS exterior afecta al CSS interior, algo que los desarrolladores llevan buscando años de forma nativa.


    3.-  "HTML templates" (plantillas HTML): Los elementos <template> y <slot> permiten escribir "plantillas de marcado HTML" que no son desplegadas 
                                             en la página renderizada (contenido inerte). Éstas pueden ser "reutilizadas" en múltiples ocasiones 
                                             como base de la estructura de un elemento personalizado.

          Otra característica interesante de "WebComponents" son los "HTML templates" ("plantillas de marcado HTML"). Se trata de etiquetas nativas
          de HTML (<template> y <slot> ) que nos permite crear "contenido inerte" en una página HTML, esto es, contenido HTML que no se procesará
          por el navegador (no se renderizara), y que permanecerá «muerto» hasta que lo "clonemos" mediante Javascript, y creemos nuevos elementos 
          a partir de él.

                                          <template id="user-template">
                                            <div class="user">
                                              <h1>Username</h1>
                                              <img src="user-image.png" alt="Username">
                                              <a href="https://website.com/">URL</a>
                                            </div>
                                          </template>

          Todos los elementos HTML que existen en el interior de la plantilla (HTML templates) (imágenes, scripts, etc...) no serán procesados 
          durante la carga de la página, es decir, no son renderizados al llegar a el por la pagina, por lo tanto, el navegador no invertirá 
          recursos en su procesamiento.

          Esto nos puede interesar para "preparar" contenido reutilizable y que solo consuma recursos cuando lo "clonemos" desde Javascript.

    4.-  Módulos ES (ESM) (importacion de modulos ESM):  Los módulos ECMAScript (ESModules o ESM) son otra de las características que hace 
                                                         posible que existan los WebComponents. Se trata de un estándar de Javascript, que permite 
                                                         organizar elementos de nuestro código Javascript (constantes, funciones, clases, etc...) 
                                                         en módulos separados (ficheros) y exportarlos, para ponerlos a disposición de otro archivo 
                                                         Javascript que quiera importarlos.

          Estos import/export se pueden hacer directamente desde Javascript a través de los Módulos ESM o incluso desde HTML, utilizando el atributo 
          "type" en la etiqueta <script> establecido al valor module:

                                            <script type="module" src="fichero.js"></script>

          Este tipo de importación - exportacion de módulos es equivalente al import "./fichero.js"; que podemos realizar desde Javascript y nos 
          puede servir para cargar WebComponents directamente desde HTML.

          Nota: En alguna ocasión es posible que nos encontremos una característica llamada "Imports HTML". En algún momento llegó a formar parte 
          de WebComponents, pero finalmente fue descartada y marcada como obsoleta, a favor de los Módulos ESM, una característica más moderna y 
          potente.

          Nota.-  HTML/JSON/CSS Modules

          Los "módulos ESM" anteriormente mencionados, son la forma nativa de importar ficheros ".js" desde Javascript o HTML. Sin embargo, sería 
          genial poder hacer lo mismo con ficheros ".json", ".css" o incluso ".html". Esa es la idea de "JSON Modules", "CSS Modules" y 
          "HTML Modules", que permitirán importar en objetos Javascript, objetos CSSStyleSheet y elementos del DOM, respectivamente.

          Por ejemplo, observa la siguiente línea de código:

                            import songs from "./songs.json" with { type: "json" };

          Esta sería la forma de importar, de forma estática un fichero JSON desde Javascript. Ten en cuenta que se añade una terminación "with"
          mediante la cuál se le indica el tipo de dato importado, que en nuestro caso es un fichero ".json". De la misma forma, podríamos hacerlo 
          con un import dinámico:

                            const songs = await import("songs.json", { with: { type: "json" } });

          De la misma forma, HTML Modules y CSS Modules (ojo, no confundir con CSS Modules) serán implementaciones nativas del navegador para 
          permitir importar archivos HTML o CSS, al igual que el ejemplo de JSON anterior.

          Estas especificaciones aún están en fase experimental, pero van soportándose poco a poco:

              JSON modules está soportado desde Chrome 91+
              CSS modules está soportado desde Chrome 93+
              HTML modules aún no está soportado en Chrome


    PASOS PARA IMPLEMENTAR UN WEBCOMPONENT:

    La aproximación básica para implementar un componente web ("WebComponent"), generalmente es la siguiente:

    1.-  Crear una "clase" o "función" en la cual especificar la funcionalidad del componente web. Si se usa una clase, usar la sintaxis de ES2015.

                                                    <app-element>
                                                        Contenido de nuestro elemento personalizado
                                                    </app-element>

                                                    <style>
                                                      app-element {
                                                        background: black;
                                                        color: white;
                                                        padding: 5px;
                                                      }
                                                    </style>

                                                    class AppElement extends HTMLElement {
                                                      constructor() {
                                                        super();
                                                        console.log("Inicializado...");
                                                      }
                                                    }

    2.- "Registrar" el nuevo elemento personalizado utilizando el método "CustomElementRegistry.define()", pasándole el nombre del elemento a ser
         definido (nombre del custom element), la clase o función en la cuál su funcionalidad esta especificada, y opcionalmente, de que elemento
         hereda.

                                          CustomElementRegistry.define("app-element", AppElement, HTMLElement)  // => asociacion del "custom element" 
                                                                                                    //con la funcionalidad de clase JS ("AppElement")

    3.-  Si se requiere, adjuntar un "shadow DOM" al elemento personalizado usando el método "Element.attachShadow()". Añadir elementos hijos,
         oyentes de eventos, etc., al shadow DOM utilizando métodos normales del DOM.

                                          Element.attachShadow()

    4.-  Si se requiere, definir una "plantilla HTML" utilizando <template> y <slot>. Nuevamente usar métodos regulares del DOM para clonar la
         plantilla y acoplarla al shadow DOM.

    5.-  Utilizar los "componentes Web personalizados" en la página web cuando se desee, como se utilizaría cualquier otro elemento HTML.


  1.-  Estructura de carpetas de un proyecto con WebComponents

       Ahora que ya conocemos las bases de los Custom Elements (la parte de WebComponents que permite crear nuestras propias etiquetas personalizadas), 
       toca comenzar a disenar y desarrollar componentes básicos para ir viendo la estructura que podemos seguir para dotarle de funcionalidad. 
       
       Vamos a ver como preparar una estructura de carpetas y archivos utilizando WebComponents, como crear nuestro primer componente y las diferentes 
       formas de enlazarlo (conectarlo), tanto desde HTML como desde Javascript.


  1.1.-  Estructura de archivos.

         Quizás, lo primero que deberíamos tener claro es la "estructura de carpetas y archivos" que vamos a tener para crear nuestros componentes.

         En principio, esta «arquitectura» depende mucho de lo que queramos hacer y es muy variable dependiendo de nuestros objetivos, pero vamos 
         a partir de ejemplo sencillo de base, donde "src" es la carpeta que contiene nuestro código fuente:

                      - src
                        +-- components/
                        |     +-- AppElement.js
                        +-- index.html
                        +-- index.js

         Partimos de un archivo "index.html" (el punto de entrada de la aplicacion Web, el fichero que abre inicialmente el navegador). 
         Dicho archivo HTML puede cargar directamente (como veremos más adelante) el componente "AppElement.js", que se encuentra dentro de la carpeta 
         "components/"", o puede cargarlo a través de un fichero "index.js" que hace de fichero «centralizador» de importaciones de ficheros JS.

         Nuevamente, dejar claro que esto es sólo un ejemplo de partida y que esta estructura puede variar mucho dependiendo del proyecto, objetivo y 
         necesidades. Aún así, es un buen ejemplo inicial para comenzar.


  1.2.-  Crear un WebComponent: "AppElement.js"

         Para empezar, vamos a crear el componente básico mínimo necesario para hacerlo funcionar => crear una clase JS que herede de HTMLElement
         
         Como ya hemos visto, el desarrollo del WebComponent consistira en una "clase" que debe extender de la clase principal de elementos HTML:  
         "HTMLElement", y posteriormente "asociar - registrar" el componente creado por medio de de la sentencia: "customElements.define()", 
         donde hay tres parametros posibles:  el nombre de la etiqueta "custom element", la clase JS del componente Web y opcionalmente el elemento 
         del que hereda con el nombre de una etiqueta HTML (nuestro custom element):

                        class AppElement extends HTMLElement {

                          constructor() {
                            super();
                          }
                        }

                        customElements.define("app-element", AppElement);

         Nota.-  La sentencia: customElements.define(), "registra" el nuevo elemento personalizado utilizando el método "CustomElementRegistry.define()", 
                 pasándole tres parametros posibles: el nombre del elemento a ser definido (nombre del custom element), la clase o función en la cuál 
                 su funcionalidad esta especificada, y opcionalmente, de que elemento hereda.

                        CustomElementRegistry.define("app-element", AppElement, HTMLElement)  // => asociacion del "custom element" 
                                                                                              //    con la funcionalidad de clase JS ("AppElement")


         Nota.- Como buena práctica, este fichero suele nombrarse igual que la clase, "AppElement.js" y suele colocarse en una carpeta components/, 
         aunque esto puede depender de la arquitectura utilizada.

         Nota: En los casos que el "constructor" del componente no tenga ninguna lógica (solo incluya el super(), como en el ejemplo anterior) 
         podemos ahorrarnos escribir el constructor, ya que es el comportamiento que tiene por defecto.


  1.2.- Cargar componentes.

        Una vez tengamos un WebComponent creado (una clase JS que contiene la logica del WebComponent), lo que toca es aprender los pasos 
        para cargarlo y utilizarlo en la aplicacion Web

        Como habrás observado, tenemos los archivos "index.html" e "index.js", y la carpeta "components/" que contiene el archivo "AppElement.js". 
        Sin embargo, no hemos mencionado como están cargados. Se puede hacer de varias formas, vamos a analizarlas:

        1.2.1-  Enlazar desde HTML (script).

                Probablemente, es la forma más fácil de cargar el WebComponent creado (clase JS) en la aplicacion Web (index.html), simplemente 
                se debe cargar este fichero de clase JS desde el HTML con la etiqueta <script src="./components/AppElement.js"></script>

                                      <script src="./components/AppElement.js"></script>

                La etiqueta de script se puede colocar o bien en el head o como ultima etiqueta antes del </body> del documento.

                Una vez hecho esto, se puede usar el componente (representado por la etiqueta del custom element) donde  y cuantas veces se 
                requiera en el documento web, simplemente escribiendo la nueva etiqueta del "custom element":

                                      <app-element></app-element>


        1.2.2.-  Enlazar desde Javascript (modulos import/export)

                Sin embargo, podríamos preferir cargar el WebComponent desde Javascript en lugar de HTML, ya que puede ser más versátil y flexible 
                en ciertas situaciones. Por ejemplo, si tenemos un gran número de componentes quizás podemos preferir centralizar los "imports" 
                en un fichero central de Javascript, que pueda ser reutilizado, en lugar de tener varias etiquetas <script> en varios archivos HTML 
                diferentes.

                En ese caso, debemos hacer lo siguiente:

                Cargamos un archivo Javascript donde vamos a centralizarlo todo (archivo JS de centralizacion de imports/exports EMS de la aplicacion). 
                Este puede estar en el raíz o en una carpeta "js/", dependiendo de nuestra arquitectura de carpetas. En cualquier caso, será el 
                equivalente al «main» de muchos lenguajes de programación:

                                      <script type="module" src="/js/index.js"></script>


                Es muy importante darse cuenta de que es obligatorio utilizar el atributo "type" establecido a "module". Con esto le indicamos al 
                navegador que lo que estamos cargando es un fichero Javascript que va a importar "módulos ES" utilizando la sentencia "import".

                Si se nos olvidara añadir el type="module" a nuestro script, probablemente en la consola Javascript nos aparecerá un error similar 
                al siguiente:

                                      Uncaught SyntaxError: Cannot use import statement outside a module

                Por su parte, en el fichero "index.js" tendremos que hacer las importaciones necesarias para cargar el componente y poder utilizarlo 
                posteriormente:

                                      import "./components/AppElement.js";


                Con esta modalidad de importación, simplemente indicamos a Javascript que incluya y procese el código que contiene dicho fichero 
                Javascript, cargando el componente de una forma análoga a como lo hicimos en el apartado anterior, mediante HTML y una etiqueta 
                <script>.


        1.2.3.-  Enlazar desde HTML/Javascript.

                Hay una forma "híbrida" entre las dos anteriores, donde podemos hacer lo siguiente en nuestro archivo index.html:

                                      <script type="module">
                                        import "./components/AppElement.js";
                                      </script>

                Como ves, hemos incluido el contenido del fichero "index.js" en el interior de la etiqueta <script> del "index.html". 
                Aunque esta modalidad funciona, puede que no nos interese si tenemos múltiples ficheros ".html", ya que en esta modalidad, 
                los import quedan en el interior del fichero ".html" y es menos versátil que tenerlo separado en un archivo a parte.


  1.3.-  Utilizar un componente.

        Una vez tengamos nuestro componente web "cargado" y "enlazado" (registrado), existen varias formas de consumirlo (utilizarlo) en nuestra 
        aplicacion web (documento html). Veamos un resumen de cada una de ellas:


        1.3.1.-  Crear etiqueta desde HTML.

                 La primera y más sencilla ya la hemos visto, simplemente se trata de escribir el nombre de nuestra etiqueta HTML personalizada 
                 ("custom element") en el HTML, en el lugar que queramos y tantas veces como se desee:

                                      <app-element></app-element>

                 Esta es la forma más básica y común. Sin embargo, no es la única.


        1.3.2.-  Crear etiqueta desde Javascript.

                 Puede interesar crear el componente desde Javascript, útil para hacerlo dinámico, usarlo en bucles, condicionales y/o 
                 aprovechar de toda la potencia de Javascript. En ese caso, tendríamos que hacer lo siguiente:

                                      const appElement = document.createElement("app-element");
                                      document.body.appendChild(appElement);

                 Hemos hecho lo siguiente:

            1.-  const appElement = document.createElement("app-element") => Creamos el elemento HTML "<app-element>" en memoria, en la 
                                                                             variable "appElement".

            2.-  document.body.appendChild(appElement); => Insertamos el elemento creado (referenciado con la variable "appElement") en el 
                                                           DOM del documento HTML, concretamente al final del <body>.


                 Existe una variación de la anterior. Para hacerlo de esta forma, en nuestro fichero "AppElement.js", tendríamos que exportar 
                 la clase del WebComponent (que esta en un fichero .js aparte), para así poder importarla desde otro archivo. 
                 
                 Haríamos la siguiente modificación:  introducimos en la definicion de la clase la sentencia "export"

                                        export class AppElement extends HTMLElement {
                                          constructor() {
                                            super();
                                            ....
                                          }
                                        }

                Ahora, desde nuestro archivo de centralizacion de componentes Web, "index.js", en lugar de hacer una importación directa como la 
                que vimos más atrás, la haríamos de esta forma, importando la clase "AppElement" para luego crear una instancia utilizando el "new":

                                        import { AppElement } from "./components/AppElement.js";

                                        const appElement = new AppElement();
                                        document.body.appendChild(appElement);

                Obsérvese que en el fichero "index.js" hemos importado la clase "AppElement" que exportamos en el punto anterior. En el resto del 
                código del fichero podríamos ahora trabajar con ella de forma análoga a como lo hicimos más atrás con: .createElement().
*/

//    2.-  Atributos de un WebComponent.
/*
      Por norma general, los "atributos" de una etiqueta personalizada de un WebComponent: "custom element", se utilizarán para pasar información 
      desde el exterior al propio componente. Esta información puede ser de tipo "textual" (string) o simplemente no tener valor y existir sólo 
      para indicar alguna característica "booleana" de verdadero o falso.

      Por ejemplo, observemos el siguiente ejemplo:

                                        <app-element value="15" is-enabled></app-element>

      En este caso tenemos dos atributos:

          1.-  Atribute value:  el atributo "value" contiene un valor 15 (aunque es un string ya que los atributos siempre se reciben como strings).

          2.-  Atribute "is-enabled": el atributo "is-enabled" no especifíca valor, técnicamente es un de tamaño 0,y se considera un boolean.


      2.1.-  Acceder a atributos del DOM.

      Para trabajar con los "atributos" de un elemento HTML estándar, tenemos los siguientes métodos (los cuales podemos utilizar también para 
      la etiqueta personalizada de un webComponente "custom elements"):

                      Métodos 	                          Descripción

                  .hasAttributes() 	              ¿El elemento tiene atributos?

                  .getAttributeNames() 	          Devuelve un "array" de atributos (en lowercase).

                  .hasAttribute(name) 	          ¿El atributo "name" existe? Valor boolean.

                  .getAttribute(name) 	          Devuelve el valor del atribute "name" o "null" si no existe.

                  .removeAttribute(name) 	        Elimina el atributo "name".

                  .setAttribute(name,value) 	    Fija o pone el atributo "name" al valor "value".

                  .toggleAttribute(name,force) 	  Si existe el atributo "name", lo elimina, si no existe, lo añade.


      Nota.-  Como en nuestra clase JS del componente web (export class AppElement extends HTMLElement { constructor() { super() } } ), 
      "this" es una referencia al propio "custom element" (al registrarlo queda enlazado esta etiqueta que representa el elemento personalizado 
      con la propia clase del componente web), podemos utilizar estos "métodos" de manejo de atributos de un elemento HTML, trabajo sobre 
      etiquetas habituales en nuestros componentes, ya que estamos extendiendo de la clase "HTMLElement".

      Veamos una posible implementación donde utilicemos algunos de estos métodos:

          class AppElement extends HTMLElement {

            constructor() {
              super();
              console.log("Este componente tiene los atributos: ", this.getAttributeNames());
              console.log("El valor del atributo «value» es ", this.getAttribute("value"));
              console.log("¿El atributo «is-enabled» existe? ", this.hasAttribute("is-enabled"));
            }
          }


      Algunas consideraciones interesantes:

          1.-  El método "getAttributeNames()" devuelve un "array de strings", con todos los atributos del elemento. Los strings están en 
               minúsculas (lowercase).

          2.-  El método ".getAttribute(name)" devuelve null cuando no existe el atributo indicado. Si existe pero no tiene valor, devuelve 
               una cadena de texto vacía ("")

          3.-  El método "".setAttribute(name, value)", establecerá el atributo "name" con el valor "value", como string, aunque se le 
               pasen otros tipos. Si el valor establecido es cadena vacía, se añade como boolean.

          4.-  El método ".toggleAttribute(name,force)" añade un atributo si no existía previamente, o lo elimina si ya existía previamente. 
               Si añadimos el segundo parámetro force , simplemente forzaremos a añadir o eliminar el atributo, sin tener en cuenta su estado 
               previo. Este método devuelve si el atributo, tras las operaciones realizadas, existe o no.


      2.2.-  Reactividad en atributos

             Un patrón habitual interesante y muy utilizado en ciertos frameworks, es el de la "reactividad". Este patrón se basa en que, cuando 
             suceda un cambio de valor, la aplicación o web sea capaz de reaccionar y actualizar todo lo que dependa de ese valor, de modo que 
             no tengamos que hacerlo de forma manual.

                      Característica 	                                                  Descripción
                     
                      Propiedades (Observación de atributos)

                      array static get observedAttributes() 	                      Observa atributos para notificar cambios.

                      Métodos (Detección de cambios)

                      attributeChangedCallback(string name,string old,string now) 	                      Se dispara cuando cambia un atributo observado.


            Aunque Javascript no dispone de un sistema de "reactividad" en sí mismo, si que tiene algunos mecanismos donde podemos hacer algo parecido. 
            Se trata de una propiedad (getter) para la observación de atributos ( y notificacion de cambios) y el método especial para la detección 
            de cambios.


      2.2.1.-  Observación de atributos.

              Los WebComponents incorporan una interesante forma de detectar "cambios" en los atributos del "custom element" de forma automática, 
              para que así podamos crear lógica que reaccione a dichos cambios. 
              
              Por defecto, si establecemos un valor inicial al atributo de un componente y luego lo modificamos, no sabremos cuando ha cambiado 
              el valor, ya que tendríamos que consultarlo de forma manual para obtener la información actualizada.

              En WebComponents podemos utilizar el "getter estático observedAttributes()", que deberá devolver un array con los nombres de los 
              atributos que queremos observar. De esta forma, los atributos que estén siendo observados, cada vez que cambien, se disparará un 
              método especial llamado "attributeChangedCallback()", donde podemos implementar nuestra lógica.


      2.2.4.-  Detección de cambios

              El método ".attributeChangedCallback(string name,string old,string now)" es un método especial que se dispara cuando un atributo 
              observado ha sido modificado. 

              El método nos pasará por parámetro el nombre del atributo en: "name", así como el valor que tenía antes en: "old" y el valor que 
              tiene actualmente en: "now".


              Veamos una posible implementación de este funcionamiento:

                class AppElement extends HTMLElement {
                  constructor {
                    super()
                  }

                  static get observedAttributes() {
                    return ["value", "is-enabled"];
                  }

                  attributeChangedCallback(name, old, now) {
                    console.log(`El atributo ${name} ha sido modificado de ${old} a ${now}.`);
                  }
                }


              De esta forma, cada vez que el valor de los atributos observados de un WebComponent cambie, se ejecutará automáticamente el 
              método "attributeChangedCallback()" con los valores específicos en sus parámetros: name, old y now.
*/

//  Gestionar atributos del DOM

/*
    Hasta ahora, hemos visto como crear elementos HTML con Javascript, pero no hemos visto como modificar los "atributos HTML" de dichas etiquetas 
    creadas. Antes de nada, demos un repaso rápido a los conceptos de las etiquetas HTML para tenerlas claras y presentes.


    1.-  ¿Qué es un atributo HTML?

Las etiquetas HTML tienen ciertos atributos que definen el comportamiento de la etiqueta. Existen atributos comunes a todas las etiquetas HTML, y atributos que sólo existen para determinadas etiquetas HTML. El orden de los atributos en HTML no es importante, da igual que este primero o segundo, no influye en nada.

Además, un atributo puede tener un valor o ser un atributo , es decir, simplemente estar presente y no tener ningún valor indicado:

<div class="container" data-attr="value">
  <button disabled>Avisar</button>
</div>

Observa que class y data-attr son ejemplos de atributos, y container y value son sus correspondientes valores. Por otro lado, disabled es un atributo booleano (no tiene valor).

    Recuerda algo muy importante en HTML: El valor de un atributo siempre es un "string".


  2.-  Acceder a atributos HTML

En general, una vez tenemos un elemento sobre el que vamos a crear algunos atributos, lo más sencillo es asignarle valores como propiedades de objetos:

const element = document.querySelector("div");   // <div class="container"></div>

element.id = "page";           // <div id="page" class="container"></div>
element.style = "color: red";  // <div id="page" class="container" style="color: red"></div>
element.className = "data";    // <div id="page" class="data" style="color: red"></div>

            Hay que tener en cuenta que algunos casos como el del último ejemplo, se indica className en lugar de class. Esto ocurre porque es una palabra reservada para las clases de Javascript, como también ocurre con for para los bucles, etc.

Aunque es posible asignar a la propiedad className varias clases en un separadas por espacio, recomendamos utilizar la propiedad classList para manipular clases CSS. La explicamos más adelante en el capítulo manipulación de clases CSS.
Obtener atributos HTML

Aunque la forma anterior es la más rápida, tenemos algunos métodos para obtener los atributos HTML de forma clara y literal, sin problemas como los de className:
Métodos 	Descripción
hasAttributes() 	Indica si el elemento tiene atributos HTML.
hasAttribute(attr) 	Indica si el elemento tiene el atributo HTML attr.
getAttributeNames() 	Devuelve un con los atributos del elemento.
getAttribute(attr) 	Devuelve el valor del atributo attr del elemento o si no existe.

En los dos primeros casos, podemos utilizar hasAttributes() o hasAttribute() para saber que atributos HTML tiene definidos una etiqueta. Por otro lado, el método getAttributeNames() nos devuelve la lista de atributos que tiene una etiqueta, y el método getAttribute(attr) nos da el valor que tiene un atributo HTML específico.

Consideremos el siguiente HTML:

<div id="page" class="info data dark" data-number="5"></div>

Vamos a aplicar las siguientes lineas de Javascript, trabajando con ese elemento:

const element = document.querySelector("#page");

element.hasAttributes();              // true (tiene 3 atributos)
element.hasAttribute("data-number");  // true (data-number existe)
element.hasAttribute("disabled");     // false (disabled no existe)

element.getAttributeNames();          // ["id", "data-number", "class"]
element.getAttribute("id");           // "page"

Como puedes ver, es muy sencillo de utilizar.


  3.-  Modificar o eliminar atributos HTML

Por otro lado, tenemos algunos métodos para modificar atributos HTML existentes, o directamente, eliminarlos:
Métodos 	Descripción
setAttribute(attr, value) 	Añade o cambia el atributo attr al valor value del elemento HTML.
toggleAttribute(attr, force) 	Añade atributo attr si no existe, si existe lo elimina.
removeAttribute(attr) 	Elimina el atributo attr del elemento HTML.

Estos métodos son bastante autoexplicativos y fáciles de entender, aún así, vamos a ver unos ejemplos de uso donde podemos ver como funcionan. Continuamos con el ejemplo HTML anterior:

<div id="page" class="info data dark" data-number="5"></div>

Ahora, vamos a modificar sus atributos HTML utilizando dichos métodos. Observa que setAttribute() puede servir tanto para añadir nuevos atributos que no existían como para modificar los que ya existen:

const element = document.querySelector("#page");

element.setAttribute("data-number", "10");   // Cambiar data-number a 10
element.removeAttribute("id");               // Elimina el atributo id
element.setAttribute("id", "page");          // Vuelve a añadirlo

Sin embargo, hay un caso especial que es digno de mención.
Caso especial: Atributos booleanos

Hay que hablar de un caso especial, que es el que comentamos en el que podemos establecer atributos HTML que son , es decir, que no tienen indicado ningún valor.

Si esto lo hacemos con el método setAttribute() y le indicamos un booleano, no tendremos exactamente lo que buscamos. Recuerda que los atributos HTML son siempre de tipo :

const button = document.querySelector("button");

button.setAttribute("disabled", true);   // ❌ <button disabled="true">Clickme!</button>
button.disabled = true;                  // ✅ <button disabled>Clickme!</button>
button.setAttribute("disabled", "");     // ✅ <button disabled>Clickme!</button>

Por lo tanto, la forma correcta de establecerlos es indicar un vacío. Automáticamente, el navegador sabrá que una cadena de texto vacía es un booleano y ocultará su valor. Por otro lado, si lo haces mediante una propiedad Javascript, si puedes usar un booleano, y añadirá el atributo HTML automáticamente.

    Recuerda que atributo HTML no es lo mismo que propiedad Javascript, aunque muchos frameworks o librerías Javascript simplifican para que parezcan que son la misma cosa.

Normalmente, el método .toggleAttribute(attr, force) es más sencillo para estos casos. Añade el atributo que le pasas por parámetro si no existe, y lo elimina si ya existe:

button.toggleAttribute("disabled");         // Como ya existe "disabled", lo elimina
button.toggleAttribute("hidden");           // Como no existe "hidden", lo añade

Si se le proporciona el force, si es verdadero: añade el atributo, si es falso: elimina el atributo.

*/





















/*    Módulos ES (ESM)




















► Más sobre Módulos ESM

CSS Scopes / Shadow Parts

Los CSS Scopes forman parte de las características que surgen a raíz del CSS en los WebComponents, donde podemos dar estilo a partes que sólo tienen sentido en el contexto de WebComponents: Shadow DOM, Custom Elements, slots, etc...

Tenemos las siguientes pseudoclases y pseudoelementos CSS:

    Pseudoclase :host
    Pseudoclase funcional :host()
    Pseudoclase funcional :host-context()
    Pseudoelemento funcional ::slotted()
    Pseudoelemento ::part()

Este último pseudoelemento forma parte de las denominadas CSS Shadow Parts, una especificación que nos provee una forma de exponer partes de un componente para poder darle estilo desde su exterior.

    Aprender más sobre CSS Scoping
    Aprender más sobre CSS Parts

    Estas son las características principales que forman parte de los llamados WebComponents. Cada una de ellas es una característica independiente, no obligatoria en un WebComponent. Sin embargo, la verdadera potencia de todas ellas es la posibilidad de unirlas y utilizarlas combinadas para crear potentes componentes web, como iremos viendo más adelante.

*/


//  Nota:  Manejo del DOM en JS

/*  1.-  Crear elementos HTML desde JS.

          Existen una serie de "métodos" para crear de forma eficiente diferentes elementos HTML o nodos desde JS, y que nos pueden convertir 
          en una tarea muy sencilla el crear estructuras dinámicas, mediante bucles o estructuras definidas:

                              Métodos 	                                      Descripción

                        .createElement(tag, options) 	                Crea y devuelve el elemento HTML definido por el "tag".

                        .createComment(text) 	                        Crea y devuelve un nodo de comentarios HTML <!-- text -->.

                        .createTextNode(text) 	                      Crea y devuelve un nodo HTML con el texto "text".

                        .cloneNode(deep) 	                            Clona el nodo HTML y devuelve una copia. "deep" es false por defecto.

                        .isConnected 	                                Indica si el nodo HTML está insertado en el documento HTML, en el DOM.


          Para empezar, nos centraremos principalmente en la primera (.createElement(tag, options)), que es la que utilizamos para crear 
          elementos HTML en el DOM.


    1.1.-  Creando elementos HTML en el DOM del documento desde JS con el metodo:  .createElement(tag, options)

           Mediante el método: ".createElement(tag, options)", podemos crear un elemento HTML en memoria (¡ es decir, no estará insertado aún 
          en nuestro documento HTML!). Con dicho elemento almacenado en una variable o constante, podremos modificar sus características o 
          contenido, para posteriormente ya insertarlo en una posición determinada del DOM o documento HTML.


    1.1.1.-  Creando elementos en el DOM con "createElement".

             Vamos a centrarnos en el proceso de creación del elemento HTML desde JS, y más adelante veremos diferentes formas de insertarlo 
             en el DOM. El funcionamiento del metodo: ".createElement(tag, options)" es muy sencillo: se trata de pasarle el nombre de la 
             etiqueta "tag" a utilizar, y una serie de opciones:

                      const div  = document.createElement("div");      // Creamos un <div></div>
                      const span = document.createElement("span");    // Creamos un <span></span>
                      const img  = document.createElement("img");      // Creamos un <img>

             Nota.- Hasta ahora lo que se ha realizado es "crear" el elemento HTML en memoria, y lo referenciamos a una variable o constante 
                    para poder manipularlo directamente con JS, pero todavia no se ha insertado en el documento HTML, es decir en el DOM.


             Aunque menos frecuente, de la misma forma, podríamos crear comentarios HTML con ".createComment(text)" o fragmentos de texto 
             sin etiqueta HTML con: .createTextNode(text), pasándole a ambos un con el texto en cuestión. En ambos, se devuelve un "node"
             que podremos utilizar luego para insertar en el documento HTML:

                      const comment = document.createComment("Comentario");   // <!--Comentario-->
                      const text = document.createTextNode("Hola");           // Nodo de texto: 'hola'


            El método ".createElement(tag, options)" tiene un parámetro opcional denominado "options". Si se indica, se espera un objeto 
            con una propiedad "is" para definir un "elemento personalizado" en una modalidad menos utilizada de WebComponents. 

            Nota.-  Ten presente que en los ejemplos que hemos visto estamos creando los elementos HTML y referenciandolos en una constante, 
            pero de momento no los hemos añadido al documento HTML (al DOM), por lo que no aparecerían visualmente.


    1.1.2.-  El método ".cloneNode(deep)"

             Hay que tener mucho cuidado al crear e intentar duplicar elementos HTML. Un error muy común es asignar un elemento que tenemos 
             en otra variable, pensando que estamos creando una copia (cuando no es así, sera una copia de la referencia no del objeto). 
             
             Esto es un clásico error común cuando se está aprendiendo a programar:

                      const div = document.createElement("div");
                      div.textContent = "Elemento 1";

                      const div2 = div;   // NO se está haciendo una copia
                      div2.textContent = "Elemento 2";

                      div.textContent;  // 'Elemento 2'


             Con esto, quizás pueda parecer que estamos duplicando un elemento HTML para crearlo a imagen y semejanza del original. 
             Sin embargo, lo que se hace es una "referencia" al elemento original, de modo que si se modifica el div2, también se 
             modifica el elemento original. Esto se hace de esta forma por razones de rendimiento y eficiencia.

             Para evitar que se cree una copia de la referencia, y duplicar el objeto elemento HTML realmente, deberíamos usar el 
             método: .cloneNode(deep) ==>  Clona el nodo HTML (el objeto Element HTML) y devuelve una copia. "deep" es false por defecto.:

                      const div = document.createElement("div");
                      div.textContent = "Elemento 1";

                      const div2 = div.cloneNode();   // Ahora SÍ estamos duplicando los objetos y referenciando a dos cte distintas
                      div2.textContent = "Elemento 2";

                      div.textContent;  // 'Elemento 1'

      
            Nota.-  El parametro "deep": el método "cloneNode(deep)" acepta un parámetro "deep" opcional, a false por defecto, para indicar 
                    el tipo de clonación que se realizará:

                          deep = true =>   Si es true, clonará también elementos hijos. Se conoce como "clonación profunda" (Deep Clone).

                          deep = false =>  Si es false, no clonará elementos hijos. Se conoce como "clonación superficial" (Shallow Clone).


    1.2.3.-  La propiedad: ".isConnected"  =>  Indica si el nodo HTML está insertado en el documento HTML, en el DOM.

             La propiedad "isConnected", nos indica si el elemento en cuestión está conectado al DOM, es decir, si ya está insertado en el 
             documento HTML:

                        1.-  Si devuelve true, significa que el elemento está conectado al DOM.

                        2.-  Si devuelve false, significa que el elemento no está conectado al DOM.


             Nota.- Hasta ahora, hemos creado elementos HTML que no están insertados en el DOM (permanecen sólo en memoria). En el capítulo 
             Insertar elementos en el DOM veremos como insertarlos en el documento HTML para que aparezca visualmente en la página.


    1.3.-   Usando "fragmentos" (documentos paralelos al documento principal DOM de la pagina HTML)

            En algunas ocasiones, nos puede resultar muy interesante utilizar "fragmentos". Los "fragmentos" son una especie de "documento paralelo", 
            aislado de la página con la que estamos trabajando, que tiene varias características:

                        1.-  No tiene elemento padre. Está aislado de la página o documento.

                        2.-  Es mucho más simple y ligero (mejor rendimiento).

                        3.-  Si necesitamos hacer cambios consecutivos, no afecta al reflow (repintado de un documento).


            De esta forma, es una estrategia muy útil para usarlo como "documento temporal" y no realizar cambios consecutivos, con su impacto 
            de rendimiento. Para crearlos, necesitaremos utilizar la siguiente función:


                        Métodos 	                                      Descripción

                        document.createDocumentFragment() 	      Crea un fragmento aislado (sin padre).


            Así pues, el método: "document.createDocumentFragment()" devuelve un "fragmento", que podremos utilizar para almacenar en su interior 
            un pequeño DOM temporal, que luego añadiremos en nuestro DOM principal.

                        const fragment = document.createDocumentFragment();

                        for (let i = 0; i < 5000; i++) {
                          const div = document.createElement("div");
                          div.textContent = `Item número ${i}`;
                          fragment.appendChild(div);
                        }

                        document.body.appendChild(fragment);


            Como se puede ver, utilizamos el fragmento "fragment" generado como "ubicación temporal", donde hacer todos los cambios del DOM que 
            necesitemos, sin que afecten al "reflow" del documento de forma independiente. Una vez terminemos nuestra lógica y tengamos el 
            DOM definitivo, lo insertamos como hacemos siempre, por ejemplo, con un "appendChild".


           Es entonces cuando se traslada todo el DOM del fragmento al lugar donde hemos indicado en el appendChild (*en nuestro ejemplo, a la 
          etiqueta <body>), dejando nuevamente el fragmento vacío.

          Los elementos <template> utilizan "fragmentos" para crear un "DOM desconectado" del documento principal. Puedes ver más en Plantillas y 
          DOM en WebComponents.
*/


