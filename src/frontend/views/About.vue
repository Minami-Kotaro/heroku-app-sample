<template>
  <div class="about">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in memos" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.title }}</td>
          <td>{{ row.text }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
@Component({
  name: "app",
})
export default class extends Vue {
  memos: { id: number; title: string; text: string }[] = [];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async created() {
    const res = await axios.get("http://localhost:3000/api/version");
    this.memos = res.data.map(
      (x: { id: number; title: string; text: string }) => ({
        id: x.id,
        title: x.title,
        text: x.text,
      })
    );
  }
}
</script>
