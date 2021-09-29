import React from 'react';
import VideoItem from './VideoItem';

//map is a loop here
//pass video props to VideoItem by using video= {video}
const VideoList = props => {
    const renderedList = props.videos.map((video)=>{
        return <VideoItem video={video}/>;
    })
    return(
    <div className = "ui relaxed divided list"> {renderedList}</div>
    )}

export default VideoList;



