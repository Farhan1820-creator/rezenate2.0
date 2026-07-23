// app/(site)/values.ts
export interface ValueItem {
  number: string;
  icon: string; // path to icon asset
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  { number: "01", icon: "/value/meraki.svg", title: "Meraki", description: "We bring heart to everything we do" },
  { number: "02", icon: "/value/wisdom.svg", title: "Wisdom", description: "We make thoughtful decisions." },
  { number: "03", icon: "/value/wisdom.svg", title: "Rezolutionary", description: "We believe everyone has the power to shape what happens next." },
  { number: "04", icon: "/value/upekkha.svg", title: "Upekkha", description: "We make thoughtful decisions." },
  { number: "05", icon: "/value/cadence.svg", title: "Cadence", description: "We move with rhythm and intention." },
];