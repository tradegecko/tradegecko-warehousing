import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import { PropTypes } from 'ember-prop-types';
import layout from '../templates/components/scanner-increment-modal';

const ScannerIncrementModal = Component.extend({
  layout,
  classNames: ['tradegecko-ui-scanner-increment-modal'],
  inputValue: oneWay('scanIncrement'),

  actions: {
    handleSave() {
      this.set('scanIncrement', parseFloat(this.get('inputValue')));
      this.hideModal();
    },
  },
});

ScannerIncrementModal.propTypes = {
  inputValue: PropTypes.number.isRequired,
};

ScannerIncrementModal.defaultProps = {
  inputValue: null,
};

export default ScannerIncrementModal;
