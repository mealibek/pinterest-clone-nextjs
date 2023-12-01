import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/v1';

export const uploadImage = async (
    imageFile: File
): Promise<AxiosResponse<{ image_url: string }>> => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response: AxiosResponse<{ image_url: string }> = await axios.post(
            `${BASE_URL}/pins/upload/`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        console.log('Image uploaded successfully. Image URL:', response.data.image_url);

        // Return the entire AxiosResponse
        return response;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; // Re-throw the error if needed
    }
};
