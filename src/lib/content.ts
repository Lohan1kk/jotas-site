export const site = {
  name: "Jota's Bar e Restaurante",
  shortName: "JOTA'S",
  tagline: "Tamanho dos seus sonhos",
  phoneDisplay: "(11) 91636-4751",
  phoneTel: "+5511916364751",
  whatsapp: "https://wa.me/5511916364751",
  whatsappDelivery:
    "https://wa.me/5511916364751?text=" +
    encodeURIComponent("Olá! Quero fazer um pedido de delivery no Jota's."),
  whatsappReserve:
    "https://wa.me/5511916364751?text=" +
    encodeURIComponent("Olá! Gostaria de reservar uma mesa no Jota's."),
  instagram: "https://www.instagram.com/Jjotasbar1/",
  instagramHandle: "@Jjotasbar1",
  address: "Av. da Liberdade, 9 - Liberdade, São Paulo - SP, 01503-001",
  addressShort: "Av. da Liberdade, 9 — Liberdade, SP",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+da+Liberdade,+9,+Liberdade,+S%C3%A3o+Paulo,+SP,+01503-001",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+da+Liberdade,+9,+Liberdade,+S%C3%A3o+Paulo,+SP,+01503-001&output=embed",
  priceRange: "R$ 40–60",
  reviewsCount: "4.786",
  /** Closing confirmed by owner: every day until 23:00. Open time not specified. */
  hours: {
    label: "Todos os dias até às 23h",
    closes: "23:00",
  },
  payments: [
    "Mastercard",
    "Visa",
    "Diners",
    "Elo",
    "Amex",
    "Sodexo",
    "VR",
    "Ticket",
    "Alelo",
  ],
  welcomeStrip: [
    "Bem-vindo à Liberdade",
    "Pratos do dia",
    "Lanches artesanais",
    "Beirutes",
    "Porções para a mesa",
    "Delivery pelo WhatsApp",
  ],
} as const;

export const pratosDoDia = [
  {
    day: "Segunda",
    items: ["Virado à Paulista", "Virado à Mineira", "Maminha Assada"],
  },
  {
    day: "Terça",
    items: [
      "Bife à Rolê c/ purê",
      "Strogonof de Frango",
      "Filé de Frango à Milanesa c/ creme de milho",
      "Cupim Assado",
    ],
  },
  {
    day: "Quarta",
    items: ["Feijoada Mini", "Feijoada Média Completa", "Feijoada Grande"],
  },
  {
    day: "Quinta",
    items: [
      "Nhoque c/ Frango",
      "Lasanha",
      "Macarrão c/ Frango",
      "Baião de Dois c/ Costela Assada",
    ],
  },
  {
    day: "Sexta",
    items: ["Filé de Peixe c/ purê", "Rabada c/ purê"],
  },
  {
    day: "Sábado",
    items: ["Feijoada Mini", "Feijoada Média Completa", "Feijoada Grande"],
  },
  {
    day: "Domingo",
    items: [
      "Picanha c/ Baião (2)",
      "Tilápia c/ Baião (2)",
      "Macarrão c/ Frango",
      "Bife Ancho c/ Baião",
      "Chorizo c/ Baião",
    ],
  },
] as const;

export const lanches = [
  {
    name: "Burguer João Mendes",
    detail: "160g, queijo prato",
  },
  {
    name: "Bacon Liberdade",
    detail: "160g, bacon, cheddar, cebola caramelizada",
  },
  {
    name: "Glória",
    detail: "Dois 160g, cheddar, alface, tomate, cebola frita",
  },
  {
    name: "Jotas",
    detail: "Dois 160g, cheddar, bacon, ovo, alface, tomate",
  },
  {
    name: "Sé",
    detail: "160g, ovo, presunto, cheddar, alface, tomate",
  },
  {
    name: "Salada Completo",
    detail: "160g, alface, tomate, picles, cebola caramelizada, cheddar",
  },
] as const;

export const beirutes = [
  { name: "Picanha", detail: "Pão sírio, alface, tomate, queijo, bacon e ovo" },
  {
    name: "Filé Mignon",
    detail: "Pão sírio, alface, tomate, queijo, bacon e ovo",
  },
  {
    name: "Liberdade",
    detail: "Carne bovina · pão sírio, alface, tomate, queijo, bacon e ovo",
  },
  {
    name: "Filé de Frango",
    detail: "Pão sírio, alface, tomate, queijo, bacon e ovo",
  },
  {
    name: "Jotas Tudo",
    detail:
      "Dois burgers, dois ovos, queijo, presunto, bacon, calabresa defumada, alface, tomate e fritas",
  },
  {
    name: "Calabresa",
    detail: "Pão sírio, alface, tomate, queijo, bacon e ovo",
  },
  {
    name: "Peito de Peru",
    detail: "Pão sírio, alface, tomate, queijo, bacon e ovo",
  },
  {
    name: "Americano",
    detail: "Pão sírio, alface, tomate, queijo, bacon e ovo",
  },
] as const;

export const porcoes = [
  "Filé Mignon",
  "Mandioca",
  "Azeitona",
  "Ovos de Codorna",
  "Isca de Peixe",
  "Fritas",
  "Salame",
  "Calabresa",
  "Provolone à Milanesa",
  "Picanha",
  "Frango à Passarinho",
  "Contra Filé",
  "Porção Frios",
  "Batata Mix",
] as const;

export const comerciais = [
  "Costela",
  "Picadinho",
  "Frango Assado",
  "Frango ao Molho",
  "Bife Acebolado",
  "Calabresa Defumada",
  "Linguiça",
] as const;

/** Preços de sucos/bebidas extraídos do cardápio físico (referência interna). */
export const sucos = {
  bases: [
    { name: "C/ água", price: "R$ 13" },
    { name: "C/ leite", price: "R$ 14" },
    { name: "Laranja", price: "R$ 13" },
    { name: "Vitamina mista", price: "R$ 15" },
    { name: "Limonada suíça", price: "R$ 14" },
    { name: "Açaí c/ água", price: "R$ 15" },
    { name: "Açaí c/ leite", price: "R$ 16" },
    { name: "Açaí c/ laranja", price: "R$ 16" },
  ],
  flavors:
    "Laranja, abacaxi, manga, melancia, morango, graviola, limão, mamão, cupuaçu, caju, amora, maracujá, acerola, abacaxi c/ hortelã, cajá",
} as const;

/** Bebidas diversas — preços do cardápio físico */
export const bebidas = [
  { name: "Schweppes", price: "R$ 9" },
  { name: "Toddynho", price: "R$ 6" },
  { name: "Água garrafa 500 ml", price: "R$ 5" },
  { name: "Água c/ gás garrafa", price: "R$ 6" },
  { name: "Água 1,5 L", price: "R$ 10" },
  { name: "Del Valle lata", price: "R$ 9" },
  { name: "Água de coco natural", price: "R$ 10" },
  { name: "Suco lata", price: "R$ 9" },
  { name: "Gatorade", price: "R$ 11" },
  { name: "Suco caixa 200 ml", price: "R$ 5" },
  { name: "Água tônica", price: "R$ 9" },
  { name: "H2OH!", price: "R$ 9" },
] as const;
