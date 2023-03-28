import { number, object, string, TypeOf, array } from "zod";

export const shoppingCartSchema = object({
  body: object({
    total: number().default(0),
    quantity: number().default(0),
    products: array(
      object({
        id: string(),
        name: string(),
        color: string(),
        quantity: string(),
      })
    ).default([]),
  }),
});

export type ShoppingCart = TypeOf<typeof shoppingCartSchema>["body"];
