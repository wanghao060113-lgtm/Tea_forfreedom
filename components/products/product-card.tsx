"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, MapPin } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border-ink/10">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name.zh}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <span className="text-ink/40">图片占位符</span>
          )}
        </div>
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-earth text-white px-3 py-1 rounded-full text-xs font-semibold z-20">
            特价
          </div>
        )}
        {/* 风土标签 */}
        {product.terroirTags && product.terroirTags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 z-20">
            {product.terroirTags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/90 backdrop-blur-sm border border-earth/30 text-earth px-2 py-1 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <CardHeader className="flex-1">
        <CardTitle className="text-lg font-display line-clamp-2 text-ink group-hover:text-primary transition-colors">
          {product.name.zh}
        </CardTitle>
        {/* 诗意短句 */}
        {product.poeticLine && (
          <p className="text-sm text-ink/60 italic mt-2 font-sans">
            {product.poeticLine}
          </p>
        )}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating)
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <MapPin className="h-3 w-3 text-muted-foreground" />
          <CardDescription className="text-xs">
            {product.origin}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-earth">
            ¥{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ¥{product.originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1 border-ink text-ink hover:bg-ink/5" asChild>
          <Link href={`/products/${product.slug}`}>
            <Eye className="h-4 w-4 mr-2" />
            查看
          </Link>
        </Button>
        <Button className="flex-1 bg-earth hover:bg-earth/90 text-white" asChild>
          <Link href={`/products/${product.slug}`}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            加入购物车
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

