<template>
    <div class="factorial">
        <q-input v-model="input" type="text" label="Input" />
        <q-btn color="primary" icon="check" label="Calculate Factorial" @click="calculateFactorial" />
        <q-input v-model="result" type="text" label="Result" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: "",
                result: "",
            }
        },
        methods: {
            calculateFactorial() {
                this.result = this.input;
                for (let i = 1; i < this.input; i++) {
                    this.result *= i;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.factorial{
    padding: 20px;
}
.q-btn{
    margin-top: 20px;
}
</style>