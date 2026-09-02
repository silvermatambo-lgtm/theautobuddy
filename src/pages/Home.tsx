import {Link} from 'react-router-dom';
import {Search,ClipboardCheck,Handshake,Car,FileText,LockKeyhole,MessageCircle,Upload,Camera,ShieldCheck} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import {vehicles} from '../data/site';

const serviceRows=[
 ['Vehicle Inspection','Pre-purchase inspections'],['Vehicle Evaluation','Market-related valuations'],['Trade Cover Price','Dealer trade value guidance'],['Vehicle Sourcing','Find the right vehicle'],['Negotiation Assistance','Secure the best deal']
];
const process=[[Search,'Find It','Search or source your vehicle'],[ClipboardCheck,'Check It','Inspection & evaluation'],[Handshake,'Negotiate It','We assist with pricing & offers'],[Car,'Buy It','Purchase with confidence']];

export default function Home(){return <div className="page-enter bg-[#eaf5ff]">
  <HeroSlider/>

  <section className="relative z-20 -mt-2 bg-white py-5 shadow-lg">
    <div className="mx-auto grid max-w-[1560px] grid-cols-2 gap-2 px-4 text-center sm:grid-cols-3 lg:grid-cols-5">
      {serviceRows.map(([t,d],i)=><div key={t} className="rounded-xl border border-blue-100 bg-white px-3 py-4"><div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-[#0870dc] text-xs font-black text-white">{i+1}</div><h3 className="text-sm font-black uppercase text-[#061a35]">{t}</h3><p className="text-xs text-slate-500">{d}</p></div>)}
    </div>
  </section>

  <section className="py-8">
    <div className="mx-auto grid max-w-[1560px] gap-5 px-4 xl:grid-cols-[1.4fr_.6fr]">
      <div className="rounded-[28px] bg-white p-4 shadow-xl autobuddy-glow">
        <div className="flex flex-col justify-between gap-4 border-b border-blue-100 pb-4 sm:flex-row sm:items-end"><div><span className="section-tag">Trade Catalogue • Dealers Only</span><h2 className="autobuddy-title text-4xl text-[#061a35]">Browse Our Trade Catalogue</h2><p className="text-sm text-slate-500">Exclusive access for approved dealers.</p></div><Link to="/catalogue" className="btn-yellow"><LockKeyhole size={16}/> Dealer Catalogue</Link></div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{vehicles.map(v=><article key={v.id} className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm"><div className="relative"><img src={v.image} alt={`${v.make} ${v.model}`} className="h-36 w-full object-cover"/><span className={`absolute left-2 top-2 rounded-md px-2 py-1 text-[9px] font-black text-white ${v.status==='Sold'?'bg-red-500':'bg-green-500'}`}>{v.status.toUpperCase()}</span></div><div className="p-3"><h3 className="font-black text-[#061a35]">{v.make} {v.model}</h3><p className="text-[11px] text-slate-500">{v.year} • {v.mileage.toLocaleString()} km • {v.fuel}</p><p className="mt-2 text-lg font-black text-[#0870dc]">R{v.price.toLocaleString()}</p><Link to="/catalogue" className="mt-2 block rounded-md bg-[#0870dc] py-2 text-center text-[10px] font-black uppercase text-white">View Details</Link></div></article>)}</div>
      </div>

      <div className="autobuddy-panel rounded-[28px] p-5 text-white shadow-xl">
        <span className="text-xs font-black uppercase tracking-widest text-[#f7b500]">Trade Offer Management</span>
        <h2 className="autobuddy-title mt-1 text-3xl">Live Offer Workflow</h2>
        <div className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-xl bg-white/10 p-3"><span>Toyota Hilux • R620,000</span><b className="rounded-md bg-green-500 px-2 py-1 text-[10px]">ACCEPTED</b></div>
          <div className="flex items-center justify-between rounded-xl bg-white/10 p-3"><span>BMW X3 • R560,000</span><b className="rounded-md bg-yellow-400 px-2 py-1 text-[10px] text-[#061a35]">PENDING</b></div>
          <div className="flex items-center justify-between rounded-xl bg-white/10 p-3"><span>VW Polo GTI • R300,000</span><b className="rounded-md bg-red-500 px-2 py-1 text-[10px]">DECLINED</b></div>
        </div>
        <Link to="/dealer-login" className="btn-blue mt-5 w-full">View All Offers</Link>
      </div>
    </div>
  </section>

  <section className="pb-8">
    <div className="mx-auto grid max-w-[1560px] gap-5 px-4 lg:grid-cols-[.85fr_1.15fr]">
      <div className="rounded-[28px] bg-white p-5 shadow-lg">
        <span className="section-tag">How It Works</span><h2 className="autobuddy-title mt-1 text-4xl text-[#061a35]">Simple Steps To Your Next Vehicle</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">{process.map(([I,t,d]:any,i)=><div key={t} className="rounded-xl border-2 border-[#0870dc] bg-[#f5fbff] p-4 text-center"><div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#0870dc] text-white"><I size={19}/></div><span className="mt-2 block text-[10px] font-black text-[#f0a900]">STEP {i+1}</span><h3 className="font-black uppercase text-[#061a35]">{t}</h3><p className="text-[11px] text-slate-500">{d}</p></div>)}</div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-[28px] bg-white p-5 shadow-lg"><div className="flex items-center gap-2"><Upload className="text-[#0870dc]"/><h2 className="autobuddy-title text-2xl text-[#061a35]">Upload Vehicle Details</h2></div><div className="mt-4 grid grid-cols-2 gap-2 text-xs">{['Make','Model','Year','VIN','Mileage','Fuel Type','Transmission','Colour','Budget','Purchase Price','Service History','Notes'].map(x=><div className="rounded-md border bg-slate-50 px-3 py-2 text-slate-500" key={x}>{x}</div>)}</div><Link to="/upload-details" className="btn-blue mt-4 w-full">Submit Details</Link></div>
        <div className="rounded-[28px] bg-white p-5 shadow-lg"><div className="flex items-center gap-2"><Camera className="text-[#0870dc]"/><h2 className="autobuddy-title text-2xl text-[#061a35]">Upload Vehicle Pictures</h2></div><div className="mt-4 grid grid-cols-3 gap-2">{['Front','Rear','Side','Interior','Engine','Dashboard'].map(x=><div key={x} className="grid h-20 place-items-center rounded-lg border-2 border-dashed border-blue-200 bg-blue-50 text-[10px] font-bold text-[#0870dc]">{x}</div>)}</div><Link to="/upload-pictures" className="btn-blue mt-4 w-full">Upload Pictures</Link></div>
      </div>
    </div>
  </section>

  <section className="pb-8">
    <div className="mx-auto grid max-w-[1560px] gap-5 px-4 lg:grid-cols-[1.2fr_.8fr]">
      <div className="rounded-[28px] bg-white p-5 shadow-lg"><div className="flex items-center gap-3"><FileText className="text-red-500"/><div><span className="section-tag">Vehicle Inspection Report</span><h2 className="autobuddy-title text-3xl text-[#061a35]">Professional Downloadable Reports</h2></div></div><div className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">{['Mechanical Condition','Exterior Condition','Interior Condition','Suspension','Tyres','Brakes','Electrical Systems','Road Test Results','Overall Rating'].map(x=><div key={x} className="flex items-center gap-2 font-bold"><span className="text-green-500">●</span>{x}</div>)}</div><Link to="/reports" className="btn-blue mt-5"><FileText size={16}/> Download Report</Link></div>
      <div className="autobuddy-panel rounded-[28px] p-5 text-white shadow-lg"><ShieldCheck className="text-[#f7b500]"/><h2 className="autobuddy-title mt-2 text-3xl">Why Choose The Autobuddy?</h2><div className="mt-4 grid grid-cols-2 gap-3 text-xs font-bold"><span>✓ Independent & Trusted</span><span>✓ Detailed Reports</span><span>✓ Fair Valuations</span><span>✓ Better Deals</span><span>✓ Professional Support</span><span>✓ Nationwide Service</span></div></div>
    </div>
  </section>

  <section className="bg-[#061a35] py-6 text-white">
    <div className="mx-auto grid max-w-[1560px] gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4">
      <a href="tel:+27824080680" className="rounded-xl border border-white/10 bg-white/5 p-4"><b className="text-[#f7b500]">CALL / WHATSAPP</b><div className="mt-1 text-xl font-black">+27 82 408 0680</div></a>
      <a href="mailto:info@theautobuddy.co.za" className="rounded-xl border border-white/10 bg-white/5 p-4"><b className="text-[#f7b500]">EMAIL</b><div className="mt-1 text-sm">info@theautobuddy.co.za</div></a>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4"><b className="text-[#f7b500]">VISIT OUR WEBSITE</b><div className="mt-1 text-sm">www.theautobuddy.co.za</div></div>
      <a href="https://wa.me/27824080680" className="flex items-center justify-center gap-2 rounded-xl bg-green-500 p-4 font-black uppercase"><MessageCircle/> Chat on WhatsApp</a>
    </div>
  </section>
</div>}
