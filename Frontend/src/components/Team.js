import React from 'react';
import './TeamStyles.css';
function Team(props) {
  return (<div className='team-card'>
    <div className='team-image'>
        <img alt='' src={props.img} />
    </div>
    <h4>{props.name}</h4>
    <p>Course: {props.info}</p>
    <p>Role: {props.role}</p>
    <a href={`mailto:${props.email}`} target='_blank'>Write to {props.name}</a>
  </div>);
}

export default Team;    