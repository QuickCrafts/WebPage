import type { NameMedia } from "../interfaces/teamMember.ts";

export const getImageMedia = (media: NameMedia, style: 'dark' | 'light'): string => {
    const route = '../../public/media/' + style;

    switch (media) {
        case 'FACEBOOK':
            return `${route}/facebook.svg`;
        case 'GITHUB':
            return `${route}/github.svg`;
        case 'INSTAGRAM':
            return `${route}/instagram.svg`;
        case 'LINKEDIN':
            return `${route}/linkedin.svg`;
        case 'WEB':
            return `${route}/web.svg`;
        case 'GOOGLE':
            return `${route}/google.svg`;
        case 'TIKTOK':
            return `${route}/tiktok.svg`;
        case 'TWITTER':
            return `${route}/twitter.svg`;
        default:
            return '';
    }
}