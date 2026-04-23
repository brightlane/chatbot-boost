export function injectPage({
  title,
  description,
  url,
  keywords = "",
  content = "",
  image = "https://yourdomain.com/preview.jpg"
}) {

  // =========================
  // 🔗 AFFILIATE LINKS (GLOBAL)
  // =========================
  const AFF = {
    main: "https://manychat.partnerlinks.io/nwkkk7vkps17",
    ig: "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
    free: "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
  };

  // =========================
  // 💰 AUTO MONETIZATION BLOCK
  // (INJECTED INTO EVERY PAGE)
  // =========================
  const cta = `
<div style="margin:30px 0;padding:16px;border:1px solid #ddd;background:#f9f9f9;">
  <h3>🚀 Start Automating Your Growth</h3>
  <p>Turn Instagram DMs into automated sales systems using AI chat funnels.</p>

  <a href="${AFF.ig}">👉 Instagram Automation Tool</a><br>
  <a href="${AFF.free}">👉 Try Free Trial</a><br>
  <a href="${AFF.main}">👉 Main System</a>
</div>
`;

  // =========================
  // 🌐 FULL SEO META SYSTEM
  // =========================
  return `
<!DOCTYPE html>
<html lang="en">

<head>

<title>${title}</title>

<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">

<!-- Structured Data (Google SEO Boost) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title}",
  "description": "${description}",
  "url": "${url}",
  "image": "${image}"
}
</script>

</head>

<body style="font-family:Arial;max-width:900px;margin:40px;line-height:1.7;">

<h1>${title}</h1>

<p>${description}</p>

${content}

${cta}

</body>
</html>
`;
}
