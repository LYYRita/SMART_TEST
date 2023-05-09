/***
 * Storage 二次封装
 */
import config from "../config"
export default {
    setItem(key, val) {
        let storage = this.getStorage()
        storage[key] = val //storage上加一个变量不能用.
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    getItem(key) {
        return this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}")
    },
    clearItem(key) {
        let storage = this.getStorage()
        delete storage[key]
    },
    clearAll() {
        window.localStorage.clear()
    }
}