<template>
    <div>
        {{name}} - {{age}}
        <q-btn label="Change Age" @click="setAge" />
    </div>
</template>

<script>
    export default {
        methods: {
            setAge() {
                this.$store.commit('test/setAge', 50);
            }
        },
        computed: {
            name() {
                return this.$store.state.test.name; 
            },
            age() {
                return this.$store.state.test.age; 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>