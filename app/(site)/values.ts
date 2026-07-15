// app/(site)/values.ts
export interface ValueItem {
  number: string;
  icon: string; // path to icon asset
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  { number: "01", icon: "/value/bed.svg", title: "Meraki", description: "We bring heart to everything we do" },
  { number: "02", icon: "/value/bed.svg", title: "Wisdom", description: "We make thoughtful decisions." },
  { number: "03", icon: "/value/bed.svg", title: "Upekkha", description: "We make thoughtful decisions." },
  { number: "04", icon: "/value/bed.svg", title: "Cadence", description: "We move with rhythm and intention." },
];