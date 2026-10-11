
const modules = [
  {
    title: "Bookings",
    description: "View and manage transport bookings.",
    href: "/bookings",
    icon: "📦",
    color: "#2563eb",
  },
  {
    title: "Fleet",
    description: "Monitor vehicles, drivers and availability.",
    href: "/fleet",
    icon: "🚚",
    color: "#059669",
  },
  {
    title: "Reports",
    description: "Explore operational statistics and trends.",
    href: "/reports",
    icon: "📊",
    color: "#7c3aed",
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundColor: "#f8fafc",
        color: "#1e293b",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ marginBottom: "36px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Lewis TMS Dashboard
        </h1>

        <p style={{ color: "#64748b", fontSize: "16px" }}>
          Manage your transport operations from one place.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {modules.map((module) => (
          <article
            key={module.href}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
            }}
          >
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>
              {module.icon}
            </div>

            <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
              {module.title}
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.6,
                minHeight: "50px",
              }}
            >
              {module.description}
            </p>

            <a
              href={module.href}
              style={{
                display: "inline-block",
                marginTop: "12px",
                padding: "10px 16px",
                backgroundColor: module.color,
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: 600,
              }}
            >
              Open {module.title} →
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}