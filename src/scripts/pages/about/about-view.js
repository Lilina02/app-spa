import "../../../styles/about.css";

export default class AboutView {
  getTemplate() {
    return `
      <!-- Hero Section -->
      <div class="about-hero section section-1">
        <div class="hero-background"></div>
        <div class="container">
          <div class="hero-content">
            <div class="hero-icon">📖</div>
            <h1 class="hero-title">Selamat Datang di CeritaMap</h1>
            <p class="hero-subtitle">Bagikan kisahmu dengan foto dan lokasi – dari manapun kamu berada.</p>
            <div class="hero-stats">
              <div class="stat-item"><span class="stat-number">∞</span><span class="stat-label">Cerita Dibagikan</span></div>
              <div class="stat-item"><span class="stat-number">🌍</span><span class="stat-label">Cakupan Dunia</span></div>
              <div class="stat-item"><span class="stat-number">📱</span><span class="stat-label">Siap di Mobile</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- What is Section -->
      <div class="about-section section section-2">
        <div class="container">
          <div class="section-content">
            <div class="section-icon">🚀</div>
            <h2>Apa Itu CeritaMap?</h2>
            <p class="section-description">
              CeritaMap adalah platform interaktif yang memungkinkan siapa saja untuk membagikan pengalaman dalam bentuk cerita singkat,
              lengkap dengan foto dan titik lokasi. Semua cerita akan ditampilkan dalam galeri visual dan peta digital.
            </p>
            <div class="feature-preview">
              <div class="preview-card"><div class="card-icon">📷</div><h4>Cerita Bergambar</h4><p>Ekspresikan kisah lewat foto</p></div>
              <div class="preview-card"><div class="card-icon">🗺️</div><h4>Berbasis Lokasi</h4><p>Setiap cerita memiliki titik lokasi nyata</p></div>
              <div class="preview-card"><div class="card-icon">👥</div><h4>Komunitas Aktif</h4><p>Terhubung dengan pengguna lain</p></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="about-section section section-3">
        <div class="container">
          <div class="section-content">
            <div class="section-icon">⭐</div>
            <h2>Fitur Utama & Tujuan Kami</h2>
            <div class="features-grid">
              <div class="feature-card"><div class="feature-icon">📝</div><h3>Tambahkan Cerita</h3><p>Unggah cerita dengan foto dan deskripsi menarik</p></div>
              <div class="feature-card"><div class="feature-icon">📍</div><h3>Peta Interaktif</h3><p>Lihat dan telusuri lokasi di mana cerita terjadi</p></div>
              <div class="feature-card"><div class="feature-icon">🗂️</div><h3>Jelajahi Cerita</h3><p>Temukan cerita dari berbagai daerah</p></div>
              <div class="feature-card"><div class="feature-icon">🔐</div><h3>Akun Pengguna</h3><p>Login untuk pengalaman yang lebih personal</p></div>
            </div>
            <div class="purpose-section">
              <div class="purpose-card">
                <h3>🎯 Tujuan Pengembangan</h3>
                <p>
                  Aplikasi ini dikembangkan sebagai bagian dari proyek akhir kelas <strong>Front-End Web Expert</strong> di Dicoding.
                  Tujuannya adalah memberikan cara baru untuk berbagi cerita secara visual dan geografis, dengan antarmuka yang ramah pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    const cards = document.querySelectorAll(".feature-card, .preview-card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }
}
