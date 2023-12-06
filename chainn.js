let headerh1 = document.querySelector('.page1-header h1')
let headerspans = document.querySelectorAll('.page1-header h1 span')
let cursor = document.querySelector('#cursor')
let cursorfruit = document.querySelector('.fruit-text')
let cursorfruith1s = document.querySelectorAll('.fruit-text h1')

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

window.addEventListener('mousemove',function(dets){
    gsap.to('#cursor',{
        top: dets.clientY,
        left: dets.clientX,
        duration: .4,
        ease: Expo
    })
    gsap.to(cursorfruit,{
        top: dets.clientY,
        left: dets.clientX,
        duration: .4,
        ease: Expo
    })
    gsap.to(cursorslidestext,{
        top: dets.clientY,
        left: dets.clientX,
        duration: .4,
        ease: Expo
    })
})

headerh1.addEventListener('mouseenter',function(){
    gsap.to(headerspans,{
        y: '-1em',
        duration: .3,
        stagger: 0.03
    })
})

headerh1.addEventListener('mouseleave',function(){
    gsap.to(headerspans,{
        y: '0em',
        duration: .3,
        stagger: 0.03
    })
})


let toggle = document.querySelector('.menu-toggle')
let lines = document.querySelector('.lines-wrapper')
let menu_text = document.querySelectorAll('.text-wrapper h5')


toggle.addEventListener('mouseenter',function(){
    lines.children[0].classList.add('hover')
    lines.children[1].classList.add('hover')
    lines.children[2].classList.add('hover')
    lines.children[3].classList.add('hover')
    lines.children[4].classList.add('hover')
    lines.children[5].classList.add('hover')
    menu_text.forEach(function(elem){
        gsap.to(elem,{
            y:'-19px',
            duration: .3,
            ease: Expo
        })
    })
    gsap.to(cursor,{
        scale: 0.5,
        duration: .3,
        ease: 'power4,inOut'
    })
})

toggle.addEventListener('mouseleave',function(){
    lines.children[0].classList.remove('hover')
    lines.children[1].classList.remove('hover')
    lines.children[2].classList.remove('hover')
    lines.children[3].classList.remove('hover')
    lines.children[4].classList.remove('hover')
    lines.children[5].classList.remove('hover')
    menu_text.forEach(function(elem){
        gsap.to(elem,{
            y:'0px',
            duration: .3,
            ease: Expo
        })
    })
    gsap.to(cursor,{
        scale: 1,
        duration: .3,
        ease: 'power4,inOut'
    })
})



let fullpagemenu = document.querySelector('.full-page-menu')

let menubutton = fullpagemenu.children[0].querySelector('.button')
let emailbtn = fullpagemenu.children[0].querySelector('.email')
let click_count = 0;


toggle.addEventListener('click',function(){
    if(click_count==0){
        gsap.to(menu_text[1],{
            opacity: 0,
            duration: .2,
            ease: 'power2.inOut',
            onComplete: function(){
                gsap.to(menu_text[1],{
                    innerHTML: '<h5>close</h5>',
                    duration: .01,
                    onComplete: function(){
                        gsap.to(menu_text[1],{
                            opacity: 1,
                            duration: .2,
                            ease: 'power2.inOut',
                        })
                    }
                })
            }
        })
        gsap.to(menubutton,{
            right: '2.5%',
            pointerEvents: 'all',
            duration: .5,
            delay: .3,
            ease: 'power1.inOut'
        })
        gsap.to(emailbtn,{
            right: '2.5%',
            pointerEvents: 'all',
            duration: .5,
            delay: .3,
            ease: 'power1.inOut'
        })
        gsap.to(fullpagemenu.children[0].children[0],{
            left: '0%',
            duration: .5,
            // delay: .1,
            pointerEvents: 'all',
            ease: 'power1.inOut'
        })
        gsap.to(fullpagemenu.children[0].children[1],{
            left: '30%',
            pointerEvents: 'all',
            duration: .5,
            delay: .2,
            ease: 'power1.inOut'
        })
        gsap.from('.link-wrap a',{
            y: '100',
            duration: .4,
            delay: .3,
            stagger: 0.05,
            opacity: 0,
            ease: 'power1.inOut'
        })
        gsap.to('.link-wrap a',{
            y: '0',
            duration: .4,
            delay: .4,
            stagger: 0.05,
            opacity: 1,
            ease: 'power1.inOut'
        })
        click_count=1
    }else{
        gsap.to(menu_text[1],{
            opacity: 0,
            duration: .2,
            ease: 'power2.inOut',
            onComplete: function(){
                gsap.to(menu_text[1],{
                    innerHTML: '<h5>open</h5>',
                    duration: .01,
                    onComplete: function(){
                        gsap.to(menu_text[1],{
                            opacity: 1,
                            duration: .2,
                            ease: 'power2.inOut',
                        })
                    }
                })
            }
        })
        gsap.to(fullpagemenu.children[0].children[0],{
            left: '-30%',
            duration: .5,
            delay: .2,
            pointerEvents: 'none',
            ease: 'power1.inOut'
        })
        gsap.to(menubutton,{
            right: '100%',
            pointerEvents: 'all',
            duration: .5,
            // delay: -.3,
            ease: 'power1.inOut'
        })
        gsap.to(emailbtn,{
            right: '100%',
            pointerEvents: 'all',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(fullpagemenu.children[0].children[1],{
            left: '-70%',
            duration: .5,
            delay: .1,
            pointerEvents: 'none',
            ease: 'power1.inOut'
        })
        gsap.to('.link-wrap a',{
            y: '100',
            duration: .3,
            stagger: 0.05,
            opacity: 0,
            ease: 'power1.inOut'
        })
        click_count=0
    }
})

let combtn = document.querySelectorAll('.com-btn')

combtn.forEach(function(btn){
    btn.addEventListener('mouseenter',function(){
        gsap.to(btn.children[0].children[0],{
            transform: 'rotate(0deg)',
            duration: .3,
            ease: Expo
        })
        gsap.to(btn.children[2].children[0],{
            transform: 'rotate(0deg)',
            duration: .3,
            ease: Expo
        })
        gsap.to(btn.children[0],{
            left: '0%',
            transform: 'translate(0%,-50%) scale(1)',
            transformOrigin: '0% 50%',
            duration: .25,
            // delay: .01,
            ease: 'power1.inOut'
        })
        gsap.to(btn.children[1],{
            left: '100%',
            transform: 'translate(-100%,-50%)',
            duration: .25,
            ease: 'power1.inOut'
        })
        gsap.to(btn.children[2],{
            scale: 0,
            transformOrigin: '100% 50%',
            duration: .25,
            ease: 'power1.inOut'
        })
        gsap.to(cursor,{
            scale: 0.5,
            duration: .3,
            ease: 'power4,inOut'
        })
    })
    btn.addEventListener('mouseleave',function(){
        gsap.to(btn.children[0].children[0],{
            transform: 'rotate(50deg)',
            duration: .3,
            ease: Expo
        })
        gsap.to(btn.children[2].children[0],{
            transform: 'rotate(50deg)',
            duration: .3,
            ease: Expo
        })
        gsap.to(btn.children[0],{
            left: '0%',
            transform: 'translate(0%,-50%) scale(0)',
            transformOrigin: '0% 50%',
            duration: .25,
            // delay: .1,
            ease: 'power1.inOut'
        })
        gsap.to(btn.children[1],{
            left: '0%',
            transform: 'translate(0%,-50%)',
            duration: .25,
            ease: 'power1.inOut'
        })
        gsap.to(btn.children[2],{
            scale: 1,
            transformOrigin: '100% 50%',
            duration: .25,
            ease: 'power1.inOut'
        })
        gsap.to(cursor,{
            scale: 1,
            duration: .3,
            ease: 'power4,inOut'
        })  
    })
})

let pagelinkwrap = document.querySelectorAll('.link-wrap')
let menuright = document.querySelector('.menu-right')
let parentlinkwrap = document.querySelector('.parent-link-wrap')

parentlinkwrap.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        scale: 7,
        duration: .4,
        ease:'power1.inOut'
    })
    gsap.to(cursorslidesh1s,{
        transform: 'translateY(0em)',
        opacity:1,
        duration: .3,
        delay: .2,
        ease:Expo
    })
})
parentlinkwrap.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        scale: 1,
        duration: .4,
        delay: .1,
        ease:'power1.inOut'
    })
    gsap.to(cursorslidesh1s,{
        transform: 'translateY(1em)',
        opacity:0,
        ease: Expo
    })
})

// menuright.addEventListener('mousemove',function(){
//     gsap.to(cursorslidesh1s,{
//         transform: 'translateY(1em)'
//     })
// })

pagelinkwrap.forEach(function(wrap){
    wrap.addEventListener('mouseenter',function(){
        gsap.to(wrap.children[0],{
            x: '1vw',
            color: '#0000006c',
            duration: .3,
            ease: Expo
        })
        gsap.to(wrap.children[1].children[0].children[0],{
            transform: 'rotate(0deg)',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(wrap.children[1].children[1].children[0],{
            transform: 'rotate(0deg)',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(wrap.children[1].children[0],{
            scale: 1,
            transformOrigin: '0% 100%',
            duration: .3,
            ease: 'power1.inOut'
        })
        gsap.to(wrap.children[1].children[1],{
            scale: 0,
            transformOrigin: '100% 0%',
            duration: .3,
            ease: 'power1.inOut'
        })
    })
    wrap.addEventListener('mouseleave',function(){
        gsap.to(wrap.children[0],{
            x: '0vw',
            color: '#1f2018',
            duration: .3,
            ease: Expo
        })
        gsap.to(wrap.children[1].children[0].children[0],{
            transform: 'rotate(50deg)',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(wrap.children[1].children[1].children[0],{
            transform: 'rotate(50deg)',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(wrap.children[1].children[0],{
            scale: 0,
            transformOrigin: '0% 100%',
            duration: .3,
            ease: 'power1.inOut'
        })
        gsap.to(wrap.children[1].children[1],{
            scale: 1,
            transformOrigin: '100% 0%',
            duration: .3,
            ease: 'power1.inOut'
        })
    })
})

let contentwraps  = document.querySelectorAll('.content-wrap')

let activecontent = document.querySelector('#content1')
let activeline = document.querySelector('#line1')
let check_line;
let checkimage;
let imagetoshow;
let bigimagetoshow;
let smallcircle = document.querySelector('.small-circle')
let bigcircle = document.querySelector('.big-circle')
let activeimage = smallcircle.children[0].querySelector('#image1');
let bigactiveimage = bigcircle.children[0].querySelector('#bigimage1');

let chain_animation = function(){
    contentwraps.forEach(function(wrap){
        wrap.addEventListener('mouseenter',function(){
            if(wrap.getAttribute('hover-check')!=activeimage.getAttribute('hover-check')){
                if(window.innerWidth<=567){
                    gsap.to(activecontent,{
                        opacity: 0.5,
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }else{
                    gsap.to(activecontent,{
                        scale: 0.85,
                        opacity: 0.5,
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }
                gsap.to(activeline,{
                    opacity: 0.3,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                gsap.to(activeimage,{
                    opacity: 0,
                    duration: .35,
                    ease: 'power1.inOut'
                })
                gsap.to(bigactiveimage,{
                    opacity: 0,
                    duration: .35,
                    ease: 'power1.inOut'
                })
                activecontent = wrap
                check_line = '#line'+activecontent.id.substring(7,activecontent.id.length)
                activeline = document.querySelector(`${check_line}`)
                checkimage = activecontent.id.substring(7,activecontent.id.length)
                imagetoshow = '#image'+checkimage
                bigimagetoshow = '#bigimage'+checkimage
                activeimage = smallcircle.children[0].querySelector(imagetoshow)
                bigactiveimage = bigcircle.children[0].querySelector(bigimagetoshow)
                if(window.innerWidth<=576){
                    gsap.to(activecontent,{
                        opacity: 1,
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }else{
                    gsap.to(activecontent,{
                        scale: 1,
                        opacity: 1,
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }
                gsap.to(activeline,{
                    opacity: 1,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                gsap.to(activeimage,{
                    opacity: 1,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                gsap.to(bigactiveimage,{
                    opacity: 1,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                if(checkimage==1){
                    gsap.to('.small-images-wrap',{
                        rotate: '0deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }else if(checkimage==2){
                    gsap.to('.small-images-wrap',{
                        rotate: '360deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }else if(checkimage==3){
                    gsap.to('.small-images-wrap',{
                        rotate: '270deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }else{
                    gsap.to('.small-images-wrap',{
                        rotate: '90deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }
                if(checkimage==1){
                    gsap.to('.big-images-wrap',{
                        rotate: '0deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }else if(checkimage==2){
                    gsap.to('.big-images-wrap',{
                        rotate: '-360deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }else if(checkimage==3){
                    gsap.to('.big-images-wrap',{
                        rotate: '-270deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }else{
                    gsap.to('.big-images-wrap',{
                        rotate: '-90deg',
                        duration: .5,
                        ease: 'power1.inOut'
                    })
                }
            }
        })
    })
}

chain_animation()

let fruitswrap = document.querySelector('.fruits-wrap')

fruitswrap.addEventListener('mouseenter',function(){
    gsap.to(cursorfruith1s,{
        transform: 'translateY(0em)',
        opacity: 1,
        duration: .4,
        delay: .2,
        stagger: 0.05,
        ease:'power1.inOut'
    })
})
fruitswrap.addEventListener('mouseleave',function(){
    gsap.to(cursorfruith1s,{
        opacity:0,
        transform: 'translateY(1em)',
        ease:'power1.inOut'
    })
})

let fruitconn = document.querySelectorAll('.fruits-wrap .container')

fruitconn.forEach(function(con){
    if(window.innerWidth>1050){
        con.addEventListener('mouseenter',function(){
            gsap.to(con.children[0],{
                height: '100%',
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to(con.children[0].children[0].children[0],{
                scale: 1.3,
                duration: .4,
                ease: 'power1.inOut',
            })
            gsap.to(con.children[1].children[1],{
                rotate: '0deg',
                duration: .4,
                opacity: 1,
                ease: 'power1.inOut'
            })
            gsap.to(cursor,{
                scale: 7,
                duration: .4,
                ease:'power1.inOut'
            })
        })
        con.addEventListener('mouseleave',function(){
            gsap.to(con.children[0],{
                height: '0%',
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to(con.children[0].children[0].children[0],{
                scale: 1,
                duration: .4,
                ease: 'power1.inOut',
            })
            gsap.to(con.children[1].children[1],{
                rotate: '50deg',
                opacity: 1,
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to(cursor,{
                scale: 1,
                duration: .4,
                ease:'power1.inOut'
            })
        })
    }
})

let vim = document.querySelector('.video-image-wrap')

vim.addEventListener('mouseenter',function(){
    gsap.to(vim.children[0],{
        opacity: 0.5,
        duration: .4,
        ease: 'power1.inOut'
    })
    gsap.to(vim.children[1],{
        scale: 1.2,
        duration: .4,
        ease: 'power1.inOut'
    })
})

vim.addEventListener('mouseleave',function(){
    gsap.to(vim.children[0],{
        opacity: 0.8,
        duration: .4,
        ease: 'power1.inOut'
    })
    gsap.to(vim.children[1],{
        scale: 1,
        duration: .4,
        ease: 'power1.inOut'
    })
})

let slidearrows = document.querySelectorAll('.slide-arrow')

slidearrows.forEach(function(arr){
    arr.addEventListener('mouseenter',function(){
        if(arr.id=='prev'){
            gsap.to(arr.children[0].children[0],{
                scale: 0,
                transformOrigin: '0% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
            gsap.to(arr.children[0].children[1],{
                scale: 1,
                transformOrigin: '100% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
        }else if(arr.id=='next'){
            gsap.to(arr.children[0].children[0],{
                scale: 0,
                transformOrigin: '100% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
            gsap.to(arr.children[0].children[1],{
                scale: 1,
                transformOrigin: '0% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
        }
    })
    arr.addEventListener('mouseleave',function(){
        if(arr.id=='prev'){
            gsap.to(arr.children[0].children[0],{
                scale: 1,
                transformOrigin: '0% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
            gsap.to(arr.children[0].children[1],{
                scale: 0,
                transformOrigin: '100% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
        }else if(arr.id=='next'){
            gsap.to(arr.children[0].children[0],{
                scale: 1,
                transformOrigin: '100% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
            gsap.to(arr.children[0].children[1],{
                scale: 0,
                transformOrigin: '0% 50%',
                duration: .3,
                ease: 'power1.inOut'
            })
        }
    })
})

let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let slideactive = 1;
let moveleft;
let animating=false;
let sliwrap = document.querySelector('.slider-wrap')
let slides = document.querySelectorAll('.slider-wrap .slide')


if(window.innerWidth>1050){
    prev.addEventListener('click',function(){
        if(animating==false){
            animating=true
            count=0
            slides.forEach(function(sli){
                count+=1
                gsap.to(sli,{
                    x: '+=32vw',
                    // duration: .5,
                    ease: 'power1.inOut',
                    onComplete: function(){
                        if(count==5){
                            animating=false 
                        }
                    }
                })
            })
            slideactive-=1
        }
    
        if(slideactive<2){
            gsap.to(prev,{
                scale: 0,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
        if(slideactive<5){
            gsap.to(next,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
    })
    next.addEventListener('click',function(){
        if(animating==false){
            animating=true
            count=0
            slides.forEach(function(sli){
                count+=1
                gsap.to(sli,{
                    x: '-=32vw',
                    // duration: .5,
                    ease: 'power1.inOut',
                    onComplete: function(){
                        if(count==5){
                            animating=false
            
                        }
                    }
                })
            })
            slideactive+=1
        }
        
        if(slideactive>=2){
            gsap.to(prev,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
        if(slideactive==5){
            gsap.to(next,{
                scale: 0,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
    })
}else if(window.innerWidth<=1050){
    prev.addEventListener('click',function(){
        if(animating==false){
            animating=true
            count=0
            slides.forEach(function(sli){
                count+=1
                gsap.to(sli,{
                    x: '+=36vw',
                    // duration: .5,
                    ease: 'power1.inOut',
                    onComplete: function(){
                        if(count==5){
                            animating=false 
                        }
                    }
                })
            })
            slideactive-=1
        }
    
        if(slideactive<2){
            gsap.to(prev,{
                scale: 0,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
        if(slideactive<5){
            gsap.to(next,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
    })
    next.addEventListener('click',function(){
        if(animating==false){
            animating=true
            count=0
            slides.forEach(function(sli){
                count+=1
                gsap.to(sli,{
                    x: '-=36vw',
                    // duration: .5,
                    ease: 'power1.inOut',
                    onComplete: function(){
                        if(count==5){
                            animating=false
            
                        }
                    }
                })
            })
            slideactive+=1
        }
        
        if(slideactive>=2){
            gsap.to(prev,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
        if(slideactive==5){
            gsap.to(next,{
                scale: 0,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
    })
}


let cursorslidestext = document.querySelector('.cursor-slide-text')
let cursorslidesh1s = document.querySelector('.cursor-slide-text h1')

slides.forEach(function(sli){
    sli.addEventListener('mouseenter',function(){
        gsap.to(sli.children[0].children[0],{
            scale: 1.1,
            filter: 'grayScale(200%)',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(sli.children[0],{
            borderRadius: '57%',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(sli.children[1],{
            y: '1vw',
            color: '#d68b5d',
            duration: .4,
            ease: 'power1.inOut'
        })
       
    })
    sli.addEventListener('mouseleave',function(){
        gsap.to(sli.children[0].children[0],{
            scale: 1,
            filter: 'grayScale(0%)',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(sli.children[0],{
            borderRadius: '3%',
            duration: .4,
            ease: 'power1.inOut'
        })
        gsap.to(sli.children[1],{
            y: '0vw',
            color: '#dbdbdb',
            duration: .4,
            ease: 'power1.inOut'
        })
    })
})

let allbuttons = document.querySelectorAll('.button')

allbuttons.forEach(function(btn){
    btn.addEventListener('mouseenter',function(){
        gsap.to(cursor,{
            scale: 0.5,
            duration: .3,
            ease: 'power4,inOut'
        })
    })
    btn.addEventListener('mouseleave',function(){
        gsap.to(cursor,{
            scale: 1,
            duration: .3,
            ease: 'power4,inOut'
        })
    })
})



let membersmallcircles = document.querySelectorAll('.member')
let activesupplyimage = document.querySelector('#member1')
let activesupplysmallimage = document.querySelector('#mfimage1')
let activesupplybigimage = document.querySelector('#mbimage1')
let memberbackcircle = document.querySelector('.mbimages-wrap')
let memberfrontcircle = document.querySelector('.mfimages-wrap')
let blur = document.querySelector('.blur-wrap')
let infocontent = document.querySelector('.info-content')
let activesupplycontent = infocontent.children[0]
activesupplycontent.classList.add('active')


let supplyanimation = function(){
    membersmallcircles.forEach(function(m){
        m.addEventListener('mouseenter',function(){
            if(activesupplyimage.id!==m.id){
                gsap.to(activesupplyimage,{
                    filter: 'grayScale(100%)',
                    boxShadow: '2px 2px 20px 0.1px #fff',
                    scale: 0.8,
                    duration: .2,
                    ease: 'power4.inOut'
                })
                activesupplyimage = m
                gsap.to(activesupplyimage,{
                    filter: 'grayScale(0%)',
                    boxShadow: '2px 2px 20px 0.1px #a7d397ff',
                    scale: 1,
                    duration: .2,
                    ease: 'power4.inOut'
                })
                gsap.to(activesupplysmallimage,{
                    opacity:0,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                gsap.to(activesupplybigimage,{
                    opacity:0,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                membercheck = m.id.substring(6,7)-1
                activesupplysmallimage = memberfrontcircle.children[membercheck]
                activesupplybigimage = memberbackcircle.children[membercheck]
                activesupplycontent.classList.remove('active')
                activesupplycontent = infocontent.children[membercheck]
                activesupplycontent.classList.add('active')
                gsap.to(activesupplysmallimage,{
                    opacity:1,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                gsap.to(activesupplybigimage,{
                    opacity:0.3,
                    duration: .4,
                    ease: 'power1.inOut'
                })
                if(membercheck==0){
                    gsap.to(memberbackcircle,{
                        rotate: '0deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                    gsap.to(memberfrontcircle,{
                        rotate: '0deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }else if(membercheck==1){
                    gsap.to(memberbackcircle,{
                        rotate: '-60deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                    gsap.to(memberfrontcircle,{
                        rotate: '60deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }else if(membercheck==2){
                    gsap.to(memberbackcircle,{
                        rotate: '-120deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                    gsap.to(memberfrontcircle,{
                        rotate: '120deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }else if(membercheck==3){
                    gsap.to(memberbackcircle,{
                        rotate: '-180deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                    gsap.to(memberfrontcircle,{
                        rotate: '180deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }else if(membercheck==4){
                    gsap.to(memberbackcircle,{
                        rotate: '-240deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                    gsap.to(memberfrontcircle,{
                        rotate: '240deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }else{
                    gsap.to(memberbackcircle,{
                        rotate: '-360deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                    gsap.to(memberfrontcircle,{
                        rotate: '360deg',
                        duration: .4,
                        ease: 'power1.inOut'
                    })
                }
            }
        })
    })
}

supplyanimation()


let fruitnext = document.querySelector('#next2')
let fruitprev = document.querySelector('#prev2')
let fruitslideactive = 0;

let responsiveXMove='=46.5vw';

if(window.innerWidth <= 576){
    responsiveXMove ='=91vw'
}

fruitnext.addEventListener('click',function(){
    if(animating==false){
        animating=true
        count=0
        fruitconn.forEach(function(con){
            count+=1
            gsap.to(con,{
                x: `-${responsiveXMove}`,
                ease: 'power1.inOut',
                onComplete: function(){
                    if(count==3){
                        animating=false;
                    }
                }
            })
        })
        fruitslideactive+=1
    }

    if(window.innerWidth>576){
        if(fruitslideactive>=1){
            gsap.to(fruitprev,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to(fruitnext,{
                scale: 0,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to('.bar',{
                width: '100%',
                duration: .5,
                ease: 'power1.inOut'
            })
        }else{
            gsap.to('.bar',{
                width: '50%',
                duration: .5,
                ease: 'power1.inOut'
            })
        }
    }else{
        if(fruitslideactive>=1){
            gsap.to(fruitprev,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
            if(fruitslideactive===2){
                gsap.to(fruitnext,{
                    scale: 0,
                    transformOrigin: '50% 50%',
                    duration: .4,
                    ease: 'power1.inOut'
                })
                gsap.to('.bar',{
                    width: '100%',
                    duration: .5,
                    ease: 'power1.inOut'
                })
            }else{
                gsap.to('.bar',{
                    width: '66%',
                    duration: .5,
                    ease: 'power1.inOut'
                })
            }
        }else{
            gsap.to('.bar',{
                width: '33%',
                duration: .5,
                ease: 'power1.inOut'
            })
        }
    }
})

fruitprev.addEventListener('click',function(){
    if(animating==false){
        animating=true
        count=0
        fruitconn.forEach(function(con){
            count+=1
            gsap.to(con,{
                x: `+${responsiveXMove}`,
                ease: 'power1.inOut',
                onComplete: function(){
                    if(count==3){
                        animating=false
                    }
                }
            })
        })
        fruitslideactive-=1
    }

    if(window.innerWidth>576){
        if(fruitslideactive<1){
            gsap.to(fruitprev,{
                scale: 0,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to(fruitnext,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to('.bar',{
                width: '50%',
                duration: .5,
                ease: 'power1.inOut'
            })
        }else{
            gsap.to('.bar',{
                width: '100%',
                duration: .5,
                ease: 'power1.inOut'
            })
        }
    }else{
        if(fruitslideactive<1){
            gsap.to(fruitprev,{
                scale: 0,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
            gsap.to('.bar',{
                width: '33%',
                duration: .5,
                ease: 'power1.inOut'
            })
        }else if(fruitslideactive<2){
            if(fruitslideactive==1){
                gsap.to('.bar',{
                    width: '66%',
                    duration: .5,
                    ease: 'power1.inOut'
                })
            }
            gsap.to(fruitnext,{
                scale: 1,
                transformOrigin: '50% 50%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
    }
})

let floatanimation = function(){
    if(window.innerWidth>1050){
        gsap.to('.float',{
            y: '-40vh',
            ease: 'power1.inOut',
            scrollTrigger: {
                start: '-200%',
                end: '80%',
                scrub: 2,
                trigger: '.float',
                scroller: 'body',
                // markers: true
            }
        })
    }else{
        gsap.to('.float',{
            y: '-30vh',
            ease: 'power1.inOut',
            scrollTrigger: {
                start: '-350%',
                end: '300%',
                scrub: 2,
                trigger: '.float',
                scroller: 'body',
                // markers: true
            }
        })
    }
}

floatanimation()

let footerh1 = document.querySelector('.foot-left h1')

footerh1.addEventListener('mouseenter',function(){
    gsap.to('.foot-left h1 span',{
        y: '-1em',
        duration: .3,
        ease:'power1.inOut',
        stagger: 0.03
    })
})

footerh1.addEventListener('mouseleave',function(){
    gsap.to('.foot-left h1 span',{
        y: '0em',
        duration: .3,
        ease:'power1.inOut',
        stagger: 0.03
    })
})

let page10atags = document.querySelectorAll('.page10 a')

page10atags.forEach(function(a){
    a.addEventListener('mouseenter',function(){
        gsap.to(cursor,{
            scale: 0.5,
            duration: .4,
            ease:'power1.inOut'
        })
    })
    a.addEventListener('mouseleave',function(){
        gsap.to(cursor,{
            scale: 1,
            duration: .4,
            ease:'power1.inOut'
        })
    })
})

let entrancesvgs = document.querySelectorAll('.entrancesvgs .svg')
let svgindex = 0;
let svgdelay =  0.9;

let entrance = function(){
    gsap.to(headerspans,{
        y: '-1em',
        duration: .3,
        delay: .4,
        stagger: 0.03
    })
    gsap.to(headerspans,{
        y: '0em',
        duration: .3,
        stagger: 0.03,
        delay: 3.4,
    })
    let svgchange =  function(){
        gsap.to(entrancesvgs[svgindex],{
            opacity: 1,
            duration: 0.3,
            delay: svgdelay,
            onComplete: function(){
                gsap.to(entrancesvgs[svgindex],{
                    opacity: 0,
                    duration: 0.1,
                })
                svgdelay = 0;
                svgindex+=1
                if(svgindex<=5){
                    svgchange()
                }
            }
        })
    }
    svgchange()
    gsap.to('.entrance',{
        opacity: 0,
        ease: 'power1.inOut',
        duration: .6,
        delay: 4
    })
    gsap.from('.page1-header h1',{
        top: 'calc(50vh - 6vh - 19.5px)',
        scale: 3.5,
        opacity: 1,
        ease: 'power1.inOut',
        duration: .6,
        delay: 4,
        onComplete: function(){
            gsap.to('.page1-header h1',{
                zIndex: 900,
                pointerEvents: 'all'
            })
        }
    })
}
entrance()


let page7 = function(){
    gsap.to('.page7-back',{
        width: '40vw',
        scale: 0.6,
        transformOrigin: '50% 0%',
        scrollTrigger:{
            scroller: 'body',
            trigger: '.page7-back',
            start: '10%',
            end: '100%',
            // markers: true,
            scrub: 2
        }
    })
}

page7()

let circlet = function(){
    let ctext = document.querySelector('#ctext')
    // let circletext = document.querySelector('.circle-text')

    ctext.innerHTML = ctext.textContent.replace(/\S/g,'<span>$&</span>');
    let ele = ctext.querySelectorAll('span');
    for(var i=1 ; ele.length ; i++){
        ele[i].style.transform='rotate('+i*6.6+'deg)';
    }
}

circlet()

