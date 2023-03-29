import { ShippingInformation } from "./../schema/shipping-infnormation.schema";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface CandidateState {
//   candidate?: Candidate;
// }
interface IShippingInformation {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  //
  shipping_address: string;
  town: string;
  zip_code: string;
  province: string;
}

const initialState: ShippingInformation = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  //
  shipping_address: "",
  town: "",
  zip_code: "",
  province: "",
};

export const shippingInformationSlice = createSlice({
  name: "shopping-cart",
  initialState,
  reducers: {
    saveShippingInformation: (
      state,
      action: PayloadAction<IShippingInformation>
    ) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.shipping_address = action.payload.shipping_address;
      state.zip_code = action.payload.zip_code;
      state.town = action.payload.town;
      state.province = action.payload.province;
    },
    resetShippingInformation: (state) => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.phone = "";
      state.shipping_address = "";
      state.zip_code = "";
      state.town = "";
      state.province = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveShippingInformation, resetShippingInformation } =
  shippingInformationSlice.actions;

export default shippingInformationSlice.reducer;
