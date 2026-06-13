// Central place for the artist's details and copy.
// ▼▼ REPLACE the items marked TODO with the artist's real info. ▼▼
export const site = {
  name: "Sameer Gorde",
  fullName: "Sameer Bhivsen Gorde",
  role: "Visual Artist — Painting & Drawing",
  qualification: "BFA, MFA",
  location: "Pune, India",
  email: "sameergorde1@gmail.com",
  tagline: "Drawings and paintings on paper — the body, memory, and migration.",

  instagramHandle: "sameer_gorde",
  get instagram() {
    return `https://instagram.com/${this.instagramHandle}`;
  },

  phoneDisplay: "+91 70573 44622",
  whatsapp: "917057344622",

  // TODO: paste a Formspree form id (https://formspree.io) to receive messages
  formspreeId: "your-id",

  // Featured artwork id used for the homepage hero
  heroId: "self-portrait-7-16",
};

export const bio = `Sameer Gorde was born in Pune in 1991. He completed his BFA in Painting from Bharati Vidyapeeth's College of Fine Art, University of Pune, in 2013, and his MFA in Portraiture from the same institute in 2015. Gorde has participated in a number of group shows. His body of work grows out of his daily-life surroundings and experiences, engaging with social and political issues; at times, incidents from his past also become a part of his work. The artist lives and works in Pune.`;

// Epigraph that opens the critic essay (Ernst Fischer, quoted by the writer)
export const essayEpigraph = `Art as a 'life substitute', art as a means of putting man in a state of equilibrium with the surrounding world — the idea contains a partial recognition of the nature of art and its necessity. In order to be an artist it is necessary to seize, hold, and transform experience into memory, memory into expression, material into form. Emotion for an artist is not everything; he must also know his trade and enjoy it, understand all the rules, skills, forms, and conventions whereby nature — the shrew — can be tamed and subjected to the contract of art. The passion that consumes the dilettante serves the true artist: the artist is not mauled by the beast, he tames it.`;

export const essay: string[] = [
  `Sameer Gorde's skilfully evocative descriptions instantly captivate the imagination and sympathies of the viewer through the three routes of nostalgia, migration and political interference. Born into a farmer's family that migrated to the city for his father's job, Sameer from childhood observed and absorbed the changing space of the city, which also changed his family's role. He had seen his father working as a labourer in a company — a heavy job. His father in the meantime had a spine operation, painful for him as well as for Sameer, who was with him through it. This layer of incidents settled so deep in him that he unconsciously began scribbling anatomical forms — forms that were symbolic in a way.`,
  `These works take us into a discussion of the body's role in society and in the artist's ideas. The body transforms into a language — with shape, structure and communicative capability that fulfils all the functions of a language. His works show us how man takes possession of the natural by transforming it. Nature, for him, is the place where he belongs — his village. With the passing of time, modification began spreading its roots around it. Little aspects turned into drastic shifts: geographically, culturally and emotionally. Old structures were replaced by cement buildings which, though aesthetically beautifying, were emotionally shattering.`,
  `This shattering of his emotional and cultural connection is what this series of works is all about. Any form of body or structural change leaves a trace, and anything done to it may leave one too.`,
];

export const essayAuthor = "— Dwip Aher (Visual Artist, Writer, Critic and Translator)";

export const cv = {
  born: "1991, Pune, India",
  education: [
    {
      year: "2015",
      detail:
        "MFA in Portraiture, Bharati Vidyapeeth's College of Fine Art, University of Pune",
    },
    {
      year: "2013",
      detail:
        "BFA in Painting, Bharati Vidyapeeth's College of Fine Art, University of Pune",
    },
  ],
  // TODO: add the artist's exhibition list (year — title, venue, city)
  exhibitions: [
    { year: "—", detail: "Participated in a number of group shows (details to be added)" },
  ],
  mediums: "Ink, charcoal, acrylic, watercolour, pastel and collage on paper",
};
