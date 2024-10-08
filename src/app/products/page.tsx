import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getProductsList } from "@/api/products";
import { PAGE_SIZE } from "@/app/consts";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: { [key: string]: string[] | undefined };
}) {
	const page = Number(searchParams["page"] ?? 1);
	const take = Number(searchParams["take"] ?? PAGE_SIZE);

	const skip = (page - 1) * take;

	const { total, data: products } = await getProductsList(take, skip);
	const totalPages = Math.ceil(total / take);

	return (
		<>
			<Suspense>
				<ul>
					<ProductsList products={products} />
				</ul>
				<Pagination currentPage={page} take={take} totalPages={totalPages} />
			</Suspense>
		</>
	);
}
