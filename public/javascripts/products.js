export function loadProducts(products, filters) {
    const productsWrapper = document.querySelector('.products');
    productsWrapper.innerHTML = '';
    products
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .filter((p) => {
            if (!filters) {
                return p;
            }
            const isMatchArr = [];
            filters.forEach((filter) => {
                isMatchArr.push(
                    !!p.variants.find((v) =>
                        filter.checkboxes.find(
                            (c) => c.id === v.variation_values[filter.name]
                        )
                    )
                );
            });
            return !isMatchArr.includes(false);
        })
        .forEach((p) => {
            const el = document.createElement('div');
            el.classList.add('item');
            el.innerHTML = `
                        <img src="/images/${
                            p.image_groups.filter(
                                (g) => g.view_type === 'medium'
                            )[0].images[0].link
                        }" />
                        <p>${p.name}</p>
                        <p>
                            $${
                                !!p.price_max
                                    ? `<strike>${p.price_max}</strike> ${p.price}`
                                    : `${p.price}`
                            }
                        </p>
                    `;
            productsWrapper.appendChild(el);
        });
}
