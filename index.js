dropdown = document.querySelector('.drop')
dropdown1 = document.querySelector('.drop1')
dropdown2 = document.querySelector('.drop2')
dropdown3 = document.querySelector('.drop3')
prod = document.querySelector('.prod')
prod1 = document.querySelector('.prod1')
prod2 = document.querySelector('.prod2')
prod3 = document.querySelector('.prod3')
bg = document.querySelector('.bg')
list = document.querySelector('.bi-list1')
sidebar1 = document.querySelector('.sidebar')

function drop1(){
    if(dropdown.style.display === 'flex'){
        dropdown.style.display = 'none'
        prod.style.backgroundColor = 'initial'
        document.querySelector('.imgdark').style.display ='none'
    }
    else{
        dropdown.style.display = 'flex'
        document.querySelector('.img').style.backgroundColor ='black'
        document.querySelector('.imgdark').style.display ='block'
        dropdown1.style.display = 'none'
        dropdown2.style.display = 'none'
        dropdown3.style.display = 'none'
        prod.style.backgroundColor = 'rgb(244,244,246)'
        prod1.style.backgroundColor = 'initial'
        prod2.style.backgroundColor = 'initial'
        prod3.style.backgroundColor ='initial'
    }
}
function drop2(){
    if(dropdown1.style.display === 'flex'){
        dropdown1.style.display = 'none'
        prod1.style.backgroundColor = 'initial'
        document.querySelector('.imgdark').style.display ='none'
    }
    else{
        dropdown1.style.display = 'flex'
        dropdown2.style.display = 'none'
        dropdown.style.display = 'none'
        dropdown3.style.display = 'none'
        prod1.style.backgroundColor = 'rgb(244,244,246)'
        prod.style.backgroundColor = 'initial'
        prod2.style.backgroundColor = 'initial'
        document.querySelector('.imgdark').style.display ='block'
    }
}
function drop3(){
    if(dropdown2.style.display === 'flex'){
        dropdown2.style.display = 'none'
        prod2.style.backgroundColor = 'initial'
        document.querySelector('.imgdark').style.display ='none'
    }
    else{
        dropdown.style.display = 'none'
        dropdown1.style.display = 'none'
        dropdown2.style.display = 'flex'
        dropdown3.style.display = 'none'
        prod.style.backgroundColor = 'initial'
        prod1.style.backgroundColor = 'initial'
        prod3.style.backgroundColor='initial'
        prod2.style.backgroundColor = 'rgb(244,244,246)'
        document.querySelector('.imgdark').style.display ='block'
    }
}
function drop4(){
    if(dropdown3.style.display === 'flex'){
        dropdown3.style.display = 'none'
        prod3.style.backgroundColor = 'initial'
        document.querySelector('.imgdark').style.display ='none'
    }
    else{
        dropdown3.style.display = 'flex'
        dropdown.style.display = 'none'
        dropdown1.style.display ='none'
        dropdown2.style.display = 'none'
        prod.style.backgroundColor = 'initial'
        prod1.style.backgroundColor = 'initial'
        prod2.style.backgroundColor = 'initial'
        prod3.style.backgroundColor = 'rgb(244,244,246)'
        document.querySelector('.imgdark').style.display ='block'
    }
}
function sidebar(){
    sidebar1.style.display = 'flex'
    sidebar1.style.width = '80%'
    sidebar1.style.padding = '15px 25px'
    sidebar1.style.paddingBottom = '30px'
    document.querySelector('.imgdark').style.display ='block'
}
function sidebarclose(){
    sidebar1.style.width = '0'
    sidebar1.style.padding = '0'
    document.querySelector('.imgdark').style.display ='none'
}
drop5 = document.querySelector('.drop5')
drop6 = document.querySelector('.drop6')
drop7 = document.querySelector('.drop7')
drop8 = document.querySelector('.drop8')

function down(){
    if(drop5.style.display === 'flex'){
        drop5.style.display = 'none'
    }
    else{
        drop5.style.display = 'flex'
        drop7.style.display = 'none'
        drop6.style.display = 'none'
        drop8.style.display = 'none'
    }
}
function down1(){
    if(drop6.style.display === 'flex'){
        drop6.style.display = 'none'
    }
    else{
        drop6.style.display = 'flex'
        drop7.style.display = 'none'
        drop8.style.display = 'none'
        drop5.style.display = 'none'
    }
}
function down2(){
    if(drop7.style.display === 'flex'){
        drop7.style.display = 'none'
    }
    else{
        drop7.style.display = 'flex'
        drop8.style.display = 'none'
        drop6.style.display = 'none'
        drop5.style.display = 'none'
    }
}
function down3(){
    if(drop8.style.display === 'flex'){
        drop8.style.display = 'none'
    }
    else{
        drop8.style.display = 'flex'
        drop7.style.display = 'none'
        drop6.style.display = 'none'
        drop5.style.display = 'none'
    }
}