// Results.js

import React from 'react';
import pf from 'petfinder-client';
import Pet from './Pet';

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
    const output = "full";
    const location = "San Francisco, CA"

    petfinder.pet.find({
      output,
      location
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

export default Results;