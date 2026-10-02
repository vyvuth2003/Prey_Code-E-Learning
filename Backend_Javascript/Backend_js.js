
//    fetch api component 
const rows = document.querySelector('.row');

async function fetchAPI() {
    if (!rows) {
        console.error('Container with class="row" was not found.');
        return;
    }

    rows.textContent = "Data loading...";

    try {
        const res = await fetch("https://api-code-language.onrender.com/languages");
        const data = await res.json();

        if (data.length === 0) {
            rows.innerHTML = `
                <p class="text-center">No languages found.</p>
            `;
            return;
        }

        // 1. Build the HTML string in memory (single DOM update)
        const cardsHTML = data.map((val, index) => `
            <div data-aos="fade-up" data-aos-delay="${(index % 4) * 100}" class="col-lg-3 col-md-12 my-2">
                <div class="card my-2 w-100 h-100">
                    <div class="card-img-top overflow-hidden h-50">
                        <img
                            src="${val.image}" 
                            width="100%" 
                            height="100%"
                            class="object-fit-cover"
                            alt="${val.name}"
                        />
                    </div>
                    <div class="card-body">
                        <h1 class="fs-3 text-center">${val.name}</h1>
                        <p>${val.description}</p>
                        <button class="btn btn-danger text-capitalize text-light fw-semibold mt-5 mb-0">visit course</button>
                    </div>
                </div>
            </div>
        `).join('');

        rows.innerHTML = cardsHTML;

            if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }

    } catch (error) {
        console.error("Failed to load apps:", error);
        rows.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    Unable to load apps. Please try again later.
                </div>
            </div>
        `;
    }
}

fetchAPI();


// fetch api of microsoft app 
const rowa = document.getElementById("rows");

async function mroFetch() {
    if (!rowa) {
        console.error('Container with id="rows" was not found.');
        return;
    }

    rowa.textContent = "Languages loading...";

    try {
        const response = await fetch(
            "https://microsoftapp-h96u.onrender.com/microsoftApp"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const datas = await response.json();

        if (!Array.isArray(datas)) {
            throw new Error("Expected an array from the API.");
        }

        rowa.textContent = "";

        datas.forEach((va, index) => {
            const column = document.createElement("div");
            column.className = "col-lg-4 col-md-12 my-2";

            column.setAttribute("data-aos", "fade-up");
            column.setAttribute("data-aos-anchor-placement", "center-center");
            
            column.setAttribute("data-aos-delay", `${(index % 3) * 100}`);

            column.innerHTML = `
                <div class="card w-100 h-100">
                    <div class="card-img-top overflow-hidden">
                        <img
                            alt="not found"
                            width="100%"
                            height="100%"
                            class="object-fit-cover"
                        />
                    </div>
                    <div class="card-body">
                        <h3 class="text-center fs-3 text-capitalize"></h3>
                        <p></p>
                        <a href="" class="btn btn-primary text-capitalize text-light fw-semibold mt-5 mb-0">visit course</a>
                    </div>
                </div>
            `;

            column.querySelector("img").src = va.images ?? "";
            column.querySelector("h3").textContent = va.title ?? "";
            column.querySelector("p").textContent = va.description ?? "";

            rowa.appendChild(column);
        });

        if (datas.length === 0) {
            rowa.textContent = "No apps found.";
        } else {
            if (typeof AOS !== "undefined") {
                AOS.refresh();
            }
        }
    } catch (error) {
        console.error("Failed to load apps:", error);
        rowa.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    Unable to load apps. Please try again later.
                </div>
            </div>
        `;
    }
}

mroFetch();