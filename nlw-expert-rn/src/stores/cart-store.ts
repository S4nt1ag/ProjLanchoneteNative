import { ProductProps } from "@/utils/data/products"
import { create } from "zustand"
import * as cartInMemory from "./helpers/card-in-memory"

export type ProductCartprops = ProductProps & {
    quantity: number
}

type StateProps = {
    products: ProductCartprops[]
    add: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
    products: [],

    add: (product: ProductProps) => set((state) => ({
       products: cartInMemory.add(state.products, product), 
    })),
}))