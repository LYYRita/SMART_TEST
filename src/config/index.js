// 环境配置封装
const env =
    import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/575faf997ed87794a60b0b5a126aeb56/api'
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/575faf997ed87794a60b0b5a126aeb56/api'
    },
    prod: {
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/575faf997ed87794a60b0b5a126aeb56/api'
    },
}
export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]
}