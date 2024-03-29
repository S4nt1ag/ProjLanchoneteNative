import { ProductProps } from "@/utils/data/products"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

import * as cartInMemory from "./helpers/card-in-memory"

export type ProductCartprops = ProductProps & {
    quantity: number
}

type StateProps = {
    products: ProductCartprops[]
    add: (product: ProductProps) => void
    remove: (product: string) => void
    clear: () => void
}




export const useCartStore = create(
    persist<StateProps>((set) => ({
        products: [],

        add: (product: ProductProps) => set((state) => ({
            products: cartInMemory.add(state.products, product),
        })),

        remove: (productId: string) =>
            set((state) => ({
                products: cartInMemory.remove(state.products, productId),
            })),

        clear: () => set(() => ({ products: [] })),
    }),
        {
            name: "nlw-expert:cart",
            storage: createJSONStorage(() => AsyncStorage),
        }))