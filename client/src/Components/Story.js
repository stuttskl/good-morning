import React from 'react';
import './Story.css';

const Story = ({title, abstract, url}) => (
  <div className='storyCard'>
    <h1>{title}</h1>
    <p>{abstract}</p>
    <a href={url}>View Full</a> 
  </div>
)

export default Story;