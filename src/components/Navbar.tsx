"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { to: "/#product", label: "Product" },
  { to: "/#how-it-works", label: "How It Works" },
  { to: "/#use-cases", label: "Use Cases" },
  { to: "/docs", label: "Docs / API", disabled: true },
];

const Navbar = () => {
  const location = usePathname();
  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          backdropFilter: 'blur(18px)',
          background:
            'linear-gradient(to bottom, rgba(5,6,12,0.96), rgba(5,6,12,0.78), transparent)',
          borderBottom: '1px solid rgba(38,42,60,0.9)',
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0.7rem 1.25rem 0.55rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
            />
            <img src="/axis-trade-market.jpeg" className="h-16 w-16 rounded-full" alt="" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#e5f7ff',
                  fontWeight: 600,
                }}
              >
                Axis Trade Market – Market Intelligence™
              </span>
              <span style={{ fontSize: '0.75rem', color: '#a0a4c0' }}>
                Clean Data You Can Trust.
              </span>
            </div>
          </Link>

          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
              fontSize: '0.82rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.9rem',
                marginRight: '0.5rem',
              }}
            >
              {navItems.map((item) => (
                <Link href={item.to}>
                    <button
                  key={item.label}
                  disabled={item.disabled}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: item.disabled ? '#575b78' : '#d0d3ff',
                    cursor: item.disabled ? 'not-allowed' : 'pointer',
                    fontSize: '0.8rem',
                    padding: 0,
                    opacity: item.to === '/' && location.pathname === '/' ? 1 : 0.85,
                  }}
                >
                  {item.label}
                </button>
                </Link>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <Link href="/auth/login">
                <button className="btn btn-primary cursor-pointer" style={{ paddingInline: '1rem' }}>
                  Log In
                </button>
              </Link>
              <a href="#request-demo">
                <button className="btn btn-primary cursor-pointer" style={{ paddingInline: '1.2rem' }}>
                  Request Demo
                </button>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
