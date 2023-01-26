import React from 'react';

interface Props {
  text: string;
  handleSendEmail?: () => void;
}

export const Badge: React.FC<Props> = (props) => {
  return (
    <div className='badge' onClick={props.handleSendEmail}>
      {props.text}
    </div>
  )
}