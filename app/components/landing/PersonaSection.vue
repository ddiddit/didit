<script setup lang="ts">
import { ref } from 'vue'

const personas = [
  {
    tab: '기획자',
    icon: '기획',
    headline: '결정의 근거를 흘려보내지 않아요',
    desc: '매일 내린 판단과 가설을 기록해 두면, 회고가 쌓일수록 나만의 의사결정 패턴이 보여요.',
    points: [
      '왜 그렇게 결정했는지 맥락을 남겨요',
      '사용자 반응·실험 결과를 메모로 정리해요',
      '우선순위를 어떻게 바꿨는지 돌아봐요',
    ],
    example: '오늘 온보딩 플로우를 단순화하기로 했어요. 핵심 기능을 먼저 경험시키는 게 이탈을 줄인다고 판단했거든요.',
  },
  {
    tab: '개발자',
    icon: '개발',
    headline: '막힌 지점과 해결 과정을 자산으로',
    desc: '오늘 부딪힌 문제와 풀어낸 방법을 적어두면, 같은 고민을 반복하지 않고 성장 기록이 남아요.',
    points: [
      '막혔던 버그와 해결 방법을 기록해요',
      '새로 배운 개념·패턴을 정리해요',
      '코드 리뷰에서 얻은 인사이트를 남겨요',
    ],
    example: '비동기 상태 꼬임 때문에 한참 헤맸는데, 결국 의존성 배열 문제였어요. 다음엔 먼저 렌더 흐름부터 의심해야겠어요.',
  },
  {
    tab: '디자이너',
    icon: '디자인',
    headline: '디자인 의도와 피드백을 정리해요',
    desc: '왜 이렇게 디자인했는지, 어떤 피드백을 어떻게 반영했는지 기록하면 결정의 흐름이 또렷해져요.',
    points: [
      '디자인 의도와 근거를 남겨요',
      '받은 피드백과 반영 과정을 정리해요',
      '여러 시안을 비교한 회고를 쌓아요',
    ],
    example: '버튼 위계를 다시 잡았어요. 사용자가 가장 먼저 눌러야 할 액션이 묻혀 있었다는 피드백이 결정적이었어요.',
  },
]

const active = ref(0)
</script>

<template>
  <section class="persona-section">
    <div class="persona-inner">
      <div class="persona-header">
        <span class="persona-badge label-2 font-semibold">For you</span>
        <h2 class="persona-title font-extrabold">
          당신의 일에 맞는 <em>회고</em>
        </h2>
        <p class="persona-sub body-1-reading font-regular">
          기획자, 개발자, 디자이너 — 직군마다 돌아볼 거리가 달라요.
        </p>
      </div>

      <div class="persona-tabs">
        <button
          v-for="(p, i) in personas"
          :key="i"
          class="persona-tab body-2-normal font-bold"
          :class="{ active: active === i }"
          @click="active = i"
        >
          {{ p.tab }}
        </button>
      </div>

      <transition name="persona-fade" mode="out-in">
        <div :key="active" class="persona-panel">
          <div class="panel-left">
            <h3 class="panel-headline heading-1 font-extrabold">{{ personas[active].headline }}</h3>
            <p class="panel-desc body-1-reading font-regular">{{ personas[active].desc }}</p>
            <ul class="panel-points">
              <li v-for="(pt, j) in personas[active].points" :key="j" class="panel-point label-1-normal font-regular">
                <span class="point-check" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8.5l3 3 6-6.5" stroke="#3DDB99" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                {{ pt }}
              </li>
            </ul>
          </div>

          <div class="panel-right">
            <div class="example-card">
              <div class="example-head caption-2 font-bold">
                <span class="example-avatar font-extrabold">딧</span>
                {{ personas[active].tab }}의 회고
              </div>
              <p class="example-text label-1-reading font-regular">{{ personas[active].example }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.persona-section {
  background: #0b0f14;
  padding: 100px 24px;
  color: white;
}

.persona-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.persona-header {
  text-align: center;
  margin-bottom: 40px;
}

.persona-badge {
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

.persona-title {
  font-size: clamp(28px, 4vw, 44px);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 14px;
}
.persona-title em {
  font-style: normal;
  color: #3ddb99;
}

.persona-sub {
  color: rgba(255, 255, 255, 0.5);
}

.persona-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
}

.persona-tab {
  padding: 10px 24px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  transition: background 0.25s, color 0.25s, border-color 0.25s;
}
.persona-tab:hover:not(.active) {
  color: rgba(255, 255, 255, 0.8);
}
.persona-tab.active {
  background: rgba(61, 219, 153, 0.12);
  border-color: rgba(61, 219, 153, 0.35);
  color: #3ddb99;
}

.persona-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.panel-headline {
  color: white;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  line-height: 1.3;
}

.panel-desc {
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 24px;
}

.panel-points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.panel-point {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.point-check {
  flex-shrink: 0;
  margin-top: 1px;
  display: flex;
}

.panel-right {
  display: flex;
  justify-content: center;
}

.example-card {
  background: linear-gradient(135deg, rgba(61, 219, 153, 0.1), rgba(61, 219, 153, 0.03));
  border: 1px solid rgba(61, 219, 153, 0.22);
  border-radius: 20px;
  padding: 28px;
  width: 100%;
}

.example-head {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #3ddb99;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.example-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(61, 219, 153, 0.15);
  border: 1px solid rgba(61, 219, 153, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #3ddb99;
  padding-top: 2px;
}

.example-text {
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
}

.persona-fade-enter-active,
.persona-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.persona-fade-enter-from { opacity: 0; transform: translateY(8px); }
.persona-fade-leave-to { opacity: 0; transform: translateY(-8px); }

@media (max-width: 768px) {
  .persona-section { padding: 72px 24px; }
  .persona-header { margin-bottom: 32px; }
  .persona-tabs { margin-bottom: 32px; flex-wrap: wrap; }
  .persona-panel {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .panel-headline { text-align: center; }
  .panel-desc { text-align: center; }
}
</style>
