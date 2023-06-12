const button = document.getElementById("button-convert");
const select = document.getElementById("current-select");
const select1 = document.getElementById("current-select1");

const convertValues = async () => {
    const inputReals = document.getElementById("input-reals").value;
    const currencyRealText = document.getElementById("currency-real-text");
    const currenyValue = document.getElementById("currency-value");

    const data = await fetch(
        "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
    ).then((response) => response.json());

    const dollar = data.USDBRL.high;
    const euro = data.EURBRL.high;
    const bitcoin = data.BTCBRL.high;

    currencyRealText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReals);

    if (select.value === "US$ Dólar americano") {
        currenyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReals / dollar);
    }

    if (select.value === "€ Euro") {
        currenyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReals / euro);
    }

    if (select.value === "₿ Bitcoin") {
        currenyValue.innerHTML = `₿ ${parseFloat(inputReals / bitcoin).toFixed(
            5
        )}`;
    }

    if (select1.value === "US$ Dólar americano") {
        currencyRealText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReals);
    }

    if (select1.value === "€ Euro") {
        currencyRealText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReals);
    }

    if (select1.value === "₿ Bitcoin") {
        currencyRealText.innerHTML = `₿ ${parseFloat(inputReals).toFixed(5)}`;
    }

    if (
        select1.value === "US$ Dólar americano" &&
        select.value === "US$ Dólar americano"
    ) {
        currenyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReals);
    }

    if (select1.value === "US$ Dólar americano" && select.value === "€ Euro") {
        currenyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReals * euro);
    }

    if (
        select1.value === "US$ Dólar americano" &&
        select.value === "₿ Bitcoin"
    ) {
        currenyValue.innerHTML = `₿ ${parseFloat(inputReals * bitcoin).toFixed(
            5
        )}`;
    }

    if (
        select1.value === "US$ Dólar americano" &&
        select.value === "R$ Real brasileiro"
    ) {
        currenyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputReals * dollar);
    }

    if (select1.value === "€ Euro" && select.value === "€ Euro") {
        currenyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReals);
    }

    if (select1.value === "€ Euro" && select.value === "US$ Dólar americano") {
        currenyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReals * dollar);
    }

    if (select1.value === "€ Euro" && select.value === "₿ Bitcoin") {
        currenyValue.innerHTML = `₿ ${parseFloat(inputReals * bitcoin).toFixed(
            5
        )}`;
    }

    if (select1.value === "€ Euro" && select.value === "R$ Real brasileiro") {
        currenyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputReals * euro);
    }

    if (select1.value === "₿ Bitcoin" && select.value === "₿ Bitcoin") {
        currenyValue.innerHTML = `₿ ${parseFloat(inputReals).toFixed(5)}`;
    }

    if (
        select1.value === "₿ Bitcoin" &&
        select.value === "US$ Dólar americano"
    ) {
        currenyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReals * (bitcoin / dollar));
    }
    if (select1.value === "₿ Bitcoin" && select.value === "€ Euro") {
        currenyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReals * (bitcoin / euro));
    }

    if (
        select1.value === "₿ Bitcoin" &&
        select.value === "R$ Real brasileiro"
    ) {
        currenyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputReals * bitcoin);
    }

    if (
        select1.value === "R$ Real brasileiro" &&
        select.value === "R$ Real brasileiro"
    ) {
        currenyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputReals);
    }
};

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano";
        currencyImg.src = "./assets/estados-unidos.png";
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.png";
    }

    if (select.value === "R$ Real brasileiro") {
        currencyName.innerHTML = "Real";
        currencyImg.src = "./assets/brasil.png";
    }
    convertValues();
};

changeCurrency1 = () => {
    const currencyName = document.querySelector("#text-currency");
    const currencyImage = document.querySelector("#flag1");

    if (select1.value === "R$ Real brasileiro") {
        currencyName.innerHTML = "Real";
        currencyImage.src = "./assets/brasil.png";
    }

    if (select1.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/estados-unidos.png";
    }

    if (select1.value === "€ Euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (select1.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }
    convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
select1.addEventListener("change", changeCurrency1);
