<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const questionFullText = '오늘 어떤 일을 하셨나요?'
const exampleFullText = '예시) 온보딩 UX를 개선하려고 여러 레이아웃을 시도했습니다.'

const typedQuestion = ref('')
const typedExample = ref('')

const showUserBubble = ref(false)
const showSecondAiBubble = ref(false)

const displayQuestion = computed(() => typedQuestion.value)
const displayExample = computed(() => typedExample.value)

onMounted(() => {
  let questionIndex = 0

  const typingQuestionTimer = setInterval(() => {
    typedQuestion.value = questionFullText.slice(0, questionIndex + 1)
    questionIndex += 1

    if (questionIndex >= questionFullText.length) {
      clearInterval(typingQuestionTimer)

      let exampleIndex = 0

      const typingExampleTimer = setInterval(() => {
        typedExample.value = exampleFullText.slice(0, exampleIndex + 1)
        exampleIndex += 1

        if (exampleIndex >= exampleFullText.length) {
          clearInterval(typingExampleTimer)

          setTimeout(() => {
            showUserBubble.value = true
          }, 350)

          setTimeout(() => {
            showSecondAiBubble.value = true
          }, 900)
        }
      }, 20)
    }
  }, 34)
})

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative overflow-hidden bg-[#0b0f14] text-white">
    <div class="absolute inset-0">
      <div class="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#3DDB99]/20 blur-3xl" />
      <div class="absolute bottom-[-10%] right-[-10%] h-[360px] w-[360px] rounded-full bg-[#3DDB99]/10 blur-3xl" />
    </div>
    
    <div class="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-4">
      <div class="max-w-2xl">
        <div
          class="inline-flex items-center rounded-full border border-[#3DDB99]/30 bg-[#3DDB99]/10 px-4 py-2 text-sm font-medium text-[#3DDB99]"
        >
          AI 업무 회고 서비스
        </div>

        <h1 class="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          하루의 업무를
          <span class="text-[#3DDB99]">대화로 정리하는</span>
          가장 쉬운 회고
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-white/70">
          Didit은 기획자, 개발자, 디자이너가 AI와 대화하며 오늘 한 일과 막힌 지점,
          배운 점을 돌아보고 피드백과 인사이트까지 쌓을 수 있는 업무 회고 앱입니다.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            class="rounded-2xl bg-[#3DDB99] px-6 py-3 text-base font-semibold text-[#0b0f14] hover:bg-[#3DDB99]/90"
            @click="scrollTo('waitlist')"
          >
            베타 신청하기
          </button>

          <button
            class="rounded-2xl border border-white/10 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/5"
            @click="scrollTo('features')"
          >
            기능 미리보기
          </button>
        </div>

        <div class="mt-10 flex flex-wrap gap-8 text-sm text-white/55">
          <div>
            <p class="text-2xl font-bold text-white">3분</p>
            <p>짧고 가벼운 회고</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">AI</p>
            <p>피드백 자동 생성</p>
          </div>
          <div>
            <p class="text-2xl font-bold text-white">STT</p>
            <p>말하기로 기록</p>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-center">
        <div class="hero-phone relative z-10">
          <div
            class="absolute left-1/2 top-3 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black/90"
          />

          <div class="hero-screen">
            <div class="mb-4 flex items-center justify-between">
              <button class="text-sm text-slate-500">←</button>
              <span class="text-xs font-semibold text-slate-400">Question 1 of 4</span>
              <button class="text-sm text-slate-500">다시 하기</button>
            </div>

            <div class="space-y-3 min-h-[430px]">
              <div class="max-w-[88%] rounded-[20px] bg-[#f1f1f1] px-4 py-4 shadow-sm">
                <p class="text-[15px] font-semibold leading-6 text-[#222]">
                  {{ displayQuestion }}
                  <span
                    v-if="typedQuestion.length < questionFullText.length"
                    class="ml-1 inline-block h-[14px] w-[2px] animate-pulse bg-[#222] align-middle"
                  />
                </p>

                <p class="mt-1 text-[12px] leading-5 text-[#9a9a9a]">
                  {{ displayExample }}
                  <span
                    v-if="typedExample.length < exampleFullText.length"
                    class="ml-1 inline-block h-[12px] w-[2px] animate-pulse bg-[#9a9a9a] align-middle"
                  />
                </p>
              </div>

              <transition name="bubble-right">
                <div
                  v-if="showUserBubble"
                  class="ml-auto max-w-[82%] rounded-[22px] rounded-tr-md bg-[#3DDB99] px-4 py-3 text-sm leading-6 text-[#102019] shadow-sm"
                >
                  온보딩 플로우를 단순화하려고 했는데 이전 화면 정보가 많아서 핵심만 다시 정리했어요.
                </div>
              </transition>

              <transition name="bubble-left">
                <div
                  v-if="showSecondAiBubble"
                  class="max-w-[82%] rounded-[22px] rounded-tl-md bg-[#ececec] px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm"
                >
                  좋네요. 이번엔 어떤 기준이 가장 중요하다고 느꼈나요?
                </div>
              </transition>
            </div>

            <div class="mt-4 flex items-center rounded-full bg-[#F1F1F1] px-4 py-3 ">
              <span class="text-[14px] text-[#9CA3AF]">
              회고를 입력하세요
              </span>
              <button
                class="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white transition hover:scale-[1.05]"
                aria-label="말하기"
              >

            <!-- waveform icon -->

            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            >
            <path d="M3 10v4" />
            <path d="M7 6v12" />
            <path d="M11 3v18" />
            <path d="M15 6v12" />
            <path d="M19 10v4" />
            </svg>

            </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-phone {
  width: 340px;
  padding: 10px;
  border-radius: 46px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04)),
    linear-gradient(180deg, #151922 0%, #0f131a 100%);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  animation: floatY 6s ease-in-out infinite;
}

.hero-screen {
  border-radius: 38px;
  background: linear-gradient(180deg, #fafafa 0%, #f4f4f5 100%);
  padding: 52px 16px 16px;
  min-height: 620px;
}

.fade-up-enter-active,
.bubble-left-enter-active,
.bubble-right-enter-active {
  transition: all 0.45s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.bubble-left-enter-from {
  opacity: 0;
  transform: translateY(10px) translateX(-8px);
}

.bubble-right-enter-from {
  opacity: 0;
  transform: translateY(10px) translateX(8px);
}

@keyframes floatY {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 768px) {
  .hero-phone {
    width: 300px;
  }

  .hero-screen {
    min-height: 580px;
  }
}
</style>