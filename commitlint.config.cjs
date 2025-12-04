module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce lowercase in subject line
    'subject-case': [2, 'always', ['lower-case']],

    // Limit subject length to 72 characters
    'subject-max-length': [2, 'always', 72],

    // Require a type (feat, fix, chore, etc.)
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test', 'perf'],
    ],

    // Scope must not be empty (forces clarity)
    'scope-empty': [2, 'never'],

    // Disallow capital letters in type
    'type-case': [2, 'always', 'lower-case'],

    // Require a blank line before body
    'body-leading-blank': [1, 'always'],

    // Require a blank line before footer
    'footer-leading-blank': [1, 'always'],
  },
};
