import Image from "next/image";

type ServicePhotoProps = {
  filename?: string;
  src?: string;
  alt: string;
  position?: string;
};

export default function ServicePhoto({ filename, src, alt, position = "50% 35%" }: ServicePhotoProps) {
  const imageSrc = src ?? (filename ? `/new%20qss/${encodeURIComponent(filename)}` : undefined);
  if (!imageSrc) return null;

  return (
    <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-blue-100 bg-slate-100">
      <Image src={imageSrc} alt={alt} fill sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 90vw, 45vw" className="object-cover" style={{ objectPosition: position }} />
    </div>
  );
}
