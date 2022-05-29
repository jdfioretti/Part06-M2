import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions/index.js";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map((m) => 
            <div key={m.imdbID}>
              <Link to={`/movie/${m.imdbID}`}>
                {m.title}
                </Link>
              <button onClick={() => this.props.removeMovieFavorite(m.imdbID  )}>X</button>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavorites,
  };
};

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
