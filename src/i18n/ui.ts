export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export const defaultLang = 'ja' as const;

export type Lang = keyof typeof languages;

export const ui = {
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.features': '機能',
    'nav.pricing': '料金',
    'nav.download': 'ダウンロード',
    'nav.faq': 'よくある質問',
    'nav.contact': 'お問い合わせ',
    'nav.roadmap': 'ロードマップ',

    // Hero
    'hero.title': 'メールが届くと、ゴールデンレトリーバーが教えてくれる',
    'hero.subtitle':
      'かわいいゴールデンレトリバーがメール通知をお届けするデスクトップアプリ',
    'hero.cta': '無料ダウンロード',
    'hero.cta.secondary': '機能を見る',

    // ValueProposition
    'valueProposition.title': 'Motekitaが選ばれる理由',

    // Features
    'features.title': '主な機能',
    'features.subtitle': 'シンプルで使いやすい、それでいて楽しい',
    'features.privacy.title': 'プライバシー保護',
    'features.privacy.desc':
      'メールの本文は一切見ません。誰から来たか、タイトルは何かだけを確認します。',
    'features.lightweight.title': '軽くて快適',
    'features.lightweight.desc':
      'パソコンの動作に影響を与えず、普段通りに作業できます。',
    'features.crossplatform.title': 'どのパソコンでも使える',
    'features.crossplatform.desc':
      'Windows、macOS、Linuxに対応。お使いの環境で同じように楽しめます。',
    'features.spamdetection.title': 'スパム判定',
    'features.spamdetection.desc':
      '不要なメールを自動で判定し、大事な通知だけをお知らせします。（プレミアム）',
    'features.animation.title': 'かわいいアニメーション',
    'features.animation.desc':
      'メールが届くたびに、ゴールデンレトリーバーがかわいく反応します。',

    // HowItWorks
    'howItWorks.title': '使い方はとても簡単',
    'howItWorks.step1.title': 'アプリをインストール',
    'howItWorks.step1.desc': 'お使いのOSに合わせたインストーラーをダウンロードして、簡単セットアップ。',
    'howItWorks.step2.title': 'Gmailと接続',
    'howItWorks.step2.desc': 'Googleアカウントでサインインするだけ。メールの読み取り権限は必要ありません。',
    'howItWorks.step3.title': '通知を受け取る',
    'howItWorks.step3.desc': 'メールが届くたびに、ゴールデンレトリーバーがデスクトップに現れてお知らせします。',

    // FeatureHighlights
    'featureHighlights.title': '豊富な機能',
    'featureHighlights.cta': '全機能を見る',

    // PricingSummary
    'pricingSummary.title': 'シンプルな料金プラン',
    'pricingSummary.subtitle': '基本機能は完全無料。プレミアム機能も買い切りでお求めやすく。',
    'pricingSummary.cta': '料金の詳細を見る',

    // FinalCTA
    'finalCTA.title': '今すぐ無料でダウンロード',
    'finalCTA.subtitle': 'インストールは簡単。すぐに使い始められます。完全無料でお試しください。',
    'finalCTA.cta': '無料ダウンロード',

    // Pricing
    'pricing.title': '料金プラン',
    'pricing.subtitle': 'シンプルな料金体系',
    'pricing.free': '無料版',
    'pricing.free.price': '¥0',
    'pricing.free.desc': '基本機能をすべて無料で',
    'pricing.free.feature1': 'Gmail メール通知',
    'pricing.free.feature2': 'ゴールデンレトリーバーのアニメーション',
    'pricing.free.feature3': 'システムトレイ常駐',
    'pricing.premium': 'プレミアム',
    'pricing.premium.price': '¥500',
    'pricing.premium.once': '買い切り',
    'pricing.premium.desc': '高度な機能をアンロック',
    'pricing.premium.feature1': '無料版のすべての機能',
    'pricing.premium.feature2': 'スパム判定機能',
    // System Requirements
    'requirements.title': 'システム要件',
    'requirements.os': '対応OS',
    'requirements.windows': 'Windows 11以降',
    'requirements.macos': 'macOS 14以降',
    'requirements.linux': 'Linux (GTK3対応)',
    'requirements.specs': '推奨スペック',
    'requirements.memory': 'メモリ: 4GB以上',
    'requirements.storage': 'ストレージ: 100MB以上',

    // Download
    'download.title': 'ダウンロード',
    'download.subtitle': 'お使いのOSを選択してください',
    'download.windows': 'Windows版',
    'download.macos': 'macOS版',
    'download.linux': 'Linux版',

    // Footer
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'footer.changelog': 'ロードマップ',
    'footer.contact': 'お問い合わせ',
    'footer.copyright': '© 2025 Motekita. All rights reserved.',

    // FAQ
    'faq.title': 'よくある質問',

    // Contact
    'contact.title': 'お問い合わせ',
    'contact.desc':
      'ご質問やフィードバックがありましたら、お気軽にお問い合わせください。',
    'contact.email': 'メールでのお問い合わせ',

    // Legal pages
    'terms.title': '利用規約',
    'privacy.title': 'プライバシーポリシー',
    'roadmap.title': 'ロードマップ',

    // Features page
    'features.page.title': '機能一覧',
    'features.page.subtitle': 'Motekitaが提供するすべての機能をご覧ください',
    'features.page.free.title': '無料機能',
    'features.page.premium.title': 'プレミアム機能',
    'features.page.cta': '今すぐダウンロード',

    // Pricing page
    'pricing.page.title': '料金プラン',
    'pricing.page.subtitle': 'シンプルな料金体系。基本機能は完全無料でお使いいただけます。',
    'pricing.page.faq.title': 'よくある質問',
    'pricing.page.faq.q1': 'プレミアムは買い切りですか？',
    'pricing.page.faq.a1': 'はい、一度お支払いいただければ永久にご利用いただけます。',
    'pricing.page.faq.q2': '返金はできますか？',
    'pricing.page.faq.a2': 'ご購入から14日以内であれば全額返金いたします。',
    'pricing.page.cta': '無料版をダウンロード',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.roadmap': 'Roadmap',

    // Hero
    'hero.title': 'Your Dog Tells You When Mail Arrives',
    'hero.subtitle':
      'A desktop app where a cute Golden Retriever notifies you of new emails',
    'hero.cta': 'Free Download',
    'hero.cta.secondary': 'See Features',

    // ValueProposition
    'valueProposition.title': 'Why Choose Motekita',

    // Features
    'features.title': 'Key Features',
    'features.subtitle': 'Simple, easy to use, and fun',
    'features.privacy.title': 'Privacy Protected',
    'features.privacy.desc':
      'Never looks at email content. Only checks who sent it and what the subject is.',
    'features.lightweight.title': 'Light and Smooth',
    'features.lightweight.desc':
      'Works without affecting your computer. You can work as usual.',
    'features.crossplatform.title': 'Works on Any Computer',
    'features.crossplatform.desc':
      'Available on Windows, macOS, and Linux. Enjoy the same experience on your device.',
    'features.spamdetection.title': 'Spam Detection',
    'features.spamdetection.desc':
      'Automatically filters unwanted emails so only important ones notify you. (Premium)',
    'features.animation.title': 'Cute Animations',
    'features.animation.desc':
      'Every time an email arrives, the Golden Retriever reacts in the cutest way.',

    // HowItWorks
    'howItWorks.title': 'Getting Started is Easy',
    'howItWorks.step1.title': 'Install the App',
    'howItWorks.step1.desc': 'Download the installer for your OS and set up in minutes.',
    'howItWorks.step2.title': 'Connect Gmail',
    'howItWorks.step2.desc': 'Just sign in with your Google account. No email reading permissions needed.',
    'howItWorks.step3.title': 'Get Notified',
    'howItWorks.step3.desc': 'Every time an email arrives, a Golden Retriever appears on your desktop to let you know.',

    // FeatureHighlights
    'featureHighlights.title': 'Feature-Rich',
    'featureHighlights.cta': 'See all features',

    // PricingSummary
    'pricingSummary.title': 'Simple Pricing',
    'pricingSummary.subtitle': 'Core features are free. Premium is a one-time purchase.',
    'pricingSummary.cta': 'See pricing details',

    // FinalCTA
    'finalCTA.title': 'Download for Free Today',
    'finalCTA.subtitle': 'Easy to install. Start immediately. Try it completely free.',
    'finalCTA.cta': 'Free Download',

    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Simple pricing structure',
    'pricing.free': 'Free',
    'pricing.free.price': '$0',
    'pricing.free.desc': 'All basic features for free',
    'pricing.free.feature1': 'Gmail notifications',
    'pricing.free.feature2': 'Dog animations',
    'pricing.free.feature3': 'System tray resident',
    'pricing.premium': 'Premium',
    'pricing.premium.price': '$5',
    'pricing.premium.once': 'one-time',
    'pricing.premium.desc': 'Unlock advanced features',
    'pricing.premium.feature1': 'All free features',
    'pricing.premium.feature2': 'Spam detection',
    // System Requirements
    'requirements.title': 'System Requirements',
    'requirements.os': 'Supported OS',
    'requirements.windows': 'Windows 11 or later',
    'requirements.macos': 'macOS 14 or later',
    'requirements.linux': 'Linux (GTK3 compatible)',
    'requirements.specs': 'Recommended Specs',
    'requirements.memory': 'Memory: 4GB or more',
    'requirements.storage': 'Storage: 100MB or more',

    // Download
    'download.title': 'Download',
    'download.subtitle': 'Select your operating system',
    'download.windows': 'Windows',
    'download.macos': 'macOS',
    'download.linux': 'Linux',

    // Footer
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.changelog': 'Roadmap',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Motekita. All rights reserved.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',

    // Contact
    'contact.title': 'Contact',
    'contact.desc':
      'If you have any questions or feedback, please feel free to contact us.',
    'contact.email': 'Contact via Email',

    // Legal pages
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
    'roadmap.title': 'Roadmap',

    // Features page
    'features.page.title': 'Features',
    'features.page.subtitle': 'Everything Motekita has to offer',
    'features.page.free.title': 'Free Features',
    'features.page.premium.title': 'Premium Features',
    'features.page.cta': 'Download Now',

    // Pricing page
    'pricing.page.title': 'Pricing',
    'pricing.page.subtitle': 'Simple pricing. Core features are completely free.',
    'pricing.page.faq.title': 'Frequently Asked Questions',
    'pricing.page.faq.q1': 'Is Premium a one-time purchase?',
    'pricing.page.faq.a1': 'Yes, pay once and use it forever.',
    'pricing.page.faq.q2': 'Can I get a refund?',
    'pricing.page.faq.a2': 'We offer a full refund within 14 days of purchase.',
    'pricing.page.cta': 'Download Free',
  },
} as const;
