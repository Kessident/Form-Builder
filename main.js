var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


let form = document.getElementById("create-my-form");

for (let i = 0; i < formData.length; i++){
  let obj = formData[i];
  let htmlContent;
  if (obj.options.length > 0){

    let optionsArray = obj.options;
    htmlContent = '<select id="' + obj.id +  '"><option disabled>' + obj.label + '</option>';
    for (let j = 0; j < optionsArray.length; j++){
      console.log();
      htmlContent += '<option value="' + optionsArray[j].value + '">' + optionsArray[j].label + '</option>';
    }
    htmlContent += '</sselect>'
  }
  else if (obj.type === "textare"){
    htmlContent = '<input type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label + '\n\n">';
  }

  else {
    htmlContent = '<input type="' + obj.type + '" id="' + obj.id + '" placeholder="' + obj.label + '">';
  }
  form.insertAdjacentHTML("beforeend", htmlContent);
}






// let select = "<select><option disabled>Select language</option><option value=\"EN\">English</option><option value=\"FR\">French</option><option value=\"SP\">Spanish</option><option value=\"CH\">Chinese</option><option value=\"JP\">Japanese</option></select>"
//
// // form.insertAdjacentHTML("beforeend", '<i class="fa fa-user"></i>');
// form.insertAdjacentHTML("beforeend", '<input type="text" id="user-first-name" placeholder="First Name">');
// form.insertAdjacentHTML("beforeend", '<input type="text" id="user-last-name" placeholder="Last Name">');
// form.insertAdjacentHTML("beforeend", '<input type="email" id="user-email" placeholder="Email Address">');
// form.insertAdjacentHTML("beforeend", '<input type="text" id="user-website" placeholder="Current website url">');
// form.insertAdjacentHTML("beforeend", select);
//form.insertAdjacentHTML("beforeend", '<textarea form ="create-my-form" id="user-comments" placeholder="Your Comment">');
// form.insertAdjacentHTML("beforeend", '<input type="tel" id="user-mobile" placeholder="Mobile number">');
// form.insertAdjacentHTML("beforeend", '<input type="tel" id="user-phone" placeholder="Home number">');
