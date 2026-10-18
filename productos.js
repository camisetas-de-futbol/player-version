// ============================================================
// TODAS LAS CAMISETAS DE PLAYER VERSION
// Para añadir una camiseta: copia un bloque, cambia el id, los datos y las fotos.
// Las fotos van en assets/ en formato .webp (mucho más ligeras que .png).
// Aparecerá sola en su liga (según 'grupo') y tendrá su página de detalle.
// ============================================================
// ---------- TALLAS Y MÁS PEDIDAS ----------
// Tallas que salen en todas las camisetas. Si una camiseta tiene otras, ponle "tallas: [...]" en su bloque.
const TALLAS = ["S", "M", "L", "XL", "XXL"];
// Equipos que llevan la etiqueta "Muy solicitada". Añade o quita nombres tal cual aparecen en "nombre".
const MAS_PEDIDAS = [
  "Real Madrid", "FC Barcelona", "F.C. Barcelona", "Real Betis", "Sevilla FC", "Sevilla F.C.", "Atlético de Madrid",
  "Arsenal", "Liverpool FC", "Manchester City", "Manchester United", "Chelsea FC",
  "AC Milan", "Inter de Milán", "Juventus", "Paris Saint-Germain",
  "Argentina", "Brasil", "España", "Francia", "Portugal", "Alemania",
  "Bayern de Múnich", "Borussia Dortmund", "Valencia CF", "Boca Juniors", "Inter Miami", "Al Nassr"
];

const productos = {
  francia: {
    grupo: "GRUPO I",
    confederacion: "UEFA",
    nombre: "Francia",
    descripcion: "Edición de Jugador (Player Version). Ajuste atlético de alta competición, escudos y logos termosellados en goma ligera, y tejido técnico con máxima ventilación texturizada.",
    imagenes: ["assets/camiseta_francia_primera.webp", "assets/1_francia_detras.webp"]
  },
  mexico: {
    grupo: "GRUPO A",
    confederacion: "CONCACAF",
    nombre: "México",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_mexico.webp", "assets/1_mexico_detras.webp"]
  },
  "mexico-2": {
    grupo: "GRUPO A",
    confederacion: "CONCACAF",
    nombre: "México",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de México, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_mexico.webp", "assets/2_mexico_detras.webp"]
  },
  usa: {
    grupo: "GRUPO A",
    confederacion: "CONCACAF",
    nombre: "Estados Unidos",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_USA.webp", "assets/1_USA_detras.webp"]
  },
  "usa-2": {
    grupo: "GRUPO A",
    confederacion: "CONCACAF",
    nombre: "Estados Unidos",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Estados Unidos, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_USA.webp", "assets/2_USA_detras.webp"]
  },
  brasil: {
    grupo: "GRUPO C",
    confederacion: "CONMEBOL",
    nombre: "Brasil",
    descripcion: "Edición de Jugador (Player Version). El clásico diseño 'Canarinha' con el corte atlético original de futbolista. Detalles termosellados avanzados y máxima transpirabilidad para el terreno de juego.",
    imagenes: ["assets/1_brasil.webp", "assets/1_brasil_detras.webp"]
  },
  "brasil-2": {
    grupo: "GRUPO C",
    confederacion: "CONMEBOL",
    nombre: "Brasil",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Brasil, con el mismo corte atlético original de futbolista. Detalles termosellados avanzados y máxima transpirabilidad para el terreno de juego.",
    imagenes: ["assets/2_brasil.webp", "assets/2_brasil_detras.webp"]
  },
  espana: {
    grupo: "GRUPO H",
    confederacion: "UEFA",
    nombre: "España",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_españa.webp", "assets/1_españa_detras.webp"]
  },
  "espana-2": {
    grupo: "GRUPO H",
    confederacion: "UEFA",
    nombre: "España",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de España, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_españa.webp", "assets/2_españa_detras.webp"]
  },
  "francia-2": {
    grupo: "GRUPO I",
    confederacion: "UEFA",
    nombre: "Francia",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Francia. Ajuste atlético de alta competición, escudos y logos termosellados y tejido técnico con máxima ventilación texturizada.",
    imagenes: ["assets/2_francia.webp", "assets/2_francia_detras.webp"]
  },
  jamaica: {
    grupo: "NO CLASIFICADA",
    confederacion: "CONCACAF",
    nombre: "Jamaica",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial. Ajuste atlético de alta competición, escudo y logos termosellados, y tejido técnico con máxima ventilación texturizada para el terreno de juego.",
    imagenes: ["assets/2_jamaica.webp", "assets/2_jamaica_detras.webp"]
  },
  sudafrica: {
    grupo: "GRUPO A",
    confederacion: "CAF",
    nombre: "Sudáfrica",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_sudafrica.webp", "assets/1_sudafrica_detras.webp"]
  },
  "sudafrica-2": {
    grupo: "GRUPO A",
    confederacion: "CAF",
    nombre: "Sudáfrica",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Sudáfrica, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_Sudáfrica.webp", "assets/2_Sudafrica_detras.webp"]
  },
  corea: {
    grupo: "GRUPO A",
    confederacion: "AFC",
    nombre: "Corea del Sur",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_corea.webp", "assets/1_corea_detras.webp"]
  },
  "corea-2": {
    grupo: "GRUPO A",
    confederacion: "AFC",
    nombre: "Corea del Sur",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Corea del Sur, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_corea.webp", "assets/2_corea_detras.webp"]
  },
  canada: {
    grupo: "GRUPO B",
    confederacion: "CONCACAF",
    nombre: "Canadá",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_canada.webp", "assets/1_canada_detras.webp"]
  },
  "canada-2": {
    grupo: "GRUPO B",
    confederacion: "CONCACAF",
    nombre: "Canadá",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Canadá, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_canada.webp", "assets/2_canada_detras.webp"]
  },
  suiza: {
    grupo: "GRUPO B",
    confederacion: "UEFA",
    nombre: "Suiza",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_suiza.webp", "assets/1_suiza_detras.webp"]
  },
  "suiza-2": {
    grupo: "GRUPO B",
    confederacion: "UEFA",
    nombre: "Suiza",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Suiza, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_suiza.webp", "assets/2_suiza_detras.webp"]
  },
  bosnia: {
    grupo: "GRUPO B",
    confederacion: "UEFA",
    nombre: "Bosnia",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_bosnia.webp", "assets/1_bosnia_detras.webp"]
  },
  "bosnia-2": {
    grupo: "GRUPO B",
    confederacion: "UEFA",
    nombre: "Bosnia",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Bosnia, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_bosnia.webp", "assets/2_bosnia_detras.webp"]
  },
  catar: {
    grupo: "GRUPO B",
    confederacion: "AFC",
    nombre: "Catar",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_catar.webp", "assets/1_catar_detras.webp"]
  },
  "catar-2": {
    grupo: "GRUPO B",
    confederacion: "AFC",
    nombre: "Catar",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Catar, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_catar.webp", "assets/2_catar_detras.webp"]
  },
  marruecos: {
    grupo: "GRUPO C",
    confederacion: "CAF",
    nombre: "Marruecos",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_marruecos.webp", "assets/1_marruecos_detras.webp"]
  },
  "marruecos-2": {
    grupo: "GRUPO C",
    confederacion: "CAF",
    nombre: "Marruecos",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Marruecos, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_marruecos.webp", "assets/2_marruecos_detras.webp"]
  },
  escocia: {
    grupo: "GRUPO C",
    confederacion: "UEFA",
    nombre: "Escocia",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_escocia.webp", "assets/1_escocia_detras.webp"]
  },
  "escocia-2": {
    grupo: "GRUPO C",
    confederacion: "UEFA",
    nombre: "Escocia",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Escocia, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_escocia.webp", "assets/2_escocia_detras.webp"]
  },
  haiti: {
    grupo: "GRUPO C",
    confederacion: "CONCACAF",
    nombre: "Haití",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_haiti.webp", "assets/1_haiti_detras.webp"]
  },
  "haiti-2": {
    grupo: "GRUPO C",
    confederacion: "CONCACAF",
    nombre: "Haití",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Haití, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_haiti.webp", "assets/2_haiti_detras.webp"]
  },
  australia: {
    grupo: "GRUPO D",
    confederacion: "AFC",
    nombre: "Australia",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_australia.webp", "assets/1_australia_detras.webp"]
  },
  "australia-2": {
    grupo: "GRUPO D",
    confederacion: "AFC",
    nombre: "Australia",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Australia, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_australia.webp", "assets/2_australia_detras.webp"]
  },
  paraguay: {
    grupo: "GRUPO D",
    confederacion: "CONMEBOL",
    nombre: "Paraguay",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_paraguay.webp", "assets/1_paraguay_detras.webp"]
  },
  "paraguay-2": {
    grupo: "GRUPO D",
    confederacion: "CONMEBOL",
    nombre: "Paraguay",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Paraguay, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_paraguay.webp", "assets/2_paraguay_detras.webp"]
  },
  turquia: {
    grupo: "GRUPO D",
    confederacion: "UEFA",
    nombre: "Turquía",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_turquia.webp", "assets/1_turquia_detras.webp"]
  },
  "turquia-2": {
    grupo: "GRUPO D",
    confederacion: "UEFA",
    nombre: "Turquía",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Turquía, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_turquia.webp", "assets/2_turquia_detras.webp"]
  },
  alemania: {
    grupo: "GRUPO E",
    confederacion: "UEFA",
    nombre: "Alemania",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_alemania.webp", "assets/1_alemania_detras.webp"]
  },
  "alemania-2": {
    grupo: "GRUPO E",
    confederacion: "UEFA",
    nombre: "Alemania",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Alemania, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_alemania.webp", "assets/2_alemania_detras.webp"]
  },
  "costa-de-marfil": {
    grupo: "GRUPO E",
    confederacion: "CAF",
    nombre: "Costa de Marfil",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_costa_de_marfil.webp", "assets/1_costa_de_marfil_detras.webp"]
  },
  "costa-de-marfil-2": {
    grupo: "GRUPO E",
    confederacion: "CAF",
    nombre: "Costa de Marfil",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Costa de Marfil, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_costa_de_marfil.webp", "assets/2_costa_de_marfil_detras.webp"]
  },
  ecuador: {
    grupo: "GRUPO E",
    confederacion: "CONMEBOL",
    nombre: "Ecuador",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_ecuador.webp", "assets/1_ecuador_detras.webp"]
  },
  "ecuador-2": {
    grupo: "GRUPO E",
    confederacion: "CONMEBOL",
    nombre: "Ecuador",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Ecuador, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_ecuador.webp", "assets/2_ecuador_detras.webp"]
  },
  curazao: {
    grupo: "GRUPO E",
    confederacion: "CONCACAF",
    nombre: "Curazao",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Curazao, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_curazao.webp", "assets/2_curazao_detras.webp"]
  },
  "paises-bajos": {
    grupo: "GRUPO F",
    confederacion: "UEFA",
    nombre: "Países Bajos",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_paises_bajos.webp", "assets/1_paises_bajos_detras.webp"]
  },
  "paises-bajos-2": {
    grupo: "GRUPO F",
    confederacion: "UEFA",
    nombre: "Países Bajos",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Países Bajos, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_paises_bajos.webp", "assets/2_paises_bajos_detras.webp"]
  },
  japon: {
    grupo: "GRUPO F",
    confederacion: "AFC",
    nombre: "Japón",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_japon.webp", "assets/1_japon_detras.webp"]
  },
  "japon-2": {
    grupo: "GRUPO F",
    confederacion: "AFC",
    nombre: "Japón",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Japón, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_japon.webp", "assets/2_japon_detras.webp"]
  },
  suecia: {
    grupo: "GRUPO F",
    confederacion: "UEFA",
    nombre: "Suecia",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_suecia.webp", "assets/1_suecia_detras.webp"]
  },
  "suecia-2": {
    grupo: "GRUPO F",
    confederacion: "UEFA",
    nombre: "Suecia",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Suecia, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_suecia.webp", "assets/2_suecia_detras.webp"]
  },
  tunez: {
    grupo: "GRUPO F",
    confederacion: "CAF",
    nombre: "Túnez",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_tunez.webp", "assets/1_tunez_detras.webp"]
  },
  "tunez-2": {
    grupo: "GRUPO F",
    confederacion: "CAF",
    nombre: "Túnez",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Túnez, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_tunez.webp", "assets/2_tunez_detras.webp"]
  },
  belgica: {
    grupo: "GRUPO G",
    confederacion: "UEFA",
    nombre: "Bélgica",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_belgica.webp", "assets/1_belgica_detras.webp"]
  },
  "belgica-2": {
    grupo: "GRUPO G",
    confederacion: "UEFA",
    nombre: "Bélgica",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Bélgica, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_belgica.webp", "assets/2_belgica_detras.webp"]
  },
  egipto: {
    grupo: "GRUPO G",
    confederacion: "CAF",
    nombre: "Egipto",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_egipto.webp", "assets/1_egipto_detras.webp"]
  },
  "egipto-2": {
    grupo: "GRUPO G",
    confederacion: "CAF",
    nombre: "Egipto",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Egipto, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_egipto.webp", "assets/2_egipto_detras.webp"]
  },
  iran: {
    grupo: "GRUPO G",
    confederacion: "AFC",
    nombre: "Irán",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_iran.webp", "assets/1_iran_detras.webp"]
  },
  "iran-2": {
    grupo: "GRUPO G",
    confederacion: "AFC",
    nombre: "Irán",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Irán, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_iran.webp", "assets/2_iran_detras.webp"]
  },
  "nueva-zelanda": {
    grupo: "GRUPO G",
    confederacion: "OFC",
    nombre: "Nueva Zelanda",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_nueva_zelanda.webp", "assets/1_nueva_zelanda_detras.webp"]
  },
  "nueva-zelanda-2": {
    grupo: "GRUPO G",
    confederacion: "OFC",
    nombre: "Nueva Zelanda",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Nueva Zelanda, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_nueva_zelanda.webp", "assets/2_nueva_zelanda_detras.webp"]
  },
  "cabo-verde": {
    grupo: "GRUPO H",
    confederacion: "CAF",
    nombre: "Cabo Verde",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_cabo_verde.webp", "assets/1_cabo_verde_detras.webp"]
  },
  "cabo-verde-2": {
    grupo: "GRUPO H",
    confederacion: "CAF",
    nombre: "Cabo Verde",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Cabo Verde, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_cabo_verde.webp", "assets/2_cabo_verde_detras.webp"]
  },
  uruguay: {
    grupo: "GRUPO H",
    confederacion: "CONMEBOL",
    nombre: "Uruguay",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_uruguay.webp", "assets/1_uruguay_detras.webp"]
  },
  "uruguay-2": {
    grupo: "GRUPO H",
    confederacion: "CONMEBOL",
    nombre: "Uruguay",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Uruguay, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_uruguay.webp", "assets/2_uruguay_detras.webp"]
  },
  "arabia-saudi": {
    grupo: "GRUPO H",
    confederacion: "AFC",
    nombre: "Arabia Saudí",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_arabia.webp", "assets/1_arabia_detras.webp"]
  },
  "arabia-saudi-2": {
    grupo: "GRUPO H",
    confederacion: "AFC",
    nombre: "Arabia Saudí",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Arabia Saudí, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_arabia.webp", "assets/2_arabia_detras.webp"]
  },
  noruega: {
    grupo: "GRUPO I",
    confederacion: "UEFA",
    nombre: "Noruega",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_Noruega.webp", "assets/1_Noruega_detras.webp"]
  },
  "noruega-2": {
    grupo: "GRUPO I",
    confederacion: "UEFA",
    nombre: "Noruega",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Noruega, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_Noruega.webp", "assets/2_Noruega_detras.webp"]
  },
  senegal: {
    grupo: "GRUPO I",
    confederacion: "CAF",
    nombre: "Senegal",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_senegal.webp", "assets/1_senegal_detras.webp"]
  },
  "senegal-2": {
    grupo: "GRUPO I",
    confederacion: "CAF",
    nombre: "Senegal",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Senegal, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_senegal.webp", "assets/2_senegal_detras.webp"]
  },
  argentina: {
    grupo: "GRUPO J",
    confederacion: "CONMEBOL",
    nombre: "Argentina",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_argentina.webp", "assets/1_argentina_detras.webp"]
  },
  "argentina-2": {
    grupo: "GRUPO J",
    confederacion: "CONMEBOL",
    nombre: "Argentina",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Argentina, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_argentina.webp", "assets/2_argentina_detras.webp"]
  },
  austria: {
    grupo: "GRUPO J",
    confederacion: "UEFA",
    nombre: "Austria",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_austria.webp", "assets/1_austria_detras.webp"]
  },
  "austria-2": {
    grupo: "GRUPO J",
    confederacion: "UEFA",
    nombre: "Austria",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Austria, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_austria.webp", "assets/2_austria_detras.webp"]
  },
  colombia: {
    grupo: "GRUPO K",
    confederacion: "CONMEBOL",
    nombre: "Colombia",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_colombia.webp", "assets/1_colombia_detras.webp"]
  },
  "colombia-2": {
    grupo: "GRUPO K",
    confederacion: "CONMEBOL",
    nombre: "Colombia",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Colombia, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_colombia.webp", "assets/2_colombia_detras.webp"]
  },
  portugal: {
    grupo: "GRUPO K",
    confederacion: "UEFA",
    nombre: "Portugal",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_portugal.webp", "assets/1_portugal_detras.webp"]
  },
  "portugal-2": {
    grupo: "GRUPO K",
    confederacion: "UEFA",
    nombre: "Portugal",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Portugal, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_portugal.webp", "assets/2_portugal_detras.webp"]
  },
  inglaterra: {
    grupo: "GRUPO L",
    confederacion: "UEFA",
    nombre: "Inglaterra",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_inglaterra.webp", "assets/1_inglaterra_detras.webp"]
  },
  "inglaterra-2": {
    grupo: "GRUPO L",
    confederacion: "UEFA",
    nombre: "Inglaterra",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Inglaterra, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_inglaterra.webp", "assets/2_inglaterra_detras.webp"]
  },
  ghana: {
    grupo: "GRUPO L",
    confederacion: "CAF",
    nombre: "Ghana",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_ghana.webp", "assets/1_ghana_detras.webp"]
  },
  "ghana-2": {
    grupo: "GRUPO L",
    confederacion: "CAF",
    nombre: "Ghana",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Ghana, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_ghana.webp", "assets/2_ghana_detras.webp"]
  },
  croacia: {
    grupo: "GRUPO L",
    confederacion: "UEFA",
    nombre: "Croacia",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_croacia.webp", "assets/1_croacia_detras.webp"]
  },
  "croacia-2": {
    grupo: "GRUPO L",
    confederacion: "UEFA",
    nombre: "Croacia",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de Croacia, con corte atlético original de futbolista, escudo y logos termosellados y tejido técnico transpirable.",
    imagenes: ["assets/2_croacia.webp", "assets/2_croacia_detras.webp"]
  },
  "real-madrid-1": {
    grupo: "LA LIGA",
    nombre: "Real Madrid",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad para el terreno de juego.",
    imagenes: ["assets/1_real_madrid.webp", "assets/1_real_madrid_detras.webp", "assets/1_real_madrid_manga.webp"]
  },
  "real-madrid-2": {
    grupo: "LA LIGA",
    nombre: "Real Madrid",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Real Madrid, con corte atlético, escudo termosellado y tejido técnico transpirable.",
    imagenes: ["assets/2_real_madrid.webp", "assets/2_real_madrid_detras.webp"]
  },
  "real-madrid-3": {
    grupo: "LA LIGA",
    nombre: "Real Madrid",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Real Madrid, diseñada con el máximo rendimiento y detalles de calidad profesional.",
    imagenes: ["assets/3_real_madrid.webp", "assets/3_real_madrid_detras.webp"]
  },
  "barca-1": {
    grupo: "LA LIGA",
    nombre: "F.C. Barcelona",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad.",
    imagenes: ["assets/1_barca.webp", "assets/1_barca_detras.webp"]
  },
  "barca-2": {
    grupo: "LA LIGA",
    nombre: "F.C. Barcelona",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del F.C. Barcelona, con tejido técnico de alta transpirabilidad y escudos termosellados.",
    imagenes: ["assets/2_barca.webp", "assets/2_barca_detras.webp"]
  },
  "barca-3": {
    grupo: "LA LIGA",
    nombre: "F.C. Barcelona",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del F.C. Barcelona con los estándares exactos de los jugadores profesionales.",
    imagenes: ["assets/3_barca.webp", "assets/3_barca_detras.webp"]
  },
  "atletico-madrid-1": {
    grupo: "LA LIGA",
    nombre: "Atlético de Madrid",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Corte atlético original de futbolista con escudo y logos termosellados, tejido técnico transpirable y acabados de máxima calidad.",
    imagenes: ["assets/1_atletico_madrid.webp", "assets/1_atletico_madrid_detras.webp"]
  },
  "atletico-madrid-2": {
    grupo: "LA LIGA",
    nombre: "Atlético de Madrid",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Atlético de Madrid, diseñada para ofrecer el máximo rendimiento en el campo.",
    imagenes: ["assets/2_atletico_madrid.webp", "assets/2_atletico_madrid_detras.webp"]
  },
  "bilbao-1": {
    grupo: "LA LIGA",
    nombre: "Athletic Club",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Athletic Club con detalles profesionales y tejido técnico transpirable.",
    imagenes: ["assets/1_atletico_bilbao.webp", "assets/1_atletico_bilbao_detras.webp"]
  },
  "bilbao-2": {
    grupo: "LA LIGA",
    nombre: "Athletic Club",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial con corte atlético y acabados de máxima calidad.",
    imagenes: ["assets/2_bilbao.webp", "assets/2_bilbao_detras.webp"]
  },
  "bilbao-3": {
    grupo: "LA LIGA",
    nombre: "Athletic Club",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Athletic Club.",
    imagenes: ["assets/3_bilbao.webp", "assets/3_bilbao_detras.webp"]
  },
  "betis-1": {
    grupo: "LA LIGA",
    nombre: "Real Betis",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Real Betis con tejido técnico de alto rendimiento.",
    imagenes: ["assets/1_betis.webp", "assets/1_betis_detras.webp"]
  },
  "betis-2": {
    grupo: "LA LIGA",
    nombre: "Real Betis",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Real Betis.",
    imagenes: ["assets/2_betis.webp", "assets/2_betis_detras.webp"]
  },
  "cadiz-1": {
    grupo: "LA LIGA",
    nombre: "Cádiz C.F.",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Cádiz C.F. con escudos termosellados.",
    imagenes: ["assets/1_cadiz.webp", "assets/1_cadiz_detras.webp"]
  },
  "cadiz-2": {
    grupo: "LA LIGA",
    nombre: "Cádiz C.F.",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Cádiz C.F.",
    imagenes: ["assets/2_cadiz.webp", "assets/2_cadiz_detras.webp"]
  },
  "real-sociedad-1": {
    grupo: "LA LIGA",
    nombre: "Real Sociedad",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial de la Real Sociedad con tejido técnico transpirable.",
    imagenes: ["assets/1_real_sociedad.webp", "assets/1_real_sociedad_detras.webp"]
  },
  "real-sociedad-2": {
    grupo: "LA LIGA",
    nombre: "Real Sociedad",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de la Real Sociedad.",
    imagenes: ["assets/2_real_sociedad.webp", "assets/2_real_sociedad_detras.webp"]
  },
  "real-sociedad-3": {
    grupo: "LA LIGA",
    nombre: "Real Sociedad",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial de la Real Sociedad.",
    imagenes: ["assets/3_real_sociedad.webp", "assets/3_real_sociedad_detras.webp"]
  },
  "mallorca-1": {
    grupo: "LA LIGA",
    nombre: "RCD Mallorca",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del RCD Mallorca con tejido técnico transpirable.",
    imagenes: ["assets/1_mallorca.webp", "assets/1_mallorca_detras.webp"]
  },
  "mallorca-2": {
    grupo: "LA LIGA",
    nombre: "RCD Mallorca",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del RCD Mallorca.",
    imagenes: ["assets/2_mallorca.webp", "assets/2_mallorca_detras.webp"]
  },
  "las-palmas-1": {
    grupo: "LA LIGA",
    nombre: "UD Las Palmas",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial de la UD Las Palmas.",
    imagenes: ["assets/1_laspalmas.webp", "assets/1_laspalmas_detras.webp"]
  },
  "las-palmas-2": {
    grupo: "LA LIGA",
    nombre: "UD Las Palmas",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial de la UD Las Palmas.",
    imagenes: ["assets/2_laspalmas.webp", "assets/2_laspalmas_detras.webp"]
  },
  "las-palmas-3": {
    grupo: "LA LIGA",
    nombre: "UD Las Palmas",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial de la UD Las Palmas.",
    imagenes: ["assets/3_laspalmas.webp", "assets/3_laspalmas_detras.webp"]
  },
  "malaga-1": {
    grupo: "LA LIGA",
    nombre: "Málaga C.F.",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Málaga C.F.",
    imagenes: ["assets/1_malaga.webp", "assets/1_malaga_detras.webp"]
  },
  "malaga-2": {
    grupo: "LA LIGA",
    nombre: "Málaga C.F.",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Málaga C.F.",
    imagenes: ["assets/2_malaga.webp", "assets/2_malaga_detras.webp"]
  },
  "malaga-3": {
    grupo: "LA LIGA",
    nombre: "Málaga C.F.",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Málaga C.F.",
    imagenes: ["assets/3_malaga.webp", "assets/3_malaga_detras.webp"]
  },
  "elche-1": {
    grupo: "LA LIGA",
    nombre: "Elche C.F.",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Elche C.F.",
    imagenes: ["assets/1_elche.webp", "assets/1_elche_detras.webp"]
  },
  "osasuna-1": {
    grupo: "LA LIGA",
    nombre: "CA Osasuna",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del CA Osasuna.",
    imagenes: ["assets/1_osasuna.webp", "assets/1_osasuna_detras.webp"]
  },
  "osasuna-2": {
    grupo: "LA LIGA",
    nombre: "CA Osasuna",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del CA Osasuna.",
    imagenes: ["assets/2_osasuna.webp", "assets/2_osasuna_detras.webp"]
  },
  "sevilla-1": {
    grupo: "LA LIGA",
    nombre: "Sevilla F.C.",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Sevilla F.C.",
    imagenes: ["assets/1_sevilla.webp", "assets/1_sevilla_detras.webp"]
  },
  "sevilla-2": {
    grupo: "LA LIGA",
    nombre: "Sevilla F.C.",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Sevilla F.C.",
    imagenes: ["assets/2_sevilla.webp", "assets/2_sevilla_detras.webp"]
  },
  "sevilla-3": {
    grupo: "LA LIGA",
    nombre: "Sevilla F.C.",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Sevilla F.C.",
    imagenes: ["assets/3_sevilla.webp", "assets/3_sevilla_detras.webp"]
  },
  "betis-3": {
    grupo: "LA LIGA",
    nombre: "Real Betis",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Real Betis 2026/27.",
    imagenes: ["assets/3_betis.webp", "assets/3_betis_detras.webp"]
  },
  "atletico-madrid-3": {
    grupo: "LA LIGA",
    nombre: "Atlético de Madrid",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Atlético de Madrid 2026/27.",
    imagenes: ["assets/3_atletico_madrid.webp", "assets/3_atletico_madrid_detras.webp"]
  },
  "valencia-1": {
    grupo: "LA LIGA",
    nombre: "Valencia CF",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Valencia CF 2026/27.",
    imagenes: ["assets/1_valencia.webp", "assets/1_valencia_detras.webp"]
  },
  "valencia-2": {
    grupo: "LA LIGA",
    nombre: "Valencia CF",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Valencia CF 2026/27.",
    imagenes: ["assets/2_valencia.webp", "assets/2_valencia_detras.webp"]
  },
  "valencia-3": {
    grupo: "LA LIGA",
    nombre: "Valencia CF",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Valencia CF 2026/27.",
    imagenes: ["assets/3_valencia.webp", "assets/3_valencia_detras.webp"]
  },
  "villarreal-1": {
    grupo: "LA LIGA",
    nombre: "Villarreal CF",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Villarreal CF 2026/27.",
    imagenes: ["assets/1_villarreal.webp", "assets/1_villarreal_detras.webp"]
  },
  "villarreal-2": {
    grupo: "LA LIGA",
    nombre: "Villarreal CF",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Villarreal CF 2026/27.",
    imagenes: ["assets/2_villarreal.webp"]
  },
  "villarreal-3": {
    grupo: "LA LIGA",
    nombre: "Villarreal CF",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Villarreal CF 2026/27.",
    imagenes: ["assets/3_villarreal.webp", "assets/3_villarreal_detras.webp"]
  },
  "getafe-1": {
    grupo: "LA LIGA",
    nombre: "Getafe CF",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Getafe CF 2026/27.",
    imagenes: ["assets/1_getafe.webp", "assets/1_getafe_detras.webp"]
  },
  "getafe-2": {
    grupo: "LA LIGA",
    nombre: "Getafe CF",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Getafe CF 2026/27.",
    imagenes: ["assets/2_getafe.webp", "assets/2_getafe_detras.webp"]
  },
  "getafe-3": {
    grupo: "LA LIGA",
    nombre: "Getafe CF",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Getafe CF 2026/27.",
    imagenes: ["assets/3_getafe.webp", "assets/3_getafe_detras.webp"]
  },
  "espanyol-1": {
    grupo: "LA LIGA",
    nombre: "RCD Espanyol",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del RCD Espanyol 2026/27.",
    imagenes: ["assets/1_espanyol.webp", "assets/1_espanyol_detras.webp"]
  },
  "espanyol-2": {
    grupo: "LA LIGA",
    nombre: "RCD Espanyol",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del RCD Espanyol 2026/27.",
    imagenes: ["assets/2_espanyol.webp", "assets/2_espanyol_detras.webp"]
  },
  "espanyol-3": {
    grupo: "LA LIGA",
    nombre: "RCD Espanyol",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del RCD Espanyol 2026/27.",
    imagenes: ["assets/3_espanyol.webp", "assets/3_espanyol_detras.webp"]
  },
  "celta-1": {
    grupo: "LA LIGA",
    nombre: "RC Celta",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del RC Celta 2026/27.",
    imagenes: ["assets/1_celta.webp", "assets/1_celta_detras.webp"]
  },
  "celta-2": {
    grupo: "LA LIGA",
    nombre: "RC Celta",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del RC Celta 2026/27.",
    imagenes: ["assets/2_celta.webp", "assets/2_celta_detras.webp"]
  },
  "girona-1": {
    grupo: "LA LIGA",
    nombre: "Girona FC",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Girona FC 2026/27.",
    imagenes: ["assets/1_girona.webp", "assets/1_girona_detras.webp"]
  },
  "girona-2": {
    grupo: "LA LIGA",
    nombre: "Girona FC",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Girona FC 2026/27.",
    imagenes: ["assets/2_girona.webp", "assets/2_girona_detras.webp"]
  },
  "levante-1": {
    grupo: "LA LIGA",
    nombre: "Levante UD",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Levante UD 2026/27.",
    imagenes: ["assets/1_levante.webp", "assets/1_levante_detras.webp"]
  },
  "levante-2": {
    grupo: "LA LIGA",
    nombre: "Levante UD",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Levante UD 2026/27.",
    imagenes: ["assets/2_levante.webp", "assets/2_levante_detras.webp"]
  },
  "leganes-1": {
    grupo: "LA LIGA",
    nombre: "CD Leganés",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del CD Leganés 2026/27.",
    imagenes: ["assets/1_leganes.webp", "assets/1_leganes_detras.webp"]
  },
  "leganes-2": {
    grupo: "LA LIGA",
    nombre: "CD Leganés",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del CD Leganés 2026/27.",
    imagenes: ["assets/2_leganes.webp", "assets/2_leganes_detras.webp"]
  },
  "alaves-1": {
    grupo: "LA LIGA",
    nombre: "Deportivo Alavés",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Deportivo Alavés 2026/27.",
    imagenes: ["assets/1_alaves.webp", "assets/1_alaves_detras.webp"]
  },
  "almeria-1": {
    grupo: "LA LIGA",
    nombre: "UD Almería",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del UD Almería 2026/27.",
    imagenes: ["assets/1_almeria.webp", "assets/1_almeria_detras.webp"]
  },
  // ---------- PREMIER LEAGUE 2026/27 (20 equipos x 1ª, 2ª, 3ª) ----------
  // Las que tienen 'proximamente: true' salen como "Próximamente" en premier.html.
  // Cuando tengas la foto: pon los nombres en 'imagenes' y borra 'proximamente'.
  "arsenal-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Arsenal",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Arsenal con tejido técnico transpirable.",
    imagenes: ["assets/1_arsenal.webp", "assets/1_arsenal_detras.webp"]
  },
  "arsenal-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Arsenal",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Arsenal 2026/27.",
    imagenes: ["assets/2_arsenal.webp", "assets/2_arsenal_detras.webp"]
  },
  "arsenal-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Arsenal",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Arsenal 2026/27.",
    imagenes: ["assets/3_arsenal.webp", "assets/3_arsenal_detras.webp"]
  },
  "aston-villa-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Aston Villa",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Aston Villa 2026/27.",
    imagenes: []
  },
  "aston-villa-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Aston Villa",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Aston Villa 2026/27.",
    imagenes: []
  },
  "aston-villa-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Aston Villa",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Aston Villa 2026/27.",
    imagenes: []
  },
  "bournemouth-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "AFC Bournemouth",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del AFC Bournemouth 2026/27.",
    imagenes: []
  },
  "bournemouth-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "AFC Bournemouth",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del AFC Bournemouth 2026/27.",
    imagenes: []
  },
  "bournemouth-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "AFC Bournemouth",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del AFC Bournemouth 2026/27.",
    imagenes: []
  },
  "brentford-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Brentford",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Brentford 2026/27.",
    imagenes: ["assets/1_brentford.webp", "assets/1_brentford_detras.webp"]
  },
  "brentford-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Brentford",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Brentford 2026/27.",
    imagenes: []
  },
  "brentford-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Brentford",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Brentford 2026/27.",
    imagenes: []
  },
  "brighton-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Brighton & Hove Albion",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Brighton & Hove Albion 2026/27.",
    imagenes: []
  },
  "brighton-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Brighton & Hove Albion",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Brighton & Hove Albion 2026/27.",
    imagenes: []
  },
  "brighton-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Brighton & Hove Albion",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Brighton & Hove Albion 2026/27.",
    imagenes: []
  },
  "chelsea-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Chelsea FC",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Chelsea FC 2026/27.",
    imagenes: ["assets/1_chelsea.webp", "assets/1_chelsea_detras.webp"]
  },
  "chelsea-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Chelsea FC",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Chelsea FC 2026/27.",
    imagenes: ["assets/2_chelsea.webp", "assets/2_chelsea_detras.webp"]
  },
  "chelsea-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Chelsea FC",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Chelsea FC 2026/27.",
    imagenes: ["assets/3_chelsea.webp", "assets/3_chelsea_detras.webp"]
  },
  "coventry-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Coventry City",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Coventry City 2026/27.",
    imagenes: []
  },
  "coventry-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Coventry City",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Coventry City 2026/27.",
    imagenes: []
  },
  "coventry-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Coventry City",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Coventry City 2026/27.",
    imagenes: []
  },
  "crystal-palace-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Crystal Palace",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Crystal Palace 2026/27.",
    imagenes: []
  },
  "crystal-palace-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Crystal Palace",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Crystal Palace 2026/27.",
    imagenes: []
  },
  "crystal-palace-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Crystal Palace",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Crystal Palace 2026/27.",
    imagenes: []
  },
  "everton-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Everton",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Everton 2026/27.",
    imagenes: ["assets/1_everton.webp", "assets/1_everton_detras.webp"]
  },
  "everton-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Everton",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Everton 2026/27.",
    imagenes: []
  },
  "everton-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Everton",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Everton 2026/27.",
    imagenes: []
  },
  "fulham-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Fulham",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Fulham 2026/27.",
    imagenes: []
  },
  "fulham-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Fulham",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Fulham 2026/27.",
    imagenes: []
  },
  "fulham-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Fulham",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Fulham 2026/27.",
    imagenes: []
  },
  "hull-city-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Hull City",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Hull City 2026/27.",
    imagenes: []
  },
  "hull-city-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Hull City",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Hull City 2026/27.",
    imagenes: []
  },
  "hull-city-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Hull City",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Hull City 2026/27.",
    imagenes: []
  },
  "ipswich-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Ipswich Town",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Ipswich Town 2026/27.",
    imagenes: []
  },
  "ipswich-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Ipswich Town",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Ipswich Town 2026/27.",
    imagenes: []
  },
  "ipswich-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Ipswich Town",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Ipswich Town 2026/27.",
    imagenes: []
  },
  "leeds-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Leeds United",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Leeds United 2026/27.",
    imagenes: []
  },
  "leeds-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Leeds United",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Leeds United 2026/27.",
    imagenes: []
  },
  "leeds-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Leeds United",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Leeds United 2026/27.",
    imagenes: []
  },
  "liverpool-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Liverpool FC",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Liverpool FC 2026/27.",
    imagenes: ["assets/1_liverpool.webp", "assets/1_liverpool_detras.webp"]
  },
  "liverpool-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Liverpool FC",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Liverpool FC 2026/27.",
    imagenes: ["assets/2_liverpool.webp", "assets/2_liverpool_detras.webp"]
  },
  "liverpool-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Liverpool FC",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Liverpool FC 2026/27.",
    imagenes: ["assets/3_liverpool.webp", "assets/3_liverpool_detras.webp"]
  },
  "manchester-city-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Manchester City",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Manchester City 2026/27.",
    imagenes: ["assets/1_manchester_city.webp", "assets/1_manchester_city_detras.webp"]
  },
  "manchester-city-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Manchester City",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Manchester City 2026/27.",
    imagenes: ["assets/2_manchester_city.webp", "assets/2_manchester_city_detras.webp"]
  },
  "manchester-city-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Manchester City",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Manchester City 2026/27.",
    imagenes: ["assets/3_manchester_city.webp", "assets/3_manchester_city_detras.webp"]
  },
  "manchester-united-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Manchester United",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Manchester United 2026/27.",
    imagenes: ["assets/1_manchester_united.webp", "assets/1_manchester_united_detras.webp"]
  },
  "manchester-united-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Manchester United",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Manchester United 2026/27.",
    imagenes: ["assets/2_manchester_united.webp", "assets/2_manchester_united_detras.webp"]
  },
  "manchester-united-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Manchester United",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Manchester United 2026/27.",
    imagenes: ["assets/3_manchester_united.webp", "assets/3_manchester_united_detras.webp"]
  },
  "newcastle-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Newcastle United",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Newcastle United 2026/27.",
    imagenes: []
  },
  "newcastle-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Newcastle United",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Newcastle United 2026/27.",
    imagenes: []
  },
  "newcastle-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Newcastle United",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Newcastle United 2026/27.",
    imagenes: []
  },
  "nottingham-forest-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Nottingham Forest",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Nottingham Forest 2026/27.",
    imagenes: []
  },
  "nottingham-forest-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Nottingham Forest",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Nottingham Forest 2026/27.",
    imagenes: []
  },
  "nottingham-forest-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Nottingham Forest",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Nottingham Forest 2026/27.",
    imagenes: []
  },
  "sunderland-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Sunderland",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Sunderland 2026/27.",
    imagenes: []
  },
  "sunderland-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Sunderland",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Sunderland 2026/27.",
    imagenes: []
  },
  "sunderland-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Sunderland",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Sunderland 2026/27.",
    imagenes: []
  },
  "tottenham-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "Tottenham Hotspur",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Tottenham Hotspur 2026/27.",
    imagenes: ["assets/1_tottenham.webp", "assets/1_tottenham_detras.webp"]
  },
  "tottenham-2": {
    grupo: "PREMIER LEAGUE",
    nombre: "Tottenham Hotspur",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Tottenham Hotspur 2026/27.",
    imagenes: ["assets/2_tottenham.webp", "assets/2_tottenham_detras.webp"]
  },
  "tottenham-3": {
    grupo: "PREMIER LEAGUE",
    nombre: "Tottenham Hotspur",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Tottenham Hotspur 2026/27.",
    imagenes: []
  },
  "west-ham-1": {
    grupo: "PREMIER LEAGUE",
    nombre: "West Ham United",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del West Ham United 2026/27.",
    imagenes: ["assets/1_west_ham.webp", "assets/1_west_ham_detras.webp"]
  },
  // ---------- SERIE A 2026/27 (20 equipos x 1ª, 2ª, 3ª) ----------
  "milan-1": {
    grupo: "SERIE A",
    nombre: "AC Milan",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del AC Milan 2026/27.",
    imagenes: ["assets/1_milan.webp", "assets/1_milan_detras.webp"]
  },
  "milan-2": {
    grupo: "SERIE A",
    nombre: "AC Milan",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del AC Milan 2026/27.",
    imagenes: ["assets/2_milan.webp", "assets/2_milan_detras.webp"]
  },
  "milan-3": {
    grupo: "SERIE A",
    nombre: "AC Milan",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del AC Milan 2026/27.",
    imagenes: ["assets/3_milan.webp", "assets/3_milan_detras.webp"]
  },
  "atalanta-1": {
    grupo: "SERIE A",
    nombre: "Atalanta",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Atalanta 2026/27.",
    imagenes: ["assets/1_atalanta.webp", "assets/1_atalanta_detras.webp"]
  },
  "atalanta-2": {
    grupo: "SERIE A",
    nombre: "Atalanta",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Atalanta 2026/27.",
    imagenes: []
  },
  "atalanta-3": {
    grupo: "SERIE A",
    nombre: "Atalanta",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Atalanta 2026/27.",
    imagenes: []
  },
  "bologna-1": {
    grupo: "SERIE A",
    nombre: "Bologna",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Bologna 2026/27.",
    imagenes: []
  },
  "bologna-2": {
    grupo: "SERIE A",
    nombre: "Bologna",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Bologna 2026/27.",
    imagenes: []
  },
  "bologna-3": {
    grupo: "SERIE A",
    nombre: "Bologna",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Bologna 2026/27.",
    imagenes: []
  },
  "cagliari-1": {
    grupo: "SERIE A",
    nombre: "Cagliari",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Cagliari 2026/27.",
    imagenes: []
  },
  "cagliari-2": {
    grupo: "SERIE A",
    nombre: "Cagliari",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Cagliari 2026/27.",
    imagenes: []
  },
  "cagliari-3": {
    grupo: "SERIE A",
    nombre: "Cagliari",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Cagliari 2026/27.",
    imagenes: []
  },
  "como-1": {
    grupo: "SERIE A",
    nombre: "Como 1907",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Como 1907 2026/27.",
    imagenes: []
  },
  "como-2": {
    grupo: "SERIE A",
    nombre: "Como 1907",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Como 1907 2026/27.",
    imagenes: []
  },
  "como-3": {
    grupo: "SERIE A",
    nombre: "Como 1907",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Como 1907 2026/27.",
    imagenes: []
  },
  "fiorentina-1": {
    grupo: "SERIE A",
    nombre: "ACF Fiorentina",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del ACF Fiorentina 2026/27.",
    imagenes: ["assets/1_fiorentina.webp", "assets/1_fiorentina_detras.webp"]
  },
  "fiorentina-2": {
    grupo: "SERIE A",
    nombre: "ACF Fiorentina",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del ACF Fiorentina 2026/27.",
    imagenes: ["assets/2_fiorentina.webp", "assets/2_fiorentina_detras.webp"]
  },
  "fiorentina-3": {
    grupo: "SERIE A",
    nombre: "ACF Fiorentina",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del ACF Fiorentina 2026/27.",
    imagenes: []
  },
  "frosinone-1": {
    grupo: "SERIE A",
    nombre: "Frosinone",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Frosinone 2026/27.",
    imagenes: []
  },
  "frosinone-2": {
    grupo: "SERIE A",
    nombre: "Frosinone",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Frosinone 2026/27.",
    imagenes: []
  },
  "frosinone-3": {
    grupo: "SERIE A",
    nombre: "Frosinone",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Frosinone 2026/27.",
    imagenes: []
  },
  "genoa-1": {
    grupo: "SERIE A",
    nombre: "Genoa",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Genoa 2026/27.",
    imagenes: []
  },
  "genoa-2": {
    grupo: "SERIE A",
    nombre: "Genoa",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Genoa 2026/27.",
    imagenes: []
  },
  "genoa-3": {
    grupo: "SERIE A",
    nombre: "Genoa",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Genoa 2026/27.",
    imagenes: []
  },
  "inter-1": {
    grupo: "SERIE A",
    nombre: "Inter de Milán",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Inter de Milán 2026/27.",
    imagenes: ["assets/1_inter.webp", "assets/1_inter_detras.webp"]
  },
  "inter-2": {
    grupo: "SERIE A",
    nombre: "Inter de Milán",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Inter de Milán 2026/27.",
    imagenes: ["assets/2_inter.webp", "assets/2_inter_detras.webp"]
  },
  "inter-3": {
    grupo: "SERIE A",
    nombre: "Inter de Milán",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Inter de Milán 2026/27.",
    imagenes: ["assets/3_inter.webp", "assets/3_inter_detras.webp"]
  },
  "juventus-1": {
    grupo: "SERIE A",
    nombre: "Juventus",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Juventus 2026/27.",
    imagenes: ["assets/1_juventus.webp", "assets/1_juventus_detras.webp"]
  },
  "juventus-2": {
    grupo: "SERIE A",
    nombre: "Juventus",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Juventus 2026/27.",
    imagenes: ["assets/2_juventus.webp", "assets/2_juventus_detras.webp"]
  },
  "juventus-3": {
    grupo: "SERIE A",
    nombre: "Juventus",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Juventus 2026/27.",
    imagenes: ["assets/3_juventus.webp", "assets/3_juventus_detras.webp"]
  },
  "lazio-1": {
    grupo: "SERIE A",
    nombre: "SS Lazio",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del SS Lazio 2026/27.",
    imagenes: ["assets/1_lazio.webp"]
  },
  "lazio-2": {
    grupo: "SERIE A",
    nombre: "SS Lazio",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del SS Lazio 2026/27.",
    imagenes: []
  },
  "lazio-3": {
    grupo: "SERIE A",
    nombre: "SS Lazio",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del SS Lazio 2026/27.",
    imagenes: []
  },
  "lecce-1": {
    grupo: "SERIE A",
    nombre: "Lecce",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Lecce 2026/27.",
    imagenes: []
  },
  "lecce-2": {
    grupo: "SERIE A",
    nombre: "Lecce",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Lecce 2026/27.",
    imagenes: []
  },
  "lecce-3": {
    grupo: "SERIE A",
    nombre: "Lecce",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Lecce 2026/27.",
    imagenes: []
  },
  "monza-1": {
    grupo: "SERIE A",
    nombre: "Monza",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Monza 2026/27.",
    imagenes: []
  },
  "monza-2": {
    grupo: "SERIE A",
    nombre: "Monza",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Monza 2026/27.",
    imagenes: []
  },
  "monza-3": {
    grupo: "SERIE A",
    nombre: "Monza",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Monza 2026/27.",
    imagenes: []
  },
  "napoli-1": {
    grupo: "SERIE A",
    nombre: "SSC Napoli",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del SSC Napoli 2026/27.",
    imagenes: []
  },
  "napoli-2": {
    grupo: "SERIE A",
    nombre: "SSC Napoli",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del SSC Napoli 2026/27.",
    imagenes: []
  },
  "napoli-3": {
    grupo: "SERIE A",
    nombre: "SSC Napoli",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del SSC Napoli 2026/27.",
    imagenes: []
  },
  "parma-1": {
    grupo: "SERIE A",
    nombre: "Parma",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Parma 2026/27.",
    imagenes: ["assets/1_parma.webp", "assets/1_parma_detras.webp"]
  },
  "parma-2": {
    grupo: "SERIE A",
    nombre: "Parma",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Parma 2026/27.",
    imagenes: []
  },
  "parma-3": {
    grupo: "SERIE A",
    nombre: "Parma",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Parma 2026/27.",
    imagenes: []
  },
  "roma-1": {
    grupo: "SERIE A",
    nombre: "AS Roma",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del AS Roma 2026/27.",
    imagenes: ["assets/1_roma.webp", "assets/1_roma_detras.webp"]
  },
  "roma-2": {
    grupo: "SERIE A",
    nombre: "AS Roma",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del AS Roma 2026/27.",
    imagenes: []
  },
  "roma-3": {
    grupo: "SERIE A",
    nombre: "AS Roma",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del AS Roma 2026/27.",
    imagenes: []
  },
  "sassuolo-1": {
    grupo: "SERIE A",
    nombre: "Sassuolo",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Sassuolo 2026/27.",
    imagenes: []
  },
  "sassuolo-2": {
    grupo: "SERIE A",
    nombre: "Sassuolo",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Sassuolo 2026/27.",
    imagenes: []
  },
  "sassuolo-3": {
    grupo: "SERIE A",
    nombre: "Sassuolo",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Sassuolo 2026/27.",
    imagenes: []
  },
  "torino-1": {
    grupo: "SERIE A",
    nombre: "Torino",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Torino 2026/27.",
    imagenes: ["assets/1_torino.webp", "assets/1_torino_detras.webp"]
  },
  "torino-2": {
    grupo: "SERIE A",
    nombre: "Torino",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Torino 2026/27.",
    imagenes: []
  },
  "torino-3": {
    grupo: "SERIE A",
    nombre: "Torino",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Torino 2026/27.",
    imagenes: []
  },
  "udinese-1": {
    grupo: "SERIE A",
    nombre: "Udinese",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Udinese 2026/27.",
    imagenes: []
  },
  "udinese-2": {
    grupo: "SERIE A",
    nombre: "Udinese",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Udinese 2026/27.",
    imagenes: []
  },
  "udinese-3": {
    grupo: "SERIE A",
    nombre: "Udinese",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Udinese 2026/27.",
    imagenes: []
  },
  "venezia-1": {
    grupo: "SERIE A",
    nombre: "Venezia",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Venezia 2026/27.",
    imagenes: []
  },
  "venezia-2": {
    grupo: "SERIE A",
    nombre: "Venezia",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Venezia 2026/27.",
    imagenes: []
  },
  "venezia-3": {
    grupo: "SERIE A",
    nombre: "Venezia",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Venezia 2026/27.",
    imagenes: []
  },
  "palermo-1": {
    grupo: "SERIE A",
    nombre: "Palermo",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Palermo 2026/27.",
    imagenes: ["assets/1_palermo.webp", "assets/1_palermo_detras.webp"]
  },
  // ---------- LIGUE 1 2026/27 (18 equipos x 1ª, 2ª, 3ª) ----------
  "angers-1": {
    grupo: "LIGUE 1",
    nombre: "Angers SCO",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Angers SCO 2026/27.",
    imagenes: []
  },
  "angers-2": {
    grupo: "LIGUE 1",
    nombre: "Angers SCO",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Angers SCO 2026/27.",
    imagenes: []
  },
  "angers-3": {
    grupo: "LIGUE 1",
    nombre: "Angers SCO",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Angers SCO 2026/27.",
    imagenes: []
  },
  "auxerre-1": {
    grupo: "LIGUE 1",
    nombre: "AJ Auxerre",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del AJ Auxerre 2026/27.",
    imagenes: []
  },
  "auxerre-2": {
    grupo: "LIGUE 1",
    nombre: "AJ Auxerre",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del AJ Auxerre 2026/27.",
    imagenes: []
  },
  "auxerre-3": {
    grupo: "LIGUE 1",
    nombre: "AJ Auxerre",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del AJ Auxerre 2026/27.",
    imagenes: []
  },
  "brest-1": {
    grupo: "LIGUE 1",
    nombre: "Stade Brestois",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Stade Brestois 2026/27.",
    imagenes: []
  },
  "brest-2": {
    grupo: "LIGUE 1",
    nombre: "Stade Brestois",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Stade Brestois 2026/27.",
    imagenes: []
  },
  "brest-3": {
    grupo: "LIGUE 1",
    nombre: "Stade Brestois",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Stade Brestois 2026/27.",
    imagenes: []
  },
  "le-havre-1": {
    grupo: "LIGUE 1",
    nombre: "Le Havre AC",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Le Havre AC 2026/27.",
    imagenes: []
  },
  "le-havre-2": {
    grupo: "LIGUE 1",
    nombre: "Le Havre AC",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Le Havre AC 2026/27.",
    imagenes: []
  },
  "le-havre-3": {
    grupo: "LIGUE 1",
    nombre: "Le Havre AC",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Le Havre AC 2026/27.",
    imagenes: []
  },
  "le-mans-1": {
    grupo: "LIGUE 1",
    nombre: "Le Mans FC",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Le Mans FC 2026/27.",
    imagenes: []
  },
  "le-mans-2": {
    grupo: "LIGUE 1",
    nombre: "Le Mans FC",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Le Mans FC 2026/27.",
    imagenes: []
  },
  "le-mans-3": {
    grupo: "LIGUE 1",
    nombre: "Le Mans FC",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Le Mans FC 2026/27.",
    imagenes: []
  },
  "lens-1": {
    grupo: "LIGUE 1",
    nombre: "RC Lens",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del RC Lens 2026/27.",
    imagenes: []
  },
  "lens-2": {
    grupo: "LIGUE 1",
    nombre: "RC Lens",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del RC Lens 2026/27.",
    imagenes: []
  },
  "lens-3": {
    grupo: "LIGUE 1",
    nombre: "RC Lens",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del RC Lens 2026/27.",
    imagenes: []
  },
  "lille-1": {
    grupo: "LIGUE 1",
    nombre: "LOSC Lille",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del LOSC Lille 2026/27.",
    imagenes: []
  },
  "lille-2": {
    grupo: "LIGUE 1",
    nombre: "LOSC Lille",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del LOSC Lille 2026/27.",
    imagenes: []
  },
  "lille-3": {
    grupo: "LIGUE 1",
    nombre: "LOSC Lille",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del LOSC Lille 2026/27.",
    imagenes: []
  },
  "lorient-1": {
    grupo: "LIGUE 1",
    nombre: "FC Lorient",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del FC Lorient 2026/27.",
    imagenes: []
  },
  "lorient-2": {
    grupo: "LIGUE 1",
    nombre: "FC Lorient",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del FC Lorient 2026/27.",
    imagenes: []
  },
  "lorient-3": {
    grupo: "LIGUE 1",
    nombre: "FC Lorient",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del FC Lorient 2026/27.",
    imagenes: []
  },
  "lyon-1": {
    grupo: "LIGUE 1",
    nombre: "Olympique de Lyon",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Olympique de Lyon 2026/27.",
    imagenes: ["assets/1_lyon.webp", "assets/1_lyon_detras.webp"]
  },
  "lyon-2": {
    grupo: "LIGUE 1",
    nombre: "Olympique de Lyon",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Olympique de Lyon 2026/27.",
    imagenes: []
  },
  "lyon-3": {
    grupo: "LIGUE 1",
    nombre: "Olympique de Lyon",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Olympique de Lyon 2026/27.",
    imagenes: []
  },
  "marsella-1": {
    grupo: "LIGUE 1",
    nombre: "Olympique de Marsella",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Olympique de Marsella 2026/27.",
    imagenes: ["assets/1_marsella.webp", "assets/1_marsella_detras.webp"]
  },
  "marsella-2": {
    grupo: "LIGUE 1",
    nombre: "Olympique de Marsella",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Olympique de Marsella 2026/27.",
    imagenes: ["assets/2_marsella.webp", "assets/2_marsella_detras.webp"]
  },
  "marsella-3": {
    grupo: "LIGUE 1",
    nombre: "Olympique de Marsella",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Olympique de Marsella 2026/27.",
    imagenes: []
  },
  "monaco-1": {
    grupo: "LIGUE 1",
    nombre: "AS Monaco",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del AS Monaco 2026/27.",
    imagenes: ["assets/1_monaco.webp", "assets/1_monaco_detras.webp"]
  },
  "monaco-2": {
    grupo: "LIGUE 1",
    nombre: "AS Monaco",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del AS Monaco 2026/27.",
    imagenes: []
  },
  "monaco-3": {
    grupo: "LIGUE 1",
    nombre: "AS Monaco",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del AS Monaco 2026/27.",
    imagenes: []
  },
  "nice-1": {
    grupo: "LIGUE 1",
    nombre: "OGC Niza",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del OGC Niza 2026/27.",
    imagenes: []
  },
  "nice-2": {
    grupo: "LIGUE 1",
    nombre: "OGC Niza",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del OGC Niza 2026/27.",
    imagenes: []
  },
  "nice-3": {
    grupo: "LIGUE 1",
    nombre: "OGC Niza",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del OGC Niza 2026/27.",
    imagenes: []
  },
  "paris-fc-1": {
    grupo: "LIGUE 1",
    nombre: "Paris FC",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Paris FC 2026/27.",
    imagenes: []
  },
  "paris-fc-2": {
    grupo: "LIGUE 1",
    nombre: "Paris FC",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Paris FC 2026/27.",
    imagenes: []
  },
  "paris-fc-3": {
    grupo: "LIGUE 1",
    nombre: "Paris FC",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Paris FC 2026/27.",
    imagenes: []
  },
  "psg-1": {
    grupo: "LIGUE 1",
    nombre: "Paris Saint-Germain",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Paris Saint-Germain 2026/27.",
    imagenes: ["assets/1_psg.webp", "assets/1_psg_detras.webp"]
  },
  "psg-2": {
    grupo: "LIGUE 1",
    nombre: "Paris Saint-Germain",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Paris Saint-Germain 2026/27.",
    imagenes: ["assets/2_psg.webp", "assets/2_psg_detras.webp"]
  },
  "psg-3": {
    grupo: "LIGUE 1",
    nombre: "Paris Saint-Germain",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Paris Saint-Germain 2026/27.",
    imagenes: []
  },
  "rennes-1": {
    grupo: "LIGUE 1",
    nombre: "Stade Rennais",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Stade Rennais 2026/27.",
    imagenes: []
  },
  "rennes-2": {
    grupo: "LIGUE 1",
    nombre: "Stade Rennais",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Stade Rennais 2026/27.",
    imagenes: []
  },
  "rennes-3": {
    grupo: "LIGUE 1",
    nombre: "Stade Rennais",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Stade Rennais 2026/27.",
    imagenes: []
  },
  "strasbourg-1": {
    grupo: "LIGUE 1",
    nombre: "RC Strasbourg",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del RC Strasbourg 2026/27.",
    imagenes: []
  },
  "strasbourg-2": {
    grupo: "LIGUE 1",
    nombre: "RC Strasbourg",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del RC Strasbourg 2026/27.",
    imagenes: []
  },
  "strasbourg-3": {
    grupo: "LIGUE 1",
    nombre: "RC Strasbourg",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del RC Strasbourg 2026/27.",
    imagenes: []
  },
  "toulouse-1": {
    grupo: "LIGUE 1",
    nombre: "Toulouse FC",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Toulouse FC 2026/27.",
    imagenes: []
  },
  "toulouse-2": {
    grupo: "LIGUE 1",
    nombre: "Toulouse FC",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Toulouse FC 2026/27.",
    imagenes: []
  },
  "toulouse-3": {
    grupo: "LIGUE 1",
    nombre: "Toulouse FC",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Toulouse FC 2026/27.",
    imagenes: []
  },
  "troyes-1": {
    grupo: "LIGUE 1",
    nombre: "ESTAC Troyes",
    equipacion: "1ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del ESTAC Troyes 2026/27.",
    imagenes: []
  },
  "troyes-2": {
    grupo: "LIGUE 1",
    nombre: "ESTAC Troyes",
    equipacion: "2ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del ESTAC Troyes 2026/27.",
    imagenes: []
  },
  "troyes-3": {
    grupo: "LIGUE 1",
    nombre: "ESTAC Troyes",
    equipacion: "3ª Equipación",
    proximamente: true,
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del ESTAC Troyes 2026/27.",
    imagenes: []
  },
  // ---------- BUNDESLIGA 2026/27 ----------
  "bayern-1": {
    grupo: "BUNDESLIGA",
    nombre: "Bayern de Múnich",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Bayern de Múnich 2026/27.",
    imagenes: ["assets/1_bayern.webp", "assets/1_bayern_detras.webp"]
  },
  "bayern-2": {
    grupo: "BUNDESLIGA",
    nombre: "Bayern de Múnich",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Bayern de Múnich 2026/27.",
    imagenes: ["assets/2_bayern.webp", "assets/2_bayern_detras.webp"]
  },
  "bayern-3": {
    grupo: "BUNDESLIGA",
    nombre: "Bayern de Múnich",
    equipacion: "3ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Bayern de Múnich 2026/27.",
    imagenes: ["assets/3_bayern.webp", "assets/3_bayern_detras.webp"]
  },
  "dortmund-1": {
    grupo: "BUNDESLIGA",
    nombre: "Borussia Dortmund",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Borussia Dortmund 2026/27.",
    imagenes: ["assets/1_dortmund.webp", "assets/1_dortmund_detras.webp"]
  },
  "dortmund-2": {
    grupo: "BUNDESLIGA",
    nombre: "Borussia Dortmund",
    equipacion: "2ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Borussia Dortmund 2026/27.",
    imagenes: ["assets/2_dortmund.webp", "assets/2_dortmund_detras.webp"]
  },
  "leverkusen-1": {
    grupo: "BUNDESLIGA",
    nombre: "Bayer Leverkusen",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Bayer Leverkusen 2026/27.",
    imagenes: ["assets/1_leverkusen.webp", "assets/1_leverkusen_detras.webp"]
  },
  "leipzig-1": {
    grupo: "BUNDESLIGA",
    nombre: "RB Leipzig",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del RB Leipzig 2026/27.",
    imagenes: ["assets/1_leipzig.webp", "assets/1_leipzig_detras.webp"]
  },
  "frankfurt-1": {
    grupo: "BUNDESLIGA",
    nombre: "Eintracht Frankfurt",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Eintracht Frankfurt 2026/27.",
    imagenes: ["assets/1_frankfurt.webp", "assets/1_frankfurt_detras.webp"]
  },
  "union-berlin-1": {
    grupo: "BUNDESLIGA",
    nombre: "Union Berlín",
    equipacion: "1ª Equipación",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Union Berlín 2026/27.",
    imagenes: ["assets/1_union_berlin.webp", "assets/1_union_berlin_detras.webp"]
  },
  // ---------- RESTO DEL MUNDO 2026/27 ----------
  "benfica-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "SL Benfica",
    equipacion: "1ª Equipación",
    confederacion: "Portugal",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del SL Benfica 2026/27.",
    imagenes: ["assets/1_benfica.webp", "assets/1_benfica_detras.webp"]
  },
  "benfica-2": {
    grupo: "RESTO DEL MUNDO",
    nombre: "SL Benfica",
    equipacion: "2ª Equipación",
    confederacion: "Portugal",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del SL Benfica 2026/27.",
    imagenes: ["assets/2_benfica.webp", "assets/2_benfica_detras.webp"]
  },
  "porto-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "FC Porto",
    equipacion: "1ª Equipación",
    confederacion: "Portugal",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del FC Porto 2026/27.",
    imagenes: ["assets/1_porto.webp", "assets/1_porto_detras.webp"]
  },
  "porto-2": {
    grupo: "RESTO DEL MUNDO",
    nombre: "FC Porto",
    equipacion: "2ª Equipación",
    confederacion: "Portugal",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del FC Porto 2026/27.",
    imagenes: ["assets/2_porto.webp", "assets/2_porto_detras.webp"]
  },
  "ajax-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Ajax",
    equipacion: "1ª Equipación",
    confederacion: "Países Bajos",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Ajax 2026/27.",
    imagenes: ["assets/1_ajax.webp", "assets/1_ajax_detras.webp"]
  },
  "ajax-2": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Ajax",
    equipacion: "2ª Equipación",
    confederacion: "Países Bajos",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Ajax 2026/27.",
    imagenes: ["assets/2_ajax.webp", "assets/2_ajax_detras.webp"]
  },
  "ajax-3": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Ajax",
    equipacion: "3ª Equipación",
    confederacion: "Países Bajos",
    descripcion: "Edición de Jugador (Player Version). Tercera equipación oficial del Ajax 2026/27.",
    imagenes: ["assets/3_ajax.webp", "assets/3_ajax_detras.webp"]
  },
  "psv-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "PSV Eindhoven",
    equipacion: "1ª Equipación",
    confederacion: "Países Bajos",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del PSV Eindhoven 2026/27.",
    imagenes: ["assets/1_psv.webp", "assets/1_psv_detras.webp"]
  },
  "feyenoord-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Feyenoord",
    equipacion: "1ª Equipación",
    confederacion: "Países Bajos",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Feyenoord 2026/27.",
    imagenes: ["assets/1_feyenoord.webp", "assets/1_feyenoord_detras.webp"]
  },
  "boca-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Boca Juniors",
    equipacion: "1ª Equipación",
    confederacion: "Argentina",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Boca Juniors 2026/27.",
    imagenes: ["assets/1_boca.webp", "assets/1_boca_detras.webp"]
  },
  "boca-2": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Boca Juniors",
    equipacion: "2ª Equipación",
    confederacion: "Argentina",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Boca Juniors 2026/27.",
    imagenes: ["assets/2_boca.webp", "assets/2_boca_detras.webp"]
  },
  "corinthians-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Corinthians",
    equipacion: "1ª Equipación",
    confederacion: "Brasil",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Corinthians 2026/27.",
    imagenes: ["assets/1_corinthians.webp", "assets/1_corinthians_detras.webp"]
  },
  "america-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Club América",
    equipacion: "1ª Equipación",
    confederacion: "México",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Club América 2026/27.",
    imagenes: ["assets/1_america.webp", "assets/1_america_detras.webp"]
  },
  "inter-miami-2": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Inter Miami",
    equipacion: "2ª Equipación",
    confederacion: "EE. UU.",
    descripcion: "Edición de Jugador (Player Version). Segunda equipación oficial del Inter Miami 2026/27.",
    imagenes: ["assets/2_inter_miami.webp", "assets/2_inter_miami_detras.webp"]
  },
  "al-nassr-1": {
    grupo: "RESTO DEL MUNDO",
    nombre: "Al Nassr",
    equipacion: "1ª Equipación",
    confederacion: "Arabia Saudí",
    descripcion: "Edición de Jugador (Player Version). Primera equipación oficial del Al Nassr 2026/27.",
    imagenes: ["assets/1_al_nassr.webp", "assets/1_al_nassr_detras.webp"]
  },
  // ---------- RETRO (camisetas clásicas) ----------
  // tipo: "club" o "seleccion". temporada: la que se muestra en la tarjeta.
  "retro-real-madrid": {
    grupo: "RETRO",
    nombre: "Real Madrid",
    equipacion: "1ª Equipación",
    temporada: "1999/00",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Real Madrid de la temporada 1999/00.",
    imagenes: ["assets/r_real_madrid.webp", "assets/r_real_madrid_detras.webp"]
  },
  "retro-barca": {
    grupo: "RETRO",
    nombre: "FC Barcelona",
    equipacion: "1ª Equipación",
    temporada: "1992/95",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del FC Barcelona de la temporada 1992/95.",
    imagenes: ["assets/r_barca.webp", "assets/r_barca_detras.webp"]
  },
  "retro-atletico-madrid": {
    grupo: "RETRO",
    nombre: "Atlético de Madrid",
    equipacion: "1ª Equipación",
    temporada: "1996/97",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Atlético de Madrid de la temporada 1996/97.",
    imagenes: ["assets/r_atletico_madrid.webp", "assets/r_atletico_madrid_detras.webp"]
  },
  "retro-betis": {
    grupo: "RETRO",
    nombre: "Real Betis",
    equipacion: "1ª Equipación",
    temporada: "1998/99",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Real Betis de la temporada 1998/99.",
    imagenes: ["assets/r_betis.webp", "assets/r_betis_detras.webp"]
  },
  "retro-sevilla": {
    grupo: "RETRO",
    nombre: "Sevilla FC",
    equipacion: "1ª Equipación",
    temporada: "2007/08",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Sevilla FC de la temporada 2007/08.",
    imagenes: ["assets/r_sevilla.webp"]
  },
  "retro-manchester-united": {
    grupo: "RETRO",
    nombre: "Manchester United",
    equipacion: "1ª Equipación",
    temporada: "1998/99",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Manchester United de la temporada 1998/99.",
    imagenes: ["assets/r_manchester_united.webp", "assets/r_manchester_united_detras.webp"]
  },
  "retro-liverpool": {
    grupo: "RETRO",
    nombre: "Liverpool FC",
    equipacion: "1ª Equipación",
    temporada: "1993/95",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Liverpool FC de la temporada 1993/95.",
    imagenes: ["assets/r_liverpool.webp"]
  },
  "retro-arsenal": {
    grupo: "RETRO",
    nombre: "Arsenal",
    equipacion: "1ª Equipación",
    temporada: "1992/94",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Arsenal de la temporada 1992/94.",
    imagenes: ["assets/r_arsenal.webp", "assets/r_arsenal_detras.webp"]
  },
  "retro-chelsea": {
    grupo: "RETRO",
    nombre: "Chelsea FC",
    equipacion: "1ª Equipación",
    temporada: "2006/08",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Chelsea FC de la temporada 2006/08.",
    imagenes: ["assets/r_chelsea.webp", "assets/r_chelsea_detras.webp"]
  },
  "retro-milan": {
    grupo: "RETRO",
    nombre: "AC Milan",
    equipacion: "1ª Equipación",
    temporada: "2005/06",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del AC Milan de la temporada 2005/06.",
    imagenes: ["assets/r_milan.webp", "assets/r_milan_detras.webp"]
  },
  "retro-juventus": {
    grupo: "RETRO",
    nombre: "Juventus",
    equipacion: "1ª Equipación",
    temporada: "1994/95",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Juventus de la temporada 1994/95.",
    imagenes: ["assets/r_juventus.webp"]
  },
  "retro-inter": {
    grupo: "RETRO",
    nombre: "Inter de Milán",
    equipacion: "1ª Equipación",
    temporada: "1997/98",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Inter de Milán de la temporada 1997/98.",
    imagenes: ["assets/r_inter.webp", "assets/r_inter_detras.webp"]
  },
  "retro-bayern": {
    grupo: "RETRO",
    nombre: "Bayern de Múnich",
    equipacion: "1ª Equipación",
    temporada: "1991/93",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Bayern de Múnich de la temporada 1991/93.",
    imagenes: ["assets/r_bayern.webp", "assets/r_bayern_detras.webp"]
  },
  "retro-ajax": {
    grupo: "RETRO",
    nombre: "Ajax",
    equipacion: "1ª Equipación",
    temporada: "1995/96",
    tipo: "club",
    descripcion: "Camiseta retro de la primera equipación del Ajax de la temporada 1995/96.",
    imagenes: ["assets/r_ajax.webp", "assets/r_ajax_detras.webp"]
  },
  "retro-brasil": {
    grupo: "RETRO",
    nombre: "Brasil",
    equipacion: "1ª Equipación",
    temporada: "1994",
    tipo: "seleccion",
    descripcion: "Camiseta retro de la primera equipación de Brasil de la temporada 1994.",
    imagenes: ["assets/r_brasil.webp", "assets/r_brasil_detras.webp"]
  },
  "retro-argentina": {
    grupo: "RETRO",
    nombre: "Argentina",
    equipacion: "1ª Equipación",
    temporada: "1996/98",
    tipo: "seleccion",
    descripcion: "Camiseta retro de la primera equipación de Argentina de la temporada 1996/98.",
    imagenes: ["assets/r_argentina.webp"]
  },
  "retro-alemania": {
    grupo: "RETRO",
    nombre: "Alemania",
    equipacion: "2ª Equipación",
    temporada: "1990",
    tipo: "seleccion",
    descripcion: "Camiseta retro de la segunda equipación de Alemania de la temporada 1990.",
    imagenes: ["assets/r_alemania.webp", "assets/r_alemania_detras.webp"]
  },
  "retro-italia": {
    grupo: "RETRO",
    nombre: "Italia",
    equipacion: "1ª Equipación",
    temporada: "1986/91",
    tipo: "seleccion",
    descripcion: "Camiseta retro de la primera equipación de Italia de la temporada 1986/91.",
    imagenes: ["assets/r_italia.webp", "assets/r_italia_detras.webp"]
  },
  "retro-espana": {
    grupo: "RETRO",
    nombre: "España",
    equipacion: "1ª Equipación",
    temporada: "1996/98",
    tipo: "seleccion",
    descripcion: "Camiseta retro de la primera equipación de España de la temporada 1996/98.",
    imagenes: ["assets/r_espana.webp", "assets/r_espana_detras.webp"]
  },
  "retro-inglaterra": {
    grupo: "RETRO",
    nombre: "Inglaterra",
    equipacion: "1ª Equipación",
    temporada: "1990/92",
    tipo: "seleccion",
    descripcion: "Camiseta retro de la primera equipación de Inglaterra de la temporada 1990/92.",
    imagenes: ["assets/r_inglaterra.webp"]
  },
  "retro-mexico": {
    grupo: "RETRO",
    nombre: "México",
    equipacion: "1ª Equipación",
    temporada: "1986",
    tipo: "seleccion",
    descripcion: "Camiseta retro de la primera equipación de México del Mundial 1986.",
    imagenes: ["assets/r_mexico.webp", "assets/r_mexico_detras.webp"]
  }
};
