import React, { useEffect } from 'react';
import { closedMenu } from '../utils/appSlice';
import { useDispatch} from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const WatchContainer = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams([]);
    console.log(searchParams.get("v"))

    useEffect(()=>{
        dispatch(closedMenu())
    }, []);

  return (
    <div className='px-5'>
     <iframe width="1100" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player"
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
      picture-in-picture; web-share" allowFullScreen>

      </iframe>
    </div>
  )
}

export default WatchContainer;
