// Navigation handled by layout.tsx
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { LatestArticles } from "@/components/blog/LatestArticles";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BlogCTA } from "@/components/blog/BlogCTA";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-slate-500 font-sans">
      
      <main>
        <BlogHero />
        
        <div className="bg-slate-50/50 border-b border-slate-100">
          <FeaturedArticle />
        </div>
        
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main Content (Latest Articles) */}
            <div className="lg:w-[65%]">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
                Latest Articles
                <div className="h-px bg-slate-200 flex-1 ml-4"></div>
              </h2>
              <LatestArticles />
            </div>

            {/* Sidebar */}
            <div className="lg:w-[35%]">
              <div className="sticky top-32">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
        
        <BlogCTA />
      </main>
    </div>
  );
}
