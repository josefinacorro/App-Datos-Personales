const jsonData = ` [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]`;
const data = JSON.parse(jsonData);
console.log(data)

let bgColors = [
	'hsl(15, 100%, 70%)',
	'hsl(195, 74%, 62%)',
	'hsl(348, 100%, 68%)',
	'hsl(145, 58%, 55%)',
	'hsl(264, 64%, 52%)',
	'hsl(43, 84%, 65%)',
];

let dailyArray = data.map(item => item.timeframes.daily)
let weeklyArray = data.map(item => item.timeframes.weekly)
let monthlyArray = data.map(item => item.timeframes.monthly)

console.log(dailyArray)
console.log(weeklyArray)
console.log(monthlyArray)

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

drawElements(dailyArray)

dailyBtn.addEventListener('click',()=>{
	drawElements(dailyArray)
})

weeklyBtn.addEventListener('click',()=>{
	drawElements(weeklyArray)
})

monthlyBtn.addEventListener('click',()=>{
	drawElements(monthlyArray)
})

function drawElements(array){
	secondSection.innerHTML = '';
	array.forEach( (element, index) =>{
	//	console.log(element)

	let title = data[index].title;
	let titleLowerCase = title.toLocaleLowerCase()

	if(titleLowerCase == 'self care'){
		titleLowerCase = 'self-care'
	}

		secondSection.innerHTML += `
		<div class="card">
	        <div class="card__background" style="background-color: ${bgColors[index]};">
	          <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
	        </div>
	        <div class="card__details">
		        <div class="card__activity">
		            <p class="card__title">${data[index].title}</p>
		            <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three dots">
		        </div>
		        <div class="card__time">
		            <p class="card__hour">${element.current}hrs</p>
		            <p class="card__previous">Previous - ${element.previous}hrs</p>
		        </div>
		    </div>
	    </div>`
	});
}