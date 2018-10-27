import { get, computed } from '@ember/object';

export default function prefix(depKey, prefixString) {
  return computed(depKey, function() {
    return prefixString + get(this, depKey);
  });
}
