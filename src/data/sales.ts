export interface SaleDetail {
    id: number;
    saleId: number;
    productId: number;
    productName: string;
    quantity: number;
    price: number;
    subtotal: number;
}

export interface Sale {
    id: number;
    customerId: number;
    customerName: string;
    date: string;
    totalAmount: number;
    paymentMethod: string;
    status: 'Completed' | 'Pending' | 'Cancelled';
    details: SaleDetail[];
}

export const sales: Sale[] = [
    {
        id: 1,
        customerId: 1,
        customerName: "Budi Santoso",
        date: "2024-05-10 14:30:00",
        totalAmount: 300000,
        paymentMethod: "Cash",
        status: 'Completed',
        details: [
            { id: 1, saleId: 1, productId: 1, productName: "Premium Face Roller", quantity: 2, price: 150000, subtotal: 300000 }
        ]
    },
    {
        id: 2,
        customerId: 2,
        customerName: "Siti Aminah",
        date: "2024-05-11 10:15:00",
        totalAmount: 130000,
        paymentMethod: "Transfer Bank",
        status: 'Completed',
        details: [
            { id: 2, saleId: 2, productId: 3, productName: "Organic Green Tea", quantity: 2, price: 45000, subtotal: 90000 },
            { id: 3, saleId: 2, productId: 5, productName: "Vitamin C Serum", quantity: 1, price: 40000, subtotal: 40000 } // Price mismatch with products.ts but it's dummy
        ]
    }
];
