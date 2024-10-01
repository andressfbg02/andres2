1¿Cuál es la diferencia entre un componente UI y un componente funcional en React?

En React, un componente UI es cualquier componente que se encarga de renderizar elementos visuales en la interfaz de usuario, mientras que un componente funcional es un tipo específico de componente definido como una función de JavaScript que acepta props y retorna elementos React. La principal diferencia esta en su implementación: los componentes funcionales son más simples y utilizan Hooks para manejar estado y efectos secundarios, mientras que los componentes de clase utilizan métodos del ciclo de vida y "state" para manejar el estado.

2¿Qué son las props en React y cuál es su propósito principal?

En React, las “props” (abreviatura de propiedades) son un mecanismo para pasar datos de un componente principal a un componente secundario. Su propósito principal es permitir la comunicación entre componentes, facilitando la reutilización y modularidad del código

3¿Qué son los children props en React y por qué no se recomienda su uso excesivo?

En React, los “children props” son una propiedad especial que permite a los componentes anidar otros componentes o elementos dentro de ellos. Esto se logra utilizando props.children, que representa el contenido que se encuentra entre las etiquetas de apertura y cierre de un componente. Aunque props.children facilita la creación de componentes reutilizables y flexibles, su uso excesivo puede complicar la gestión y el mantenimiento del código a medida que la aplicación crece, ya que puede ser difícil rastrear y manejar los datos pasados como children

4¿Qué es useState en React y para qué se utiliza principalmente?

En React, useState es un Hook que permite añadir estado a los componentes funcionales. Se utiliza principalmente para manejar el estado de los elementos dentro de un componente, permitiendo actualizar el estado y renderizar nuevamente solo la parte del componente afectada por el cambio