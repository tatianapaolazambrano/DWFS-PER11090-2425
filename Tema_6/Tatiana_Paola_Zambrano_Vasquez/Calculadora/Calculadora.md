# API de una calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:

-   Sumar N elementos (2+2, 2+2+2).
-   Restar N elementos (2-2, 2-2-2).
-   Multiplicar 2 elementos (2x2).
-   Dividir 2 elementos (2/2).
-   Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
-   Potencia N-ésima de un número (2^2, 3^3, 4^4).
-   Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

### Lista de recursos identificados y descripción

1. Sumar **(additions)**  
    Realiza la operación de suma con un conjunto de números proporcionados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.
    
2. Restar **(subtractions)**  
    Realiza la operación de resta con un conjunto de números proporcionados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.
    
3. Multiplicar **(multiplications)**  
    Realiza la operación de multiplicación entre dos números especificados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.
    
4. Dividir **(divisions)**  
    Realiza la operación de división entre dos números proporcionados en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación. Maneja errores como división entre cero.
    
5. Raiz   **(roots)**  
    Calcula la raíz N-ésima de un número proporcionado en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.
    
6.  Potencia **(powers)**  
    Calcula la potencia de un número elevado a un exponente especificado en el cuerpo de la petición. Devuelve el resultado y un identificador único de la operación.
    
7. Detalle de operación    **(operations)**  
    Permite consultar los detalles de una operación específica mediante un identificador único pasado como parámetro de consulta. Devuelve el tipo de operación, los datos originales y el resultado.
    
8. Historial **(/operations/log)**  
    Devuelve un historial completo de todas las operaciones realizadas. Incluye información básica como el identificador único, el tipo de operación y el resultado.
    
| **Método HTTP** | **URI**              | **Query Params** | **Request Body**                                            | **Response Body**                              | **Códigos HTTP de respuesta**           |
|------------------|----------------------|------------------|------------------------------------------------------------|------------------------------------------------|----------------------------------------|
| POST             | /additions           | -                | `{ "numbers": [2, 2, 2] }`                                 | `{ "result": 6, "operationId": "abc123" }`     | 200 OK, 400 Bad Request               |
| POST             | /subtractions        | -                | `{ "numbers": [10, 2, 3] }`                                | `{ "result": 5, "operationId": "def456" }`     | 200 OK, 400 Bad Request               |
| POST             | /multiplications     | -                | `{ "number1": 4, "number2": 5 }`                           | `{ "result": 20, "operationId": "ghi789" }`    | 200 OK, 400 Bad Request               |
| POST             | /divisions           | -                | `{ "number1": 10, "number2": 2 }`                          | `{ "result": 5, "operationId": "jkl012" }`     | 200 OK, 400 Bad Request, 422 Unprocessable Entity (Division by zero) |
| POST             | /roots               | -                | `{ "number": 27, "degree": 3 }`                            | `{ "result": 3, "operationId": "mno345" }`     | 200 OK, 400 Bad Request               |
| POST             | /powers              | -                | `{ "pairs": [ { "base": 2, "exponent": 2 }, { "base": 3, "exponent": 3 }, { "base": 4, "exponent": 4 } ] }` | `{ "results": [4, 27, 256], "operationId": "pqr678" }` | 200 OK, 400 Bad Request               |
| GET              | /operations/{id}     | -                | -                                                          | `{ "operationId": "abc123", "type": "addition", "data": [2, 2, 2], "result": 6 }` | 200 OK, 404 Not Found                 |
| GET              | /operations/log      | -                | -                                                          | `[ { "operationId": "abc123", "type": "addition", "result": 6 }, ... ]`          | 200 OK, 500 Internal Server Error     |

