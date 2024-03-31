import React from 'react';

export function Card(props: {title: string, children: React.ReactNode; className?: string}){
  return (
    <div className={`card overflow-hidden ${props.className}`}>
      <div className={"label"}>{props.title}</div>
      {props.children}
    </div>
  )
}
export default Card;