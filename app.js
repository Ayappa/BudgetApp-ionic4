const reason=document.querySelector('#reason');
const amount=document.querySelector('#amount');
const cancel=document.querySelector('#cancel');
const add=document.querySelector('#add');
const expenselist=document.querySelector('#expenses-list');
const total=document.querySelector('#totalExpense');
const alertctl = document.querySelector('ion-alert-controller');
 var totalExpense=0;
const clear=()=>{
    reason.value="";
    amount.value="";
}

add.addEventListener('click',()=>{
   
    const reasonValue=reason.value;
    var amountValue=+amount.value;
  
    if(
        reasonValue.trim().length<=0 ||
        amountValue<=0
    ){
        alertctl.create({
            message:'enter valid details',header :'invalid',buttons:['ok']
        })
            .then(alertele=>{alertele.present();
            });
        return;
    }else{
        console.log(reasonValue);
        console.log(amountValue);
     const newItem=document.createElement('ion-item');
     newItem.textContent=reasonValue + ' : $'+ amountValue;
     expenselist.appendChild(newItem);
     clear();
     totalExpense =totalExpense + amountValue;
     total.textContent=totalExpense;
    }
})

cancel.addEventListener('click',clear);