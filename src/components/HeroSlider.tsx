import {Link} from 'react-router-dom';
import {MessageCircle,Upload,ClipboardCheck,LockKeyhole,CheckCircle2} from 'lucide-react';

export default function HeroSlider(){
  return <section className="relative min-h-[610px] overflow-hidden bg-[#061a35]">
    <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1800&q=90" alt="Blue performance vehicle" className="absolute inset-0 h-full w-full object-cover object-center"/>
    <div className="absolute inset-0 bg-gradient-to-r from-[#061a35] via-[#061a35]/88 to-[#061a35]/20"/>
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#061a35] to-transparent"/>
    <div className="relative z-10 mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-8 px-5 py-14 lg:grid-cols-[1.02fr_.98fr]">
      <div className="text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black tracking-[.16em]">THE AUTOBUDDY • YOUR FRIEND IN THE MOTOR INDUSTRY</div>
        <h1 className="mt-6 text-5xl font-black uppercase italic leading-[.9] tracking-tight md:text-7xl">Making Vehicle<br/><span className="text-[#f7b500]">Buying Simple</span></h1>
        <p className="mt-5 max-w-xl text-lg font-medium text-slate-200">Professional vehicle sourcing, inspections, valuations and trade support you can trust.</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-black uppercase">
          {['Inspected','Valued','Verified'].map(x=><span key={x} className="flex items-center gap-1.5"><CheckCircle2 size={17} className="text-[#33c766]"/>{x}</span>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-xl bg-[#16b84e] px-5 py-3 font-black text-white shadow-lg" href="https://wa.me/27824080680"><MessageCircle size={18}/> Chat on WhatsApp</a>
          <Link className="inline-flex items-center gap-2 rounded-xl bg-[#f7b500] px-5 py-3 font-black text-[#061a35] shadow-lg" to="/catalogue"><LockKeyhole size={18}/> Vehicle Catalogue – Trade Only</Link>
          <Link className="inline-flex items-center gap-2 rounded-xl bg-[#0870dc] px-5 py-3 font-black text-white shadow-lg" to="/upload-details"><Upload size={18}/> Upload Vehicle Details</Link>
          <Link className="inline-flex items-center gap-2 rounded-xl bg-[#ff6a00] px-5 py-3 font-black text-white shadow-lg" to="/contact"><ClipboardCheck size={18}/> Request Inspection</Link>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
          <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1300&q=90" alt="Premium blue SUV" className="h-[390px] w-full rounded-[1.5rem] object-cover"/>
        </div>
      </div>
    </div>
  </section>
}
