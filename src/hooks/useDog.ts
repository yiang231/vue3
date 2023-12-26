import { onMounted, reactive } from 'vue'
import axios from 'axios'

export default function () {
    const dogs = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_4080.jpg'])
    const apiUrl = 'https://dog.ceo/api/breed/pembroke/images/random'

    async function getDog() {
        try {
            const ret = await axios.get(apiUrl)
            if (ret.data.status == 'success') {
                dogs.push(ret.data.message)
            }
        } catch (error) {
            alert(error)
        }
    }

    onMounted(() => {
        getDog()
    })
    return { dogs, getDog }
}
