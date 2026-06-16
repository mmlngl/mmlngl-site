import type { Post } from "content-collections";

export type PostModel = Post & { viewCount: number };
