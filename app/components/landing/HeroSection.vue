<script setup lang="ts">
import { onMounted, ref } from 'vue'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth'
  })
}

// Typewriter for the AI question bubble
const questionFullText = '오늘 어떤 일을 하셨나요?'
const typedQuestion = ref('')
const showUser1 = ref(false)
const showAi2 = ref(false)
const showUser2 = ref(false)
const showAi3 = ref(false)

onMounted(() => {
  // type question
  let i = 0
  const t = setInterval(() => {
    typedQuestion.value = questionFullText.slice(0, ++i)
    if (i >= questionFullText.length) {
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
    <!-- Ambient background -->
    <div class="bg-glow bg-glow-1" />
    <div class="bg-glow bg-glow-2" />
    <div class="bg-glow bg-glow-3" />

    <div class="hero-inner">
      <!-- LEFT: text -->
      <div class="hero-text">
        <div class="hero-badge">AI 업무 회고 서비스</div>

        <h1 class="hero-title">
          하루의 업무를<span class="title-br"><br /></span>
          <em>대화로 정리하는</em><span class="title-br"><br /></span>
          가장 쉬운 회고
        </h1>

        <p class="hero-desc">
          Didit은 기획자, 개발자, 디자이너가 AI와 대화하며
          오늘 한 일과 막힌 지점, 배운 점을 돌아보고
          피드백과 인사이트까지 쌓을 수 있는 업무 회고 앱입니다.
        </p>

        <div class="hero-btns">
          <button type="button" class="btn-primary" @click="scrollTo('waitlist')">베타 신청하기</button>
          <button type="button" class="btn-ghost" @click="scrollTo('features')">기능 미리보기</button>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-val">3분</span>
            <span class="stat-desc">짧고 가벼운 회고</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-val">AI</span>
            <span class="stat-desc">피드백 자동 생성</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <span class="stat-val">STT</span>
            <span class="stat-desc">말하기로 기록</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: floating bubbles -->
      <div class="bubbles-wrap" aria-hidden="true">

        <!-- Decorative blur blobs behind bubbles -->
        <div class="blob blob-a" />
        <div class="blob blob-b" />

        <!-- AI question bubble — always visible, typewriter -->
        <div class="bubble bubble-ai float-a">
          <div class="bubble-avatar">디</div>
          <div class="bubble-body">
            <span class="bubble-sender">Didit AI</span>
            <p class="bubble-text">
              {{ typedQuestion }}<span v-if="typedQuestion.length < questionFullText.length" class="caret" />
            </p>
          </div>
        </div>

        <!-- User reply 1 -->
        <transition name="pop">
          <div v-if="showUser1" class="bubble bubble-user float-b">
            <div class="bubble-body">
              <p class="bubble-text">온보딩 플로우 단순화 작업했어요. 핵심 기능 중심으로 화면 구조를 다시 정리했습니다.</p>
            </div>
            <div class="bubble-avatar user-avatar">딧</div>
          </div>
        </transition>

        <!-- AI follow-up -->
        <transition name="pop">
          <div v-if="showAi2" class="bubble bubble-ai float-c">
            <div class="bubble-avatar">디</div>
            <div class="bubble-body">
              <p class="bubble-text">좋네요! 어떤 기준이 가장 중요하다고 느꼈나요?</p>
            </div>
          </div>
        </transition>

        <!-- User reply 2 -->
        <transition name="pop">
          <div v-if="showUser2" class="bubble bubble-user float-d">
            <div class="bubble-body">
              <p class="bubble-text">첫 화면에서 핵심 기능을 먼저 경험시키는 게 중요하다고 느꼈어요.</p>
            </div>
            <div class="bubble-avatar user-avatar">딧</div>
          </div>
        </transition>

        <!-- AI insight card -->
        <transition name="pop">
          <div v-if="showAi3" class="insight-card float-e">
            <div class="insight-header">
              <span class="insight-dot" />
              AI 피드백
            </div>
            <p class="insight-body">사용자에게 경험을 먼저 제공하는 온보딩 설계 원칙, 잘 포착하셨어요 ✦</p>
          </div>
        </transition>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Base ── */
.hero {
  position: relative;
  overflow: hidden;
  background: #0b0f14;
  color: white;
  font-family: 'Pretendard', -apple-system, sans-serif;
}

/* ── Ambient glows ── */
.bg-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(90px);
}
.bg-glow-1 {
  width: 500px; height: 500px;
  top: -15%; left: -10%;
  background: rgba(61,219,153,0.13);
}
.bg-glow-2 {
  width: 400px; height: 400px;
  bottom: -10%; right: -5%;
  background: rgba(61,219,153,0.08);
}
.bg-glow-3 {
  width: 300px; height: 300px;
  top: 40%; right: 20%;
  background: rgba(61,219,153,0.06);
}

/* ── Layout ── */
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
}

/* ── Text ── */
.hero-text {
  max-width: 520px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(61,219,153,0.35);
  background: rgba(61,219,153,0.08);
  color: #3DDB99;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 28px;
}

.hero-title {
  font-size: clamp(34px, 4vw, 58px);
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 22px;
}

.hero-title em {
  font-style: normal;
  color: #3DDB99;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.8;
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
  font-size: 15px;
  font-weight: 700;
  padding: 14px 30px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.15s;
  letter-spacing: -0.01em;
}
.btn-primary:hover { opacity: 0.92; }

.btn-ghost {
  background: transparent;
  color: rgba(255,255,255,0.75);
  font-size: 15px;
  font-weight: 600;
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
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
}

.stat-desc {
  font-size: 12px;
  color: rgba(255,255,255,0.4);
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255,255,255,0.1);
}

/* ── Bubbles area ── */
.bubbles-wrap {
  position: relative;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

/* Decorative blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(60px);
}
.blob-a {
  width: 280px; height: 280px;
  top: 10%; left: -5%;
  background: rgba(61,219,153,0.12);
}
.blob-b {
  width: 200px; height: 200px;
  bottom: 10%; right: 0;
  background: rgba(61,219,153,0.07);
}

/* ── Bubble base ── */
.bubble {
  display: flex;
  align-items: center;
  will-change: transform;
  transform: translateZ(0);
  gap: 10px;
  max-width: 88%;
}

.bubble-ai { align-self: flex-start; }
.bubble-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

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
  font-weight: 800;
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
  font-size: 10px;
  font-weight: 600;
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
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255,255,255,0.88);
}

.bubble-user .bubble-text {
  background: rgba(61,219,153,0.12);
  border-color: rgba(61,219,153,0.2);
  color: rgba(255,255,255,0.9);
}

/* Caret */
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

/* ── Insight card ── */
.insight-card {
  align-self: flex-start;
  will-change: transform;
  transform: translateZ(0);
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
  font-size: 11px;
  font-weight: 700;
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

.insight-body {
  font-size: 13.5px;
  line-height: 1.6;
  color: rgba(255,255,255,0.75);
}

/* ── Float animations ── */
.float-a { animation: floatUp 6s ease-in-out infinite; }
.float-b { animation: floatUp 6s ease-in-out infinite 1.5s; }
.float-c { animation: floatUp 6s ease-in-out infinite 0.8s; }
.float-d { animation: floatUp 6s ease-in-out infinite 2.2s; }
.float-e { animation: floatUp 6s ease-in-out infinite 0.4s; }

@keyframes floatUp {
  0%, 100% { transform: translateZ(0) translateY(0); }
  50%       { transform: translateZ(0) translateY(-8px); }
}

/* ── Pop-in transition ── */
.pop-enter-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.88) translateY(10px);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .hero-inner {
    padding: 80px 32px 80px;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 72px 24px 60px;
    gap: 48px;
    text-align: center;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-badge,
  .hero-btns,
  .hero-stats {
    justify-content: center;
  }

  .hero-btns {
    flex-direction: column;
  }
  .hero-badge { margin-left: auto; margin-right: auto; }

  .bubbles-wrap {
    min-height: 420px;  
    height: auto;
    gap: 12px;
    justify-content: flex-start; 
    padding-top: 8px;
  }

  .bubble-ai { max-width: 90%; }
  .bubble-user { max-width: 90%; }
  .insight-card { max-width: 90%; }
  .title-br { display: none; }
}
</style>