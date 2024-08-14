/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: { input: unknown; output: unknown };
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: { input: unknown; output: unknown };
};

export type Cart = {
	id: Scalars["ID"]["output"];
	items: Array<CartItem>;
};

export type CartItem = {
	product: Product;
	quantity: Scalars["Int"]["output"];
};

export type CartItemInput = {
	productId: Scalars["String"]["input"];
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Category = {
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CategoryList = {
	data: Array<Category>;
	meta: ListMeta;
};

export type Collection = {
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CollectionList = {
	data: Array<Collection>;
	meta: ListMeta;
};

export type ListMeta = {
	/** The total number of items matching the query */
	count: Scalars["Int"]["output"];
	/** The total number of items in the database */
	total: Scalars["Int"]["output"];
};

export type Mutation = {
	cartAddItem: Cart;
	cartChangeItemQuantity: Cart;
	cartComplete: Order;
	cartFindOrCreate: Cart;
	cartRemoveItem: Cart;
	reviewCreate: Cart;
};

export type MutationCartAddItemArgs = {
	id: Scalars["ID"]["input"];
	input: MutationCartAddItemInput;
};

export type MutationCartChangeItemQuantityArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type MutationCartCompleteArgs = {
	cartId: Scalars["ID"]["input"];
	userEmail: Scalars["String"]["input"];
};

export type MutationCartFindOrCreateArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	input: MutationCartFindOrCreateInput;
};

export type MutationCartRemoveItemArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
};

export type MutationReviewCreateArgs = {
	author: Scalars["String"]["input"];
	description: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	title: Scalars["String"]["input"];
};

export type MutationCartAddItemInput = {
	item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
	items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lines: Scalars["JSON"]["output"];
	status: OrderStatus;
	totalAmount: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type OrderList = {
	data: Array<Order>;
	meta: ListMeta;
};

export enum OrderSortBy {
	Default = "DEFAULT",
	Status = "STATUS",
	Total = "TOTAL",
}

export enum OrderStatus {
	Cancelled = "CANCELLED",
	Created = "CREATED",
	Fulfilled = "FULFILLED",
	Paid = "PAID",
}

export type Product = {
	categories: Array<Category>;
	collections: Array<Collection>;
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	images: Array<ProductImage>;
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	rating?: Maybe<Scalars["Float"]["output"]>;
	reviews: Array<Review>;
	slug: Scalars["String"]["output"];
};

export type ProductImage = {
	alt: Scalars["String"]["output"];
	height: Scalars["Int"]["output"];
	id: Scalars["ID"]["output"];
	url: Scalars["String"]["output"];
	width: Scalars["Int"]["output"];
};

export type ProductList = {
	data: Array<Product>;
	meta: ListMeta;
};

export enum ProductSortBy {
	Default = "DEFAULT",
	Name = "NAME",
	Price = "PRICE",
	Rating = "RATING",
}

export type Query = {
	cart?: Maybe<Cart>;
	categories: CategoryList;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	collections: CollectionList;
	order?: Maybe<Order>;
	orders: OrderList;
	product?: Maybe<Product>;
	products: ProductList;
};

export type QueryCartArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryCategoriesArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryCategoryArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCollectionArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCollectionsArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryOrderArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryOrdersArgs = {
	email: Scalars["String"]["input"];
	order?: SortDirection;
	orderBy?: OrderSortBy;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryProductArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryProductsArgs = {
	order?: SortDirection;
	orderBy?: ProductSortBy;
	search?: InputMaybe<Scalars["String"]["input"]>;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type Review = {
	author: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	product: Product;
	rating: Scalars["Float"]["output"];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ReviewList = {
	data: Array<Review>;
	meta: ListMeta;
};

export enum SortDirection {
	Asc = "ASC",
	Desc = "DESC",
}

export type CartAddProductMutationVariables = Exact<{
	cartId: Scalars["ID"]["input"];
	item: CartItemInput;
}>;

export type CartAddProductMutation = {
	cartAddItem: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				categories: Array<{ name: string; slug: string }>;
				collections: Array<{ name: string; slug: string }>;
				images: Array<{ url: string; alt: string; width: number; height: number }>;
			};
		}>;
	};
};

export type CartFindOrCreateMutationVariables = Exact<{
	id?: InputMaybe<Scalars["ID"]["input"]>;
	items: Array<CartItemInput> | CartItemInput;
}>;

export type CartFindOrCreateMutation = {
	cartFindOrCreate: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				categories: Array<{ name: string; slug: string }>;
				collections: Array<{ name: string; slug: string }>;
				images: Array<{ url: string; alt: string; width: number; height: number }>;
			};
		}>;
	};
};

export type CartGetByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type CartGetByIdQuery = {
	cart?: {
		id: string;
		items: Array<{
			quantity: number;
			product: {
				id: string;
				name: string;
				description: string;
				price: number;
				categories: Array<{ name: string; slug: string }>;
				collections: Array<{ name: string; slug: string }>;
				images: Array<{ url: string; alt: string; width: number; height: number }>;
			};
		}>;
	} | null;
};

export type CartListItemFragment = {
	id: string;
	items: Array<{
		quantity: number;
		product: {
			id: string;
			name: string;
			description: string;
			price: number;
			categories: Array<{ name: string; slug: string }>;
			collections: Array<{ name: string; slug: string }>;
			images: Array<{ url: string; alt: string; width: number; height: number }>;
		};
	}>;
};

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesGetListQuery = {
	categories: { data: Array<{ name: string; slug: string }> };
};

export type CategoriesGetProductsQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type CategoriesGetProductsQuery = {
	category?: {
		products: Array<{
			id: string;
			name: string;
			description: string;
			price: number;
			categories: Array<{ name: string; slug: string }>;
			collections: Array<{ name: string; slug: string }>;
			images: Array<{ url: string; alt: string; width: number; height: number }>;
		}>;
	} | null;
};

export type CategoriesListItemFragment = { name: string; slug: string };

export type CollectionListItemFragment = {
	id: string;
	name: string;
	slug: string;
	description: string;
	products: Array<{
		id: string;
		name: string;
		description: string;
		price: number;
		categories: Array<{ name: string; slug: string }>;
		collections: Array<{ name: string; slug: string }>;
		images: Array<{ url: string; alt: string; width: number; height: number }>;
	}>;
};

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never }>;

export type CollectionsGetListQuery = {
	collections: {
		data: Array<{
			id: string;
			name: string;
			slug: string;
			description: string;
			products: Array<{
				id: string;
				name: string;
				description: string;
				price: number;
				categories: Array<{ name: string; slug: string }>;
				collections: Array<{ name: string; slug: string }>;
				images: Array<{ url: string; alt: string; width: number; height: number }>;
			}>;
		}>;
	};
};

export type CollectionsGetProductsQueryVariables = Exact<{
	slug: Scalars["String"]["input"];
}>;

export type CollectionsGetProductsQuery = {
	collection?: {
		products: Array<{
			id: string;
			name: string;
			description: string;
			price: number;
			categories: Array<{ name: string; slug: string }>;
			collections: Array<{ name: string; slug: string }>;
			images: Array<{ url: string; alt: string; width: number; height: number }>;
		}>;
	} | null;
};

export type ProductGetByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ProductGetByIdQuery = {
	product?: {
		id: string;
		name: string;
		description: string;
		price: number;
		categories: Array<{ name: string; slug: string }>;
		collections: Array<{ name: string; slug: string }>;
		images: Array<{ url: string; alt: string; width: number; height: number }>;
	} | null;
};

export type ProductsGetListQueryVariables = Exact<{
	take?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type ProductsGetListQuery = {
	products: {
		data: Array<{
			id: string;
			name: string;
			description: string;
			price: number;
			categories: Array<{ name: string; slug: string }>;
			collections: Array<{ name: string; slug: string }>;
			images: Array<{ url: string; alt: string; width: number; height: number }>;
		}>;
		meta: { total: number };
	};
};

export type ProductListItemFragment = {
	id: string;
	name: string;
	description: string;
	price: number;
	categories: Array<{ name: string; slug: string }>;
	collections: Array<{ name: string; slug: string }>;
	images: Array<{ url: string; alt: string; width: number; height: number }>;
};

export type ProductsGetSuggestedQueryVariables = Exact<{
	take?: InputMaybe<Scalars["Int"]["input"]>;
	order?: InputMaybe<SortDirection>;
	orderBy?: InputMaybe<ProductSortBy>;
}>;

export type ProductsGetSuggestedQuery = {
	products: {
		data: Array<{
			id: string;
			name: string;
			description: string;
			price: number;
			categories: Array<{ name: string; slug: string }>;
			collections: Array<{ name: string; slug: string }>;
			images: Array<{ url: string; alt: string; width: number; height: number }>;
		}>;
	};
};

export type ProductsSearchListQueryVariables = Exact<{
	take?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	searchTerm: Scalars["String"]["input"];
}>;

export type ProductsSearchListQuery = {
	products: {
		data: Array<{
			id: string;
			name: string;
			description: string;
			price: number;
			categories: Array<{ name: string; slug: string }>;
			collections: Array<{ name: string; slug: string }>;
			images: Array<{ url: string; alt: string; width: number; height: number }>;
		}>;
		meta: { total: number };
	};
};

export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

	constructor(
		private value: string,
		public __meta__?: Record<string, any>,
	) {
		super(value);
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}
export const ProductListItemFragmentDoc = new TypedDocumentString(
	`
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}
    `,
	{ fragmentName: "ProductListItem" },
) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CartListItemFragmentDoc = new TypedDocumentString(
	`
    fragment CartListItem on Cart {
  id
  items {
    product {
      ...ProductListItem
    }
    quantity
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`,
	{ fragmentName: "CartListItem" },
) as unknown as TypedDocumentString<CartListItemFragment, unknown>;
export const CategoriesListItemFragmentDoc = new TypedDocumentString(
	`
    fragment CategoriesListItem on Category {
  name
  slug
}
    `,
	{ fragmentName: "CategoriesListItem" },
) as unknown as TypedDocumentString<CategoriesListItemFragment, unknown>;
export const CollectionListItemFragmentDoc = new TypedDocumentString(
	`
    fragment CollectionListItem on Collection {
  id
  name
  slug
  description
  products {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`,
	{ fragmentName: "CollectionListItem" },
) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($cartId: ID!, $item: CartItemInput!) {
  cartAddItem(id: $cartId, input: {item: $item}) {
    id
    ...CartListItem
  }
}
    fragment CartListItem on Cart {
  id
  items {
    product {
      ...ProductListItem
    }
    quantity
  }
}
fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID, $items: [CartItemInput!]!) {
  cartFindOrCreate(id: $id, input: {items: $items}) {
    ...CartListItem
  }
}
    fragment CartListItem on Cart {
  id
  items {
    product {
      ...ProductListItem
    }
    quantity
  }
}
fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    ...CartListItem
  }
}
    fragment CartListItem on Cart {
  id
  items {
    product {
      ...ProductListItem
    }
    quantity
  }
}
fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    data {
      ...CategoriesListItem
    }
  }
}
    fragment CategoriesListItem on Category {
  name
  slug
}`) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoriesGetProductsDocument = new TypedDocumentString(`
    query CategoriesGetProducts($slug: String!) {
  category(slug: $slug) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<
	CategoriesGetProductsQuery,
	CategoriesGetProductsQueryVariables
>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    data {
      ...CollectionListItem
    }
  }
}
    fragment CollectionListItem on Collection {
  id
  name
  slug
  description
  products {
    ...ProductListItem
  }
}
fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const CollectionsGetProductsDocument = new TypedDocumentString(`
    query CollectionsGetProducts($slug: String!) {
  collection(slug: $slug) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<
	CollectionsGetProductsQuery,
	CollectionsGetProductsQueryVariables
>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int) {
  products(take: $take, skip: $skip) {
    data {
      ...ProductListItem
    }
    meta {
      total
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetSuggestedDocument = new TypedDocumentString(`
    query ProductsGetSuggested($take: Int, $order: SortDirection, $orderBy: ProductSortBy) {
  products(take: $take, order: $order, orderBy: $orderBy) {
    data {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<
	ProductsGetSuggestedQuery,
	ProductsGetSuggestedQueryVariables
>;
export const ProductsSearchListDocument = new TypedDocumentString(`
    query ProductsSearchList($take: Int, $skip: Int, $searchTerm: String!) {
  products(take: $take, skip: $skip, search: $searchTerm) {
    data {
      ...ProductListItem
    }
    meta {
      total
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  categories {
    name
    slug
  }
  collections {
    name
    slug
  }
  images {
    url
    alt
    width
    height
  }
}`) as unknown as TypedDocumentString<ProductsSearchListQuery, ProductsSearchListQueryVariables>;
