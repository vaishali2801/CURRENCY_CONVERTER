//currency api key
const API_KEY = "46b8f73013fd3a85f91dcf53";
//country array
const countries = [
    { name: "Afghanistan", currency: "AFN", code: "AF" },
    { name: "Albania", currency: "ALL", code: "AL" },
    { name: "Algeria", currency: "DZD", code: "DZ" },
    { name: "Andorra", currency: "EUR", code: "AD" },
    { name: "Angola", currency: "AOA", code: "AO" },
    { name: "Antigua and Barbuda", currency: "XCD", code: "AG" },
    { name: "Argentina", currency: "ARS", code: "AR" },
    { name: "Armenia", currency: "AMD", code: "AM" },
    { name: "Australia", currency: "AUD", code: "AU" },
    { name: "Austria", currency: "EUR", code: "AT" },
    { name: "Azerbaijan", currency: "AZN", code: "AZ" },

    { name: "Bahamas", currency: "BSD", code: "BS" },
    { name: "Bahrain", currency: "BHD", code: "BH" },
    { name: "Bangladesh", currency: "BDT", code: "BD" },
    { name: "Barbados", currency: "BBD", code: "BB" },
    { name: "Belarus", currency: "BYN", code: "BY" },
    { name: "Belgium", currency: "EUR", code: "BE" },
    { name: "Belize", currency: "BZD", code: "BZ" },
    { name: "Benin", currency: "XOF", code: "BJ" },
    { name: "Bhutan", currency: "BTN", code: "BT" },
    { name: "Bolivia", currency: "BOB", code: "BO" },
    { name: "Bosnia and Herzegovina", currency: "BAM", code: "BA" },
    { name: "Botswana", currency: "BWP", code: "BW" },
    { name: "Brazil", currency: "BRL", code: "BR" },
    { name: "Brunei", currency: "BND", code: "BN" },
    { name: "Bulgaria", currency: "BGN", code: "BG" },
    { name: "Burkina Faso", currency: "XOF", code: "BF" },
    { name: "Burundi", currency: "BIF", code: "BI" },

    { name: "Cambodia", currency: "KHR", code: "KH" },
    { name: "Cameroon", currency: "XAF", code: "CM" },
    { name: "Canada", currency: "CAD", code: "CA" },
    { name: "Cape Verde", currency: "CVE", code: "CV" },
    { name: "Central African Republic", currency: "XAF", code: "CF" },
    { name: "Chad", currency: "XAF", code: "TD" },
    { name: "Chile", currency: "CLP", code: "CL" },
    { name: "China", currency: "CNY", code: "CN" },
    { name: "Colombia", currency: "COP", code: "CO" },
    { name: "Comoros", currency: "KMF", code: "KM" },
    { name: "Congo (Republic)", currency: "XAF", code: "CG" },
    { name: "Congo (Democratic Republic)", currency: "CDF", code: "CD" },
    { name: "Costa Rica", currency: "CRC", code: "CR" },
    { name: "Croatia", currency: "EUR", code: "HR" },
    { name: "Cuba", currency: "CUP", code: "CU" },
    { name: "Cyprus", currency: "EUR", code: "CY" },
    { name: "Czech Republic", currency: "CZK", code: "CZ" },

    { name: "Denmark", currency: "DKK", code: "DK" },
    { name: "Djibouti", currency: "DJF", code: "DJ" },
    { name: "Dominica", currency: "XCD", code: "DM" },
    { name: "Dominican Republic", currency: "DOP", code: "DO" },

    { name: "East Timor (Timor-Leste)", currency: "USD", code: "TL" },
    { name: "Ecuador", currency: "USD", code: "EC" },
    { name: "Egypt", currency: "EGP", code: "EG" },
    { name: "El Salvador", currency: "USD", code: "SV" },
    { name: "Equatorial Guinea", currency: "XAF", code: "GQ" },
    { name: "Eritrea", currency: "ERN", code: "ER" },
    { name: "Estonia", currency: "EUR", code: "EE" },
    { name: "Eswatini", currency: "SZL", code: "SZ" },
    { name: "Ethiopia", currency: "ETB", code: "ET" },

    { name: "Fiji", currency: "FJD", code: "FJ" },
    { name: "Finland", currency: "EUR", code: "FI" },
    { name: "France", currency: "EUR", code: "FR" },

    { name: "Gabon", currency: "XAF", code: "GA" },
    { name: "Gambia", currency: "GMD", code: "GM" },
    { name: "Georgia", currency: "GEL", code: "GE" },
    { name: "Germany", currency: "EUR", code: "DE" },
    { name: "Ghana", currency: "GHS", code: "GH" },
    { name: "Greece", currency: "EUR", code: "GR" },
    { name: "Grenada", currency: "XCD", code: "GD" },
    { name: "Guatemala", currency: "GTQ", code: "GT" },
    { name: "Guinea", currency: "GNF", code: "GN" },
    { name: "Guinea-Bissau", currency: "XOF", code: "GW" },
    { name: "Guyana", currency: "GYD", code: "GY" },

    { name: "Haiti", currency: "HTG", code: "HT" },
    { name: "Honduras", currency: "HNL", code: "HN" },
    { name: "Hungary", currency: "HUF", code: "HU" },

    { name: "Iceland", currency: "ISK", code: "IS" },
    { name: "India", currency: "INR", code: "IN" },
    { name: "Indonesia", currency: "IDR", code: "ID" },
    { name: "Iran", currency: "IRR", code: "IR" },
    { name: "Iraq", currency: "IQD", code: "IQ" },
    { name: "Ireland", currency: "EUR", code: "IE" },
    { name: "Israel", currency: "ILS", code: "IL" },
    { name: "Italy", currency: "EUR", code: "IT" },

    { name: "Jamaica", currency: "JMD", code: "JM" },
    { name: "Japan", currency: "JPY", code: "JP" },
    { name: "Jordan", currency: "JOD", code: "JO" },

    { name: "Kazakhstan", currency: "KZT", code: "KZ" },
    { name: "Kenya", currency: "KES", code: "KE" },
    { name: "Kiribati", currency: "AUD", code: "KI" },
    { name: "Kuwait", currency: "KWD", code: "KW" },
    { name: "Kyrgyzstan", currency: "KGS", code: "KG" },

    { name: "Laos", currency: "LAK", code: "LA" },
    { name: "Latvia", currency: "EUR", code: "LV" },
    { name: "Lebanon", currency: "LBP", code: "LB" },
    { name: "Lesotho", currency: "LSL", code: "LS" },
    { name: "Liberia", currency: "LRD", code: "LR" },
    { name: "Libya", currency: "LYD", code: "LY" },
    { name: "Liechtenstein", currency: "CHF", code: "LI" },
    { name: "Lithuania", currency: "EUR", code: "LT" },
    { name: "Luxembourg", currency: "EUR", code: "LU" },

    { name: "Madagascar", currency: "MGA", code: "MG" },
    { name: "Malawi", currency: "MWK", code: "MW" },
    { name: "Malaysia", currency: "MYR", code: "MY" },
    { name: "Maldives", currency: "MVR", code: "MV" },
    { name: "Mali", currency: "XOF", code: "ML" },
    { name: "Malta", currency: "EUR", code: "MT" },
    { name: "Marshall Islands", currency: "USD", code: "MH" },
    { name: "Mauritania", currency: "MRU", code: "MR" },
    { name: "Mauritius", currency: "MUR", code: "MU" },
    { name: "Mexico", currency: "MXN", code: "MX" },
    { name: "Micronesia", currency: "USD", code: "FM" },
    { name: "Moldova", currency: "MDL", code: "MD" },
    { name: "Monaco", currency: "EUR", code: "MC" },
    { name: "Mongolia", currency: "MNT", code: "MN" },
    { name: "Montenegro", currency: "EUR", code: "ME" },
    { name: "Morocco", currency: "MAD", code: "MA" },
    { name: "Mozambique", currency: "MZN", code: "MZ" },
    { name: "Myanmar", currency: "MMK", code: "MM" },

    { name: "Namibia", currency: "NAD", code: "NA" },
    { name: "Nauru", currency: "AUD", code: "NR" },
    { name: "Nepal", currency: "NPR", code: "NP" },
    { name: "Netherlands", currency: "EUR", code: "NL" },
    { name: "New Zealand", currency: "NZD", code: "NZ" },
    { name: "Nicaragua", currency: "NIO", code: "NI" },
    { name: "Niger", currency: "XOF", code: "NE" },
    { name: "Nigeria", currency: "NGN", code: "NG" },
    { name: "North Korea", currency: "KPW", code: "KP" },
    { name: "North Macedonia", currency: "MKD", code: "MK" },
    { name: "Norway", currency: "NOK", code: "NO" },

    { name: "Oman", currency: "OMR", code: "OM" },

    { name: "Pakistan", currency: "PKR", code: "PK" },
    { name: "Panama", currency: "PAB", code: "PA" },
    { name: "Papua New Guinea", currency: "PGK", code: "PG" },
    { name: "Paraguay", currency: "PYG", code: "PY" },
    { name: "Peru", currency: "PEN", code: "PE" },
    { name: "Philippines", currency: "PHP", code: "PH" },
    { name: "Poland", currency: "PLN", code: "PL" },
    { name: "Portugal", currency: "EUR", code: "PT" },

    { name: "Qatar", currency: "QAR", code: "QA" },

    { name: "Romania", currency: "RON", code: "RO" },
    { name: "Russia", currency: "RUB", code: "RU" },
    { name: "Rwanda", currency: "RWF", code: "RW" },

    { name: "Saint Kitts and Nevis", currency: "XCD", code: "KN" },
    { name: "Saint Lucia", currency: "XCD", code: "LC" },
    { name: "Saint Vincent and the Grenadines", currency: "XCD", code: "VC" },
    { name: "Samoa", currency: "WST", code: "WS" },
    { name: "San Marino", currency: "EUR", code: "SM" },
    { name: "Sao Tome and Principe", currency: "STN", code: "ST" },
    { name: "Saudi Arabia", currency: "SAR", code: "SA" },
    { name: "Senegal", currency: "XOF", code: "SN" },
    { name: "Serbia", currency: "RSD", code: "RS" },
    { name: "Seychelles", currency: "SCR", code: "SC" },
    { name: "Sierra Leone", currency: "SLE", code: "SL" },
    { name: "Singapore", currency: "SGD", code: "SG" },
    { name: "Slovakia", currency: "EUR", code: "SK" },
    { name: "Slovenia", currency: "EUR", code: "SI" },
    { name: "Solomon Islands", currency: "SBD", code: "SB" },
    { name: "Somalia", currency: "SOS", code: "SO" },
    { name: "South Africa", currency: "ZAR", code: "ZA" },
    { name: "South Korea", currency: "KRW", code: "KR" },
    { name: "South Sudan", currency: "SSP", code: "SS" },
    { name: "Spain", currency: "EUR", code: "ES" },
    { name: "Sri Lanka", currency: "LKR", code: "LK" },
    { name: "Sudan", currency: "SDG", code: "SD" },
    { name: "Suriname", currency: "SRD", code: "SR" },
    { name: "Sweden", currency: "SEK", code: "SE" },
    { name: "Switzerland", currency: "CHF", code: "CH" },
    { name: "Syria", currency: "SYP", code: "SY" },

    { name: "Taiwan", currency: "TWD", code: "TW" },
    { name: "Tajikistan", currency: "TJS", code: "TJ" },
    { name: "Tanzania", currency: "TZS", code: "TZ" },
    { name: "Thailand", currency: "THB", code: "TH" },
    { name: "Togo", currency: "XOF", code: "TG" },
    { name: "Tonga", currency: "TOP", code: "TO" },
    { name: "Trinidad and Tobago", currency: "TTD", code: "TT" },
    { name: "Tunisia", currency: "TND", code: "TN" },
    { name: "Turkey", currency: "TRY", code: "TR" },
    { name: "Turkmenistan", currency: "TMT", code: "TM" },
    { name: "Tuvalu", currency: "AUD", code: "TV" },

    { name: "Uganda", currency: "UGX", code: "UG" },
    { name: "Ukraine", currency: "UAH", code: "UA" },
    { name: "United Arab Emirates", currency: "AED", code: "AE" },
    { name: "United Kingdom", currency: "GBP", code: "GB" },
    { name: "United States", currency: "USD", code: "US" },
    { name: "Uruguay", currency: "UYU", code: "UY" },
    { name: "Uzbekistan", currency: "UZS", code: "UZ" },

    { name: "Vanuatu", currency: "VUV", code: "VU" },
    { name: "Vatican City", currency: "EUR", code: "VA" },
    { name: "Venezuela", currency: "VES", code: "VE" },
    { name: "Vietnam", currency: "VND", code: "VN" },

    { name: "Yemen", currency: "YER", code: "YE" },
    { name: "Zambia", currency: "ZMW", code: "ZM" },
    { name: "Zimbabwe", currency: "ZWL", code: "ZW" },
];
// save value
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");

const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

//function for dropdown
function fillDropdown(selectElement) {
    countries.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.currency;
        option.innerText = `${item.name} (${item.currency})`;
        option.setAttribute("data-country", item.code); // for flag
        selectElement.append(option);
    });
}

fillDropdown(fromCurrency);
fillDropdown(toCurrency);
//set value
fromCurrency.value = "USD";
toCurrency.value = "INR";

//updateFlag function
function updateFlag(selectElement, imgElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const countryCode = selectedOption.getAttribute("data-country");

    imgElement.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

updateFlag(fromCurrency, fromFlag);
updateFlag(toCurrency, toFlag);

//for change flag
fromCurrency.addEventListener("change", () => updateFlag(fromCurrency, fromFlag));
toCurrency.addEventListener("change", () => updateFlag(toCurrency, toFlag));

//async await function
async function convertCurrency() {
    let amt = amount.value;

    if (amt === "" || amt <= 0) {
        alert("Please enter valid amount");
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;
    // url
    const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;

    try {
        let res = await fetch(URL);
        let data = await res.json();

        if (data.result !== "success") {
            alert("API Error! Please check your API key or limits.");
            return;
        }

        let rate = data.conversion_rates[to];
        let finalAmount = (amt * rate).toFixed(2);

        result.value = `${finalAmount} ${to}`;
    } catch (error) {
        alert("Something went wrong!");
        console.log(error);
    }
}
//convert currency button event
convertBtn.addEventListener("click", convertCurrency);
