import React from 'react';

const Button = (props) => {
  return(
    <li>
      <button className="waves-effect waves-light btn" onClick={()=>{props.onButtonClick(props)}}>{props.buttonText}</button>
    </li>
  )
}
export default Button;
