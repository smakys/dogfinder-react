import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { connect } from 'react-redux'
import getBreeds from "./actionCreators/getBreeds";
import setLocation from "./actionCreators/setLocation";
import setAnimal from "./actionCreators/setAnimal";
import setBreed from "./actionCreators/setBreed";

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="search-params">
          <label htmlFor="location">
            Location
          <input
              id="location"
              onChange={this.props.handleLocationChange}
              value={this.props.location}
              placeholder="Location"
            />
          </label>
          <label htmlFor="animal">
            Animal
          <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option value="">All Animals</option>
              {ANIMALS.map(animal => {
                return <option key={animal} value={animal}>{animal}</option>
              })}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
          <select
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={this.props.breeds.length === 0}
            >
              <option></option>
              {this.props.breeds.map(breed => {
                return <option key={breed} value={breed}>{breed}</option>
              })}
            </select>
          </label>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}


/*
  destructured object as function param

  const mapStateToProps = (opts) => {
    const { breed, breeds, animal, location } = opts;
    return {
      breed,
      breeds,
      animal,
      location
    };
  }
*/
const mapStateToProps = ({ breed, breeds, animal, location }) => {
  return {
    breed,
    breeds,
    animal,
    location
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleAnimalChange(event) {
      dispatch(setAnimal(event.target.value));
      dispatch(getBreeds());
    },
    handleBreedChange(event) {
      dispatch(setBreed(event.target.value));
    },
    handleLocationChange(event) {
      dispatch(setLocation(event.target.value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);