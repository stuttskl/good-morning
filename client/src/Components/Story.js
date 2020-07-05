import React from 'react';

const Story = ({title, abstract, url}) => (
  <div>
    <h1>{title}</h1>
    <p>{abstract}</p>
    <a href={url}>View Full</a> 
  </div>
)

export default Story;