export type ProductType = {
    id: string;
    price: number | null;
    name: string;
    quantity?: number | 1;
    currency: string;
    description: string | null;
}