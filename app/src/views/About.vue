<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <input type="textarea" v-model="input" @keydown.enter="submit" />
      {{ text }}
    </div>
    <video controls>
      <source src="/jamaican-bowlers.ogv">
    </video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  text = "";
  input = "";

  submit() {
    this.text += this.input;
    this.input = "";
  }
}
</script>
