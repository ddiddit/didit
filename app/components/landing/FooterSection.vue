<script setup lang="ts">
// 빈 스크립트 (Nuxt 컴포넌트 인식용)
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">

      <div class="footer-top">

        <!-- 브랜드 -->
        <div class="footer-brand">
          <p class="brand-name font-extrabold">didit</p>
          <p class="brand-desc body-2-normal font-regular">
            AI와 함께하는 업무 회고 앱
          </p>
        </div>

        <!-- 링크 그룹들 -->
        <div class="footer-links">

          <div class="link-group">
            <p class="link-group-title label-2 font-semibold">약관</p>
            <NuxtLink to="/terms" class="footer-link body-2-normal font-regular">이용약관</NuxtLink>
            <NuxtLink to="/privacy" class="footer-link body-2-normal font-regular">개인정보처리방침</NuxtLink>
            <NuxtLink to="/marketing" class="footer-link body-2-normal font-regular">마케팅 수신 동의</NuxtLink>
          </div>

          <div class="link-group">
            <p class="link-group-title label-2 font-semibold">문의</p>
            <a href="mailto:byteam.didit@gmail.com" class="footer-link body-2-normal font-regular">
              byteam.didit@gmail.com
            </a>
          </div>

          <div class="link-group">
            <p class="link-group-title label-2 font-semibold">소셜</p>
            <a
              href="https://instagram.com/didit.app"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-link footer-link-icon body-2-normal font-regular"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
          </div>

        </div>
      </div>

      <div class="footer-divider" />

      <div class="footer-bottom">
        <p class="copyright label-2 font-regular">
          © {{ new Date().getFullYear() }} didit. All rights reserved.
        </p>
        <p class="company-info label-2 font-regular">
          개인정보 보호책임자: 디딧 팀 (byteam.didit@gmail.com)
        </p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #f8faf9;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  color: #0f172a;
  padding: 72px 24px 40px;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

/* ── 상단 ── */
.footer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
}

/* 브랜드 */
.brand-name {
  font-size: 24px;
  letter-spacing: -0.03em;
  color: #0f172a;
  margin-bottom: 8px;
}

.brand-desc {
  color: #64748b;
  margin-bottom: 20px;
}

.app-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0f172a;
  color: white;
  padding: 10px 18px;
  border-radius: 12px;
  text-decoration: none;
  transition: opacity 0.15s, transform 0.15s;
}

.app-badge:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

/* 링크 그룹 */
.footer-links {
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-group-title {
  color: #94a3b8;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.footer-link {
  color: #475569;
  text-decoration: none;
  transition: color 0.2s;
  line-height: 1;
}

.footer-link:hover { color: #3ddb99; }

.footer-link-icon {
  display: flex;
  align-items: center;
  gap: 7px;
}

/* ── 구분선 ── */
.footer-divider {
  width: 100%;
  height: 1px;
  background: rgba(15, 23, 42, 0.07);
}

/* ── 하단 ── */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

.copyright,
.company-info {
  color: #94a3b8;
}

/* ── 모바일 ── */
@media (max-width: 640px) {
  .footer { padding: 56px 24px 36px; }
  .footer-top { flex-direction: column; gap: 40px; }
  .footer-links { gap: 36px; }
  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 6px; }
}
</style>