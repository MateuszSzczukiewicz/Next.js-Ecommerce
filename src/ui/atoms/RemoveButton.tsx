"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/api/cart";

export const RemoveButton = ({ productId }: { productId: string }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const handleRemove = () => {
		startTransition(async () => {
			await removeItem(productId);
			router.refresh();
		});
	};

	return (
		<button
			onClick={handleRemove}
			disabled={isPending}
			className="text-sm font-medium text-indigo-600 hover:text-indigo-500 disabled:cursor-wait disabled:text-slate-400"
		>
			Remove
		</button>
	);
};
