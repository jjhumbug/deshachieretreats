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
    title: "Research Relay",
    time: "11:30 AM – 12:30 PM · Wednesday, June 24",
    location: "Pan Abode",
    body: `<p>A fun activity where we learn about each other's research and test our scientific communication skills.</p>`
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
           <p>The Pavlidis Lab at the University of British Columbia does research in neuroscience, bioinformatics, computational biology, functional genomics and genetics – “neuroinformatics”.</p>`
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
    body: `<p>Trainee talks from various attending lab members. Prizes are awarded for the funniest and most informative talks!</p>
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
    title: "Breakfast",
    time: "8:30 – 9:30 AM · Thursday, June 25",
    location: "Bentley Dining Hall",
    body: `<p><strong>Loon Lake Breakfast English Muffin</strong></p>
           <p>English muffin, scrambled eggs, aged cheddar cheese, chives, bacon, back bacon, lettus, tomato, spicy mayo sauce, served with hashbrowns</p>`
  },
  "d2-2": {
    title: "Research Talk",
    time: "9:30 – 10:30 AM · Thursday, June 25",
    location: "Pan Abode",
    body: `<p><strong>Troy McDiarmid</strong></p>
           <p>The McDiarmid Lab develops scalable synthetic neurobiology technologies to map, manipulate, and record gene regulation in the brain, with the ultimate goal of understanding and treating disorders of neurodevelopment and the neural immune system.</p>`
  },
  "d2-3": {
    title: "Mental Health Workshop",
    time: "10:30 – 11:30 AM · Thursday, June 25",
    location: "Pan Abode",
    body: `<p>Hosted by Helen Liu</p>
           <p>This workshop aims to empower you to rewrite the stories you have about yourself.</p>`
  },
  "d2-4": {
    title: "Informational Talk",
    time: "11:30 AM – 12:30 PM · Thursday, June 25",
    location: "Pan Abode",
    body: `<p><strong>Bob Perry</strong></p>
           <p>At the Conconi Family Biodevice Foundry, Bob leads the Rapid Prototyping Lab as an Engineering Technician. He partners with researchers, entrepreneurs, and early-stage companies to accelerate development in the microdevice and biomedical technology space.</p>`
  },
  "d2-5": {
    title: "Lunch",
    time: "12:30 – 1:30 PM · Thursday, June 25",
    location: "Bentley Dining Hall",
    body: `<p><strong>Philly Beef Dip</strong></p>
           <p>Thin sliced beef, au jus, sauteed mushrooms and onions, julienne pepper, swiss cheese, fries, salad</p>`
  },
  "d2-6": {
    title: "Free time",
    time: "1:30 – 5:30 PM · Thursday, June 25",
    location: "Outside",
    body: `<p>Explore the natural beauty of Loon Lake!</p>
           <p>Forest Laser Tag will run from 2:30 - 4 PM. Meet the activity coordinator outside of Pan Abode to participate.</p>
           <p>The sauna is booked from 3:30 - 5:30 PM. Please bring your own towel - using the towels from the cabins is not allowed.</p>
           <p>Canoes are available at the docks. Pick up a lifejacket and paddles before heading out!</p>`
  },
  "d2-7": {
    title: "Dinner",
    time: "5:30 – 6:30 PM · Thursday, June 25",
    location: "Bentley Dining Hall",
    body: `<p><strong>BC Wild Salmon</strong></p>
           <p>Served with seasonal veggies, focaccia, and salad</p>`
  },
    "d2-8": {
    title: "Family Feud: Lab Edition",
    time: "6:30 – 7:30 PM · Thursday, June 25",
    location: "Pan Abode",
    body: `<p>2 'families' will compete to name the most popular answers to commonly asked lab questions.</p>`
  },
  // DAY 3
  "d3-1": {
    title: "Breakfast",
    time: "8:30 – 9:30 AM · Friday, June 26",
    location: "Bentley Dining Hall",
    body: `<p><strong>The Big Breakfast</strong></p>
           <p>Scrambled eggs, side of crispy bacon, whole wheat toast, hashbrowns</p>`
  },
  "d3-2": {
    title: "Check out",
    time: "8:30 – 10:00 AM · Friday, June 26",
    location: "Pan Abode",
    body: `<p><strong>Please check out of bedrooms no later than 10:00 AM.</strong></p>
           <p>Bring your belongings to Pan Abode for the rest of the day's activities.</p>`
  },
  "d3-3": {
    title: "DEI Workshop",
    time: "9:30 – 10:30 AM · Friday, June 26",
    location: "Pan Abode",
    body: `<p>A workshop to reflect on the role of DEI in lab life.</p>`
  },
  "d3-4": {
    title: "Research Talk",
    time: "10:30 – 11:30 AM · Friday, June 26",
    location: "Pan Abode",
    body: `<p><strong>Chris Moraes</strong></p>
           <p>The Moraes lab designs and builds microtechnologies to probe the complex relationships between mechanics, materials, and biological function in engineered tissues. By creating precision tissue engineering tools and cell culture systems, we gain insight into the physical mechanisms underlying cardiovascular, cancer and respiratory diseases; and aim to apply this knowledge in designing the next generation of therapeutic discovery platforms.</p>`
  },
  "d3-5": {
    title: "Free time",
    time: "11:30 AM – 12:30 PM · Friday, June 26",
    location: "Outside",
    body: `<p>Go outside and enjoy the sunshine (hopefully).</p>`
  },
  "d3-6": {
    title: "Lunch",
    time: "12:30 – 1:30 PM · Friday, June 26",
    location: "Bentley Dining Hall",
    body: `<p><strong>Chicken Burgers</strong></p>
           <p>Crispy breaded chicken patties with veggie toppings, cheddar cheese, fries, assorted condiments, salad or soup</p>`
  }
};
