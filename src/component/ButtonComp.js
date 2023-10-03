import React from 'react';


export default function ButtonComp(props){
return(
    <button type="button" className={props.class} onClick={props.event}>{props.toAdd}</button>
);
}