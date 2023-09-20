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
      <ul class="grid">
        <li
          v-for="({ header, paragraph, className, aos }, index) in aboutCards"
          :key="header"
          :class="{ 'place-self-end': (index + 1) % 2 === 0 }"
        >
          <AboutCard
            :header="header"
            :paragraph="paragraph"
            :class="className"
            :aos="aos"
          />
        </li>
      </ul>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col min-h-screen -scroll-mt-3">
      <h1 id="projects-panel" class="text-3xl md:text-5xl pb-5">Projects</h1>
      <ul class="flex flex-col place-items-center">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </ul>
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
import { Project } from '@/types';
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '@/components/commons/GenericPanel.vue';
import quizzical1 from '../assets/project-screenshots/quizzical/quizzical-1.png';
import AboutCard from '@/components/commons/AboutCard.vue';
import ProjectCard from '@/components/commons/ProjectCard.vue';

export default {
  components: {
    GenericPanel,
    AboutCard,
    ProjectCard,
  },
  setup() {
    definePageMeta({
      layout: 'default',
    });

    useHead({
      title: "jmfv's portfolio",
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    });
    const aboutCards = [
      {
        header: 'The Perennial Learner',
        paragraph:
          "I thrive on tackling complex challenges, whether it's coding or jazz theory. A quick study, I approach every endeavor with curiosity and a thirst for knowledge.",
        className: 'bg-lime-300',
        aos: 'fade-up',
      },
      {
        header: 'From circuits to code',
        paragraph:
          "Though my software development journey is recent, my programming journey began early and blossomed during my university days. With an electronics engineering background, I've explored the rudiments of computing, from data abstractions to physical circuitry.",
        className: 'bg-secondary',
        aos: 'fade-down',
      },
      {
        header: 'Off-Duty Grooves',
        paragraph:
          "When not immersed on a new project or tinkering with Nix, you'll find me self-teaching guitar and bass, diving into music theory, and transcribing jazz solos or comping to bossa rhythms.",
        className: 'bg-accent',
        aos: 'fade-up',
      },
    ];
    const projects: Project[] = [
      {
        name: 'Bourne Task App',
        description:
          'Full-stack task management app inspired by Trello, featuring a robust NestJS/Express CRUD API backend, complemented by a Vite/React frontend. The frontend application efficiently manages its state asynchronously using Tanstack Query and the backend authenticates users with the PassportJS middleware',
        technologies: ['React'],
        githubRepo: 'https://github.com/jfvillablanca/bourne-task-app',
        images: [quizzical1],
      },
      {
        name: 'Converz Real Time Chat App',
        description:
          "Real-time chat full-stack application, replicating Discord's chat room functionality, by implementing a monorepo full-stack solution. This involved using vanilla Express and the Socket.IO library to enable seamless and bidirectional real-time communication channels",
        technologies: ['React'],
        githubRepo: 'https://github.com/jfvillablanca/converz-rtc',
        images: [quizzical1],
      },
      {
        name: "Let's get quizzical",
        description:
          'A quiz app based on React that retrieves quiz items from the Open Trivia Database through Fetch API calls.',
        technologies: ['React'],
        githubRepo: 'https://github.com/jfvillablanca/lets-get-quizzical',
        images: [quizzical1],
      },
    ];
    return { aboutCards, projects };
  },
};
</script>
