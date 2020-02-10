import React from 'react';
import getRandomColor from './helpers';

class Button extends React.Component {
  state = {
    background: 'rgb(37, 87, 238)',
    top: '46%',
    left: '45%'
  }
  changeStyles = () => {
    this.setState({
      top: Math.random() * 92 + '%',
      left: Math.random() * 90 + '%'
    });
    this.changeBackground()
  }
  changeBackground = () => {
    const r = getRandomColor();
    const g = getRandomColor();
    const b = getRandomColor();
    this.setState({
      background: 'rgb(' + r + ', ' + g + ', ' + b + ')'
    })
  }
  render() {
    return (
      <button
        className='currentButton'
        onClick={this.changeStyles}
        style={ {top: this.state.top, left: this.state.left, background: this.state.background} }
      >
        Click me!
      </button>
    )
  }
}

export default Button;