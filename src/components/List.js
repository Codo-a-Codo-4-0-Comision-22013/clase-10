import React from 'react';

export default class ListReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></a>
          </li>
          </ul>
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