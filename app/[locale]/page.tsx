import { readFileSync } from 'fs';
import { join } from 'path';
import PreviewContent from './preview-content';

export default function HomePage() {
  // 读取 preview.html 文件内容
  const htmlContent = readFileSync(
    join(process.cwd(), 'public', 'preview.html'),
    'utf-8'
  );

  // 提取 body 内容（去掉 <!DOCTYPE>, <html>, <head> 等标签）
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

  // 将相对路径转换为绝对路径（用于 Next.js 部署）
  // 先修复所有链接（包括在脚本字符串中的）
  bodyContent = bodyContent
    .replace(/impression-tongcheng\.html/g, '/impression-tongcheng.html')
    .replace(/tea-culture\.html/g, '/tea-culture.html')
    .replace(/src="\/images\//g, 'src="/images/') // 确保图片路径正确
    .replace(/image: "\/images\//g, 'image: "/images/'); // 修复脚本中的图片路径

  // 提取 head 中的 style 标签
  const styleMatch = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const styleContent = styleMatch ? styleMatch[1] : '';

  // 提取 script 标签内容（可能有多个，使用非贪婪匹配）
  const scriptMatches = htmlContent.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
  const scriptContents = scriptMatches ? scriptMatches.map(match => {
    const contentMatch = match.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
    return contentMatch ? contentMatch[1] : '';
  }).filter(script => script.trim().length > 0) : [];

  return (
    <PreviewContent 
      styleContent={styleContent}
      bodyContent={bodyContent}
      scriptContents={scriptContents}
    />
  );
}
