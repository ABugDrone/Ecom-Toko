import Layout from "@/components/Layout";
import { Calendar, User, ArrowRight, BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import companiesHeroImg from "@/assets/companies-hero.jpg";

const blogPosts = [
  { 
    title: "The Future of Digital Education in Africa", 
    category: "Education", 
    date: "March 15, 2026", 
    author: "Toko Team",
    excerpt: "Exploring how technology is transforming education across the African continent and the role of digital platforms in skill development.",
    readTime: "5 min read",
    color: "text-primary" 
  },
  { 
    title: "Building Fintech Solutions for Emerging Markets", 
    category: "Fintech", 
    date: "March 10, 2026", 
    author: "TokoPay Team",
    excerpt: "How chat-based payment systems are revolutionizing financial inclusion in developing economies.",
    readTime: "7 min read",
    color: "text-accent" 
  },
  { 
    title: "E-commerce Trends Shaping African Markets", 
    category: "Commerce", 
    date: "March 5, 2026", 
    author: "Riba Africa",
    excerpt: "Understanding the unique challenges and opportunities in African e-commerce and how platforms are adapting.",
    readTime: "6 min read",
    color: "text-primary" 
  },
  { 
    title: "The Rise of Short-Form Content in Digital Marketing", 
    category: "Media", 
    date: "February 28, 2026", 
    author: "Bloom Shorts",
    excerpt: "How short-form video content is changing the way brands connect with audiences in the digital age.",
    readTime: "4 min read",
    color: "text-accent" 
  },
  { 
    title: "Automation Tools for Small Business Growth", 
    category: "SaaS", 
    date: "February 20, 2026", 
    author: "Toko Technologies",
    excerpt: "Practical automation strategies that help small businesses scale efficiently without breaking the bank.",
    readTime: "8 min read",
    color: "text-primary" 
  },
  { 
    title: "Tech Skills That Will Define the Next Decade", 
    category: "Technology", 
    date: "February 15, 2026", 
    author: "Toko Academy",
    excerpt: "A comprehensive look at the most in-demand technical skills and how to prepare for the future job market.",
    readTime: "10 min read",
    color: "text-accent" 
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={companiesHeroImg} alt="Toko ecosystem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="section-badge">Blog</span>
          <h1 className="section-heading mt-6 max-w-3xl">Insights & Updates</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
            Stay updated with the latest trends, insights, and developments from the Toko ecosystem.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="glass-card p-8 hover-lift flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className={`${post.color}`} size={20} />
                <span className="text-xs uppercase tracking-widest text-primary">{post.category}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{post.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
