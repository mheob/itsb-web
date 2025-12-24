export interface Stat {
  lowerTitle: string;
  upperTitle: string;
  value: number;
  duration?: number;
  format?: boolean;
  initial?: number;
  prefix?: string;
  roundTo?: number;
  step?: number;
  suffix?: string;
}
