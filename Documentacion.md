

## primero analisis:

error en carpertas como home), carpetas innecesarias como login y register, con codigo que no es util

dentro de la carpeta /app/page.tsx el principal se utliza un componente card que esta siendo importado mal, dicho componente esta mal estructurado, introducciendo en tipado en una misma vista y estilos de css que agromeran el codigo.
y dicha api no se debe llamar ahi mismo, epage.tsx solo es para mostrar rutas o componentes.

hay un componente sidebar cuya funcionalidad no s cual es aun.

hay un componenete avatar para renderizar lass imagenes

hay una vista dashboard donde se renderiza todo los datos de los personajes como: Total de personajes, si esta alive o dead o ukmon y un filtro de los mismos, pero no se reutiliza los componentes ya creados y mencionados anteriormente.

practicamente es un componente monolito el dashboard/page.tsx Todo está en un solo archivo de 200+ líneas mezclando lógica, estado, fetching y presentación. Esto dificulta el mantenimiento y testing.
​
tambien mezla de frameworks CSS: Usas Bootstrap (col-md-3, form-control) y Tailwind (text-2xl, font-bold) al mismo tiempo, lo cual es inconsistente.

en la carpeta /services/api.ts eta bien estructurada es donde se llama la api para reutilizarla en los componente o llamdas, pero podria mejorar


en la capeta utils/helper.ts ese archivo es innecesario, solo hace una comparación simple que puedes escribir directamente donde la necesites. Es más código del necesario sin ningún beneficio.

en muchas vistas se llama la api con la url cuando esta ya exite en archivo servies donde se puede reutilizar.

### components

hay componentes incompletos como losading sin mensaje claro,
filter panel se puede mejorar, hay un dashboard header cuya funcionalidad aun no se cual es, un componente llamdo start card cuya fncionalidad aun no se cual es y un caharater card muy pobre y sin estilos.

## refactorizacion:

se eliminara el login y register ya que es completamente innecesario, La API de Rick and Morty es completamente abierta y no requiere autenticación.

decision:
Eliminé los componentes de autenticación (login/register).
La API de Rick and Morty no requiere autenticación. 
  Mantener estos componentes añade complejidad innecesaria sin aportar 
  valor al alcance funcional de la prueba

beneficio: 
Reduce el código a mantener y enfoca el proyecto en 
  los requisitos reales: consumir y mostrar datos de personajes.


hay dos carpetas de components con componetes repetidos como card uno mas completo que el otro pero sin ser utlizados aun.


## Decisiones técnicas tomadas

- se mejoraran los componentes ya creados como card, loading y se anularan los innecesarios.

- se anulara el useeffect y llamadas directas en los componentes y reutilizar /services/api.ts y mejora del mismo.

- se anulara los helpers por el momento ya que no s necesario por ahora.

- tanto home como page.tsx el pricipal el codigo es el mismo, se anulara el home ya que no cunta con tipado, la estructura de la api esta mal manejada, no muestra no muestra los datos de los personajes

- se trabajara sobre dashboard ya que cumple con el requerimiento, y tiene una base funcional para refactorizar correctamente.

- se utilizaran las dos carpetas components, /app/components sera para componentes para el dashboard, el components fuera de app sera usado para componentes globales como button, card etc.
se eliminaran componentes innecesarios o repetidos como card y charactercard.

