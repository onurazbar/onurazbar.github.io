# Onur Azbar - Portfolio Website

Uzay / havacılık temalı, modern ve responsive bir portfolio web sitesi.
Tasarım dili: **Orbital Command** — derin uzay arka planı, glassmorphism paneller
ve cyber-lime vurgular.

## 🎨 Özellikler

- 🛰️ **Uzay Teması**: Animasyonlu yıldız alanı, nebula bulutları ve HUD panelleri
- ✨ **Glassmorphism**: Buzlu cam yüzeyler, parlayan kenarlıklar
- 🌍 **Çoklu Dil Desteği**: Türkçe ve İngilizce
- 📱 **Responsive**: Tüm cihazlarda uyumlu
- ⚡ **Hızlı**: Build adımı yok, WebP görseller, CDN dışında bağımlılık yok
- ♿ **Erişilebilir**: `prefers-reduced-motion` desteği, klavye ile gezinme
- 💬 **İletişim Formu**: EmailJS ile terminal görünümlü form

## 📁 Dosya Yapısı

```
.
├── index.html          # Ana sayfa (tek sayfa, tüm bölümler)
├── css/
│   └── style.css       # Tüm stiller + tasarım token'ları
├── js/
│   ├── projects.js     # Proje verisi (tek kaynak) + kart üretimi
│   ├── i18n.js         # Dil desteği
│   └── script.js       # Yıldız alanı, navigasyon, animasyonlar, form
├── images/
│   ├── profile.webp    # Profil resmi
│   ├── space/          # Uzay görselleri (spacecraft, astronaut, satellite)
│   └── flags/          # Dil bayrakları
├── assets/
│   └── Onur_Azbar_CV.pdf
└── README.md
```

> **Not:** Script yükleme sırası önemlidir: `projects.js` → `i18n.js` → `script.js`

## 🚀 Kullanım

### Yerel Olarak Çalıştırma

```bash
git clone https://github.com/onurazbar/onurazbar.github.io.git
cd onurazbar.github.io
python -m http.server 8080
```

Ardından `http://localhost:8080` adresini açın.

### GitHub Pages

Bu proje otomatik olarak `https://onurazbar.github.io` adresinde yayınlanır.

## 🌐 Dil Desteği

Sağ üstteki `TR` / `EN` düğmeleriyle dil değiştirilir. Tercih tarayıcıda saklanır.

## 📝 Özelleştirme

### Yeni Proje Ekleme

Sadece **tek bir dosya** düzenlenir — `js/projects.js` içindeki `PROJECTS` dizisine
yeni bir nesne ekleyin:

```js
{
    id: 5,
    title: { tr: 'Proje Adı', en: 'Project Name' },
    description: { tr: 'Açıklama...', en: 'Description...' },
    tech: ['C++', 'SFML'],
    image: 'images/proje.webp',
    icon: 'fa-solid fa-rocket',
    url: 'https://github.com/onurazbar/Proje',
    status: 'ACTIVE'   // veya 'ARCHIVED'
}
```

Kart HTML'i ve her iki dildeki çeviriler otomatik üretilir.

### Metinleri Değiştirme

Görünen tüm metinler `js/i18n.js` içindeki `translations` nesnesinden gelir.
Yeni metin eklemek için: HTML'e `data-i18n="anahtar.yolu"` ekleyin ve anahtarı
**hem `tr` hem `en`** altına yazın.

### Renk ve Tasarım

`css/style.css` en üstündeki `:root` bloğundaki token'ları düzenleyin
(`--lime`, `--nebula`, `--void`, boşluk ve yarıçap değerleri).

### Profil Resmi

`images/profile.webp` dosyasını değiştirin (kare format, min. 600x600px önerilir).

## 🎯 Bölümler

- **Anasayfa (Mission Control)**: Yazı efektli giriş, HUD panelleri, uzay aracı
- **Hakkında (System Log)**: Zaman çizelgesi biçiminde kariyer kaydı
- **Projeler (Hangar)**: Tarama efektli proje kartları
- **Yetenekler (Avionics)**: Segmentli gösterge çubukları
- **İletişim (Secure Link)**: Terminal görünümlü iletişim formu

## 🛠️ Teknolojiler

- HTML5 / CSS3 / JavaScript (Vanilla — framework yok)
- Canvas 2D (yıldız alanı animasyonu)
- Font Awesome 6.4.0
- Google Fonts: JetBrains Mono + Inter
- EmailJS (iletişim formu)

## 📱 Responsive Breakpoints

- Desktop: 1025px+
- Tablet: 769px - 1024px
- Mobile: 481px - 768px
- Küçük mobil: < 480px

## 📄 Lisans

Bu proje MIT Lisansı altında yayınlanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

## 💬 İletişim

- **E-posta**: onurazbar@gmail.com
- **GitHub**: [@onurazbar](https://github.com/onurazbar)
- **LinkedIn**: [Onur Azbar](https://linkedin.com/in/onur-azbar/)

---

**Son Güncelleme**: 2026
