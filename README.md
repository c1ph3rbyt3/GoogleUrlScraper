
# Script para Extraer Enlaces en Resultados de Google

Este script permite extraer automáticamente los enlaces de los resultados de búsqueda de Google y copiarlos al portapapeles. Funciona a través de un marcador en el navegador y realiza la extracción y paginación de manera automática.

---

## **Instalación**

1. **Abrir el Navegador:**
   - Abre Google Chrome u otro navegador compatible.

2. **Crear el Marcador:**
   - Haz clic derecho en la barra de marcadores y selecciona **"Añadir página"**.
   - En el campo **Nombre**, introduce un nombre descriptivo como `Google Url Scraper`.
   - En el campo **URL**, pega el codigo del archivo **GoogleUrlScraper**

3. **Guardar el Marcador:**
   - Haz clic en **Guardar** para finalizar la creación del marcador.

---

## **Uso**

1. **Abrir Resultados de Google:**
   - Navega a Google y realiza una búsqueda.
   - **Recomendación:** Añade el parámetro `&num=100` al final de la URL de los resultados de búsqueda para mostrar hasta 100 resultados por página y maximizar la eficiencia del script.

2. **Ejecutar el Script:**
   - Haz clic en el marcador creado previamente mientras estás en la página de resultados.

3. **Proceso Automático:**
   - El script comenzará a extraer enlaces de la página actual.
   - Después de completar la extracción en cada página, el script cambiará automáticamente a la siguiente. Para continuar con el proceso, deberás hacer clic nuevamente en el marcador en cada nueva página, hasta alcanzar el límite preconfigurado o llegar a la última página de resultados de Google.

4. **Copiar los Enlaces:**
   - Al finalizar la extracción (después de procesar las páginas configuradas), los enlaces extraídos se copiarán automáticamente al portapapeles.
   - Si el navegador no permite acceso al portapapeles, se mostrará un cuadro de diálogo con las URLs para copiarlas manualmente.

---

## **Notas Importantes**

- Asegúrate de tener habilitado JavaScript en tu navegador para que funcione correctamente.
- Los enlaces se recopilan en un límite preconfigurado de 10 páginas, pero puedes modificar esta configuración directamente en el código si lo deseas.

---

## Contacto

Creado por: **C1ph3rByt3**
