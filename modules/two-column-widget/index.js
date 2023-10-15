module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Two Column Widget'
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string'
      }
    }
  }
};
