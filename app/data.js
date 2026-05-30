// Central parish information — edit here to update the whole site.

export const parish = {
  name: "Holy Family Parish",
  location: "Kamias",
  fullName: "Holy Family Parish – Kamias",
  tagline: "A Roman Catholic Community",
  address: "K-7 / K-1 18L, Barangay West Kamias, Quezon City, Philippines 1102",
  email: "hfpmediaministry@gmail.com",
  facebook: "https://www.facebook.com/Holy-Family-Parish-Kamias",
  facebookLabel: "Holy Family Parish – Kamias",
};

export const sundayMass = [
  { time: "6:00 AM", note: "Tagalog Mass" },
  { time: "8:00 AM", note: "English Mass" },
  { time: "10:00 AM", note: "English Mass" },
  { time: "4:00 PM", note: "Tagalog Mass" },
  { time: "5:00 PM", note: "Children's Mass" },
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

export const sacraments = [
  {
    title: "Confession",
    schedule: "Everyday, after the Mass",
    detail:
      "Approach the priest after the Mass for the Sacrament of Reconciliation.",
    icon: "dove",
  },
  {
    title: "Baptism",
    schedule: "Sundays at 11:00 AM (regular)",
    detail:
      "Individual baptism schedules are arranged by appointment with the parish office.",
    icon: "water",
  },
  {
    title: "Other Sacraments",
    schedule: "By appointment",
    detail:
      "For Matrimony, Anointing of the Sick, and other sacraments, please coordinate with the parish office for scheduling.",
    icon: "rings",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mass Schedule", href: "#mass" },
  { label: "Sacraments", href: "#sacraments" },
  { label: "Visit Us", href: "#visit" },
];
