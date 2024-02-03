export interface TableData {
  page: number;
  next: number;
  data?: DataEntity[] | null;
  total_contents: number;
  page_size: number;
}
export interface DataEntity {
  creator: Creator;
  content: Content;
}
export interface Creator {
  id: number;
  followers: number;
  username: string;
  external_id: string;
  external_url: string;
  name: string;
  email: string;
  platform: string;
  profile_text: string;
  profile_picture_url: string;
  follower_count: string;
  active_content_count?: string | null;
}

export type PlatformType = 'instagram' | 'tiktok';
export interface Content {
  id: number;
  uuid: string;
  account: number;
  external_id: string;
  external_url: string;
  timestamp: string;
  title: string;
  text: string;
  thumbnail_url: string;
  content_platform: PlatformType;
  content_type?: null;
  content_form: string;
  likes: number;
  comments: number;
  views: number;
  shares: number;
  total_engagement: number;
  engagement_of_views: number;
  engagement_of_followers: number;
  creator?: null;
  creator_follower_count?: number | null;
  creator_active_content_count?: number | null;
}
