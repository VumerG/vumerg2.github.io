<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sira - Recetario Agroindustrial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <header>
            <h1>Sira: Control de Procesamiento</h1>
            <p>Registro de Valor Agregado por Productor</p>
        </header>

        <form id="registroForm">
            <fieldset>
                <legend>1. Parámetros del Producto (Contexto)</legend>
                <div class="form-group">
                    <label>Nombre Común y Científico</label>
                    <input type="text" id="producto" placeholder="Ej. Mango (Mangifera indica)" required>
                </div>
                <div class="form-group">
                    <label>URL Imagen del Producto Fresco</label>
                    <input type="url" id="imgProducto" placeholder="Enlace de la imagen">
                </div>
                <div class="grid-form">
                    <div class="form-group">
                        <label>Temporada de Disponibilidad</label>
                        <input type="text" id="temporada" placeholder="Ej. Abril - Agosto">
                    </div>
                    <div class="form-group">
                        <label>Región de Producción</label>
                        <input type="text" id="region" placeholder="Ej. Sur de México">
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>2. Parámetros de la Receta (Instrucción)</legend>
                <div class="form-group">
                    <label>Nombre de la Receta / Derivado</label>
                    <input type="text" id="nombreReceta" placeholder="Ej. Mermelada artesanal" required>
                </div>
                <div class="form-group">
                    <label>URL Imagen del Proceso/Final</label>
                    <input type="url" id="imgProceso" placeholder="Enlace de la foto final">
                </div>
                <div class="form-group">
                    <label>Proceso Paso a Paso (Manual Técnico)</label>
                    <textarea id="instrucciones" rows="6" placeholder="Secuencia numerada, tiempos, temperaturas e indicadores de error..."></textarea>
                </div>
                <div class="form-group">
                    <label>Utensilios y Equipo</label>
                    <input type="text" id="equipo" placeholder="Ej. Ollas, refractómetro, frascos esterilizados">
                </div>
            </fieldset>

            <fieldset>
                <legend>3. Parámetros Técnicos y Calidad (Control)</legend>
                <div class="grid-form">
                    <div class="form-group">
                        <label>Contenido de Azúcar (°Brix)</label>
                        <input type="number" id="brix" step="0.1" placeholder="Ej. 65">
                    </div>
                    <div class="form-group">
                        <label>Nivel de Acidez (pH)</label>
                        <input type="number" id="ph" step="0.01" placeholder="Ej. 3.4">
                    </div>
                    <div class="form-group">
                        <label>Rendimiento Final (kg/L)</label>
                        <input type="number" id="rendimiento" step="0.01">
                    </div>
                    <div class="form-group">
                        <label>Costo Total ($)</label>
                        <input type="number" id="costo" step="0.01">
                    </div>
                </div>
            </fieldset>

            <button type="submit" id="btnGuardar">Guardar Registro en Firebase</button>
        </form>
    </div>

    <script type="module" src="app.js"></script>
</body>
</html>
