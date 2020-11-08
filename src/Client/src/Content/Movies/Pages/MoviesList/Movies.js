import React, { Component,ReactDOM } from 'react';
import MovieItem from './MovieItem';
import Grid from '@material-ui/core/Grid';

const settings = require('../../../../settings.json');

class Movies extends Component {

  constructor(props) {
    super(props);
    this.loading = (
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    );
    this.state = { renderingItem: "Loading"};
    
    this.videoPage = this.props.videoPage; 
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.selectedItem = 0;
  }

  componentWillMount() {
    this.getMoviesList();
    document.addEventListener('keydown', this.handleKeyPress);
  }

  getMoviesList() {
    fetch(`${settings.apiServer}/allMovies`)
      .then((response) => {
        response.json()
          .then((jsonResp) => {
            const table = [];
            this.setState({ renderingItem: jsonResp });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleKeyPress(event) {
    const elements = document.getElementsByClassName('movie-item');
    const focusedElement = document.getElementsByClassName('focused');
    if (event.keyCode === 39
      && focusedElement.length !== 0
      && this.selectedItem !== elements.length - 1) {
      this.selectedItem += 1;
    }

    if (event.keyCode === 37
      && focusedElement.length !== 0 
      && this.selectedItem !== 0) {
      this.selectedItem -= 1;
    }

    if (event.keyCode === 13
      && focusedElement.length !== 0) {
      focusedElement[0].click();
    }
    if (focusedElement.length !== 0) {
      focusedElement[0].classList.remove('focused');
    }
    elements[this.selectedItem].classList.add('focused');
  }

  getChildrenStyle() {
    return {
      width: (1000 - 18) / 2,
      height: parseInt(Math.random() * 20 + 12) * 10,
      backgroundColor: 'rgb(92, 67, 155)',
      paddingTop: 20,
      borderRadius: 8,
    };
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.state.containerWidth || document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  }

  render() {
    if (this.state.renderingItem === "Loading") {
      return <div>loading...</div>;
    }
    return (
      <div>
         <Grid container spacing={1}>
        {
          this.state.renderingItem.map((movie, index) => {
            return (
              <Grid item xs key={index}>
               <MovieItem
                key={index}
                id={index}
                name={movie.title}
                year={movie.year}
                url={movie}
                openVideo={this.videoPage}
              />
              </Grid>
            );
          })
        }
        </Grid>
    </div>
    );
  }
}
export default Movies;
