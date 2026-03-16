<script setup lang="ts">
import { computed, ref } from 'vue'

const email = ref('')
const errorMessage = ref('')
const isSubmitted = ref(false)
const isLoading = ref(false)
const isAgreed = ref(false)

const supabase = useSupabaseClient()

const isEmailValid = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
})

const submitWaitlist = async () => {
  errorMessage.value = ''

  if (!email.value.trim()) {
    errorMessage.value = '이메일을 입력해주세요.'
    return
  }

  if (!isEmailValid.value) {
    errorMessage.value = '올바른 이메일 형식을 입력해주세요.'
    return
  }

  if (!isAgreed.value) {
    errorMessage.value = '개인정보 수집·이용에 동의해주세요.'
    return
  }

  try {
    isLoading.value = true

    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: email.value.trim(),
          source: 'landing',
        },
      ])

    if (error) {
      const message = error.message?.toLowerCase?.() ?? ''

      if (message.includes('duplicate') || message.includes('unique')) {
        errorMessage.value = '이미 신청된 이메일입니다.'
        return
      }

      errorMessage.value = '신청 중 오류가 발생했어요. 다시 시도해주세요.'
      console.error('Supabase insert error:', error)
      return
    }

    isSubmitted.value = true
    email.value = ''
  } catch (e) {
    console.error('submitWaitlist error:', e)
    errorMessage.value = '신청 중 오류가 발생했어요. 다시 시도해주세요.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="bg-[#0b0f14] text-white">
    <div class="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
      <p class="text-sm font-semibold text-[#3DDB99]">Beta</p>

      <h2 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Didit을 가장 먼저 만나보세요
      </h2>

      <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
        하루의 업무를 더 가볍게 돌아보는 회고 습관.
        베타 오픈 소식을 가장 먼저 받아보세요.
      </p>

      <div class="mx-auto mt-10 w-full max-w-2xl">
        <div
          v-if="!isSubmitted"
          class="rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-6"
        >
          <div class="flex flex-col gap-3 sm:flex-row">
            <input
            v-model="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            class="h-14 flex-1 rounded-2xl border border-white/10 bg-[#1A1F26] px-5 text-base text-white placeholder:text-white/35 outline-none transition focus:border-[#3DDB99]/50 focus:ring-2 focus:ring-[#3DDB99]/20"
            @keyup.enter="submitWaitlist"
            />

            <button
              type="button"
              class="h-14 rounded-2xl bg-[#3DDB99] px-6 text-base font-semibold text-[#0b0f14] transition hover:brightness-95 disabled:opacity-60 sm:min-w-[160px]"
              :disabled="isLoading"
              @click="submitWaitlist"
            >
              {{ isLoading ? '신청 중...' : '출시 알림 신청' }}
            </button>
          </div>

          <!-- 동의 체크박스 -->
          <div class="mt-3 flex items-start gap-2">
            <input
              id="agree"
              v-model="isAgreed"
              type="checkbox"
              class="mt-0.5 h-4 w-4 cursor-pointer accent-[#3DDB99]"
            />
            <label for="agree" class="cursor-pointer text-left text-sm text-white/60">
              <span class="text-white/80">[필수]</span>
              개인정보 수집·이용에 동의합니다.
              <NuxtLink
                to="/privacy"
                class="ml-1 text-white/40 underline transition hover:text-white/60"
              >
                내용 보기
              </NuxtLink>
            </label>
          </div>

          <p v-if="errorMessage" class="mt-3 text-left text-sm text-[#ff8f8f]">
            {{ errorMessage }}
          </p>

          <p class="mt-4 text-left text-sm leading-6 text-white/45">
            이메일은 베타 오픈 알림 및 서비스 소식 안내에만 사용됩니다.
          </p>
        </div>

        <div
          v-else
          class="rounded-[28px] border border-[#3DDB99]/20 bg-[#3DDB99]/10 p-6 text-left"
        >
          <p class="text-sm font-semibold text-[#3DDB99]">신청 완료</p>
          <h3 class="mt-2 text-xl font-semibold text-white">
            출시 알림 신청이 완료되었어요
          </h3>
          <p class="mt-3 leading-7 text-white/70">
            Didit의 베타 오픈 소식을 가장 먼저 보내드릴게요.
          </p>
        </div>
      </div>
      
    </div>
  </section>
</template>