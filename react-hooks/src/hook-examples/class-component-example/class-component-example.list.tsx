import { Component } from "react";

class ClassComponentExampleList extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5],
  };

  handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    this.setState({
      numbers: [...this.state.numbers, randomNumber],
    });
  };

  componentDidMount() {
    console.log("КОМПОНЕНТ БЫЛ СМОНТИРОВАН");
  }

  componentDidUpdate(
    prevProps: typeof this.props,
    prevState: typeof this.state,
  ) {
    console.log({
      prevProps,
      prevState,
      nextProps: this.props,
      nextState: this.state,
    });
  }

  componentWillUnmount() {
    console.log("КОМПОНЕНТ БУДЕТ РАЗМОНТИРОВАН");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Новое число</button>
        <ul>
          {this.state.numbers.map((number) => (
            <li key={crypto.randomUUID()}>{number}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassComponentExampleList;
