import fs from "fs";

// =========================
// 🔗 AFFILIATE LINK
// =========================
const LINK = "https://manychat.partnerlinks.io/bbwxetk27f88-64kfxo";

// =========================
// 🧠 CORE EMPIRE MESSAGE
// =========================
const coreTopic = "Ranking Empire System for Instagram Automation";

// =========================
// 🔥 VIRAL HOOKS
// =========================
const hooks = [
  "Most people are doing Instagram marketing WRONG…",
  "This is why your Instagram growth is stuck…",
  "Nobody talks about DM automation like this…",
  "You’re wasting hours replying to DMs manually…",
  "This system replaces manual marketing completely…",
  "This is how creators scale without posting more content…",
  "Automation is quietly replacing manual marketing…"
];

// =========================
// ✍️ SOCIAL POST BUILDER
// =========================
function buildPosts() {

  const posts = [];

  for (let i = 0; i < hooks.length; i++) {

    const hook = hooks[i];

    // X (Twitter style)
    posts.push({
      platform: "X",
      content: `
${hook}

${coreTopic}

The real growth system is NOT posting more content.

It’s building automated DM funnels that convert traffic into customers.

👉 Start here: ${LINK}

#marketing #automation #instagramgrowth
`,
      day: `Day ${i + 1}`
    });

    // Instagram
    posts.push({
      platform: "Instagram",
      content: `
🔥 ${hook}

${coreTopic}

Creators are shifting from manual engagement to full automation systems.

Instead of replying to every DM, they use funnels that convert automatically.

👉 Try it: ${LINK}
`,
      day: `Day ${i + 1}`
    });

    // Facebook
    posts.push({
      platform: "Facebook",
      content: `
${coreTopic}

Businesses are replacing manual marketing with automation systems.

Tools like ManyChat allow:
• Automated DM replies
• Lead capture
• Sales funnel automation

👉 Learn more: ${LINK}
`,
      day: `Day ${i + 1}`
    });

    // LinkedIn (more professional angle)
    posts.push({
      platform: "LinkedIn",
      content: `
${coreTopic}

Marketing is shifting toward automation-driven systems.

Instead of manual outreach, businesses now use conversational funnels to scale engagement and conversions.

This improves efficiency and revenue.

👉 Explore: ${LINK}
`,
      day: `Day ${i + 1}`
    });
  }

  return posts;
}

// =========================
// 💾 SAVE SCHEDULING QUEUE
// =========================
function saveQueue(posts) {

  if (!fs.existsSync("social")) {
    fs.mkdirSync("social");
  }

  fs.writeFileSync(
    "social/empire-social-queue.json",
    JSON.stringify(posts, null, 2)
  );

  console.log("✅ Social distribution queue created");
}

// =========================
// ⚙️ RUN SYSTEM
// =========================
function run() {

  const posts = buildPosts();

  saveQueue(posts);

  console.log("🔥 TOTAL POSTS GENERATED:", posts.length);

  console.log("\n--- SAMPLE POST ---\n");
  console.log(posts[0].content);
}

run();
