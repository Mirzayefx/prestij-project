import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuccessItemList, getSuccessList } from '../actions/MainAction'

const OtherLuckContent = () => {

    const dispatch = useDispatch()
    const {successListArr,successItemListArr} = useSelector(state => state.Data)
    useEffect(() => {
        dispatch(getSuccessList())
        dispatch(getSuccessItemList())
    }, [dispatch])

    console.log(successItemListArr);
    return (
        <div className='other_about_content'>
            {
                successListArr.map((data,i)=>{
                    return <h5 key={i}>{data.title}</h5>
                })
            }
            {
                successItemListArr.map((data,i)=>{
                    return <p key={i}>{data.item}</p>
                })
            }
            
            
        </div>
    )
}

export default OtherLuckContent