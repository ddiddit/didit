<script setup lang="ts">
useSeoMeta({
  title: '개인정보처리방침 - didit',
  description: '디딧(didit) 개인정보처리방침',
})
</script>

<template>
  <div class="legal-page">
    <div class="legal-inner">

      <div class="legal-header">
        <NuxtLink to="/" class="back-btn caption-1 font-semibold">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          홈으로
        </NuxtLink>
        <h1 class="legal-title font-extrabold">디딧(didit) 개인정보처리방침</h1>
        <p class="legal-date caption-1 font-regular">최종 업데이트: 2026년 4월</p>
      </div>

      <div class="legal-body">

        <section class="legal-section">
          <h2>1. 총칙</h2>
          <p>디딧(didit) 서비스(이하 "회사")는 이용자의 개인정보를 중요하게 생각하며 「개인정보 보호법」 등 관련 법령을 준수합니다.</p>
          <p>본 개인정보처리방침은 회사가 제공하는 모바일 애플리케이션 및 관련 서비스(이하 "서비스") 이용 과정에서 수집되는 개인정보의 항목, 이용 목적, 보유 기간 및 보호 방법 등을 설명합니다.</p>
          <p>회사는 개인정보처리방침을 서비스 내에 공개하여 이용자가 언제든지 확인할 수 있도록 합니다.</p>
        </section>

        <section class="legal-section">
          <h2>2. 수집하는 개인정보 항목</h2>
          <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다.</p>

          <p><strong>① 회원가입 및 로그인 시</strong></p>
          <p>서비스는 소셜 로그인 방식(Google, Apple)을 통해 회원가입이 이루어지며 다음 정보가 수집될 수 있습니다.</p>
          <ul>
            <li>소셜 로그인 고유 식별자(ID)</li>
            <li>닉네임</li>
            <li>이메일 주소 (제공 범위 내)</li>
            <li>프로필 이미지 (제공 범위 내)</li>
          </ul>
          <p class="note">※ 수집 항목은 이용자가 로그인 과정에서 동의한 범위에 따라 달라질 수 있습니다.</p>

          <p><strong>② 서비스 이용 과정에서 자동 수집되는 정보</strong></p>
          <ul>
            <li>기기 정보 (OS, 기기 모델명 등)</li>
            <li>광고 식별자(ADID / IDFA 등)</li>
            <li>IP 주소</li>
            <li>접속 로그</li>
            <li>서비스 이용 기록</li>
            <li>앱 사용 기록</li>
          </ul>

          <p><strong>③ 서비스 이용 시 생성되는 정보</strong></p>
          <ul>
            <li>서비스 내 작성한 텍스트 콘텐츠</li>
            <li>이용자가 입력한 기록 또는 리뷰 정보</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>3. 개인정보 수집 및 이용 목적</h2>
          <p>회사는 다음 목적을 위해 개인정보를 이용합니다.</p>
          <ul>
            <li>회원 식별 및 로그인 인증</li>
            <li>서비스 이용 기록 관리</li>
            <li>이용자가 작성한 콘텐츠 관리</li>
            <li>서비스 기능 제공 및 운영</li>
            <li>서비스 품질 개선 및 통계 분석</li>
            <li>부정 이용 방지 및 서비스 보안 유지</li>
            <li>고객 문의 대응 및 공지사항 전달</li>
            <li>법령 준수 및 필요한 경우 이용자 고지</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 다음의 경우 예외적으로 제공될 수 있습니다.</p>
          <ul>
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령에 따라 제공이 요구되는 경우</li>
            <li>통계 작성 및 연구 목적을 위해 개인을 식별할 수 없는 형태로 가공하여 제공하는 경우</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>5. 개인정보의 보유 및 이용기간</h2>
          <p>회사는 개인정보 수집 및 이용 목적이 달성된 후 지체 없이 해당 정보를 파기합니다. 다만 관련 법령에 따라 일정 기간 보관이 필요한 경우 다음과 같이 보관합니다.</p>
          <div class="legal-table">
            <div class="table-row table-head">
              <span>항목</span>
              <span>보관기간</span>
            </div>
            <div class="table-row">
              <span>회원 정보</span>
              <span>회원 탈퇴 후 30일</span>
            </div>
            <div class="table-row">
              <span>서비스 이용 기록</span>
              <span>3개월</span>
            </div>
            <div class="table-row">
              <span>접속 로그 및 IP 정보</span>
              <span>3개월</span>
            </div>
          </div>
        </section>

        <section class="legal-section">
          <h2>6. 개인정보 파기 절차 및 방법</h2>
          <p>회사는 개인정보 보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 개인정보를 파기합니다.</p>
          <ul>
            <li><strong>전자 파일 형태:</strong> 복구가 불가능한 기술적 방법으로 삭제</li>
            <li><strong>종이 문서 형태:</strong> 분쇄 또는 소각</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>7. 이용자의 권리</h2>
          <p>이용자는 언제든지 자신의 개인정보에 대해 다음 권리를 행사할 수 있습니다.</p>
          <ul>
            <li>개인정보 열람 요청</li>
            <li>개인정보 수정 및 정정 요청</li>
            <li>개인정보 삭제 요청</li>
            <li>회원 탈퇴 요청</li>
          </ul>
          <p>위 요청은 서비스 내 설정 메뉴 또는 고객센터를 통해 신청할 수 있습니다.</p>
        </section>

        <section class="legal-section">
          <h2>8. 개인정보의 안전성 확보 조치</h2>
          <ul>
            <li>개인정보 암호화 저장</li>
            <li>접근 권한 관리 및 내부 접근 통제</li>
            <li>개인정보 최소 수집 원칙 적용</li>
            <li>정기적인 보안 점검 및 시스템 관리</li>
          </ul>
        </section>

        <section class="legal-section">
          <h2>9. 개인정보 보호책임자</h2>
          <p>회사는 개인정보 보호 관련 문의 및 처리를 위해 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
          <div class="info-box">
            <p><strong>담당자:</strong> 디딧 팀</p>
            <p><strong>이메일:</strong> <a href="mailto:byteam.didit@gmail.com" class="legal-link">byteam.didit@gmail.com</a></p>
          </div>
        </section>

        <section class="legal-section">
          <h2>10. 개인정보처리방침 변경</h2>
          <p>본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 서비스 내 공지사항 또는 팝업 등을 통해 사전에 안내합니다.</p>
          <p>다만 다음과 같은 중요한 변경 사항이 있는 경우 최소 30일 전에 공지합니다.</p>
          <ul>
            <li>수집하는 개인정보 항목 변경</li>
            <li>개인정보 이용 목적 변경</li>
            <li>개인정보 보관 기간 변경</li>
          </ul>
          <p>필요한 경우 이용자의 별도 동의를 다시 받을 수 있습니다.</p>
        </section>

      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  background: #0b0f14;
  min-height: 100vh;
  color: white;
  padding: 80px 24px;
}

.legal-inner {
  max-width: 720px;
  margin: 0 auto;
}

.legal-header {
  margin-bottom: 56px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  margin-bottom: 32px;
  transition: color 0.2s;
}
.back-btn:hover { color: #3ddb99; }

.legal-label {
  display: inline-block;
  border: 1px solid rgba(61,219,153,0.3);
  background: rgba(61,219,153,0.08);
  color: #3ddb99;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
}

.legal-title {
  font-size: clamp(22px, 3vw, 32px);
  letter-spacing: -0.025em;
  line-height: 1.3;
  margin-bottom: 10px;
}

.legal-date {
  color: rgba(255,255,255,0.3);
}

.legal-body {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.legal-section {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 32px;
}

.legal-section h2 {
  font-size: 16px;
  font-weight: 700;
  color: white;
  letter-spacing: -0.01em;
  margin-bottom: 14px;
}

.legal-section p,
.legal-section li {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255,255,255,0.55);
}

.legal-section p + p { margin-top: 10px; }

.legal-section ul,
.legal-section ol {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.legal-section ul { list-style: disc; }
.legal-section ol { list-style: decimal; }

.legal-section strong {
  color: rgba(255,255,255,0.8);
  font-weight: 600;
}

.note {
  color: rgba(255,255,255,0.35) !important;
  font-size: 13px !important;
  margin-top: 8px !important;
}

/* 테이블 */
.legal-table {
  margin-top: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  overflow: hidden;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px 16px;
  font-size: 14px;
  color: rgba(255,255,255,0.55);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.table-row:last-child { border-bottom: none; }

.table-head {
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.35);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

/* 정보 박스 */
.info-box {
  margin-top: 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.info-box p {
  font-size: 14px !important;
  color: rgba(255,255,255,0.6) !important;
}

.legal-link {
  color: #3ddb99;
  text-decoration: none;
}
.legal-link:hover { text-decoration: underline; }
</style>