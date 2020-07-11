import React from 'react';
import './Story.css';

const Story = ({title, abstract, url}) => (
  <div className='storyCard'>
    <h3>{title}</h3>
    <p>{abstract}</p>
    <a href={url}><button className='btn'>View Full</button></a>
  </div>
)

export default Story;