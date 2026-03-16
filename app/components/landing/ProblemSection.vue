<template>
  <section class="bg-white border-y border-slate-200/70">
    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-4">
      <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p class="text-[#3DDB99] label-2 font-semibold">Why Didit</p>
          <h2 class="mt-3 text-slate-900 tracking-tight why-title font-bold">
            회고가 중요한 건 알지만, 매일 쓰기는 어렵습니다
          </h2>
          <p class="mt-5 text-slate-600 body-1-reading font-regular">
            하루를 돌아보는 건 중요하지만, 막상 퇴근 직전이나 바쁜 일정 사이에 회고를 문서로 정리하는 건 부담이 큽니다.
            Didit은 그 부담을 질문과 대화로 바꿉니다.
          </p>
        </div>

        <div class="grid gap-4">
          <div class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <p class="text-slate-900 body-1-normal font-semibold">무엇을 했는지 금방 흐려짐</p>
            <p class="mt-2 text-slate-600 body-1-reading font-regular">
              바쁜 하루가 지나면 한 일과 막힌 지점, 배운 점이 기록되지 않은 채 사라집니다.
            </p>
          </div>

          <div class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <p class="text-slate-900 body-1-normal font-semibold">빈 문서에서 시작하기 어려움</p>
            <p class="mt-2 text-slate-600 body-1-reading font-regular">
              처음부터 구조를 잡아 쓰는 방식은 부담이 커서 결국 회고를 미루게 됩니다.
            </p>
          </div>

          <div class="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <p class="text-slate-900 body-1-normal font-semibold">기록이 쌓여도 다시 보기 어려움</p>
            <p class="mt-2 text-slate-600 body-1-reading font-regular">
              프로젝트별로 정리되지 않으면 회고가 쌓여도 성장 흐름을 다시 확인하기 어렵습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-title {
  font-size: clamp(26px, 4vw, 36px);
  line-height: 1.2;
  letter-spacing: -0.025em;
}
</style>