import { number, object, string, TypeOf, array } from "zod";

export const shoppingCartSchema = object({
  body: object({
    total: number().default(0),
    subTotal: number().default(0),
    shipping: number().default(1.99),
    unitPrice: number().default(7),
    quantity: number().default(0),
    products: array(
      object({
        id: string(),
        name: string(),
        color: string(),
        quantity: number(),
        preview: string(),
      })
    ).default([]),
  }),
});

export type ShoppingCart = TypeOf<typeof shoppingCartSchema>["body"];
