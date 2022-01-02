module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // 코드검사 es-lint 플러그인
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-essential', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    // 코드 분석
    parser: 'babel-eslint'
  },
  rules: {
    // 코드 규칙정의, 원하는대로 수정가능
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  }
}
