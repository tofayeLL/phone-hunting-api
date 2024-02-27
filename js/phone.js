

const loadPhone = async (phoneName, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
   
}

const displayPhones = (phones, isShowAll) => {
    console.log(phones);
    // 1. get where we will append
    const phoneContainer = document.getElementById('phone-container');
    // clear this phone container div
    phoneContainer.textContent = '';
    
    // show all button
    const showAllContainer = document.getElementById('show-all-btn-container');

    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')  
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    console.log('is showall', isShowAll);
    // display only first 12 phones
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
    

    phones.forEach(phone => {
        console.log(phone);
        // 2. create a div
        const phoneCard = document.createElement('div'); 
        phoneCard.classList = `card bg-base-100 pt-6 shadow-xl `;
        // 3.set inner Html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body flex flex-col justify-center items-center space-y-2">
            <h2 class="card-title">${phone['phone_name']}</h2>
            <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">show details</button>
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
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText, isShowAll);
   
}

// handle search button 2
/* const handleSearch2 = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
    searchField.value = '';
   
} */

// handle show all button
const handleShowAll = ()=>{
    handleSearch(true);

}


// handle show detail
const handleShowDetail = async(id) =>{
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    console.log(data);
    

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













