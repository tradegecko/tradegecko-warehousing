import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { get, computed } from '@ember/object';
import layout from '../templates/components/progress-bar';

const ProgressBar = Component.extend({
  layout,
  classNames: ['tradegecko-ui-progress-bar'],

  fillWidth: computed('progress', 'max', function() {
    return Math.min(100, (+get(this, 'progress') / +get(this, 'max')) * 100);
  }),
});

ProgressBar.propTypes = {
  progress: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

ProgressBar.defaultProps = {
  progress: 0,
  max: 100,
};

export default ProgressBar;
