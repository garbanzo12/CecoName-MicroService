module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        modules: false 
      }
    ]
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }], // Plugin para balbe para que soporte los decorators
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-transform-private-methods",{loose: true}] // Plugin para soportar metodos privados
  
  ]
};