module.exports = {
  env: {
    test: {
      presets: [['@babel/env', { targets: { node: true } }], '@babel/react'],
    },
  },
  presets: ['@babel/env', '@babel/react'],
};
