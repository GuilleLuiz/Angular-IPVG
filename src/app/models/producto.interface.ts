export interface Producto {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: ProductoRating;
    title: string;
}
export interface ProductoRating {
    count: number;
    rate: number;
}