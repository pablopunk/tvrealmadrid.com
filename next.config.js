const webpack = require('webpack')

module.exports = {
  webpack: config => {
    const plugins = config.plugins || []
    plugins.push(new webpack.IgnorePlugin(/^electron$/))
    config.plugins = plugins
    return config
  }
}
