const eventsContainers = [...document.querySelectorAll('.events-upcoming')];
const eventsNxtBtn = [...document.querySelectorAll('.events-nxt-btn')];
const eventsPreBtn = [...document.querySelectorAll('.events-pre-btn')];

eventsContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        eventsNxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
    
        eventsPreBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })

const ourTeamContainers = [...document.querySelectorAll('.our-team')];
const ourTeamNxtBtn = [...document.querySelectorAll('.our-team-nxt-btn')];
const ourTeamPreBtn = [...document.querySelectorAll('.our-team-pre-btn')];

ourTeamContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    ourTeamNxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    ourTeamPreBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

