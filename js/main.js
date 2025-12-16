/**
 * 아뜰리에 가죽공방 - 메인 JavaScript
 * 장바구니, 필터링, 갤러리 등 핵심 기능
 */

// ========== 제품 데이터 ==========
const products = [
    {
        id: 1,
        name: '클래식 반지갑',
        category: 'half',
        categoryName: '반지갑',
        price: 89000,
        originalPrice: null,
        description: '클래식한 디자인의 반지갑입니다. 이탈리아 베지터블 가죽을 사용하여 시간이 지날수록 깊은 색감을 띱니다.',
        features: ['이탈리아 베지터블 가죽', '카드 슬롯 6개', '지폐 수납공간 2개', '동전 지퍼 포켓'],
        colors: ['#8B4513', '#2F1810', '#D2691E'],
        colorNames: ['브라운', '블랙', '카멜'],
        images: [
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=600&fit=crop'
        ],
        badge: 'BEST',
        rating: 4.8,
        reviewCount: 128
    },
    {
        id: 2,
        name: '미니 카드지갑',
        category: 'card',
        categoryName: '카드지갑',
        price: 49000,
        originalPrice: null,
        description: '미니멀한 디자인의 카드지갑입니다. 얇고 가벼워 휴대가 편리합니다.',
        features: ['슬림한 디자인', '카드 슬롯 4개', '교통카드 수납', '이탈리아 가죽'],
        colors: ['#2F1810', '#8B4513', '#654321'],
        colorNames: ['블랙', '브라운', '다크브라운'],
        images: [
            'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=600&h=600&fit=crop'
        ],
        badge: 'NEW',
        rating: 4.6,
        reviewCount: 45
    },
    {
        id: 3,
        name: '빈티지 장지갑',
        category: 'long',
        categoryName: '장지갑',
        price: 129000,
        originalPrice: 159000,
        description: '빈티지한 감성의 장지갑입니다. 넉넉한 수납공간으로 실용적입니다.',
        features: ['빈티지 워싱 처리', '카드 슬롯 12개', '지폐 수납공간 3개', '영수증 포켓'],
        colors: ['#654321', '#8B4513', '#A0522D'],
        colorNames: ['다크브라운', '브라운', '시에나'],
        images: [
            'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=600&h=600&fit=crop'
        ],
        badge: null,
        rating: 4.9,
        reviewCount: 89
    },
    {
        id: 4,
        name: '슬림 머니클립',
        category: 'clip',
        categoryName: '머니클립',
        price: 69000,
        originalPrice: null,
        description: '슬림한 디자인의 머니클립입니다. 현금과 카드를 깔끔하게 정리할 수 있습니다.',
        features: ['스테인리스 클립', '카드 슬롯 4개', '초슬림 디자인', '프리미엄 가죽'],
        colors: ['#2F1810', '#8B4513'],
        colorNames: ['블랙', '브라운'],
        images: [
            'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=600&h=600&fit=crop'
        ],
        badge: null,
        rating: 4.7,
        reviewCount: 56
    },
    {
        id: 5,
        name: '프리미엄 반지갑',
        category: 'half',
        categoryName: '반지갑',
        price: 119000,
        originalPrice: null,
        description: '최고급 가죽을 사용한 프리미엄 반지갑입니다.',
        features: ['코르도반 가죽', '카드 슬롯 8개', '지폐 수납공간 2개', 'RFID 차단'],
        colors: ['#2F1810', '#800020', '#654321'],
        colorNames: ['블랙', '버건디', '다크브라운'],
        images: [
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=600&h=600&fit=crop'
        ],
        badge: null,
        rating: 4.9,
        reviewCount: 34
    },
    {
        id: 6,
        name: '심플 카드케이스',
        category: 'card',
        categoryName: '카드지갑',
        price: 39000,
        originalPrice: null,
        description: '심플하고 실용적인 카드케이스입니다.',
        features: ['미니멀 디자인', '카드 슬롯 3개', '명함 수납 가능', '고급 마감'],
        colors: ['#8B4513', '#2F1810', '#D2691E'],
        colorNames: ['브라운', '블랙', '카멜'],
        images: [
            'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=600&fit=crop'
        ],
        badge: null,
        rating: 4.5,
        reviewCount: 67
    },
    {
        id: 7,
        name: '라운드 장지갑',
        category: 'long',
        categoryName: '장지갑',
        price: 149000,
        originalPrice: null,
        description: '라운드 지퍼 디자인의 장지갑입니다.',
        features: ['YKK 지퍼', '카드 슬롯 16개', '대용량 수납', '핸드스트랩'],
        colors: ['#654321', '#800020', '#2F1810'],
        colorNames: ['다크브라운', '버건디', '블랙'],
        images: [
            'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop'
        ],
        badge: 'BEST',
        rating: 4.8,
        reviewCount: 92
    },
    {
        id: 8,
        name: '클립 카드홀더',
        category: 'clip',
        categoryName: '머니클립',
        price: 59000,
        originalPrice: 79000,
        description: '실용적인 클립형 카드홀더입니다.',
        features: ['마그네틱 클립', '카드 슬롯 6개', '컴팩트 사이즈', '가볍고 튼튼'],
        colors: ['#8B4513', '#2F1810'],
        colorNames: ['브라운', '블랙'],
        images: [
            'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=600&h=600&fit=crop'
        ],
        badge: 'SALE',
        rating: 4.6,
        reviewCount: 41
    }
];

// ========== 장바구니 ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const countElements = document.querySelectorAll('#cartCount, .cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

function addToCart(productId, quantity = 1, colorIndex = 0) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item =>
        item.id === productId && item.colorIndex === colorIndex
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            color: product.colorNames[colorIndex],
            colorIndex: colorIndex,
            quantity: quantity
        });
    }

    saveCart();
    showNotification(`${product.name}이(가) 장바구니에 추가되었습니다.`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

function updateCartItemQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else {
            saveCart();
            if (typeof renderCart === 'function') {
                renderCart();
            }
        }
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
    cart = [];
    saveCart();
}

// ========== 알림 ==========
function showNotification(message) {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <span>✓</span>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
        color: #1a1a1a;
        padding: 16px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(212, 165, 116, 0.4);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 스타일 추가
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    // 3초 후 제거
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== 가격 포맷 ==========
function formatPrice(price) {
    return '₩' + price.toLocaleString('ko-KR');
}

// ========== 제품 관련 ==========
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
    if (!category || category === 'all') {
        return products;
    }
    return products.filter(p => p.category === category);
}

function filterProducts(options = {}) {
    let filtered = [...products];

    // 카테고리 필터
    if (options.categories && options.categories.length > 0) {
        filtered = filtered.filter(p => options.categories.includes(p.category));
    }

    // 가격 필터
    if (options.priceRanges && options.priceRanges.length > 0) {
        filtered = filtered.filter(p => {
            return options.priceRanges.some(range => {
                if (range === 'under50') return p.price < 50000;
                if (range === '50to100') return p.price >= 50000 && p.price < 100000;
                if (range === 'over100') return p.price >= 100000;
                return true;
            });
        });
    }

    // 정렬
    if (options.sort) {
        switch (options.sort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
            default:
                // 기본 순서 유지
                break;
        }
    }

    return filtered;
}

// ========== 별점 생성 ==========
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) {
        stars += '☆';
    }
    while (stars.length < 5) {
        stars += '☆';
    }

    return stars;
}

// ========== 제품 카드 HTML 생성 ==========
function createProductCardHTML(product) {
    const badgeHTML = product.badge
        ? `<span class="product-badge">${product.badge}</span>`
        : '';

    const originalPriceHTML = product.originalPrice
        ? `<span class="product-price-original">${formatPrice(product.originalPrice)}</span>`
        : '';

    return `
        <article class="product-card">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                ${badgeHTML}
                <div class="product-actions">
                    <button class="product-action-btn" title="장바구니 담기" onclick="addToCart(${product.id})">🛒</button>
                    <a href="product-detail.html?id=${product.id}" class="product-action-btn" title="자세히 보기">👁️</a>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${product.categoryName}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}${originalPriceHTML}</p>
            </div>
        </article>
    `;
}

// ========== 바로 구매 ==========
function buyNow(productId, quantity = 1, colorIndex = 0) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // 임시 구매 정보 저장
    const buyNowItem = {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.images[0],
        color: product.colorNames[colorIndex],
        colorIndex: colorIndex,
        quantity: quantity
    };

    localStorage.setItem('buyNowItem', JSON.stringify(buyNowItem));
    window.location.href = 'checkout.html?buyNow=true';
}

// ========== URL 파라미터 ==========
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ========== 초기화 ==========
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();

    // 모바일 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function () {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(26, 26, 26, 0.98)';
            } else {
                header.style.background = 'linear-gradient(180deg, rgba(26, 26, 26, 0.98) 0%, rgba(26, 26, 26, 0.95) 100%)';
            }
        });
    }
});

// 전역 함수로 내보내기
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.buyNow = buyNow;
window.products = products;
window.getProductById = getProductById;
window.filterProducts = filterProducts;
window.formatPrice = formatPrice;
window.generateStars = generateStars;
window.createProductCardHTML = createProductCardHTML;
window.getUrlParam = getUrlParam;
window.cart = cart;
window.getCartTotal = getCartTotal;
window.clearCart = clearCart;
