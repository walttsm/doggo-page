


const BREED_URL = "https://dog.ceo/api/breeds/list/all";


const doggos = document.querySelector(".doggos");
const selector = document.querySelector(".selector");

const loadingImg = document.createElement("img");
loadingImg.src = "https://cdn.dribbble.com/users/1142616/screenshots/5310753/loading-dog.gif";
loadingImg.width = 200;

getBreeds();

function addNewDoggo() {
  
  doggos.appendChild(loadingImg);
  const promise = fetch(dogURL());
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.removeChild(loadingImg);
      doggos.appendChild(img);
    });
}

function getBreeds() {
  const promise = fetch(BREED_URL);
  promise
    .then(function (response) {
      const breedList = response.json();
      return breedList;
    })
    .then(function (processedResponse) {
      const dogBreedList = processedResponse.message;
      const breedList = Object.keys(dogBreedList);
      for (let i in breedList) {
        let option = document.createElement("option");
        option.text = breedList[i];
        option.value = breedList[i];
        selector.appendChild(option);
      }
    })

}

function dogURL(){
  if (selector.value !== "") {
    DOG_URL = "https://dog.ceo/api/breed/" + selector.value + "/images/random";
  }
  else {
    DOG_URL = "https://dog.ceo/api/breeds/image/random";
  }
  console.log(DOG_URL);
  return DOG_URL;
}





document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

