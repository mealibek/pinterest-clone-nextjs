import interceptor from '@/utils/axios/interceptor';

const BASE_URL = "http://127.0.0.1:8000/api/v1";


export type UpdateProfileSchema = {
    first_name: string;
    last_name: string;
    profile_image: string;
}

export const updateProfile = async (data: UpdateProfileSchema) => {
    return interceptor.patch(`${BASE_URL}/profile/`, data);
}

