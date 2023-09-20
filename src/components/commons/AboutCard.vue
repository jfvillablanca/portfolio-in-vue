<script setup lang="ts">
const props = defineProps<{
  header: string;
  paragraph: string;
  aos: string;
}>();
const { header, paragraph, aos } = computed(() => props).value;
</script>

<template>
  <article
    :data-aos="aos"
    class="prose text-base-300 rounded-lg p-6 mb-6 max-w-md md:text-lg lg:max-w-lg"
  >
    <h2 class="prose-2xl text-base-300 font-bold">
      {{ header }}
    </h2>
    <p class="prose-xl">
      {{ paragraph }}
    </p>
  </article>
</template>
