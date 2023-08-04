import { onMounted, ref } from "vue"

export default function () {
    const client_height = ref(0)
    const client_width = ref(0)

    //浏览器信息
    function BrowserInfo() {
        var userLanguage = navigator.userLanguage;     // 用户在自己的操作系统上设置的语言（火狐没有）  
        var userAgent = navigator.userAgent;           //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform  
        var systemLanguage = navigator.systemLanguage; // 用户操作系统支持的默认语言（火狐没有）
        var info = "";
        info += "浏览器属性信息： " + userAgent + "<br />";
        info += "用户设置的操作系统语言： " + userLanguage + "<br />";
        info += "操作系统支持的默认语言： " + systemLanguage + "<br />";
        return info;
    }
    onMounted(() => {
        client_height.value = document.body.clientHeight
        client_width.value = document.body.clientWidth
    })
    return {
        client_height,
        client_width,
        BrowserInfo
    }
}
