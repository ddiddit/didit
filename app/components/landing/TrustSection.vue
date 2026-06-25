<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  { value: 104, suffix: '', label: '누적 작성된 회고', desc: '사용자들이 didit으로 쌓아온 회고예요.' },
  { value: 442, suffix: '', label: 'AI와 주고받은 답변', desc: '질문과 대화로 채워진 기록이에요.' },
  { value: 75, suffix: '%', label: '회고 완료율', desc: '시작한 회고를 끝까지 마친 비율이에요.' },
]

// SSR/노스크립트에서도 숫자가 보이도록 최종값으로 초기화
const display = ref(stats.map(s => s.value))
const sectionRef = ref<HTMLElement | null>(null)

function animate() {
  const DURATION = 1200
  const start = performance.now()
  display.value = stats.map(() => 0)
  function frame(now: number) {
    const t = Math.min(1, (now - start) / DURATION)
    const ease = 1 - Math.pow(1 - t, 3)
    display.value = stats.map(s => Math.round(s.value * ease))
    if (t < 1) requestAnimationFrame(frame)
    else display.value = stats.map(s => s.value)
  }
  requestAnimationFrame(frame)
}

onMounted(() => {
  const el = sectionRef.value
  if (!el) return
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        animate()
        io.disconnect()
      }
    }
  }, { threshold: 0.3 })
  io.observe(el)
})
</script>

<template>
  <section ref="sectionRef" class="trust-section">
    <div class="trust-inner">
      <div class="trust-header">
        <span class="trust-badge label-2 font-semibold">Numbers</span>
        <h2 class="trust-title font-extrabold">
          이미 이만큼 <em>쌓이고</em> 있어요
        </h2>
        <p class="trust-sub body-1-reading font-regular">
          didit과 함께한 사용자들이 만들어가고 있는 기록이에요.
        </p>
      </div>

      <div class="trust-grid">
        <div v-for="(s, i) in stats" :key="i" class="trust-card">
          <p class="trust-num font-black">
            {{ display[i].toLocaleString() }}<span class="trust-suffix">{{ s.suffix }}</span>
          </p>
          <p class="trust-label body-1-normal font-bold">{{ s.label }}</p>
          <p class="trust-desc label-1-reading font-regular">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-section {
  background: #0b0f14;
  padding: 100px 24px;
  color: white;
}

.trust-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.trust-header {
  text-align: center;
  margin-bottom: 56px;
}

.trust-badge {
  display: inline-block;
  border: 1px solid rgba(61, 219, 153, 0.3);
  background: rgba(61, 219, 153, 0.08);
  color: #3ddb99;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 20px;
}

.trust-title {
  font-size: clamp(28px, 4vw, 44px);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 14px;
}
.trust-title em {
  font-style: normal;
  color: #3ddb99;
}

.trust-sub {
  color: rgba(255, 255, 255, 0.5);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.trust-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px 28px;
  text-align: center;
  transition: border-color 0.3s, background 0.3s;
}
.trust-card:hover {
  border-color: rgba(61, 219, 153, 0.25);
  background: rgba(61, 219, 153, 0.04);
}

.trust-num {
  font-size: clamp(40px, 6vw, 60px);
  line-height: 1;
  letter-spacing: -0.03em;
  color: #3ddb99;
  margin-bottom: 16px;
}
.trust-suffix {
  font-size: 0.55em;
  margin-left: 2px;
}

.trust-label {
  color: white;
  margin-bottom: 8px;
}

.trust-desc {
  color: rgba(255, 255, 255, 0.45);
}

@media (max-width: 768px) {
  .trust-section { padding: 72px 24px; }
  .trust-header { margin-bottom: 36px; }
  .trust-grid { grid-template-columns: 1fr; gap: 14px; }
  .trust-card { padding: 32px 24px; }
}
</style>
