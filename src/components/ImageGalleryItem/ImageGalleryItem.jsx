import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal';

class ImageGalleryItem extends Component {
  state = {
    openModal: false,
    largeSrc: null,
  };

  imageClickHandler = e => {
    this.setState({
      largeSrc: e.target.dataset.largeimg,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { openModal: !prevState.openModal };
    });
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props.imageData;
    const { openModal, largeSrc } = this.state;
    return (
      <>
        <li className={s.imageGalleryItem}>
          <img
            src={webformatURL}
            alt={id}
            className={s.image}
            data-largeimg={largeImageURL}
            onClick={this.imageClickHandler}
          />
        </li>
        {openModal && <Modal onClose={this.toggleModal} src={largeSrc} />}
      </>
    );
  }
}

export default ImageGalleryItem;
