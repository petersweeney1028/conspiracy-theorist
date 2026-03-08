export type Status = "CONFIRMED" | "UNRESOLVED" | "DEBUNKED";

export type TimelineEventType =
  | "origin"
  | "coverup"
  | "exposure"
  | "confirmation"
  | "denial"
  | "development";

export interface TimelineEvent {
  date: string;
  event: string;
  type: TimelineEventType;
}

export interface Source {
  title: string;
  url: string;
  type: "primary" | "journalism" | "academic" | "official";
}

export interface RelatedMedia {
  title: string;
  url: string;
  type: "podcast" | "documentary" | "series" | "book" | "youtube";
  year: number;
  description: string;
}

export interface Conspiracy {
  id: string;
  title: string;
  slug: string;
  status: Status;
  confidence: number;
  category: string[];
  summary: string;
  mainstream_narrative_at_time: string;
  what_happened: string;
  first_claimed: string;
  confirmed_date: string | null;
  years_to_confirm: number | null;
  timeline: TimelineEvent[];
  key_sources: Source[];
  tags: string[];
  related_media?: RelatedMedia[];
}
