exports.headingsBase = function (config) {
  return {
    h1: { fontSize: config('theme.fontSize.4xl') },
    h2: {
      fontSize: config('theme.fontSize.3xl'),
      fontWeight: config('theme.fontWeight.bold'),
    },
    h3: { fontSize: config('theme.fontSize.2xl') },
    h4: { fontSize: config('theme.fontSize.xl') },
    h5: { fontSize: config('theme.fontSize.lg') },
    h6: { fontSize: config('theme.fontSize.base') },
  };
};

exports.heading = function (config) {
  return {
    '.heading': {
      paddingBottom: config('theme.spacing.10'),

      '&.page-heading': {
        borderBottomWidth: config('theme.borderWidth.default'),
        borderBottomColor: config('theme.colors.gray'),
      },

      '&.article-heading': {
        width: "280px",
        flexShrink: 0,
        marginRight: config('theme.spacing.16'),
      },

      'h2': {
        textTransform: 'uppercase'
      },

      'h5': {
        textTransform: 'capitalize',
        fontWeight: config('theme.fontWeight.light')
      }
    }
  }
};
