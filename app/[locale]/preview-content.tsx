'use client';

import { useEffect, useRef } from 'react';

interface PreviewContentProps {
  styleContent: string;
  bodyContent: string;
  scriptContents: string[];
}

export default function PreviewContent({ 
  styleContent, 
  bodyContent, 
  scriptContents 
}: PreviewContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptsExecuted = useRef(false);

  useEffect(() => {
    // 确保 DOM 已加载后再执行脚本
    if (scriptsExecuted.current) return;
    
    const executeScripts = () => {
      // 先执行所有脚本，确保全局函数被定义
      scriptContents.forEach((script) => {
        try {
          // 处理 DOMContentLoaded 的情况
          // 如果脚本中有 DOMContentLoaded，我们需要提取其内容并直接执行
          let scriptToExecute = script;
          
          // 匹配 DOMContentLoaded 事件监听器
          const domContentLoadedRegex = /document\.addEventListener\(['"]DOMContentLoaded['"],\s*function\(\)\s*\{([\s\S]*)\}\);/;
          const match = script.match(domContentLoadedRegex);
          
          if (match) {
            // 提取 DOMContentLoaded 回调中的内容
            scriptToExecute = match[1];
          }
          
          // 使用 Function 构造函数执行脚本，确保在全局作用域中执行
          // 这样函数会挂载到 window 对象上，onclick 处理器可以访问
          const executeScript = new Function(scriptToExecute);
          executeScript();
        } catch (error) {
          console.error('Script execution error:', error);
        }
      });
      
      // 等待脚本执行完成后再绑定事件
      setTimeout(() => {
        if (typeof window !== 'undefined' && containerRef.current) {
          // 绑定查看按钮事件
          const viewButtons = containerRef.current.querySelectorAll('.view-product');
          viewButtons.forEach((btn) => {
            // 直接绑定事件
            (btn as HTMLElement).addEventListener('click', (e: Event) => {
              e.preventDefault();
              const productId = (e.currentTarget as HTMLElement).getAttribute('data-product');
              if (productId) {
                // 确保 openProductModal 函数存在
                if ((window as any).openProductModal) {
                  (window as any).openProductModal(productId);
                } else {
                  console.error('openProductModal function not found. Product ID:', productId);
                }
              }
            });
          });

          // 点击模态框背景关闭
          const modal = containerRef.current.querySelector('#productModal');
          if (modal) {
            modal.addEventListener('click', (e: Event) => {
              // 使用 e.currentTarget 代替 this，避免 TypeScript 类型错误
              if (e.target === e.currentTarget && (window as any).closeProductModal) {
                (window as any).closeProductModal();
              }
            });
          }
        }
      }, 200); // 等待脚本执行完成
      
      scriptsExecuted.current = true;
    };

    // 等待内容渲染完成后再执行脚本
    const timer = setTimeout(() => {
      executeScripts();
    }, 500); // 增加延迟，确保 DOM 完全渲染

    return () => {
      clearTimeout(timer);
    };
  }, [scriptContents]);

  return (
    <>
      {/* 使用 style 标签确保样式优先级最高，覆盖任何全局样式 */}
      {/* 添加 !important 确保样式优先级，但更好的方法是确保样式在最后加载 */}
      <style 
        dangerouslySetInnerHTML={{ __html: styleContent }}
      />
      {/* 使用独立的容器，避免被全局样式影响 */}
      <div 
        ref={containerRef} 
        dangerouslySetInnerHTML={{ __html: bodyContent }}
        className="preview-container"
      />
    </>
  );
}
