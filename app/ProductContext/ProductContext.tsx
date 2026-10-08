import { createContext } from "react";
import { ProductType } from "../types/ProductTypes";

const ProductContext = createContext<ProductType | null>(null)!;
