const cityConvertP2E = (data) => {
    switch (data) {
        case "تهران":
            return "Tehran"
        case "شیراز":
            return "Shiraz"
        case "سنندج":
            return "Sananndaj"
        case "مادرید":
            return "Madrid"
        case "اصفهان":
            return "Isfahan"
        case "مازندران":
            return "Mazandaran"
        case "ایتالیا":
            return "Italy"
        case "سلیمانیه":
            return "sulaymaniyahTour"
        case "هولر":
            return "Hewler"
        case "آفرود":
            return "offRoad Center"
        default:
            break;
    }
}

const cityConvertE2P = (data) => {
    switch (data) {
        case "Tehran":
            return "تهران"
        case "Shiraz":
            return "َشیراز"
        case "Sanandaj":
            return "سنندج"
        case "Sananndaj":
            return "سنندج"
        case "Madrid":
            return "مادرید"
        case "Isfahan":
            return "اصفهان"
        case "Mazandaran":
            return "مازندران"
        case "Italy":
            return "ایتالیا"
        case "sulaymaniyahTour":
            return "سلیمانیه"
        case "Hewler":
            return "هولر"
        case "offRoad Center":
            return "آفرود"
        default:
            break;
    }
}

export { cityConvertP2E, cityConvertE2P }