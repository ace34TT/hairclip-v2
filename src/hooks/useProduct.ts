import {
  getAllProductForHomepage,
  getAllProductForShop,
} from "./../services/product.service";
import { useQuery } from "react-query";

export const useGetAllProduct = () => {
  return useQuery(
    "get-all-products",
    () => {
      return getAllProductForHomepage();
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

export const useGetAllProductForShop = () => {
  return useQuery(
    "get-all-products-png",
    () => {
      return getAllProductForShop();
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
