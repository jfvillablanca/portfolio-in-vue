<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="prose max-w-xl md:max-w-3xl">
        <h1
          data-aos="fade-down"
          class="text-4xl font-bold mb-6 md:text-6xl lg:text-7xl"
        >
          Hello, I am Jann Marc!
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          class="mb-6 md:text-2xl lg:text-4xl"
        >
          I turn ideas into lines of code one
          <span class="font-mono">git commit</span> at a time
        </p>
      </div>
    </div>
  </div>

  <generic-panel>
    <div class="flex flex-col min-h-screen">
      <div class="prose">
        <h1 id="about-panel" class="text-3xl md:text-5xl pb-5">About</h1>
      </div>
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
      <div class="prose">
        <h1 id="projects-panel" class="text-3xl md:text-5xl pb-5">Projects</h1>
      </div>
      <ul
        class="grid auto-rows-min gap-7 xl:grid-cols-2 xl:gap-11 place-items-center"
      >
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </ul>
    </div>
  </generic-panel>

  <!-- <generic-panel> -->
  <!--   <div class="flex flex-col min-h-screen"> -->
  <!--     <div class="prose"> -->
  <!--       <h1 id="contact-panel" class="text-3xl md:text-5xl pb-5">Contact</h1> -->
  <!--       <p class="text-xl md:text-2xl"> -->
  <!--         Feel free to reach out if you want to collab or just to say hi 👋 -->
  <!--       </p> -->
  <!--       <h3 class="text-2xl md:text-4xl">jmfv.dev@gmail.com</h3> -->
  <!--     </div> -->
  <!--   </div> -->
  <!-- </generic-panel> -->
</template>

<script lang="ts">
import { Project } from '@/types';
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '@/components/commons/GenericPanel.vue';
import AboutCard from '@/components/commons/AboutCard.vue';
import ProjectCard from '@/components/commons/ProjectCard.vue';

import quizzical1 from '@/assets/project-screenshots/quizzical/quizzical-1.png';
import quizzical2 from '@/assets/project-screenshots/quizzical/quizzical-2.png';
import quizzicalTheme from '@/assets/project-screenshots/quizzical/quizzical-theme.gif';
import quizzicalAnswers from '@/assets/project-screenshots/quizzical/quizzical-answers.gif';

import converz1 from '@/assets/project-screenshots/converz/converz-1.png';
import converzJoin from '@/assets/project-screenshots/converz/converz-join.gif';

import bourne1 from '@/assets/project-screenshots/bourne/bourne1.png';
import bourne2 from '@/assets/project-screenshots/bourne/bourne2.png';
import bourneAuth from '@/assets/project-screenshots/bourne/bourne-auth.gif';

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
        className: 'bg-amber-300',
        aos: 'fade-down',
      },
      {
        header: 'Off-Duty Grooves',
        paragraph:
          "When not immersed on coding a new project or tinkering with my dotfiles (I use NixOS, btw), you'll find me self-teaching guitar and bass, diving into music theory, and transcribing jazz solos or comping to bossa rhythms.",
        className: 'bg-cyan-300',
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
        images: [bourne1, bourneAuth, bourne2],
      },
      {
        name: 'Converz Real Time Chat App',
        description:
          "Real-time chat full-stack application, replicating Discord's chat room functionality, by implementing a monorepo full-stack solution. This involved using vanilla Express and the Socket.IO library to enable seamless and bidirectional real-time communication channels",
        technologies: ['React', 'Socket.IO'],
        githubRepo: 'https://github.com/jfvillablanca/converz-rtc',
        images: [converz1, converzJoin],
      },
      {
        name: "Let's get quizzical",
        description:
          'A quiz app based on React that retrieves quiz items from the Open Trivia Database through Fetch API calls.',
        technologies: ['React'],
        githubRepo: 'https://github.com/jfvillablanca/lets-get-quizzical',
        images: [quizzical1, quizzicalTheme, quizzical2, quizzicalAnswers],
      },
    ];
    return { aboutCards, projects };
  },
};
</script>
