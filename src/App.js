import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./component/Movie"
import NavbarComp from "./component/Navbar"

let apiKey = process.env.REACT_APP_APIKEY

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      genre: []
    }
  }

  CurrentPlaying = async () => {
    // console.log('API_key', apiKey)
    let url = ` https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    let data = await fetch(url);
    let dataResult = await data.json();
    // console.log("data", dataResult)
    this.setState({
      movies: dataResult.results
    });
  }

  getNextPage = async () => {
    let newPage = this.state.page + 1
    let url = ` https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${newPage}`
    let data = await fetch(url);
    let dataResult = await data.json();
    this.setState({
      movies: this.state.movies.concat(dataResult.results),
      page: this.state.page + 1
    })

  }

  getGenre = async () => {
    let genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    let data = await fetch(genreUrl);
    let dataResult = await data.json();
    this.setState({
      genre: dataResult.genres
    })
  }
  componentDidMount() {
    this.CurrentPlaying()
    this.getGenre()
  }

  renderLoadingScreen() {
    return (
      <div className="container">
        Loading movies
      </div>
    )
  }

  renderMovies() {
    return (
      <div>
        <NavbarComp></NavbarComp>
        <div className="container">
          <Movie moviesList={this.state.movies}></Movie>
          <button onClick={this.getNextPage}>See more</button>
        </div>

      </div>
    );
  }

  render() {
    if(this.state.movies.length === 0) {
      return this.renderLoadingScreen()
    } else {
      console.log(this.state.genre)
      console.log(this.state.movies)
      return this.renderMovies()
    }
  }
}

export default App;
