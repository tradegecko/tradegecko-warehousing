import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import { isEmpty } from '@ember/utils';

const NUMERIC_PROPS = ['width', 'height', 'opacity'];
const COLOR_PROPS   = ['background-color', 'color'];
const COLOR_REGEXP  = /^#([a-f\d]{3}){1,2}$/i;
const LEGIT_UNIT    = ['', '%', 'px'];

export default helper(function([property, value, unit = '']) {
  if (isEmpty(value)) {
    return;
  }

  if (!LEGIT_UNIT.includes(unit)) {
    throw `Unsupported CSS unit ${unit}`;
  }

  let parsedValue;

  if (NUMERIC_PROPS.includes(property)) {
    parsedValue = +value;
  } else if (COLOR_PROPS.includes(property)) {
    if (COLOR_REGEXP.test(value)) {
      parsedValue = value;
    } else {
      throw `Unsupported CSS color ${value}`;
    }
  } else {
    throw `Unsupported CSS property ${property}`;
  }

  return htmlSafe(`${property}: ${parsedValue}${unit}`);
});
