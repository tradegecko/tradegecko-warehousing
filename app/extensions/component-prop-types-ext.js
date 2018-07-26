import Component from '@ember/component';

Component.reopen({
  getDefaultProps() {
    return Object.assign({}, this.constructor.defaultProps || {});
  },
});
