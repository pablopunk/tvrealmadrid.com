module.exports = {
  webpack (cfg) {
    cfg.plugins = cfg.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
    return cfg
  },
  async exportPathMap () {
    return {
      '/': { page: '/' }
    }
  }
}
