import { readOnly } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEqual } from '@ember/utils';
import layout from '../templates/components/labeled-radio-button';

export default Component.extend({
  tagName: 'label',
  layout,
  attributeBindings: ['for'],
  classNameBindings: ['checked'],
  classNames: ['ember-radio-button'],
  defaultLayout: null, // ie8 support

  checked: computed('groupValue', 'value', function() {
    return isEqual(this.get('groupValue'), this.get('value'));
  }).readOnly(),

  'for': readOnly('radioId'),

  actions: {
    innerRadioChanged(value) {
      this.sendAction('changed', value);
    }
  }
});
