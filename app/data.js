// Central parish information — edit here to update the whole site.

export const parish = {
  name: "Holy Family Parish",
  location: "Kamias",
  fullName: "Holy Family Parish – Kamias",
  tagline: "A Roman Catholic Community",
  address: "K-7 / K-1 18L, Barangay West Kamias, Quezon City, Philippines 1102",
  email: "holyfamilyparishkamias@gmail.com",
  facebook: "https://www.facebook.com/Holy-Family-Parish-Kamias",
  facebookLabel: "Holy Family Parish – Kamias",
};

export const sundayMass = [
  { time: "6:00 AM", note: "Tagalog Mass" },
  { time: "8:00 AM", note: "English Mass" },
  { time: "10:00 AM", note: "English Mass" },
  { time: "3:00 PM", note: "Children's Mass" },
  { time: "4:00 PM", note: "Tagalog Mass" },
  { time: "6:00 PM", note: "English Mass" },
  { time: "7:15 PM", note: "English Mass" },
];

export const weekdayMass = {
  days: "Monday to Friday",
  times: ["6:30 AM", "6:30 PM"],
};

export const saturdayMass = {
  days: "Saturday",
  times: ["6:30 AM", "6:00 PM"],
};

// Horizontally scrolling parish gallery (placeholders for future photos).
// Add an `image` field (e.g. "/assets/gallery-mass.jpeg") to show a real photo.
export const galleryPhotos = [
  { caption: "The Parish Church" },
  { caption: "Sunday Mass" },
  { caption: "Feast Day Celebration" },
  { caption: "Baptisms & Weddings" },
  { caption: "Parish Ministries" },
  { caption: "Community Outreach" },
  { caption: "Holy Week" },
  { caption: "Parish Events" },
];

// The seven sacraments. Baptism and Confession are flagged `main: true` and are
// featured on the /sacraments page. Some link to their own detail pages.
export const sevenSacraments = [
  {
    title: "Baptism",
    main: true,
    icon: "water",
    schedule: "Sundays at 11:00 AM (regular)",
    detail:
      "The gateway to life in the Spirit. Through water and the Holy Spirit we are freed from sin and reborn as children of God.",
    href: "/baptism",
  },
  {
    title: "Confession",
    main: true,
    icon: "dove",
    schedule: "Everyday, after the Mass",
    detail:
      "Also called Penance or Reconciliation. Encounter God's mercy and forgiveness — simply approach the priest after any Mass.",
  },
  {
    title: "Holy Eucharist",
    icon: "eucharist",
    detail:
      "The source and summit of our faith — the true Body and Blood of Christ, received at every Mass.",
  },
  {
    title: "Confirmation",
    icon: "flame",
    detail:
      "Sealed with the gift of the Holy Spirit, we are strengthened to live out and bear witness to our faith.",
  },
  {
    title: "Anointing of the Sick",
    icon: "anointing",
    detail:
      "Healing, grace, and comfort for the sick and the elderly. Please contact the parish office to arrange a visit.",
  },
  {
    title: "Holy Orders",
    icon: "book",
    detail:
      "Men are ordained as deacons, priests, and bishops to serve the Church and shepherd the People of God.",
  },
  {
    title: "Matrimony",
    icon: "rings",
    detail:
      "A man and a woman are united in a sacred, lifelong covenant of love before God.",
    href: "/weddings",
  },
];

export const officeServices = [
  {
    title: "Mass Intentions",
    detail:
      "Request a Mass to be offered for the living, the departed, or in thanksgiving. Names and intentions are submitted at the parish office.",
    icon: "candle",
  },
  {
    title: "Mass Cards",
    detail:
      "Mass cards for your departed loved ones and special occasions, prepared and signed by the parish office.",
    icon: "card",
  },
  {
    title: "Certificates",
    detail:
      "Request copies of Baptismal, Confirmation, Marriage, and other parish certificates for sacramental or legal needs.",
    icon: "certificate",
  },
  {
    title: "Weddings",
    detail:
      "Reserve your date and begin the requirements for your church wedding. The office will guide you through every step.",
    icon: "rings",
    href: "/weddings",
  },
  {
    title: "Room Reservation",
    detail:
      "Reserve parish facilities and function rooms for meetings, formations, and parish-related gatherings.",
    icon: "door",
  },
];

// Templated placeholder announcements — edit these with real parish updates.
export const announcements = [
  {
    title: "Welcome to Our Parish Announcements",
    date: "June 28, 2026",
    category: "Parish News",
    excerpt:
      "This is a sample announcement. Use this space to share parish news, reminders, and messages from the parish priest with the community.",
  },
  {
    title: "Upcoming Feast Day Celebration",
    date: "June 25, 2026",
    category: "Events",
    excerpt:
      "Placeholder details for an upcoming celebration or special Mass. Include the date, time, and any preparations the community should know about.",
  },
  {
    title: "Schedule of Recollection & Formation",
    date: "June 20, 2026",
    category: "Ministry",
    excerpt:
      "Use this template to post schedules for recollections, seminars, catechism, and ministry formation sessions held at the parish.",
  },
  {
    title: "Parish Office Hours Reminder",
    date: "June 15, 2026",
    category: "Notice",
    excerpt:
      "A reminder template for office hours, document requests, and other parish office concerns. Edit the details as needed.",
  },
];

export const suggestionCategories = [
  "General Suggestion",
  "Liturgy & Worship",
  "Facilities & Maintenance",
  "Events & Activities",
  "Ministries & Volunteering",
  "Other",
];

// Parish ministries — teaser on the home page, full list at /ministries.
// Add an `image` field (e.g. "/assets/ministry-youth.jpeg") to any item to
// replace its placeholder picture with a real photo.
export const ministries = [
  {
    name: "Social Communications Ministry",
    blurb:
      "Proclaim the Gospel in the digital age. Take photos, run our online pages, and design materials that bring the parish closer to the community. Perfect for creatives, writers, and the tech-savvy.",
  },
  {
    name: "Worship Ministry",
    blurb:
      "Help prepare reverent and meaningful liturgies. Assist in coordinating the celebration of the Mass and the sacraments so the whole community can worship as one.",
  },
  {
    name: "Music Ministry",
    blurb:
      "Lift hearts to God through song. Singers and instrumentalists are warmly invited to lead the congregation in praise during Masses and parish celebrations.",
  },
  {
    name: "Ministry of Altar Server",
    blurb:
      "Serve at the altar of the Lord. Young people are invited to assist the priest during Mass — a beautiful way to grow closer to Christ through humble service.",
  },
  {
    name: "Eucharistic Minister of the Holy Communion",
    blurb:
      "Bring the Body of Christ to the faithful, including the sick and homebound. A profound calling for those who wish to serve at the Lord's table.",
  },
  {
    name: "Mother Butlers Guild",
    blurb:
      "A fellowship of women devoted to the care of the church and to works of charity. Join a community of faith, service, and lasting friendship.",
  },
  {
    name: "Greeters and Collectors Ministry",
    blurb:
      "Be the welcoming face of our parish. Greet parishioners with a warm smile, help them feel at home, and assist during the offertory at Mass.",
  },
  {
    name: "Lectors and Commentators Ministry",
    blurb:
      "Proclaim the Word of God. If you are comfortable reading before the assembly, share the Scriptures and guide the congregation through the celebration of the Mass.",
  },
  {
    name: "Parish Youth Ministry",
    blurb:
      "Calling all young people! Grow in faith, build lasting friendships, and serve the community through fellowship, formation, and fun parish activities.",
  },
  {
    name: "Social Service Ministry",
    blurb:
      "Be the hands of Christ to those in need. Reach out to the poor and marginalized through outreach, relief drives, and works of mercy in our community.",
  },
  {
    name: "Migrants Ministry",
    blurb:
      "Welcome the stranger. Accompany and support migrants and those far from home, helping them find belonging within our parish family.",
  },
  {
    name: "Formation Ministry",
    blurb:
      "Deepen your faith and help others do the same. Assist in catechesis, seminars, and faith formation for parishioners of every age.",
  },
];

// Detail pages reached by clicking the Baptism and Weddings cards.
export const baptismInfo = {
  title: "Sacrament of Baptism",
  eyebrow: "Welcomed Into God's Family",
  imageLabel: "Photo: Baptism at Holy Family Parish",
  intro:
    "Through Baptism we are cleansed of original sin and reborn as children of God and members of His Church. Holy Family Parish warmly welcomes you and your child to this first and foundational sacrament.",
  schedule:
    "Regular baptisms are held on Sundays at 11:00 AM. Individual schedules may be arranged by appointment with the parish office.",
  requirements: [
    "Photocopy of the child's PSA / birth certificate",
    "Valid IDs of the parents",
    "Full names of the chosen godparents (ninong / ninang)",
    "Attendance at the pre-baptismal seminar for parents and godparents",
    "Accomplished baptismal application form from the parish office",
  ],
  reminders: [
    "Godparents should be practicing Catholics who have received the Sacraments of Baptism, Confirmation, and Holy Communion.",
    "Please coordinate with the parish office at least one week before your preferred date.",
    "A donation for the parish may be given, but it is never a condition for receiving the sacrament.",
  ],
};

export const weddingInfo = {
  title: "Church Weddings",
  eyebrow: "United as One in Christ",
  images: [
    { label: "Church wedding ceremony" },
    { label: "The newlyweds" },
  ],
  intro:
    "Holy Matrimony is a sacred covenant in which a man and a woman are united before God. We are honored to journey with you as you prepare for this holy and joyful celebration.",
  schedule:
    "Wedding dates are reserved through the parish office. We recommend booking several months in advance to allow time for the requirements and marriage preparation. Weddings are celebrated at 10:00 AM, 2:00 PM, and 3:00 PM (Tuesday to Saturday).",
  requirements: [
    "PSA Birth Certificate of the groom and bride (newly issued)",
    "CENOMAR (Certificate of No Marriage Record) for both parties",
    "Marriage License from your local civil registrar",
    "Newly issued Baptismal Certificate of both, annotated “for marriage purposes”",
    "Newly issued Confirmation Certificate of both, annotated “for marriage purposes”",
    "List of sponsors and an invitation card",
  ],
  reminders: [
    "After the initial requirements are submitted, the Marriage Banns & Permission, Pre-Cana Seminar, and Canonical Interview will follow.",
    "Parish office hours: Tuesday to Sunday, 8:00 AM – 12:00 NN and 2:00 PM – 6:00 PM (closed Mondays).",
    "Requirements may vary if either party was previously married or belongs to another parish or rite.",
  ],
};

// The three "pillar" cards in the About section link to these template pages.
// Each section's `imageLabel` is a placeholder caption — replace the placeholder
// blocks with real photos later (add an `image` field per section).
export const pillars = [
  {
    slug: "faith",
    title: "Faith",
    card: "Rooted in the Eucharist and the teachings of the Catholic Church.",
    eyebrow: "Rooted in Christ",
    intro:
      "At Holy Family Parish, faith is the foundation of everything we do. We are a community rooted in the Eucharist, nourished by the Word of God, and guided by the teachings of the Catholic Church.",
    sections: [
      {
        heading: "The Holy Eucharist",
        imageLabel: "Photo: Celebration of the Holy Mass",
        image: "/assets/faith1.jpg",
        text: "The Mass is the source and summit of our Christian life. Each celebration draws us closer to Christ, truly present in the Eucharist, and unites us as one body in Him.",
      },
      {
        heading: "A Life of Prayer",
        imageLabel: "Photo: Eucharistic Adoration",
        text: "Through personal and communal prayer, devotions, and Eucharistic adoration, we encounter the living God and grow in our relationship with Him.",
      },
      {
        heading: "Handing On the Faith",
        imageLabel: "Photo: Catechism & faith formation",
        text: "We pass on the faith to the next generation through catechism, formation, and the witness of a community that strives to live the Gospel each day.",
      },
    ],
  },
  {
    slug: "family",
    title: "Family",
    card: "A welcoming community that journeys together in every season of life.",
    eyebrow: "A Home for All",
    intro:
      "We are the Holy Family Parish — a home where every person belongs. Inspired by the Holy Family of Jesus, Mary, and Joseph, we journey together through every season of life.",
    sections: [
      {
        heading: "A Welcoming Community",
        imageLabel: "Photo: Parishioners after Sunday Mass",
        text: "Whether you have worshipped here for decades or are visiting for the first time, you are family. All are welcome at the Lord's table.",
      },
      {
        heading: "Journeying Together",
        imageLabel: "Photo: Parish fellowship & gatherings",
        text: "From baptisms to weddings, in joys and in sorrows, we walk beside one another — celebrating life's milestones and supporting each other in times of need.",
      },
      {
        heading: "Growing in Fellowship",
        imageLabel: "Photo: Ministries & parish events",
        text: "Our many ministries and parish events bring people together, building lasting friendships rooted in faith and shared service.",
      },
    ],
  },
  {
    slug: "service",
    title: "Service",
    card: "Reaching out in charity to our neighbors and those in need.",
    eyebrow: "Love in Action",
    intro:
      "Faith without works is dead. As followers of Christ, we reach out in love to our neighbors — especially the poor, the hungry, and those most in need.",
    sections: [
      {
        heading: "Feeding the Hungry",
        imageLabel: "Photo: Parish feeding program",
        text: "Our parish regularly goes out to feed the hungry and share what we have with those who have little. In serving them, we serve Christ Himself.",
      },
      {
        heading: "Caring for the Least",
        imageLabel: "Photo: Charity & relief drives",
        text: "Through relief drives, medical missions, and outreach to the marginalized, we extend the compassion of God to the most vulnerable in our community.",
      },
      {
        heading: "A Call to Serve",
        imageLabel: "Photo: Volunteers in action",
        text: "Every parishioner is invited to take part in our works of mercy. Together, we become the hands and feet of Christ in the world.",
      },
    ],
  },
];

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Mass Schedule", href: "/#mass" },
  { label: "Sacraments", href: "/#sacraments" },
  { label: "Parish Office", href: "/#office" },
  { label: "Visit Us", href: "/#visit" },
  { label: "Ministries", href: "/ministries" },
  { label: "Suggestions", href: "/#suggestions" },
  { label: "Announcements", href: "/announcements" },
];
