"use client";

import Input from "@/components/UI/Input";
import React, { ChangeEvent, useEffect, useState } from "react";
import Pinterest from "@/assets/svg/pinterest.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PinSchema, PinSchemaType } from "@/validations/pin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { uploadImage } from "@/utils/pins";
import { createPinRequest } from "@/services/pins";

function CreatePinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PinSchemaType>({
    resolver: zodResolver(PinSchema as any),
    mode: "onBlur",
  });

  const [imageError, setImageError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      // Check if the selected file is an image
      if (!file.type.startsWith("image/")) {
        setImageError(
          "Please select a valid image file (JPEG, PNG, GIF, etc.)."
        );
        setSelectedImage(null);
      } else {
        setImageError(undefined);
        setSelectedImage(file);
      }
    }
  };

  const onSubmit = async (data: PinSchemaType) => {
    try {
      if (!selectedImage) {
        console.error("No image selected.");
        return;
      }

      if (imageError) {
        console.log(imageError);
        return;
      }

      // Set loading state
      setLoading(true);

      const imageRequest = await uploadImage(selectedImage);

      if (imageRequest.status === 201) {
        const { image_url } = imageRequest.data;

        if (image_url) {
          const updatedData = { ...data, image: image_url };
          const pinRequest = await createPinRequest(updatedData);

          if (pinRequest.status === 201) {
            setErrorMessages([]);
            alert("Pin Created!");
            // Redirect or perform any additional actions after successful pin creation
          } else {
            setErrorMessages(["Failed to create pin."]);
          }
        } else {
          setErrorMessages(["Image Upload Failed."]);
        }
      } else {
        setErrorMessages(["Image Upload Failed."]);
      }
    } catch (error) {
      console.error("Error creating pin:", error);
      setErrorMessages(["An unexpected error occurred."]);
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);

  return (
    <div className="max-w-[400px] m-auto mt-10 rounded-lg border border-gray-200 p-4 space-y-4">
      <div className="grid place-items-center space-y-4">
        <Link href={"/"}>
          <Pinterest />
        </Link>
        <h2 className="text-3xl font-medium">Create your Pin</h2>

        {errorMessages.length > 0 &&
          errorMessages.map((error, index) => (
            <p className="text-red-700 text-xs" key={index}>
              {error}
            </p>
          ))}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="#"
        noValidate
        className="w-full"
      >
        <div className="mb-4">
          <Input
            type="text"
            label="Pin Title"
            id="pin_title"
            {...register("title")}
            error={errors.title?.message}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Pin Description
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:border-blue-900"
            placeholder="Pin Description text here..."
            {...register("description")}
          ></textarea>

          {errors.description && (
            <p className="text-xs text-red-600 mt-2 font-medium">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white"
            id="file_input"
            type="file"
            onChange={handleFileChange}
            required
          ></input>

          {imageError && (
            <p className="text-xs text-red-600 mt-2 font-medium">
              {imageError}
            </p>
          )}
        </div>

        <div className="mb-4">
          <Input
            type="text"
            label="Pin Website"
            id="pin_website"
            {...register("website")}
            error={errors.website?.message}
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            label="Pin URL"
            id="pin_url"
            {...register("urlPath")}
            error={errors.urlPath?.message}
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="text-white bg-main-color hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2 text-center font-bold w-full"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-5 py-2 font-bold"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePinForm;
