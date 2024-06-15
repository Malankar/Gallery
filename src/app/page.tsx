import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg",
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg",
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg",
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg",
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg",
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg", 
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg",
  "https://utfs.io/f/9a7259ac-ed90-449a-9585-2047705828ea-dyjb8o.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className=""> 
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
