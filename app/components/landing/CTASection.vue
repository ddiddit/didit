<template>
  <section class="download-section">
    <div class="download-inner">

      <!-- 헤더 -->
      <div class="download-header">
        <span class="download-badge label-2 font-semibold">Download</span>
        <h2 class="download-title font-extrabold">
          지금 바로 <em>다운로드</em>하세요
        </h2>
        <p class="download-sub body-1-reading font-regular">
          AI와 함께하는 업무 회고, didit을 지금 만나보세요.
        </p>
      </div>

      <!-- 스토어 묶음 -->
      <div class="cards-wrap">
        <div class="store-wrap">

          <!-- ① App Store 버튼 — 누르면 바로 이동 -->
          <a
            href="https://apps.apple.com/kr/app/%EB%94%94%EB%94%A7-didit-ai-%EC%97%85%EB%AC%B4-%ED%9A%8C%EA%B3%A0/id6761548843"
            target="_blank"
            rel="noopener noreferrer"
            class="store-btn"
          >
            <div class="store-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div class="store-meta">
              <p class="store-sub caption-2 font-regular">Download on the</p>
              <p class="store-name heading-1 font-extrabold">App Store</p>
            </div>
          </a>

          <!-- ② QR 카드 -->
          <div class="store-card" @mouseenter="hovered = true" @mouseleave="hovered = false">
            <div class="card-glow" :class="{ visible: hovered }" />
            <div class="qr-inner">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://apps.apple.com/kr/app/%EB%94%94%EB%94%A7-didit-ai-%EC%97%85%EB%AC%B4-%ED%9A%8C%EA%B3%A0/id6761548843&margin=8&color=0b0f14&bgcolor=ffffff"
                alt="App Store QR 코드"
                class="qr-img"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const hovered = ref(false)
</script>

<style scoped>
.download-section {
  background: #0b0f14;
  padding: 100px 24px;
  color: white;
}

.download-inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* ── 헤더 ── */
.download-header {
  text-align: center;
  margin-bottom: 64px;
}

.download-badge {
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

.download-title {
  font-size: clamp(28px, 4vw, 44px);
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 14px;
}

.download-title em {
  font-style: normal;
  color: #3ddb99;
}

.download-sub {
  color: rgba(255, 255, 255, 0.5);
}

/* ── 카드 레이아웃 ── */
.cards-wrap {
  display: flex;
  justify-content: center;
}

.store-wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  width: 260px;
}

/* ── App Store 버튼 ── */
.store-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: #111519;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 16px 20px;
  text-decoration: none;
  transition: border-color 0.25s, background 0.25s, transform 0.15s;
  cursor: pointer;
}

.store-icon {
  width: 48px;
  height: 48px;
  background: #000;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.store-sub {
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.04em;
  margin-bottom: 2px;
}

.store-name {
  color: white;
  letter-spacing: -0.02em;
}

/* ── QR 카드 ── */
.store-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 16px;
  overflow: hidden;
  transition: border-color 0.3s, background 0.3s;
}

.card-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 160px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s;
}

.card-glow.visible { opacity: 1; }

.qr-inner {
  background: white;
  border-radius: 12px;
  padding: 12px;
  width: 100%;
}

.qr-img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* ── 힌트 ── */
.qr-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: rgba(255, 255, 255, 0.3);
}

.qr-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3ddb99;
  display: inline-block;
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.8); }
}

/* ── 하단 노트 ── */
.download-note {
  text-align: center;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.22);
  letter-spacing: 0.04em;
}

/* ── 모바일 ── */
@media (max-width: 768px) {
  .download-section { padding: 72px 24px; }
  .download-header  { margin-bottom: 40px; }
  .store-wrap { width: 100%; max-width: 340px; }
}
</style>