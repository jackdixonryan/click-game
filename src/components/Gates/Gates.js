import React from 'react';
import './Gates.css';

class Gates extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      ended: false
    }
  }

  // Permits the animation to run once and then never run again. 
  leftOut() {
    const left=document.getElementById('left');
    const right=document.getElementById('right');
    right.style.animationName = '';
    left.style.animationName = '';
    right.style.marginLeft = '100%';
    left.style.marginLeft = '-50%';
  }

  render(){
    return (
    <div>
      <div id="left" onAnimationEnd={this.leftOut}>
        <img id="left-img" alt="logo" src="https://images-na.ssl-images-amazon.com/images/I/515E8EEdq8L._SX425_.jpg" />
      </div>
      <div id="right">
          <img id="right-img" alt="logo" src="https://images-na.ssl-images-amazon.com/images/I/515E8EEdq8L._SX425_.jpg" />
      </div>
    </div>
    );
  }
}

export default Gates;