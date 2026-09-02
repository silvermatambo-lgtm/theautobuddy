import {Link} from 'react-router-dom';
import {MessageCircle,Upload,ClipboardCheck,LockKeyhole,CheckCircle2} from 'lucide-react';

export default function HeroSlider(){
  return <section className="relative overflow-hidden bg-[#04162f] autobuddy-grid">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(17,126,235,.38),transparent_33%),radial-gradient(circle_at_45%_105%,rgba(255,190,0,.12),transparent_30%)]"/>
    <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1800&q=90" alt="South African city automotive background" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"/>
    <div className="relative z-10 mx-auto grid min-h-[690px] max-w-[1600px] grid-cols-1 px-4 py-8 lg:grid-cols-[330px_1fr] lg:px-6">
      <aside className="relative z-20 hidden lg:block">
        <div className="sticky top-28">
          <img src="/images/logo.svg" alt="The Autobuddy" className="-ml-6 w-[390px] max-w-none drop-shadow-2xl"/>
          <div className="mt-2 rounded-r-[28px] bg-gradient-to-br from-[#07326b] to-[#0870dc] p-5 text-white shadow-2xl">
            <h2 className="autobuddy-title text-3xl text-[#f7b500]">Our Services</h2>
            <div className="mt-4 space-y-3 text-[15px] font-bold">
              {['Vehicle Inspection','Vehicle Evaluation','Trade Cover Price','Vehicle Sourcing','Negotiation Assistance'].map((x,i)=><div key={x} className="flex items-center gap-3 border-b border-white/15 pb-3"><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#31b4ff] bg-[#061a35] text-sm font-black text-white">{i+1}</span><span>{x}</span></div>)}
            </div>
          </div>
          <div className="relative -ml-16 mt-2 h-[235px] overflow-visible">
            <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=90" alt="Vehicle" className="hero-float h-[255px] w-[420px] rounded-[32px] object-cover object-center shadow-2xl ring-4 ring-[#0b75dd]/70"/>
          </div>
        </div>
      </aside>

      <div className="relative pl-0 lg:pl-5">
        <div className="flex min-h-[650px] flex-col justify-center">
          <div className="max-w-[950px]">
            <div className="mb-3 flex flex-wrap gap-6 text-sm font-black uppercase italic tracking-wider text-white/90"><span>Buy</span><span>Sell</span><span>Inspect</span><span>Value</span><span>Trade</span></div>
            <h1 className="autobuddy-title text-5xl leading-[.9] text-white sm:text-6xl md:text-7xl lg:text-[86px]">Making Vehicle<br/><span className="text-[#f7b500]">Buying Simple</span></h1>
            <p className="mt-5 max-w-2xl text-lg font-bold text-slate-200">We inspect. We value. We negotiate. You buy with confidence.</p>
            <div className="mt-5 flex flex-wrap gap-4 text-xs font-black uppercase tracking-widest text-white">{['Inspected','Valued','Verified'].map(x=><span key={x} className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><CheckCircle2 size={17} className="text-[#19d35b]"/>{x}</span>)}</div>
            <div className="mt-7 grid max-w-[880px] gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <a className="flex items-center justify-center gap-2 rounded-xl bg-[#13b84b] px-4 py-3 text-sm font-black uppercase text-white shadow-xl" href="https://wa.me/27824080680"><MessageCircle size={18}/> Chat on WhatsApp</a>
              <Link className="flex items-center justify-center gap-2 rounded-xl bg-[#f7b500] px-4 py-3 text-sm font-black uppercase text-[#061a35] shadow-xl" to="/catalogue"><LockKeyhole size={18}/> Trade Catalogue</Link>
              <Link className="flex items-center justify-center gap-2 rounded-xl bg-[#0870dc] px-4 py-3 text-sm font-black uppercase text-white shadow-xl" to="/upload-details"><Upload size={18}/> Upload Vehicle</Link>
              <Link className="flex items-center justify-center gap-2 rounded-xl bg-[#ff6a00] px-4 py-3 text-sm font-black uppercase text-white shadow-xl" to="/contact"><ClipboardCheck size={18}/> Request Inspection</Link>
            </div>
          </div>

          <div className="relative mt-7 hidden min-h-[250px] md:block">
            <div className="absolute right-0 top-0 h-[270px] w-[78%] overflow-hidden rounded-[34px] border-4 border-white/15 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1500&q=90" alt="Premium blue SUV" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-[#061a35]/55 via-transparent to-transparent"/>
            </div>
            <div className="absolute left-0 top-7 z-20 w-[43%] rounded-3xl bg-white p-4 text-[#061a35] shadow-2xl autobuddy-glow">
              <div className="grid grid-cols-2 gap-2 text-xs font-black sm:grid-cols-4">
                {['Toyota Hilux','BMW X3','VW Polo GTI','Ford Ranger'].map((x,i)=><div key={x} className="rounded-xl bg-[#eef7ff] p-3"><span className="mb-1 block text-[10px] text-green-600">AVAILABLE</span>{x}<span className="mt-1 block text-[#0870dc]">View Details</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
