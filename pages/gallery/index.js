import Link from "next/link";

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <Link href="/gallery/animated-buttons">
        <a>
          Animated buttons
        </a>
      </Link>
    </div>
  );
}

export default Gallery;