import fs from "fs";

// =========================
// 🔗 AFFILIATE LINKS
// =========================
const LINKS = {
  main: "https://manychat.partnerlinks.io/nwkkk7vkps17",
  ig: "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo",
  free: "https://manychat.partnerlinks.io/emwcbue22i01-ogcg6e",
};

// =========================
// 🧠 PILLAR + CLUSTER TOPICS
// =========================
const pillar = "blog.html";

const topics = [
  "instagram dm automation guide",
  "how to grow instagram with automation",
  "manychat funnel strategy",
  "dm marketing conversion system",
  "ecommerce chatbot automation",
  "lead generation automation system",
  "instagram sales funnel setup",
  "chatbot marketing psychology",
  "automated customer engagement system",
  "ai marketing automation tools"
];

// =========================
// 🔗 INTERNAL LINK BUILDER
// =========================
function buildInternalLinks(all) {
  return (current) => {
    return all
      .filter(p => p !== current)
      .slice(0, 5)
      .map(p => `<li><a href="./${p}.html">${p.replace(/-/g, " ")}</a></li>`)
      .join("");
  };
}

// =========================
// 🌐 SUPPORTING PAGE GENERATOR
// =========================
function buildPage(topic, allPages) {

  const slug = topic.replace(/ /g, "-");

  const related = buildInternalLinks(allPages)(slug);

  return `
<!DOCTYPE html>
<html>

<head>

<title>${topic} | ManyChat SEO Guide</title>

<meta name="description" content="Learn ${topic} using automation systems and ManyChat marketing strategies.">
<meta name="robots" content="index, follow">

</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>${topic}</h1>

<p>
${topic} is part of modern automation marketing systems that allow businesses to scale without manual effort.
</p>

<p>
ManyChat enables businesses to build conversational funnels that convert traffic into customers automatically.
</p>

<a href="${LINKS.ig}">👉 Start Automation</a>

<hr>

<h2>Why this matters</h2>

<p>
Automation replaces manual marketing workflows and improves conversion rates through instant engagement.
</p>

<a href="${LINKS.free}">👉 Try Free Tool</a>

<hr>

<h3>Related Articles</h3>
<ul>
${related}
</ul>

<hr>

<a href="./${pillar}">⬅ Back to Main System</a>

</body>
</html>
`;
}

// =========================
// 🌐 PILLAR PAGE ENHANCER (blog.html LINKING)
// =========================
function updatePillar(allPages) {

  const links = allPages.map(p =>
    `<li><a href="./${p}.html">${p.replace(/-/g, " ")}</a></li>`
  ).join("");

  const html = `
<!DOCTYPE html>
<html>

<head>
<title>Ranking Empire System | ManyChat Automation</title>
<meta name="description" content="Main authority hub for ManyChat automation and Instagram growth.">
</head>

<body style="font-family:Arial; max-width:900px; margin:40px; line-height:1.7;">

<h1>Ranking Empire System (Pillar Page)</h1>

<p>
This is the central hub of a full SEO automation network built around ManyChat marketing systems.
</p>

<a href="${LINKS.free}">👉 Start Free Automation</a>

<hr>

<h2>Authority Topics</h2>
<ul>
${links}
</ul>

<hr>

<h2>Final System</h2>

<p>
This page distributes authority across all supporting pages, strengthening SEO ranking signals.
</p>

<a href="${LINKS.main}">👉 Launch System</a>

</body>
</html>
`;

  fs.writeFileSync(pillar, html);
}

// =========================
// ⚙️ ENGINE
// =========================
function run() {

  if (!fs.existsSync("site")) fs.mkdirSync("site");

  const allPages = topics.map(t => t.replace(/ /g, "-"));

  // CREATE SUPPORTING PAGES
  topics.forEach(topic => {
    const slug = topic.replace(/ /g, "-");
    const html = buildPage(topic, allPages);
    fs.writeFileSync(`site/${slug}.html`, html);
  });

  // UPDATE PILLAR PAGE
  updatePillar(allPages);

  console.log("✅ RANKING EMPIRE EXPANDED");
  console.log("Pillar:", pillar);
  console.log("Pages:", allPages.length);
}

run();
