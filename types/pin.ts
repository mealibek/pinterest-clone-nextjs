export type PinType = {
    id: number;
    title: string;
    description: string;
    image: string;
    origin: string;
    path: string;
    profile: {
        id: number;
        first_name: string;
        last_name: string;
        profile_image: string;
    };
}