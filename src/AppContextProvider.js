import {
    CategoryProvider,
    CartProvider,
    ProductsProvider
} from "@context";
import { combineComponents } from '@utils/helper';

const providers = [
    CategoryProvider,
    CartProvider,
    ProductsProvider
]
export const AppContextProvider = combineComponents(...providers);