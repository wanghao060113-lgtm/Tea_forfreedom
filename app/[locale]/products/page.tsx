import { getTranslations } from "next-intl/server";
import { ProductCard } from "@/components/products/product-card";
import { getAllProducts } from "@/data/products";
import { Filter, Grid3x3, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProductsPage() {
  const t = await getTranslations("products");
  const products = getAllProducts();

  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          {t("title")}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t("subtitle")}
        </p>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            {t("filters")}
          </Button>
          <span className="text-sm text-muted-foreground">
            {products.length} {t("productsFound")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Grid3x3 className="h-4 w-4" />
            <span className="sr-only">Grid view</span>
          </Button>
          <Button variant="outline" size="icon">
            <List className="h-4 w-4" />
            <span className="sr-only">List view</span>
          </Button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State (if no products) */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">{t("noProducts")}</p>
        </div>
      )}
    </div>
  );
}

