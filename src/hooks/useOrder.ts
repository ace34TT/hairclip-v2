import { useMutation } from "react-query";
import { generateClient, saveOrderSvc } from "../services/order.service";

export const useSaveOrder = () => {
  return useMutation((data: any) => {
    return saveOrderSvc(data);
  });
};
export const useGenerateClientSecret = () => {
  return useMutation((data: any) => {
    return generateClient(data);
  });
};
