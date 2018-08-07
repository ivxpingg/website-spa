module.exports = {
    // 此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    env: {
        // 此项指定环境的全局变量，下面的配置指定为node环境
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    // "off" -> 0 关闭规则
    // "warn" -> 1 开启警告规则
    // "error" -> 2 开启错误规则
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}