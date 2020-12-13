import { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  backdropHandler = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className={s.overlay} onClick={this.backdropHandler}>
        <img className={s.modal} src={src} alt={alt} />
      </div>
    );
  }
}

export default Modal;
