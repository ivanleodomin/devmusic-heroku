const arrayCategory = [
  { name: "accesorios" },
  { name: "cuerda" },
  { name: "percusion" },
  { name: "amplicadores" },
  { name: "electrico" },
  { name: "microfono" },
  { name: "viento" },
];

const arrayProducts = [
  {
    name: "Guitarra Electrica",
    model: "Cort",
    description:
      "Guitarra electrica para zurdos.Guitarra de diseño clásico con doble cutaway. Cuerpo de tilo. Mástil Bolt-on de arce canadiense. Diapasón de palo rosa. 22 trastes. Escala 25.5. Pastillas Bluebucker Pro BPEG5-F & BPEG5-M & BPANC-2R . configuración H-S-S. Clavijeros Diecasting. Puente Tremolo Wilkinson VS50II. Herrajes cromados.Color Black.",
    photo:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/d_825525-mla29225876718_012019-o-b667e0581ba64d31e615992359694910-640-0.jpg",
    stock: 2,
    price: 50000,
    CategoryId: 2,
  },
  {
    name: "Guitarra Criolla",
    model: "Cort",
    description:
      "Guitarra criolla para zurdos.Guitarra de diseño clásico con doble cutaway. Cuerpo de tilo. Mástil Bolt-on de arce canadiense. Diapasón de palo rosa. 22 trastes. Escala 25.5. Pastillas Bluebucker Pro BPEG5-F & BPEG5-M & BPANC-2R . configuración H-S-S. Clavijeros Diecasting. Puente Tremolo Wilkinson VS50II. Herrajes cromados.Color Black.",
    photo:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/guitarra-electro-criolla-fonseca-40kec-41kec-funda_iz1141063776xvzxxpz1xfz74514398-617309937-1-jpgxsz74514398xim1-abb1dc4f6db4a4b4b515990563207217-640-0.jpg",
    stock: 2,
    price: 50000,
    CategoryId: 2,
  },
  {
    name: "Piano",
    model: "modelo",
    description: "Un piano muy bueno",
    photo:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/00000000000pa88h65594pa88h-11-001af5bb20a010ef1415997414161911-640-0.jpg",
    stock: 2,
    price: 50000,
    CategoryId: 2,
  },
  {
    name: "Cajon Peruano",
    model: "modelo",
    description: "Cajon Peruano Skull Percusión Garantia Cd Con Curso Ragalo",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_849874-MLA31063437964_062019-O.webp",
    stock: 2,
    price: 50000,
    CategoryId: 3,
  },
  {
    name: "Platillo de Bateria",
    model: "platinuimaas",
    description:
      "Batería portátil y profesional con sonido de tambor de alta calidad que traerá efecto de sonido natural y de gran alcance. Fácil de transportar, presentando un diseño y sonido de alta calidad. Este es un kit con pedales, par de palillos, selección de estilos musicales y metrónomo. Todo ello con la particularidad de la función GRABACIÓN (REC), que permite registrar su desempeño e inspiración donde y cuando quiera!!!",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_734100-MLA41276734235_032020-O.webp",
    stock: 2,
    price: 50000,
    CategoryId: 3,
  },
  {
    name: "Rayador cumbiero",
    model: "cumbiero",
    description: "Guiro Profesional Grande Cumbia Con Peine Madera 33 X 12,5",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_697592-MLA45549738970_042021-O.webp",
    stock: 2,
    price: 50000,
    CategoryId: 3,
  },
  {
    name: "Flauta",
    model: "modelo",
    description: "Flauta Dulce Soprano",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_823204-MLA31042400545_062019-O.webp",
    stock: 2,
    price: 50000,
    CategoryId: 7,
  },
  {
    name: "Trompeta",
    model: "modelo",
    description: "Trompeta Knight Jbtr-400 Laton C/estuche",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_980923-MLA47046951654_082021-O.webp",
    stock: 2,
    price: 50000,
    CategoryId: 7,
  },
  {
    name: "Clarinete",
    model: "Shamaha",
    description:
      "Clarinete Ocean OCL-190 Excelente sonido y afinación Ideal para iniciarseAfinación Si Bemol",

    photo:
      "https://http2.mlstatic.com/D_NQ_NP_897410-MLA42541013782_072020-O.webp",
    stock: 2,
    price: 50000,
    CategoryId: 7,
  },
];

module.exports = { arrayProducts, arrayCategory };
