import React from'react';
import axios from 'axios';
import Movie from './Movie';


class App extends React.Component {
<<<<<<< HEAD
state = {
    isLoading : true,
    movies : [],
    };
=======
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
>>>>>>> d904dc6fb53893b257ce09f36bb58d86d74da16b
    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        }  = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({movies, isLoading:false});
    }
componentDidMount () {
    //영화 데이터 로딩
    this.getMovies();
}
render() {
    const {isLoading, movies} = this.state;
    return (
         <div>
        {isLoading 
        ? 'Loading...' 
        : movies.map((movie) => {
          console.log(movie);
          return(
              < Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              />
          );
        })}
        </div>
        );
    }
}


<<<<<<< HEAD

export default App;
=======
>>>>>>> e2007df20f7326db287f2f71de873aa1f66117bf
export default App;
>>>>>>> d904dc6fb53893b257ce09f36bb58d86d74da16b
