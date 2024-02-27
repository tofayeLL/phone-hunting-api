

const loadPhone = async (phoneName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = (phones) => {
    console.log(phones);
    // 1. get where we will append
    const phoneContainer = document.getElementById('phone-container');
    // clear this phone container div
    phoneContainer.textContent = '';

    phones.forEach(phone => {
        console.log(phone);
        // 2. create a div
        const phoneCard = document.createElement('div'); 
        phoneCard.classList = `card bg-base-100 p-4 shadow-xl`;
        // 3.set inner Html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone['phone_name']}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        
        `
        // 4.append child
        phoneContainer.appendChild(phoneCard);
    })
}




// handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
    
}













