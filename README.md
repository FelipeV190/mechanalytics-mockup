# Mechanalytics · Mockup funcional

Mockup navegable de **Mechanalytics**, mantenimiento predictivo para flotas medianas (8 a 30 vehículos) con un adaptador OBD-II Bluetooth plug-and-play.

Lo construimos a partir de los mockups de la aplicación (16 pantallas) y del plan empresarial de noviembre de 2026.

## Cómo se usa

La app abre en la pantalla de bienvenida. Eliges un rol (dueño de flota, conductor o taller aliado) e inicias sesión con la cuenta de prueba que ya viene precargada. Cada rol ve solo su parte de la app y puede cerrar sesión desde su cuenta.

- **Dueño de flota**: panel de flota, gemelo digital con datos en vivo, predicciones, diagnóstico de fallas, alertas, agenda de mantenimiento, historial técnico, reporte PESV, ajustes de alertas, vincular adaptador y plan de suscripción.
- **Conductor**: inspección preoperacional, reporte de novedades y sus reportes enviados.
- **Taller aliado**: diagnóstico con los datos del vehículo y cotización para el dueño.

Los tres roles comparten los datos: el reporte del conductor le llega al dueño en Alertas, y la cotización del taller se aprueba desde Alertas, lo que habilita borrar el código de falla.

Del plan financiero (versión del 14 de noviembre de 2026), la app usa los 5 tiers de suscripción con su precio mensual por flota, la prueba gratis de 3 meses, los 3 meses gratis en la contratación anual (se pagan 9 de 12 meses), hasta 30 adaptadores incluidos por flota y la comisión del 10 % de la suscripción anual para los talleres.

| Tier | Flota | Mensual (sin IVA) | Anual (9 meses) |
|---|---|---|---|
| Tier 1 | 1–2 vehículos | COP 245.000 | COP 2.205.000 |
| Tier 2 | 3–8 vehículos | COP 640.000 | COP 5.760.000 |
| Tier 3 | 9–15 vehículos | COP 1.042.500 | COP 9.382.500 |
| Tier 4 | 15–30 vehículos | COP 1.820.000 | COP 16.380.000 |
| Tier 5 | 30+ vehículos | A convenir | A convenir |

El plan no publica una tabla de precios; estos valores salen de las proyecciones del apéndice (ingreso del primer mes de cada tier, que crece una flota al mes con 1 % de abandono). El Tier 5 no tiene ventas proyectadas en 2027.

Los datos se guardan en el navegador (`localStorage`) y se pueden restablecer desde Cuenta → "Restablecer datos de prueba".

## Ejecutar

Es un sitio estático sin dependencias: abre `index.html` o sírvelo con cualquier servidor estático.

```bash
npx serve .
```

Los textos entre corchetes (`[NOMBRE]` del asesor, `[NÚMERO]` del NIT) son datos que el plan todavía no define.
