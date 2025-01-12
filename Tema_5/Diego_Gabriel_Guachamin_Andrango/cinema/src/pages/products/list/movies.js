const movies = [
  {
    id: 1,
    title: "El asesino del juego de citas",
    director: "Tonia Davis",
    image: "https://tse2.mm.bing.net/th?id=OIP.Sw7L8BUDl7s98WCrre8seQAAAA&pid=Api",
    price: 8.99,
    discount: 10,
    category: "Cine",
    subcategory: "Thriller",
    description:
      "Basada en hechos reales, esta película sigue a Cheryl Bradshaw, una soltera que en los años 70 participa en 'The Dating Game' y elige a Rodney Alcalá, un concursante carismático que en realidad es un asesino en serie.",
    rating: 7.2,
    duration: 120,
  },
  {
    id: 2,
    title: "Joker: Folie à Deux",
    director: "Todd Phillips",
    image: "https://tse2.mm.bing.net/th?id=OIP.avVqARSelM_drxOJWctJ3AHaLH&pid=Api",
    price: 12.99,
    discount: 15,
    category: "Cine",
    subcategory: "Drama/Psicológico",
    description:
      "Arthur Fleck, interno en Arkham, lucha con sus dos mitades mientras navega por el caos de su mente. La inesperada música y el amor serán claves en su historia.",
    rating: 8.5,
    duration: 132,
  },
  {
    id: 3,
    title: "El candidato honesto",
    director: "Roberto Santucci",
    image: "https://tse4.mm.bing.net/th?id=OIP.KV0Z3op8dbWPjwns8h39iwHaK-&pid=Api",
    price: 7.99,
    discount: 5,
    category: "Cine",
    subcategory: "Comedia",
    description:
      "Tona, un político corrupto, enfrenta un hechizo que le impide actuar deshonestamente. A partir de ahí, su vida cambia radicalmente.",
    rating: 6.8,
    duration: 110,
  },
  {
    id: 4,
    title: "My Hero Academia",
    director: "Kenji Nagasaki",
    image: "https://tse4.mm.bing.net/th?id=OIP.xeNPv4A-Tn9B43PctzOM4wHaKl&pid=Api",
    price: 9.99,
    discount: 10,
    category: "Cine",
    subcategory: "Animación/Acción",
    description:
      "Los héroes más poderosos del mundo deben enfrentarse a un enemigo global en esta emocionante entrega de My Hero Academia.",
    rating: 7.9,
    duration: 140,
  },
  {
    id: 5,
    title: "Beetlejuice",
    director: "Tim Burton",
    image: "https://tse2.mm.bing.net/th?id=OIP.77PXYDD3jIhdnhY0lWc7EQHaJQ&pid=Api",
    price: 10.99,
    discount: 15,
    category: "Cine",
    subcategory: "Comedia/Fantasía",
    description:
      "Lydia Deetz y su hija Astrid enfrentan el regreso de Beetlejuice cuando un portal al Más Allá es abierto accidentalmente.",
    rating: 7.5,
    duration: 130,
  },
  {
    id: 6,
    title: "La sustancia",
    director: "Jean-Pierre Dardenne",
    image: "https://tse3.mm.bing.net/th?id=OIP.9pIHpNsljo0J8t0ZH7TxXgAAAA&pid=Api",
    price: 11.99,
    discount: 5,
    category: "Cine",
    subcategory: "Drama/Ciencia Ficción",
    description:
      "La sustancia promete mejorar tu vida alternando semanas con tu copia. Sin embargo, jugar con la perfección puede traer consecuencias inesperadas.",
    rating: 7.8,
    duration: 112,
  },
  {
    id: 7,
    title: "Robot salvaje",
    director: "Chris Sanders",
    image: "https://tse4.mm.bing.net/th?id=OIP.TBQyGSo_e6kE0SLwi1idQgHaEK&pid=Api",
    price: 8.49,
    discount: 0,
    category: "Cine",
    subcategory: "Familiar/Animación",
    description:
      "Roz, una robot naufragada, aprende a sobrevivir en una isla deshabitada mientras forma lazos con la fauna local y cría un ganso huérfano.",
    rating: 7.1,
    duration: 90,
  },
  {
    id: 8,
    title: "Transformers: Uno",
    director: "Steven Caple Jr.",
    image: "https://tse3.mm.bing.net/th?id=OIP.DE22ghuEqg86n8zmTCLXQQHaJQ&pid=Api",
    price: 13.99,
    discount: 20,
    category: "Cine",
    subcategory: "Acción/Animación",
    description:
      "La historia de los hermanos de armas Optimus Prime y Megatron antes de convertirse en enemigos, cambiando para siempre el destino de Cybertron.",
    rating: 7.3,
    duration: 120,
  },
  {
    id: 9,
    title: "El panóptico ciego",
    director: "Paulo Roberto",
    image: "https://tse2.mm.bing.net/th?id=OIP.r96rwnJHuPMEO_dRsg_SpgHaLH&pid=Api",
    price: 7.49,
    discount: 5,
    category: "Cine",
    subcategory: "Documental",
    description:
      "Una mirada a la vida en una prisión abandonada, revelando las historias de quienes estuvieron allí y el impacto que dejaron.",
    rating: 8.0,
    duration: 98,
  },
  {
    id: 10,
    title: "Con mi corazón en Yambo",
    director: "María Fernanda Restrepo",
    image: "https://tse1.mm.bing.net/th?id=OIP.QYgBIEgDpRzmodXL2tJwXgHaKn&pid=Api",
    price: 8.99,
    discount: 0,
    category: "Cine",
    subcategory: "Documental",
    description:
      "Un documental ecuatoriano sobre la lucha de una familia por justicia tras la desaparición de sus hijos en los años 80.",
    rating: 8.3,
    duration: 120,
  },
];

export default movies