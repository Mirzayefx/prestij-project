import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        getBannerListArr: (state, action) => {
            
            state.bannerListArr = action.payload
            

        },
        getContactInfoListArr: (state, action) => {
            state.contactInfoArr = action.payload

        },
        getServicesListArr: (state,action)=>{
            state.servicesListArr=action.payload
        },
        getNewsListArr: (state,action)=>{
            state.newsListArr=action.payload
        },
        getVideoGalleryListArr: (state,action)=>{
            state.videoGalleryListArr=action.payload
        },
        getFotoGalleryListArr: (state,action)=>{
            state.fotoGalleryListArr=action.payload
        },
        getTeachersListArr: (state,action)=>{
            state.teachersListArr=action.payload
        },
        getSuccessListArr: (state,action)=>{
            state.successListArr=action.payload
        },
        getSuccessItemListArr: (state,action)=>{
            state.successItemListArr=action.payload
        },
        getNewsRetrieveObj: (state,action)=>{
            state.newsRetrieveObj=action.payload
        }

    }
});

export const Data = MainSlice.reducer;
export const { 
    getBannerListArr,
    getContactInfoListArr,
    getServicesListArr,
    getNewsListArr,
    getVideoGalleryListArr,
    getFotoGalleryListArr,
    getTeachersListArr,
    getSuccessListArr,
    getSuccessItemListArr,
    getNewsRetrieveObj } = MainSlice.actions;
