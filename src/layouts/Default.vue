<template>
  <div :data-theme="theme">
    <div class="navbar fixed bg-base-300 z-40 shadow-sm">
      <div class="navbar-start">
        <a class="btn btn-ghost md:text-xl" @click="backToTop()">Home</a>
      </div>
      <div class="navbar-end lg:flex">
        <div class="">
          <a
            class="btn btn-ghost md:text-lg"
            @click="smoothScrollToAnchor('about-panel')"
            >About</a
          >
        </div>
        <div class="">
          <a
            class="btn btn-ghost md:text-lg"
            @click="smoothScrollToAnchor('projects-panel')"
            >Projects</a
          >
        </div>
        <div class="">
          <a
            class="btn btn-ghost md:text-lg"
            @click="smoothScrollToAnchor('contact-panel')"
            >Contact</a
          >
        </div>
      </div>
    </div>
    <slot />
    <footer class="footer footer-center p-10 bg-base-50">
      <div>
        <div class="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/jmfv" target="_blank">
            <i class="lab la-linkedin text-4xl" />
          </a>
          <a
            href="https://github.com/jfvillablanca/portfolio-in-vue"
            target="_blank"
          >
            <i class="lab la-github text-4xl" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { smoothScrollToAnchor } from '@/lib';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  setup() {
    const theme = ref(null);
    watch(theme, (value = 'synthwave') => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
    });
    return {
      theme,
      themes: THEMES,
    };
  },
  methods: {
    smoothScrollToAnchor,
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
