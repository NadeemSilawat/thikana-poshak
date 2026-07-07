import Link from "next/link";
import { ProductGrid } from "@/components/collection/ProductGrid";
import productsData from "@/data/products.json";

export default function CollectionPage() {
  const categories = [
    { name: "All", slug: "all" },
    { name: "Poshak", slug: "poshak" },
    { name: "Suits", slug: "suit" },
    { name: "Sarees", slug: "saree" },
    { name: "Kurtis", slug: "kurti" },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-slate-900">
            Our Collection
          </h1>
          <p className="text-lg text-slate-600">
            Explore our wide range of traditional and festive wear. From heavy bridal poshak to elegant daily wear kurtis.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug === "all" ? "/collection" : `/collection/${cat.slug}`}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${
                cat.slug === "all"
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-white border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <ProductGrid products={productsData} />
      </div>
    </div>
  );
}
