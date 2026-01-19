export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    joinDate: string;
}

export const customers: Customer[] = [
    {
        id: 1,
        name: "Budi Santoso",
        email: "budi@example.com",
        phone: "081234567890",
        address: "Jl. Merdeka No. 10, Jakarta",
        joinDate: "2024-01-15"
    },
    {
        id: 2,
        name: "Siti Aminah",
        email: "siti@example.com",
        phone: "082198765432",
        address: "Jl. Mawar No. 5, Bandung",
        joinDate: "2024-02-20"
    },
    {
        id: 3,
        name: "Andi Wijaya",
        email: "andi@example.com",
        phone: "085612345678",
        address: "Jl. Melati No. 8, Surabaya",
        joinDate: "2024-03-10"
    },
    {
        id: 4,
        name: "Dewi Lestari",
        email: "dewi@example.com",
        phone: "081122334455",
        address: "Jl. Kenanga No. 3, Yogyakarta",
        joinDate: "2024-04-05"
    }
];
