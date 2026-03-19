<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentStep = ref(0)
const progress = ref(0)
const STEP_DURATION = 2000
let timer: ReturnType<typeof setTimeout> | null = null
let progressTimer: ReturnType<typeof setInterval> | null = null

const steps = [
  {
    number: '01',
    label: '홈에서 바로 시작',
    desc: '앱을 열면 AI가 바로 맞이해요. 최근 피드백과 지난 회고도 한눈에 볼 수 있어요.',
    image: '/screens/showcase-home.png',
  },
  {
    number: '02',
    label: 'AI가 질문을 던져요',
    desc: '오늘 무슨 일을 했는지 AI가 먼저 물어봐요. 생각이 없어도 답하다 보면 정리돼요.',
    image: '/screens/showcase-chat.png',
  },
  {
    number: '03',
    label: '말하거나 타이핑으로',
    desc: '키보드로 입력하거나 음성으로 말해도 돼요. 편한 방식으로 3분만 투자하세요.',
    image: '/screens/showcase-keyboard.png',
  },
  {
    number: '04',
    label: 'AI가 정리 중이에요',
    desc: '대화가 끝나면 AI가 자동으로 회고 내용을 분석하고 핵심 인사이트를 찾아줘요.',
    image: '/screens/showcase-analyzing.png',
  },
  {
    number: '05',
    label: '회고 & 피드백 완성',
    desc: '막힌 지점, 해결 과정, 배운 점이 정리되고 AI 피드백까지 자동으로 저장돼요.',
    image: '/screens/showcase-result.png',
  },
]

function clearTimers() {
  if (timer) clearTimeout(timer)
  if (progressTimer) clearInterval(progressTimer)
}

function startCycle() {
  clearTimers()
  progress.value = 0

  progressTimer = setInterval(() => {
    progress.value += 100 / (STEP_DURATION / 50)
    if (progress.value >= 100) progress.value = 100
  }, 50)

  timer = setTimeout(function tick() {
    setTimeout(() => {
      currentStep.value = (currentStep.value + 1) % steps.length
      startCycle()
    }, 400)
  }, STEP_DURATION)
}

function goTo(idx: number) {
  if (idx === currentStep.value) return
  clearTimers()
  setTimeout(() => {
    currentStep.value = idx
    startCycle()
  }, 400)
}

onMounted(() => startCycle())
onUnmounted(() => clearTimers())
</script>

<template>
  <section id="features" class="how-section">
    <div class="how-inner">

      <div class="how-header">
        <span class="how-badge label-2 font-semibold">How it works</span>
        <h2 class="how-title font-extrabold">이렇게 사용해요</h2>
        <p class="how-sub body-1-reading font-regular">홈에서 시작해 대화를 마치면 AI가 알아서 회고를 완성해 줍니다.</p>
      </div>

      <div class="how-body">

        <div class="phone-col">
          <div class="phone-shell">
            <div class="phone-notch" />
            <div class="phone-screen">
              <transition name="screen-fade" mode="out-in">
                <img
                    :key="currentStep"
                    :src="steps[currentStep].image"
                    :alt="steps[currentStep].label"
                    class="screen-img"
                />
              </transition>
            </div>
          </div>

          <div class="mobile-caption">
            <transition name="caption-fade" mode="out-in">
              <div :key="currentStep" class="caption-inner">
                <p class="caption-num caption-2 font-bold">{{ steps[currentStep].number }}</p>
                <p class="caption-label heading-1 font-extrabold">{{ steps[currentStep].label }}</p>
                <p class="caption-desc label-1-reading font-regular">{{ steps[currentStep].desc }}</p>
              </div>
            </transition>
            <div class="dots">
              <button
                  v-for="(_, i) in steps"
                  :key="i"
                  class="dot"
                  :class="{ active: currentStep === i }"
                  @click="goTo(i)"
              />
            </div>
          </div>
        </div>

        <div class="steps-list">
          <button
              v-for="(step, i) in steps"
              :key="i"
              class="step-item"
              :class="{ active: currentStep === i, done: currentStep > i }"
              @click="goTo(i)"
          >
            <div class="step-left">
              <span class="step-num caption-2 font-bold">{{ step.number }}</span>
              <div class="step-track">
                <div
                    class="step-fill"
                    :style="{
                    height:
                      currentStep === i
                        ? `${progress}%`
                        : currentStep > i
                        ? '100%'
                        : '0%',
                  }"
                />
              </div>
            </div>
            <div class="step-right">
              <p class="step-label body-1-normal font-bold">{{ step.label }}</p>
              <p class="step-desc label-1-reading font-regular">{{ step.desc }}</p>
            </div>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.how-section {
  background: #0b0f14;
  padding: 100px 24px;
  color: white;
}

.how-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.how-header {
  text-align: center;
  margin-bottom: 72px;
}

.how-badge {
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

.how-title {
  font-size: clamp(28px, 4vw, 44px);
  letter-spacing: -0.025em;
  margin-bottom: 14px;
  line-height: 1.2;
}

.how-sub {
  color: rgba(255, 255, 255, 0.5);
}

.how-body {
  display: grid;
  grid-template-columns: 1fr 600px;
  align-items: center;
}

.phone-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.phone-shell {
  width: 260px;
  padding: 9px;
  border-radius: 46px;
  background: linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.03));
  box-shadow:
      0 40px 80px rgba(0, 0, 0, 0.55),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  position: relative;
  animation: floatY 6s ease-in-out infinite;
  flex-shrink: 0;
}

.phone-notch {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 82px;
  height: 20px;
  background: #0b0f14;
  border-radius: 999px;
  z-index: 10;
}

.phone-screen {
  border-radius: 38px;
  overflow: hidden;
  background: #f5f5f7;
  aspect-ratio: 9 / 19.5;
  position: relative;
}

.screen-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  position: absolute;
  inset: 0;
}

.screen-fade-enter-active,
.screen-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.screen-fade-enter-from { opacity: 0; transform: translateY(12px); }
.screen-fade-leave-to   { opacity: 0; transform: translateY(-12px); }

.mobile-caption {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  width: 100%;
}

.caption-inner {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 80px;
}

.caption-num { color: #3ddb99; }
.caption-label { color: white; letter-spacing: -0.02em; }
.caption-desc {
  color: rgba(255, 255, 255, 0.55);
  max-width: 320px;
  margin: 0 auto;
}

.caption-fade-enter-active,
.caption-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.caption-fade-enter-from { opacity: 0; transform: translateY(8px); }
.caption-fade-leave-to   { opacity: 0; transform: translateY(-8px); }

.dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: background 0.3s, width 0.3s;
  padding: 0;
}

.dot.active {
  background: #3ddb99;
  width: 20px;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.step-item {
  display: flex;
  gap: 18px;
  padding: 18px 20px;
  border-radius: 16px;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  text-align: left;
  transition: background 0.3s, border-color 0.3s;
  color: white;
  width: 100%;
  align-items: flex-start;
}

.step-item:hover:not(.active) {
  background: rgba(255, 255, 255, 0.03);
}

.step-item.active {
  background: rgba(61, 219, 153, 0.06);
  border-color: rgba(61, 219, 153, 0.18);
}

.step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  padding-top: 2px;
}

.step-num {
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.3s;
}

.step-item.active .step-num,
.step-item.done .step-num {
  color: #3ddb99;
}

.step-track {
  width: 2px;
  flex: 1;
  min-height: 24px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.step-fill {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  background: #3ddb99;
  border-radius: 2px;
}

.step-label {
  color: rgba(255, 255, 255, 0.28);
  margin-bottom: 5px;
  transition: color 0.3s;
}

.step-item.active .step-label { color: white; }
.step-item.done  .step-label  { color: rgba(255, 255, 255, 0.45); }

.step-desc {
  color: rgba(255, 255, 255, 0.22);
  transition: color 0.3s;
}

.step-item.active .step-desc { color: rgba(255, 255, 255, 0.6); }
.step-item.done  .step-desc  { color: rgba(255, 255, 255, 0.32); }

@media (max-width: 768px) {
  .how-body {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .phone-col {
    align-items: center;
  }

  .mobile-caption {
    display: flex;
  }

  .steps-list {
    display: none;
  }

  .how-header {
    margin-bottom: 20px;
  }
}
</style>