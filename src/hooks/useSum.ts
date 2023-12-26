import { computed, ref } from 'vue'

export default function () {
    const sum = ref(0)
    const bigSum = computed(() => {
        return sum.value * 10
    })

    function changeSum() {
        sum.value += 1
    }

    return { sum, changeSum, bigSum }
}
