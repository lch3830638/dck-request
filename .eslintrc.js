module.exports = {
  root: true,
  globals: {
    uni: true
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
  ],
  parserOptions: { parser: 'babel-eslint' },
  rules: {
    'vue/attribute-hyphenation': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/no-unused-components': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-parsing-error': 0,
    "standard/no-callback-literal": 0,
    "vue/no-reserved-keys": 0,
    'comma-dangle': ['error', 'always-multiline'], // 对象或数组如果是多行,最后一个值后面加","
    'object-curly-newline': ['error', { // 对象属性间使用相同的换行符
      'multiline': true,
      'minProperties': 5,
    }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }], // 对象属性必须换行
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'no-new': 0,
    'no-console': 0,
    'no-tabs': 0,
    'no-var': 2,
    'no-delete-var': 2,
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    'semi': [
      2,
      'never',
      { 'beforeStatementContinuationChars': 'never' },
    ],
    'space-before-function-paren': ['error', {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "never"
    }],
    'prefer-const': [
      2,
      { 'ignoreReadBeforeAssign': false },
    ],
  }
}