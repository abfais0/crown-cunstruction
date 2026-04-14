import { motion } from "motion/react";
import { cn } from "../lib/utils";

export default function Projects() {
  const projects = [
    {
      title: "Foundation Underpinning",
      location: "North York, ON",
      image: "https://www.groundworks.com/wp-content/uploads/sites/13/2021/08/piers-in-ground-cgi.jpg",
      size: "large"
    },
    {
      title: "Basement Waterproofing",
      location: "Etobicoke, ON",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      size: "small"
    },
    {
      title: "Custom Home Addition",
      location: "Scarborough, ON",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      size: "small"
    },
    {
      title: "Structural Concrete Pour",
      location: "Mississauga, ON",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
      size: "medium"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recent <span className="text-gold-500">Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md">
            Take a look at some of our recent work across the Greater Toronto Area. 
            We take pride in every foundation we strengthen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative rounded-3xl overflow-hidden border border-white/10",
                project.size === "large" ? "md:col-span-2 md:row-span-2" : "",
                project.size === "medium" ? "md:col-span-2" : ""
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">
                  {project.location}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="h-1 w-12 bg-gold-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
