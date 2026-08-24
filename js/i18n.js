// i18n Configuration - Dil Desteği / Language support
//
// Adding translatable text takes two steps:
//   1. put data-i18n="dot.path" (or data-i18n-placeholder) on the element
//   2. add the key under BOTH `tr` and `en` below
//
// Project titles/descriptions are the exception: they live in js/projects.js
// and are folded into `translations[lang].projects` by mergeProjectTranslations()
// at the bottom of this file.

const translations = {
    tr: {
        nav: {
            home: 'Anasayfa',
            about: 'Hakkında',
            projects: 'Projeler',
            skills: 'Yetenekler',
            contact: 'İletişim'
        },
        hud: {
            systemOnline: 'SİSTEM AKTİF',
            experience: 'DENEYİM',
            experienceNote: 'yıl saha görevi',
            activeModules: 'AKTİF MODÜLLER'
        },
        hero: {
            subtitle: 'Yazılım Mühendisi',
            bio: 'Bulut servisleri ve büyük veri sistemleri üzerine çalışıyorum. Havacılık mühendisliğinin hassasiyetini modern yazılım mimarisiyle birleştiriyorum.',
            viewProjects: 'Projelerimi Gör',
            contact: 'Bana Ulaş',
            downloadCv: 'CV İndir',
            // Cycled by the hero typewriter effect
            typewriter: [
                'SİSTEM BAŞLATILIYOR...',
                'MODÜLLER YÜKLENİYOR...',
                'TELEMETRİ BAĞLANDI...',
                'GÖREVE HAZIR.'
            ]
        },
        about: {
            title: 'Hakkında',
            lead: 'Havacılık disiplinini yazılım mimarisine taşıyan bir kariyer kaydı.',
            badge: 'YAZILIM MÜHENDİSİ',
            text1: 'Merhaba! Ben Onur Azbar, 10 yılı aşkın süredir farklı alanlarda güvenilir ve ölçeklenebilir sistemler geliştiren bir yazılım mühendisiyim.',
            text2: 'Şu anda büyük veri sistemleri için bulut servisleri üzerinde çalışıyorum. Bu süreçte sistem mimarisi tasarımı, performans iyileştirme, dağıtık sistemlerin güvenilirliğini artırma ve modern veri altyapılarına katkı sağlama konularına odaklanıyorum.',
            text3: 'Kariyerimin önceki dönemlerinde backend geliştirme deneyimi edindim ve uzun süre gömülü yazılım alanında çalıştım. Bu geçmişim, sistem seviyesinde düşünme, performans optimizasyonu ve kaynak verimli tasarım konularında güçlü bir bakış açısı kazanmamı sağladı. Bugün hâlâ yazılım geliştirirken bu yaklaşım benim için önemli bir temel oluşturuyor.',
            text4: 'Karmaşık teknik problemleri çözmekten, ölçeklenebilir mimariler tasarlamaktan ve yeni teknolojiler öğrenmekten keyif alıyorum. Temiz tasarımı, pratik çözümleri ve sürdürülebilir yazılım geliştirme anlayışını önemsiyorum.'
        },
        projects: {
            title: 'Projeler',
            code: 'Kaynak Kod'
        },
        skills: {
            title: 'Yetenekler',
            programming: 'Programlama Dilleri',
            tools: 'Araçlar & Teknolojiler'
        },
        contact: {
            title: 'İletişim',
            heading: 'Benimle İletişime Geçin',
            description: 'Bir proje hakkında konuşmak veya soru sormak ister misiniz? Aşağıdaki kanallardan bana ulaşabilirsiniz.',
            email: 'Email',
            address: 'Adres',
            city: 'İzmir, Türkiye',
            serverStatus: 'SUNUCU DURUMU',
            uplink: 'Bağlantı',
            latency: 'Gecikme',
            encryption: 'Şifreleme',
            form: {
                name: 'Adınız',
                email: 'Email Adresiniz',
                subject: 'Konu',
                message: 'Mesajınız',
                send: 'Gönder'
            }
        },
        footer: {
            copyright: '© 2026 Onur Azbar. Tüm Hakları Saklıdır.',
            telemetry: 'TELEMETRİ AKTİF'
        },
        notifications: {
            fillAll: 'Lütfen tüm alanları doldurunuz!',
            invalidEmail: 'Lütfen geçerli bir email adresi giriniz!',
            success: 'Mesajınız başarıyla gönderildi! Teşekkür ederim.',
            error: 'Mesaj gönderilemedi. Lütfen tekrar deneyiniz.',
            sending: 'Gönderiliyor...'
        }
    },

    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        hud: {
            systemOnline: 'SYSTEM ONLINE',
            experience: 'EXPERIENCE',
            experienceNote: 'years in the field',
            activeModules: 'ACTIVE MODULES'
        },
        hero: {
            subtitle: 'Software Engineer',
            bio: 'I build cloud services for big data platforms, bringing the precision of aerospace engineering to modern software architecture.',
            viewProjects: 'View My Projects',
            contact: 'Get In Touch',
            downloadCv: 'Download CV',
            typewriter: [
                'INITIATING SYSTEM...',
                'LOADING MODULES...',
                'TELEMETRY LINKED...',
                'READY FOR MISSION.'
            ]
        },
        about: {
            title: 'About',
            lead: 'A career log of bringing aerospace discipline to software architecture.',
            badge: 'SOFTWARE ENGINEER',
            text1: 'Hello! I\'m Onur Azbar. I am a software engineer with over 10 years of professional experience building reliable and scalable systems across different domains of software development.',
            text2: 'Currently, I work on cloud services for big data platforms, focusing on system architecture, performance and large scale data processing. My work involves designing backend components, improving distributed system reliability and contributing to modern data infrastructure solutions.',
            text3: 'Earlier in my career, I gained strong experience in backend development and spent several years working in embedded software. This background helped me develop a deep understanding of system level programming, performance optimization and resource efficient design. These skills continue to influence how I approach software today.',
            text4: 'I enjoy solving complex technical problems, working on scalable architectures and continuously learning new technologies. I value clean design, practical solutions and building software that is both robust and maintainable.'
        },
        projects: {
            title: 'Projects',
            code: 'Source Code'
        },
        skills: {
            title: 'Skills',
            programming: 'Programming Languages',
            tools: 'Tools & Technologies'
        },
        contact: {
            title: 'Contact',
            heading: 'Get In Touch',
            description: 'Want to talk about a project or ask a question? You can reach me through the channels below.',
            email: 'Email',
            address: 'Address',
            city: 'Izmir, Turkey',
            serverStatus: 'SERVER STATUS',
            uplink: 'Uplink',
            latency: 'Latency',
            encryption: 'Encryption',
            form: {
                name: 'Your Name',
                email: 'Your Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send'
            }
        },
        footer: {
            copyright: '© 2026 Onur Azbar. All Rights Reserved.',
            telemetry: 'TELEMETRY ACTIVE'
        },
        notifications: {
            fillAll: 'Please fill in all fields!',
            invalidEmail: 'Please enter a valid email address!',
            success: 'Your message has been sent successfully! Thank you.',
            error: 'Message could not be sent. Please try again.',
            sending: 'Sending...'
        }
    }
};

const SUPPORTED_LANGS = Object.keys(translations);
const DEFAULT_LANG = 'tr';

/**
 * Folds js/projects.js data into `translations`, so project copy is authored
 * in one place but resolved through the normal `projects.projectN.*` keys.
 */
function mergeProjectTranslations() {
    if (typeof PROJECTS === 'undefined') return;

    SUPPORTED_LANGS.forEach(lang => {
        PROJECTS.forEach(project => {
            translations[lang].projects['project' + project.id] = {
                title: project.title[lang] || project.title[DEFAULT_LANG],
                description: project.description[lang] || project.description[DEFAULT_LANG]
            };
        });
    });
}

mergeProjectTranslations();

/** Reads the stored preference, falling back to Turkish. */
function getCurrentLanguage() {
    let stored = null;
    try {
        stored = localStorage.getItem('language');
    } catch (e) {
        // Private mode / storage disabled — fall through to the default.
    }
    return SUPPORTED_LANGS.includes(stored) ? stored : DEFAULT_LANG;
}

/** Applies a language across the document and remembers the choice. */
function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);

    try {
        localStorage.setItem('language', lang);
    } catch (e) {
        // Preference simply will not persist; the page still switches.
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    updatePageText(lang);

    // Let the rest of the app react (e.g. restart the hero typewriter).
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

/** Swaps every [data-i18n] / [data-i18n-placeholder] node to the given language. */
function updatePageText(lang) {
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const text = getNestedValue(t, element.getAttribute('data-i18n'));
        if (typeof text === 'string') element.textContent = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const text = getNestedValue(t, element.getAttribute('data-i18n-placeholder'));
        if (typeof text === 'string') element.setAttribute('placeholder', text);
    });
}

/** Resolves a dot-path such as "contact.form.send" against a translation object. */
function getNestedValue(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(getCurrentLanguage());

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Resolve the button even when the inner <img>/<span> was clicked.
            const button = e.target.closest('.lang-btn');
            const lang = button && button.getAttribute('data-lang');
            if (lang) setLanguage(lang);
        });
    });
});
