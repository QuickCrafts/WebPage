export default interface Proyects {
    name: string;
    url: string;
    icon?: ImageMetadata;
    description: string;
    slogan: string;
    galery: Galery[];
    key: string;
}

export interface Galery {
    url: ImageMetadata;
}