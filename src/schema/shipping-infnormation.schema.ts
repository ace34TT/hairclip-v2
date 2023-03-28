import { number, object, string, TypeOf, array } from "zod";

export const shippingInformationSchema = object({
  body: object({
    firstname: string(),
    lastname: string(),
    email: string(),
    phone: string(),
    //
    shipping_address: string(),
    town: string(),
    zip_code: string(),
    province: string(),
  }),
});

export type ShippingInformation = TypeOf<
  typeof shippingInformationSchema
>["body"];
