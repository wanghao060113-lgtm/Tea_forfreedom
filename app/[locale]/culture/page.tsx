import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mountain, Users, History } from "lucide-react";

export default async function CulturePage() {
  const t = await getTranslations("nav");

  // 模拟文化内容数据
  const cultureArticles = [
    {
      id: "1",
      title: "桐城派：清代文坛的璀璨明珠",
      description: "探索桐城派的历史渊源、代表人物及其对中国文学的影响",
      category: "历史",
      image: "/images/culture/tongcheng-school.jpg",
    },
    {
      id: "2",
      title: "龙眠山：茶与文脉的交融之地",
      description: "了解龙眠山的自然风光、人文地理与茶文化的深厚联系",
      category: "地理",
      image: "/images/culture/longmian-mountain.jpg",
    },
    {
      id: "3",
      title: "从文脉到茶香：桐城小花的传承",
      description: "追溯桐城小花茶从传统到现代的发展历程",
      category: "传承",
      image: "/images/culture/tea-heritage.jpg",
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      {/* 页面标题 */}
      <div className="text-center mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink mb-6">
          文都桐城
        </h1>
        <p className="text-xl text-ink/70 max-w-2xl mx-auto">
          探索桐城文脉与桐城小花茶的深厚文化底蕴
        </p>
      </div>

      {/* 快速导航卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <History className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">桐城派历史</CardTitle>
          </CardHeader>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mountain className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">龙眠山风光</CardTitle>
          </CardHeader>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">名人故事</CardTitle>
          </CardHeader>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">古籍文献</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* 文化文章列表 */}
      <div className="space-y-8">
        <h2 className="font-display text-3xl font-bold text-ink mb-8">精选文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultureArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-earth/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  图片占位符
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-ink text-ink hover:bg-ink/5" asChild>
                  <Link href={`/culture/${article.id}`}>阅读全文</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 时间轴占位区域 */}
      <div className="mt-20">
        <h2 className="font-display text-3xl font-bold text-ink mb-12 text-center">桐城派发展历程</h2>
        <div className="relative">
          {/* 时间轴组件将在此处实现 */}
          <div className="text-center py-12 bg-secondary/30 rounded-lg">
            <p className="text-ink/60">时间轴组件开发中...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

