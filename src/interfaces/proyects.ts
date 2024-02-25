export default interface Proyects {
    name: string;
    url: string;
    icon?: ImageMetadata;
    description: string;
    vision: string;
    mission: string;
    slogan: string;
    galery: Galery[];
    key: string;
}

export interface Galery {
    url: ImageMetadata;
}