import { ProductProps } from "@/utils/data/products";
import { ProductCartprops } from "../cart-store";

export function add(products: ProductCartprops[], newProduct: ProductProps) {
    const existingProduct = products.find(({ id }) => newProduct.id === id)

    if (existingProduct) {
        return products.map((product) => product.id === existingProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product)
    }

    return [...products, { ...newProduct, quantity: 1 }]
}