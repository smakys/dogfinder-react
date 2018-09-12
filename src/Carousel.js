import React from 'react';

class Carousel extends React.Component {

  // class properties
  state = {
    photos: [],
    active: 0
  }

  // { media } is being destructured from props
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn');
    }

    return { photos };
  }

  /* arrow function possible with babel-plugin-transform-class-properties */
  handleIndexClick = event => {
    this.setState({
      active: parseInt(event.target.dataset.index, 10)
    });
  }
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        {(() => {
          if (photos.length) {
            return <img src={photos[active].value} alt="primary animal" />
          }
          return '';
        })()}
        <div className="carousel-smaller">
          {/* implicit return here */}
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              src={photo.value}
              data-index={index}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;