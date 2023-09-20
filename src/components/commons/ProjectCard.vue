<script setup lang="ts">
import { Project } from '@/types';
import { ref } from 'vue';

const { project: props } = defineProps<{ project: Project }>();
const project = computed(() => {
  return props;
});
const { name, description, technologies, githubRepo, images } = project.value;
const isProjectInfoShown = ref(false);
const isScrolling = ref(false);

function showProjectInfo() {
  isProjectInfoShown.value = true;
}

function hideProjectInfo() {
  isProjectInfoShown.value = false;
}

function toggleProjectInfo() {
  if (!isScrolling.value) {
    isProjectInfoShown.value = !isProjectInfoShown.value;
  }
  isScrolling.value = false;
}

function handleTouchStart() {
  isScrolling.value = false;
}

function handleTouchMove() {
  isScrolling.value = true;
}
</script>

<template>
  <li class="bg-neutral max-w-2xl relative h-full">
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
      class="absolute transition left-0 bottom-0 w-full px-3 overflow-hidden bg-gradient-to-t from-gray-950"
      :class="{ 'top-0 bg-neutral bg-opacity-95': isProjectInfoShown }"
      @mouseenter="showProjectInfo"
      @mouseleave="hideProjectInfo"
      @touchend="toggleProjectInfo"
      @touchmove="handleTouchMove"
      @touchstart="handleTouchStart"
    >
      <div class="prose max-h-full overflow-y-auto">
        <h2
          class="text-2xl md:text-3xl"
          :class="[isProjectInfoShown ? 'my-4' : 'my-6']"
        >
          {{ name }}
        </h2>
        <div
          class="transition"
          :class="[
            'h-0 scale-y-0',
            { 'h-full scale-y-100': isProjectInfoShown },
          ]"
        >
          <p class="text-lg">
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
    </div>
  </li>
</template>
