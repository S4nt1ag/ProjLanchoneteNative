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

export function remove(products: ProductCartprops[], productRemoveId: string){
    const updatedProduct = products.map((product) =>
    product.id === productRemoveId ? {
        ...product,
        quantity: product.quantity > 1 ? product.quantity -1 : 0
    } : product)

    return updatedProduct.filter((product) => product.quantity > 0)
}