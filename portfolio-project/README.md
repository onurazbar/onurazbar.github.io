# Statik Portfolio Web Sayfası

Modern ve responsive tasarıma sahip, tamamen statik bir portfolio web sayfası projesidir. HTML5, CSS3 ve Vanilla JavaScript kullanarak geliştirilmiştir.

## 🌟 Özellikler

- **Responsive Tasarım**: Tüm cihazlarda (mobil, tablet, masaüstü) mükemmel görünüm
- **Modern UI/UX**: Gradient, animasyon ve smooth scroll efektleri
- **Hızlı Yükleme**: Statik HTML, CSS ve JS - sunucu gereksinimi yok
- **SEO Uyumlu**: Semantik HTML ve meta etiketleri
- **Erişilebilir**: WAI-ARIA standartlarına uygun
- **Dark Mode Hazır**: Kolayca dark mode eklenebilir

## 📁 Proje Yapısı

```
portfolio-project/
├── index.html           # Ana HTML dosyası
├── css/
│   └── style.css       # Tüm CSS stileri
├── js/
│   └── script.js       # Interaktif JavaScript
└── README.md           # Bu dosya
```

## 🚀 Özellikler Detaylı

### Bölümler

1. **Navigation Bar**
   - Fixed navbar dengan responsive hamburger menü
   - Smooth scroll navlinklerine
   - Active link highlight

2. **Hero Section**
   - Büyük başlık ve CTA butonları
   - Sosyal medya linkleri
   - Animasyonlu background şekilleri

3. **About Section**
   - Kişisel bilgi
   - İstatistikler (sayı animasyonlu)
   - Responsive grid layout

4. **Projects Section**
   - 6 örnek proje kartı
   - Teknoloji etiketleri
   - Demo ve kaynak kod linkleri
   - Hover efektleri

5. **Skills Section**
   - Kategoriye ayrılmış yetenekler
   - Animasyonlu progress barlar
   - Frontend, Backend, Tools başlıkları

6. **Contact Section**
   - İletişim bilgileri
   - Çalışan contact form
   - Form validasyonu

7. **Footer**
   - Telif hakkı bilgisi
   - Sosyal medya linkleri

## 🎨 Renk Şeması

```
Primary Color: #6366f1 (İndigo)
Secondary Color: #ec4899 (Pink)
Dark Background: #0f172a
Light Background: #f8fafc
Text Dark: #1e293b
Text Light: #64748b
```

## 💻 Teknik Detaylar

### Kullanılan Teknolojiler

- **HTML5**: Semantik yapı
- **CSS3**: Grid, Flexbox, Animations
- **JavaScript (Vanilla)**: 
  - DOM manipulation
  - Event handling
  - Form validation
  - Intersection Observer API
  - Smooth scrolling

### Harici Kütüphaneler

- **Font Awesome 6.4.0**: İkonlar (CDN)
- **Google Fonts**: Poppins font (CDN)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px ve üstü
- **Tablet**: 768px - 1024px
- **Mobil**: 480px - 768px
- **Küçük Mobil**: 480px ve altı

## 🔧 Kurulum ve Kullanım

### Basit Kurulum

1. Dosyaları indirin veya klonlayın:
```bash
git clone https://github.com/yourusername/portfolio-project.git
cd portfolio-project
```

2. `index.html`'yi tarayıcıda açın:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Web Sunucusu ile Çalıştırma (Önerilir)

**Python 3 ile:**
```bash
python -m http.server 8000
# http://localhost:8000 adresine gidin
```

**Python 2 ile:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server) ile:**
```bash
npm install -g http-server
http-server
```

**PHP ile:**
```bash
php -S localhost:8000
```

## 🎯 Özelleştirme Rehberi

### İçeriği Değiştirme

1. **index.html** dosyasını açın
2. Aşağıdaki alanları değiştirin:
   - Adınız ve unvanınız (Hero section)
   - Hakkında metni (About section)
   - Projeleriniz (Projects section)
   - Yetenekleriniz (Skills section)
   - İletişim bilgileriniz (Contact section)

### Renkler Değiştirme

**style.css** dosyasında `:root` CSS değişkenlerini değiştirin:

```css
:root {
    --primary-color: #6366f1;      /* Ana renk */
    --secondary-color: #ec4899;    /* İkinci renk */
    /* ... diğer renkler ... */
}
```

### Sosyal Medya Linkleri

**index.html** dosyasında sosyal medya linklerini güncelleyin:

```html
<a href="https://github.com/yourusername" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

### Font Değiştirme

**index.html** `<head>` bölümünde Google Fonts linkini değiştirin veya **style.css** 'de `font-family` özelliğini güncelleyin.

## 📊 Performans Optimizasyonları

- ✅ CSS Grid ve Flexbox kullanımı
- ✅ Hardware-accelerated CSS animations
- ✅ Lazy loading hazırlığı
- ✅ Minimal external dependencies
- ✅ Responsive görüntüler

## 🌐 Dağıtım Seçenekleri

### GitHub Pages

1. Repository'yi GitHub'a yükleyin
2. Settings → Pages → Source olarak `main` branch seçin
3. URL'niz otomatik oluşturulacak

### Netlify

```bash
# Netlify CLI ile
npm install -g netlify-cli
netlify deploy
```

Veya drag-and-drop ile:
- netlify.com 'e gidin
- Dizini drag-and-drop edin

### Vercel

```bash
npm install -g vercel
vercel
```

### Geleneksel Web Hosting

Tüm dosyaları sunucunuza FTP ile yükleyin.

## 🐛 Sorun Giderme

### Stil uygulanmıyor?
- Tarayıcı cache'ını temizleyin (Ctrl+Shift+Delete)
- CSS dosya yolunu kontrol edin

### JavaScript çalışmıyor?
- Tarayıcı konsolu hatasını kontrol edin (F12)
- Script tag'ının doğru konumda olduğunu verify edin

### Form çalışmıyor?
- Contact form şu anda yerel olarak test edilir (backend gerekli)
- Netlify Forms veya Formspree gibi servisler kullanabilirsiniz

## 📈 İleri Özellikleri Ekleme

### Email İntegrasyonu
Formspree, EmailJS veya benzer servisleri kullanın:

```javascript
// EmailJS örneği
emailjs.send('service_id', 'template_id', {
    from_name: name,
    from_email: email,
    message: message
});
```

### Dinamik İçerik
JSON dosyalarından veri yükleyin:

```javascript
fetch('data/projects.json')
    .then(res => res.json())
    .then(data => renderProjects(data));
```

### Blog Ekleme
Static site generator (Hugo, Jekyll, 11ty) kullanın

## 📄 Lisans

Bu proje MIT Lisansı altında sunulmaktadır. Detaylar için LICENSE dosyasına bakın.

## 👤 Yazar

**Onur Azbar**
- GitHub: [onurazbar](https://github.com/onurazbar)
- LinkedIn: [onurazbar](https://linkedin.com/in/onurazbar)
- Website: [onurazbar.dev](https://onurazbar.dev)

## 🤝 Katkıda Bulunma

Geliştirmeler ve hata raporları için pull request gönderebilirsiniz!

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/improvement`)
3. Değişiklikleri commit edin (`git commit -am 'Add improvement'`)
4. Branch'e push edin (`git push origin feature/improvement`)
5. Pull Request açın

## 📞 Destek

Sorularınız varsa:
- Email: onur@example.com
- Issues: GitHub Issues sekmesini kullanın
- Twitter: [@onurazbar](https://twitter.com/onurazbar)

## 🔮 Gelecek Özellikler

- [ ] Dark mode toggle
- [ ] Blog bölümü
- [ ] Dosya indirmeler (CV, portföy PDF)
- [ ] Daha fazla animasyon
- [ ] Sertifikatlar bölümü
- [ ] Müşteri yorumları
- [ ] Newsletter signup

---

**Yapım Tarihi:** 15 Şubat 2026

Bu projeyi beğendiyseniz ⭐ verin!

