document.addEventListener("DOMContentLoaded", function () {
  fetch("../Data/resume-data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let userData = data[0];
      let contactData = userData.contact;
      let workData = userData.work;
      const eduData = userData.education;
      const skillsData = userData.skills;

      console.log(data, Response);
      function insertData(data) {
        for (let key in data) {
          document.getElementById(key).textContent = data[key];
          console.log(key);
        }
      }
      console.log(workData);
      let counter = 1;
      const renderSkills = () => {
        const rightContainer = document.createElement("ul");
        rightContainer.className = "right-side-container-4";
        rightContainer.innerHTML = "<h3>Egenskaper<h3>";

        const render = (element) => {
          rightContainer.innerHTML += `<li>${element}</li>`;
          console.log(element + " Hello from skills");
        };

        skillsData.map(render);
        document
          .getElementById("right-container-parent")
          .appendChild(rightContainer);
      };
      const renderEdu = () => {
        eduData.forEach((element) => {
          const rightContainer = document.createElement("section");
          rightContainer.className = "right-side-container-2";
          rightContainer.innerHTML = `          
            <p><h3><i class="fa-solid fa-building-columns"></i> ${element.name}</h3>
              ${element.institution} ${element.period}
            </p>
            <a target="_blank" href="https://campus.varberg.se/yrkeshogskola/systemutvecklare-net">Mer information</a>
          `;
          document
            .getElementById("right-container-parent")
            .appendChild(rightContainer);
        });
      };
      const renderWork = () => {
        workData.forEach((element) => {
          counter++;
          console.log(element);
          const leftContainer = document.createElement("section");
          leftContainer.className = "left-side-container-2";
          leftContainer.innerHTML = `<h3>${element.company}</h3>
  <p><i style="color:grey;"class="fa-solid fa-wrench"></i> ${element.role} </p>
  <p>
    ${element.description}
  </p>
  `;

          document.getElementById("left-container").appendChild(leftContainer);
        });
      };

      insertData(contactData);
      renderWork();
      renderEdu();
      renderSkills();
    });
});
