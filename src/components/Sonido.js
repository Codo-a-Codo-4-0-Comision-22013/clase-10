import React from 'react';

export default class SonidoReact extends React.Component {
  constructor(props) {
    super(props);
    this.sound = null;
    this.state = {
      isActive: false
    };
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive
    });
    if (this.state.isActive) {
      this.pause();
    } else {
      this.play();
    }
  }

    // play the video
    play() {
      this.sound.play();
    }
  
    // pause the video
    pause() {
      this.sound.pause();
    }

  render() {
    return (
      <div>
        <audio
          ref={c => {
            this.sound = c;
          }}
          className={this.state.isActive ? 'active' : ''}
          src="https://www.w3schools.com/html/horse.ogg"
          controls
        />
        <button
          onClick={this.handleClick.bind(this)}
          className={this.state.isActive ? 'active' : ''}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}