/**
 * API管理
 */
import request from "../utils/request"
export default {
    login(params) {
        request({
            url: '/users/login',
            data: params,
            mock: false
        })

    }
}