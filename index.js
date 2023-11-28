const names = ["Ana", "Barry", "Clint", "David", "Evelyn", "Fred"]
const prices = [40, 50, 60, 70] 
const occupations = ["doctor", "manager", "hero"]
const maxNames = 15;
const myfreelancers = [
    {
        name: "Slice",
        price: 25,
        occupation: "gardener",
    },
    {
        name: "Pressure",
        price: 51,
        occupation: "programmer",
    },
    {
        name: "Possibility",
        price: 41,
        occupation: "teacher",
    },
    

];

const addFreelancerInterval = setInterval(freelancerInterval, 3000)


// const AverageP = document.querySelector("#AverageP");
//     const AvgElement = myfreelancers.map((avgFreelancers) => {
//         const myelement = document.createElement("p");
//         myelement.append(`The average starting price is ${priceAverage()}`)
//         return myelement
//     })
// AverageP.replaceChildren(...AvgElement)

render();

function render() {
    const freelancers = document.querySelector("#freelancers");
    const freelancerElement = myfreelancers.map((freelancer) => {

        const element = document.createElement("li");
        element.append(`${freelancer.name}, $${freelancer.price}, ${freelancer.occupation}`)
        return element;

    })
    freelancers.replaceChildren(...freelancerElement)

    const AverageP = document.querySelector("#AverageP");
    AverageP.replaceChildren(`The average starting price is $${priceAverage()}`)
  
}

function freelancerInterval() {
    const name = names[Math.floor(Math.random() * names.length)]
    const price = prices[Math.floor(Math.random() * prices.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    myfreelancers.push({ name, price, occupation })

    

    render();

    if (myfreelancers.length >= maxNames) {
    clearInterval(addFreelancerInterval)
    }
  
}

function priceAverage() {
    const freelancersPrices = myfreelancers.map((freelancers) => {
       return freelancers.price
    })
    const sum = freelancersPrices.reduce((acc, price) => {
       acc = acc + price
       return acc
       
    }, 0)
    return Math.round(average = sum / myfreelancers.length)

}






