import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


export const MainSlice = createSlice({
    name: "MAIN_SLICE",
    initialState: initialState,
    reducers: {
        getBannerListArr: (state, action) => {
            state.isHeaderLoading = true
            state.bannerListArr = action.payload


        },
        getContactInfoListArr: (state, action) => {
            state.contactInfoArr = action.payload

        },
        getServicesListArr: (state, action) => {
            state.servicesListArr = action.payload
        },
        getNewsListArr: (state, action) => {
            state.newsListArr = action.payload
        },
        getVideoGalleryListArr: (state, action) => {
            state.videoGalleryListArr = action.payload
        },
        getFotoGalleryListArr: (state, action) => {
            state.fotoGalleryListArr = action.payload
        },
        getTeachersListArr: (state, action) => {
            state.teachersListArr = action.payload
        },
        getSuccessListArr: (state, action) => {
            state.successListArr = action.payload
        },
        getSuccessItemListArr: (state, action) => {
            state.successItemListArr = action.payload
        },
        getNewsRetrieveObj: (state, action) => {
            state.newsRetrieveObj = action.payload
        },
        getServiceRetrieveObj: (state, action) => {
            state.serviceRetrieveObj = action.payload
        },
        getSettingsListArr: (state, action) => {
            state.settingsListArr = action.payload
        },
        getBranchListArr: (state, action) => {
            state.branchListArr = action.payload
        },
        contactNameChange: (state, action) => {
            state.contactNameValue = action.payload
        },
        contactEmailChange: (state, action) => {
            state.contactEmailValue = action.payload
        },
        contactSubjectChange: (state, action) => {
            state.contactSubjectValue = action.payload
        },
        contactMessageChange: (state, action) => {
            state.contactMessageValue = action.payload
        },

        vacancyNameChange: (state, action) => {
            state.vacancyName = action.payload
        },
        subjectToTeachChange: (state, action) => {
            state.subjectToTeach = action.payload
        },
        fullNameFatherChange: (state, action) => {
            state.fullNameFather = action.payload
        },
        homeNumberChange: (state, action) => {
            state.homeNumber = action.payload
        },
        emailChange: (state, action) => {
            state.email = action.payload
        },
        mobileNumberChange: (state, action) => {
            state.mobileNumber = action.payload
        },
        birthDateChange: (state, action) => {
            state.birthDate = action.payload
        },
        addressChange: (state, action) => {
            state.address = action.payload
        },
        workedDateStartEndChange: (state, action) => {
            state.workedDateStartEnd = action.payload
        },
        workedDateStartEndSecondChange: (state, action) => {
            state.workedDateStartEndSecond = action.payload
        },
        workedDateStartEndThirdChange: (state, action) => {
            state.workedDateStartEndThird = action.payload
        },
        companyNameAddressFieldSecondChange: (state, action) => {
            state.companyNameAddressFieldSecond = action.payload
        },
        companyNameAddressFieldChange: (state, action) => {
            state.companyNameAddressField = action.payload
        },
        companyNameAddressFieldThirdChange: (state, action) => {
            state.companyNameAddressFieldThird = action.payload
        },
        positionMainObligationChange: (state, action) => {
            state.positionMainObligation = action.payload
        },
        positionMainObligationSecondChange: (state, action) => {
            state.positionMainObligationSecond = action.payload
        },
        positionMainObligationThirdChange: (state, action) => {
            state.positionMainObligationThird = action.payload
        },
        reasonForLeavingChange: (state, action) => {
            state.reasonForLeaving = action.payload
        },
        reasonForLeavingSecondChange: (state, action) => {
            state.reasonForLeavingSecond = action.payload
        },
        reasonForLeavingThirdChange: (state, action) => {
            state.reasonForLeavingThird = action.payload
        },
        studiedDateStartEndChange: (state, action) => {
            state.studiedDateStartEnd = action.payload
        },
        studiedUniversityChange: (state, action) => {
            state.studiedUniversity = action.payload
        },
        studiedUniversitySecondChange: (state, action) => {
            state.studiedUniversitySecond = action.payload
        },
        studiedUniversityThirdChange: (state, action) => {
            state.studiedUniversityThird = action.payload
        },
        studiedDateStartEndSecondChange: (state, action) => {
            state.studiedDateStartEndSecond = action.payload
        },
        studiedDateStartEndThirdChange: (state, action) => {
            state.studiedDateStartEndThird = action.payload
        },
        qualificationDegreeChange: (state, action) => {
            state.qualificationDegree = action.payload
        },
        qualificationDegreeSecondChange: (state, action) => {
            state.qualificationDegreeSecond = action.payload
        },
        qualificationDegreeThirdChange: (state, action) => {
            state.qualificationDegreeThird = action.payload
        },
        resultRateAverageChange: (state, action) => {
            state.resultRateAverage = action.payload
        },
        resultRateAverageSecondChange: (state, action) => {
            state.resultRateAverageSecond = action.payload
        },
        resultRateAverageThirdChange: (state, action) => {
            state.resultRateAverageThird = action.payload
        },
        dateOfParticipationStartEndChange: (state, action) => {
            state.dateOfParticipationStartEnd = action.payload
        },
        dateOfParticipationStartEndSecondChange: (state, action) => {
            state.dateOfParticipationStartEndSecond = action.payload
        },
        dateOfParticipationStartEndThirdChange: (state, action) => {
            state.dateOfParticipationStartEndThird = action.payload
        },
        qualificationChange: (state, action) => {
            state.qualification = action.payload
        },
        qualificationSecondChange: (state, action) => {
            state.qualificationSecond = action.payload
        },
        qualificationThirdChange: (state, action) => {
            state.qualificationThird = action.payload
        },
        placeOfExecutedChange: (state, action) => {
            state.placeOfExecuted = action.payload
        },
        placeOfExecutedSecondChange: (state, action) => {
            state.placeOfExecutedSecond = action.payload
        },
        placeOfExecutedThirdChange: (state, action) => {
            state.placeOfExecutedThird = action.payload
        },
        achievementsChange: (state, action) => {
            state.achievements = action.payload
        },
        achievementsSecondChange: (state, action) => {
            state.achievementsSecond = action.payload
        },
        achievementsThirdChange: (state, action) => {
            state.achievementsThird = action.payload
        },
        otherAchievmentsChange: (state, action) => {
            state.otherAchievments = action.payload
        },
        recommendfullNameFatherChange: (state, action) => {
            state.recommendfullNameFather = action.payload
        },
        recommendfullNameFatherSecondChange: (state, action) => {
            state.recommendfullNameFatherSecond = action.payload
        },
        recommendMobileNumberChange: (state, action) => {
            state.recommendMobileNumber = action.payload
        },
        recommendMobileNumberSecondChange: (state, action) => {
            state.recommendMobileNumberSecond = action.payload
        },
        relatedToChange: (state, action) => {
            state.relatedTo = action.payload
        },
        relatedToSecondChange: (state, action) => {
            state.relatedToSecond = action.payload
        },
        headerLoading: (state) => {
            state.isHeaderLoading = true
        },
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
    getNewsRetrieveObj,
    getServiceRetrieveObj,
    getSettingsListArr,
    getBranchListArr,
    contactNameChange,
    contactEmailChange,
    contactSubjectChange,
    contactMessageChange,
    vacancyNameChange,
    subjectToTeachChange,
    fullNameFatherChange,
    homeNumberChange,
    emailChange,
    mobileNumberChange,
    birthDateChange,
    addressChange,
    workedDateStartEndChange,
    workedDateStartEndSecondChange,
    workedDateStartEndThirdChange,
    companyNameAddressFieldChange,
    companyNameAddressFieldSecondChange,
    companyNameAddressFieldThirdChange,
    positionMainObligationChange,
    positionMainObligationSecondChange,
    positionMainObligationThirdChange,
    reasonForLeavingChange,
    reasonForLeavingSecondChange,
    reasonForLeavingThirdChange,
    studiedDateStartEndChange,
    studiedDateStartEndSecondChange,
    studiedUniversityChange,
    studiedUniversitySecondChange,
    studiedUniversityThirdChange,
    studiedDateStartEndThirdChange,
    qualificationDegreeChange,
    qualificationDegreeSecondChange,
    qualificationDegreeThirdChange,
    resultRateAverageChange,
    resultRateAverageSecondChange,
    resultRateAverageThirdChange,
    dateOfParticipationStartEndChange,
    dateOfParticipationStartEndSecondChange,
    dateOfParticipationStartEndThirdChange,
    qualificationChange,
    qualificationSecondChange,
    qualificationThirdChange,
    placeOfExecutedChange,
    placeOfExecutedSecondChange,
    placeOfExecutedThirdChange,
    achievementsChange,
    achievementsSecondChange,
    achievementsThirdChange,
    otherAchievmentsChange,
    recommendfullNameFatherChange,
    recommendfullNameFatherSecondChange,
    recommendMobileNumberChange,
    recommendMobileNumberSecondChange,
    relatedToChange,
    relatedToSecondChange,
    headerLoading
} = MainSlice.actions;
