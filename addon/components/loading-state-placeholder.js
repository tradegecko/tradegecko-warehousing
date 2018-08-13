import Component from '@ember/component';
import layout from '../templates/components/loading-state-placeholder';
import { PropTypes } from 'ember-prop-types';
import { computed } from '@ember/object';

const LoadingStatePlaceholder = Component.extend({
  layout,

  numberOfYields: computed('count', function() {
    return Array.from(new Array(this.count));
  }),
});

LoadingStatePlaceholder.propTypes = {
  count: PropTypes.number,
};

LoadingStatePlaceholder.defaultProps = {
  count: 1,
};

export default LoadingStatePlaceholder;
