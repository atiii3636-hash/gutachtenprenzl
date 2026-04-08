const insurers = ["Allianz", "DEVK", "R+V", "HUK-Coburg", "AXA", "Zurich", "Generali"];

export default function TrustBand() {
  return (
    <div className="border-b border-gray-100 bg-white py-10">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-center text-[11px] font-bold uppercase tracking-[3px] text-gray-300 mb-7">
          Gutachten anerkannt von allen großen Versicherungen
        </p>
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
          {insurers.map((name) => (
            <span
              key={name}
              className="font-display font-black text-[15px] tracking-widest text-gray-200 hover:text-gray-400 transition-colors uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
