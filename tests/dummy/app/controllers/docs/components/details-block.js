import Controller from '@ember/controller';
 // BEGIN-SNIPPET details-block.js
export default Controller.extend({
  rows: [
    {
      label: 'Currency',
      value: 'Rupiah',
    },
    {
      label: 'Country',
      value: 'Indonesia',
    },
    {
      label: 'Population',
      value: '100000',
    },
  ],
});
// END-SNIPPET
