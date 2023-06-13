import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default function () {
    const route = useRoute();
    const router = useRouter();
    return {
        route,
        router,
        routerPush: router.push
    }
}