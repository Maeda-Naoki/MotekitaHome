import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import axe from 'axe-core';

const pages = [
  { path: 'dist/index.html', name: 'Root' },
  { path: 'dist/ja/index.html', name: 'Japanese Home' },
  { path: 'dist/en/index.html', name: 'English Home' },
  { path: 'dist/ja/faq/index.html', name: 'Japanese FAQ' },
  { path: 'dist/en/faq/index.html', name: 'English FAQ' },
  { path: 'dist/ja/contact/index.html', name: 'Japanese Contact' },
  { path: 'dist/en/contact/index.html', name: 'English Contact' },
  { path: 'dist/ja/terms/index.html', name: 'Japanese Terms' },
  { path: 'dist/en/terms/index.html', name: 'English Terms' },
  { path: 'dist/ja/privacy/index.html', name: 'Japanese Privacy' },
  { path: 'dist/en/privacy/index.html', name: 'English Privacy' },
  { path: 'dist/ja/roadmap/index.html', name: 'Japanese Roadmap' },
  { path: 'dist/en/roadmap/index.html', name: 'English Roadmap' },
];

async function checkAccessibility() {
  let totalViolations = 0;
  const allViolations = [];

  console.log('🔍 Running accessibility checks with axe-core...\n');

  for (const page of pages) {
    try {
      const html = readFileSync(page.path, 'utf-8');
      const dom = new JSDOM(html, {
        runScripts: 'dangerously',
        resources: 'usable',
      });
      const { window } = dom;

      // Inject axe-core into the JSDOM window
      const script = window.document.createElement('script');
      script.textContent = axe.source;
      window.document.head.appendChild(script);

      // Wait for script to execute
      await new Promise(resolve => setTimeout(resolve, 100));

      // Run axe on the document
      const results = await new Promise((resolve, reject) => {
        if (!window.axe) {
          reject(new Error('axe-core not loaded'));
          return;
        }
        window.axe.run(window.document, (err, results) => {
          if (err) reject(err);
          else resolve(results);
        });
      });

      console.log(`\n📄 ${page.name} (${page.path})`);

      if (results.violations.length === 0) {
        console.log('  ✅ No accessibility violations found!');
      } else {
        console.log(`  ❌ Found ${results.violations.length} violation(s):\n`);

        results.violations.forEach((violation, idx) => {
          console.log(`  ${idx + 1}. ${violation.id}: ${violation.description}`);
          console.log(`     Impact: ${violation.impact}`);
          console.log(`     Help: ${violation.help}`);
          console.log(`     Help URL: ${violation.helpUrl}`);
          console.log(`     Affected nodes: ${violation.nodes.length}`);

          violation.nodes.forEach((node, nodeIdx) => {
            console.log(`       Node ${nodeIdx + 1}:`);
            console.log(`         HTML: ${node.html.substring(0, 100)}${node.html.length > 100 ? '...' : ''}`);
            if (node.target && node.target.length > 0) {
              console.log(`         Target: ${node.target.join(' > ')}`);
            }
          });
          console.log('');
        });

        totalViolations += results.violations.length;
        allViolations.push({
          page: page.name,
          path: page.path,
          violations: results.violations
        });
      }

      window.close();
    } catch (error) {
      console.error(`  ⚠️  Error checking ${page.name}: ${error.message}`);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log(`\n📊 Summary:`);
  console.log(`   Total pages checked: ${pages.length}`);
  console.log(`   Pages with violations: ${allViolations.length}`);
  console.log(`   Total violations: ${totalViolations}\n`);

  if (totalViolations > 0) {
    console.log('❌ Accessibility issues found. Please fix the violations listed above.\n');
    process.exit(1);
  } else {
    console.log('✅ All pages passed accessibility checks!\n');
    process.exit(0);
  }
}

checkAccessibility().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
