import axios from "axios"
import { baseUrl } from "../MAIN_API";
import { getBannerListArr, getContactInfoListArr, getFotoGalleryListArr, getNewsListArr, getNewsRetrieveObj, getServiceRetrieveObj, getServicesListArr, getSettingsListArr, getSuccessItemListArr, getSuccessListArr, getTeachersListArr, getVideoGalleryListArr } from "../redux/MainReducer";


export const getBannerList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "banners-list/")
    .then(resp=>{
        console.log(resp);
        // dispatch(getIsHeaderLoading(false))
        dispatch(getBannerListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getContactInfoList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "contactinformation-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getContactInfoListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getServicesList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "service-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getServicesListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getNewsList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "news-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getNewsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getVideoGalleryList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "videogallery-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getVideoGalleryListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getFotoGalleryList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "photogallery-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getFotoGalleryListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getTeachersList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "teacher-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getTeachersListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getSuccessList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "success-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getSuccessListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getSuccessItemList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "successitem-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getSuccessItemListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getNewsRetrieveList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ `news-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getNewsRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getServiceRetrieveList=(id)=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ `service-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getServiceRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getSettingsList=()=>async dispatch=>{
    return await axios.get(baseUrl+"prestij/"+ "settings-list/")
    .then(resp=>{
        console.log(resp);
        dispatch(getSettingsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

