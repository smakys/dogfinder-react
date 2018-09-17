// Details.js

import React from 'react';
import Loadable from 'react-loadable';
import { navigate } from '@reach/router';
import pf from 'petfinder-client'
import Carousel from './Carousel';
import Modal from './Modal';


const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const LoadableModalContent = Loadable({
  loader: () => import('./AdoptModalContent'),
  loading() {
    return (
      <h1>Loading adopt modal content...</h1>
    )
  }
});

class Details extends React.Component {
  // constructor(props) {
  //   super(props); // must call constructor of Parent (React.Component) with our props when overriding constructor

  //   this.state = {
  //     loading: true
  //   };
  // }

  // possible with babel-plugin-transform-class-properties
  state = {
    loading: true,
    showModal: false
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  componentDidMount() {
    petfinder.pet.get({
      output: 'full',
      id: this.props.id
    })
      .then(data => {
        let breed;
        const pet = data.petfinder.pet;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(', ');
        } else {
          breed = pet.breeds.breed;
        }

        const { name, animal, description, media } = pet;
        const location = `${pet.contact.city}, ${pet.contact.state}`;

        this.setState({
          name,
          animal,
          description,
          media,
          breed,
          location,
          loading: false
        });
      })
      .catch(() => {
        navigate('/');
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { name, animal, breed, location, description, media, showModal } = this.state;

    return (
      <div className="details">
        <Carousel media={media}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>{animal} - {breed} - {location}</h2>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <LoadableModalContent></LoadableModalContent>
              </Modal>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default Details;