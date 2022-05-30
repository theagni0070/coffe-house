function Check_out(){
    setTimeout(function(){
        alert("Your order is accepted")
    },0)

    Check_out2()
}

function Check_out2(){
    setTimeout(function(){
        alert("3 seconds : Your order is being Prepared")
    },4000)

    Check_out3()
}

function Check_out3(){
    setTimeout(function(){
        alert("8 seconds : Your order is being packed")
    },9000)

    Check_out4()
}

function Check_out4(){
    setTimeout(function(){
        alert("10 seconds : Your order is out for delivery")
    },16000)

    Check_out5()
}

function Check_out5(){
    setTimeout(function(){
        alert("12 seconds : Order delivered")
    },23000)
}