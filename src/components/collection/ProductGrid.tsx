import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  category: string;
  images: string[];
  priceLabel: string;
  description: string;
  featured: boolean;
};

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center text-slate-500">
        No products found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
          <CardContent className="p-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                {product.category}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-slate-900">{product.name}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-6">
                <span className="font-medium text-slate-800">{product.priceLabel}</span>
                <a
                  href={`https://wa.me/919414817900?text=${encodeURIComponent(
                    `Hello, I would like to inquire about the ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "sm", className: "bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2" })}
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
