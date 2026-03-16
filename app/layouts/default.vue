<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

const onScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div>
    <slot />

    <Transition name="fade-up">
      <button
        v-if="showBackToTop"
        class="back-to-top"
        aria-label="맨 위로"
        @click="scrollToTop"
      >
        ↑
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #3DDB99;
  color: #0b0f14;
  font-size: 18px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(61, 219, 153, 0.35);
  transition: opacity 0.2s, transform 0.2s;
  z-index: 999;
}
.back-to-top:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
  }
}
</style>