import React from'react';
import axios from 'axios';


class App extends React.Component {
    state = {
<<<<<<< HEAD
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
=======
        isLoading : true,
        movies : [],
    }
    getMovies = async () => {
        const movies = await  axios.get('https://yts-proxy.now.sh/list_movies.json');
    }
    componentDidMount() {
        // 영화 데이터 로딩
            this.getMovies();
        }
    render(){
        const {isLoading} = this.state;
        return(
            <div>
                {isLoading ? 'Loding...' : 'ready!!!'}
            </div>
        );
    }
}


>>>>>>> e2007df20f7326db287f2f71de873aa1f66117bf
export default App;