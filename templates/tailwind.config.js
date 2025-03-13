/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  safelist: [
    { pattern: /^\[data-status="(PENDENTE|CONCLUIDA|EM ANDAMENTO|INFERIDO|CANCELADO)"\]$/, }
  ],
  content: [
    './components/**/*.html',
    './emails/**/*.html',
    './layouts/**/*.html',
  ]
}
