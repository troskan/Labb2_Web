document.addEventListener("DOMContentLoaded", function () {
  fetch("/Data/resume-data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let userData = data[0];
      let contactData = userData.contact;
      let workData = userData.work;

      function insertData(data) {
        for (let key in data) {
          document.getElementById(key).textContent = data[key];
          console.log(key);
        }
      }
      console.log(workData);
      let counter = 1;
      const renderWork = () => {
        workData.forEach((element) => {
          counter++;
          console.log(element);
          const leftContainer = document.createElement("section");
          leftContainer.className = "left-side-container-2";
          leftContainer.innerHTML = `<h3>${element.company}</h3>
  <p><i style="color:grey;"class="fa-solid fa-wrench"></i> Snickare 2020 - </p>
  <p>
    ${element.description}
  </p>
  `;

          document.getElementById("left-container").appendChild(leftContainer);
        });
      };

      insertData(contactData);
      renderWork();
    });
});
