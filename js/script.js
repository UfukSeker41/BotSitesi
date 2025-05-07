// Fiyatlandırma Verileri
const vdsData = [
    {
        name: "DC-1 VDS",
        specs: {
            cpu: "Intel E5-2697v2 2 CPU",
            ram: "2 RAM",
            disk: "25 GB Disk",
            price: "60₺/Ay"
        }
    },
    {
        name: "DC-2 VDS",
        specs: {
            cpu: "Intel E5-2697v2 2 CPU",
            ram: "4 RAM",
            disk: "25 GB Disk",
            price: "70₺/Ay"
        }
    },
    {
        name: "DC-3 VDS",
        specs: {
            cpu: "Intel E5-2697v2 3 CPU",
            ram: "6 RAM",
            disk: "25 GB Disk",
            price: "95₺/Ay"
        }
    },
    {
        name: "DC-4 VDS",
        specs: {
            cpu: "Intel E5-2697v2 3 CPU",
            ram: "8 RAM",
            disk: "25 GB Disk",
            price: "110₺/Ay"
        }
    },
    {
        name: "DC-5 VDS",
        specs: {
            cpu: "Intel E5-2697v2 4 CPU",
            ram: "12 RAM",
            disk: "50 GB Disk",
            price: "150₺/Ay"
        }
    },
    {
        name: "DC-6 VDS",
        specs: {
            cpu: "Intel E5-2697v2 6 CPU",
            ram: "16 RAM",
            disk: "50 GB Disk",
            price: "200₺/Ay"
        }
    },
    {
        name: "DC-7 VDS",
        specs: {
            cpu: "Intel E5-2697v2 8 CPU",
            ram: "24 RAM",
            disk: "70 GB Disk",
            price: "270₺/Ay"
        }
    },
    {
        name: "DC-8 VDS",
        specs: {
            cpu: "Intel E5-2697v2 12 CPU",
            ram: "32 RAM",
            disk: "100 GB Disk",
            price: "320₺/Ay"
        }
    }
];

const botData = [
    {
        name: "Discord Guard",
        price: "75/Ay",
        features: [
            "Bot hakkındaki özellikler/bilgiler ilerleyen zamanlarda atılacaktır.",
            "7/24 Aktif",
            "Özelleştirilebilir"
        ]
    },
    {
        name: "Discord Log",
        price: "75/Ay",
        features: [
            "Bot hakkındaki özellikler/bilgiler ilerleyen zamanlarda atılacaktır.",
            "7/24 Aktif",
            "Özelleştirilebilir"
        ]
    },
    {
        name: "Moderasyon",
        price: "100/Ay",
        features: [
            "Bot hakkındaki özellikler/bilgiler ilerleyen zamanlarda atılacaktır.",
            "7/24 Aktif",
            "Özelleştirilebilir"
        ]
    },
    {
        name: "FiveM",
        price: "100₺/Ay",
        features: [
            "Bot hakkındaki özellikler/bilgiler ilerleyen zamanlarda atılacaktır.",
            "7/24 Aktif",
            "Özelleştirilebilir"
        ]
    },
    {
        name: "Fivem Legal Rapor",
        price: "75₺/Ay",
        features: [
            "Bot hakkındaki özellikler/bilgiler ilerleyen zamanlarda atılacaktır.",
            "7/24 Aktif",
            "Özelleştirilebilir"
        ]
    },
    {
        name: "Fivem - Shift",
        price: "75₺/Ay",
        features: [
            "Bot hakkındaki özellikler/bilgiler ilerleyen zamanlarda atılacaktır.",
            "7/24 Aktif",
            "Özelleştirilebilir"
        ]
    },
    {
        name: "Ticket",
        price: "75₺/Ay",
        features: [
            "Bot hakkındaki özellikler/bilgiler ilerleyen zamanlarda atılacaktır.",
            "7/24 Aktif",
            "Özelleştirilebilir"
        ]
    }
];

const r9VdsData = [
    {
        name: "R9-VDS 1",
        specs: {
            cpu: "AMD Ryzen 9 5900x 2 CPU",
            ram: "2 RAM",
            disk: "25 GB Disk",
            price: "230₺/Ay"
        }
    },
    {
        name: "R9-VDS 2",
        specs: {
            cpu: "AMD Ryzen 9 5900x 2 CPU",
            ram: "4 RAM",
            disk: "25 GB Disk",
            price: "310₺/Ay"
        }
    },
    {
        name: "R9-VDS 3",
        specs: {
            cpu: "AMD Ryzen 9 5900x 4 CPU",
            ram: "6 RAM",
            disk: "40 GB Disk",
            price: "350₺/Ay"
        }
    },
    {
        name: "R9-VDS 4",
        specs: {
            cpu: "AMD Ryzen 9 5900x 4 CPU",
            ram: "8 RAM",
            disk: "50 GB Disk",
            price: "400₺/Ay"
        }
    },
    {
        name: "R9-VDS 5",
        specs: {
            cpu: "AMD Ryzen 9 5900x 4 CPU",
            ram: "12 RAM",
            disk: "60 GB Disk",
            price: "430₺/Ay"
        }
    },
    {
        name: "R9-VDS 6",
        specs: {
            cpu: "AMD Ryzen 9 5900x 6 CPU",
            ram: "16 RAM",
            disk: "100 GB Disk",
            price: "540₺/Ay"
        }
    },
    {
        name: "R9-VDS 7",
        specs: {
            cpu: "AMD Ryzen 9 5900x 12 CPU",
            ram: "24 RAM",
            disk: "150 GB Disk",
            price: "610₺/Ay"
        }
    },
    {
        name: "R9-VDS 8",
        specs: {
            cpu: "AMD Ryzen 9 5900x 16 CPU",
            ram: "32 RAM",
            disk: "200 GB Disk",
            price: "825₺/Ay"
        }
    },
    {
        name: "R9-VDS 9",
        specs: {
            cpu: "AMD Ryzen 9 5900x 24 CPU",
            ram: "64 RAM",
            disk: "300 GB Disk",
            price: "920₺/Ay"
        }
    }
];

// Fiyat Kartlarını Oluşturma Fonksiyonları
function createVDSCard(data) {
    return `
        <div class="price-card">
            <h4>${data.name}</h4>
            <div class="price">${data.specs.price}</div>
            <ul>
                <li>${data.specs.cpu}</li>
                <li>${data.specs.ram}</li>
                <li>${data.specs.disk}</li>
            </ul>
        </div>
    `;
}

function createBotCard(data) {
    return `
        <div class="price-card">
            <h4>${data.name}</h4>
            <div class="price">${data.price}</div>
            <ul>
                ${data.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Fiyat Kartlarını Sayfaya Yerleştirme
document.addEventListener('DOMContentLoaded', () => {
    // VDS Fiyatlandırma
    const vdsPricingGrid = document.querySelector('#vds-pricing .pricing-grid');
    vdsData.forEach(data => {
        vdsPricingGrid.innerHTML += createVDSCard(data);
    });

    // Bot Fiyatlandırma
    const botPricingGrid = document.querySelector('#bot-pricing .pricing-grid');
    botData.forEach(data => {
        botPricingGrid.innerHTML += createBotCard(data);
    });

    // R9 VDS Fiyatlandırma
    const r9PricingGrid = document.querySelector('#r9-pricing .pricing-grid');
    r9VdsData.forEach(data => {
        r9PricingGrid.innerHTML += createVDSCard(data);
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobil Menü
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Menü linklerine tıklandığında menüyü kapat
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuButton.classList.remove('active');
        });
    });
});

// Sayfa Yüklendiğinde Animasyon
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Pricing grid'lerini doldur
document.addEventListener('DOMContentLoaded', function() {
    // VDS Paketleri
    const vdsPackages = [
        {
            name: 'DC-4 VDS',
            price: '110₺/Ay',
            specs: [
                'Intel E5-2697v2 3 CPU',
                '8 RAM',
                '25 GB Disk'
            ]
        },
        {
            name: 'DC-5 VDS',
            price: '150₺/Ay',
            specs: [
                'Intel E5-2697v2 4 CPU',
                '12 RAM',
                '50 GB Disk'
            ]
        },
        {
            name: 'DC-6 VDS',
            price: '200₺/Ay',
            specs: [
                'Intel E5-2697v2 6 CPU',
                '16 RAM',
                '50 GB Disk'
            ]
        }
    ];

    // Discord Bot Paketleri
    const botPackages = [
        {
            name: 'Başlangıç',
            price: '60₺/Ay',
            specs: [
                'Temel Komutlar',
                'Moderasyon Sistemi',
                '7/24 Aktif'
            ]
        },
        {
            name: 'Gelişmiş',
            price: '100₺/Ay',
            specs: [
                'Özel Komutlar',
                'Gelişmiş Moderasyon',
                'Kayıt Sistemi',
                '7/24 Aktif'
            ]
        },
        {
            name: 'Premium',
            price: '150₺/Ay',
            specs: [
                'Özelleştirilebilir Komutlar',
                'Tam Moderasyon Sistemi',
                'Özel Sistemler',
                '7/24 Aktif ve Destek'
            ]
        }
    ];

    // R9 VDS Paketleri
    const r9Packages = [
        {
            name: 'R9-1',
            price: '300₺/Ay',
            specs: [
                'AMD Ryzen 9 3900X',
                '16 RAM',
                '100 GB NVMe SSD'
            ]
        },
        {
            name: 'R9-2',
            price: '400₺/Ay',
            specs: [
                'AMD Ryzen 9 5900X',
                '32 RAM',
                '200 GB NVMe SSD'
            ]
        },
        {
            name: 'R9-3',
            price: '500₺/Ay',
            specs: [
                'AMD Ryzen 9 5950X',
                '64 RAM',
                '500 GB NVMe SSD'
            ]
        }
    ];

    // Paketleri HTML'e ekle
    function createPriceCards(packages, containerId) {
        const container = document.querySelector(`#${containerId} .pricing-grid`);
        packages.forEach(pkg => {
            const card = document.createElement('div');
            card.className = 'price-card';
            card.innerHTML = `
                <h4>${pkg.name}</h4>
                <div class="price">${pkg.price}</div>
                <ul>
                    ${pkg.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            `;
            container.appendChild(card);
        });
    }

    createPriceCards(vdsPackages, 'vds-pricing');
    createPriceCards(botPackages, 'bot-pricing');
    createPriceCards(r9Packages, 'r9-pricing');
}); 