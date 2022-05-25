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


  ! No need to add any of the href prefixes.
  @resources = {
    title: String, // ! Brand name/Title of the resource
    website: String, // ! No need to include http:// or https://
    phone: String,  // ! A number that works with the `tel:` href format
    email: String // ! A valid email address
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
  BE: {
    default: [
      {
        title: "Awel",
        phone: "102",
        website: "awel.be",
      },
      {
        title: "Zelfmoord 1813",
        phone: "1813",
        website: "zelfmoord1813.be",
      },
      {
        title: "Tele-Onthaal",
        phone: "106",
        website: "tele-onthaal.be",
      },
      {
        title: "CAW",
        phone: "102",
        website: "caw.be",
      },
      {
        //CAW, but targeted towards young people
        title: "JAC",
        phone: "102",
        website: "caw.be/jac",
      }
    ]
  },
  NL: {
    default: [
      {
        title: "De Luisterlijn",
        phone: "088 0767 000",
        website: "deluisterlijn.nl",
        email: "ehulp@deluisterlijn.nl",
      },
      {
        title: "Kindertelefoon",
        phone: "0800-0432",
        website: "kindertelefoon.nl",
      },
      {
        title: "Alles oke?",
        phone: "0800-0450",
        website: "allesoke.nl",
      },
      {
        title: "113 Zelfmoord Preventie",
        phone: "0800 0113",
        website: "113.nl",
      }
    ]
  },

  // Worldwide
  default: [

  ]
}