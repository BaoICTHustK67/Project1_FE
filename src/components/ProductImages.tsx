"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/28292140/pexels-photo-28292140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/14023973/pexels-photo-14023973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/14771926/pexels-photo-14771926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/16077975/pexels-photo-16077975/free-photo-of-m-t-c-nh-quan-nong-thon-luc-ch-ng-v-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {images.map((image, index) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={image.id}
            onClick={() => setIndex(index)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
