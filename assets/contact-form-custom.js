//logic for our custom contact form
console.log("custom form test...");

//logic for our custom contact form

document.addEventListener("DOMContentLoaded", () => {
  const isBusinessAcct = document.querySelector("#businessAccount");
  const companyInfo = document.querySelector("#companyInfo");
  const contactReason = document.querySelector("#contactReason");
  const productNameField = document.querySelector("#productNameField");
  const orderNameField = document.querySelector("#orderNameField");

  console.log("isBusinessAcct:", isBusinessAcct);
  console.log("companyInfo:", companyInfo);
  console.log("contactReason:", contactReason);
  console.log("productNameField:", productNameField);
  console.log("orderNameField:", orderNameField);

  if (isBusinessAcct && companyInfo) {
    isBusinessAcct.addEventListener("change", (event) => {
      // console.log('Checkbox changed. Checked:', event.target.checked);
      if (event.target.checked) {
        companyInfo.classList.remove("hidden-field");
      } else {
        companyInfo.classList.add("hidden-field");
      }
    });
  } else {
  }

  contactReason.addEventListener("change", (event) => {
    // console.log('reason changed', event.target.value);

    productNameField.classList.add("hidden-field");
    orderNumberField.classList.add("hidden-field");

    if (event.target.value === "product") {
      productNameField.classList.remove("hidden-field");
    } else if (event.target.value === "order") {
      orderNumberField.classList.remove("hidden-field");
    }
  });
});
