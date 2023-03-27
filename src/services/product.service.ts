import { get } from "./http";
const entity = "products";
export const getAllProductForHomepage = async () => {
  return await get(entity);
};
export const getAllProductForShop = async () => {
  return await get(entity + "/shop");
};
