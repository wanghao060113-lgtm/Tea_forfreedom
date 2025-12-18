import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getAllProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, MapPin, Star, ChevronRight, Home } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/products/product-card";

interface ProductDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const t = await getTranslations("productDetail");

  if (!product) {
    notFound();
  }

  const relatedProducts = getAllProducts()
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          <Home className="h-4 w-4" />
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/products" className="hover:text-foreground">
          {t("breadcrumb.products")}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name.zh}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            {product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name.zh}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Image Placeholder
              </div>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer hover:opacity-75 transition-opacity"
                >
                  <Image
                    src={image}
                    alt={`${product.name.zh} ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12.5vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-ink">
              {product.name.zh}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} {t("reviews")})
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{product.origin}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-earth">
                ¥{product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ¥{product.originalPrice}
                  </span>
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    省¥{product.originalPrice - product.price}
                  </span>
                </>
              )}
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                {t("addToCart")}
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                {t("buyNow")}
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">
                {t("stockStatus")}:{" "}
                <span
                  className={
                    product.inStock
                      ? "text-primary font-semibold"
                      : "text-destructive font-semibold"
                  }
                >
                  {product.inStock ? t("inStock") : t("outOfStock")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">{t("tabs.description")}</TabsTrigger>
            <TabsTrigger value="brewing">{t("tabs.brewing")}</TabsTrigger>
            <TabsTrigger value="origin">{t("tabs.origin")}</TabsTrigger>
            <TabsTrigger value="reviews">{t("tabs.reviews")}</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("tabs.description")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description.zh}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="brewing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("tabs.brewing")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("brewingGuide")}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="origin" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("tabs.origin")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("originStory")}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("tabs.reviews")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("reviewsPlaceholder")}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-3xl font-bold mb-8">
            {t("relatedProducts")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

