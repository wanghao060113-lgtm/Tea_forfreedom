"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">
              茶叙入海
            </h3>
            <p className="text-sm text-muted-foreground">
              Authentic Tongcheng Xiaohua Tea
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("contact")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@tongchengtea.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Tongcheng, Anhui, China</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{t("newsletter")}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get updates on new products and tea culture.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1"
              />
              <Button type="submit">{t("subscribe")}</Button>
            </form>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              {t("copyright")}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{t("paymentMethods")}:</span>
              <div className="flex space-x-2">
                {/* Payment icons would go here */}
                <span className="text-xs">Stripe</span>
                <span className="text-xs">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

