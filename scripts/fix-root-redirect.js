import { writeFileSync } from 'node:fs';

const accessibleRedirectHTML = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <link rel="canonical" href="https://motekita.luckyretriever.org/ja/">
  <title>Redirecting to Japanese page...</title>
  <script>
    window.location.href = '/ja/';
  </script>
  <noscript>
    <meta http-equiv="refresh" content="0;url=/ja/">
  </noscript>
</head>
<body>
  <main>
    <p>Redirecting to <a href="/ja/">Japanese page</a>...</p>
  </main>
</body>
</html>
`;

try {
  writeFileSync('dist/index.html', accessibleRedirectHTML, 'utf-8');
  console.log('✅ Successfully fixed dist/index.html for accessibility');
} catch (error) {
  console.error('❌ Error fixing dist/index.html:', error.message);
  process.exit(1);
}
