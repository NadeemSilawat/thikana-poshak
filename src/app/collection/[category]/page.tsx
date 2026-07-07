import Link from "next/link";
import { ProductGrid } from "@/components/collection/ProductGrid";
import productsData from "@/data/products.json";
import { notFound } from "next/navigation";

// For static site generation
export function generateStaticParams() {
  return [
    { category: "poshak" },
    { category: "suit" },
    { category: "saree" },
    { category: "kurti" },
  ];
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const params = await props.params;
  const categories = [
    { name: "All", slug: "all" },
    { name: "Poshak", slug: "poshak" },
    { name: "Suits", slug: "suit" },
    { name: "Sarees", slug: "saree" },
    { name: "Kurtis", slug: "kurti" },
  ];

  const currentCategory = categories.find((c) => c.slug === params.category);

  if (!currentCategory && params.category !== "all") {
    notFound();
  }

  const filteredProducts = productsData.filter((p) => p.category === params.category);

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900 capitalize">
            {currentCategory?.name || "Collection"}
          </h1>
          <p className="text-lg text-slate-600">
            Explore our exclusive collection of {currentCategory?.name.toLowerCase()}.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug === "all" ? "/collection" : `/collection/${cat.slug}`}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${
                cat.slug === params.category
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-white border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
