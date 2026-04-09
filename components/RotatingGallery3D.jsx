"use client";

export default function RotatingGallery3D({ images = [] }) {

  const N = images.length;

  return (

    <div className="scene">

      <div
        className="a3d"
        style={{ "--n": N }}
      >

        {images.map((id, i) => (

          <img
            key={i}
            className="card"
            src={id}
            style={{ "--i": i }}
            alt="gallery image"
          />

        ))}

      </div>

    </div>

  );

}