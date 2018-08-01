import Component from '@ember/component';
import layout from '../templates/components/summary-line-item';
import { PropTypes } from 'ember-prop-types';

const SummaryLineItem = Component.extend({ layout });

SummaryLineItem.propTypes = {
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  quantityLabel: PropTypes.string.isRequired,
  imageAltText: PropTypes.string,
  imageThumbnailURL: PropTypes.string.isRequired,
};

SummaryLineItem.defaultPropes = {
  imageAltText: '',
}

export default SummaryLineItem;
