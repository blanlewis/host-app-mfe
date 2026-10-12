
import Link from "next/link";

const navigationItems = [
  { label: "Dashboard", href: "/", icon: "🏠" },
  { label: "Bookings", href: "/bookings", icon: "📦" },
  { label: "Fleet", href: "/fleet", icon: "🚚" },
  { label: "Reports", href: "/reports", icon: "📊" },
];

export default function CustomSidebar() {
  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        padding: "24px 16px",
        backgroundColor: "#10243A",
        color: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "32px" }}>Lewis TMS</h2>

      <nav>
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              padding: "12px",
              marginBottom: "8px",
              color: "#FFFFFF",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}