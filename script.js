document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE NAVIGATION
       ================================ */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector("#site-nav");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const menuIsOpen =
                navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(menuIsOpen)
            );


            menuButton.textContent =
                menuIsOpen
                    ? "Close"
                    : "Menu";

        });

    }


    /* ================================
       DECK SEARCH
       ================================ */

    const searchInput =
        document.querySelector("#deck-search");

    const deckItems =
        document.querySelectorAll(
            "#deck-results li"
        );

    const noResults =
        document.querySelector("#no-results");


    if (searchInput && deckItems.length > 0) {

        searchInput.addEventListener(
            "input",
            () => {

                const searchTerm =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                let visibleDecks = 0;


                deckItems.forEach((item) => {

                    const link =
                        item.querySelector("a");


                    const searchableText =
                        link.dataset.search || "";


                    const matches =
                        searchableText
                            .toLowerCase()
                            .includes(searchTerm);


                    item.hidden = !matches;


                    if (matches) {
                        visibleDecks++;
                    }

                });


                if (noResults) {

                    noResults.hidden =
                        visibleDecks !== 0;

                }

            }
        );

    }


    /* ================================
       PREVENT SAMPLE DECK LINKS
       FROM RELOADING THE PAGE
       ================================ */

    document
        .querySelectorAll(
            '.deck-results a[href="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                }
            );

        });

});