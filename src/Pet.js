// Pet.js

import React from "react";
import { Link } from '@reach/router';

class Pet extends React.Component {
  // Every React Class component has to have render() method. 100% of the time.
  // render() to return markup... result of React.createElement call.
  // no side effects. Can't modify state. Can't setState.
  render() {

    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn');
    }

    let hero = photos.length ? photos[0].value : 'http://placecorgi.com/300/300';

    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt="{name}" />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{animal} - {breed} - {location}</h2>
        </div>
      </Link>
    )
  }
}

export default Pet;