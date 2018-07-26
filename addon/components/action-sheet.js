import Component from '@ember/component';
import layout from '../templates/components/action-sheet';
import { PropTypes } from 'ember-prop-types';

const ESC_KEYCODE = 27;

const ActionSheet = Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    this.keyDownHandler = _keyDownHandler.bind(this);
    this.clickHandler = _clickHandler.bind(this);
    window.addEventListener('keydown', this.keyDownHandler);
    window.addEventListener('click', this.clickHandler);
    window.addEventListener('touchstart', this.clickHandler);
    document.querySelector('body').classList.add('tradegecko-ui-action-sheet--open');
  },

  willDestroyElement() {
    this._super(...arguments);
    window.removeEventListener('keydown', this.keyDownHandler);
    window.removeEventListener('click', this.clickHandler);
    window.removeEventListener('touchstart', this.clickHandler);
    document.querySelector('body').classList.remove('tradegecko-ui-action-sheet--open');
  },
});

function _keyDownHandler(event) {
  if (event.keyCode === ESC_KEYCODE) {
    this.hideModal();
  }
}

function _clickHandler(event) {
  if (event.target.className === 'tradegecko-ui-action-sheet') {
    this.hideModal();
  }
}

ActionSheet.propTypes = {
  hideModal: PropTypes.func.isRequired
};

export default ActionSheet;
