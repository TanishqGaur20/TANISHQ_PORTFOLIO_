var timeline = gsap.timeline()

function body() {
    gsap.from('.fullPage', {
        opacity: 0,
        duration: 3,
        backgroundColor: 'black',
        delay: 2,
        ease: "power1.inOut"
    })
    gsap.from('.Intro', {
        opacity: 1,
        duration: 3, ease: "power1.inOut"
    })
    gsap.from('.Intro h1', {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    })
    timeline.from('.Intro', {
        duration: 3
    })
}

body()
function page1() {
    gsap.from('.NavName', {
        opacity: 0,
        y: -50,
        duration: 1,
    })
    gsap.from('.togglelabelDiv', {
        opacity: 0,
        y: -50,
        duration: 1,
    })
    gsap.from('.Links', {
        opacity: 0,
        y: -50,
        duration: 1,
    })
    gsap.from('.p1', {
        opacity: 0,
        y: -70,
        duration: 1,
    })
    gsap.from('.p2', {
        opacity: 0,
        y: -70,
        duration: 1,
    })
    gsap.from('.p3', {
        opacity: 0,
        y: -70,
        duration: 1,
    })
    gsap.from('.socialLinks', {
        opacity: 0,
        y: -70,
        duration: 1,
    })
    gsap.from('.rightImg', {
        opacity: 0,
        y: -150,
        duration: 1,
    })
}
page1();

function page2() {
    gsap.from('.AboutImg', {
        x: -200,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: '.AboutImg',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 50%',
            scrub: 2
        }
    })
    gsap.from('.About-Content', {
        x: 500,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: '.About-Content',
            scroller: 'body',
            start: 'top 60%',
            end: 'top 50%',
            scrub: 2
        }
    })
}
page2()

function page3() {
    timeline.from('.SkillH1', {
        x: -500,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: '.SkillH1',
            scroller: 'body',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 2
        }
    })
    timeline.from('.SKillLeftSubName', {
        y: 300,
        duration: 2,
        opacity: 0,
        stagger: .3,
        scrollTrigger: {
            trigger: '.SKillLeftSubName',
            scroller: 'body',
            start: 'top 100%',
            end: 'top 90%',
            scrub: 2
        }
    })
    timeline.from('.FlexClass', {
        y: 300,
        duration: 2,
        opacity: 0,
        stagger: .3,
        scrollTrigger: {
            trigger: '.FlexClass',
            scroller: 'body',
            start: 'top 100%',
            end: 'top 90%',
            scrub: 2
        }
    })


}
page3()

function page4() {
    timeline.from('.CertHead', {
        opacity: 0,
        duration: 1,
        x: -500,
        scrollTrigger: {
            trigger: '.CertHead',
            scroller: 'body',
            start: 'top 80%',
            end: 'top 60%',
            scrub: 2
        }
    })
    timeline.from('.All-Cards', {
        x: -500,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.All-Cards',
            scroller: 'body',
            start: 'top 90%',
            end: 'top 70%',
            scrub: 2,

        }
    })

}
page4()

function page5() {

    timeline.from('#ProjectHead', {
        opacity: 0,
        duration: 1,
        y: -150,
        scrollTrigger: {
            trigger: '#ProjectHead',
            scroller: 'body',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 2,
        }
    })
    timeline.from('.ColumnP1gsap', {
        opacity: 0,
        duration: 2,
        x: -900,
        delay: 1,
        scrollTrigger: {
            trigger: '.ColumnP1gsap',
            scroller: 'body',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 2,
            // markers: true
        }
    })

    timeline.from('.ColumnP2gsap', {
        opacity: 0,
        duration: 2,
        x: 900,
        delay: 1,
        scrollTrigger: {
            trigger: '.ColumnP2gsap',
            scroller: 'body',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 2,
        }
    })

}
page5()

function page6() {

    timeline.from('#ContactHead', {
        opacity: 0,
        duration: 1,
        y: -200,
        scrollTrigger: {
            trigger: '#ContactHead',
            scroller: 'body',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 2,
        }
    })

    timeline.from('#Contact div', {
        opacity: 0,
        duration: 1,
        x: -500,
        delay: 1,
        scrollTrigger: {
            trigger: '#Contact div',
            scroller: 'body',
            start: 'top 70%',
            end: 'top 50%',
            scrub: 2,
        }
    })
}
page6();
