var count=0;



document.querySelector('.decrease').addEventListener('click',decrease)
document.querySelector('.reset').addEventListener('click',reset)
document.querySelector('.increase').addEventListener('click',increase)



function decrease(){
    count-=1
    updateUI()
}


function reset(){
    count=0
    updateUI()
}


function increase(){
    count+=1
    updateUI()
}

function updateUI(){
    var counter=document.querySelector('.count')
    if(count<0){
        counter.style.color='red'
    }
    else if(count>0){
        counter.style.color='green'
    }
    else{
        counter.style.color='rgb(16,42,66)'
    }
    counter.textContent=count
}