<script setup lang="ts">
useSeoMeta({
  title: '개인정보처리방침 | Didit',
})
</script>

<template>
  <div class="bg-[#0b0f14] min-h-screen text-white">
    <div class="mx-auto max-w-3xl px-6 py-24 lg:px-4">

      <h1 class="title-2 font-bold">개인정보처리방침</h1>
      <p class="mt-3 text-white/50 caption-1 font-regular">최종 수정일: 2026년 3월 16일</p>

      <div class="mt-12 space-y-10 text-white/70">

        <section>
          <h2 class="text-white mb-3 body-1-normal font-semibold">1. 수집하는 개인정보 항목</h2>
          <p class="body-1-reading font-regular">서비스 출시 알림 신청 시 아래 항목을 수집합니다.</p>
          <ul class="mt-2 list-disc list-inside space-y-1 body-1-reading font-regular">
            <li>이메일 주소</li>
          </ul>
        </section>

        <section>
          <h2 class="text-white mb-3 body-1-normal font-semibold">2. 수집 및 이용 목적</h2>
          <ul class="list-disc list-inside space-y-1 body-1-reading font-regular">
            <li>Didit 베타 서비스 출시 알림 발송</li>
            <li>서비스 관련 주요 소식 안내</li>
          </ul>
        </section>

        <section>
          <h2 class="text-white mb-3 body-1-normal font-semibold">3. 보유 및 이용 기간</h2>
          <p class="body-1-reading font-regular">서비스 출시 후 1년, 또는 수집 동의 철회 시까지 보유합니다.</p>
        </section>

        <section>
          <h2 class="text-white mb-3 body-1-normal font-semibold">4. 제3자 제공</h2>
          <p class="body-1-reading font-regular">수집된 개인정보는 제3자에게 제공하지 않습니다.</p>
        </section>

        <section>
          <h2 class="text-white mb-3 body-1-normal font-semibold">5. 동의 철회 및 삭제 요청</h2>
          <p class="body-1-reading font-regular">
            개인정보 수집·이용 동의를 철회하거나 삭제를 요청하실 경우
            아래 이메일로 연락 주시면 지체 없이 처리해 드립니다.
          </p>
          <p class="mt-2 text-[#3DDB99] body-1-normal font-medium">kimdonghwan913@gmail.com</p>
        </section>

      </div>

      <div class="mt-16">
        <NuxtLink
            to="/"
            class="text-white/40 hover:text-white/70 transition label-2 font-regular"
        >
          ← 홈으로 돌아가기
        </NuxtLink>
      </div>

    </div>
  </div>
</template>