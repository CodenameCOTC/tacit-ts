export interface ImageInterface {
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    description: string;
    alt_description: string;
    urls: Urls;
    links: Links;
    categories?: (null)[] | null;
    sponsored: boolean;
    sponsored_by?: null;
    sponsored_impressions_id?: null;
    likes: number;
    liked_by_user: boolean;
    current_user_collections?: (null)[] | null;
    user: User;
    tags?: (TagsEntity)[] | null;
}
export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}
export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}
export interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username?: null;
    portfolio_url?: null;
    bio?: null;
    location?: null;
    links: Links1;
    profile_image: ProfileImage;
    instagram_username?: null;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
}
export interface Links1 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}
export interface ProfileImage {
    small: string;
    medium: string;
    large: string;
}
export interface TagsEntity {
    title: string;
}
