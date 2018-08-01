import Component from '@ember/component';
import layout from '../templates/components/details-block';
import { PropTypes } from 'ember-prop-types';

const DetailsBlock = Component.extend({ layout });

DetailsBlock.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

DetailsBlock.defaultProps = {
  rows: [],
};

export default DetailsBlock;
