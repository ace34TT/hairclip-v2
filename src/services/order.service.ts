import { post } from "./http";
const entity = "orders";

export const generateClient = async (data: any) => {
  return await post(entity + "/generate-stripe-client", data);
};

export const saveOrderSvc = async (data: any): Promise<any> => {
  return await post(entity, data);
};
