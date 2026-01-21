fetch("data/updates.json")
  .then(response => response.json())
  .then(updates => {
    const container = document.getElementById("updates");

    updates.forEach(update => {
      const block = document.createElement("div");
      block.className = "update";

      block.innerHTML = `
        <h3>${update.title}</h3>
        <small>${update.date}</small>
        <p>${update.content}</p>
      `;

      container.appendChild(block);
    });
  });
