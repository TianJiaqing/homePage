class _ {
    constructor() {
        this.path_name = null
    }
    set_path_name(str) {
        this.path_name = str
    }
    get_path_name() {
        return this.path_name
    }
}
const path_name = new _()
export default {
    set_path_name: path_name.set_path_name,
    get_path_name: path_name.get_path_name
}