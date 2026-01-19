export interface Category {
    id: number;
    name: string;
    icon: string;
    description: string;
    count: number;
}

export const categories: Category[] = [
    { id: 1, name: "Alat Kecantikan", icon: "✨", description: "Peralatan untuk menunjang kecantikan dan perawatan diri.", count: 120 },
    { id: 2, name: "Minuman", icon: "🥤", description: "Berbagai jenis minuman segar dan menyehatkan.", count: 85 },
    { id: 3, name: "Makanan", icon: "🍔", description: "Camilan dan makanan ringan berkualitas.", count: 200 },
    { id: 4, name: "Obat-Obatan", icon: "💊", description: "Kebutuhan kesehatan dan obat-obatan umum.", count: 50 },
    { id: 5, name: "Mainan", icon: "🧸", description: "Koleksi mainan untuk anak-anak segala usia.", count: 90 },
    { id: 6, name: "Bumbu Masak", icon: "🧂", description: "Garam, gula, dan bumbu dapur lengkap.", count: 60 },
    { id: 7, name: "Alat Tulis", icon: "✏️", description: "Peralatan kantor dan keperluan sekolah.", count: 40 },
    { id: 8, name: "Sabun Cuci", icon: "🧼", description: "Deterjen dan perlengkapan mencuci pakaian.", count: 30 },
    { id: 9, name: "Alat Mandi", icon: "🚿", description: "Sabun, sampo, dan kebutuhan mandi lainnya.", count: 45 },
    { id: 10, name: "Alat Kebersihan", icon: "🧹", description: "Peralatan untuk menjaga kebersihan rumah.", count: 35 },
];
