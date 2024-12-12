//logic for our custom contact form
console.log('custom js form test...')
// businessAccount
//
//
//
//
//
//

//logic for our custom contact form
console.log('custom js form test...')
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const isBusinessAcct = document.querySelector('#businessAccount');
    const companyInfo = document.querySelector('#companyInfo');
    const contactReason = document.querySelector('#contactReason');
    const productNameField = document.querySelector('#productNameField');
    const orderNameField = document.querySelector('#orderNameField');

    console.log('isBusinessAcct:', isBusinessAcct);
    console.log('companyInfo:', companyInfo);
    console.log('contactReason:', contactReason);
    console.log('productNameField:', productNameField);
    console.log('orderNameField:', orderNameField);

    if (isBusinessAcct && companyInfo) {
        isBusinessAcct.addEventListener('change', (event) => {
            console.log('Checkbox changed. Checked:', event.target.checked);
            if (event.target.checked) {
                companyInfo.classList.remove('hidden-field');
            } else {
                companyInfo.classList.add('hidden-field');
            }
        });
    } else {
        console.error('Could not find businessAccount checkbox or companyInfo field');
    }

    contactReason.addEventListener('change', (event) => {
        console.log('reason changed', event.target.value);
        if (event.target.value === 'product') {
            productNameField.classList.remove('hidden-field');
        } else if (event.target.value === 'order') {
            orderNameField.classList.remove('hidden-field');
        } 
    });

});

