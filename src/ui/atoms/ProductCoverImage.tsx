export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<img
			src={src}
			alt={alt}
			className="w-1/3 rounded-md bg-zinc-100 object-cover p-5 transition hover:p-3"
		/>
	);
};
