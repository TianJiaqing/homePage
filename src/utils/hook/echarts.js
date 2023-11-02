let _ = false

function init_echarts(callback) {
    if (_) {
        callback()
    } else {
        let script = document.createElement("script");
        script.type = "text/javascript";
        let url =
            "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js";
        script.src = url;
        document.body.appendChild(script);
        script.onload = () => {
            _ = true
            callback()
        }
    }

}
/* 
渲染echarts图表
参数：dom，  图表容器
参数：option 图表配置项
 */
function set_echarts(dom, option) {
    let content = dom;
    content.removeAttribute("_echarts_instance_")
    const myChart = echarts.init(content);
    myChart.clear();
    option && myChart.setOption(option);
}

export default function index(dom, option) {
    init_echarts(() => {
        set_echarts(dom, option)
    })
}