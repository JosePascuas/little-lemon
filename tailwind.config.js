module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "letras-amarillas":"#F4CE14",
        "primario-verde":"#495E57",
        "letras-claras":"#EDEFEE",
        "fondo":"#FFFFFF",
        "rojo":"#E61C1C",
        "tarjetas-fondo":"#D9D9D9",
        "letras-oscuras":"#000000",
        "letras-botones":"#333333",
        "fondo-formulario":"#4B5E57",

      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        markazi: ["Markazi Text", "serif"]
      },
    },
  },
  plugins: [],
};
