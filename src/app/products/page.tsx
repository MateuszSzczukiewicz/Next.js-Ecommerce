import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getProductsList } from "@/api/products";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: { [key: string]: string[] | undefined };
}) {
	const page = Number(searchParams["page"] ?? 1);
	const take = Number(searchParams["take"] ?? 20);
	const totalPages = Math.ceil((await getProductsList()).length / take);
	return (
		<>
			<ul>
				<Suspense>
					<ProductsList page={page} take={take} />
				</Suspense>
			</ul>
			<Pagination currentPage={page} take={take} totalPages={totalPages} />
		</>
	);
}
