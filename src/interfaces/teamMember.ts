export default interface TeamMember {
    name: string;
    role: string;
    socialMedia: SocialMedia[];
    image?: string; //Image route in public directory
}

export type NameMedia =
    | "FACEBOOK"
    | "LINKEDIN"
    | "GITHUB"
    | "INSTAGRAM"
    | "WEB"
    | "GOOGLE"
    | "TIKTOK"
    | "TWITTER";

export interface SocialMedia {
    name: NameMedia;
    link: string;
}