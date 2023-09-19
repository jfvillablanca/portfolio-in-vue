<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-xl md:max-w-3xl">
        <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6">
          Hello, I am Jann Marc!
        </h1>
        <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg mb-6">
        </p>
      </div>
    </div>
  </div>

  <generic-panel>
    <div class="flex flex-col min-h-screen">
      <h1 id="about-panel" class="text-3xl md:text-5xl pb-5">About</h1>
      <p class="mb-3 max-w-sm md:text-lg lg:max-w-md">
        <span class="font-bold">The Perennial Learner: </span> I thrive on
        tackling complex challenges, whether it's coding or jazz theory. A quick
        study, I approach every endeavor with curiosity and a thirst for
        knowledge.
      </p>
      <p class="mb-3 max-w-sm md:text-lg lg:max-w-md">
        <span class="font-bold">From circuits to code: </span>Though my software
        development journey is recent, my programming journey began early and
        blossomed during my university days. With an electronics engineering
        background, I've explored the rudiments of computing, from data
        abstractions to physical circuitry.
      </p>
      <p class="mb-3 max-w-sm md:text-lg lg:max-w-md">
        <span class="font-bold">Off-Duty Grooves: </span>When not immersed on a
        new project or tinkering with Nix, you'll find me self-teaching guitar
        and bass, diving into music theory, and transcribing jazz solos or
        comping to bossa rhythms.
      </p>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col min-h-screen -scroll-mt-3">
      <h1 id="projects-panel" class="text-3xl md:text-5xl pb-5">Projects</h1>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col min-h-screen">
      <h1 id="contact-panel" class="text-3xl md:text-5xl pb-5">Contact</h1>
      <p class="md:text-lg">
      </p>
    </div>
  </generic-panel>
</template>

<script lang="ts">
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel.vue';

export default {
  components: {
    GenericPanel,
  },
  setup() {
    definePageMeta({
      layout: 'default',
    });

    useHead({
      title: "jmfv's portfolio",
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    });

    return {};
  },
};
</script>
