import React, { Component } from 'react';
import { getMovies } from './servises/Api';
import { FilmsList } from './components/FilmsList/FilmsList';
import { Button } from './components/Button/Button';
import { Loader } from './components/Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    films: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.addFilms(page);
    }
  }

  componentDidMount() {
    const { page } = this.state;

    this.addFilms(page);
  }

  addFilms = page => {
    this.setState({ isLoading: true });

    getMovies(page)
      .then(respons => {
        this.setState(prevState => ({
          films: [...prevState.films, ...respons.results],
        }));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMoreFilms = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { films, isLoading } = this.state;

    return (
      <div>
        <FilmsList films={films} />
        {isLoading && <Loader />}
        {!isLoading && <Button onLoadMore={this.onLoadMoreFilms} />}
      </div>
    );
  }
}
