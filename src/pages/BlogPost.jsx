import { Link, useParams } from "react-router-dom";
import { BLOGS, GYM } from "../data";
import { PageHero, FadeIn } from "../components/UI";
import { ChevronRight } from "lucide-react";

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOGS.find((b) => String(b.id) === String(id));

  if (!post) {
    return (
      <>
        <PageHero tag="Blog" title="NOT" highlight="FOUND" subtitle="This article does not exist." />
        <section className="bg-black py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/blog" className="text-yellow-400 text-sm uppercase tracking-widest font-bold hover:underline inline-flex items-center gap-1">
              Back to Blog <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero tag="Blog" title={post.category.toUpperCase()} highlight="" subtitle={post.title} />
      <section className="bg-black py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            </div>

            <div className="mt-8 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">{post.category}</span>
                <span className="text-white/30 text-xs">{post.date} · {post.readTime} read</span>
              </div>
              <h1 className="mt-3 text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {post.title}
              </h1>
              <p className="mt-5 text-white/55 text-base leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white/60 text-sm">
                  Want a plan personalized for your goal? Book a free trial and we’ll recommend the right training + schedule.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/contact" className="bg-yellow-400 text-black font-black uppercase text-xs tracking-widest px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
                    Book Free Trial
                  </Link>
                  <a
                    href={`https://wa.me/${GYM.whatsapp}?text=${encodeURIComponent(`Hi ${GYM.name}! I read "${post.title}" and want a plan for my goal.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/15 text-white/70 font-black uppercase text-xs tracking-widest px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/blog" className="text-yellow-400 text-sm uppercase tracking-widest font-bold hover:underline inline-flex items-center gap-1">
                Back to Blog <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

