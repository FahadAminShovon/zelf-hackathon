export interface TableData {
  count: number;
  next: string;
  previous?: null;
  results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
  id: number;
  author: Author;
  unique_id: number;
  data?: Data;
}
export interface Author {
  id: number;
  unique_id: number;
  username: string;
  data?: DataEntityOrData[] | null | DataEntityOrData;
}
export interface DataEntityOrData {
  unique_id: number;
  unique_uuid: string;
  origin_unique_id: string;
  info: Info;
  username: string;
  stats?: Stats;
  avatar: Avatar;
  texts: Texts;
}
export interface Info {
  name: string;
  platform: 'instagram' | 'tiktok';
}
export interface Stats {
  digg_count: DiggCount;
}
export interface DiggCount {
  followers: Followers;
}
export interface Followers {
  id: number;
  count: string;
}
export interface Avatar {
  urls?: string[] | null;
}
export interface Texts {
  profile_text: string;
}
export interface Data {
  unique_id: number;
  unique_uuid: string;
  origin_unique_id: string;
  creation_info: CreationInfo;
  author: Author1;
  context: Context;
  origin_details: OriginDetails;
  media: Media;
  stats: Stats1;
}
export interface CreationInfo {
  created_at: string;
  timestamp: string;
}
export interface Author1 {
  id: number;
  username: string;
}
export interface Context {
  main_text: string;
  token_count: number;
  char_count: number;
  tag_count: number;
}
export interface OriginDetails {
  origin_platform: string;
  origin_url: string;
}
export interface Media {
  urls?: string[] | null;
  media_type: string;
}
export interface Stats1 {
  digg_counts: DiggCounts;
}
export interface DiggCounts {
  likes: LikesOrViewsOrComments;
  views: LikesOrViewsOrComments;
  comments: LikesOrViewsOrComments;
}
export interface LikesOrViewsOrComments {
  id: number;
  count: number;
}
