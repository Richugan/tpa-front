type PostStatus = 'publish' | 'future' | 'draft' | 'pending' | 'private';
type CommentPingStatus = 'open' | 'closed';
type PostFormat =
  | 'standard'
  | 'aside'
  | 'chat'
  | 'gallery'
  | 'link'
  | 'image'
  | 'quote'
  | 'status'
  | 'video'
  | 'audio';

export class WPPost {
  // Core fields
  id!: number; // Read-only
  date: string | null = null;
  date_gmt: string | null = null;
  guid!: Record<string, any>; // object
  link!: string; // Read-only
  modified!: string; // Read-only
  modified_gmt!: string; // Read-only
  slug!: string;
  status!: PostStatus;
  type!: string; // Read-only
  password?: string;
  permalink_template?: string; // Read-only
  generated_slug?: string; // Read-only

  // Content fields
  title!: Record<string, any>; // Usually { rendered: string }
  content!: Record<string, any>; // Usually { rendered: string }
  excerpt!: Record<string, any>; // Usually { rendered: string }

  // Relations
  author!: number;
  featured_media!: number;

  // Meta
  comment_status!: CommentPingStatus;
  ping_status!: CommentPingStatus;
  format!: PostFormat;
  meta!: Record<string, any>;
  sticky!: boolean;
  template!: string;

  // Taxonomies
  categories!: number[];
  tags!: number[];

  constructor(data: Partial<WPPost>) {
    Object.assign(this, data);
  }
}
