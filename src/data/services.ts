export interface Service {
    name: string;
    price: number;
    category: string;
    description?: string;
}

export const barberServices: Service[] = [
    { name: "Men's Haircut", price: 3000, category: "Haircut" },
    { name: "Women's Haircut", price: 4000, category: "Haircut" },
    { name: "Kids' Haircut", price: 1500, category: "Haircut" },
    { name: "Shaving", price: 1500, category: "Grooming" },
    { name: "Caving", price: 1500, category: "Grooming" },
    { name: "Dandruff Treatment", price: 3000, category: "Treatment" },
    { name: "Hair Treatment", price: 2500, category: "Treatment" },
    { name: "Hair Dying", price: 3000, category: "Color" },
    { name: "Color Dye", price: 12000, category: "Color" },
    { name: "Washing of Hair", price: 1000, category: "Treatment" },
    { name: "Spotiwave", price: 6000, category: "Grooming" },
    { name: "Texturizer", price: 3000, category: "Grooming" },
    { name: "Pedicure", price: 10000, category: "Nails" },
    { name: "Manicure", price: 2000, category: "Nails" },
    { name: "Organic Pedicure", price: 13000, category: "Nails" },
    { name: "Facial Scrub", price: 8000, category: "Facial" },
    { name: "Brightening Facial", price: 20000, category: "Facial" },
    { name: "Whitening Facial", price: 15000, category: "Facial" },
];

export const salonServices: Service[] = [
    // TODO: [CLIENT] Awaiting full list. Placeholders below.
    { name: "Wash & Set", price: 5000, category: "Standard" },
    { name: "Relaxing", price: 7000, category: "Chemical" },
    { name: "Weave Installation", price: 15000, category: "Extensions" },
    { name: "Nail Extension", price: 12000, category: "Nails" },
    { name: "Classic Pedicure", price: 8000, category: "Nails" },
];
