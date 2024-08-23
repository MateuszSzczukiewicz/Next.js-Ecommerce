import { CartFindOrCreateDocument, CartItemInput } from "../gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { CartAddProductDocument, CartGetByIdDocument } from "@/gql/graphql";
import { cookies } from "next/headers";

export const getCartById = async (cartId: string) => {
	try {
		const response = await executeGraphql(CartGetByIdDocument, { id: cartId });
		if (!response || !response.cart) {
			throw new Error("Failed to fetch cart data");
		}
		return response.cart;
	} catch (err) {
		console.error("Error fetching cart by id:", err);
		throw new Error(`Could not retrieve cart with ID ${cartId}`);
	}
};

const createNewCart = async () => {
	"use server";
	try {
		const createCartResponse = await executeGraphql(CartFindOrCreateDocument, {
			items: [],
		});

		if (!createCartResponse || !createCartResponse.cartFindOrCreate) {
			throw new Error("Failed to create a new cart");
		}

		const newCart = createCartResponse.cartFindOrCreate;

		cookies().set("cartId", newCart.id, {
			maxAge: 60 * 60 * 24 * 365,
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
			httpOnly: true,
			sameSite: "lax",
			priority: "low",
		});

		return newCart;
	} catch (err) {
		console.error("Error creating new cart:", err);
		throw new Error("Failed to create a new cart");
	}
};

export const findOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		try {
			const cart = await getCartById(cartId);

			if (!cart) {
				cookies().delete("cartId");
				return await createNewCart();
			}

			const response = await executeGraphql(CartFindOrCreateDocument, {
				id: cart.id,
				items: [],
			});

			if (!response || !response.cartFindOrCreate) {
				throw new Error("Failed to create or update cart");
			}

			return response.cartFindOrCreate;
		} catch (err) {
			console.error("Error fetching or updating cart by id:", err);
			cookies().delete("cartId");
			throw new Error("Failed to fetch or update cart, deleted cartId cookie");
		}
	}

	return await createNewCart();
};

export const addToCart = async ({ productId, quantity }: CartItemInput) => {
	try {
		const cartAddItemId = (await findOrCreateCart()).id;

		const input = {
			productId,
			quantity,
		};

		const response = await executeGraphql(CartAddProductDocument, {
			cartAddItemId,
			input,
		});

		if (!response || !response.cartAddItem) {
			throw new Error("Failed to add item to cart");
		}

		return response.cartAddItem;
	} catch (err) {
		console.error("Error adding product to cart:", err);
		throw new Error(`Unable to add product to cart: ${err}`);
	}
};
