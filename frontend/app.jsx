import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
  }

  handleChange(e) {
    this.setState({ user: e.currentTarget.value });
  }

  render() {
    return (
      <main>
        <input onChange={ this.handleChange.bind(this) }></input>
      </main>
    );
  }
}

export default App;
