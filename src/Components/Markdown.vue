<template>
  <Markdown :source="source" class="markdown"></Markdown>
</template>

<script>
import Markdown from 'vue3-markdown-it';

export default {
  props: ['source'],
  components: {
    Markdown
  }
};
</script>
