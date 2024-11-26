//logic for our custom contact form
console.log('custom js form...')
// businessAccount
//
//
//
//
//
//

document.addEventListener('DOMContentLoaded', () => {
    const isBusinessAcct = document.querySelector('#businessAccount');
    const companyName = document.querySelector('#companyName');
    // surrounding select element
    const contactReason = document.querySelector('#contactReason');
    
    isBusinessAcct.addEventListener('change', (event) => {
        if (event.target.checked) {
            companyName.classList.remove('disabled');
        } else {
            companyName.classList.add('disabled');
        }
    });
});

