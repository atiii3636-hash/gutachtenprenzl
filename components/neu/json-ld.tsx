// Plain <script>, bewusst kein next/script: next/script rendert JSON-LD nur in den
// React-Flight-Payload, nicht als echtes Tag ins HTML — Crawler sehen es dann nicht.
export default function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
