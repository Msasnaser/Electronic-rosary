const rosary = [
    {
        description: 'سبحان الله',
        counter: 0,
    },
    {
        description: 'الحمدلله',
        counter: 0,
    },
    {
        description: 'لا إله إلا الله',
        counter: 0,
    },
    {
        description:'استغفر الله العظيم',
        counter: 0,
    },
];

const startButton = document.querySelectorAll('.startButton');
const endButton = document.querySelector('.reset');
let span =  document.querySelectorAll('button span');
for(let i = 0; i <rosary.length ; i++){
    startButton[i].onclick= () => {
      span[i].textContent = rosary[i].counter++;
    }
}

endButton.onclick=()=>{
    for(let i = 0; i <rosary.length ; i++){
        rosary[i].counter=0;
        span[i].textContent =0;
    }
}
