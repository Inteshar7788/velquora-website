export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Velquora Technologies",

    url: "https://velquora.com",

    logo: "https://velquora.com/logo.png",

    description:
      "Velquora Technologies builds premium websites, web applications, UI/UX solutions and digital products.",

    email: "velquoratechnologies@gmail.com",

    telephone: "+91-XXXXXXXXXX",

    sameAs: [
      "https://linkedin.com/company/velquora-technologies",
      "https://github.com/Inteshar7788"
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}