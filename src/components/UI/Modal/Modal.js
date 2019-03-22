import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxs';
import Backdrop from '../Backdrop/Backdrop'; 


const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.backdropClicked}/>
      <div className={classes.Modal}
        style={{transform: props.show ? 'translateY(0)' : 'translateY:(-100vh)',
          //opacity: props.show ? '1' : '0',
          display: props.show ? 'block' : 'none'
      }}
      >
        {props.children}
      </div>
  </Aux>
);


export default modal;