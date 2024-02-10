import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  image: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  apt: "",
  city: "",
  state: "",
  zipcode: "",
  isBusinessOwner: false,
  selectedRole: "",
  businessName: "",
  businessType: "",
  licenseNumber: "",
  registeredAddress: "",
  companyName: "",
  servicableRegions: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      // console.log(action.payload.data);
      // console.log(action)
      state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.phone = action.payload.data.phone;
      state.image = action.payload.data.image;
      state.address = action.payload.data.address;
      state.apt = action.payload.data.apt;
      state.city = action.payload.data.city;
      state.state = action.payload.data.state;
      state.zipcode = action.payload.data.zipcode;
      state.isBusinessOwner = action.payload.data.isBusinessOwner;
      state.selectedRole = action.payload.data.selectedRole;
      state.businessName = action.payload.data.businessName;
      state.businessType = action.payload.data.businessType;
      state.licenseNumber = action.payload.data.licenseNumber;
      state.registeredAddress = action.payload.data.registeredAddress;
      state.companyName = action.payload.data.companyName;
    },
    logoutRedux: (state, action) => {
      state.user = "";
      state._id = "";
      state.name = "";
      state.email = "";
      state.phone = "";
      state.image = "";
      state.address = "";
      state.apt = "";
      state.city = "";
      state.state = "";
      state.zipcode = "";
      state.isBusinessOwner = false;
      state.selectedRole = "";
      state.businessName = "";
      state.businessType = "";
      state.licenseNumber = "";
      state.registeredAddress = "";
      state.companyName = "";
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
