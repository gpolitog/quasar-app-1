// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development

    'padded-blocks': ["error", "always"],

    'indent': 0,

    'no-tabs': 0,

    'no-new': 0,

    'no-duplicate-imports': 0,

    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-extra-parens': 0,

    'no-undef': 0,

    'no-mixed-spaces-and-tabs': 0,

    'eqeqeq': 0

  }

}
