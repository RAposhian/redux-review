import React from 'react'
import styles from './styles'
import {connect} from 'react-redux';
import {updateMovieList} from '../ducks/moviesReducer';

const MovieConfirm = props => {
  const {title, rating, poster} = props;
  // console.log(props)
  const confirmMovie = () => {
    props.updateMovieList({title, rating, poster})
    props.history.push('/list')
  }

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${title} - ${rating}`}</p>
      <img src={poster} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = reduxState => {
  const {title, poster, rating} = reduxState.moviesReducer
  // console.log(reduxState)
  return {
    title,
    poster,
    rating
  }
}

export default connect(mapStateToProps, {updateMovieList})(MovieConfirm);