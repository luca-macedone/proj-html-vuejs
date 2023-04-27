import { reactive } from "vue";

export const state = reactive({
    getImageUrl(name) {
        return new URL(`/src/assets/img/${name}`, import.meta.url).href
    }
});