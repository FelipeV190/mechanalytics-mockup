# Mechanalytics · Mockup funcional

Mockup navegable de **Mechanalytics**, mantenimiento predictivo para flotas medianas (8 a 30 vehículos) con un adaptador OBD-II Bluetooth plug-and-play.

Lo construimos a partir de los mockups de la aplicación (16 pantallas) y del plan empresarial de noviembre de 2026.

## Cómo se usa

La app abre en la pantalla de bienvenida. Eliges un rol (dueño de flota, conductor o taller aliado) e inicias sesión con la cuenta de prueba que ya viene precargada. Cada rol ve solo su parte de la app y puede cerrar sesión desde su cuenta.

- **Dueño de flota**: panel de flota, gemelo digital con datos en vivo, predicciones, diagnóstico de fallas, alertas, agenda de mantenimiento, historial técnico, reporte PESV, ajustes de alertas, vincular adaptador y plan de suscripción.
- **Conductor**: inspección preoperacional, reporte de novedades y sus reportes enviados.
- **Taller aliado**: diagnóstico con los datos del vehículo y cotización para el dueño.

Los tres roles comparten los datos: el reporte del conductor le llega al dueño en Alertas, y la cotización del taller se aprueba desde Alertas, lo que habilita borrar el código de falla.

Del plan financiero, la app usa los 5 tiers de suscripción, la prueba gratis de 3 meses, los 3 meses gratis en la contratación anual, hasta 30 adaptadores incluidos por flota y la comisión del 10 % para los talleres.

Los datos se guardan en el navegador (`localStorage`) y se pueden restablecer desde Cuenta → "Restablecer datos de prueba".

## Ejecutar

Es un sitio estático sin dependencias: abre `index.html` o sírvelo con cualquier servidor estático.

```bash
npx serve .
```

Los textos entre corchetes (`[NOMBRE]`, `[PRECIO]`, `[TALLER ALIADO]`) son datos que el plan todavía no define.
