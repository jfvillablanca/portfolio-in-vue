<script setup lang="ts">
import { Project } from '@/types';
import { ref } from 'vue';

const { project: props } = defineProps<{ project: Project }>();
const project = computed(() => {
  return props;
});
const { name, description, technologies, githubRepo, images } = project.value;
const isProjectInfoShown = ref(false);

function showProjectInfo() {
  isProjectInfoShown.value = true;
}

function hideProjectInfo() {
  isProjectInfoShown.value = false;
}

function toggleProjectInfo() {
  isProjectInfoShown.value = !isProjectInfoShown.value;
}
</script>

<template>
  <li
    class="bg-neutral max-w-md relative"
    @mouseenter="showProjectInfo"
    @mouseleave="hideProjectInfo"
    @touchstart="toggleProjectInfo"
  >
    <ul class="carousel carousel-center">
      <li
        v-for="image in images"
        :key="image"
        class="relative carousel-item w-full"
      >
        <!-- Blurred background -->
        <figure class="absolute h-full inset-0 overflow-hidden">
          <img :src="image" class="h-full object-cover blur-lg brightness-50" />
        </figure>
        <!-- Centered image -->
        <figure
          class="flex items-center justify-center relative"
          :class="[{ 'blur-[2px]': isProjectInfoShown }]"
        >
          <img :src="image" class="object-contain max-h-full max-w-full" />
        </figure>
      </li>
    </ul>
    <div
      class="absolute transition-all left-0 bottom-0 w-full bg-neutral bg-opacity-80 px-3 overflow-hidden"
      :class="[{ 'top-0': isProjectInfoShown }]"
    >
      <h2 class="text-2xl py-6">
        {{ name }}
      </h2>
      <div
        class="transition"
        :class="['h-0 scale-y-0', { 'h-full scale-y-100': isProjectInfoShown }]"
      >
        <p class="text-md">
          {{ description }}
        </p>
        <a :href="githubRepo" class="link">Source Code</a>
        <ul class="card-actions justify-end">
          <li
            v-for="tech in technologies"
            :key="tech"
            class="badge badge-outline p-3 text-lg"
          >
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>
