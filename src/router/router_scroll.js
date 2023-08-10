let content = null;
const scroll_top = () => {
    if (!content) {
        content = document.querySelector("#body_scroll_full")
    }
    content.scrollTop = 0;
}
export default scroll_top