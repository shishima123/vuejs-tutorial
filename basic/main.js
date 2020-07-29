var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        brand: 'No brand',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 20000,
        sale: 0.1,
        selectedProduct: 2,
        selectedProduct: 1,
        productDetails: [
            {
                'id': 1,
                quantity: 2,
                image: './images/black.jpg',
                textColor: 'Mau den'
            },
            {
                'id': 2,
                quantity: 5,
                image: './images/blue.jpg',
                textColor: 'Mau xanh'
            },
            {
                'id': 3,
                quantity: 0,
                image: './images/red.jpg',
                textColor: 'Mau do'
            },
        ],
        cart: [

        ],
        listDesc: [
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun',
        ],
        description: '<div class="pdp-mod-specification"><h2 class="pdp-mod-section-title " data-spm-anchor-id="a2o4n.pdp.product_detail.i0.4c6640b647lHZr">Đặc tính sản phẩm Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm</h2><div class="pdp-general-features"><ul class="specification-keys"><li class="key-li"><span class="key-title"> Thương hiệu  </span><div class="html-content key-value">No Brand</div></li><li class="key-li"><span class="key-title"> SKU  </span><div class="html-content key-value">265780948_VNAMZ-382816279</div></li></ul></div></div>'
    },
    methods: {
        handleSelectProduct(itemId) {
            return this.selectedProduct = itemId;
        },
        handleAddToCart() {
            if (this.getProductDetailSelected.quantity > 0) {
                this.cart.push(this.getProductDetailSelected);
                this.changeQuantity();
            } else {
                alert('product is out of stock');
            }
        },
        classActive(key) {
            return { active: key == this.getProductDetailSelected.id }
        },
        changeQuantity() {
            var index = this.productDetails.findIndex(element => element.id == this.selectedProduct);
            this.productDetails[index].quantity--;
        }
    },
    computed: {
        originalPriceFormat() {
            var price = this.price;
            return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'VND' }).format(price);
        },
        finalPriceFormat() {
            var price = this.price - (this.price * this.sale);
            return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'VND' }).format(price);
        },
        saleFormat() {
            return this.sale * 100;
        },
        getProductDetailSelected: {
            get: function () {
                return this.productDetails.filter(element => element.id == this.selectedProduct)[0];

            }
        },
        cardNumber() {
            return this.cart.length;
        },
    }
});
