const propiedades_ventas = [
  //Arreglo ventas
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 2,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa acogedora en la montaña",
    src: "https://www.bienesonline.com/chile/photos/amplia-casa-familiar-en-venta-santiago-CAV1160691605886792-228.jpg",
    descripcion:
      " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 5,
    banos: 2,
    costo: 7500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://http2.mlstatic.com/D_NQ_NP_795518-MLC50595982771_072022-O.webp",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://www.tophousepropiedades.cl/wp-content/uploads/2020/12/33e82ae9-cea8-417c-8b66-75989c4a0b0a-1.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: true,
    pets: false,
  },
];

const propiedades_alquileres = [
  //Arreglo alquiler
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80https://http2.mlstatic.com/D_NQ_NP_2X_874985-MLC72178218271_102023-O.webp",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    banos: 1,
    costo: 3200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "7456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 2,
    costo: 4000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "data:image/jpeg;base64,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",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 3,
    banos: 1,
    costo: 3200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://mercanef.com/wp-content/uploads/2020/01/LO9NO8T8TOHZ-userfile3-scaled.jpg",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "7456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 2,
    costo: 4000,
    smoke: true,
    pets: true,
  },
];

export { propiedades_alquileres, propiedades_ventas };
