import { useMutation } from "react-query";
import { saveOrderSvc } from "../services/order.service";

export const useSaveOrder = () => {
  return useMutation((data: any) => {
    return saveOrderSvc(data);
  });
};
