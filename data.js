const menuData = [
  // ================= HAMBURGUESAS =================
  {
    id: 1,
    nombre: "GÖRKEM Tradicional",
    categoria: "burgers",
    precio: 17000, // Precio con papas: 20000
    descripcion: "Pan artesanal, vegetales frescos, carne artesanal, queso blanco, tocineta y cebolla confitada. (Opción con papas: $20.000)",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    nombre: "GÖRKEM Cheddar",
    categoria: "burgers",
    precio: 17000, // Precio con papas: 20000
    descripcion: "Pan artesanal, carne artesanal, queso americano, tocineta y pepinillos. (Opción con papas: $20.000)",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    nombre: "GÖRKEM Tropical",
    categoria: "burgers",
    precio: 20000, // Precio con papas: 24000
    descripcion: "Lechuga, carne artesanal, queso americano, piña, tocineta y aros de cebolla. (Opción con papas: $24.000)",
    imagen: "https://images.unsplash.com/photo-1572802419224-296b0acee0d9?auto=format&fit=crop&w=500&q=80"
  },

  // ================= PERROS CALIENTES =================
  {
    id: 4,
    nombre: "Perro Clásico",
    categoria: "dogs",
    precio: 12000, // Precio con papas: 15000
    descripcion: "Salchicha americana, cebolla, queso blanco, tocineta, ripio y salsas. (Opción con papas: $15.000)",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    nombre: "Perro Crunch",
    categoria: "dogs",
    precio: 14000, // Precio con papas: 17000
    descripcion: "Salchicha americana, ensalada, queso, tocineta, ripio y salsas. (Opción con papas: $17.000)",
    imagen: "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    nombre: "Perro Chimichurri",
    categoria: "dogs",
    precio: 15000, // Precio con papas: 18000
    descripcion: "Chorizo, chimichurri, queso blanco, tocineta, ripio y salsas. (Opción con papas: $18.000)",
    imagen: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=500&q=80"
  },

  // ================= PAPAS =================
  {
    id: 7,
    nombre: "Papas GÖRKEM",
    categoria: "fries",
    precio: 16000,
    descripcion: "Papa criolla, salsas, chorizo, chimichurri, carne desmechada, guacamole y jalapeños.",
    imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    nombre: "Papas Picantes",
    categoria: "fries",
    precio: 16000,
    descripcion: "Papa francesa, salsas, tocineta picante, carne desmechada, guacamole y jalapeños.",
    imagen: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    nombre: "Papas Sweet GÖRKEM",
    categoria: "fries",
    precio: 12000,
    descripcion: "Papa francesa, cheddar, tomate y tocineta dulce.",
    imagen: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    nombre: "Porción de Papas",
    categoria: "fries",
    precio: 6000,
    descripcion: "Porción tradicional de papas para acompañar.",
    imagen: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80"
  },

  // ================= BEBIDAS (SODAS Y LIMONADAS) =================
  {
    id: 11,
    nombre: "Soda Saborizada - Frutos Rojos",
    categoria: "drinks",
    precio: 12000,
    descripcion: "Soda artesanal refrescante sabor a frutos rojos.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    nombre: "Soda Saborizada - Maracuyá",
    categoria: "drinks",
    precio: 12000,
    descripcion: "Soda artesanal refrescante sabor a maracuyá.",
    imagen: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 13,
    nombre: "Soda Saborizada - Uchuva",
    categoria: "drinks",
    precio: 12000,
    descripcion: "Soda artesanal refrescante sabor a uchuva.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 14,
    nombre: "Limonada Natural",
    categoria: "drinks",
    precio: 6000,
    descripcion: "Limonada clásica natural.",
    imagen: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 15,
    nombre: "Limonada de Frutos Rojos",
    categoria: "drinks",
    precio: 8000,
    descripcion: "Limonada natural con toque de frutos rojos.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 16,
    nombre: "Limonada de Frutos Amarillos",
    categoria: "drinks",
    precio: 8000,
    descripcion: "Limonada natural con frutos amarillos.",
    imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 17,
    nombre: "Limonada Cerezada",
    categoria: "drinks",
    precio: 10000,
    descripcion: "Limonada frappé con reducción de cereza.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 18,
    nombre: "Limonada de Coco",
    categoria: "drinks",
    precio: 12000,
    descripcion: "Limonada cremosa frappé a base de coco.",
    imagen: "https://images.unsplash.com/photo-1546171753-97d7676efa01?auto=format&fit=crop&w=500&q=80"
  }
];