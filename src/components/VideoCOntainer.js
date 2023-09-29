import React, { useEffect, useState } from 'react';
import {YOUTUBE_API_DATA} from '../constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos, setVideos] = useState();

    useEffect(()=>{
        getVideos();
    }, []);

    const getVideos =(async()=>{
        const data = await fetch(YOUTUBE_API_DATA);
        const parseData = await data.json();
        console.log(parseData.items, 'parseData')
        setVideos(parseData.items)

    })
  return (
    <div className='flex flex-wrap'>
    {videos?.map((video) => ( 
        <Link to={`/watch?v=${video.id}`}> <VideoCard key={video.id} info={video}></VideoCard></Link>))}
    </div>
  )
}

export default VideoContainer;
