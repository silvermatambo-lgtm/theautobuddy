import {Link,NavLink} from 'react-router-dom';
import {Menu,X,LockKeyhole,Phone,Mail} from 'lucide-react';
import {useState} from 'react';

const nav=[['Home','/'],['About Us','/about'],['Services','/services'],['How It Works','/how-it-works'],['Catalogue','/catalogue'],['Reports','/reports'],['Upload','/upload-details'],['Testimonials','/testimonials'],['Contact','/contact']];

export default function Navbar(){
  const[open,setOpen]=useState(false);
  return <>
    <div className="bg-[#061a35] text-white text-xs">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-2">
        <div className="flex items-center gap-5"><span className="flex items-center gap-2"><Phone size={13}/> +27 82 408 0680</span><span className="hidden sm:flex items-center gap-2"><Mail size={13}/> info@theautobuddy.co.za</span></div>
        <Link to="/dealer-login" className="flex items-center gap-1 font-bold"><LockKeyhole size={13}/> Dealer Login</Link>
      </div>
    </div>
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/98 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[86px] max-w-[1500px] items-center justify-between px-5">
        <Link to="/" className="shrink-0"><img src="/images/logo.svg" alt="The Autobuddy" className="h-[64px] w-auto"/></Link>
        <nav className="hidden xl:flex items-center gap-6">
          {nav.map(([n,p])=><NavLink key={p} to={p} className={({isActive})=>`relative py-8 text-[12px] font-black uppercase tracking-wide transition ${isActive?'text-[#0870dc] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#0870dc]':'text-[#10233f] hover:text-[#0870dc]'}`}>{n}</NavLink>)}
          <Link to="/dealer-login" className="rounded-xl bg-[#0870dc] px-4 py-2.5 text-xs font-black text-white">Dealer Login</Link>
        </nav>
        <button aria-label="Menu" className="xl:hidden text-[#061a35]" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open&&<div className="grid gap-3 border-t bg-white p-5 xl:hidden">{nav.map(([n,p])=><Link onClick={()=>setOpen(false)} key={p} to={p} className="rounded-lg px-3 py-2 font-bold hover:bg-blue-50">{n}</Link>)}</div>}
    </header>
  </>
}
