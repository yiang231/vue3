/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    // https://eslint.vuejs.org/rules/multi-word-component-names.html
    // ignores (string[]) ... The component names to ignore. Sets the component name to allow.
    // rules: {
    //     'vue/multi-word-component-names': ['error', {
    //         'ignores': []
    //     }]
    // },
    // overrides: [
    //     {
    //         files: ['src/pages/**'],
    //         // 给上面匹配的条件指定规则
    //         rules: {
    //             'vue/multi-word-component-names': 'off'
    //         }
    //     }
    // ]
}
