import React from 'react'
import VideoCard from './VideoCard'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='w-full overflow-y-hidden'>
        <ButtonList />
        <VideoCard />
    </div>
  )
}

export default MainContainer