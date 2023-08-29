import React from 'react';
import { personalInfo } from '../data';

export default function Info() {
  return (
    <>
{personalInfo.map(({title,description} ,i)=>{
  return(
    <li className='info__item' key={i}>
    <span className='info__title'>{title}</span>
    <span className='info__description'>{description}</span>
    </li>
  )

})}
    </>
  )
}
