import { loadProducts } from './products.js';

const filtersWrapper = document.querySelector('.filters');

export function addFilter(products, name) {
    const attributesData = products
        .filter((p) => p.variation_attributes.find((vA) => vA.id === name))
        .map((p) => p.variation_attributes.find((vA) => vA.id === name).values);

    const parsedAttributes = !!attributesData.length
        ? attributesData
              .reduce((prev, current) => {
                  return prev.concat(current);
              })
              .filter(
                  (v, i, a) => a.findIndex((t) => t.value === v.value) === i
              )
        : [];

    const filter = document.createElement('div');
    filter.classList.add('filter');

    if (!!parsedAttributes.length) {
        filter.innerHTML = `<div class="main-field">
                            ${name[0].toUpperCase() + name.slice(1)}
                            <div class="arrow"></div>
                          </div>
                          <div class="values">
                            ${parsedAttributes
                                .map((a) => {
                                    return `<div class="item">
                                            <input type="checkbox" id="${a.value}" name="${a.value}" />
                                            <label for="${a.value}">${a.name} ${a.value}</label>
                                        </div>
                                        `;
                                })
                                .join('')}
                          </div>
                        `;

        filtersWrapper.appendChild(filter);
    }
}

export function filterProducts(products) {
    const filtersData = [];
    filtersWrapper.querySelectorAll('.filter').forEach((f) => {
        let checkboxData = [];
        const filterData = {
            name: f
                .querySelector('.main-field')
                .textContent.trim()
                .toLowerCase(),
        };
        const filterCheckBoxes = f.querySelectorAll('input[type="checkbox"]');
        filterCheckBoxes.forEach((c, i) => {
            c.addEventListener('change', (e) => {
                if (c.checked) {
                    checkboxData.push({ id: c.name });
                } else {
                    checkboxData = checkboxData.filter(
                        (item) => item.id !== c.name
                    );
                }

                filterData.checkboxes = checkboxData;

                if (
                    !filtersData.find(
                        (filter) => filter.name === filterData.name
                    )
                ) {
                    filtersData.push(filterData);
                }

                loadProducts(
                    products,
                    filtersData.filter((filter) => !!filter.checkboxes.length)
                );
            });
        });
    });
}
