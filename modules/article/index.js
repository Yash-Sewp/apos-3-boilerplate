module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
    publicApiProjection: {
      title: 1,
      _url: 1,
      description: 1
    }
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      subtitle: {
        label: 'Subtitle',
        type: 'string'
      },
      _featureImage: {
        label: 'Feature image',
        help: 'An image which appears as the feature image on the article page',
        type: 'relationship',
        withType: '@apostrophecms/image',
        max: 1,
        builders: {
          project: {
            title: 1,
            alt: 1,
            attachment: 1,
            slug: 1,
            _url: 1
          }
        }
      },
      description: {
        label: 'Description',
        help: 'A short description which will appear on the article card',
        type: 'string',
        textarea: true
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['title', 'subtitle', '_featureImage', 'description']
      }
    }
  }
};
