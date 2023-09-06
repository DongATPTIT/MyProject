import { createStore } from 'vuex';
import navbar from './navbar';
const store = createStore({
    modules: {
        navbar: navbar,
    },
    state: {
        nations: [{
            name: "Afghanistan (AFN ؋)",
            flag: require("@/assets/Header/afghanistan.png")

        },
        {
            name: "Việt Name",
            flag: require("@/assets/Header/vietnam.png")
        }
        ],
        language: [
            {
                name: "English"
            },
            {
                name: "English",

            },
            {
                name: "English",

            },
            {
                name: "English",

            },
            {
                name: "English",

            },
            {
                name: "English",

            },
            {
                name: "English",

            },
        ],
        slider: {
            img: require("@/assets/Slider/bg1.jpg")
        },
        checked: {
            showMenuList: false,
            showDrawerMenu: false,
            iconMenu: true,
            showCart: false,
        },
        carouselSlides: ["bg1", 'bg2'],
        productDeals: [
            {
                img: require("@/assets/Navbar/MenuList/DarkBlue.png"),
                text: "Mens Athletic Wear",
                price: "€83,95"
            },
            {
                img: require("@/assets/Navbar/MenuList/DarkBlue.png"),
                text: "Mens Athletic Wear",
                price: "€83,95"
            },
        ],
        collectionTexts: [
            {
                icon: "HourglassOutlined",
                title: "Quality",
                text1: "Exceptional quality from top ",
                text2: "to bottom."
            },
            {
                icon: "GlobalOutlined",
                title: "Delivery",
                text1: "Fast and free delivery ",
                text2: "worldwide."
            }, {
                icon: "TrophyOutlined",
                title: "Guarantee",
                text1: "100% customer satisfaction ",
                text2: "guaranteed."
            }
        ],
        collectionProducts: [
            {
                img: require("@/assets/BodyVue/Collections/Men1.jpg"),
                text: "Men's Fashion"
            },
            {
                img: require("@/assets/BodyVue/Collections/Men2.jpg"),
                text: "Men's Swimwear"
            },
            {
                img: require("@/assets/BodyVue/Collections/Men3.jpg"),
                text: "Men's Innerwear"
            },
            {
                img: require("@/assets/BodyVue/Collections/Men4.jpg"),
                text: "Men's Accessories"
            },
        ],
        featuredProducts: [
            {
                text: "img0",
                img: require("@/assets/BodyVue/FeateredProduct/img0.png")
            },
            {
                text: "img1",
                img: require("@/assets/BodyVue/FeateredProduct/img1.png")
            },
            {
                text: "img2",
                img: require("@/assets/BodyVue/FeateredProduct/img2.png")
            },
            {
                text: "img3",
                img: require("@/assets/BodyVue/FeateredProduct/img3.png")
            },
        ],
        menSlim: [
            {
                img: require("@/assets/BodyVue/FeateredProduct/img0.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 1,
                size: 'XS',
                priceSale: "€69,95",
                cost: "€124,95",
                quatity: 100,
                color: 'white',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img1.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 2,
                size: 'S',
                priceSale: "€69,95",
                cost: "€124,95",
                quatity: 100,
                color: 'white',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 3,
                size: 'M',
                priceSale: "€90,95",
                cost: "€124,95",
                quatity: 100,
                color: 'white',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img3.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 4,
                size: 'L',
                priceSale: "€97,95",
                cost: "€124,95",
                quatity: 100,
                color: 'white',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 5,
                size: 'XL',
                priceSale: "€104,95",
                cost: "€124,95",
                quatity: 0,
                color: 'white',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img0.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 6,
                size: 'XS',
                priceSale: "€138,95",
                cost: "",
                quatity: 100,
                color: 'Gray',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img1.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 7,
                size: 'S',
                priceSale: "€83,95",
                cost: "€124,95",
                quatity: 100,
                color: 'Gray',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 8,
                size: 'M',
                priceSale: "€90,95",
                cost: "€124,95",
                quatity: 100,
                color: 'Gray',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img3.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 9,
                size: 'L',
                priceSale: "€200000",
                cost: "€124,95",
                quatity: 100,
                color: 'Gray',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 10,
                size: 'XL',
                priceSale: "€104,95",
                cost: "€124,95",
                quatity: 100,
                color: 'Gray',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img0.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 11,
                size: 'XS',
                priceSale: "€208,95",
                cost: "",
                quatity: 0,
                color: 'Black',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img1.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 12,
                size: 'S',
                priceSale: "€83,95",
                cost: "€124,95",
                quatity: 100,
                color: 'Black',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 13,
                size: 'M',
                priceSale: "€90,95",
                cost: "€124,95",
                quatity: 100,
                color: 'Black',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img3.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 14,
                size: 'L',
                priceSale: "€5",
                cost: "€124,95",
                quatity: 100,
                color: 'Black',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 15,
                size: 'XL',
                priceSale: "€104,95",
                cost: "€124,95",
                quatity: 100,
                color: 'Black',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img0.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 16,
                size: 'XS',
                priceSale: "€277,95",
                cost: "0",
                quatity: 0,
                color: 'Darkred',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img1.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 17,
                size: 'S',
                priceSale: "€83,95",
                cost: "€124,95",
                quatity: 0,
                color: 'Darkred',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 18,
                size: 'M',
                priceSale: "€90,95",
                cost: "€124,95",
                quatity: 0,
                color: 'Darkred',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img3.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 19,
                size: 'L',
                priceSale: "€100000",
                cost: "€124,95",
                quatity: 0,
                color: 'Darkred',
            },
            {
                img: require("@/assets/BodyVue/FeateredProduct/img2.png"),
                content: "Men Slim Fit Casual Shirt",
                id: 20,
                size: 'XL',
                priceSale: "€104,95",
                cost: "€124,95",
                quatity: 0,
                color: 'Darkred',
            },

        ],
        bestSellers: [
            {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh1.jpg"),
                title: "Men Bomber Jacket",
                price: "€116,95",
                cost: "€99",
                color: ["darkgoldenrod", "darkcyan"],
                icon: "DingtalkOutlined",
                text: "Cooling",
            }, {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh2.jpg"),
                title: "Men Leather Jacket",
                price: "€109,95",
                cost: "",
                color: ["chocolate", "black"],
                icon: "DingtalkOutlined",
                text: "Quick Dry",
            },
            {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh3.jpg"),
                title: "Cotton Pure T-shirt",
                price: "€37,95",
                cost: "",
                color: ["white", "burlywood"],
                icon: "DingtalkOutlined",
                text: "Quick Dry",
            },
            {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh4.jpg"),
                title: " Men Bomber Jacket",
                price: "€116,95",
                cost: "",
                color: ["cornflowerblue", "grey", "black"],
                icon: "DingtalkOutlined",
                text: "Quick Dry",
            },
            {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh1.jpg"),
                title: "Men Bomber Jacket",
                price: "€116,95",
                cost: "€99",
                color: ["darkgoldenrod", "darkcyan"],
                icon: "DingtalkOutlined",
                text: "Cooling",
            }, {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh2.jpg"),
                title: "Men Leather Jacket",
                price: "€109,95",
                cost: "",
                color: ["chocolate", "black"],
                icon: "DingtalkOutlined",
                text: "Quick Dry",
            },
            {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh3.jpg"),
                title: "Cotton Pure T-shirt",
                price: "€37,95",
                cost: "",
                color: ["white", "burlywood"],
                icon: "DingtalkOutlined",
                text: "Quick Dry",
            },
            {
                content: "Selling Fast!",
                img: require("@/assets/BodyVue/SellerProducts/anh4.jpg"),
                title: " Men Bomber Jacket",
                price: "€116,95",
                cost: "",
                color: ["cornflowerblue", "grey", "black"],
                icon: "DingtalkOutlined",
                text: "Quick Dry",
            },
        ],
        journal: [{
            img: require("@/assets/BodyVue/journal/img1.jpg"),
            content: "How To Wear Streetwear Like A Grown-up | Men’s Fashion",
            date: "June 15, 2022",
            title: "Men’s urban fashion tips, brands this season are taking influence from streetwear.",
            text: "Read More"
        },
        {
            img: require("@/assets/BodyVue/journal/img2.jpg"),
            content: "How To Wear Streetwear Like A Grown-up | Men’s Fashion",
            date: "June 15, 2022",
            title: "Men’s urban fashion tips, brands this season are taking influence from streetwear.",
            text: "Read More"
        },
        {
            img: require("@/assets/BodyVue/journal/img3.jpg"),
            content: "How To Wear Streetwear Like A Grown-up | Men’s Fashion",
            date: "June 15, 2022",
            title: "Men’s urban fashion tips, brands this season are taking influence from streetwear.",
            text: "Read More"
        },
        ],
        selectColorMen: [],
        selectSizeMen: [],
        coutProduct: 1,
        selectColorBestSeller: [],
    },

    getters: {
        getIcons(state) {
            return state.collectionTexts;
        },
        featuredProductsText: state => {
            return state.featuredProducts.map(product => product.text);
        },
        // lấy màu sản phẩm của SP trong Best Seller
        getColorBestSeller(state) {
            return state.bestSellers.map(color => color.color)
        },
    },
    mutations: {
        setSelectedNation(state, nation) {
            state.selectedNation = nation;
        },
        toggleMenuList(state) {
            state.checked.showMenuList = !state.checked.showMenuList;
            state.checked.iconMenu = !state.checked.iconMenu;
        },
        toggleDrawerMenu(state) {
            state.checked.showDrawerMenu = !state.checked.showDrawerMenu;
        },
        toggleShowCart(state) {
            state.checked.showCart = !state.checked.showCart;
        },
        // chon size

        initBoxes(state, count) {
            state.selectSizeMen = Array.from({ length: count }, (value, index) => ({ isActive: index === 0 }));
        },
        activateBox(state, index) {
            state.selectSizeMen.forEach((box, i) => {
                if (i === index) {
                    box.isActive = true;
                } else {
                    box.isActive = false;
                }
            });
        },

        //chon mau
        initBoxesColor(state, count) {
            state.selectColorMen = Array.from({ length: count }, (value, index) => ({ isActiveColor: index === 0 }));
        },
        activeColoMenSlim(state, index) {
            state.selectColorMen.forEach((box, i) => {
                if (i === index) {
                    box.isActiveColor = true;
                } else {
                    box.isActiveColor = false;
                }
            });
        },

        // tang bien dem khi onclick
        increment(state) {
            state.coutProduct++;
        },
        // tang giam bien dem
        reduce(state) {
            if (state.coutProduct > 1) {
                state.coutProduct--;
            }
            else {
                state.coutProduct;
            }
        },
        // chon mau best seller
        initBoxesColorBestSeller(state, count) {
            state.selectColorBestSeller = Array.from({ length: count }, (value, index) => ({ isActiveBestSeller: index === 0 }));
        },
        activeColorBestSeller(state, index) {
            state.selectColorBestSeller.forEach((box, i) => {
                if (i === index) {
                    box.isActiveBestSeller = true;
                } else {
                    box.isActiveBestSeller = false;
                }
            });
        },
    },
})


export default store;

