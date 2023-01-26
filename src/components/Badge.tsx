import React from 'react';

export const Badge: React.FC<{ text: string }> = (props) => {
  return (
    <div className='badge'>
      {props.text}
    </div>
  )
}