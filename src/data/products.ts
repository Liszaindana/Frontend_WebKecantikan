export interface Product {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    categoryName: string;
    stock: number;
    image?: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Premium Face Roller",
        price: 150000,
        categoryId: 1,
        categoryName: "Alat Kecantikan",
        stock: 25,
        description: "Alat pijat wajah premium untuk melancarkan sirkulasi darah."
    },
    {
        id: 2,
        name: "Facial Cleanser Brush",
        price: 250000,
        categoryId: 1,
        categoryName: "Alat Kecantikan",
        stock: 15,
        description: "Sikat pembersih wajah elektrik yang lembut dan efektif."
    },
    {
        id: 3,
        name: "Organic Green Tea",
        price: 45000,
        categoryId: 2,
        categoryName: "Minuman",
        stock: 50,
        description: "Teh hijau organik pilihan dengan aroma yang menenangkan."
    },
    {
        id: 4,
        name: "Aloe Vera Gel",
        price: 85000,
        categoryId: 1,
        categoryName: "Alat Kecantikan",
        stock: 40,
        description: "Gel lidah buaya murni untuk melembapkan kulit."
    },
    {
        id: 5,
        name: "Vitamin C Serum",
        price: 120000,
        categoryId: 4,
        categoryName: "Obat-Obatan",
        stock: 30,
        description: "Serum vitamin C untuk mencerahkan kulit wajah."
    },
    {
        id: 6,
        name: "Hair Dryer Pro",
        price: 450000,
        categoryId: 1,
        categoryName: "Alat Kecantikan",
        stock: 10,
        description: "Hair dryer profesional dengan teknologi ion."
    },
    {
        id: 7,
        name: "Keripik Tempe",
        price: 15000,
        categoryId: 3,
        categoryName: "Makanan",
        stock: 100,
        description: "Keripik tempe renyah bumbu bawang."
    },
    {
        id: 8,
        name: "Paracetamol 500mg",
        price: 5000,
        categoryId: 4,
        categoryName: "Obat-Obatan",
        stock: 200,
        description: "Obat penurun panas dan pereda nyeri."
    },
    {
        id: 9,
        name: "Mainan Mobil Remote Control",
        price: 250000,
        categoryId: 5,
        categoryName: "Mainan",
        stock: 12,
        description: "Mobil remote control dengan skala 1:18."
    },
    {
        id: 10,
        name: "Garam Dapur Beriodium",
        price: 3500,
        categoryId: 6,
        categoryName: "Bumbu Masak",
        stock: 500,
        description: "Garam dapur berkualitas tinggi kaya iodium."
    }
];
