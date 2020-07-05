import React from 'react';
import './Story.css';

const Story = ({title, abstract, url}) => (
  <div className='storyCard'>
    <h3>{title}</h3>
    <p>{abstract}</p>
    <button className='btn'><a href={url}>View Full</a></button> 
  </div>
)

export default Story;