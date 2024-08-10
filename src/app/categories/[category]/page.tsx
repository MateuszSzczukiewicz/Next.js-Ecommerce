import { Suspense } from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { Pagination } from "@/ui/molecules/Pagination";
import { getCategoryProducts } from "@/api/categories";
import { PAGE_SIZE } from "@/app/consts";

export default async function CategoriesPage({
	params,
	searchParams,
}: {
	params: { category: string };
	searchParams: { [key: string]: string[] | undefined };
}) {
	const page = Number(searchParams["page"] ?? 1);
	const take = Number(searchParams["take"] ?? PAGE_SIZE);

	const categoryProducts = await getCategoryProducts(params.category);

	if (!categoryProducts) return <div>Brak produktów</div>;

	const totalPages = Math.ceil(categoryProducts.products.length / take);

	return (
		<>
			<ul>
				<Suspense>
					<ProductsList products={categoryProducts.products} />
				</Suspense>
			</ul>
			<Pagination currentPage={page} take={take} totalPages={totalPages} />
		</>
	);
}
