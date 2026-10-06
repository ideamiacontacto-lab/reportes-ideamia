// ============================================================
//  CONFIGURACIÓN DEL SISTEMA DE REPORTES · Estudio Ideamia
//  Este es el único archivo que hay que tocar para cambiar
//  marcas, responsables, la URL del webhook de Make o el Sheet.
// ============================================================

window.IDEAMIA_CONFIG = {

  // URL del webhook de Make (escenario "Reporte recibido").
  // Se pega acá una vez creado el escenario.
  WEBHOOK_URL: "https://hook.us2.make.com/u3dhwylqtbzreexal3526xlv5xvvv3v4",

  // URL del webhook de Make (escenario "Subir captura"). Vacío = capturas deshabilitadas.
  // También se puede cargar sin republicar: en el Sheet, pestaña "Config", fila clave=UPLOAD_URL / valor=la URL.
  UPLOAD_URL: "",

  // URL del Apps Script "Borradores" (copia en la nube de los reportes a medio hacer). Vacío = solo se guardan en el dispositivo.
  // También se puede cargar sin republicar: en el Sheet, pestaña "Config", fila clave=DRAFTS_URL / valor=la URL.
  DRAFTS_URL: "",

  // ID del Google Sheet donde Make guarda los reportes.
  SHEET_ID: "1lAcIG6J-8rheWwSHiNnZZ6K14BDi5pKnk8LW3P-X0Fk",
  SHEET_TAB: "Sheet1",

  // Clave de acceso al panel de revisión (solo para Joaquín).
  PANEL_PASSWORD: "Ideamia-Panel-48Kz",

  // Vencimiento semanal por rol, en la semana siguiente a la reportada.
  // dia: 1 = lunes, 2 = martes, ... 7 = domingo. hora: en 24 h. El CM entrega el lunes y Social Media el martes.
  DEADLINE: { cm: { dia: 1, hora: 12 }, sm: { dia: 2, hora: 12 } },
  // Hora del vencimiento mensual (24 h).
  DEADLINE_HOUR: 12,

  // Día del mes en que vence el reporte mensual (del mes anterior).
  MONTHLY_DEADLINE_DAY: 5,

  // Primer mes que puede cubrir un reporte trimestral / semestral / anual (los períodos se arman por calendario desde acá).
  PERIODICO_DESDE: "2026-07",

  // Desde cuándo se exige el reporte en este sistema (lunes de la primera semana a reportar).
  // Las semanas anteriores no figuran como atrasadas.
  SEMANAL_DESDE: "2026-09-28",
  MENSUAL_DESDE: "2026-09",

  // Responsables. La clave (slug) se usa en el link: ?resp=orne
  RESPONSABLES: {
    orne: { nombre: "Orne", rol: "Social Media" },
    rama: { nombre: "Rama", rol: "Social Media" },
    ale:  { nombre: "Ale",  rol: "Community Manager" }
  },

  // Marcas. "sm" es quién carga el reporte de Social Media, el mensual y los periódicos;
  // "cm" es quién carga el reporte de Community Manager de esa marca. Puede haber varios CM.
  // "canal: true" = la marca tiene canal social (canal de difusión de Instagram) y se pregunta si se movió en la semana.
  MARCAS: [
    { slug: "isco",              nombre: "Isco",              sm: "orne" , cm: "ale", canal: true },
    { slug: "gabriel-varisco",   nombre: "Gabriel Varisco",   sm: "orne" , cm: "ale" },
    { slug: "tritato",           nombre: "Tritato",           sm: "orne" , cm: "ale", canal: true },
    { slug: "vice-burger",       nombre: "Vice Burger",       sm: "orne" , cm: "ale", canal: true },
    { slug: "quality-tienda",    nombre: "Quality Tienda",    sm: "rama" , cm: "ale", canal: true },
    { slug: "quality-mayorista", nombre: "Quality Mayorista", sm: "rama" , cm: "ale", canal: true },
    { slug: "dyb",               nombre: "DyB",               sm: "rama" , cm: "ale" },
    { slug: "1talquecocina",     nombre: "1talquecocina",     sm: "rama" , cm: "ale", canal: true }
  ]
};
