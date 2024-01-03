export default interface Proyects {

    name: string;
    url: string;
    icon?: string;
    description: string;
    slogan: string;
    galery: Galery[];
}

export interface Galery {
    url: string;
}