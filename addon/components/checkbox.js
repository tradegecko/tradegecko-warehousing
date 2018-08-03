import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import prefix from '../utils/computed/prefix';
import layout from '../templates/components/checkbox';

const Checkbox = Component.extend({
  layout,
  classNames: ['tradegecko-ui-checkbox'],
  classNameBindings: [
    'disabled:tradegecko-ui-checkbox--disabled',
    'checked:tradegecko-ui-checkbox--checked',
  ],
  uniqueID: prefix('elementId', 'tradegecko-ui-checkbox_'),

  change(event) {
    if (this.onChange && !this.get('disabled')) {
      this.onChange(event);
    }
  },
});

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default Checkbox;
