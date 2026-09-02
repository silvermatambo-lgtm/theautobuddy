import {Link} from 'react-router-dom';
import {Search,ClipboardCheck,Handshake,Car,ShieldCheck,BarChart3,Upload,FileText,LockKeyhole,MessageCircle} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import {services,vehicles} from '../data/site';

const process=[
  [Search,'Find It','Search or source your ideal vehicle.'],
  [ClipboardCheck,'Check It','Professional inspection & evaluation.'],
  [Handshake,'Negotiate It','We assist with pricing and offers.'],
  [Car,'Buy It','Purchase with greater confidence.']
];

export default function Home(){return <div className="page-enter bg-white">
  <HeroSlider/>

  <section className="bg-[#061a35] py-4 text-white">
    <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 px-5 text-center text-xs font-black md:grid-cols-5">
      {['Independent & Trusted','Detailed Reports','Fair & Accurate Valuations','Better Deals','Professional Support'].map(x=><div key={x}>✓ {x}</div>)}
    </div>
  </section>

  <section className="py-14">
    <div className="mx-auto max-w-[1500px] px-5">
      <div className="grid gap-5 lg:grid-cols-[.72fr_2.28fr]">
        <aside className="rounded-[2rem] bg-[#0870dc] p-6 text-white shadow-xl">
          <h2 className="text-3xl font-black uppercase italic text-[#f7b500]">Our Services</h2>
          <div className="mt-5 space-y-4">{services.slice(0,5).map(([t,d],i)=><div key={t} className="flex gap-3 border-b border-white/15 pb-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#0870dc] font-black">{i+1}</div><div><h3 className="font-black">{t}</h3><p className="text-sm text-blue-50">{d}</p></div></div>)}</div>
        </aside>

        <div className="rounded-[2rem] border border-blue-100 bg-[#f7fbff] p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span className="section-tag">Trade Catalogue</span><h2 className="section-title">Browse Our Trade Catalogue</h2><p className="mt-2 text-sm text-slate-500">Exclusive access for approved dealers.</p></div><Link to="/catalogue" className="btn-blue"><LockKeyhole size={16}/> Open Catalogue</Link></div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{vehicles.map(v=><article key={v.id} className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm"><div className="relative"><img src={v.image} alt={`${v.make} ${v.model}`} className="h-40 w-full object-cover"/><span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-black text-white ${v.status==='Sold'?'bg-red-500':'bg-green-500'}`}>{v.status.toUpperCase()}</span></div><div className="p-4"><h3 className="font-black text-[#061a35]">{v.make} {v.model}</h3><p className="mt-1 text-xs text-slate-500">{v.year} • {v.mileage.toLocaleString()} km • {v.fuel}</p><p className="mt-3 text-xl font-black text-[#0870dc]">R{v.price.toLocaleString()}</p><Link to="/catalogue" className="mt-3 block rounded-lg bg-[#0870dc] py-2 text-center text-xs font-black text-white">View Details</Link></div></article>)}</div>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-[#eef7ff] py-14">
    <div className="mx-auto max-w-[1500px] px-5">
      <div className="text-center"><span className="section-tag">How It Works</span><h2 className="section-title">Find It. Check It. Negotiate It. Buy It.</h2></div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">{process.map(([I,t,d]:any,i)=><div key={t} className="rounded-2xl border-2 border-[#0870dc] bg-white p-5 text-center shadow-sm"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#0870dc] text-white"><I size={23}/></div><div className="mt-3 text-xs font-black text-[#f7b500]">STEP {i+1}</div><h3 className="text-xl font-black text-[#061a35]">{t}</h3><p className="mt-1 text-sm text-slate-600">{d}</p></div>)}</div>
    </div>
  </section>

  <section className="py-14">
    <div className="mx-auto grid max-w-[1500px] gap-6 px-5 lg:grid-cols-[1.25fr_.75fr]">
      <div className="rounded-[2rem] border bg-white p-6 shadow-md">
        <div className="flex items-center gap-3"><FileText className="text-red-500"/><h2 className="text-2xl font-black text-[#061a35]">Vehicle Inspection Report</h2></div>
        <div className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">{['Mechanical Condition','Exterior Condition','Interior Condition','Suspension','Tyres','Brakes','Electrical Systems','Road Test Results','Overall Rating'].map(x=><div key={x} className="flex items-center gap-2 text-sm font-semibold"><span className="text-green-500">●</span>{x}</div>)}</div>
        <Link to="/reports" className="btn-blue mt-6">Download / View Report</Link>
      </div>
      <div className="rounded-[2rem] bg-[#061a35] p-6 text-white shadow-md">
        <BarChart3 className="text-[#f7b500]"/>
        <h2 className="mt-3 text-2xl font-black">Trade Offer Management</h2>
        <p className="mt-2 text-sm text-slate-300">Submit dealer offers, track accepted/declined status and communicate through WhatsApp.</p>
        <div className="mt-5 grid gap-2 text-sm"><div className="rounded-xl bg-white/10 p-3">Toyota Hilux • <b className="text-green-400">ACCEPTED</b></div><div className="rounded-xl bg-white/10 p-3">BMW X3 • <b className="text-yellow-400">PENDING</b></div><div className="rounded-xl bg-white/10 p-3">Ford Ranger • <b className="text-red-400">DECLINED</b></div></div>
        <Link to="/dealer-login" className="btn-yellow mt-5">Dealer / Admin Login</Link>
      </div>
    </div>
  </section>

  <section className="bg-[#061a35] py-8 text-white">
    <div className="mx-auto grid max-w-[1500px] gap-4 px-5 md:grid-cols-4">
      <a href="tel:+27824080680" className="rounded-2xl bg-white/5 p-4 text-center"><b>Call / WhatsApp</b><div className="mt-1 text-xl font-black">+27 82 408 0680</div></a>
      <a href="mailto:info@theautobuddy.co.za" className="rounded-2xl bg-white/5 p-4 text-center"><b>Email</b><div className="mt-1 text-sm">info@theautobuddy.co.za</div></a>
      <div className="rounded-2xl bg-white/5 p-4 text-center"><b>Website</b><div className="mt-1 text-sm">www.theautobuddy.co.za</div></div>
      <a href="https://wa.me/27824080680" className="rounded-2xl bg-green-500 p-4 text-center font-black"><MessageCircle className="mx-auto"/> Chat on WhatsApp</a>
    </div>
  </section>
</div>}
