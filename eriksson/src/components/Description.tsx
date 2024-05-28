// Description.js
import React from "react";

export default function Description() {
  return (
    <div className="bg-sky-800">
      <div className="container mx-auto py-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl text-white mb-4">Our Craftsmanship</h2>
            <p className="text-white">
              Detailed description about the craftsmanship...
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src="/image1.png" alt="Image 1" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between flex-row-reverse">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl text-white mb-4">Our Materials</h2>
            <p className="text-white">
              Detailed description about the materials...
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src="/image2.png" alt="Image 2" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
