

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
    
    // show all button
    const showAllContainer = document.getElementById('show-all-btn-container');

    if(phones.length > 12){
        showAllContainer.classList.remove('hidden')  
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    
    // display only first 12 phones
    phones = phones.slice(0,12);

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
    });
    

    // hidden loading spinner
    toggleLoadingSpinner(false);
}




// handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
    
}

// handle search button 2
const handleSearch2 = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
    searchField.value = '';
   
}


// loading spinner
const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
    loadingSpinner.classList.add('hidden');
    }
   
}













