import { Model } from "./Model";

export interface Blogs extends Model {
  id?: string;
  title: string;
  label: string;
  description: string;
}
