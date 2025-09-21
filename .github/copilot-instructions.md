# Copilot Instructions for sobres-con-dinero-MVC

## Arquitectura general

Este proyecto implementa un patrón Modelo-Vista-Controlador (MVC) para gestionar "sobres" que contienen dinero. El código fuente principal está en la carpeta `src/` y se compone de:

- **Modelo**:
  - `Cl_mSobre.ts`: Representa un sobre con billetes. Expone propiedades para el valor y la cantidad de billetes, y un método `dineroSobre()` que calcula el total de dinero en el sobre.
  - `Cl_mGestorSobres.ts`: Gestiona la acumulación del dinero de varios sobres. El método clave es `procesarSobre(sobre)` que suma el dinero de un sobre al acumulado.
- **Vista**:
  - `Cl_vGestorSobres.ts` y `Cl_vSobre.ts`: (Actualmente vacíos) Se espera que implementen la lógica de presentación/interfaz de usuario.
- **Controlador**:
  - `Cl_controlador.ts`: (Actualmente vacío) Debería coordinar la interacción entre modelo y vista.
- **Punto de entrada**:
  - `principal.ts`: (Actualmente vacío) Se espera que inicialice la aplicación.

## Convenciones y patrones

- **Clases y nombres**: Todas las clases siguen el prefijo `Cl_` y usan camelCase para métodos y atributos privados.
- **Encapsulamiento**: Los atributos de las clases modelo son privados y se accede a ellos mediante getters/setters.
- **Acumulación**: El gestor de sobres mantiene el total acumulado en un atributo privado y lo expone mediante un getter.
- **Inicialización**: Los constructores de los modelos aceptan objetos con propiedades nombradas para mayor claridad.

## Flujo de datos

1. Se crean instancias de `Cl_mSobre` con valores y cantidades de billetes.
2. Se procesan sobres a través de `Cl_mGestorSobres.procesarSobre(sobre)` para acumular el dinero.
3. La vista y el controlador deben implementarse para conectar la lógica de negocio con la interfaz de usuario.

## Workflows de desarrollo

- **No hay scripts de build/test documentados**. Se asume desarrollo TypeScript puro. Compila los archivos `.ts` manualmente si es necesario.
- **No hay dependencias externas** ni configuración de bundlers.
- **index.html** y **styles.css** están presentes pero vacíos; se espera que la UI se implemente ahí.

## Ejemplo de uso

```typescript
const sobre = new Cl_mSobre({valorBillete: 100, cantidadBillete: 5});
const gestor = new Cl_mGestorSobres();
gestor.procesarSobre(sobre);
console.log(gestor.totalDineroSobres()); // 500
```

## Recomendaciones para agentes AI

- Mantén la separación clara entre modelo, vista y controlador.
- Implementa la lógica de UI en las vistas y la coordinación en el controlador.
- Si agregas lógica de negocio, hazlo en los modelos.
- Documenta cualquier workflow de build/test si lo introduces.

---

¿Hay algún aspecto del flujo, arquitectura o convenciones que no haya quedado claro o que deba detallarse más?