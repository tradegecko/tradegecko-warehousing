import Component from '@ember/component';
import layout from '../templates/components/action-sheet-dropdown';

const ActionSheetDropdown = Component.extend({
  layout,

  actions: {
    close(dropdown) {
    },

    onPrimary(selected) {
      this.onChange(selected);
    }
  }
});

ActionSheetDropdown.propTypes = {

};

ActionSheetDropdown.defaultProps = {
  primaryButtonLabel: 'Apply',
  secondaryButtonLabel: 'Cancel'
};

export default ActionSheetDropdown;
