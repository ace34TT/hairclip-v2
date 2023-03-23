import { getAllProductAppointment } from "./../services/product.service";
import { useQuery } from "react-query";

export const useGetAllProduct = () => {
  return useQuery(
    "get-all-products",
    () => {
      return getAllProductAppointment();
    },
    {
      onSuccess(data) {},
      onError(err) {},
      select: (data: any) => {
        return data.data;
      },
    }
  );
};
