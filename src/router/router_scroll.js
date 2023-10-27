let content = null;
let _ = {}
const scroll_top = (key) => {
    let height = 0
    if(_[key])
    {
        height = _[key]
    }
    if (!content) {
        content = document.querySelector("#body_scroll_full")
    }
    _[key] = content.scrollTop
    content.scrollTop = height;
}
export default scroll_top