// import _ from 'lodash'

async function component() {
  var element = document.createElement('div')

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // btn.innerHTML = 'Click me and check the console'
  // btn.onclick = printMe
  // element.appendChild(btn)

  /**
   * 使用动态加载引入lodash
   */
  const { default: _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  
  return element
}

component().then(component => {
  document.body.appendChild(component)
})
