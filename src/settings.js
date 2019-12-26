module.exports = {
  title: '后台管理模板',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   * @description-zh 是否显示右侧设置pannael
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   * @description-zh 头部需要标签页
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   * @description-zh 头部是否fixed
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   * @description-zh 侧边栏是否显示logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
