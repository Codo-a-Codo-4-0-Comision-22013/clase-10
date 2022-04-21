import React from 'react';

export default class VideoReact extends React.Component {
  constructor(props) {
    super(props);

    this.video = null; // the Video component

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
    this.video.play();
  }

  // pause the video
  pause() {
    this.video.pause();
  }

  render() {

    return (
      <div>
        <video
          ref={c => {
            this.video = c;
          }}
          className={this.state.isActive ? 'active' : 'deactive'}
          src="https://www.w3schools.com/TAgs/movie.ogg"
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