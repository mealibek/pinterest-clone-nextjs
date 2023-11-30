import { PinType } from "@/types/pin";
import { IconDots, IconLink, IconShare2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PinListCard(props: PinType) {
  // Function to truncate the title if it exceeds 20 characters
  const truncateTitle = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative max-w-[250px] group my-4 mx-auto break-inside-avoid">
      <button
        type="button"
        className="text-white bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full px-5 py-2.5 text-center absolute top-2 right-2 z-10 group-hover:block hidden font-medium text-sm"
      >
        Save
      </button>
      <div className="relative cursor-zoom-in z-0">
        <Link href={`/pins/${props.id}`} className="text-gray-900">
          <Image
            src={props.image}
            alt={props.title}
            width={250}
            height={300}
            className="object-cover object-center min-h-[100px] rounded-2xl group-hover:brightness-50 cursor-zoom-in"
          />
        </Link>
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1 justify-between z-10">
          <a
            href={props.path}
            target="_blank"
            className="text-xs items-center gap-1 text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-blue-400 font-medium rounded-full p-1 px-2 hidden opacity-80 hover:opacity-100 group-hover:flex"
          >
            <IconLink width={25} height={25} />
            {truncateTitle(props.origin, 10)}
          </a>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-blue-400 font-medium rounded-full text-sm p-1 hidden opacity-80 hover:opacity-100 group-hover:block"
            >
              <IconShare2 width={25} height={25} />
            </button>
            <button
              type="button"
              className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-blue-400 font-medium rounded-full text-sm p-1 hidden opacity-80 hover:opacity-100 group-hover:block"
            >
              <IconDots width={25} height={25} />
            </button>
          </div>
        </div>
      </div>

      {props.title && (
        <Link
          href={`/pins/${props.id}`}
          className="text-sm mt-2 font-medium cursor-zoom-in"
        >
          {truncateTitle(props.title, 65)}
        </Link>
      )}

      {props.profile && (
        <div className="mt-2 flex items-center gap-2 cursor-zoom-in">
          <Image
            className="p-[1px] rounded-full ring-2 ring-gray-300"
            width={30}
            height={30}
            src={
              props.profile.profile_image ??
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt="Profile Avatar Image"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
          <Link href={`/pins/${props.id}`} className="text-xs font-medium">
            {truncateTitle(
              props.profile.first_name + " " + props.profile.last_name,
              30
            )}
          </Link>
        </div>
      )}
    </div>
  );
}

export default PinListCard;
