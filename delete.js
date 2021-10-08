//deleting h1 tag after button pressed
document.getElementById('delete-button').addEventListener('click', function (){
    document.getElementById('secret-info').style.display = 'none'
})


//
// document.getElementById('delete-confirm').addEventListener('focus', function (){
//     console.log('focus')
// })
//
// document.getElementById('delete-confirm').addEventListener('blur', function (){
//     console.log('blur')
// })
//
// document.getElementById('delete-confirm').addEventListener('keyup', function (){
//     console.log(document.getElementById('delete-confirm').value)
// })
//
// document.getElementById('delete-confirm').addEventListener('change', function (){
//     console.log(document.getElementById('delete-confirm').value)
// })


// checking if "delete" is typed in input field
document.getElementById('delete-confirm').addEventListener('keyup', function (event){
    console.log(event.target.value)
    if (event.target.value === 'delete'){
        document.getElementById('delete-button').removeAttribute('disabled')
    }
    else{
        document.getElementById('delete-button').setAttribute('disabled', true)
    }
})
