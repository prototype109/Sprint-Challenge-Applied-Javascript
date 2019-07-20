// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(tabData => {
        //console.log(tabData);
        tabData.data.topics.forEach(tabValue => {
            document.querySelector('.topics').appendChild(Tabs(tabValue));
        });
    }).catch(err => {
        console.log('something went wrong: ', err);
    });

function Tabs(tabValue){
    const tabHolder = document.createElement('div');
    tabHolder.classList.add('tab');
    tabHolder.textContent = tabValue;

    return tabHolder
}