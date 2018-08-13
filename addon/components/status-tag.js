import Component from '@ember/component';
import layout from '../templates/components/status-tag';
import prefix from '../utils/computed/prefix';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['tradegecko-ui-status-tag'],
  classNameBindings: ['statusClass'],
  statusClass: prefix('status', 'tradegecko-ui-status-tag--'),
});
