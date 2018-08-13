import { helper } from '@ember/component/helper';
import { isNone } from '@ember/utils';

export function humanize([ value ]) {
  if (isNone(value)) {
    return '';
  }
  return value
    .underscore()
    .split('_')
    .map(function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })
    .join(' ');
}

export default helper(humanize);
