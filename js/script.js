/* =========================
   Aura Website Shared Script
   共用：頁首/頁尾、隱藏式選單、語言切換、首頁年齡確認、免費體驗表單、Privacy Dashboard
========================= */

(function () {
  const AURA_NAV = [
    { href: "index.html", zh: "首頁", en: "Home", subZh: "品牌入口", subEn: "Entrance" },
    { href: "product.html", zh: "產品介紹", en: "Product", subZh: "意識同步頭盔", subEn: "Sync Helmet" },
    { href: "noema.html", zh: "NOEMA 體驗", en: "NOEMA", subZh: "沉浸式空間", subEn: "Experience" },
    { href: "privacy.html", zh: "資料透明", en: "Privacy", subZh: "權限與資料控制", subEn: "Data Control" },
    { href: "membership.html", zh: "會員方案", en: "Membership", subZh: "方案與註冊", subEn: "Plans" },
    { href: "faq.html", zh: "常見問題", en: "FAQ", subZh: "Aura Guide", subEn: "Guide" },
    { href: "journal.html", zh: "品牌誌", en: "Journal", subZh: "觀點與洞察", subEn: "Insights" },
    { href: "contact.html", zh: "聯絡我們", en: "Contact", subZh: "預約與合作", subEn: "Contact Us" }
  ];

  const I18N = {
    zh: {
      "common.brandTagline": "NOEMA 自我照護系統",
      "common.brandFooterTagline": "隱私優先的自我照護",
      "common.menu": "選單",
      "common.languageLabel": "語言",
      "common.joinAura": "加入 Aura",
      "common.privacy": "資料透明",
      "menu.eyebrow": "Aura 導覽",
      "menu.title": "貼心，但不越界。",
      "menu.desc": "從產品、NOEMA、資料透明到會員方案，快速前往你想探索的頁面。",
      "footer.desc": "Aura 以意識同步穿戴裝置、AI 陪伴與隱私優先設計，建立可控、安靜且具美感的自我照護體驗。",
      "footer.explore": "探索",
      "footer.trust": "信任",
      "footer.support": "支援",
      "footer.product": "產品介紹",
      "footer.noema": "NOEMA 體驗",
      "footer.membership": "會員方案",
      "footer.privacy": "資料透明",
      "footer.faq": "常見問題",
      "footer.journal": "品牌誌",
      "footer.crisis": "信任回應",
      "footer.guide": "使用說明",
      "footer.policy": "隱私政策",
      "footer.contact": "聯絡我們",
      "footer.rights": "© 2026 Aura。保留所有權利。",
      "footer.foundation": "以隱私優先的自我照護體驗為核心設計。",

      "contact.hero.eyebrow": "Contact Aura",
      "contact.hero.title": "讓下一次進入 NOEMA，更貼近你的節奏。",
      "contact.hero.desc": "不論你想預約體驗、了解會員方案、確認資料權限，或洽談品牌合作，都可以從這裡開始。",
      "contact.hero.cta": "填寫聯絡表單",
      "contact.hero.secondary": "查看資料透明",
      "contact.channel.experience.title": "體驗諮詢",
      "contact.channel.experience.desc": "適合想了解 NOEMA、AI Companion 與首次體驗流程的使用者。",
      "contact.channel.membership.title": "會員方案",
      "contact.channel.membership.desc": "協助你確認 Free Preview、Ritual、Plus 與 Sanctuary 的差異。",
      "contact.channel.privacy.title": "資料與權限",
      "contact.channel.privacy.desc": "針對資料下載、刪除、授權撤回與本地端處理提供說明。",
      "contact.form.eyebrow": "Send Request",
      "contact.form.title": "留下你的需求",
      "contact.form.name": "稱呼",
      "contact.form.email": "電子郵件",
      "contact.form.topic": "需求類型",
      "contact.form.topicExperience": "體驗預約",
      "contact.form.topicMembership": "會員方案",
      "contact.form.topicPrivacy": "資料權限",
      "contact.form.topicBusiness": "品牌合作",
      "contact.form.message": "想詢問的內容",
      "contact.form.submit": "送出需求",
      "contact.form.feedback": "我們已收到你的需求，Aura 會以你選擇的主題回覆。",
      "contact.note.title": "回覆原則",
      "contact.note.desc": "Aura 只使用你主動提供的聯絡資訊處理本次需求，不會把詢問內容用於未授權的個人化或廣告追蹤。",

      "age.title": "進入 Aura 前，請確認年齡",
      "age.desc": "Aura 為 18 歲以上使用者設計。進入後，你可以探索產品、NOEMA 體驗與資料透明設計。",
      "age.yes": "我已年滿 18 歲",
      "age.no": "尚未年滿",
      "age.denied": "很抱歉，Aura 官網內容僅提供 18 歲以上使用者瀏覽。",

      "home.hero.eyebrow": "Aura NOEMA 系統",
      "home.hero.title": "<span class=\"title-line\">不是逃離世界，</span><span class=\"title-line\">而是回到自己。</span>",
      "home.hero.desc": "以意識同步穿戴裝置、AI 陪伴與隱私優先設計，建立一個可控、安靜、只屬於你的沉浸式自我照護入口。",
      "home.hero.ctaTrial": "免費體驗 NOEMA",
      "home.hero.ctaProduct": "探索 NOEMA 體驗",
      "home.hero.pillAge": "18+ 安全體驗",
      "home.hero.pillPrivacy": "隱私優先",
      "home.hero.pillConsent": "可撤回授權",
      "home.hero.pillData": "不出售資料",
      "home.views.label": "瀏覽人次",
      "home.views.unit": "人次",
      "home.views.note": "即時人氣訊號",

      "home.trial.eyebrow": "首次體驗",
      "home.trial.title": "<span class=\"title-line\">先體驗，</span><span class=\"title-line\">再決定靠近的深度。</span>",
      "home.trial.desc": "Aura 首次體驗提供 7 分鐘 NOEMA 引導預覽。你可以先選擇狀態、調整隱私權限，再由系統推薦適合的體驗模式。",
      "home.trial.step1": "01 選擇狀態",
      "home.trial.step2": "02 設定權限",
      "home.trial.step3": "03 進入預覽",
      "home.trial.cta": "開始免費體驗",

      "home.entry.eyebrow": "依需求開始",
      "home.entry.title": "從體驗、沉浸或信任開始。",
      "home.entry.desc": "首頁聚焦第一步行動，產品細節移至產品介紹頁，讓體驗與信任先被看見。",
      "home.entry.card1.title": "免費體驗預約",
      "home.entry.card1.desc": "先用 7 分鐘 NOEMA 引導預覽，感受 Aura 的安靜、可控與私密。",
      "home.entry.card1.link": "開始預約 →",
      "home.entry.card2.title": "NOEMA 體驗",
      "home.entry.card2.desc": "進入低光、柔霧與環形光暈構成的私密自我照護空間。",
      "home.entry.card2.link": "探索 NOEMA →",
      "home.entry.card3.title": "資料透明中心",
      "home.entry.card3.desc": "控制個人化、匿名分析、紀錄刪除與資料下載。",
      "home.entry.card3.link": "查看隱私承諾 →",

      "home.product.eyebrow": "Aura 意識同步頭盔",
      "home.product.title": "沉浸，不必失去掌控。",
      "home.product.desc": "Aura 意識同步頭盔是進入 NOEMA 的硬體入口。它不是為了更強刺激，而是為了讓每一次體驗都能被理解、被控制、也能被中止。",
      "home.product.spec1": "透明科技面板",
      "home.product.spec2": "沉浸聲學模組",
      "home.product.spec3": "本地端優先處理",
      "home.product.cta": "深入了解產品",
      "home.product.imageAlt": "Aura 意識同步頭盔",

      "home.noema.eyebrow": "NOEMA 體驗",
      "home.noema.title": "<span class=\"title-line\">一個只屬於你的</span><span class=\"title-line\">安靜場域。</span>",
      "home.noema.desc": "在低光、柔霧與環形光暈中，整理情緒、釋放壓力，練習更清楚地靠近自己。",
      "home.noema.cta": "進入 NOEMA 體驗",
      "home.noema.imageAlt": "NOEMA 沉浸式體驗場景",
      "home.noema.mode1": "情緒陪伴",
      "home.noema.mode2": "壓力釋放",
      "home.noema.mode3": "親密表達練習",
      "home.noema.trialCta": "預約免費預覽",

      "home.privacy.eyebrow": "隱私優先設計",
      "home.privacy.title": "<span class=\"title-line\">貼心，</span><span class=\"title-line\">但不越界。</span>",
      "home.privacy.desc": "Aura 的互動體驗建立在明示授權、資料最小化與可撤回控制上。你可以隨時調整資料使用方式。",
      "home.privacy.cta": "開啟資料透明中心",

      "home.dashboard.title": "資料透明看板",
      "home.dashboard.statusBalanced": "目前狀態：平衡模式",
      "home.dashboard.statusPersonal": "目前狀態：智慧個人化",
      "home.dashboard.statusControl": "目前狀態：最高控制",
      "home.dashboard.secure": "安全連線",
      "home.dashboard.personalization": "個人化推薦",
      "home.dashboard.personalizationDesc": "根據授權偏好推薦 NOEMA 場景",
      "home.dashboard.analytics": "匿名分析",
      "home.dashboard.analyticsDesc": "僅用於改善網站體驗",
      "home.dashboard.local": "本地端優先處理",
      "home.dashboard.localDesc": "敏感訊號優先在裝置端處理",
      "home.dashboard.download": "下載我的資料",
      "home.dashboard.delete": "刪除互動紀錄",
      "home.dashboard.feedbackDefault": "你可以直接切換權限，系統會即時回饋狀態。",
      "privacy.msg.personalizationOn": "已開啟個人化推薦：Aura 會依授權偏好推薦 NOEMA 場景。",
      "privacy.msg.personalizationOff": "已關閉個人化推薦：系統將不再使用偏好資料進行推薦。",
      "privacy.msg.analyticsOn": "已允許匿名分析：資料僅用於改善網站體驗。",
      "privacy.msg.analyticsOff": "已關閉匿名分析：你的基本使用不會受到影響。",
      "privacy.msg.localOn": "已啟用本地端優先處理：敏感訊號優先在裝置端處理。",
      "privacy.msg.localOff": "已關閉本地端優先提示：建議重新開啟以提高隱私保護。",
      "privacy.msg.downloadStart": "資料副本準備中⋯⋯",
      "privacy.msg.downloadDone": "資料副本請求已建立，請至你的裝置下載保存。",
      "privacy.msg.deleteDone": "互動紀錄已刪除。Aura 不會保留已刪除內容。",

      "home.membership.eyebrow": "會員方案",
      "home.membership.title": "選擇你的進入方式。",
      "home.membership.desc": "從一次免費預覽開始，再選擇適合自己的 NOEMA 方案。",
      "home.membership.exploreDesc": "適合初次體驗者",
      "home.membership.explore1": "基礎 NOEMA 場景",
      "home.membership.explore2": "AI 陪伴入門",
      "home.membership.explore3": "資料透明看板",
      "home.membership.viewPlan": "查看方案",
      "home.membership.recommended": "推薦",
      "home.membership.ritualDesc": "適合穩定自我照護",
      "home.membership.ritual1": "個人化推薦",
      "home.membership.ritual2": "情緒反思日誌",
      "home.membership.ritual3": "月度回顧",
      "home.membership.chooseRitual": "選擇 Ritual",
      "home.membership.plusDesc": "適合深度沉浸體驗",
      "home.membership.plus1": "限定宇宙",
      "home.membership.plus2": "聲紋敘事包",
      "home.membership.plus3": "深度記憶劇本",
      "home.membership.upgrade": "升級體驗",

      "membership.hero.eyebrow": "NOEMA 會員方案",
      "membership.hero.title": "選擇你的 NOEMA 進入深度。",
      "membership.hero.desc": "免費體驗結束後，你不需要立刻被推向承諾。Aura 讓你依照自己的節奏，從回訪、日常沉浸到深度陪伴，選擇一個安全、合意、可控的接續方式。",
      "membership.hero.ctaPlans": "查看會員方案",
      "membership.hero.ctaPrivacy": "先看資料透明",
      "membership.status.eyebrow": "校準摘要",
      "membership.status.defaultHint": "系統會依據你的陪伴者語氣，推薦適合的 NOEMA 體驗深度。",
      "membership.status.row1.label": "同步狀態",
      "membership.status.row1.value": "已完成校準",
      "membership.status.row2.label": "資料模式",
      "membership.status.row2.value": "本地優先＋明示授權",
      "membership.status.row3.label": "目前建議",
      "membership.model.eyebrow": "商業邏輯",
      "membership.model.title": "會員方案不是刺激加購，而是體驗邊界的分層。",
      "membership.model.desc": "依照 Aura 的品牌架構，會員頁同時承接硬體入口、訂閱式內容與高端個人化模組，讓使用者知道自己正在選擇的是『靠近 NOEMA 的方式』，不是失去控制權。",
      "membership.model.hardware.title": "硬體入口",
      "membership.model.hardware.desc": "意識同步頭盔與本地端訊號處理，負責進入 NOEMA 前的安全邊界。",
      "membership.model.content.title": "內容訂閱",
      "membership.model.content.desc": "場景庫、AI 陪伴者語氣與儀式感介面，讓體驗能持續更新。",
      "membership.model.premium.title": "高端模組",
      "membership.model.premium.desc": "聲紋敘事包、限定宇宙與深度記憶劇本，必須建立在明示授權之上。",
      "membership.plans.eyebrow": "選擇方案",
      "membership.plans.title": "從一次回訪，到一個可持續的私密空間。",
      "membership.billing.monthly": "月度",
      "membership.billing.annual": "年度",
      "membership.plan.preview.badge": "體驗",
      "membership.plan.preview.title": "Free Preview",
      "membership.plan.preview.for": "適合：剛完成體驗、還想再確認一次的人",
      "membership.plan.preview.desc": "保留短版 NOEMA 回訪，讓使用者重新感受場景、節奏與邊界設定。",
      "membership.plan.preview.f1": "7 分鐘 NOEMA 回訪",
      "membership.plan.preview.f2": "重新選擇狀態與場景",
      "membership.plan.preview.f3": "資料透明看板入口",
      "membership.plan.preview.cta": "選擇回訪",
      "membership.plan.ritual.recommended": "推薦",
      "membership.plan.ritual.badge": "自我照護",
      "membership.plan.ritual.title": "NOEMA Ritual",
      "membership.plan.ritual.for": "適合：想把沉浸體驗變成日常自我照護的人",
      "membership.plan.ritual.desc": "以穩定節奏進入 Calm、Reflection 與 Companion 場景，保留每次進入前的權限確認。",
      "membership.plan.ritual.f1": "完整 NOEMA 場景庫",
      "membership.plan.ritual.f2": "AI 陪伴者語氣保存",
      "membership.plan.ritual.f3": "月度情緒回顧與反思日誌",
      "membership.plan.ritual.cta": "選擇 Ritual",
      "membership.plan.plus.badge": "沉浸",
      "membership.plan.plus.title": "NOEMA Plus",
      "membership.plan.plus.for": "適合：需要更多角色宇宙與內容庫的人",
      "membership.plan.plus.desc": "在 Ritual 基礎上，加入多層級角色宇宙、進階場景路徑與更完整的體驗摘要。",
      "membership.plan.plus.f1": "多層級角色宇宙",
      "membership.plan.plus.f2": "限定 NOEMA 場景更新",
      "membership.plan.plus.f3": "感知摘要與體驗回顧",
      "membership.plan.plus.cta": "升級 Plus",
      "membership.plan.sanctuary.badge": "高端",
      "membership.plan.sanctuary.title": "Sanctuary",
      "membership.plan.sanctuary.for": "適合：需要高端個人化與更強隱私控制的人",
      "membership.plan.sanctuary.desc": "聲紋敘事包、限定宇宙與深度記憶劇本採預約制，所有敏感資料皆需明示授權。",
      "membership.plan.sanctuary.f1": "聲紋敘事包",
      "membership.plan.sanctuary.f2": "深度記憶劇本",
      "membership.plan.sanctuary.f3": "進階刪除與授權管理",
      "membership.plan.sanctuary.cta": "預約 Sanctuary",
      "membership.trust.eyebrow": "方案與資料透明",
      "membership.trust.title": "越個人化，越需要看得見的控制權。",
      "membership.trust.desc": "Aura 的高階體驗不應該偷偷擴權。當方案包含更細緻的 AI 陪伴、記憶劇本或感知摘要，就必須同時提供可關閉、可下載、可刪除與可撤回的資料控制。",
      "membership.trust.ctaPrivacy": "查看資料透明中心",
      "membership.trust.ctaNoema": "回到 NOEMA 入口",
      "membership.trust.item1.label": "必要資料",
      "membership.trust.item1.value": "帳號、裝置與付款資訊",
      "membership.trust.item2.label": "個人化資料",
      "membership.trust.item2.value": "偏好、場景與語氣設定，可關閉",
      "membership.trust.item3.label": "敏感資料",
      "membership.trust.item3.value": "明示授權，可即時刪除",
      "membership.trust.item4.label": "匿名分析",
      "membership.trust.item4.value": "僅用於改善體驗，可關閉",
      "membership.next.eyebrow": "已選擇路徑",
      "membership.next.ctaTrial": "建立會員預約",
      "membership.next.ctaProduct": "查看 Aura 頭盔",
      "membership.selected.preview.title": "你目前選擇：Free Preview",
      "membership.selected.preview.desc": "適合再回訪一次 NOEMA，重新確認場景、節奏與資料邊界，暫時不延伸到日常使用。",
      "membership.selected.ritual.title": "你目前選擇：NOEMA Ritual",
      "membership.selected.ritual.desc": "建議從 Ritual 開始，保留 AI 陪伴者語氣與日常沉浸場景，同時每次進入前重新確認資料邊界。",
      "membership.selected.plus.title": "你目前選擇：NOEMA Plus",
      "membership.selected.plus.desc": "Plus 適合想延伸角色宇宙與內容庫的人，能加入更多場景更新、感知摘要與體驗回顧。",
      "membership.selected.sanctuary.title": "你目前選擇：Sanctuary",
      "membership.selected.sanctuary.desc": "Sanctuary 是高端個人化路徑，適合需要聲紋敘事、限定宇宙與深度記憶劇本的人。敏感資料必須明示授權。",
      "membership.modal.closeAria": "關閉會員預約表單",
      "membership.modal.eyebrow": "會員預約",
      "membership.modal.title": "預約 Aura 會員方案",
      "membership.modal.desc": "送出後將建立體驗預約，Aura 團隊會依你選擇的方案提供接續資訊。",
      "membership.modal.plan": "想了解的方案",
      "membership.modal.consent": "我同意 Aura 依預約需求處理資料，並可於資料透明中心撤回授權。",
      "membership.modal.submit": "建立預約",
      "membership.modal.success": "已為你建立「{mode}」會員方案預約。下一步建議先查看資料透明中心，確認資料權限與使用邊界。",
      "membership.modal.goPrivacy": "前往資料透明中心",

      "home.modal.eyebrow": "免費預覽",
      "home.modal.title": "預約 7 分鐘 NOEMA 免費體驗",
      "home.modal.desc": "填寫基本資料後，系統會依照你的狀態推薦一組入門體驗。",
      "home.modal.closeAria": "關閉免費體驗表單",
      "home.modal.name": "稱呼",
      "home.modal.namePlaceholder": "例如：CC",
      "home.modal.email": "電子郵件",
      "home.modal.emailPlaceholder": "請輸入電子郵件",
      "home.modal.mode": "今天想要的體驗",
      "home.modal.option1": "情緒陪伴",
      "home.modal.option2": "壓力釋放",
      "home.modal.option3": "親密表達練習",
      "home.modal.consent": "我已年滿 18 歲，並同意 Aura 依本次預約需求處理資料。",
      "home.modal.submit": "送出體驗預約",
      "home.modal.success": "已為你建立「{mode}」入門體驗預約。你可以立即前往 NOEMA 體驗入口，查看沉浸式流程。",
      "home.modal.goNoema": "前往 NOEMA 體驗入口",
      "home.modal.later": "稍後再看",

      "noema.clean.eyebrow": "NOEMA",
      "noema.clean.title": "進入屬於你的感知空間。",
      "noema.clean.desc": "選擇狀態，開始全畫面體驗。",
      "noema.clean.calm": "低刺激安定場域",
      "noema.clean.reflection": "內在整理場域",
      "noema.clean.companion": "AI 陪伴互動場域",
      "noema.clean.enter": "進入全畫面體驗",
      "faq.hero.eyebrow": "Aura Guide",
      "faq.hero.title": "進入之前，先把邊界說清楚。",
      "faq.hero.desc": "這裡整理 NOEMA 體驗、AI Companion、會員方案與資料透明的重點。少一點術語，多一點可理解的控制權。",
      "faq.hero.ctaFaq": "查看問題",
      "faq.hero.ctaPrivacy": "資料透明中心",
      "faq.assurance.title": "三個先說清楚",
      "faq.assurance.item1.title": "不是醫療診斷",
      "faq.assurance.item1.desc": "Aura 是自我照護與沉浸體驗概念。",
      "faq.assurance.item2.title": "不預設讀取敏感資料",
      "faq.assurance.item2.desc": "情緒與感知訊號需明示授權。",
      "faq.assurance.item3.title": "記憶可以關閉",
      "faq.assurance.item3.desc": "AI Companion 不強迫保存互動紀錄。",
      "faq.principle.1.title": "先同意，再進入。",
      "faq.principle.1.desc": "NOEMA 體驗從狀態選擇與資料授權開始，不讓沉浸感蓋過控制權。",
      "faq.principle.2.title": "先體驗，再承諾。",
      "faq.principle.2.desc": "免費體驗結束後，再選擇適合自己的會員深度。",
      "faq.principle.3.title": "先透明，再個人化。",
      "faq.principle.3.desc": "越個人化的體驗，越需要可查看、可關閉與可刪除。",
      "faq.filter.eyebrow": "Question Map",
      "faq.filter.title": "快速找到你在意的事。",
      "faq.filter.desc": "選擇分類後，右側問題會即時收斂。內容聚焦關鍵問題，不做冗長條款。",
      "faq.filter.all": "全部",
      "faq.filter.experience": "體驗流程",
      "faq.filter.companion": "AI 陪伴",
      "faq.filter.membership": "會員方案",
      "faq.filter.privacy": "資料透明",
      "faq.filter.count": "{count} 個問題",
      "faq.filter.note": "點開問題即可查看答案。",
      "faq.q1.title": "Aura 適合誰使用？",
      "faq.q1.desc": "Aura 面向 18 歲以上、想用安靜且可控方式整理情緒、壓力與陪伴需求的使用者。它不是醫療診斷或治療服務，而是一個自我照護與沉浸體驗概念。",
      "faq.q2.title": "NOEMA 是什麼？",
      "faq.q2.desc": "NOEMA 是 Aura 的私密感知空間。使用者先選擇狀態，再進入全畫面體驗，透過場景、聲音、AI Companion 與資料邊界設定，建立一段有控制權的沉浸流程。",
      "faq.q3.title": "免費體驗會怎麼進行？",
      "faq.q3.desc": "流程從 NOEMA 入口開始，接著進入訊號鎖定、傳送門、NOEMA 場域、AI Companion 選擇與第一次對話校準。結束後會進入會員方案頁，讓使用者選擇是否接續體驗。",
      "faq.q4.title": "為什麼體驗頁是全畫面？",
      "faq.q4.desc": "全畫面設計是為了讓體驗更像進入一個獨立場域，而不是一般網站頁面。因此體驗頁不共用主站頁首與頁尾，只保留必要的返回入口。",
      "faq.q5.title": "AI Companion 會取代真人關係嗎？",
      "faq.q5.desc": "不會。Aura 的 AI Companion 是陪伴式介面，用來協助使用者整理狀態、降低刺激與建立反思節奏，不被設計成取代真人關係或專業諮詢。",
      "faq.q6.title": "可以更換 AI Companion 嗎？",
      "faq.q6.desc": "可以。使用者可以依照當下需求選擇不同陪伴者。不同角色會影響語氣、節奏與互動風格，但不會改變資料控制權。",
      "faq.q7.title": "AI Companion 會記住我的對話嗎？",
      "faq.q7.desc": "只有在使用者開啟個人化或記憶功能時，才會延伸保存偏好。使用者可以在資料透明中心關閉記憶、刪除紀錄或下載摘要。",
      "faq.q8.title": "會員方案差在哪裡？",
      "faq.q8.desc": "Free Preview 偏向短版回訪，Ritual 適合日常自我照護，Plus 提供更多場景與角色宇宙，Sanctuary 則是高端個人化模組。方案越個人化，資料權限就越需要清楚確認。",
      "faq.q9.title": "一定要先購買 Aura 頭盔嗎？",
      "faq.q9.desc": "Aura 官網以體驗流程與方案架構說明品牌服務。產品頁說明頭盔作為 NOEMA 硬體入口的角色，會員頁則呈現接續體驗的方式。",
      "faq.q10.title": "Aura 會使用哪些資料？",
      "faq.q10.desc": "Aura 將資料分成必要資料、體驗資料、個人化資料與敏感感知資料。敏感資料預設不啟用，必須在使用者明示同意後才會使用。",
      "faq.q11.title": "可以刪除或下載我的資料嗎？",
      "faq.q11.desc": "可以。資料透明中心提供刪除紀錄、下載資料摘要、關閉個人化與調整授權的互動式控制艙，落實 Aura 的可撤回設計。",
      "faq.q12.title": "資料透明和會員方案有什麼關係？",
      "faq.q12.desc": "會員方案越進階，可能啟用越多個人化內容。因此 Aura 把資料透明放在方案選擇之前與之後，讓使用者先理解資料深度，再決定靠近 NOEMA 的程度。",
      "faq.q13.title": "如果發生資料異常或產品瑕疵，Aura 會怎麼做？",
      "faq.q13.desc": "Aura 會先暫停風險功能、保留事件紀錄、於 72 小時內主動通知受影響使用者，並提供資料查看、下載、刪除或裝置檢測流程。",
      "faq.next.eyebrow": "Next Step",
      "faq.next.title": "理解邊界後，再選擇你的進入方式。",
      "faq.next.desc": "你可以先進入 NOEMA 體驗，也可以查看會員方案與資料透明中心，確認自己想要的接續深度。",
      "faq.next.ctaNoema": "進入 NOEMA",
      "faq.next.ctaPlan": "查看會員方案",
      "faq.next.ctaPrivacy": "資料透明中心",
      "product.hero.eyebrow": "Aura 意識同步頭盔",
      "product.hero.title": "進入 NOEMA 的第一道入口。",
      "product.hero.desc": "一款為沉浸式自我照護設計的穿戴裝置。它將感測、顯示、聲學與隱私控制整合在同一個安靜、可控的體驗入口。",
      "product.hero.ctaPlan": "查看會員方案",
      "product.hero.ctaPrivacy": "查看隱私設計",
      "product.hero.imageAlt": "Aura 意識同步頭盔",
      "product.principle.eyebrow": "產品原則",
      "product.principle.title": "沉浸感，不代表失去掌控。",
      "product.principle.desc": "Aura 頭盔不是為了讓使用者被動陷入體驗，而是讓每一次進入、停留與退出都保持清楚、合意與可撤回。",
      "product.principle.card1.title": "進入前先授權",
      "product.principle.card1.desc": "感測與個人化功能須經使用者明確同意後才會啟用。",
      "product.principle.card2.title": "本地端優先",
      "product.principle.card2.desc": "敏感訊號優先在裝置端處理，減少不必要的資料傳輸。",
      "product.principle.card3.title": "隨時退出",
      "product.principle.card3.desc": "使用者可以中止體驗、關閉個人化或刪除互動紀錄。",
      "product.modules.eyebrow": "核心模組",
      "product.modules.title": "把科技藏在安靜裡。",
      "product.modules.desc": "點選不同模組，查看 Aura 頭盔如何支撐 NOEMA 的沉浸、自我照護與資料透明體驗。",
      "product.modules.tabDisplay": "透明顯示面板",
      "product.modules.tabSensor": "意識感測模組",
      "product.modules.tabAudio": "沉浸聲學艙",
      "product.modules.tabPrivacy": "隱私運算核心",
      "product.modules.imageAlt": "Aura 意識同步頭盔功能示意",
      "product.modules.display.kicker": "視覺入口",
      "product.modules.display.title": "透明顯示面板",
      "product.modules.display.desc": "以低干擾的視覺介面呈現 NOEMA 場景、狀態提示與退出指令，避免資訊過載。",
      "product.modules.sensor.kicker": "感測入口",
      "product.modules.sensor.title": "意識感測模組",
      "product.modules.sensor.desc": "概念上以低光感測與狀態輸入輔助判斷體驗節奏，並在啟用前取得明確授權。",
      "product.modules.audio.kicker": "沉浸聲場",
      "product.modules.audio.title": "沉浸聲學艙",
      "product.modules.audio.desc": "以低干擾聲場建立安靜包覆感，讓使用者更容易進入專注、呼吸與整理狀態。",
      "product.modules.privacy.kicker": "資料邊界",
      "product.modules.privacy.title": "隱私運算核心",
      "product.modules.privacy.desc": "敏感訊號優先在本地端處理，搭配可關閉個人化、可下載與可刪除紀錄的控制邏輯。",
      "product.flow.eyebrow": "使用流程",
      "product.flow.title": "四步完成一次可控體驗。",
      "product.flow.step1.title": "配戴裝置",
      "product.flow.step1.desc": "啟動頭盔並確認舒適貼合。",
      "product.flow.step2.title": "設定權限",
      "product.flow.step2.desc": "選擇個人化、匿名分析與本地處理偏好。",
      "product.flow.step3.title": "選擇模式",
      "product.flow.step3.desc": "依狀態進入情緒陪伴、壓力釋放或表達練習。",
      "product.flow.step4.title": "退出與回顧",
      "product.flow.step4.desc": "結束後查看摘要，保留、下載或刪除紀錄。",
      "product.spec.eyebrow": "規格摘要",
      "product.spec.title": "為私密沉浸設計的硬體入口。",
      "product.spec.desc": "以下為產品概念規格，協助理解 Aura 如何連結硬體入口、NOEMA 體驗與資料透明設計。",
      "product.spec.item1.label": "顯示介面",
      "product.spec.item1.value": "透明曲面 OLED 面板",
      "product.spec.item2.label": "資料處理",
      "product.spec.item2.value": "本地端優先運算",
      "product.spec.item3.label": "隱私控制",
      "product.spec.item3.value": "明示授權 / 可撤回 / 可刪除",
      "product.spec.item4.label": "體驗連動",
      "product.spec.item4.value": "NOEMA 場景與 AI 陪伴者",
      "product.cta.eyebrow": "下一步",
      "product.cta.title": "選擇你的 Aura 進入方式。",
      "product.cta.desc": "從免費預覽開始，或直接查看會員方案，決定你想靠近 NOEMA 的深度。",
      "product.cta.plan": "查看會員方案",
      "product.cta.noema": "了解 NOEMA 體驗"
    },
    en: {
      "common.brandTagline": "NOEMA self-care system",
      "common.brandFooterTagline": "Privacy-first self-care",
      "common.menu": "Menu",
      "common.languageLabel": "Language",
      "common.joinAura": "Join Aura",
      "common.privacy": "Privacy",
      "menu.eyebrow": "Aura Navigation",
      "menu.title": "Caring, never overreaching.",
      "menu.desc": "Move quickly through product, NOEMA, privacy, and membership pages.",
      "footer.desc": "Aura combines consciousness-sync wearables, AI companionship, and privacy-first design for calm, controllable self-care experiences.",
      "footer.explore": "Explore",
      "footer.trust": "Trust",
      "footer.support": "Support",
      "footer.product": "Product",
      "footer.noema": "NOEMA",
      "footer.membership": "Membership",
      "footer.privacy": "Privacy",
      "footer.faq": "FAQ",
      "footer.journal": "Journal",
      "footer.crisis": "Trust Response",
      "footer.guide": "Guide",
      "footer.policy": "Privacy Policy",
      "footer.contact": "Contact",
      "footer.rights": "© 2026 Aura. All rights reserved.",
      "footer.foundation": "Designed around privacy-first self-care experiences.",

      "contact.hero.eyebrow": "Contact Aura",
      "contact.hero.title": "Let your next NOEMA entry match your pace.",
      "contact.hero.desc": "Start here for experience booking, membership questions, data permissions, or brand collaboration.",
      "contact.hero.cta": "Send a request",
      "contact.hero.secondary": "View privacy center",
      "contact.channel.experience.title": "Experience",
      "contact.channel.experience.desc": "For NOEMA, AI Companion, and first-experience questions.",
      "contact.channel.membership.title": "Membership",
      "contact.channel.membership.desc": "Compare Free Preview, Ritual, Plus, and Sanctuary.",
      "contact.channel.privacy.title": "Data & Permission",
      "contact.channel.privacy.desc": "Ask about data download, deletion, consent withdrawal, and local-first processing.",
      "contact.form.eyebrow": "Send Request",
      "contact.form.title": "Tell us what you need",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.topic": "Topic",
      "contact.form.topicExperience": "Experience booking",
      "contact.form.topicMembership": "Membership",
      "contact.form.topicPrivacy": "Data permission",
      "contact.form.topicBusiness": "Brand collaboration",
      "contact.form.message": "Message",
      "contact.form.submit": "Submit request",
      "contact.form.feedback": "We received your request. Aura will respond based on your selected topic.",
      "contact.note.title": "Response principle",
      "contact.note.desc": "Aura only uses the contact details you provide to handle this request, not for unauthorized personalization or ad tracking.",

      "age.title": "Please confirm your age before entering Aura",
      "age.desc": "Aura is designed for users aged 18 and above. After entering, you can explore the product, NOEMA experience, and data transparency design.",
      "age.yes": "I am 18 or older",
      "age.no": "Not yet 18",
      "age.denied": "Sorry, Aura website content is only available to users aged 18 and above.",

      "home.hero.eyebrow": "Aura NOEMA System",
      "home.hero.title": "<span class=\"title-line\">Not an escape.</span><span class=\"title-line\">A return to self.</span>",
      "home.hero.desc": "A controllable, quiet, and private self-care entryway built with a consciousness-sync wearable, AI companionship, and privacy-first design.",
      "home.hero.ctaTrial": "Try NOEMA for Free",
      "home.hero.ctaProduct": "Explore NOEMA",
      "home.hero.pillAge": "18+ safe experience",
      "home.hero.pillPrivacy": "Privacy first",
      "home.hero.pillConsent": "Revocable consent",
      "home.hero.pillData": "No data sales",

      "home.views.label": "Visits",
      "home.views.unit": "views",
      "home.views.note": "Live popularity signal",

      "home.trial.eyebrow": "First Experience",
      "home.trial.title": "<span class=\"title-line\">Try first.</span><span class=\"title-line\">Choose your depth later.</span>",
      "home.trial.desc": "Aura offers a 7-minute NOEMA guided preview. Choose your current state, adjust privacy permissions, and receive a recommended experience mode.",
      "home.trial.step1": "01 Choose state",
      "home.trial.step2": "02 Set permissions",
      "home.trial.step3": "03 Enter preview",
      "home.trial.cta": "Start Free Trial",

      "home.entry.eyebrow": "Start by Need",
      "home.entry.title": "Start with experience, immersion, or trust.",
      "home.entry.desc": "The homepage focuses on the first action. Product details are reserved for the product page, while experience and trust lead the journey.",
      "home.entry.card1.title": "Free Experience Booking",
      "home.entry.card1.desc": "Preview a guided 7-minute NOEMA session and feel Aura’s calm, control, and privacy.",
      "home.entry.card1.link": "Book Preview →",
      "home.entry.card2.title": "NOEMA Experience",
      "home.entry.card2.desc": "Enter a private self-care space shaped by low light, soft mist, and halo-like glow.",
      "home.entry.card2.link": "Explore NOEMA →",
      "home.entry.card3.title": "Data Transparency Center",
      "home.entry.card3.desc": "Control personalization, anonymous analytics, history deletion, and data download.",
      "home.entry.card3.link": "View Privacy Promise →",

      "home.product.eyebrow": "Aura Consciousness Sync Helmet",
      "home.product.title": "Immerse without losing control.",
      "home.product.desc": "The Aura Consciousness Sync Helmet is the hardware entry to NOEMA. It is designed not for stronger stimulation, but for experiences that can be understood, controlled, and stopped.",
      "home.product.spec1": "Transparent tech panel",
      "home.product.spec2": "Immersive acoustic module",
      "home.product.spec3": "Local-first processing",
      "home.product.cta": "Learn More",
      "home.product.imageAlt": "Aura Consciousness Sync Helmet",

      "home.noema.eyebrow": "NOEMA Experience",
      "home.noema.title": "<span class=\"title-line\">A quiet space</span><span class=\"title-line\">that belongs to you.</span>",
      "home.noema.desc": "Reflect, release stress, and return to yourself inside low light, soft mist, and halo-like glow.",
      "home.noema.cta": "Enter NOEMA",
      "home.noema.imageAlt": "NOEMA immersive experience scene",
      "home.noema.mode1": "Emotional Companion",
      "home.noema.mode2": "Stress Release",
      "home.noema.mode3": "Intimate Expression Practice",
      "home.noema.trialCta": "Book Free Preview",

      "home.privacy.eyebrow": "Privacy by Design",
      "home.privacy.title": "<span class=\"title-line\">Caring,</span><span class=\"title-line\">never overreaching.</span>",
      "home.privacy.desc": "Aura experiences are built on explicit consent, data minimization, and revocable controls. You can adjust data use at any time.",
      "home.privacy.cta": "Open Data Transparency Center",

      "home.dashboard.title": "Data Transparency Dashboard",
      "home.dashboard.statusBalanced": "Status: Balanced Mode",
      "home.dashboard.statusPersonal": "Status: Smart Personalization",
      "home.dashboard.statusControl": "Status: Maximum Control",
      "home.dashboard.secure": "Secure Connection",
      "home.dashboard.personalization": "Personalized Recommendations",
      "home.dashboard.personalizationDesc": "Recommend NOEMA scenes based on authorized preferences",
      "home.dashboard.analytics": "Anonymous Analytics",
      "home.dashboard.analyticsDesc": "Used only to improve the website experience",
      "home.dashboard.local": "Local-first Processing",
      "home.dashboard.localDesc": "Sensitive signals are processed on-device first",
      "home.dashboard.download": "Download My Data",
      "home.dashboard.delete": "Delete History",
      "home.dashboard.feedbackDefault": "Toggle permissions directly and the system will respond instantly.",
      "privacy.msg.personalizationOn": "Personalized recommendations are on: Aura will recommend NOEMA scenes based on authorized preferences.",
      "privacy.msg.personalizationOff": "Personalized recommendations are off: preference data will no longer be used for recommendations.",
      "privacy.msg.analyticsOn": "Anonymous analytics are allowed: data is used only to improve the website experience.",
      "privacy.msg.analyticsOff": "Anonymous analytics are off: your basic experience will not be affected.",
      "privacy.msg.localOn": "Local-first processing is enabled: sensitive signals are processed on-device first.",
      "privacy.msg.localOff": "Local-first reminder is off: we recommend turning it back on for stronger privacy protection.",
      "privacy.msg.downloadStart": "Preparing your data copy...",
      "privacy.msg.downloadDone": "Your data copy request is ready for download on your device.",
      "privacy.msg.deleteDone": "Interaction history has been deleted. Aura will not retain deleted content.",

      "home.membership.eyebrow": "Membership",
      "home.membership.title": "Choose your way in.",
      "home.membership.desc": "Start with a free preview, then choose the NOEMA plan that fits you.",
      "home.membership.exploreDesc": "For first-time explorers",
      "home.membership.explore1": "Basic NOEMA scenes",
      "home.membership.explore2": "Intro AI companion",
      "home.membership.explore3": "Data transparency dashboard",
      "home.membership.viewPlan": "View Plan",
      "home.membership.recommended": "Recommended",
      "home.membership.ritualDesc": "For steady self-care practice",
      "home.membership.ritual1": "Personalized recommendations",
      "home.membership.ritual2": "Reflection journal",
      "home.membership.ritual3": "Monthly review",
      "home.membership.chooseRitual": "Choose Ritual",
      "home.membership.plusDesc": "For deeper immersive experiences",
      "home.membership.plus1": "Limited worlds",
      "home.membership.plus2": "Voice narrative pack",
      "home.membership.plus3": "Deep memory script",
      "home.membership.upgrade": "Upgrade",

      "home.modal.eyebrow": "Free Preview",
      "home.modal.title": "Book a 7-minute NOEMA free trial",
      "home.modal.desc": "Enter basic details and Aura will recommend an introductory experience based on your current state.",
      "home.modal.closeAria": "Close free trial form",
      "home.modal.name": "Name",
      "home.modal.namePlaceholder": "For example: CC",
      "home.modal.email": "Email",
      "home.modal.emailPlaceholder": "Enter your email",
      "home.modal.mode": "What do you want today?",
      "home.modal.option1": "Emotional companionship",
      "home.modal.option2": "Stress release",
      "home.modal.option3": "Intimacy expression practice",
      "home.modal.consent": "I am 18 or older and agree that Aura may process the information needed for this booking.",
      "home.modal.submit": "Submit Trial Booking",
      "home.modal.success": "Your “{mode}” introductory preview has been created. You can now enter the NOEMA experience gateway.",
      "home.modal.goNoema": "Go to NOEMA Experience",
      "home.modal.later": "Maybe later",

      "noema.clean.eyebrow": "NOEMA",
      "noema.clean.title": "Enter your sensory space.",
      "noema.clean.desc": "Choose a state and begin the full-screen experience.",
      "noema.clean.calm": "Low-stimulation space",
      "noema.clean.reflection": "Inner reflection space",
      "noema.clean.companion": "AI companion space",
      "noema.clean.enter": "Enter Full-Screen Experience",
      "faq.hero.eyebrow": "Aura Guide",
      "faq.hero.title": "Before entering, know the boundaries.",
      "faq.hero.desc": "A concise guide to NOEMA, AI Companion, membership, and data transparency. Less jargon, more understandable control.",
      "faq.hero.ctaFaq": "View Questions",
      "faq.hero.ctaPrivacy": "Data Transparency Center",
      "faq.assurance.title": "Three things first",
      "faq.assurance.item1.title": "Not a medical diagnosis",
      "faq.assurance.item1.desc": "Aura is a self-care and immersive experience concept.",
      "faq.assurance.item2.title": "Sensitive data is not on by default",
      "faq.assurance.item2.desc": "Emotional and sensory signals require explicit consent.",
      "faq.assurance.item3.title": "Memory can be turned off",
      "faq.assurance.item3.desc": "AI Companion does not force interaction history to be saved.",
      "faq.principle.1.title": "Consent before entry.",
      "faq.principle.1.desc": "NOEMA begins with state selection and data permission, so immersion never overrides control.",
      "faq.principle.2.title": "Try before committing.",
      "faq.principle.2.desc": "After the free experience, choose the membership depth that fits you.",
      "faq.principle.3.title": "Transparency before personalization.",
      "faq.principle.3.desc": "The more personal the experience, the more visible the controls should be.",
      "faq.filter.eyebrow": "Question Map",
      "faq.filter.title": "Find what matters quickly.",
      "faq.filter.desc": "Choose a category and the questions narrow instantly. The content stays concise and focused on what users need before entering NOEMA.",
      "faq.filter.all": "All",
      "faq.filter.experience": "Experience Flow",
      "faq.filter.companion": "AI Companion",
      "faq.filter.membership": "Membership",
      "faq.filter.privacy": "Privacy",
      "faq.filter.count": "{count} questions",
      "faq.filter.note": "Open a question to view the answer.",
      "faq.q1.title": "Who is Aura for?",
      "faq.q1.desc": "Aura is designed for users aged 18 and above who want a calm and controllable way to reflect on emotion, stress, and companionship needs. It is not a medical diagnosis or therapy service, but a self-care and immersive experience concept.",
      "faq.q2.title": "What is NOEMA?",
      "faq.q2.desc": "NOEMA is Aura’s private sensory space. Users choose their state, enter a full-screen experience, and use scenes, sound, AI Companion, and data controls to create an immersive flow with clear control.",
      "faq.q3.title": "How does the free experience work?",
      "faq.q3.desc": "The journey begins at the NOEMA gateway, then moves through signal lock, portal entry, NOEMA space, AI Companion selection, and first dialogue calibration. It ends at the membership page, where users can decide whether to continue.",
      "faq.q4.title": "Why are experience pages full-screen?",
      "faq.q4.desc": "The full-screen design makes the experience feel like entering a separate space rather than browsing a regular website. These pages do not share the main header and footer, keeping only the necessary return path.",
      "faq.q5.title": "Does AI Companion replace human relationships?",
      "faq.q5.desc": "No. Aura’s AI Companion is a companion-style interface for reflection, lower stimulation, and rhythm. It is not designed to replace human relationships or professional support.",
      "faq.q6.title": "Can I change my AI Companion?",
      "faq.q6.desc": "Yes. Users can choose different companions based on current needs. Each companion changes tone, pace, and interaction style, but data control remains the same.",
      "faq.q7.title": "Will AI Companion remember my conversations?",
      "faq.q7.desc": "Only when users enable personalization or memory features will preferences be saved beyond the session. Users can turn memory off, delete history, or download a summary in the Data Transparency Center.",
      "faq.q8.title": "How are the membership plans different?",
      "faq.q8.desc": "Free Preview is a short revisit, Ritual supports daily self-care, Plus adds more scenes and character worlds, and Sanctuary is a premium personalization module. The more personal the plan, the clearer the permission layer must be.",
      "faq.q9.title": "Do I need to buy the Aura helmet first?",
      "faq.q9.desc": "Aura’s website presents the experience flow and plan structure. The product page explains the helmet as NOEMA’s hardware entry, while the membership page explains how users continue the experience.",
      "faq.q10.title": "What data does Aura use?",
      "faq.q10.desc": "Aura separates data into necessary data, experience data, personalization data, and sensitive sensory data. Sensitive data is off by default and requires explicit user consent before use.",
      "faq.q11.title": "Can I delete or download my data?",
      "faq.q11.desc": "Yes. The Data Transparency Center provides controls for deleting history, downloading a data summary, turning off personalization, and adjusting permissions, demonstrating Aura’s revocable design.",
      "faq.q12.title": "How does data transparency relate to membership?",
      "faq.q12.desc": "More advanced membership plans may enable deeper personalization. Aura places data transparency before and after plan selection so users understand data depth before choosing how close they want to get to NOEMA.",
      "faq.q13.title": "What happens if there is a data incident or product defect?",
      "faq.q13.desc": "Aura pauses the affected function, preserves incident logs, notifies impacted users within 72 hours, and provides data review, download, deletion, or device inspection options.",
      "faq.next.eyebrow": "Next Step",
      "faq.next.title": "Once the boundaries are clear, choose your way in.",
      "faq.next.desc": "You can enter NOEMA, view membership, or open the Data Transparency Center to confirm the continuation depth you want.",
      "faq.next.ctaNoema": "Enter NOEMA",
      "faq.next.ctaPlan": "View Membership",
      "faq.next.ctaPrivacy": "Data Transparency Center",
      "product.hero.eyebrow": "Aura Consciousness Sync Helmet",
      "product.hero.title": "The first gateway into NOEMA.",
      "product.hero.desc": "A wearable designed for immersive self-care. It brings sensing, display, acoustics, and privacy controls into one calm, controllable entry point.",
      "product.hero.ctaPlan": "View Membership",
      "product.hero.ctaPrivacy": "View Privacy Design",
      "product.hero.imageAlt": "Aura consciousness sync helmet",
      "product.principle.eyebrow": "Product Principles",
      "product.principle.title": "Immersion should not mean losing control.",
      "product.principle.desc": "The Aura helmet is not designed to pull users passively into an experience. Every entry, pause, and exit remains clear, consent-based, and reversible.",
      "product.principle.card1.title": "Permission Before Entry",
      "product.principle.card1.desc": "Sensing and personalization features activate only after explicit user consent.",
      "product.principle.card2.title": "Local First",
      "product.principle.card2.desc": "Sensitive signals are prioritized for on-device processing to reduce unnecessary transfer.",
      "product.principle.card3.title": "Exit Anytime",
      "product.principle.card3.desc": "Users can pause the experience, turn off personalization, or delete interaction history.",
      "product.modules.eyebrow": "Core Modules",
      "product.modules.title": "Technology, held quietly.",
      "product.modules.desc": "Select a module to see how the Aura helmet supports NOEMA immersion, self-care, and data transparency.",
      "product.modules.tabDisplay": "Transparent Display",
      "product.modules.tabSensor": "Consciousness Sensing",
      "product.modules.tabAudio": "Immersive Acoustics",
      "product.modules.tabPrivacy": "Privacy Compute Core",
      "product.modules.imageAlt": "Aura helmet feature illustration",
      "product.modules.display.kicker": "Visual Gateway",
      "product.modules.display.title": "Transparent Display",
      "product.modules.display.desc": "A low-distraction interface presents NOEMA scenes, state cues, and exit controls without overwhelming the user.",
      "product.modules.sensor.kicker": "Sensing Gateway",
      "product.modules.sensor.title": "Consciousness Sensing Module",
      "product.modules.sensor.desc": "Conceptual low-light sensing and state input help adjust the experience rhythm, activated only with clear permission.",
      "product.modules.audio.kicker": "Immersive Sound",
      "product.modules.audio.title": "Immersive Acoustic Chamber",
      "product.modules.audio.desc": "A subtle sound field creates a calm sense of enclosure, supporting focus, breathing, and reflection.",
      "product.modules.privacy.kicker": "Data Boundary",
      "product.modules.privacy.title": "Privacy Compute Core",
      "product.modules.privacy.desc": "Sensitive signals are processed locally first, with controls for personalization, downloads, and deletion.",
      "product.flow.eyebrow": "How It Works",
      "product.flow.title": "Four steps to a controlled experience.",
      "product.flow.step1.title": "Wear",
      "product.flow.step1.desc": "Start the helmet and confirm a comfortable fit.",
      "product.flow.step2.title": "Set Permissions",
      "product.flow.step2.desc": "Choose personalization, anonymous analytics, and local processing preferences.",
      "product.flow.step3.title": "Choose Mode",
      "product.flow.step3.desc": "Enter emotional support, stress release, or expression practice based on your state.",
      "product.flow.step4.title": "Exit & Review",
      "product.flow.step4.desc": "View a summary, then keep, download, or delete the record.",
      "product.spec.eyebrow": "Specification Summary",
      "product.spec.title": "A hardware gateway for private immersion.",
      "product.spec.desc": "These concept specifications explain how Aura connects the hardware entry, NOEMA experience, and the privacy dashboard.",
      "product.spec.item1.label": "Display",
      "product.spec.item1.value": "Transparent curved OLED panel",
      "product.spec.item2.label": "Processing",
      "product.spec.item2.value": "Local-first computing",
      "product.spec.item3.label": "Privacy Control",
      "product.spec.item3.value": "Explicit / reversible / deletable",
      "product.spec.item4.label": "Experience Link",
      "product.spec.item4.value": "NOEMA scenes and AI companion",
      "product.cta.eyebrow": "Next Step",
      "product.cta.title": "Choose your way into Aura.",
      "product.cta.desc": "Start with a preview or go directly to membership to choose how deeply you want to enter NOEMA.",
      "product.cta.plan": "View Membership",
      "product.cta.noema": "Learn NOEMA"
    }
  };

  const page = document.body.dataset.page || "";
  const currentFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  let currentLang = localStorage.getItem("auraLang") || "zh";

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.zh[key] || key;
  }

  function navLinksHTML() {
    return AURA_NAV.map(item => {
      const active = currentFile === item.href ? " is-active" : "";
      const label = currentLang === "en" ? item.en : item.zh;
      const sub = currentLang === "en" ? item.subEn : item.subZh;
      return `<a class="${active}" href="${item.href}"><span>${label}</span><small>${sub}</small></a>`;
    }).join("");
  }

  function injectHeader() {
    const headerMount = document.querySelector("[data-site-header]");
    if (!headerMount) return;

    headerMount.innerHTML = `
      <header class="site-header" aria-label="Aura 共用頁首">
        <div class="site-header__inner">
          <a class="brand-link" href="index.html" aria-label="回到 Aura 首頁">
            <img class="brand-logo" src="aura-logo.png" alt="Aura 品牌標誌">
            <span class="brand-text">
              <span class="brand-name">AURA</span>
              <span class="brand-tagline" data-i18n="common.brandTagline">${t("common.brandTagline")}</span>
            </span>
          </a>

          <div class="header-actions">
            <label class="language-switch" aria-label="${t("common.languageLabel")}">
              <span>${t("common.languageLabel")}</span>
              <select data-language-select>
                <option value="zh">繁中</option>
                <option value="en">EN</option>
              </select>
            </label>
            <button class="menu-toggle" type="button" aria-controls="site-menu" aria-expanded="false">
              <span data-i18n="common.menu">${t("common.menu")}</span>
              <span class="menu-icon" aria-hidden="true"><span></span></span>
            </button>
          </div>
        </div>
      </header>

      <div class="site-menu" id="site-menu" aria-hidden="true">
        <div class="site-menu__panel">
          <nav class="menu-nav" aria-label="主要導覽">
            ${navLinksHTML()}
          </nav>
          <aside class="menu-aside">
            <span class="eyebrow" data-i18n="menu.eyebrow">${t("menu.eyebrow")}</span>
            <h2 data-i18n="menu.title">${t("menu.title")}</h2>
            <p data-i18n="menu.desc">${t("menu.desc")}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="membership.html" data-i18n="common.joinAura">${t("common.joinAura")}</a>
              <a class="btn btn-ghost" href="privacy.html" data-i18n="common.privacy">${t("common.privacy")}</a>
            </div>
          </aside>
        </div>
      </div>
    `;

    const select = headerMount.querySelector("[data-language-select]");
    if (select) select.value = currentLang;
  }

  function injectFooter() {
    const footerMount = document.querySelector("[data-site-footer]");
    if (!footerMount) return;

    footerMount.innerHTML = `
      <footer class="site-footer" aria-label="Aura 共用頁尾">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand-link" href="index.html" aria-label="回到 Aura 首頁">
              <img class="brand-logo" src="aura-logo.png" alt="Aura 品牌標誌">
              <span class="brand-text">
                <span class="brand-name">AURA</span>
                <span class="brand-tagline" data-i18n="common.brandFooterTagline">${t("common.brandFooterTagline")}</span>
              </span>
            </a>
            <p data-i18n="footer.desc">${t("footer.desc")}</p>
          </div>

          <div class="footer-links">
            <div class="footer-col">
              <h3 data-i18n="footer.explore">${t("footer.explore")}</h3>
              <a href="product.html" data-i18n="footer.product">${t("footer.product")}</a>
              <a href="noema.html" data-i18n="footer.noema">${t("footer.noema")}</a>
              <a href="membership.html" data-i18n="footer.membership">${t("footer.membership")}</a>
            </div>
            <div class="footer-col">
              <h3 data-i18n="footer.trust">${t("footer.trust")}</h3>
              <a href="privacy.html" data-i18n="footer.privacy">${t("footer.privacy")}</a>
              <a href="crisis.html" data-i18n="footer.crisis">${t("footer.crisis")}</a>
              <a href="faq.html" data-i18n="footer.faq">${t("footer.faq")}</a>
              <a href="journal.html" data-i18n="footer.journal">${t("footer.journal")}</a>
            </div>
            <div class="footer-col">
              <h3 data-i18n="footer.support">${t("footer.support")}</h3>
              <a href="faq.html" data-i18n="footer.guide">${t("footer.guide")}</a>
              <a href="privacy.html" data-i18n="footer.policy">${t("footer.policy")}</a>
              <a href="contact.html" data-i18n="footer.contact">${t("footer.contact")}</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span data-i18n="footer.rights">${t("footer.rights")}</span>
          <span data-i18n="footer.foundation">${t("footer.foundation")}</span>
        </div>
      </footer>
    `;
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang === "en" ? "en" : "zh-Hant";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      el.setAttribute("alt", t(el.dataset.i18nAlt));
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
    });

    const menuNav = document.querySelector(".menu-nav");
    if (menuNav) menuNav.innerHTML = navLinksHTML();

    document.querySelectorAll("[data-language-select]").forEach(select => {
      select.value = currentLang;
      const label = select.closest(".language-switch");
      if (label) label.setAttribute("aria-label", t("common.languageLabel"));
      const labelSpan = label ? label.querySelector("span") : null;
      if (labelSpan) labelSpan.textContent = t("common.languageLabel");
    });

    setupPrivacyDashboard(true);
    setupProductModules(true);
    setupMembershipPage(true);
    setupFAQPage(true);
    setupAuraGuide(true);
  }

  function bindLanguage() {
    document.addEventListener("change", event => {
      if (!event.target.matches("[data-language-select]")) return;
      currentLang = event.target.value === "en" ? "en" : "zh";
      localStorage.setItem("auraLang", currentLang);
      applyTranslations();
    });
  }

  function bindMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".site-menu");
    if (!toggle || !menu) return;

    const setMenu = (open) => {
      document.body.classList.toggle("menu-open", open);
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => {
      setMenu(!menu.classList.contains("is-open"));
    });

    menu.addEventListener("click", (event) => {
      if (event.target === menu || event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenu(false);
        closeTrialModal();
      }
    });
  }

  function setupAgeGate() {
    if (page !== "home") return;
    if (sessionStorage.getItem("auraAgeConfirmed") === "true") return;

    document.body.classList.add("age-locked");
    const gate = document.createElement("div");
    gate.className = "age-gate";
    gate.innerHTML = `
      <section class="age-gate__panel" role="dialog" aria-modal="true" aria-labelledby="age-title">
        <img src="aura-logo.png" alt="Aura 品牌標誌">
        <h2 id="age-title">${t("age.title")}</h2>
        <p>${t("age.desc")}</p>
        <div class="age-gate__actions">
          <button class="btn btn-primary" type="button" data-age-yes>${t("age.yes")}</button>
          <button class="btn btn-ghost" type="button" data-age-no>${t("age.no")}</button>
        </div>
      </section>
    `;
    document.body.appendChild(gate);

    gate.querySelector("[data-age-yes]").addEventListener("click", () => {
      sessionStorage.setItem("auraAgeConfirmed", "true");
      document.body.classList.remove("age-locked");
      gate.remove();
    });

    gate.querySelector("[data-age-no]").addEventListener("click", () => {
      gate.querySelector("p").textContent = t("age.denied");
    });
  }

  function setupReveal() {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(target => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(target => observer.observe(target));
  }

  function setupPrivacyDashboard(translationOnly = false) {
    const feedback = document.getElementById("dashboard-feedback");
    const status = document.getElementById("privacy-status");
    const toggles = document.querySelectorAll("[data-privacy-toggle]");
    if (!feedback || !status || !toggles.length) return;

    const updateStatus = (message) => {
      const checked = Array.from(toggles).filter(input => input.checked).length;
      const key = checked >= 3 ? "home.dashboard.statusPersonal" : checked === 2 ? "home.dashboard.statusBalanced" : "home.dashboard.statusControl";
      status.textContent = t(key);
      if (message) feedback.textContent = message;
      if (!message && translationOnly) feedback.textContent = t("home.dashboard.feedbackDefault");
    };

    if (!translationOnly) {
      toggles.forEach(toggle => {
        toggle.addEventListener("change", () => {
          const name = toggle.dataset.privacyToggle;
          const isOn = toggle.checked;
          const messages = {
            personalization: isOn ? t("privacy.msg.personalizationOn") : t("privacy.msg.personalizationOff"),
            analytics: isOn ? t("privacy.msg.analyticsOn") : t("privacy.msg.analyticsOff"),
            local: isOn ? t("privacy.msg.localOn") : t("privacy.msg.localOff")
          };
          updateStatus(messages[name]);
        });
      });

      const downloadBtn = document.querySelector("[data-download-data]");
      if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
          feedback.textContent = t("privacy.msg.downloadStart");
          setTimeout(() => {
            feedback.textContent = t("privacy.msg.downloadDone");
          }, 700);
        });
      }

      const deleteBtn = document.querySelector("[data-delete-history]");
      if (deleteBtn) {
        deleteBtn.addEventListener("click", () => {
          feedback.textContent = t("privacy.msg.deleteDone");
        });
      }
    }

    updateStatus();
  }


  function setupProductModules(translationOnly = false) {
    const tabs = document.querySelectorAll("[data-product-tab]");
    const kicker = document.getElementById("module-kicker");
    const title = document.getElementById("module-title");
    const desc = document.getElementById("module-desc");
    if (!tabs.length || !kicker || !title || !desc) return;

    const updatePanel = (key) => {
      const activeKey = key || document.querySelector("[data-product-tab].is-active")?.dataset.productTab || "display";
      kicker.textContent = t(`product.modules.${activeKey}.kicker`);
      title.textContent = t(`product.modules.${activeKey}.title`);
      desc.textContent = t(`product.modules.${activeKey}.desc`);
      tabs.forEach(tab => {
        const isActive = tab.dataset.productTab === activeKey;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
    };

    if (!translationOnly) {
      tabs.forEach(tab => {
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-selected", tab.classList.contains("is-active") ? "true" : "false");
        tab.addEventListener("click", () => updatePanel(tab.dataset.productTab));
      });
    }

    updatePanel();
  }

  function openTrialModal() {
    const modal = document.getElementById("trial-modal");
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const firstInput = modal.querySelector("input, select, button");
    if (firstInput) setTimeout(() => firstInput.focus(), 80);
  }

  function closeTrialModal() {
    const modal = document.getElementById("trial-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function resetTrialModal() {
    const form = document.querySelector("[data-trial-form]");
    const success = document.querySelector("[data-trial-success]");
    const feedback = document.getElementById("trial-feedback");
    if (form) form.hidden = false;
    if (success) success.hidden = true;
    if (feedback) feedback.textContent = "";
  }

  function setupTrialModal() {
    document.querySelectorAll("[data-open-trial]").forEach(btn => {
      btn.addEventListener("click", () => {
        resetTrialModal();
        openTrialModal();
      });
    });
    document.querySelectorAll("[data-close-trial]").forEach(btn => {
      btn.addEventListener("click", closeTrialModal);
    });

    const form = document.querySelector("[data-trial-form]");
    const success = document.querySelector("[data-trial-success]");
    const feedback = document.getElementById("trial-feedback");
    if (!form || !feedback || !success) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const mode = new FormData(form).get("mode") || "NOEMA";
      feedback.textContent = (page === "membership" ? t("membership.modal.success") : t("home.modal.success")).replace("{mode}", mode);
      form.reset();
      form.hidden = true;
      success.hidden = false;
      const noemaButton = success.querySelector("a");
      if (noemaButton) setTimeout(() => noemaButton.focus(), 80);
    });
  }



  function setupMembershipPage(translationOnly = false) {
    const cards = document.querySelectorAll("[data-plan-card]");
    if (!cards.length) return;

    const companionMap = {
      luna: { name: "Luna", hintZh: "你的校準偏向低刺激與情緒承接，建議從 NOEMA Ritual 開始。", hintEn: "Your calibration leans toward low stimulation and emotional holding. NOEMA Ritual is a good starting point.", plan: "ritual" },
      seraphina: { name: "Seraphina", hintZh: "你的校準偏向清楚整理與理性引導，適合 Ritual 或 Plus。", hintEn: "Your calibration leans toward clear reflection and rational guidance. Ritual or Plus may fit best.", plan: "ritual" },
      viora: { name: "Viora", hintZh: "你的校準偏向感官探索與邊界確認，建議選擇保留控制權的 Ritual。", hintEn: "Your calibration leans toward sensory exploration and boundary checks. Ritual keeps the control layer visible.", plan: "ritual" },
      miyu: { name: "Miyu", hintZh: "你的校準偏向溫柔照護與放慢節奏，Free Preview 或 Ritual 都很適合。", hintEn: "Your calibration leans toward gentle care and slower pacing. Free Preview or Ritual may fit well.", plan: "preview" },
      nova: { name: "Nova", hintZh: "你的校準偏向探索與新路徑，Plus 能提供更多可控探索空間。", hintEn: "Your calibration leans toward exploration. Plus offers more controlled paths to explore.", plan: "plus" },
      lyra: { name: "Lyra", hintZh: "你的校準偏向安靜傾聽與低分析回應，建議從 Ritual 延伸。", hintEn: "Your calibration leans toward quiet listening and low-analysis responses. Ritual is a good extension.", plan: "ritual" },
      kairo: { name: "Kairo", hintZh: "你的校準偏向沉著整理與穩定陪伴，建議從 NOEMA Ritual 開始。", hintEn: "Your calibration leans toward calm reflection and steady companionship. NOEMA Ritual is a good starting point.", plan: "ritual" },
      riven: { name: "Riven", hintZh: "你的校準偏向直接感受與邊界確認，建議選擇保留控制權的 Ritual。", hintEn: "Your calibration leans toward direct feeling and boundary checks. Ritual keeps control visible.", plan: "ritual" },
      orion: { name: "Orion", hintZh: "你的校準偏向理性判斷與資料邊界，Ritual 或 Plus 都很適合。", hintEn: "Your calibration leans toward rational judgment and data boundaries. Ritual or Plus may fit best.", plan: "ritual" },
      ren: { name: "Ren", hintZh: "你的校準偏向輕盈陪伴與低壓對話，Free Preview 或 Ritual 都很適合。", hintEn: "Your calibration leans toward light companionship and low-pressure dialogue. Free Preview or Ritual may fit well.", plan: "preview" },
      valen: { name: "Valen", hintZh: "你的校準偏向關係理解與成熟陪伴，建議從 Ritual 延伸到 Plus。", hintEn: "Your calibration leans toward relational understanding and mature companionship. Ritual can extend into Plus.", plan: "plus" },
      kael: { name: "Kael", hintZh: "你的校準偏向行動整理與重新掌控，Plus 能提供更完整的回顧與路徑。", hintEn: "Your calibration leans toward action and regaining control. Plus offers fuller review and paths.", plan: "plus" }
    };

    const planNames = {
      preview: "Free Preview",
      ritual: "NOEMA Ritual",
      plus: "NOEMA Plus",
      sanctuary: "Sanctuary"
    };

    const params = new URLSearchParams(location.search);
    const selectedCompanion = params.get("companion") || localStorage.getItem("auraSelectedCompanion") || "luna";
    const companion = companionMap[selectedCompanion] || companionMap.luna;
    const nameEl = document.getElementById("membershipCompanionName");
    const hintEl = document.getElementById("membershipCompanionHint");
    const recommendedEl = document.getElementById("membershipRecommendedPlan");
    const selectedTitle = document.getElementById("membershipSelectedTitle");
    const selectedDesc = document.getElementById("membershipSelectedDesc");
    const modalPlan = document.getElementById("membershipModalPlan");

    if (nameEl) nameEl.textContent = companion.name;
    if (hintEl) hintEl.textContent = currentLang === "en" ? companion.hintEn : companion.hintZh;
    if (recommendedEl) recommendedEl.textContent = planNames[companion.plan] || "NOEMA Ritual";

    const setPlan = (plan, userAction = false) => {
      cards.forEach(card => card.classList.toggle("is-selected", card.dataset.plan === plan));
      if (selectedTitle) selectedTitle.textContent = t(`membership.selected.${plan}.title`);
      if (selectedDesc) selectedDesc.textContent = t(`membership.selected.${plan}.desc`);
      if (modalPlan) modalPlan.value = planNames[plan] || "NOEMA Ritual";
      if (userAction) localStorage.setItem("auraSelectedPlan", plan);
    };

    const currentPlan = localStorage.getItem("auraSelectedPlan") || companion.plan || "ritual";
    setPlan(currentPlan);

    if (!translationOnly) {
      cards.forEach(card => {
        const btn = card.querySelector("[data-choose-plan]");
        if (btn) btn.addEventListener("click", () => setPlan(card.dataset.plan || "ritual", true));
      });
      document.querySelectorAll("[data-billing]").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("[data-billing]").forEach(item => item.classList.remove("is-active"));
          btn.classList.add("is-active");
          localStorage.setItem("auraBillingCycle", btn.dataset.billing || "monthly");
        });
      });
    }
  }



  function setupFAQPage(translationOnly = false) {
    const root = document.querySelector("[data-faq-page]");
    if (!root) return;

    const filters = root.querySelectorAll("[data-faq-filter]");
    const items = root.querySelectorAll("[data-faq-item]");
    const count = root.querySelector("[data-faq-count]");

    const applyFilter = (category) => {
      const activeCategory = category || root.dataset.activeFaqFilter || "all";
      root.dataset.activeFaqFilter = activeCategory;
      let visible = 0;

      filters.forEach(filter => {
        const isActive = filter.dataset.faqFilter === activeCategory;
        filter.classList.toggle("is-active", isActive);
        filter.setAttribute("aria-selected", String(isActive));
      });

      items.forEach(item => {
        const categories = (item.dataset.category || "").split(/\s+/);
        const shouldShow = activeCategory === "all" || categories.includes(activeCategory);
        item.classList.toggle("is-hidden", !shouldShow);
        if (shouldShow) visible += 1;
      });

      if (count) count.textContent = t("faq.filter.count").replace("{count}", visible);
    };

    if (!translationOnly) {
      filters.forEach(filter => {
        filter.setAttribute("role", "tab");
        filter.addEventListener("click", () => {
          applyFilter(filter.dataset.faqFilter || "all");
        });
      });

      items.forEach(item => {
        item.addEventListener("toggle", () => {
          if (!item.open) return;
          items.forEach(other => {
            if (other !== item && !other.classList.contains("is-hidden")) other.open = false;
          });
        });
      });
    }

    applyFilter(root.dataset.activeFaqFilter || "all");
  }

  function setupPrivacyCenter() {
    const root = document.querySelector("[data-privacy-center]");
    if (!root) return;

    const toggles = root.querySelectorAll("[data-center-toggle]");
    const rows = root.querySelectorAll(".pc-permission-row");
    const scoreEl = root.querySelector("[data-privacy-score]");
    const statusEl = root.querySelector("[data-status-label]");
    const ring = root.querySelector(".pc-status-ring");
    const summary = root.querySelector("[data-permission-summary]");
    const feedback = root.querySelector("[data-center-feedback]");
    const personalDepth = root.querySelector("[data-personal-depth]");
    const personalLabel = root.querySelector("[data-personal-label]");

    const messages = {
      personalization: {
        on: "已開啟個人化洞察：Aura 會依授權偏好推薦 NOEMA 場景與語氣。",
        off: "已關閉個人化洞察：系統不再使用偏好資料進行推薦。"
      },
      sensitive: {
        on: "已開啟敏感感知資料：此層級需要明示授權，並可隨時撤回。",
        off: "已關閉敏感感知資料：情緒與同步訊號不會延伸保存。"
      },
      analytics: {
        on: "已允許匿名分析：僅用於改善網站與體驗流程。",
        off: "已關閉匿名分析：基本體驗不受影響。"
      }
    };

    const updateDashboard = (message) => {
      let score = 78;
      const active = [];
      toggles.forEach(toggle => {
        const row = toggle.closest(".pc-permission-row");
        if (row) row.classList.toggle("is-on", toggle.checked);
        if (toggle.checked) active.push(toggle.dataset.centerToggle);
      });

      if (active.includes("personalization")) score += 6; else score += 8;
      if (!active.includes("sensitive")) score += 6;
      if (!active.includes("analytics")) score += 4;
      score = Math.min(score, 96);

      if (scoreEl) scoreEl.textContent = score;
      if (ring) ring.style.setProperty("--score-angle", `${Math.round(score / 100 * 360)}deg`);
      if (statusEl) statusEl.textContent = score >= 90 ? "Excellent" : score >= 84 ? "Protected" : "Controlled";
      if (summary) summary.textContent = `${active.length + 1} 項開啟`;
      if (feedback && message) feedback.textContent = message;
    };

    toggles.forEach(toggle => {
      toggle.addEventListener("change", () => {
        const key = toggle.dataset.centerToggle;
        const state = toggle.checked ? "on" : "off";
        updateDashboard(messages[key] ? messages[key][state] : "權限已更新。");
      });
    });

    if (personalDepth && personalLabel) {
      const updatePersonal = () => {
        const value = Number(personalDepth.value || 0);
        const label = value < 35 ? "Minimal" : value < 72 ? "Balanced" : "Deep";
        personalLabel.textContent = label;
        if (feedback) {
          feedback.textContent = label === "Minimal"
            ? "個人化深度已降低：只保留必要推薦。"
            : label === "Deep"
              ? "個人化深度提高：建議同步檢查敏感資料授權。"
              : "個人化維持平衡：保留推薦，但不擴張權限。";
        }
      };
      personalDepth.addEventListener("input", updatePersonal);
      updatePersonal();
    }

    root.querySelectorAll("[data-center-action]").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.centerAction;
        if (!feedback) return;
        if (action === "delete") {
          feedback.textContent = "互動紀錄已清除。Aura 不會保留已刪除內容。";
        } else if (action === "download") {
          feedback.textContent = "資料摘要已準備完成，請至你的裝置下載保存。";
        }
      });
    });

    const depthData = {
      preview: {
        title: "Free Preview｜最少資料",
        desc: "只保留當次體驗狀態，不延伸 Companion 記憶。"
      },
      ritual: {
        title: "NOEMA Ritual｜日常偏好",
        desc: "保存場景、節奏與語氣偏好，每次進入前仍可重新確認。"
      },
      plus: {
        title: "NOEMA Plus｜陪伴記憶",
        desc: "可開啟 AI Companion 記憶與體驗回顧，使用者可一鍵清除。"
      },
      sanctuary: {
        title: "Sanctuary｜深度個人化",
        desc: "深度劇本與聲紋敘事需額外授權，敏感資料預設不自動啟用。"
      }
    };
    const depthTitle = root.querySelector("[data-depth-title]");
    const depthDesc = root.querySelector("[data-depth-desc]");
    root.querySelectorAll("[data-depth-plan]").forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.depthPlan;
        root.querySelectorAll("[data-depth-plan]").forEach(item => item.classList.remove("is-active"));
        btn.classList.add("is-active");
        if (depthTitle) depthTitle.textContent = depthData[key].title;
        if (depthDesc) depthDesc.textContent = depthData[key].desc;
        if (feedback) feedback.textContent = `已切換為 ${depthData[key].title} 的資料深度說明。`;
      });
    });

    updateDashboard();
  }




  function setupContactPage() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const feedback = document.querySelector("[data-contact-feedback]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (feedback) {
        feedback.textContent = t("contact.form.feedback");
        feedback.classList.add("is-show");
      }
      form.reset();
    });
  }



  function setupAuraGuide(translationOnly = false) {
    const guideEnabledPages = new Set([
      "index.html",
      "product.html",
      "noema.html",
      "membership.html",
      "privacy.html",
      "faq.html",
      "journal.html",
      "contact.html"
    ]);
    if (!guideEnabledPages.has(currentFile)) return;

    let root = document.querySelector("[data-aura-guide]");
    const wasOpen = root && root.classList.contains("is-open");
    const previousQuestion = root?.dataset.activeQuestion || "start";

    if (!root) {
      root = document.createElement("aside");
      root.className = "aura-guide";
      root.setAttribute("data-aura-guide", "");
      root.setAttribute("aria-label", currentLang === "en" ? "Aura Guide" : "Aura 智慧導覽");
      document.body.appendChild(root);
    }

    const guideCopy = {
      zh: {
        label: "Aura Guide",
        title: "智慧導覽",
        intro: "快速找到 NOEMA、會員方案與資料透明的答案。",
        open: "開啟 Aura Guide",
        close: "收合",
        related: "前往頁面",
        questions: [
          {
            id: "start",
            q: "Aura 是什麼？",
            a: "Aura 是結合意識同步穿戴裝置、NOEMA 感知空間與 AI Companion 的自我照護系統，重點是可控、私密與有邊界的陪伴。",
            cta: "看產品介紹",
            href: "product.html"
          },
          {
            id: "noema",
            q: "如何開始 NOEMA？",
            a: "從 NOEMA 入口進入全畫面體驗，依序完成訊號鎖定、場景載入與 AI Companion 喚醒。",
            cta: "進入 NOEMA",
            href: "noema.html"
          },
          {
            id: "companion",
            q: "AI Companion 會記住我嗎？",
            a: "只有在你選擇方案並開啟記憶時，才會保留偏好；你可以在資料透明中心關閉、清除或撤回授權。",
            cta: "查看資料透明",
            href: "privacy.html"
          },
          {
            id: "plans",
            q: "會員方案差在哪？",
            a: "方案差異主要在體驗回訪、日常偏好、AI 記憶與深度個人化程度。你可以先從推薦方案開始，再依需求調整。",
            cta: "比較會員方案",
            href: "membership.html"
          },
          {
            id: "privacy",
            q: "我的資料安全嗎？",
            a: "Aura 以本地端優先、明示授權、可撤回與可刪除為設計原則，敏感感知資料不會預設啟用。",
            cta: "管理資料權限",
            href: "privacy.html"
          },
          {
            id: "contact",
            q: "想預約或聯絡？",
            a: "你可以留下體驗預約、會員方案、資料權限或品牌合作需求，Aura 會依你的主題回覆。",
            cta: "聯絡我們",
            href: "contact.html"
          }
        ]
      },
      en: {
        label: "Aura Guide",
        title: "Smart Guide",
        intro: "Find quick answers about NOEMA, membership, and data transparency.",
        open: "Open Aura Guide",
        close: "Close",
        related: "Go to page",
        questions: [
          {
            id: "start",
            q: "What is Aura?",
            a: "Aura combines a consciousness-sync wearable, NOEMA sensory spaces, and AI Companion experiences for private, controlled self-care.",
            cta: "View Product",
            href: "product.html"
          },
          {
            id: "noema",
            q: "How do I start NOEMA?",
            a: "Enter from the NOEMA gateway, then complete signal lock, scene loading, and AI Companion awakening.",
            cta: "Enter NOEMA",
            href: "noema.html"
          },
          {
            id: "companion",
            q: "Will AI Companion remember me?",
            a: "Memory is only kept when you choose a plan and enable it. You can turn it off, clear it, or revoke permissions in the Privacy Center.",
            cta: "View Privacy Center",
            href: "privacy.html"
          },
          {
            id: "plans",
            q: "Which plan should I choose?",
            a: "Plans differ by revisit access, daily preferences, AI memory, and depth of personalization. Start with the recommended plan and adjust later.",
            cta: "Compare Plans",
            href: "membership.html"
          },
          {
            id: "privacy",
            q: "Is my data safe?",
            a: "Aura is designed around local-first processing, explicit permission, revocable consent, and deletable records. Sensitive sensory data is off by default.",
            cta: "Manage Permissions",
            href: "privacy.html"
          },
          {
            id: "contact",
            q: "Need help or booking?",
            a: "Send a request about experience booking, membership, data permissions, or brand collaboration. Aura will reply by topic.",
            cta: "Contact Aura",
            href: "contact.html"
          }
        ]
      }
    };

    const copy = guideCopy[currentLang] || guideCopy.zh;
    const active = copy.questions.find(item => item.id === previousQuestion) || copy.questions[0];

    root.className = `aura-guide${wasOpen ? " is-open" : ""}`;
    root.dataset.activeQuestion = active.id;
    root.innerHTML = `
      <button class="aura-guide__launcher" type="button" aria-expanded="${wasOpen ? "true" : "false"}" aria-label="${copy.open}">
        <span class="aura-guide__orb" aria-hidden="true"></span>
        <span class="aura-guide__launcher-text">
          <small>${copy.label}</small>
          <strong>${copy.title}</strong>
        </span>
      </button>

      <section class="aura-guide__panel" aria-label="${copy.label}">
        <div class="aura-guide__head">
          <div>
            <span>${copy.label}</span>
            <h2>${copy.title}</h2>
          </div>
          <button class="aura-guide__close" type="button" aria-label="${copy.close}">×</button>
        </div>
        <p class="aura-guide__intro">${copy.intro}</p>
        <div class="aura-guide__questions" role="list">
          ${copy.questions.map(item => `
            <button class="aura-guide__question${item.id === active.id ? " is-active" : ""}" type="button" data-guide-question="${item.id}">
              ${item.q}
            </button>
          `).join("")}
        </div>
        <div class="aura-guide__answer" aria-live="polite">
          <p>${active.a}</p>
          <a class="aura-guide__link" href="${active.href}">${active.cta}<span aria-hidden="true"> →</span></a>
        </div>
      </section>
    `;

    const launcher = root.querySelector(".aura-guide__launcher");
    const close = root.querySelector(".aura-guide__close");
    const answer = root.querySelector(".aura-guide__answer p");
    const answerLink = root.querySelector(".aura-guide__link");

    const setOpen = (open) => {
      root.classList.toggle("is-open", open);
      launcher.setAttribute("aria-expanded", String(open));
    };

    launcher.addEventListener("click", () => setOpen(!root.classList.contains("is-open")));
    close.addEventListener("click", () => setOpen(false));

    root.querySelectorAll("[data-guide-question]").forEach(button => {
      button.addEventListener("click", () => {
        const selected = copy.questions.find(item => item.id === button.dataset.guideQuestion) || copy.questions[0];
        root.dataset.activeQuestion = selected.id;
        root.querySelectorAll("[data-guide-question]").forEach(item => item.classList.toggle("is-active", item === button));
        if (answer) answer.textContent = selected.a;
        if (answerLink) {
          answerLink.href = selected.href;
          answerLink.innerHTML = `${selected.cta}<span aria-hidden="true"> →</span>`;
        }
      });
    });

    if (!document.body.dataset.auraGuideEscapeBound) {
      document.body.dataset.auraGuideEscapeBound = "true";
      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        const guide = document.querySelector("[data-aura-guide]");
        const guideLauncher = guide?.querySelector(".aura-guide__launcher");
        if (guide && guide.classList.contains("is-open")) {
          guide.classList.remove("is-open");
          if (guideLauncher) guideLauncher.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  function setupHomeSignalIndex() {
    const root = document.querySelector("[data-home-signal]");
    if (!root) return;

    const viewEl = root.querySelector("[data-stat-views]");
    const nodeEl = root.querySelector("[data-stat-nodes]");
    const viewKey = "auraFormalViewCount99998Live";
    const baseViews = 99998;
    const storedViews = Number(localStorage.getItem(viewKey));
    const currentViews = Number.isFinite(storedViews) && storedViews >= baseViews ? storedViews + 1 : baseViews;
    localStorage.setItem(viewKey, String(currentViews));

    const animateNumber = (el, target, duration = 900) => {
      if (!el) return;
      const start = 0;
      const startedAt = performance.now();
      const step = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(start + (target - start) * eased);
        el.textContent = value.toLocaleString("zh-Hant");
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    animateNumber(viewEl, currentViews, 980);
    animateNumber(nodeEl, 7, 720);
  }

  function setupHeroVideoFallback() {
    document.querySelectorAll("[data-hero-video]").forEach(video => {
      const media = video.closest(".product-hero-video__media");
      if (!media) return;

      const markUnavailable = () => media.classList.add("video-unavailable");

      video.addEventListener("error", markUnavailable);
      video.querySelectorAll("source").forEach(source => {
        source.addEventListener("error", markUnavailable);
      });

      const playPromise = video.play && video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Autoplay may be blocked in some browsers. Keep poster/fallback visible.
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectHeader();
    injectFooter();
    bindMenu();
    bindLanguage();
    applyTranslations();
    setupAgeGate();
    setupReveal();
    setupPrivacyDashboard();
    setupProductModules();
    setupMembershipPage();
    setupFAQPage();
    setupPrivacyCenter();
    setupContactPage();
    setupHomeSignalIndex();
    setupAuraGuide();
    setupTrialModal();
    setupHeroVideoFallback();
  });
})();
