export default function Loading() {
  return (
    <main className="min-h-screen bg-app-gradient">
      <div className="mx-auto w-[min(1120px,92vw)] pt-28">
        <div className="h-[72vh] rounded-3xl border border-white/60 bg-white/45 p-8 shadow-soft backdrop-blur">
          <div className="h-8 w-52 rounded-lg bg-slate-200/80" />
          <div className="mt-6 h-14 max-w-3xl rounded-lg bg-slate-200/80" />
          <div className="mt-3 h-14 max-w-2xl rounded-lg bg-slate-200/80" />
          <div className="mt-8 h-12 w-44 rounded-xl bg-slate-200/80" />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-40 rounded-2xl bg-slate-200/75" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
