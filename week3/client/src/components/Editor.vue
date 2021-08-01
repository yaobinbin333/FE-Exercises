<template>
  <div class="container">
    <div id="editor"></div>
    <demo id="demo" :isLoading="isDemoLoading" />
    <div id="run">
      <button @click="run">Run</button>
    </div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import axios from "axios";
import Demo from "@/components/Demo.vue";

export default {
  components: {
    Demo,
  },
  data() {
    return {
      editor: {},
      content:
          "<template>\n\t<div>\n\t\tThis is a demo.\n\t</div>\n</template>\n\n<style>\nbody {\n\tfont-size: 36px;\n}\n</style>\n",
      isDemoLoading: true,
    };
  },
  mounted() {
    this.initMonaco();
  },
  destroyed() {
    this.destroyEditor();
  },
  methods: {
    initMonaco() {
      this.editor = monaco.editor.create(document.getElementById("editor"), {
        value: this.content,
        automaticLayout: true,
        language: "html",
        fontSize: "18px",
        theme: "vs-dark",
      });
      this.isDemoLoading = true;
      axios
          .post("http://localhost:3000/run", {
            content: this.content,
          })
          .then((response) => {
            console.log(response);
            this.isDemoLoading = false;
          })
          .catch((error) => {
            console.log(error);
          });
      this.editor.onDidChangeModelContent(() => {
        this.content = this.editor.getValue();
      });
    },

    destroyEditor() {
      this.editor.dispose();
    },

    run() {
      this.isDemoLoading = true;
      axios
          .post("http://localhost:3000/update", {
            content: this.content,
          })
          .then((response) => {
            console.log(response);
            console.log("reload");
            this.isDemoLoading = false;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>

<style soped>
.container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7fr 1fr;
  height: calc(100vh - 50px);
}

#editor {
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 0;
  text-align: left;
  border: 1px solid #1e1e1e;
}

#demo {
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: 0;
  /* border-top: 12px solid #20232a; */
  border-bottom: 12px solid #20232a;
  /* border-right: 12px solid #20232a; */
}

#run {
  grid-column: 1 / span 2;
  grid-row-start: 2;
  grid-row-end: 2;

  display: flex;
  align-items: center;
  justify-content: center;
}

#run button {
  margin: 0 auto;
  height: 36px;
  width: 108px;
  background-color: #0097a7;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:active {
  background-color: #0097a7;
  box-shadow: 0 1px #666;
  transform: translateX(1px) translateY(1px);
}
</style>
