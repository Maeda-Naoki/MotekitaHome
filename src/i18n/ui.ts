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

    // Hero
    'hero.title': 'メールが届くと、ゴールデンレトリーバーが教えてくれる',
    'hero.subtitle': 'かわいいゴールデンレトリバーがメール通知をお届けするデスクトップアプリ',
    'hero.cta': '無料ダウンロード',
    'hero.cta.secondary': '機能を見る',

    // Features
    'features.title': '主な機能',
    'features.subtitle': 'シンプルで使いやすい、それでいて楽しい',
    'features.privacy.title': 'プライバシー保護',
    'features.privacy.desc': 'メールの本文は一切見ません。誰から来たか、タイトルは何かだけを確認します。',
    'features.lightweight.title': '軽くて快適',
    'features.lightweight.desc': 'パソコンの動作に影響を与えず、普段通りに作業できます。',
    'features.crossplatform.title': 'どのパソコンでも使える',
    'features.crossplatform.desc': 'Windows、macOS、Linuxに対応。お使いの環境で同じように楽しめます。',

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
    'pricing.premium.feature3': 'Outlook対応',

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
    'footer.licenses': 'OSSライセンス',
    'footer.changelog': 'ロードマップ',
    'footer.contact': 'お問い合わせ',
    'footer.copyright': '© 2025 Motekita. All rights reserved.',

    // FAQ
    'faq.title': 'よくある質問',

    // Contact
    'contact.title': 'お問い合わせ',
    'contact.desc': 'ご質問やフィードバックがありましたら、お気軽にお問い合わせください。',
    'contact.email': 'メールでのお問い合わせ',

    // Legal pages
    'terms.title': '利用規約',
    'privacy.title': 'プライバシーポリシー',
    'licenses.title': 'OSSライセンス',
    'roadmap.title': 'ロードマップ',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Your Dog Tells You When Mail Arrives',
    'hero.subtitle': 'A desktop app where a cute Golden Retriever notifies you of new emails',
    'hero.cta': 'Free Download',
    'hero.cta.secondary': 'See Features',

    // Features
    'features.title': 'Key Features',
    'features.subtitle': 'Simple, easy to use, and fun',
    'features.privacy.title': 'Privacy Protected',
    'features.privacy.desc': 'Never looks at email content. Only checks who sent it and what the subject is.',
    'features.lightweight.title': 'Light and Smooth',
    'features.lightweight.desc': 'Works without affecting your computer. You can work as usual.',
    'features.crossplatform.title': 'Works on Any Computer',
    'features.crossplatform.desc': 'Available on Windows, macOS, and Linux. Enjoy the same experience on your device.',

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
    'pricing.premium.feature3': 'Outlook support',

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
    'footer.licenses': 'OSS Licenses',
    'footer.changelog': 'Roadmap',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Motekita. All rights reserved.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',

    // Contact
    'contact.title': 'Contact',
    'contact.desc': 'If you have any questions or feedback, please feel free to contact us.',
    'contact.email': 'Contact via Email',

    // Legal pages
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
    'licenses.title': 'OSS Licenses',
    'roadmap.title': 'Roadmap',
  },
} as const;
