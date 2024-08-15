import { Component } from 'react';

// type for props
type MyComponentProps = {

}

// type for state
type MyComponentState = {
  count: number,
}

class Counter extends Component<MyComponentProps, MyComponentState> {
  constructor(props:any) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('Component mounted');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
