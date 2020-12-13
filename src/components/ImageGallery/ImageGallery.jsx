import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={s.imageGallery}>
        {this.props.gallery.map(item => {
          return <ImageGalleryItem imageData={item} key={item.id} />;
        })}
      </ul>
    );
  }
}

export default ImageGallery;
