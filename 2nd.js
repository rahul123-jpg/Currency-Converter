const BASE_URL ="https://latest.currency-api.pages.dev/v1/currencies/inr.json"
const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button")
const fromcurr=document.querySelector(".from select")
const tocurr=document.querySelector(".to select")
for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
     if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
     select.append(newOption);
  }
    select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}
  const updateflag=(element)=>{
    let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
btn.addEventListener("click",async(evt)=>{
  evt.preventDefault();
  let ammount =document.querySelector(".ammount input")
  let ammntval=ammount.value;
  if(ammntval===""||ammntval<1){
    amntval=1;
    ammount.value="1";
  }
  const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data=await response.json();
  let rate=data[tocurr.value.toLowerCase()];
  console.log(rate)
})