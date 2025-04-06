const profiles = [
    {
      name: "Ritika",
      age: 34,
      tagline: "Warm, thoughtful and loves poetry",
      location: "Vishakhapatnam, Andhra Pradesh",
      avatar: "https://i.pravatar.cc/150?img=47",
      description: "A grounded and creative soul, Ritika enjoys calm evenings, soulful music and meaningful conversations.",
      hobbies: [
        { title: "Poetry", description: "Writes and recites Hindi and Urdu verses during open mic nights" },
        { title: "Badminton", description: "Plays recreationally with friends every weekend" },
        { title: "Spirituality", description: "Practices meditation and reads spiritual literature regularly" },
        { title: "Long Walks", description: "Enjoys early morning walks in city parks" }
      ]
    },
    {
      name: "Sneha",
      age: 31,
      tagline: "Spiritual, grounded and ready for her next chapter",
      location: "Mumbai, Maharashtra",
      avatar: "https://i.pravatar.cc/150?img=48",
      description: "Sneha is rooted in values, loves connecting with people and believes in lifelong learning.",
      hobbies: [
        { title: "Volunteering", description: "Active in local community kitchens and NGO events" },
        { title: "Classical Music", description: "Learns Hindustani vocals from a private tutor" },
        { title: "Reading", description: "Avid reader of spiritual biographies and memoirs" }
      ]
    },
    {
      name: "Pavithra",
      age: 35,
      tagline: "Loves long walks, strategy games and filter coffee",
      location: "Bangalore, Karnataka",
      avatar: "https://i.pravatar.cc/150?img=49",
      description: "An introverted extrovert who enjoys deep conversations, nature and slow living.",
      hobbies: [
        { title: "Road Trips", description: "Often escapes on spontaneous weekend drives to the hills" },
        { title: "Filter Coffee", description: "A self-proclaimed connoisseur who brews her own every morning" },
        { title: "Board Games", description: "Hosts monthly strategy game nights with close friends" }
      ]
    }
  ];
  
  const container = document.getElementById('profile-container');
  
  profiles.forEach(profile => {
    const card = document.createElement('div');
    card.className = 'cursor-pointer border-2 rounded-xl border-[#c37055] bg-white shadow hover:shadow-md transition';
    card.onclick = () => openModal(profile.avatar);
  
    card.innerHTML = `
      <!-- Section 1 -->
      <div class="bg-[#fdf8f4] p-4 flex items-center gap-4 rounded-t-xl">
        <img src="${profile.avatar}" class="w-16 h-16 rounded-full border" alt="${profile.name}">
        <div>
          <h3 class="text-lg font-semibold">${profile.name}, ${profile.age}</h3>
        </div>
      </div>
      <div class="bg-[#f7e7d2] h-3 w-full"></div>
  
      <!-- Section 2 -->
      <div class="bg-[#fdf8f4] px-4 py-3 space-y-2">
        ${profile.hobbies.map((hobby, idx) => `
          <div class="py-1 ${idx !== profile.hobbies.length - 1 ? 'border-b border-[#e7c8b2]' : ''}">
            <p class="font-medium">${hobby.title}</p>
            <p class="text-sm text-gray-600">${hobby.description}</p>
          </div>
        `).join('')}
      </div>
      <div class="bg-[#f7e7d2] h-3 w-full"></div>
  
      <!-- Section 3 -->
      <div class="bg-[#fdf8f4] px-4 py-4 space-y-1 rounded-b-xl">
        <p class="text-sm text-gray-700">${profile.location}</p>
        <p class="font-semibold">${profile.tagline}</p>
        <p class="text-sm text-gray-600">${profile.description}</p>
      </div>
    `;
  
    container.appendChild(card);
  });
  
  // Modal functions
  function openModal(avatarUrl) {
    document.getElementById('modal-avatar').src = avatarUrl;
    document.getElementById('profile-modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('profile-modal').classList.add('hidden');
  }
  