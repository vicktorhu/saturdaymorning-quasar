<template>
  <div>
    <q-input v-model="a" label="a" />
    <q-input v-model="b" label="b" />
    <q-input v-model="c" label="c" />
    <q-btn color="primary" label="Calculate" @click="calculate" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "",
      b: "",
      c: "",
    };
  },
  methods: {
    calculate() {
      if (this.a == "" && this.b != "" && this.c !== "") {
        this.a = Math.sqrt(this.c ** 2 - this.b ** 2);
      } else if (this.a != "" && this.b == "" && this.c !== "") {
        this.b = Math.sqrt(this.c ** 2 - this.a ** 2);
      } else if (this.a != "" && this.b != "" && this.c == "") {
        this.c = Math.sqrt(this.a ** 2 + this.b ** 2);
      } else if (this.a != "" && this.b != "" && this.c != "") {
        this.c = Math.sqrt(this.a ** 2 + this.b ** 2);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.q-btn {
  margin-top: 10px;
}
</style>