  // ---- Flip to true if you want to overwrite even when data exists
  const FORCE = false;

  // ---- Your seed data
  const turismo = [
    {
      id: 2,
      nombre: "La Turbina",
      categoria: "Naturaleza y Senderismo",
      descripcion:
        "El Parque Recreativo La Turbina, ubicado en el Km 4 de la Carretera a Villaldama en Sabinas Hidalgo, es un espacio que combina historia, naturaleza y diversión. Fundado en torno a un edificio de turbinas eléctricas de 1932, hoy resalta por su pintoresca cascada artificial y el sonido relajante del agua. Aquí encontrarás palapas, restaurantes, asadores, áreas de camping, baños, vestidores y diversas actividades como canopy tour, pesca deportiva, juegos infantiles y acuáticos. Abierto todos los días de 07:00 a 20:00 hrs (sujeto a afluencia), el acceso cuesta aproximadamente $50 por persona, mientras que adultos mayores con credencial INAPAM y menores de 8 años pueden acceder por $20 o de forma gratuita.",
      direccion: "Carr a Villaldama",
      horario: "Lunes a Viernes de 8am a 10pm",
      precio: "Locales $20mxn, Foraneos $30mxn",
      googleMaps: "https://maps.app.goo.gl/UGZakQGgXPxs4NN68",
      recomendaciones:
        "Para garantizar una visita segura y agradable en el Parque Recreativo La Turbina, se recomienda a los visitantes no introducir envases de vidrio, realizar fogatas o asados únicamente en las áreas designadas, depositar la basura en los contenedores correspondientes, utilizar calzado cómodo para recorrer senderos y respetar tanto las instalaciones como la flora y fauna del lugar. De esta manera, todos podemos disfrutar de un espacio limpio, ordenado y en armonía con la naturaleza.",
      icono: "fas fa-tree",
      imagenPrincipal: 0,
      fotoIds: [],
      showInHome: true,
      useAsHero: false,
      fotoUrls: [
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/518403015_1120690886834049_1595098545931312344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHL_zBLKsJ5jhM4EdT10lfGmc9pQ5PYv3GZz2lDk9i_cVWgN8GYRa_VgQeAcMMzbSZyAST66i4o7BTqdlRaAU5D&_nc_ohc=-uv_JlmHr0kQ7kNvwHRVNdr&_nc_oc=Admvd1gjFhCFl7f51YLcNMCbAXoi3K4cS-jCTX0uJ8vfXzyzpV2MQUPsLN7E0bxIxRjN1pSuvfaUAmkRF2eO_ZEJ&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=4mi6xe68WVGCkt89fMxOAg&oh=00_AfYsPOnlh1XaE_o0YppqK4RaeRC7CMh9Gg6H1ciVr2-BAA&oe=68C68314",
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/530661664_1120690920167379_6339475029868551293_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMUt57JUPXEthQlnoyA5Q9pf9c_nMMEbKl_1z-cwwRsjYGIoTiYmfAii7WkJfbUJWBWyYq81NAMnWmXtZAsdZ2&_nc_ohc=oadpcPrVPbYQ7kNvwEJF7fp&_nc_oc=AdlulgmbK7tqQyQBjIOvAxLxTMQ4fkAiH4N7Q-3O0DxGqncdc1T0L-cFCb6RMCLBUL8FVLbZ2nRj2VW_e0MTVwvs&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=8GxsCpc4tdYjdtjSPQKRVA&oh=00_AfbU7z9UYwr_qvv_4kQjeO58IOhSi1nfi0NzBEQ8IC5r8A&oe=68C69F95",
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/518403015_1120690886834049_1595098545931312344_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHL_zBLKsJ5jhM4EdT10lfGmc9pQ5PYv3GZz2lDk9i_cVWgN8GYRa_VgQeAcMMzbSZyAST66i4o7BTqdlRaAU5D&_nc_ohc=-uv_JlmHr0kQ7kNvwHRVNdr&_nc_oc=Admvd1gjFhCFl7f51YLcNMCbAXoi3K4cS-jCTX0uJ8vfXzyzpV2MQUPsLN7E0bxIxRjN1pSuvfaUAmkRF2eO_ZEJ&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=4mi6xe68WVGCkt89fMxOAg&oh=00_AfYsPOnlh1XaE_o0YppqK4RaeRC7CMh9Gg6H1ciVr2-BAA&oe=68C68314"
      ],
    },
    {
      id: 3,
      nombre: "Parque Recreativo Ojo de Agua",
      categoria: "Naturaleza y Senderismo",
      descripcion:
        "El Ojo de Agua es el corazón natural y recreativo de Sabinas Hidalgo. Rodeado de frondosos nogales y extensas áreas verdes, este parque es un espacio emblemático donde brota un manantial de agua cristalina que alimenta sus albercas y arroyos.\n\nEs el lugar favorito de familias y visitantes para convivir, disfrutar de un día de campo, nadar en sus frescas aguas, recorrer senderos o simplemente descansar bajo la sombra de los árboles. El parque cuenta con áreas de picnic, juegos infantiles, palapas y espacios deportivos, lo que lo convierte en un sitio perfecto tanto para el descanso como para la recreación.\n\nAdemás, su valor histórico y cultural lo ha convertido en un símbolo de identidad para los sabinenses, siendo sede de eventos comunitarios y punto de encuentro para turistas que buscan naturaleza y tranquilidad en el norte de Nuevo León.",
      direccion: "Carr a Villaldama Km 4",
      horario: "Lunes a Domingo de 8am a 10pm",
      precio: "Locales: $20, Foraneos: $30",
      googleMaps: "https://maps.app.goo.gl/yqEdZTotdimDHVtS7",
      recomendaciones:
        "No introducir envases de vidrio en las áreas recreativas, no realizar fogatas fuera de las zonas designadas, depositar la basura en los contenedores correspondientes, cuidar las áreas verdes y la fauna local, y hacer un uso responsable de las albercas y espacios comunes. Recordemos que este parque es un patrimonio natural de Sabinas Hidalgo y depende de todos mantenerlo limpio, seguro y en armonía.",
      icono: "fas fa-hiking",
      showInHome: true,
      useAsHero: true,
      fotoIds: [],
      imagenPrincipal: 0,
      fotoUrls: [
        "https://blob.posta.com.mx/images/2025/04/23/diseno-sin-titulo-2-15f67eb4-focus-0-0-1200-600.webp",
        "https://imggraficos.gruporeforma.com/2021/03/Parque-de-Ojo-de-Agua-de-Sabinas-Hidalgo.jpg",
        "https://images.mnstatic.com/0b/4a/0b4a3ddb9310043bbbdc16b95ba3ffa3.jpg",
        "https://www.turismonuevoleon.com/wp-content/uploads/2021/04/Galeri%CC%81a-4-3.jpg"
      ],
    },
  ];

  const noticias = [
    {
      id: 1,
      title: "Inauguración de obra en la Colonia Centro",
      category: "Obras Públicas",
      date: "2025-09-09",
      author: "Comunicación Social",
      summary:
        "Se entregó la remodelación de la plaza con áreas verdes y juegos infantiles.",
      body: "Hoy se inauguró la obra en la Colonia Centro.\n\n- Nueva iluminación\n- Jardineras y bancas\n\n**Invitamos** a las familias a disfrutar del espacio.",
      links: [{ title: "Nota en prensa local", url: "https://example.com/nota-prensa" }],
      imageIds: [],
      coverIndex: 0,
      showInHome: true,
      archived: false,
      imageUrls: [
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t51.82787-15/542768493_18293228686264631_8828376503230313082_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5sL9E-gf4gOaS1W8pRiOoyIag-AqoNRzIhqD4Cqg1HHVBAr70JY02AVdIncBKk1I63vtDqCMkk3ZEladT_um6&_nc_ohc=fUbFjb0pgUoQ7kNvwFb3SBY&_nc_oc=AdmKBXYSMU8EJBjFU0t2Sq1N8rqsibBBxdF7fOGYqokS-P3HAEi020JmA91gvu1qVH-PgU1jALMPcLuTiLjgz0EQ&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=ak2avFcnlu_ww3gEs_BIjw&oh=00_Afa_SXgl2W8Mi1S207y7KV_kAZLm71GqHdCvSQclVacIdA&oe=68C6A3F0"
      ],
      coverIsUrl: true,
    },
    {
      id: 2,
      title: "Firma de Convenio para la vida silvestre",
      category: "Comunicados",
      date: "2025-09-10",
      author: "Comunicación Social",
      summary: "Sabinas siempre firme con el cuidado de la vida silvestre.",
      body:
        "El día de hoy junto a Parques y Vida Silvestre de N.L., firmamos un Convenio de Colaboración con varios municipios para la transferencia de lobina negra (Micropterus salmoides) desde la Presa “El Cuchillo-Solidaridad” hacia presas receptoras en distintas regiones del estado.\nLas presas receptoras son:\n • José López Portillo “Cerro Prieto”, Linares.\n • General Mariano Escobedo “Sombreretillo”, Sabinas Hidalgo.\n • Rodrigo Gómez “La Boca”, Santiago.\n • José S. Noriega “Los Mimbres”, General Terán.\nCon este convenio, trabajamos para repoblar y conservar esta especie, promoviendo la biodiversidad, la pesca responsable y espacios de recreación que beneficien a las familias de Nuevo León.",
      showInHome: true,
      archived: false,
      links: [],
      imageIds: [],
      coverIndex: 0,
      imageUrls: [
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t51.82787-15/542309182_18293107060264631_7707407202290637380_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHhnYhEjfY9SBD-a25Xw8W31n49Gil4Ej3Wfj0aKXgSPWK7xqVeg4hAVqWPtqMFnp_2wWLeDTONbdAhEjSBJ4Lk&_nc_ohc=lVi5KOcJ2VwQ7kNvwGs6pER&_nc_oc=AdlkzCNOUgRbYlNQPu7H7Z2L9sDYHK4-6BnTuTyeJlq8FHIoyggvjfH-RM00gJSOWLtwbjvC-ITLrc1IAUb4iSjk&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=aRj-jQSmdEGSJ4Yu_RisgA&oh=00_AfZG6OwGlTtepsFYIY-aa7ro8hZ-0dBYMepqABzdxbZgfg&oe=68C68C36"
      ],
      coverIsUrl: true,
    },
    {
      id: 3,
      title: "Pavimentación de la Ampliación de Vialidad en el Parque La Turbina",
      category: "Obras Públicas",
      date: "2025-09-09",
      author: "Comunicación Social",
      summary:
        "El Gobierno Municipal informa que este día se realizó la pavimentación de la Ampliación de Vialidad en el Parque La Turbina.",
      body:
        "El Gobierno Municipal informa que este día se realizó la pavimentación de la Ampliación de Vialidad en el Parque La Turbina, obra que forma parte de la primera etapa de mejoramientos anunciados hace algunas semanas.\nEste proyecto incluye además la construcción de un nuevo estacionamiento y una vialidad que permitirá un tránsito más ágil y seguro, beneficiando a todas y todos los visitantes de este importante espacio público.",
      showInHome: true,
      archived: false,
      links: [],
      imageIds: [],
      coverIndex: 0,
      imageUrls: [
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/544417000_1094678186173737_6109100192931889123_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGQ2Cc3XyEkwTvu-7tkTUF_PqTyAqUqERw-pPICpSoRHB3Px_vvHmIAFF4J9uHEUwHdRUKRsaA_60-k0lMq8XeL&_nc_ohc=UxuL2vQ9_qMQ7kNvwFqzXj1&_nc_oc=Adnq9vn7xbgz0srTw6hGS735ZxmOOibeL2k8O34qRF8UUOoobFv5ab-cqVjPHI0tesMDmCwBpWiAsLhPYc2WVSvB&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=Or4Wk6ZN_qCf5Uce0cGhBA&oh=00_AfZP6SctqWFZZQSrdBaXYb3wqyiPjPt1IR_Aii8LtHEzIQ&oe=68C673E0",
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/543422568_1094678496173706_6354471204268581763_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE2OzMRBsKvHR_WWfuWluo3qVJpQvDMzQqpUmlC8MzNCj8xCMt4NUF9r_VWRKHfSG2dbL8RLJ5MXQt40izA2nPX&_nc_ohc=ipHSqLGVG48Q7kNvwHlcY1u&_nc_oc=AdlCgK2ueJdJriEmIV2WUr9zCGQmE8fPacUb6sqlKXliDy7Hf-Gx-kuyeyqsyjPwExy0mysCbe_AP56o6ZEjX1c5&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=Or4Wk6ZN_qCf5Uce0cGhBA&oh=00_AfYTsiBL-AHR76hnEGl-LWa5a8uIXviYntIa3sDzlZVzqg&oe=68C685EE",
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/542742180_1094678476173708_2818499899245729483_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEjz21vWu0u35s8sEpDzRxnKfIk3tS4DL8p8iTe1LgMvwVi7p_G4TFz4uJYrIV-8YMQ2EXZj9jCd9aE_1wrWUq7&_nc_ohc=PpolpEkIl78Q7kNvwGxWrIU&_nc_oc=Adm78crDqfMPuj6sJD7ljd017B6DHWKDbNgBnujkwQGzQdxA6MHNW1HmRLT2VLruMcT7_tH-ILpGx9urnFfpzJ0J&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=Or4Wk6ZN_qCf5Uce0cGhBA&oh=00_AfaKmlf9EL5PKx0RqIOYB4S30NJvmJAYRGkIPYMGs8JGww&oe=68C69B66"
      ],
      coverIsUrl: true,
    },
  ];

  const eventos = [
    {
      id: 1,
      titulo: "Motorock",
      descripcion: "Motorock Sabinas Hidalgo",
      fechaInicio: "2025-09-09",
      fechaFin: "",
      hora: "18:00",
      lugar: "Ojo de Agua",
      colonia: "",
      organizador: "Municipio",
      contacto: "",
      precio: "350",
      categoria: "Cultural",
      destacado: true,
      googleMaps: "",
      recomendaciones: "",
      fotoIds: [],
      fotoUrls: [
        "https://scontent.fntr8-1.fna.fbcdn.net/v/t39.30808-6/487769149_580011498388796_7825819156858778655_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGT_aD1GeifpyQpGqLC_ZBWSqfsCocKAs1Kp-wKhwoCzW7lM-sC6ZrSoUEvsmzN9s_btzcuHQ_PgIEsh4j0TX0j&_nc_ohc=K-9Gr8Vl1i8Q7kNvwFZI1xj&_nc_oc=Adlm_yNlFquxpmUfi7Say8q5jyMTeVJUJb7ZpdhW3FgSThNilDMTl5qJZ_Zid29_WzUg1LDs0n-OYAFnmqQqSdvx&_nc_zt=23&_nc_ht=scontent.fntr8-1.fna&_nc_gid=e3J8pfg0GqIUDJetyxc0HA&oh=00_AfbPU29wemjRY5fDkWLdOcixup4A7TWKx7cOnOvHa3k64g&oe=68C68E70"
      ],
      estado: "Pendiente"
    }
  ];

  // ---- Seed util
  function seedIfEmpty(key, value) {
    try {
      const cur = localStorage.getItem(key);
      if (!cur || FORCE) {
        localStorage.setItem(key, JSON.stringify(value));
        // Note: storage event doesn't fire in same tab; Home scripts should run after this block.
      }
    } catch (e) {
      console.warn("Seed failed for", key, e);
    }
  }

  // ---- Do it
  seedIfEmpty("lugaresTuristicos", turismo);
  seedIfEmpty("noticias.v1", noticias);
  seedIfEmpty("eventos", eventos);