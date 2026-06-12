// Event detail data — replace placeholder text with your real content
const EVENTS = {
  // DAY 1
  "d1-1": {
    title: "Arrival & Icebreaker",
    time: "9:00 – 11:30 AM · Wednesday, June 24",
    location: "Pan Abode",
    body: `<p>Welcome to Loon Lake Lodge! Settle into your cabins, then return to Pan Abode for our icebreaker activity.</p>`
  },
  "d1-2": {
    title: "Research Mix-up",
    time: "11:30 AM – 12:30 PM · Wednesday, June 24",
    location: "Pan Abode",
    body: `<p>A fun activity where we learn about each other's research.</p>`
  },
  "d1-3": {
    title: "Lunch",
    time: "12:30 – 1:30 PM · Wednesday, June 24",
    location: "Bentley Dining Hall",
    body: `<p><strong>Fish Tacos</strong></p>
           <p>Cajun rubbed seasonal fish, cilantro cabbage slaw, mango lime salsa, creamy garlic drizzle, yam fries and ancho dip</p>`
  },
  "d1-4": {
    title: "Research Talk",
    time: "1:30 – 2:30 PM · Wednesday, June 24",
    location: "Pan Abode",
    body: `<p><strong>Paul Pavlidis</strong></p>
           <p>he Pavlidis Lab at the University of British Columbia does research in neuroscience, bioinformatics, computational biology, functional genomics and genetics – “neuroinformatics”.</p>`
  },
  "d1-5": {
    title: "Free time",
    time: "2:30 – 4:30 PM · Wednesday, June 24",
    location: "Outside",
    body: `<p>Explore the natural beauty of Loon Lake!</p>
           <p>Bubble Ball will run from 2:30 - 4 PM. Meet the activity coordinator outside of Pan Abode to participate.</p>`
  },
  "d1-6": {
    title: "Student Talks",
    time: "4:30 – 5:30 PM · Wednesday, June 24",
    location: "Pan Abode",
    body: `<p>Trainee talks from various attending lab members.</p>
           <ul><li>Herbert Yao - Yachie Lab</li><li>Neera Patadia - Pavlidis Lab</li><li>Nick Mateyko - de Boer Lab</li><li>Sambina Aninta - de Boer Lab</li></ul>`
  },
  "d1-7": {
    title: "Dinner",
    time: "5:30 – 6:30 PM · Wednesday, June 24",
    location: "Bentley Dining Hall",
    body: `<p><strong>Angus Roast Beef</strong></p>
           <p>Served with Yorkshire pudding, garlic mashed potatoes, seasonal veggies, gravy, and salad</p>`
  },
  "d1-8": {
    title: "Academic Debate",
    time: "6:30 – 7:30 PM · Wednesday, June 24",
    location: "Pan Abode",
    body: `<p>Moderated by Abdul Muntakim Rafi</p>
           <p>A lively debate between PIs and students on various topics.</p>`
  },
  // DAY 2
  "d2-1": {
    title: "Keynote: Future Directions",
    time: "9:30 – 10:30 AM · Thursday, June 25",
    location: "Great Hall",
    body: `<p>This keynote sets the scientific agenda for the coming year, presenting a roadmap for the lab's major research thrusts.</p>
           <p><strong>Speaker:</strong> [PI Name or Invited Speaker]</p>
           <p><strong>Theme:</strong> [Add overarching theme here]</p>`
  },
  "d2-2": {
    title: "Research Presentation IV",
    time: "10:30 – 11:30 AM · Thursday, June 25",
    location: "Great Hall",
    body: `<p>[Presenter Name] will share their latest research findings.</p>
           <p><strong>Title:</strong> [Presentation Title]</p>
           <p><strong>Abstract:</strong> [Add abstract or description here.]</p>
           <ul><li>20 min presentation · 10 min Q&A · 30 min discussion</li></ul>`
  },
  "d2-3": {
    title: "Data & Methods Roundtable",
    time: "11:30 AM – 12:30 PM · Thursday, June 25",
    location: "Seminar Room",
    body: `<p>An open roundtable discussion on data pipelines, analysis methods, and reproducibility practices in the lab.</p>
           <p>Bring your current pain points and wins — this is a peer-sharing format, not a lecture.</p>
           <ul><li>Topics: [e.g. software tools, data sharing, stats approaches]</li></ul>`
  },
  "d2-4": {
    title: "Research Presentation V",
    time: "1:30 – 2:30 PM · Thursday, June 25",
    location: "Great Hall",
    body: `<p>[Presenter Name] will share their latest research findings.</p>
           <p><strong>Title:</strong> [Presentation Title]</p>
           <p><strong>Abstract:</strong> [Add abstract or description here.]</p>
           <ul><li>20 min presentation · 10 min Q&A · 30 min discussion</li></ul>`
  },
  "d2-5": {
    title: "Grant Writing & Publishing Workshop",
    time: "2:30 – 3:30 PM · Thursday, June 25",
    location: "Seminar Room",
    body: `<p>Practical workshop covering grant writing strategies, manuscript preparation, and navigating the publishing process.</p>
           <ul><li>Facilitator: [Name]</li><li>Topics: [e.g. funding landscape, writing tips, target journals]</li><li>Bring questions!</li></ul>`
  },
  "d2-6": {
    title: "Nature Hike",
    time: "4:30 – 5:30 PM · Thursday, June 25",
    location: "Forest Trail",
    body: `<p>A guided hike through the forest trails around Loon Lake Lodge. A chance to decompress, enjoy the scenery, and have informal conversations away from the lecture hall.</p>
           <ul><li>Distance: ~[X] km · Difficulty: Easy/Moderate</li><li>Wear closed-toe shoes</li><li>Meet at the trailhead behind Cabin Row</li></ul>`
  },
  "d2-7": {
    title: "Lab Trivia Night",
    time: "6:30 – 7:30 PM · Thursday, June 25",
    location: "Great Hall",
    body: `<p>Teams of 4–5 compete in a custom trivia night covering science, pop culture, lab history, and more.</p>
           <p>Prizes for the winning team. Sign up at dinner or just show up — teams will be assigned on the spot.</p>`
  },
  // DAY 3
  "d3-1": {
    title: "Research Presentation VI",
    time: "9:30 – 10:30 AM · Friday, June 26",
    location: "Great Hall",
    body: `<p>[Presenter Name] will share their latest research findings.</p>
           <p><strong>Title:</strong> [Presentation Title]</p>
           <p><strong>Abstract:</strong> [Add abstract or description here.]</p>
           <ul><li>20 min presentation · 10 min Q&A · 30 min discussion</li></ul>`
  },
  "d3-2": {
    title: "Lab Culture & Mentorship Discussion",
    time: "10:30 – 11:30 AM · Friday, June 26",
    location: "Seminar Room",
    body: `<p>An open, facilitated conversation about what makes a great lab culture and how we support each other's growth.</p>
           <p>Topics may include: onboarding, mentorship relationships, work-life balance, and inclusion.</p>
           <ul><li>Format: Small group discussion → full group share-out</li></ul>`
  },
  "d3-3": {
    title: "Goals & Planning: Year Ahead",
    time: "11:30 AM – 12:30 PM · Friday, June 26",
    location: "Seminar Room",
    body: `<p>Each lab member shares one to three goals for the coming year, individually and as a group.</p>
           <p>We'll use this session to align on shared milestones and identify ways to support each other.</p>
           <ul><li>Come with your goals written down</li><li>Outcomes will be compiled into a shared doc after the retreat</li></ul>`
  },
  "d3-4": {
    title: "Open Discussion & Q&A",
    time: "1:30 – 2:30 PM · Friday, June 26",
    location: "Great Hall",
    body: `<p>A freeform session for any topics that didn't get enough airtime earlier in the retreat — questions, feedback, or ideas for the lab.</p>
           <p>The floor is open. Submit topics anonymously in advance or raise them in the room.</p>`
  },
  "d3-5": {
    title: "Optional: Kayaking / Free Time",
    time: "2:30 – 3:30 PM · Friday, June 26",
    location: "Lake Dock",
    body: `<p>Spend the afternoon on the lake! Kayaks and life jackets are available at the dock on a first-come, first-served basis.</p>
           <p>Not a kayaker? Relax on the dock, take a walk, or use this time freely.</p>
           <ul><li>Max [X] kayaks available</li><li>Life jackets required</li></ul>`
  },
  "d3-6": {
    title: "Closing Reflections",
    time: "4:30 – 5:30 PM · Friday, June 26",
    location: "Great Hall",
    body: `<p>Each person shares one takeaway from the retreat — a new idea, a connection made, or something they're excited to work on.</p>
           <p>We'll close with acknowledgments and a look ahead to next year's retreat.</p>`
  },
  "d3-7": {
    title: "Farewell Gathering",
    time: "6:30 – 7:30 PM · Friday, June 26",
    location: "Lakeside Deck",
    body: `<p>Wrap up the retreat with drinks and light bites on the lakeside deck. A casual send-off before everyone heads home tomorrow morning.</p>
           <p>Safe travels — see you back in the lab!</p>`
  }
};
