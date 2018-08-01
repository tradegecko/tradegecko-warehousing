import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/button';
import { PropTypes } from 'ember-prop-types';

const Button = Component.extend({
  layout,
  tagName: 'button',
  classNames: 'tradegecko-ui-button',
  classNameBindings: ['typeClass'],
  attributeBindings: ['type', 'disabled', 'role', 'aria-label'],
  role: 'button',

  typeClass: computed('buttonType', function() {
    return `tradegecko-ui-button--${this.get('buttonType')}`;
  }),

  click() {
    this.onClick();
  },
});

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
  'aria-label': PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  buttonType: 'primary',
  disabled: false,
  onClick() {},
};

export default Button;
