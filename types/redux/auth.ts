export type AuthUserType = {
    user: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        image: string;
    },
    isLoggedIn: boolean
}