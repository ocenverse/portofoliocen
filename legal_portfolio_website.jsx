export default function LegalPortfolioWebsite() {
  const navItems = [
    "Beranda",
    "Tentang",
    "Pendidikan",
    "Pengalaman",
    "Keahlian",
    "Portofolio",
    "Sertifikat",
    "Artikel",
    "Kontak",
  ];

  const skills = [
    "Legal Research",
    "Legal Writing",
    "Analisis Kasus",
    "Public Speaking",
    "Argumentasi Hukum",
    "Critical Thinking",
    "Negosiasi",
    "Penyusunan Dokumen",
  ];

  const portfolioItems = [
    {
      title: "Artikel Hukum Perdata",
      type: "Artikel",
      desc: "Analisis mengenai perlindungan hukum dalam perjanjian perdata dan implementasinya di Indonesia.",
    },
    {
      title: "Essay Hukum Tata Negara",
      type: "Essay",
      desc: "Kajian akademik mengenai dinamika konstitusi dan peran lembaga negara dalam sistem demokrasi.",
    },
    {
      title: "Penelitian Hukum Bisnis",
      type: "Penelitian",
      desc: "Telaah yuridis terhadap kepastian hukum dalam transaksi bisnis dan perkembangan regulasi modern.",
    },
    {
      title: "Opini Isu Hukum Kontemporer",
      type: "Opini",
      desc: "Pandangan kritis mengenai isu hukum terbaru dengan pendekatan argumentatif dan berbasis riset.",
    },
  ];

  const certificates = [
    "Seminar Nasional Hukum dan Keadilan",
    "Pelatihan Legal Drafting Dasar",
    "Workshop Public Legal Speaking",
    "Kompetisi Essay Hukum Tingkat Nasional",
  ];

  const experiences = [
    {
      title: "Organisasi Kampus",
      desc: "Aktif dalam organisasi kemahasiswaan untuk mengembangkan kepemimpinan, kerja tim, dan etika profesional.",
    },
    {
      title: "Kegiatan Akademik",
      desc: "Terlibat dalam forum diskusi, moot court, dan penulisan karya ilmiah bertema hukum.",
    },
    {
      title: "Seminar Hukum",
      desc: "Mengikuti seminar, kuliah umum, dan pelatihan terkait perkembangan hukum nasional dan internasional.",
    },
    {
      title: "Magang / Penelitian",
      desc: "Berpartisipasi dalam kegiatan riset atau pengalaman lapangan untuk memperluas wawasan praktik hukum.",
    },
  ];

  const blogPosts = [
    {
      title: "Urgensi Etika dalam Profesi Hukum",
      category: "Opini Hukum",
      desc: "Refleksi mengenai integritas, tanggung jawab, dan profesionalisme sebagai fondasi praktisi hukum masa depan.",
    },
    {
      title: "Analisis Kasus dalam Perspektif Hukum Pidana",
      category: "Analisis Kasus",
      desc: "Ulasan singkat mengenai pendekatan hukum pidana terhadap isu yang relevan dengan perkembangan sosial saat ini.",
    },
    {
      title: "Peran Mahasiswa Hukum di Era Digital",
      category: "Artikel",
      desc: "Pembahasan mengenai pentingnya riset, literasi digital, dan kontribusi intelektual mahasiswa hukum.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(212,175,55,0.0); }
          50% { box-shadow: 0 0 24px rgba(212,175,55,0.15); }
        }
        .animate-floatIn {
          animation: floatIn 0.8s ease-out both;
        }
        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }
        .gold-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #f3df9b 100%);
        }
        .navy-gradient {
          background: radial-gradient(circle at top left, rgba(212,175,55,0.12), transparent 30%), linear-gradient(135deg, #0f172a 0%, #15233b 45%, #1f2f4d 100%);
        }
        .section-title {
          position: relative;
        }
        .section-title::after {
          content: "";
          display: block;
          width: 84px;
          height: 3px;
          margin-top: 12px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #d4af37, #f3df9b);
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#beranda" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-white/5 text-lg shadow-lg shadow-black/20">
              ⚖️
            </div>
            <div>
              <p className="font-serif text-lg font-semibold tracking-wide">Portofolio Hukum</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Legal Professional Style</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item, idx) => {
              const ids = ["beranda", "tentang", "pendidikan", "pengalaman", "keahlian", "portofolio", "sertifikat", "artikel", "kontak"];
              return (
                <a
                  key={item}
                  href={`#${ids[idx]}`}
                  className="text-sm font-medium text-slate-200 transition hover:text-[#f3df9b]"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <a
            href="#kontak"
            className="rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-5 py-2 text-sm font-semibold text-[#f3df9b] transition hover:bg-[#d4af37] hover:text-slate-950"
          >
            Hubungi Saya
          </a>
        </div>
      </header>

      <main>
        <section id="beranda" className="navy-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div className="animate-floatIn">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-white/5 px-4 py-2 text-sm text-[#f3df9b] backdrop-blur">
                <span>📚</span>
                Mahasiswa S1 Ilmu Hukum
              </div>
              <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">
                Nama Lengkap Anda
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Future Legal Professional | Law Student | Legal Research Enthusiast
              </p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400">
                Portofolio pribadi dengan nuansa elegan, profesional, dan modern untuk menampilkan identitas, kompetensi, serta kontribusi akademik sebagai calon praktisi hukum.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#tentang"
                  className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#f3df9b]"
                >
                  Tentang Saya
                </a>
                <a
                  href="#kontak"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#d4af37]/60 hover:text-[#f3df9b]"
                >
                  Kontak
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["⚖️", "Fokus", "Etika & profesionalisme hukum"],
                  ["🏛️", "Minat", "Riset, analisis, dan advokasi"],
                  ["📘", "Visi", "Menjadi legal professional berintegritas"],
                ].map(([icon, title, text], index) => (
                  <div
                    key={title}
                    className={`animate-floatIn animate-delay-${Math.min(index + 1, 3)} rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl`}
                  >
                    <div className="text-2xl">{icon}</div>
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f3df9b]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-floatIn animate-delay-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#d4af37]/20 blur-3xl" />
                <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="rounded-[1.5rem] border border-[#d4af37]/25 bg-gradient-to-b from-slate-100 to-slate-200 p-4">
                    <div className="flex aspect-[4/5] items-center justify-center rounded-[1.25rem] border border-slate-300 bg-[linear-gradient(145deg,#ffffff,#dbe2ea)] text-center">
                      <div>
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#d4af37]/40 bg-white text-4xl shadow-lg">
                          👤
                        </div>
                        <p className="mt-5 font-serif text-2xl font-semibold text-slate-800">Foto Profil Profesional</p>
                        <p className="mt-2 px-8 text-sm leading-6 text-slate-600">
                          Ganti area ini dengan foto formal untuk menonjolkan citra profesional calon advokat atau praktisi hukum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-4 text-sm text-slate-300">
                    <span className="flex items-center gap-2"><span>📖</span> Legal Identity</span>
                    <span className="rounded-full bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold text-[#f3df9b]">Professional Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tentang" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a17c11]">Tentang Saya</p>
              <h2 className="section-title mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                Identitas akademik dengan visi hukum yang kuat.
              </h2>
              <p className="mt-8 text-base leading-8 text-slate-600">
                Saya adalah mahasiswa S1 Ilmu Hukum yang memiliki ketertarikan besar terhadap dinamika sistem hukum, penelitian legal, dan pengembangan argumentasi yang tajam serta berbasis analisis. Portofolio ini dirancang untuk merepresentasikan perjalanan akademik, minat keilmuan, serta orientasi profesional saya di bidang hukum.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Saya tertarik mendalami bidang <span className="font-semibold text-slate-900">hukum pidana, hukum perdata, hukum bisnis,</span> dan <span className="font-semibold text-slate-900">hukum tata negara</span>, dengan komitmen untuk terus belajar, berpikir kritis, dan menjunjung tinggi nilai keadilan, integritas, serta kepastian hukum.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                {
                  icon: "⚖️",
                  title: "Nilai Utama",
                  desc: "Integritas, objektivitas, etika profesi, dan tanggung jawab akademik sebagai fondasi perjalanan hukum.",
                },
                {
                  icon: "🏛️",
                  title: "Visi",
                  desc: "Menjadi calon praktisi hukum yang profesional, berpikir strategis, dan memberi kontribusi bagi penegakan hukum yang adil.",
                },
                {
                  icon: "📚",
                  title: "Fokus Pengembangan",
                  desc: "Riset hukum, penulisan legal, kemampuan analitis, dan komunikasi persuasif dalam forum akademik maupun profesional.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-[#f3df9b]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pendidikan" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f3df9b]">Pendidikan</p>
            <div className="mt-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="section-title font-serif text-3xl font-semibold md:text-4xl">Perjalanan akademik yang terarah.</h2>
                <p className="mt-8 max-w-xl text-base leading-8 text-slate-300">
                  Bagian ini menampilkan latar pendidikan formal, fokus studi, dan capaian akademik yang mendukung pengembangan kompetensi di bidang hukum.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    ["Universitas", "Nama Universitas"],
                    ["Program Studi", "Ilmu Hukum"],
                    ["Tahun Masuk", "20XX"],
                    ["Prestasi Akademik", "Beasiswa / IPK Unggul / Prestasi lainnya"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{label}</p>
                      <p className="mt-3 font-serif text-xl text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pengalaman" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a17c11]">Pengalaman</p>
          <h2 className="section-title mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
            Aktivitas yang membentuk kualitas profesional.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experiences.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.12)]"
                style={{ animationDelay: `${index * 100}ms`, animation: "floatIn 0.8s ease-out both" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-[#f3df9b]">⚖️</div>
                  <h3 className="font-serif text-2xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="keahlian" className="bg-gradient-to-b from-[#f4efe2] to-[#f8f8f6]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a17c11]">Keahlian</p>
            <h2 className="section-title mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              Kompetensi yang relevan untuk dunia hukum.
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="rounded-[1.5rem] border border-[#d4af37]/20 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#d4af37]/45 hover:shadow-lg"
                  style={{ animationDelay: `${index * 70}ms`, animation: "floatIn 0.8s ease-out both" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-[#f3df9b]">📘</div>
                    <p className="font-semibold text-slate-900">{skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portofolio" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a17c11]">Portofolio / Karya</p>
              <h2 className="section-title mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                Karya akademik dan pemikiran hukum.
              </h2>
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 shadow-sm">
              Siap diganti dengan karya asli Anda
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-2 hover:border-[#d4af37]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f3df9b]">
                    {item.type}
                  </span>
                  <span className="text-xl text-slate-400 transition group-hover:text-[#d4af37]">⚖️</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                <button className="mt-6 text-sm font-semibold text-[#8b6a10] transition hover:text-slate-950">
                  Lihat Detail →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="sertifikat" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f3df9b]">Sertifikat / Prestasi</p>
                <h2 className="section-title mt-3 font-serif text-3xl font-semibold md:text-4xl">
                  Rekam jejak pengembangan diri dan kompetensi.
                </h2>
                <p className="mt-8 max-w-xl text-base leading-8 text-slate-300">
                  Gunakan bagian ini untuk menunjukkan keseriusan Anda dalam memperkuat fondasi keilmuan, kemampuan praktis, dan pengalaman kompetitif di bidang hukum.
                </p>
              </div>

              <div className="grid gap-4">
                {certificates.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                    style={{ animationDelay: `${index * 90}ms`, animation: "floatIn 0.8s ease-out both" }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d4af37]/15 text-xl text-[#f3df9b]">
                      🏆
                    </div>
                    <div>
                      <p className="font-medium text-white">{item}</p>
                      <p className="mt-1 text-sm text-slate-400">Tambahkan tahun, penyelenggara, dan tingkat pencapaian.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="artikel" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a17c11]">Blog / Artikel Hukum</p>
          <h2 className="section-title mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
            Ruang gagasan, opini, dan analisis hukum.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(15,23,42,0.12)]"
              >
                <span className="rounded-full bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6a10]">
                  {post.category}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{post.desc}</p>
                <button className="mt-6 text-sm font-semibold text-slate-950">Baca selengkapnya →</button>
              </article>
            ))}
          </div>
        </section>

        <section id="kontak" className="bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f3df9b]">Kontak</p>
                <h2 className="section-title mt-3 font-serif text-3xl font-semibold md:text-4xl">
                  Mari terhubung secara profesional.
                </h2>
                <p className="mt-8 max-w-xl text-base leading-8 text-slate-300">
                  Bagian ini dapat digunakan oleh dosen, rekan akademik, organisasi, maupun mitra profesional untuk menghubungi Anda terkait kolaborasi, diskusi, penelitian, atau peluang pengembangan karier.
                </p>

                <div className="mt-10 grid gap-4">
                  {[
                    ["✉️", "Email", "nama@email.com"],
                    ["💼", "LinkedIn", "linkedin.com/in/username"],
                    ["📷", "Instagram Profesional", "@username.professional"],
                  ].map(([icon, title, value]) => (
                    <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/15 text-xl text-[#f3df9b]">{icon}</div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{title}</p>
                          <p className="mt-1 font-medium text-white">{value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37] text-slate-950">⚖️</div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white">Form Kontak</h3>
                    <p className="text-sm text-slate-400">Kirim pesan profesional Anda di sini.</p>
                  </div>
                </div>

                <form className="grid gap-4">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#d4af37]/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#d4af37]/50"
                  />
                  <input
                    type="text"
                    placeholder="Subjek"
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#d4af37]/50"
                  />
                  <textarea
                    rows={5}
                    placeholder="Tulis pesan Anda..."
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-[#d4af37]/50"
                  />
                  <button
                    type="button"
                    className="mt-2 rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#f3df9b]"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <p className="font-serif text-xl text-white">Portofolio Hukum Profesional</p>
            <p className="mt-3 max-w-2xl text-sm leading-7">
              Website portofolio pribadi dengan nuansa legal professional untuk menampilkan profil, karya, pengalaman, dan aspirasi sebagai calon advokat atau praktisi hukum masa depan.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm lg:items-end">
            <p>© 2026 Nama Lengkap Anda</p>
            <p className="text-slate-500">Designed with elegance, integrity, and legal professionalism.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
