<template>
    <div>
        <q-input v-model="input" type="text" label="Input" />
        <q-btn color="primary" icon="check" label="Check Prime" @click="checkPrime" />
        <q-input v-model="result" type="text" label="Result" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                result: '',
            }
        },
        methods: {
            checkPrime() {
                this.result = true;
                for (let i = 2; i < this.input; i++) {
                    if (this.input % i == 0) {
                        this.result = false;
                        break;
                    }
                    
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
div{
    padding: 20px;
}
</style>