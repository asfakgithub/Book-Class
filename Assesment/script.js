const classAvailability = [
    {
      className: "Yoga",
      availability: [
        { day: "monday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
        { day: "tuesday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
        { day: "wednesday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
        { day: "thursday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
        { day: "friday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
        { day: "saturday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
        { day: "sunday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
      ]
    },
    {
        className: "Boxing",
        availability: [
          { day: "monday", slots: ["11: AM", "1:00 PM", "5:00 PM"] },
          { day: "tuesday", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] },
          { day: "thursday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "friday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "saturday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
          { day: "sunday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
        ]
      },
      {
        className: "karate",
        availability: [
          { day: "monday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "wednesday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
          { day: "thursday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "friday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "saturday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
        ]
      },
      {
        className: "Kung-Fu",
        availability: [
          { day: "monday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "tuesday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "thursday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "friday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "sunday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
        ]
      },
      {
        className: "Kick-Boxing",
        availability: [
          { day: "monday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "tuesday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "wednesday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
          { day: "friday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "saturday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
        ]
      },
      {
        className: "Ti-conda",
        availability: [
          { day: "tuesday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "wednesday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
          { day: "thursday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "saturday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
          { day: "sunday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
        ]
      },
      {
        className: "Squats",
        availability: [
          { day: "monday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "tuesday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "thursday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
          { day: "friday", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
          { day: "sunday", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
        ]
      }
  ];
  
  function searchClasses() {
    const className = document.getElementById("class-name").value;
    const day = document.getElementById("day").value;
  
    const availabilityDiv = document.getElementById("availability");
    availabilityDiv.innerHTML = "<h2>Availability:</h2>";
  
    const classObj = classAvailability.find((obj) => obj.className === className);
    if (!classObj) {
      availabilityDiv.innerHTML += "<p>No classes found.</p>";
      return;
    }
  
    const dayObj = classObj.availability.find((obj) => obj.day === day);
    if (!dayObj) {
      availabilityDiv.innerHTML += "<p>No classes found on the selected day.</p>";
      return;
    }
  
    const slots = dayObj.slots;
    if (slots.length === 0) {
      availabilityDiv.innerHTML += "<p>No slots available on the selected day.</p>";
      return;
    }
  
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.innerHTML = "<h3>" + className + " on " + day + "</h3>";
  
    const slotsList = document.createElement("ul");
    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i];
      const li = document.createElement("li");
      li.textContent = slot;
      slotsList.appendChild(li);
    }
  
    dayDiv.appendChild(slotsList);
    availabilityDiv.appendChild(dayDiv);
  }
  
  function resetSearch() {
    document.getElementById("class-name").value = "";
    document.getElementById("day").value = "monday";
    document.getElementById("availability").innerHTML = "";
  }
  
  document.getElementById("search-btn").addEventListener("click", searchClasses);
  document.getElementById("reset-btn").addEventListener("click", resetSearch);
  