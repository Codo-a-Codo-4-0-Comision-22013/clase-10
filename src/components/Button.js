import React from 'react';

export default class ButtonReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      hidden: false  // podriamos agregar otras propiedades
    };
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <button
        onClick={this.handleClick.bind(this)}
        className={this.state.isActive ? 'active' : ''}
      >
        {this.props.children}
      </button>
    );
  }
}