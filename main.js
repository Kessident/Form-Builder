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
  let icon;
  if (obj.icon){
    icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add(obj.icon);}

  if (obj.options.length > 0){
    let optionsArray = obj.options;
    let selectEle = document.createElement("select");
    form.appendChild(selectEle);

    for (let j = 0; j < optionsArray.length; j++){
      let htmlContent = document.createElement("option");
      htmlContent.value = optionsArray[j].value;
      htmlContent.innerHTML = optionsArray[j].label;
      selectEle.appendChild(htmlContent);
    }
  }

  else if (obj.type === "textarea"){
    htmlContent = document.createElement("textarea");
    htmlContent.placeholder = obj.label;
    htmlContent.id = obj.id;
    form.appendChild(icon);
    form.appendChild(htmlContent);
  }
  else {
    htmlContent = document.createElement("input");
    htmlContent.type = obj.type;
    htmlContent.placeholder = obj.label;
    htmlContent.id = obj.id;
    form.appendChild(icon);
    form.appendChild(htmlContent);
  }
}
