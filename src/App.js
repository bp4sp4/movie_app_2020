import React from'react';


class App extends React.Component {
    state = {
        count :0 ,
    };
    apple = () => {
        this.setState({count : 사과});
    };
    orange = () => {
        this.setState({count : 오렌지});
    };
    banana = () => {
        this.setState({count : 바나나});
    };
    render () {
        return (
        <div>
         <h1>어떤 과일을 좋아하나요? {this.state.apple} </h1>
         <button onClick={this.state.apple}>사과</button>
         <button onClick={this.state.orange}>오렌지</button>
         <button onClick={this.state.banana}>바나나</button>
        </div>
        );
    }
}
export default App;