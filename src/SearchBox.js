import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';

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
      <Consumer>
        {context => (
          <form onSubmit={this.handleFormSubmit}>
            <div className="search-params">
              <label htmlFor="location">
                Location
              <input
                  id="location"
                  onChange={context.handleLocationChange}
                  value={context.location}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Animal
              <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
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
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={context.breeds.length === 0}
                >
                  <option></option>
                  {context.breeds.map(breed => {
                    return <option key={breed} value={breed}>{breed}</option>
                  })}
                </select>
              </label>
              <button>Submit</button>
            </div>
          </form>
        )}
      </Consumer>
    )
  }
}

export default SearchBox;