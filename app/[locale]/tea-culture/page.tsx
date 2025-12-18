import { readFileSync } from 'fs';
import { join } from 'path';
import PreviewContent from '../preview-content';

export default function TeaCulturePage() {
  // 读取 tea-culture.html 文件内容
  const htmlContent = readFileSync(
    join(process.cwd(), 'public', 'tea-culture.html'),
    'utf-8'
  );

  // 提取 body 内容
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

  // 修复链接路径
  bodyContent = bodyContent
    .replace(/href="preview\.html"/g, 'href="/zh"')
    .replace(/href="impression-tongcheng\.html"/g, 'href="/zh/impression-tongcheng"')
    .replace(/src="\/images\//g, 'src="/images/')
    .replace(/image: "\/images\//g, 'image: "/images/');

  // 提取 head 中的 style 标签
  const styleMatch = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const styleContent = styleMatch ? styleMatch[1] : '';

  // 提取 script 标签内容
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

