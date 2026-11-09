# Mechanalytics · Mockup funcional

Mockup navegable de **Mechanalytics**, mantenimiento predictivo para flotas medianas (8 a 30 vehículos) con un adaptador OBD-II Bluetooth plug-and-play.

Lo construimos a partir de los mockups de la aplicación (16 pantallas) y del plan empresarial de noviembre de 2026.

## Qué incluye

- **App** con las 16 pantallas de los mockups y sus tres roles: dueño de flota, conductor y taller aliado.
  - Panel de flota con filtros, gemelo digital con datos en vivo simulados, predicciones con gráfica de tendencia y diagnóstico de fallas.
  - Alertas con acciones reales: agendar en la agenda, ver diagnóstico y aprobar cotizaciones.
  - Historial técnico por vehículo y origen, reporte PESV imprimible a PDF, ajustes de alertas y vinculación del adaptador en 3 pasos.
  - Plan y suscripción con los 5 tiers del plan financiero, prueba de 3 meses y hasta 30 adaptadores incluidos por flota.
  - Inspección preoperacional y reporte de novedades del conductor; cotización del taller con total automático.
  - Los flujos están conectados: el reporte del conductor llega a las alertas del dueño, y la cotización del taller se aprueba desde Alertas, lo que habilita borrar el código de falla.
- **Plan financiero**: proyección 2027 (ingresos, costos, caja, utilidad neta, ingresos por tier, fondos e hitos).

El estado de la demo se guarda en el navegador (`localStorage`) y se puede reiniciar desde el botón "Reiniciar datos de la demo".

## Ejecutar

Es un sitio estático sin dependencias: abre `index.html` o sírvelo con cualquier servidor estático.

```bash
npx serve .
```

Los textos entre corchetes (`[NOMBRE]`, `[PRECIO]`, `[TALLER ALIADO]`) son datos que el plan todavía no define.
