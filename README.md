# Alfa Temizlik Apartman Yönetimi

## Sürüm 3

- Ana sayfada küçük canlı Çorum hava durumu, `00:00` saat görünümü ve duyurular
- Hareketli butonlar, kartlar ve yumuşak sayfa efektleri
- Ana yönetici panelinden ana sayfa metni ve duyuru yönetimi
- Yönetici ve apartman sakinlerine tekli/toplu mesaj hazırlama
- Daire sakinleri için ayrıntılı borç ve ödeme geçmişi
- Toplam tutarı dairelere bölerek veya sabit tutarla aylık aidat oluşturma
- Nakit, havale/EFT, kredi kartı ve diğer ödeme yöntemleri
- Aidat, demirbaş, ek gider, yakıt, tamirat ve diğer borç türleri
- Borçlu, borçsuz veya seçilen sakinlere kişiselleştirilmiş mesajlar

Veriler bu sürümde tarayıcının yerel hafızasında saklanır. Gerçek kullanıcı,
SMS/WhatsApp ve ortak veritabanı bağlantıları Firebase aşamasında kurulacaktır.

## Dosya yapısı

```text
alfa-apartman-yonetim/
├── index.html
├── pages/
│   ├── manager-login.html
│   ├── manager-dashboard.html
│   ├── apartment-login.html
│   └── apartment-dashboard.html
└── assets/
    ├── css/styles.css
    ├── js/
    │   ├── app.js
    │   ├── manager-dashboard.js
    │   └── apartment-dashboard.js
    └── images/
```

Sıfırdan kurulan temiz proje başlangıcı.

## İlk sürüm

- Mobil öncelikli müşteri ana sayfası
- Çorum canlı hava durumu
- Canlı tarih ve saat
- Ayrı yönetici ve apartman yöneticisi giriş ekranları
- Ortak mavi/yeşil tasarım sistemi
- Firebase bağımsız temiz başlangıç

## Sonraki aşamalar

1. Alfa Temizlik ana yönetici paneli
2. Apartman yöneticisi paneli
3. Firebase Authentication ve Firestore kurulumu
4. Rol ve yetki güvenlik kuralları
5. Bildirim altyapısı

`index.html` dosyasını tarayıcıda açarak ilk sürümü görüntüleyebilirsiniz.

## Sürüm 4.1

- Ana sayfaya telefon ve WhatsApp iletişim alanı eklendi.
- Mobil kullanım için sabit WhatsApp erişim düğmesi eklendi.
- Ana yönetici, apartman kartından “Çöpler Alındı” veya “Temizlik Yapıldı” bildirimi oluşturabilir.
- Oluşturulan hizmet bildirimleri apartman yönetici panelinde bina adı, tarih ve saat bilgisiyle görüntülenir.
- Bu prototipte bildirimler tarayıcının yerel hafızasında saklanır; farklı cihazlar arasında gerçek zamanlı gönderim Firebase aşamasında etkinleştirilecektir.
