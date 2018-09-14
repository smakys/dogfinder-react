// Results.js

import React from 'react';
import pf from 'petfinder-client';
import Pet from './Pet';
import SearchBox from './SearchBox';
import { Consumer } from './SearchContext';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.search();
  }

  search = () => {
    const { location, animal, breed } = this.props.searchParams;

    petfinder.pet.find({
      output: 'full',
      location,
      animal,
      breed
    })
      .then(data => {
        let pets;
        const petsData = data.petfinder.pets;

        if (petsData && petsData.pet) {
          if (Array.isArray(petsData.pet)) {
            pets = petsData.pet;
          } else {
            pets = [petsData.pet]
          }
        } else {
          pets = [];
        }

        // shallow merge - will only update property and not entire object
        this.setState({
          pets
        });
      });

  }
  render() {
    return (
      <div className="search">
        <SearchBox search={this.search}></SearchBox>
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(', ');
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            ></Pet>
          )
        })}
      </div>
    )
  }
}

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context}></Results>}
    </Consumer>
  )
}