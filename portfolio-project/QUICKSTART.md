# 🚀 Hızlı Başlangıç Rehberi

Bu rehber, portfolio web sayfanızı 5 dakika içinde çalıştırmaya yardımcı olacak!

## ⚡ Adım 1: Dosyaları Hazırlayın

Proje yapısı hazır olmalı:
```
portfolio-project/
├── index.html
├── css/style.css
├── js/script.js
├── data/projects.json
└── README.md
```

## 🖥️ Adım 2: Başlatın

### Seçenek A: Tarayıcıda Doğrudan Açın (En Basit)
`index.html` dosyasını çift-tıklayın ve tarayıcıda açılacak.

### Seçenek B: Python ile (Önerilen)
Terminal/Command Prompt'u açın ve şunu çalıştırın:

```powershell
# Proje dizinine gidin
cd path\to\portfolio-project

# Python sunucusunu başlatın
python -m http.server 8000
```

Tarayıcıda `http://localhost:8000` adresine gidin.

### Seçenek C: Node.js ile
```bash
# http-server yükleyin (bir defa)
npm install -g http-server

# Sunucuyu başlatın
http-server
```

### Seçenek D: Live Server (VS Code)
1. VS Code'da dosyaları açın
2. "Live Server" extension yükleyin
3. Sağ tık → "Open with Live Server"

## ✏️ Adım 3: Özelleştirin

### Adınızı Değiştirin
`index.html` dosyasında aşağıdaki satırı bulun:
```html
<h1 class="hero-title">Onur Azbar</h1>
```
Adınızla değiştirin:
```html
<h1 class="hero-title">Adınız</h1>
```

### Rengini Değiştirin
`css/style.css` dosyasında `:root` bölümünü düzenleyin:
```css
:root {
    --primary-color: #6366f1;      /* Bu rengi değiştirin */
    --secondary-color: #ec4899;    /* Ve bunu */
}
```

### Sosyal Medya Linklerini Güncelleyin
`index.html` dosyasında bulun:
```html
<a href="https://github.com" target="_blank">
```
Linklerinizle değiştirin:
```html
<a href="https://github.com/yourusername" target="_blank">
```

### Projelerinizi Ekleyin
`index.html` dosyasında "Projects Section" bölümüne git ve kartları ekleyin.

### Email Değiştirin
`index.html` dosyasında:
```html
<a href="mailto:onur@example.com">onur@example.com</a>
```
Kendi emailinizle değiştirin.

## 🎨 Adım 4: İnce Ayarlar

### Font Değiştirme
`index.html` `<head>` bölümünde:
```html
<link href="https://fonts.googleapis.com/css2?family=FONTNAME:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

### Şekil ve Boyut Değişiklikleri
`css/style.css` dosyasında CSS değişkenlerini düzenleyin

### Animasyonları Kapat
`css/style.css` dosyasında animasyon kodlarını yorum yapın

## 📱 Adım 5: Test Edin

1. **Responsive Tasarım Test**
   - F12 basın
   - Device Toolbar'ı açın
   - Farklı cihazları test edin

2. **Bağlantıları Test**
   - Tüm linkleri tıklayın
   - Form'u test edin
   - Sosyal medya linklerini kontrol edin

3. **Performans Test**
   - Lighthouse çalıştırın (Chrome DevTools)
   - Loading time kontrol edin

## 🌐 Adım 6: Dağıtın

### GitHub Pages (Ücretsiz)
1. GitHub'da yeni repository oluşturun: `yourusername.github.io`
2. Dosyaları push edin
3. `https://yourusername.github.io` adresinde canlı olacak

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### Netlify (Çok Kolay)
1. netlify.com'a gidin
2. Dosya klasörünü sürükleyip bırakın
3. Done! ✅

### Vercel
```bash
npm install -g vercel
vercel
```

## 🆘 Sık Sorulan Sorunlar

**S: Form çalışmıyor?**
C: Form şu anda yerel olarak çalışır. Canlı dağıtım için Formspree veya EmailJS kullanın.

**S: Resimler gösterilmiyor?**
C: Resim dosyalarını `images/` klasörüne ekleyin ve HTML'de yolu güncelleyin.

**S: CSS yüklenmemiyor?**
C: Cache temizleyin: `Ctrl+Shift+Delete`

**S: Responsive değil?**
C: Meta tag kontrol edin:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 📚 Sonraki Adımlar

- [ ] Kişisel bilgilerinizi ekleyin
- [ ] Projelerinizi ekleyin
- [ ] Resim dosyalarını ekleyin
- [ ] İletişim bilgileriniz güncellleyin
- [ ] SEO meta etiketlerini güncelleyin
- [ ] Git'e commit edin
- [ ] Dağıtın

## 💡 Tavsiyeler

1. **Yedek Alın**: Orijinal dosyaların bir kopyasını tutun
2. **Adım Adım Değiştirin**: Tek seferde birçok şey değiştirmeyin
3. **Test Edin**: Her değişiklikten sonra tarayıcıyı yenileyin
4. **Responsive Kontrol**: Mobil ve masaüstüde test edin
5. **SEO**: Title, description, keywords güncelleyin

## 📞 Yardım Almak

- README.md dosyasını okuyun
- CONTRIBUTING.md kontrol edin
- GitHub Issues açın
- Stack Overflow'da sorun sorun

---

**Hazır mısınız?** İlk dosyayı açın ve başlayın! 🎉

Başarılar! ✨

