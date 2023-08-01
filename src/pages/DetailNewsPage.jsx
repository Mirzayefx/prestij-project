import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import OtherFotoContainer from '../components/OtherFotoContainer'
import Footer from '../components/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsList, getNewsRetrieveList } from '../actions/MainAction'
import OtherNewsCardsContainer from '../components/OtherNewsCardsContainer'
import DetailNewsContainer from '../components/DetailNewsContainer'
import { Helmet } from 'react-helmet'

const DetailNewsPage = ({ otherPageBanner }) => {
    const { id } = useParams()
    const { title } = useParams()
    console.log(id);




    const dispatch = useDispatch()
    const { newsRetrieveObj } = useSelector(state => state.Data)
    // useEffect(() => {
    //     dispatch(getNewsList())
    // }, [dispatch])

    // console.log(newsListArr);
    useEffect(() => {
        // getNewsRetrieveList
        dispatch(getNewsRetrieveList(id))
    }, [id])
    console.log(newsRetrieveObj);
    // const post = newsListArr.find((post) => post.id === parseInt(id));
    // console.log(post);

    return (
        <div>
            <Helmet>
                <title>{newsRetrieveObj.title}</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent={newsRetrieveObj.title} otherHeaderPagesLink={newsRetrieveObj.title} />
            <main>
                <section>
                    <DetailNewsContainer newsRetrieveObj={newsRetrieveObj} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default DetailNewsPage