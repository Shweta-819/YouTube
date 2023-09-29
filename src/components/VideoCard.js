import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)

    const {statistics, snippet} = info;
    const{channelTitle,title, thumbnails} = snippet;
  return (
    <div className='shadow-md m-1'>
    <img src={thumbnails.medium.url} alt="thumbnails" className='p-1'></img>
    <ul className='w-64'>
    <li className="font-bold">{title}</li>
        <li className='pt-1' >{channelTitle}</li>
       
        <li>{statistics.viewCount} Views</li>
    </ul>
 
    </div>
  )
}

export default VideoCard;
