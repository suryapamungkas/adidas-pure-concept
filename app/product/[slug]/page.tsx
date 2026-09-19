import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/lib/products";
import { ProductDetailView } from "@/components/ProductDetailView";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan — Adidas Pure Concept",
    };
  }

  return {
    title: `${product.name} — Adidas Pure Concept`,
    description: `${product.name}. ${product.summary} ${product.heroSubheadline}`,
    openGraph: {
      title: `${product.name} — Adidas Pure Concept`,
      description: product.summary,
      images: [
        {
          url: product.heroImage,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
