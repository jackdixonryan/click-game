import React from 'react';
import './Clickable.css';

class Clickable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = e => {
    e.preventDefault();
    const clicked = true;
    this.setState({ clicked: clicked });
    this.props.callback({
      clicked: true,
      index: this.props.id
    });
  }

  render() {
    return (
      <div className="clickable" onClick={this.handleClick}>
        <div className="shell">
          <img src={this.props.image} alt="Game of Thrones Character"/>
        </div>
      </div>
    )
  }
}

export default Clickable;