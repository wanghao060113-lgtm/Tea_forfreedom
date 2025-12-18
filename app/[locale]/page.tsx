import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Sparkles, Shield } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/products/product-card";
import { getFeaturedProducts } from "@/data/products";

export default async function HomePage() {
  const t = await getTranslations("home");
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section - 茶园山水意境 */}
      <section className="relative h-[700px] md:h-[800px] flex items-center justify-center overflow-hidden">
        {/* 背景图片占位 - 茶园山水 + 古籍文字叠加效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-ink/10">
          <div className="absolute inset-0 bg-[url('/images/tea-garden-hero.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          {/* 古籍文字叠加效果 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="font-display text-9xl text-ink/20 select-none">茶</div>
          </div>
        </div>
        <div className="container relative z-10 text-center px-4">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-ink/80 mb-10 font-sans">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-earth hover:bg-earth/90 text-white" asChild>
              <Link href="/products">{t("hero.shopNow")}</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-ink text-ink hover:bg-ink/5" asChild>
              <Link href="/culture">{t("hero.learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("value.direct.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("value.direct.description")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("value.ai.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("value.ai.description")}</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("value.trust.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("value.trust.description")}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products - 不对称网格布局 */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-ink">
              {t("featured.title")}
            </h2>
            <p className="text-ink/70 text-lg">
              发现我们精选的正宗桐城小花茶系列
            </p>
          </div>
          {/* 不对称网格：第一行2个，第二行3个 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.slice(0, 2).map((product) => (
              <div key={product.id} className="md:col-span-1">
                <ProductCard product={product} />
              </div>
            ))}
            {featuredProducts.slice(2, 5).map((product) => (
              <div key={product.id} className="md:col-span-1">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-ink text-ink hover:bg-ink/5" asChild>
              <Link href="/products">{t("featured.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Showcase */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-muted rounded-lg"></div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                {t("culture.title")}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {t("culture.description")}
              </p>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            {t("testimonials.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-accent">★</span>
                    ))}
                  </div>
                  <CardDescription>
                    "The most authentic Chinese tea I've ever tasted. The quality is exceptional!"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">- Customer Review</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <Button size="lg" variant="secondary" asChild className="mt-6">
            <Link href="/products">{t("cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

