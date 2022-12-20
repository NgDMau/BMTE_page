import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardData: null,
  currentQuarter: 0,
  citiesData: [],
  hostPitals: [],
  hospitalSelected: null,
  citySelected: null,
  tableData: null,
  overviewCountry: null,
  overviewCity: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    storeSetDashboardData: (state, { payload }) => {
      state.dashboardData = payload;
    },
    storeSetCurrentQuarter: (state, { payload }) => {
      state.currentQuarter = payload;
    },
    storeSetCitiesData: (state, { payload }) => {
      state.citiesData = payload;
    },
    storeSetHostpitalData: (state, { payload }) => {
      state.hostPitals = payload;
    },
    storeSethospitalSelected: (state, { payload }) => {
      state.hospitalSelected = payload;
    },
    storeSetCitySelected: (state, { payload }) => {
      state.citySelected = payload;
    },
    storeSetTableData: (state, { payload }) => {
      state.tableData = payload;
    },
    storeSetCountryOverviewData: (state, { payload }) => {
      state.overviewCountry = payload;
    },
    storeSetCityOverviewData: (state, { payload }) => {
      state.overviewCity = payload;
    },
  },
});

export const {
  storeSetDashboardData,
  storeSetCurrentQuarter,
  storeSetCitiesData,
  storeSetHostpitalData,
  storeSethospitalSelected,
  storeSetCitySelected,
  storeSetTableData,
  storeSetCountryOverviewData,
  storeSetCityOverviewData,
} = dataSlice.actions;

export default dataSlice.reducer;
