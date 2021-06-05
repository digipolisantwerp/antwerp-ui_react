module.exports = (api) => {
  api.cache(false);
  return{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": ">.25%"
      }
    ],
    "@babel/preset-flow",
    "@babel/preset-react"
  ],
  env: {
    test: {
      presets: [
        "@babel/preset-flow",
        "@babel/preset-react"
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            "regenerator": true,
          }
        ]
      ]
    }
  }
  }
}
