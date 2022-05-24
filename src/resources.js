module.exports = {
  /* Format
  <Country Code>: {
    <Region>: {
      <City>: [resources],
      
      default: [resources]
    },

    default: [resources]
  }

  # OR

  <Country Code>: {
    <Region>: [resources],

    default: [resources]
  }

  # OR

  <Country Code>: [resources]


  @resources = {
    title: String,
    website: String,
    phone: String,
    email: String
  }
  
  */

  // # Countries
  AU: {
    Queensland: [

    ],

    default: [
      {
        title: "Beyond Blue",
        phone: "1300 22 4636",
        website: "www.beyondblue.org.au",
      },
      {
        title: "Kids Helpline",
        phone: "1800 55 1800",
        website: "www.kidshelpline.com.au",
      },
      {
        title: "Lifeline",
        phone: "13 11 14",
        website: "www.lifeline.org.au",
      },
      {
        title: "Samaritans",
        phone: "135 247",
        website: "thesamaritans.org.au",
      },
      {
        title: "SANE",
        phone: "1800 18 7263",
        website: "www.sane.org",
      },
      {
        title: "headspace",
        website: "headspace.org.au",
      }
    ]
  },
  NL: {
    default: [
      {
        title: "De Luisterlijn",
        phone: "088 0767 000",
        website: "https://www.deluisterlijn.nl/",
        email: "ehulp@deluisterlijn.nl",
      },
      {
        title: "Kindertelefoon",
        phone: "0800-0432",
        website: "https://www.kindertelefoon.nl/",
      },
      {
        title: "Alles oke?",
        phone: "0800-0450",
        website: "https://www.allesoke.nl/",
      },
      {
        title: "113 Zelfmoord Preventie",
        phone: "0800 0113",
        website: "https://www.113.nl",
      }
    ]
  },

  // Worldwide
  default: [
  
  ]
}