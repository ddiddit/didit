<script setup lang="ts">
import { onMounted, ref } from 'vue'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top, behavior: 'smooth' })
}

const titleFullText = 'Growth through\nyour didit.'
const DIDIT_START = titleFullText.indexOf('didit.')
const typedTitle = ref('')
const titleDone = ref(false)

const titleBefore = (s: string) => s.slice(0, Math.min(s.length, DIDIT_START))
const titleHighlight = (s: string) => s.length > DIDIT_START ? s.slice(DIDIT_START) : ''

const questionFullText = '오늘 어떤 일을 하셨나요?'
const typedQuestion = ref('')
const showUser1 = ref(false)
const showAi2 = ref(false)
const showUser2 = ref(false)
const showAi3 = ref(false)

const settle = (e: AnimationEvent) => {
  const el = e.currentTarget as HTMLElement
  el.classList.add('settled')
}

onMounted(() => {
  let i = 0
  const titleTimer = setInterval(() => {
    typedTitle.value = titleFullText.slice(0, ++i)
    if (i >= titleFullText.length) {
      clearInterval(titleTimer)
      titleDone.value = true
    }
  }, 55)

  let j = 0
  const t = setInterval(() => {
    typedQuestion.value = questionFullText.slice(0, ++j)
    if (j >= questionFullText.length) {
      clearInterval(t)
      setTimeout(() => { showUser1.value = true }, 400)
      setTimeout(() => { showAi2.value = true }, 1100)
      setTimeout(() => { showUser2.value = true }, 2000)
      setTimeout(() => { showAi3.value = true }, 2800)
    }
  }, 38)
})
</script>

<template>
  <section class="hero">
    <div class="bg-glow bg-glow-1" />
    <div class="bg-glow bg-glow-2" />
    <div class="bg-glow bg-glow-3" />

    <div class="hero-inner">
      <div class="hero-text">
        <div class="hero-badge label-2 font-semibold">AI 업무 회고 서비스</div>

        <h1 class="hero-title font-black">
          <template v-for="(line, idx) in titleBefore(typedTitle).split('\n')" :key="idx">
            <br v-if="idx > 0" />{{ line }}
          </template><em>{{ titleHighlight(typedTitle) }}</em><span v-if="!titleDone" class="caret" />
        </h1>

        <p class="hero-desc body-1-reading font-regular">
          didit은 기획자, 개발자, 디자이너가 AI와 대화하며
          오늘 한 일과 막힌 지점, 배운 점을 돌아보고
          피드백과 인사이트까지 쌓을 수 있는 업무 회고 앱입니다.
        </p>

        <div class="hero-btns">
          <button type="button" class="btn-primary body-2-normal font-bold" @click="scrollTo('waitlist')">베타 신청하기</button>
          <button type="button" class="btn-ghost body-2-normal font-semibold" @click="scrollTo('features')">기능 미리보기</button>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-val font-extrabold">3분</span>
            <span class="stat-desc caption-1 font-regular">짧고 가벼운 회고</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-val font-extrabold">AI</span>
            <span class="stat-desc caption-1 font-regular">피드백 자동 생성</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-val font-extrabold">STT</span>
            <span class="stat-desc caption-1 font-regular">말하기로 기록</span>
          </div>
        </div>
      </div>

      <div class="bubbles-wrap" aria-hidden="true">
        <div class="blob blob-a" />
        <div class="blob blob-b" />

        <div class="bubble bubble-ai float-a">
          <div class="bubble-avatar font-extrabold">디</div>
          <div class="bubble-body">
            <span class="bubble-sender caption-2 font-semibold">didit AI</span>
            <p class="bubble-text label-1-normal font-regular">
              {{ typedQuestion }}<span v-if="typedQuestion.length < questionFullText.length && titleDone" class="caret" />
            </p>
          </div>
        </div>

        <div
            v-if="showUser1"
            class="bubble bubble-user float-b bubble-pop"
            @animationend="settle"
        >
          <div class="bubble-body">
            <p class="bubble-text label-1-normal font-regular">온보딩 플로우 단순화 작업했어요. 핵심 기능 중심으로 화면 구조를 다시 정리했습니다.</p>
          </div>
          <div class="bubble-avatar user-avatar font-extrabold">딧</div>
        </div>

        <div
            v-if="showAi2"
            class="bubble bubble-ai float-c bubble-pop"
            @animationend="settle"
        >
          <div class="bubble-avatar font-extrabold">디</div>
          <div class="bubble-body">
            <p class="bubble-text label-1-normal font-regular">좋네요! 어떤 기준이 가장 중요하다고 느꼈나요?</p>
          </div>
        </div>

        <div
            v-if="showUser2"
            class="bubble bubble-user float-d bubble-pop"
            @animationend="settle"
        >
          <div class="bubble-body">
            <p class="bubble-text label-1-normal font-regular">첫 화면에서 핵심 기능을 먼저 경험시키는 게 중요하다고 느꼈어요.</p>
          </div>
          <div class="bubble-avatar user-avatar font-extrabold">딧</div>
        </div>

        <div
            v-if="showAi3"
            class="insight-card float-e bubble-pop"
            @animationend="settle"
        >
          <div class="insight-header caption-2 font-bold">
            <span class="insight-dot" />
            AI 피드백
          </div>
          <p class="insight-body label-2 font-regular">사용자에게 경험을 먼저 제공하는 온보딩 설계 원칙, 잘 포착하셨어요 ✦</p>
        </div>
      </div>
    </div>

    <div class="scroll-hint">
      <span class="scroll-hint-text caption-2 font-semibold">Scroll</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="#3DDB99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: #0b0f14;
  color: white;
}

.bg-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(90px);
}
.bg-glow-1 { width: 500px; height: 500px; top: -15%; left: -10%; background: rgba(61,219,153,0.13); }
.bg-glow-2 { width: 400px; height: 400px; bottom: -10%; right: -5%; background: rgba(61,219,153,0.08); }
.bg-glow-3 { width: 300px; height: 300px; top: 40%; right: 20%; background: rgba(61,219,153,0.06); }

.hero-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 110px 48px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
}

.hero-text { max-width: 520px; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(61,219,153,0.35);
  background: rgba(61,219,153,0.08);
  color: #3DDB99;
  letter-spacing: 0.04em;
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 28px;
}

.hero-title {
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 22px;
  min-height: 1.15em;
}

.hero-title em {
  font-style: normal;
  color: #3DDB99;
}

.hero-desc {
  color: rgba(255,255,255,0.55);
  margin-bottom: 40px;
}

.hero-btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 52px;
}

.btn-primary {
  background: #3DDB99;
  color: #061a10;
  padding: 14px 30px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: opacity 0.15s;
  letter-spacing: -0.01em;
}
.btn-primary:hover { opacity: 0.92; }

.btn-ghost {
  background: transparent;
  color: rgba(255,255,255,0.75);
  padding: 14px 28px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
  transition: background 0.2s;
}
.btn-ghost:hover { background: rgba(255,255,255,0.05); }

.hero-stats {
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.stat-val {
  font-size: 22px;
  letter-spacing: -0.02em;
  color: white;
}

.stat-desc { color: rgba(255,255,255,0.4); }

.stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255,255,255,0.1);
}

.bubbles-wrap {
  position: relative;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
}

.blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(60px);
}
.blob-a { width: 280px; height: 280px; top: 10%; left: -5%; background: rgba(61,219,153,0.12); }
.blob-b { width: 200px; height: 200px; bottom: 10%; right: 0; background: rgba(61,219,153,0.07); }

.bubble {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 88%;
}

.bubble-ai { align-self: flex-start; }
.bubble-user { align-self: flex-end; flex-direction: row-reverse; }

.bubble-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #1e2a22;
  border: 1px solid rgba(61,219,153,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #3DDB99;
  flex-shrink: 0;
  padding-top: 3px;
}

.user-avatar {
  background: rgba(61,219,153,0.12);
  color: #3DDB99;
  border-color: rgba(61,219,153,0.2);
}

.bubble-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
}

.bubble-sender {
  color: #3DDB99;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  display: flex;
}

.bubble-text {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 12px 16px;
  line-height: 1.6;
  color: rgba(255,255,255,0.88);
}

.bubble-user .bubble-text {
  background: rgba(61,219,153,0.12);
  border-color: rgba(61,219,153,0.2);
  color: rgba(255,255,255,0.9);
}

.caret {
  display: inline-block;
  width: 2px;
  height: 14px;
  background: #3DDB99;
  vertical-align: middle;
  margin-left: 2px;
  animation: blink 0.9s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.insight-card {
  align-self: flex-start;
  background: linear-gradient(135deg, rgba(61,219,153,0.12), rgba(61,219,153,0.04));
  border: 1px solid rgba(61,219,153,0.25);
  border-radius: 16px;
  padding: 14px 18px;
  max-width: 82%;
}

.insight-header {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #3DDB99;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.insight-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3DDB99;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.insight-body { color: rgba(255,255,255,0.75); }

.bubble-pop {
  animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.settled {
  animation: none !important;
  opacity: 1 !important;
  transform: none !important;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.88) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  animation: scrollBounce 2s ease-in-out infinite;
  cursor: default;
}

.scroll-hint-text {
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.5; }
  50% { transform: translateX(-50%) translateY(6px); opacity: 1; }
}

@media (max-width: 1024px) {
  .hero-inner { padding: 80px 32px 80px; gap: 48px; }
}

@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 72px 24px 60px;
    gap: 48px;
    text-align: center;
  }
  .hero-text { max-width: 100%; }
  .hero-badge, .hero-btns, .hero-stats { justify-content: center; }
  .hero-btns { flex-direction: column; }
  .hero-badge { margin-left: auto; margin-right: auto; }
  .bubbles-wrap { min-height: 420px; height: auto; gap: 20px; justify-content: flex-start; padding: 8px 0 32px 0; }
  .bubble-ai { max-width: 90%; }
  .bubble-user { max-width: 90%; }
  .insight-card { max-width: 90%; }
  .scroll-hint { bottom: 20px; }
}
</style>