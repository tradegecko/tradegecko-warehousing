import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';
import { computed } from '@ember/object';
import { PropTypes } from 'ember-prop-types';
import layout from '../templates/components/quantity-input-modal';

const QuantityInputModal = Component.extend({
  layout,
  classNames: ['tradegecko-ui-quantity-input-modal'],
  inputValue: oneWay('inputQuantity'),

  pendingQuantity: computed('inputValue', 'maxQuantity', function() {
    return this.get('maxQuantity') - this.get('inputValue');
  }),

  actions: {
    handleSave() {
      this.set('inputQuantity', parseFloat(this.get('inputValue')));
      this.hideModal();
    },
  },
});

QuantityInputModal.propTypes = {
  inputQuantity: PropTypes.number.isRequired,
};

QuantityInputModal.defaultProps = {
  inputQuantity: 0,
};

export default QuantityInputModal;
