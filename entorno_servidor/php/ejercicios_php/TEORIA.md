# TEORÍA PHP

## Nivel Medio: Subida de archivos

### Diferencias entre métodos GET y POST al

### Subir archivos con input:file
> **Ojo:** Los archivos subidos con input:file se almacenan en una carpeta temporal. Estos deben ser movidos a una carpeta definitiva para su almacenamiento (si interesa).

**Para almacenar estos documentos:** usamos la función:

```move_uploaded_file(string $from, string $to): bool; ```

Mueve un documento subido a una nueva localización. Comprueba (si el archivo es válido) y asegura que el documento haya sido movido de `$from` hasta `$to`.
Esta comprobación es especialmente importante si el archivo subido puede revelar contenido del usuario.

### Redirigir con php y comprobación del método de envío.
---
Para comprobar 

