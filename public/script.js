// Global variables
let liveDonationCount = 0;
let totalDonors = 125891;
let fanCount = 1247893451;
let chatViewers = 2847293;

// Ember particles animation
function createEmber() {
  const ember = document.createElement("div");
  ember.className = "ember";
  ember.style.left = Math.random() * 100 + "%";
  ember.style.animationDuration = Math.random() * 3 + 3 + "s";
  ember.style.animationDelay = Math.random() * 2 + "s";
  document.getElementById("emberParticles").appendChild(ember);

  setTimeout(() => {
    ember.remove();
  }, 6000);
}

setInterval(createEmber, 300);

// Countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  // Set concert date to 15 days, 7 hours, 23 minutes, 45 seconds from now
  const concertDate = new Date(
    now +
      15 * 24 * 60 * 60 * 1000 +
      7 * 60 * 60 * 1000 +
      23 * 60 * 1000 +
      45 * 1000
  );
  const distance = concertDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
    document.getElementById("daysLeft").textContent = days;
  } else {
    // Concert has started!
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.querySelector(".countdown h3").textContent =
      "🔴 CONCERT IS LIVE NOW!";
  }
}

// Start countdown immediately and update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Tab switching functionality
function switchTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab and activate button
  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}

// Live donation data
const liveDonations = [
  {
    name: "Sir Galahad the Brave",
    avatar: "⚔️",
    amount: 5000,
    message: "For every fallen comrade who believed in Elloria's future!",
    time: "Just now",
    badge: "Phoenix Patron",
  },
  {
    name: "Lady Moonwhisper",
    avatar: "🌙",
    amount: 2500,
    message: "The moon shows me visions of Elloria restored.",
    time: "30 seconds ago",
    badge: "Veil Guardian",
  },
  {
    name: "Captain Stormheart",
    avatar: "⚡",
    amount: 1000,
    message: "My crew sailed through storms to make this donation!",
    time: "1 minute ago",
    badge: "Inferno Tier",
  },
  {
    name: "Young Mage Spark",
    avatar: "✨",
    amount: 25,
    message: "Saved my lunch coins for three months! Every spark matters!",
    time: "2 minutes ago",
    badge: "Spark Igniter",
  },
];

const recentDonations = [
  {
    name: "Dragon Keeper Flameheart",
    avatar: "🐉",
    amount: 3000,
    message: "My dragon Emberwing wanted to contribute her favorite ruby!",
    time: "5 minutes ago",
    badge: "Inferno Tier",
  },
  {
    name: "Healer Moonblossom",
    avatar: "🌺",
    amount: 500,
    message: "The Crystal Gardens once saved my daughter's life.",
    time: "8 minutes ago",
    badge: "Blaze Supporter",
  },
  {
    name: "Blacksmith Ironforge",
    avatar: "🔨",
    amount: 300,
    message: "Free metalwork tools for the rebuilding efforts!",
    time: "12 minutes ago",
    badge: "Blaze Supporter",
  },
  {
    name: "Farmer Greenthumb",
    avatar: "🌾",
    amount: 50,
    message: "From my wheat fields to Elloria's future!",
    time: "15 minutes ago",
    badge: "Spark Igniter",
  },
  {
    name: "Bard Melody Windsong",
    avatar: "🎵",
    amount: 200,
    message: "I'll compose a song for every dollar donated today!",
    time: "18 minutes ago",
    badge: "Spark Igniter",
  },
];

// Generate donation item HTML
function generateDonationHTML(donation, isNew = false) {
  return `
        <div class="donation-item${
          isNew ? " new-donation" : ""
        }" onclick="expandDonation('${donation.name}')">
            <div class="donation-header">
                <div class="donor-info">
                    <div class="donor-avatar">${donation.avatar}</div>
                    <div>
                        <div class="donor-name">
                            ${donation.name}
                            <span class="donor-badge">${donation.badge}</span>
                        </div>
                        <div class="donation-time">${donation.time}</div>
                    </div>
                </div>
                <div class="donation-amount">$${donation.amount.toLocaleString()}</div>
            </div>
            <div class="donation-message">${donation.message}</div>
        </div>
    `;
}

// Populate initial donations
function populateDonations() {
  const liveFeed = document.getElementById("liveDonationFeed");
  const recentFeed = document.getElementById("recentDonations");

  if (liveFeed) {
    liveFeed.innerHTML = liveDonations
      .map((donation) => generateDonationHTML(donation))
      .join("");
  }
  
  if (recentFeed) {
    recentFeed.innerHTML = recentDonations
      .map((donation) => generateDonationHTML(donation))
      .join("");
  }
}

// Simulate new donations
function addNewDonation() {
  const newDonors = [
    {
      name: "Cosmic Wanderer",
      avatar: "🌌",
      amount: 750,
      message: "From across the stars, for Elloria!",
    },
    {
      name: "Guardian Treeheart",
      avatar: "🌳",
      amount: 250,
      message: "The ancient oaks support this cause.",
    },
    {
      name: "Knight of Dawn",
      avatar: "🌅",
      amount: 500,
      message: "Dawn breaks on a new day for Elloria!",
    },
    {
      name: "Ice Priestess",
      avatar: "❄️",
      amount: 1000,
      message: "Crystal magic for crystal gardens!",
    },
    {
      name: "Fire Scholar",
      avatar: "📜",
      amount: 300,
      message: "Knowledge shared is power multiplied!",
    },
  ];

  const randomDonor = newDonors[Math.floor(Math.random() * newDonors.length)];
  randomDonor.time = "Just now";
  randomDonor.badge =
    randomDonor.amount >= 500 ? "Blaze Supporter" : "Spark Igniter";

  const liveFeed = document.getElementById("liveDonationFeed");
  if (liveFeed) {
    liveFeed.insertAdjacentHTML(
      "afterbegin",
      generateDonationHTML(randomDonor, true)
    );

    // Update counters
    liveDonationCount++;
    totalDonors++;
    fanCount += Math.floor(Math.random() * 1000);

    const liveDonationCountEl = document.getElementById("liveDonationCount");
    const totalDonorsEl = document.getElementById("totalDonors");
    const fanCountEl = document.getElementById("fanCount");

    if (liveDonationCountEl) liveDonationCountEl.textContent = liveDonationCount;
    if (totalDonorsEl) totalDonorsEl.textContent = totalDonors.toLocaleString();
    if (fanCountEl) fanCountEl.textContent = fanCount.toLocaleString();

    // Remove oldest donation if too many
    const donations = liveFeed.querySelectorAll(".donation-item");
    if (donations.length > 10) {
      donations[donations.length - 1].remove();
    }
  }
}

// Chat functionality
const chatMessages = [
  "This gives me chills every time! 🔥",
  "Just donated $100! For Elloria! 💰",
  "REYON'S VOICE IS PURE MAGIC! ✨",
  "Play Crystal Garden Dreams! 🌸",
  "My whole guild is watching! 👑",
  "Donated from the Kingdom of Frost! ❄️",
  "1.2 BILLION FANS STRONG! 🔥",
  "Tessa's guitar solo = LEGENDARY ⚡",
  "Calla's lyrics speak to my soul! 🎵",
  "Milo's drums are the heartbeat of hope! 🥁",
  "Jules' synths are otherworldly! 🎹",
  "Rowan's violin makes me cry! 🎻",
];

function addChatMessage() {
  const chatContainer = document.getElementById("chatMessages");
  if (!chatContainer) return;

  const usernames = [
    "MagicFan",
    "DragonRider",
    "StormMage",
    "CrystalHealer",
    "PhoenixWarrior",
    "StarGazer",
    "ForestGuard",
  ];
  const username =
    usernames[Math.floor(Math.random() * usernames.length)] +
    Math.floor(Math.random() * 9999);
  const message = chatMessages[Math.floor(Math.random() * chatMessages.length)];

  const messageElement = document.createElement("div");
  messageElement.className = "chat-message";
  messageElement.innerHTML = `<span class="chat-user">${username}:</span> ${message}`;

  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Remove old messages
  if (chatContainer.children.length > 20) {
    chatContainer.removeChild(chatContainer.firstChild);
  }

  // Update viewer count
  chatViewers += Math.floor(Math.random() * 100);
  const chatViewersEl = document.getElementById("chatViewers");
  if (chatViewersEl) {
    chatViewersEl.textContent = chatViewers.toLocaleString();
  }
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const chatContainer = document.getElementById("chatMessages");
  
  if (input && input.value.trim() && chatContainer) {
    const messageElement = document.createElement("div");
    messageElement.className = "chat-message";
    messageElement.innerHTML = `<span class="chat-user" style="color: #f7931e;">You:</span> ${input.value}`;

    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    input.value = "";

    // Simulate response
    setTimeout(() => {
      const response = document.createElement("div");
      response.className = "chat-message";
      response.innerHTML = `<span class="chat-user">WildfireBot:</span> Thanks for your support! 🔥✨`;
      chatContainer.appendChild(response);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1500);
  }
}

// Modal functions
function showModal(content) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  
  if (modal && modalContent) {
    modalContent.innerHTML = content;
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  }
}

function expandDonation(donorName) {
  showModal(`
        <h2>Hero Spotlight: ${donorName}</h2>
        <div style="text-align: center; margin: 2rem 0;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🏆</div>
            <p style="font-size: 1.2rem;">Thank you for supporting Elloria's restoration!</p>
        </div>
        <div style="background: rgba(255,107,53,0.2); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
            <p>This hero's contribution will help rebuild the Crystal Gardens, restore ancient knowledge, and bring hope back to Elloria!</p>
        </div>
        <div style="text-align: center;">
            <button class="btn btn-primary" onclick="alert('❤️ Magical thank you sent!'); closeModal();">
                💌 Send Thanks
            </button>
        </div>
    `);
}

function showKingdom(kingdom) {
  const kingdoms = {
    zaeson: {
      name: "Kingdom of Zaeson",
      ruler: "Teisaku Bugoli",
      donation: "$100,000",
      story:
        "The legendary Phoenix Chest of gold, passed down through generations, has been opened for Elloria's cause.",
      effect:
        "The golden coins will fund master craftsmen to rebuild the royal districts",
    },
    merina: {
      name: "Kingdom of Merina",
      ruler: "Junchio",
      donation: "$10,000",
      story:
        "Crystal lanterns that never dim, crafted with ancient ice magic to light Elloria's darkened streets.",
      effect:
        "Eternal streetlights that will guide citizens safely through the night",
    },
    zameous: {
      name: "Kingdom of Zameous",
      ruler: "Ajax Romano",
      donation: "$6,000",
      story:
        "Enchanted tools that work twice as fast and spell scrolls containing blueprints for magical architecture.",
      effect:
        "Rebuilding will progress at supernatural speed with these magical implements",
    },
    kowana: {
      name: "Kingdom of Kowana Aran",
      ruler: "Royal Court",
      donation: "$4,000",
      story:
        "Food supplies and medical kits enhanced with healing magic to sustain the rebuilding workers.",
      effect: "No worker will go hungry, and all injuries will heal swiftly",
    },
    tarnoh: {
      name: "Kingdom of Tarnoh",
      ruler: "Rinji Kubo",
      donation: "$3,000",
      story:
        "Sacred timber from the Eternal Forest and seeds that will grow into protective barrier trees.",
      effect: "New forests will shield Elloria from future attacks",
    },
    ammar: {
      name: "Kingdom of Ammar",
      ruler: "Dante & Erissa",
      donation: "$1,000",
      story:
        "Grain that multiplies when shared and healing herbs that cure any ailment.",
      effect: "The people of Elloria will never know hunger or sickness again",
    },
    kozlek: {
      name: "Kingdom of Kozlek",
      ruler: "Koyuko Kohozine",
      donation: "$500",
      story:
        "Blankets woven with protective charms that shield against cold, fear, and despair.",
      effect: "Comfort and protection for all who need shelter",
    },
    kastron: {
      name: "Kingdom of Kastron",
      ruler: "Ryuki Kastron",
      donation: "$350",
      story:
        "Rare metals from the deepest mines, perfect for forging bridges that will never break.",
      effect: "Unbreakable connections between all parts of the kingdom",
    },
    navarre: {
      name: "Kingdom of Navarre",
      ruler: "Royal Treasury",
      donation: "$350",
      story:
        "Stones blessed by water spirits that can purify any source, no matter how polluted.",
      effect: "Clean, pure water flowing throughout all of Elloria",
    },
  };

  const kingdomData = kingdoms[kingdom];
  if (kingdomData) {
    showModal(`
        <h2>${kingdomData.name}</h2>
        <h3 style="color: #4a9eff;">Led by: ${kingdomData.ruler}</h3>
        <p style="color: #ff6b35; font-size: 2rem; font-weight: bold; text-align: center; margin: 1rem 0;">${kingdomData.donation}</p>
        <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
            <h4>📜 Their Story:</h4>
            <p style="margin-top: 0.5rem;">${kingdomData.story}</p>
        </div>
        <div style="background: rgba(74,158,255,0.2); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
            <h4>✨ Magical Effect:</h4>
            <p style="font-style: italic; margin-top: 0.5rem;">${kingdomData.effect}</p>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="alert('✨ Magical thank you sent with royal honors!'); closeModal();">
                👑 Send Royal Thanks
            </button>
        </div>
    `);
  }
}

function showBandMember(member) {
  const members = {
    reyon: {
      name: 'Reylan "Reyon" Harris',
      role: "Lead Vocals, Rhythm Guitar, Songwriting",
      story:
        "The band's main voice and primary songwriter. Reyon's soulful vocals and introspective lyrics shape the band's spirit and sound. His songs for Elloria carry the weight of hope and the power to heal wounded hearts.",
      quote:
        '"Every song we write is a prayer for those who can\'t sing anymore."',
      fans: "423,891,247",
    },
    tessa: {
      name: "Tessa Novar",
      role: "Lead Guitar, Backing Vocals",
      story:
        "Tessa's fiery riffs and magnetic stage presence drive Wildfire Veil's energy. Fearless, bold, and a natural leader, her guitar work ignites passion in every heart that hears it.",
      quote:
        '"Music is rebellion against despair, and we\'re leading the charge."',
      fans: "389,247,183",
    },
    calla: {
      name: "Calla Fenwick",
      role: "Bass Guitar, Lyricist, Vocals",
      story:
        "The soul of the band, Calla's poetic lyrics and evocative harmonies are its emotional core. She also handles the band's unofficial management, keeping everyone grounded while reaching for the stars.",
      quote:
        '"Words have power, and ours will rebuild more than just buildings."',
      fans: "456,783,291",
    },
    milo: {
      name: "Milo Dray",
      role: "Drums, Percussion",
      story:
        "Milo's precise, empathetic drumming is the foundation of their sound. Quiet and steady, he's the glue holding everyone together, providing the heartbeat that keeps hope alive.",
      quote:
        '"Every beat is a heartbeat, every rhythm a reminder that we\'re alive."',
      fans: "298,473,829",
    },
    jules: {
      name: "Jules Avery",
      role: "Keyboards, Synths, Piano, Backing Vocals",
      story:
        "Jules weaves shimmering synths and piano textures through every song. Creative and a bit eccentric, they're always experimenting with new sounds that capture the magic of possibility.",
      quote: '"Music is magic made audible, and magic can work miracles."',
      fans: "335,281,192",
    },
    rowan: {
      name: "Rowan Lin",
      role: "Acoustic Guitar, Violin, Backing Vocals",
      story:
        "Rowan's melodic guitar and haunting violin add warmth and depth. Known for their quiet wisdom and knack for finding the perfect harmony, they bring peace to both the music and the band.",
      quote: '"In harmony, we find healing. In melody, we find hope."',
      fans: "367,192,845",
    },
  };

  const memberData = members[member];
  if (memberData) {
    showModal(`
        <div style="text-align: center;">
            <h2>${memberData.name}</h2>
            <h3 style="color: #ff6b35;">${memberData.role}</h3>
            <div style="color: #4a9eff; font-size: 1.2rem; margin: 1rem 0;">
                🔥 ${memberData.fans} devoted fans
            </div>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
            <h4>📖 Their Story:</h4>
            <p style="margin-top: 0.5rem;">${memberData.story}</p>
        </div>
        <blockquote style="font-style: italic; color: #ff6b35; border-left: 3px solid #ff6b35; padding-left: 1rem; margin: 1.5rem 0; text-align: center; font-size: 1.1rem;">
            ${memberData.quote}
        </blockquote>
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="alert('🎵 Fan message sent to ${memberData.name}!'); closeModal();">
                💝 Send Fan Message
            </button>
        </div>
    `);
  }
}

function showStory(location) {
  const stories = {
    library: {
      title: "The Great Library",
      story:
        "Before the war, scholars from across the realms came to study the ancient texts. The library held the collective wisdom of a thousand years, including spells of healing, chronicles of peace, and songs that could mend broken hearts. Now, only ash and memories remain.",
      cost: "$5,000,000",
      progress: "60%",
      survivor:
        "\"I lost my life's work when the library burned, but I haven't lost hope. The knowledge lives on in our hearts, and together, we can write a new chapter for future generations.\" - Scholar Miren, Keeper of Ancient Lore",
    },
    gardens: {
      title: "Crystal Gardens",
      story:
        "The magical springs once healed any wound and granted peace to troubled souls. Creatures from all realms would pilgrimage here for healing. The crystals were shattered in the war, but their essence remains in the soil, waiting to bloom again.",
      cost: "$8,000,000",
      progress: "75%",
      survivor:
        '"My daughter was born with a cursed sickness, but the gardens healed her completely. Now she\'s grown with healing magic of her own, and we both fight to restore what saved our family." - Healer Thane and Luna',
    },
    academy: {
      title: "Academy of Arts",
      story:
        "Young bards, painters, dancers, and musicians learned their craft in these hallowed halls. The building stands, but the instruments, art supplies, and magical teaching tools are gone. The stage where legends were born sits silent.",
      cost: "$6,500,000",
      progress: "45%",
      survivor:
        '"I was just a student when the war came, learning my first chords. Now I teach children in the ruins, keeping the music alive with our voices alone. But imagine what we could do with proper instruments again!" - Bard Luna Songweaver',
    },
  };

  const locationData = stories[location];
  if (locationData) {
    showModal(`
        <h2>${locationData.title}</h2>
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0; padding: 1rem; background: rgba(255,107,53,0.2); border-radius: 10px;">
            <span><strong>Rebuild Cost:</strong> ${locationData.cost}</span>
            <span style="color: #4a9eff;"><strong>Progress:</strong> ${locationData.progress}</span>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
            <p>${locationData.story}</p>
        </div>
        <div style="background: rgba(74,158,255,0.2); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
            <h4>💬 Survivor Story:</h4>
            <p style="font-style: italic; margin-top: 0.5rem;">${locationData.survivor}</p>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="alert('🏗️ Your support for ${locationData.title} has been recorded!'); closeModal();">
                🔥 Support This Rebuild
            </button>
        </div>
    `);
  }
}

// Map slider functionality
let isDragging = false;

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  try {
    populateDonations();
    updateCountdown();

    // Update fan count animation
    const fanCountElement = document.getElementById("fanCount");
    if (fanCountElement) {
      setInterval(() => {
        fanCount += Math.floor(Math.random() * 50) + 10;
        fanCountElement.textContent = fanCount.toLocaleString();
      }, 5000);
    }

    // Map slider functionality
    const sliderHandle = document.getElementById("sliderHandle");
    const mapAfter = document.getElementById("mapAfter");

    if (sliderHandle && mapAfter) {
      sliderHandle.addEventListener("mousedown", () => {
        isDragging = true;
      });

      document.addEventListener("mousemove", (e) => {
        if (isDragging) {
          const rect = sliderHandle.parentElement.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

          sliderHandle.style.left = percentage + "%";
          mapAfter.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`;
        }
      });

      document.addEventListener("mouseup", () => {
        isDragging = false;
      });
    }

    // Start simulations
    setInterval(addNewDonation, Math.random() * 10000 + 5000);
    setInterval(addChatMessage, Math.random() * 3000 + 2000);

    console.log(
      "🔥 Wildfire Veil Enhanced Website Loaded! 1.2 Billion Fans Strong! ✨"
    );
  } catch (error) {
    console.error("Initialization error:", error);
  }
});

// Smooth scrolling and event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Chat input enter key
  const chatInput = document.getElementById("chatInput");
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendChatMessage();
      }
    });
  }
});

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};