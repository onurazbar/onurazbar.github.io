# Katkıda Bulunma Rehberi

Proje hakkında iyileştirme önerileri göndermek için bu rehberi takip edin!

## 🤝 Nasıl Katkıda Bulunabilim?

### 1. Repository'yi Fork Edin
GitHub web arayüzünde "Fork" butonuna tıklayın.

### 2. Local'e Klonlayın
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-project.git
cd portfolio-project
```

### 3. Feature Branch Oluşturun
```bash
git checkout -b feature/your-feature-name
```

### 4. Değişiklikleri Yapın
- Kodunuzu yazın
- Testlerinizi yapın
- Tarzı tutarlı tutun

### 5. Commit Edin
```bash
git add .
git commit -m "Add: Açıklayıcı mesaj"
```

Commit mesajı konvansiyonları:
- `feat:` - Yeni özellik
- `fix:` - Hata düzeltmesi
- `docs:` - Dokümantasyon
- `style:` - Kod stili (formatting, vb.)
- `refactor:` - Kod refaktörü
- `test:` - Test ekleme
- `chore:` - Build, dependencies, vb.

### 6. Push Edin
```bash
git push origin feature/your-feature-name
```

### 7. Pull Request Açın
GitHub'da karşılaştırma sayfası açılacak. Değişiklikleri açıklayan bir PR yazın.

## 📋 Katkı Türleri

### 🐛 Hata Bildirme
Issues sekmesinde yeni issue açın ve şunları belirtin:
- Hata açıklaması
- Adımları (nasıl tekrarlanır)
- Beklenen vs gerçek sonuç
- Tarayıcı/cihaz bilgisi

### 💡 Özellik Önerisi
Discussions sekmesinde veya issue olarak:
- Özellik açıklaması
- Neden faydalı olur
- Olası uygulama yaklaşımları

### 📚 Dokümantasyon
README.md veya yeni doc dosyaları için:
- Açık ve basit yazın
- Türkçe veya İngilizce (tutarlı)
- Örnekler ekleyin

### 🎨 Tasarım İyileştirmeleri
CSS/UI değişiklikleri için:
- Önce issue açın
- Tasarım açıklaması
- Responsive mu?

## ✅ Kontrol Listesi

Pull Request göndermeden önce:

- [ ] Kodu test ettim
- [ ] Responsive tasarımı kontrol ettim (mobil, tablet, masaüstü)
- [ ] Kodumda linting hatası yok
- [ ] Commit mesajları açık
- [ ] Dokümantasyon güncel
- [ ] Yapılanmayan dosyaları eklemedim (.git, node_modules, vb.)

## 🎯 Kod Standartları

### HTML
```html
<!-- Semantik HTML5 kullanın -->
<section id="projects">
    <h2>Başlık</h2>
    <p>Açıklama</p>
</section>
```

### CSS
```css
/* BEM (Block Element Modifier) Nomenclature kullanın */
.project-card { }
.project-card__title { }
.project-card--featured { }

/* CSS Variables kullanın */
color: var(--primary-color);
```

### JavaScript
```javascript
// Vanilla JS, temiz ve comment ekli kod
function handleClick(event) {
    // Açıklamalar ekleyin
    event.preventDefault();
}

// const/let kullanın, var değil
const element = document.getElementById('id');
```

## 📖 Stil Rehberi

- **İsimlendirme**: camelCase (JavaScript), kebab-case (CSS)
- **Satır Uzunluğu**: 80-100 karakter (okunabilirlik)
- **İndent**: 4 boşluk veya 1 tab
- **Semcolons**: JavaScript'te zorunlu
- **Quotes**: Tırnak işareti tutarlı (tek veya çift)

## 🚀 Ufak İyileştirmeler

Aşağıdaki konularda PR göndermeden önce issue açmanıza gerek yok:

- Yazım hataları
- Kırık linkler
- README güncellemeleri
- Yorum/dokümantasyon

## 🙏 Davranış Kuralları

Bu toplulukta:

- ✅ Saygılı ve yapıcı ol
- ✅ Farklı görüşlere açık ol
- ✅ Herkese karşı kibar ol
- ❌ Taciz, nefret, ayrımcılık tolere edilmez
- ❌ Spam veya kötü amaçlı içerik göndermek yasak

## 📞 İletişim

- GitHub Issues: Teknik sorunlar
- GitHub Discussions: Sorular, fikirler
- Email: onur@example.com

## 📝 Lisans

Katkıda bulunduğunuzda, kodunuzun MIT Lisansı altında kullanılabileceğini kabul etmiş olursunuz.

---

**Teşekkür ederiz!** 🎉

Projeyi geliştirmemize yardımcı olmak için zaman ayırdığınız için teşekkür ederiz. Her katkı önemlidir!

