export const definitions = {
  "S2": "Un atacante podría interferir el puerto o socket aleatorio que el servidor normalmente usa",
  "S3": "Un atacante podría probar una credencial tras otra y no hay nada que le impida realizarlo (online o sin conexión)",
  "S4": "Un atacante puede conectarse de forma anónima, debido a que esperamos que la autenticación se realice en un nivel superior",
  "S5": "Un atacante puede confundir a un cliente porque hay muchas maneras de identificar un servidor",
  "S6": "Un atacante puede falsificar un servidor porque los identificadores de la cuenta no se almacenan en el cliente ni se verifica la coherencia en la reconexión (es decir, no hay persistencia de datos)",
  "S7": "Un atacante puede conectarse a un servidor o mirar a través de un enlace que no está autenticado (ni encriptado)",
  "S8": "Un atacante podría robar credenciales almacenadas en el servidor y re-utilizarlas (por ejemplo, una clave se almacena en un archivo accesible a todo el mundo)",
  "S9": "Un atacante que obtiene una contraseña puede re-utilizarla (usar autenticadores más fuertes)",
  "S10": "Un atacante puede elegir si usar una autenticación más débil o ninguna autenticación",
  "SJ": "Un atacante podría robar credenciales almacenadas en el cliente y reutilizarlas",
  "SQ": "Un atacante podría ir detrás de la forma en que se actualizan o recuperan las credenciales (la recuperación de la cuenta no requiere revelar la contraseña anterior)",
  "SK": "Su sistema se envía con una contraseña de administrador predeterminada y no fuerza un cambio",
  "SA": "Has inventado un nuevo ataque de Suplantación de identidad",
  "T3": "Un atacante podría aprovechar su intercambio de claves personalizado o el control de integridad que usted creó en lugar de usar la criptografía estándar",
  "T4": "Su código toma decisiones de control de acceso en todo el lugar, en vez de hacerlo con un núcleo de seguridad",
  "T5": "Un atacante puede reproducir datos sin detección porque su código no proporciona timestamp o números de secuencia",
  "T6": "Un atacante puede escribir donde se almacenan los datos en los que se basa su código",
  "T7": "Un atacante puede saltarse los permisos debido a que no describe que los nombres sean canónicos antes de verificar los permisos de acceso",
  "T8": "Un atacante puede manipular los datos ya que no existe protección de la integridad de los datos en la red",
  "T9": "Un atacante puede proporcionar o controlar el estado de la información",
  "T10": "Un atacante puede alterar la información de un almacén de datos debido a que existe una lista de control de acceso (ACLs) débil o incluye un grupo que es equivalente a todos (\"todos los titulares de los ID existentes \") ",
  "TJ": "Un atacante puede escribir sobre algún recurso porque los permisos se otorgan a todo el mundo o no existen ACLs (Listas de control de acceso)",
  "TQ": "Un atacante puede cambiar los parámetros sobre un límite de confianza definido y también después de la validación (por ejemplo, parámetros importantes en un campo oculto en HTML o pasar un puntero a la memoria crítica)",
  "TK": "Un atacante puede integrar código dentro de su proceso a través de un punto de extensión",
  "TA": "Has inventado un nuevo ataque de manipulación de datos",
  "R2": "Un atacante puede pasar datos a través de los logs (registros) para atacar a un lector de logs, y no existe documentación de qué tipos de validación se realizan.",
  "R3": "Un atacante con pocos privilegios puede leer información de seguridad interesante en los logs (registros).",
  "R4": "Un atacante puede alterar las firmas digitales debido a que la firma es débil o utiliza MACs en vez de usar firmas",
  "R5": "Un atacante puede alterar los mensajes de los registros en una red porque carecen de controles de integridad sólidos.",
  "R6": "Un atacante puede crear una entrada en los registros sin una marca de tiempo (o ninguna entrada de registro tiene fecha y hora)",
  "R7": "Un atacante puede hacer que los registros se alteren y pierdan datos",
  "R8": "Un atacante puede hacer que un registro pierda o confunda información de seguridad",
  "R9": "Un atacante puede usar una clave compartida para autenticarse como entidades principales diferentes, confundiendo la información en los registros",
  "R10": "Un atacante puede obtener datos arbitrarios en registros de usuarios extraños no autenticados (o débilmente autenticados)",
  "RJ": "Un atacante puede editar los registros y no habría forma de saberlo (tal vez, debido a que no hay una opción heartbeat en el sistema de registro de usuarios)",
  "RQ": "Un atacante puede decir \"no hice eso\" y no tendrías forma de demostrar que están equivocados",
  "RK": "El sistema no posee registros",
  "RA": "Has inventado un nuevo Ataque de Anulación",
  "I2": "Un atacante puede desencriptar un archivo por fuerza bruta debido a que no hay mecanismos de defensa (por ejemplo: password stretching)",
  "I3": "Un atacante puede ver mensajes de errores con contenido sensible",
  "I4": "Un atacante puede leer contenido debido a que este no está encriptado (por ejemplo: un email or una cooke HTTP) aún cuando el canal si lo está",
  "I5": "Un atacante podría ser capaz de leer un documento o información debido a que está encriptado con algoritmo no estándar.",
  "I6": "Un atacante puede leer información porque está oculto u ofuscado y el usuario podría olvidar que está ahí",
  "I7": "Un atacante puede actuar como ‘persona en el medio’ (man in the middle) debido a que no se requiere autenticación en algunos endpoints de la red",
  "I8": "Un atacante puede acceder a información a través de índices de búsqueda, sistemas de logging otros mecanismos similares",
  "I9": "Un atacante puede leer información sensible desde un archivo con Listas de control de acceso (ACLs) incorrectas",
  "I10": "Un atacante puede leer información en archivos sin Listas de control de acceso (ACLs)",
  "IJ": "Un atacante puede descubrir una llave fija que está siendo usada para encriptación",
  "IQ": "Un atacante puede leer los mensajes de un canal (por ejemplo HTTP SMTP) porque no está encriptado",
  "IK": "Un atacante puede leer información de la red porque no se está usando criptografía",
  "IA": "Inventaste una nueva forma de ataque de Revelación de Información",
  "D2": "Un atacante puede hacer que tu sistema de autenticación quede inutilizable o no disponible",
  "D3": "Un atacante puede hacer que un cliente pase a estar no disponible o inutilizable, pero el problema desaparece cuando el atacante se detiene",
  "D4": "Un atacante puede hacer que un servidor pase a estar no disponible o inutilizable pero el problema desaparece cuando el atacante se detiene",
  "D5": "Un atacante sin autenticarse, puede hacer que un cliente pase a estar no disponible o inutilizable pero el problema desaparece cuando el atacante se detiene",
  "D6": "Un atacante sin autenticarse, puede hacer que un servidor pase a estar no disponible o inutilizable pero el problema desaparece cuando el atacante se detiene",
  "D7": "Un atacante puede hacer que un cliente pase a estar no disponible o inutilizable y el problema persiste después de que el atacante detuvo el ataque",
  "D8": "Un atacante puede hacer que un servidor pase a estar no disponible o inutilizable y el problema persiste después de que el atacante detuvo el ataque",
  "D9": "Un atacante sin autenticarse, puede hacer que un cliente pase a estar no disponible o inutilizable y el problema persiste después de que el atacante detuvo el ataque",
  "D10": "Un atacante sin autenticarse, puede hacer que un servidor pase a estar no disponible o inutilizable y el problema persiste después de que el atacante detuvo el ataque",
  "DJ": "Un atacante puede causar que el sistema de logueo deje de funcionar",
  "DQ": "Un atacante puede amplificar el ataque de Denegación de Servicio a través de este componente con una amplificación de order 10:1",
  "DK": "Un atacante puede amplificar el ataque de Denegación de Servicio a través de este componente con una amplificación de order 100:1",
  "DA": "Inventaste una nueva forma de ataque de Denegación de Servicio",
  "E5": "Un atacante puede forzar data a través de diferentes caminos de validación que entreguen resultados distintos",
  "E6": "Un atacante podría tomar ventajas de permisos .NET que el sistema solicita pero que no utiliza",
  "E7": "Un atacante, en vez de entregar información que pueda ser validada a través de un límite de confianza, entrega un puntero",
  "E8": "Un atacante, puede ingresar información que es validada pero que aún está bajo su control, para ser usada luego desde fuera del límite de confianza",
  "E9": "No hay una forma razonable para que qui´n llama descubra qué validaciones de datos contaminados se realiza antes de pasarlos.",
  "E10": "No hay forma razonable para quién llama de entender qué supuestos de seguridad se han hecho",
  "EJ": "Un atacante puede reflectar input de vuelta al usuario, como cross site scripting",
  "EQ": "Se incluye contenido generado por usuarios en la página, posiblemente incluyendo contenido de URLs aleatorios",
  "EK": "Un atacante puede inyectar un comando que el sistema correrá a un nivel de privilegio más alto",
  "EA": "Inventaste un nuevo ataque de Elevación de Privilegios",
}
