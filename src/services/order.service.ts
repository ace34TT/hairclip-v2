import { post } from "./http";
const entity = "orders";
export const saveOrderSvc = async (data: any): Promise<any> => {
  return await post(entity, data);
};
