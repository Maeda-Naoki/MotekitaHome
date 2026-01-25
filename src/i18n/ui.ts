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
    'hero.title': 'メールが届くと、犬が教えてくれる',
    'hero.subtitle': 'かわいいゴールデンレトリバーがメール通知をお届けするデスクトップアプリ',
    'hero.cta': '無料ダウンロード',
    'hero.cta.secondary': '機能を見る',

    // Features
    'features.title': '主な機能',
    'features.subtitle': 'シンプルで使いやすい、それでいて楽しい',
    'features.privacy.title': '完全ローカル処理',
    'features.privacy.desc': 'メール本文は取得せず、件名と送信者のみ。プライバシーを重視した設計です。',
    'features.lightweight.title': '軽量設計',
    'features.lightweight.desc': 'メモリ使用量50MB未満、CPU使用率1%未満を目標に設計されています。',
    'features.crossplatform.title': 'クロスプラットフォーム',
    'features.crossplatform.desc': 'Windows、macOS、Linuxに対応。どの環境でも同じ体験を。',
    'features.free.title': 'ランニングコスト$0',
    'features.free.desc': '外部サーバー不要の省エネ設計。一度購入すれば追加費用なし。',

    // Pricing
    'pricing.title': '料金プラン',
    'pricing.subtitle': 'シンプルな料金体系',
    'pricing.free': '無料版',
    'pricing.free.price': '¥0',
    'pricing.free.desc': '基本機能をすべて無料で',
    'pricing.free.feature1': 'Gmail メール通知',
    'pricing.free.feature2': '犬のアニメーション',
    'pricing.free.feature3': 'システムトレイ常駐',
    'pricing.premium': 'プレミアム',
    'pricing.premium.price': '¥500',
    'pricing.premium.once': '買い切り',
    'pricing.premium.desc': '高度な機能をアンロック',
    'pricing.premium.feature1': '無料版のすべての機能',
    'pricing.premium.feature2': 'スパム判定機能',
    'pricing.premium.feature3': 'Outlook対応',
    'pricing.dlc.title': 'DLC',
    'pricing.dlc.dogs': '追加犬種',
    'pricing.dlc.dogs.price': '¥200〜300',
    'pricing.dlc.costumes': '衣装',
    'pricing.dlc.costumes.price': '¥100〜200',

    // System Requirements
    'requirements.title': 'システム要件',
    'requirements.os': '対応OS',
    'requirements.windows': 'Windows 10以降',
    'requirements.macos': 'macOS 10.15以降',
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
    'download.github': 'GitHubで見る',

    // Footer
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'footer.licenses': 'OSSライセンス',
    'footer.changelog': '変更履歴',
    'footer.contact': 'お問い合わせ',
    'footer.copyright': '© 2025 Motekita. All rights reserved.',

    // FAQ
    'faq.title': 'よくある質問',

    // Contact
    'contact.title': 'お問い合わせ',
    'contact.desc': 'ご質問やフィードバックがありましたら、お気軽にお問い合わせください。',
    'contact.email': 'メールでのお問い合わせ',
    'contact.github': 'GitHubでIssueを作成',

    // Legal pages
    'terms.title': '利用規約',
    'privacy.title': 'プライバシーポリシー',
    'licenses.title': 'OSSライセンス',
    'changelog.title': '変更履歴',
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
    'features.privacy.title': 'Complete Local Processing',
    'features.privacy.desc': 'Only fetches subject and sender, never email content. Privacy-focused design.',
    'features.lightweight.title': 'Lightweight Design',
    'features.lightweight.desc': 'Designed for under 50MB memory usage and under 1% CPU utilization.',
    'features.crossplatform.title': 'Cross-Platform',
    'features.crossplatform.desc': 'Available on Windows, macOS, and Linux. Same experience everywhere.',
    'features.free.title': '$0 Running Cost',
    'features.free.desc': 'No external server needed. Once purchased, no additional fees.',

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
    'pricing.dlc.title': 'DLC',
    'pricing.dlc.dogs': 'Additional Dogs',
    'pricing.dlc.dogs.price': '$2-3',
    'pricing.dlc.costumes': 'Costumes',
    'pricing.dlc.costumes.price': '$1-2',

    // System Requirements
    'requirements.title': 'System Requirements',
    'requirements.os': 'Supported OS',
    'requirements.windows': 'Windows 10 or later',
    'requirements.macos': 'macOS 10.15 or later',
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
    'download.github': 'View on GitHub',

    // Footer
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.licenses': 'OSS Licenses',
    'footer.changelog': 'Changelog',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Motekita. All rights reserved.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',

    // Contact
    'contact.title': 'Contact',
    'contact.desc': 'If you have any questions or feedback, please feel free to contact us.',
    'contact.email': 'Contact via Email',
    'contact.github': 'Create an Issue on GitHub',

    // Legal pages
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
    'licenses.title': 'OSS Licenses',
    'changelog.title': 'Changelog',
  },
} as const;
