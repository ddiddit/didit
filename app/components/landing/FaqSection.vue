<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    q: 'didit은 무료인가요?',
    a: '네, 지금은 무료로 이용할 수 있어요. 현재는 하루 3회까지 회고를 작성할 수 있고, 추후 유료 요금제가 도입될 수 있어요.',
  },
  {
    q: '안드로이드(Android)에서도 쓸 수 있나요?',
    a: '안드로이드 앱은 곧 출시될 예정이에요. 그 전에도 웹(app.didit.ai.kr)에서 설치 없이 바로 사용할 수 있어요.',
  },
  {
    q: '회고 한 번에 얼마나 걸리나요?',
    a: '약 3분이면 충분해요. AI가 먼저 질문을 던지고, 답하다 보면 자연스럽게 오늘 한 일과 배운 점이 정리돼요.',
  },
  {
    q: '음성으로도 기록할 수 있나요?',
    a: '네, 타이핑 대신 말하기(STT)로도 회고를 작성할 수 있어요. 편한 방식으로 입력하면 AI가 알아서 정리해 줘요.',
  },
  {
    q: '작성한 회고는 안전하게 보관되나요?',
    a: '회고는 본인 계정에만 연결되어 저장되며, 동의 없이 외부에 공개되지 않아요.',
  },
  {
    q: '어떤 사람에게 잘 맞나요?',
    a: '기획자, 개발자, 디자이너처럼 매일의 업무를 돌아보고 성장의 단서를 남기고 싶은 누구에게나 맞아요.',
  },
]

const open = ref(0)
function toggle(i: number) {
  open.value = open.value === i ? -1 : i
}
</script>

<template>
  <section class="faq-section">
    <div class="faq-inner">
      <div class="faq-header">
        <span class="faq-badge label-2 font-semibold">FAQ</span>
        <h2 class="faq-title font-extrabold">자주 묻는 질문</h2>
        <p class="faq-sub body-1-reading font-regular">
          궁금한 점이 있다면 먼저 확인해 보세요.
        </p>
      </div>

      <ul class="faq-list">
        <li v-for="(item, i) in faqs" :key="i" class="faq-item" :class="{ open: open === i }">
          <button class="faq-q" :aria-expanded="open === i" @click="toggle(i)">
            <span class="faq-q-text body-1-normal font-bold">{{ item.q }}</span>
            <span class="faq-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 7l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
          <div class="faq-a-wrap">
            <div class="faq-a-inner">
              <p class="faq-a label-1-reading font-regular">{{ item.a }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background: #f8faf9;
  border-top: 1px solid rgba(226, 232, 240, 0.7);
  border-bottom: 1px solid rgba(226, 232, 240, 0.7);
  padding: 100px 24px;
  color: #0f172a;
}

.faq-inner {
  max-width: 760px;
  margin: 0 auto;
}

.faq-header {
  text-align: center;
  margin-bottom: 48px;
}

.faq-badge {
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

.faq-title {
  font-size: clamp(28px, 4vw, 44px);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 14px;
}

.faq-sub {
  color: #475569;
}

.faq-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.faq-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.03);
  transition: border-color 0.3s, background 0.3s;
}
.faq-item.open {
  border-color: rgba(61, 219, 153, 0.5);
  background: rgba(61, 219, 153, 0.05);
}

.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: #0f172a;
}

.faq-q-text {
  color: #0f172a;
}

.faq-icon {
  flex-shrink: 0;
  color: #94a3b8;
  display: flex;
  transition: transform 0.3s, color 0.3s;
}
.faq-item.open .faq-icon {
  transform: rotate(180deg);
  color: #3ddb99;
}

.faq-a-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.faq-item.open .faq-a-wrap {
  grid-template-rows: 1fr;
}

.faq-a-inner {
  overflow: hidden;
  min-height: 0;
}

.faq-a {
  color: #475569;
  padding: 2px 22px 22px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .faq-section { padding: 72px 24px; }
  .faq-header { margin-bottom: 32px; }
  .faq-q { padding: 18px 18px; }
  .faq-a { padding-left: 18px; padding-right: 18px; }
}
</style>
