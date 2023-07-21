import React from 'react'
import HeaderHead from './HeaderHead'
import OtherHeaderMainContainer from './OtherHeaderMainContainer'
import OtherHeaderPagesLink from './OtherHeaderPagesLink'

const OtherHeader = ({otherHeaderMainContent,otherHeaderPagesLink}) => {
  return (
    <header>
        <HeaderHead/>
        <OtherHeaderMainContainer otherHeaderMainContent={otherHeaderMainContent}/>
        <OtherHeaderPagesLink otherHeaderPagesLink={otherHeaderPagesLink}/>
      </header>
  )
}

export default OtherHeader