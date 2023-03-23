import { get } from "./http";
const entity = "products";
export const getAllProductAppointment = async () => {
  return await get(entity);
};
