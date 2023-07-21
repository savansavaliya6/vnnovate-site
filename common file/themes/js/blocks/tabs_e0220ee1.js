const tabsBlocks = document.querySelectorAll('.tabs');


tabsBlocks.forEach((tabs) => {
  
  const btns = tabs.querySelectorAll('button')
  const panels = tabs.querySelectorAll('.tabs-panel')
  
  // CREATE AND PREPEND THE TABS NAV
  const tabsNav = document.createElement('div')
  tabsNav.classList.add('tabs-nav')
  tabs.prepend(tabsNav)

  const tabsNavScroll = document.createElement('div')
  tabsNavScroll.classList.add('tabs-nav-scroll')
  tabsNav.prepend(tabsNavScroll)


  // PREV ARROW
  const tabsNavPrev = document.createElement('button')
  const tabsNavPrevText = document.createElement('span')
  
  tabsNavPrev.classList.add('tabs-nav-arrow')
  tabsNavPrev.classList.add('tabs-nav-arrow--prev')  
  tabsNavPrev.classList.add('hidden')

  tabsNavPrevText.classList.add('sr-only')
  tabsNavPrevText.textContent += 'Previous'
  
  tabsNav.append(tabsNavPrev)
  tabsNavPrev.append(tabsNavPrevText)

  tabsNavPrev.addEventListener('click',  (e) => {
    tabsNavScroll.scrollBy({ left: -150, top: 0, behavior: 'smooth' })
  })

  // NEXT ARROW
  const tabsNavNext = document.createElement('button')
  const tabsNavNextText = document.createElement('span')
  
  tabsNavNext.classList.add('tabs-nav-arrow')
  tabsNavNext.classList.add('tabs-nav-arrow--next')
  tabsNavNext.classList.add('hidden')

  tabsNavNextText.classList.add('sr-only')
  tabsNavNextText.textContent += 'Next'

  tabsNav.append(tabsNavNext)
  tabsNavNext.append(tabsNavNextText)

  tabsNavNext.addEventListener('click',  (e) => {
    tabsNavScroll.scrollBy({ left: 150, top: 0, behavior: 'smooth' })
  })


  
  function checkNavOverflow() {

    const scrollable = tabsNavScroll.scrollWidth > tabsNavScroll.offsetWidth
    const scrollLeft = tabsNavScroll.scrollLeft
    const scrollEnd = tabsNavScroll.scrollWidth - tabsNavScroll.offsetWidth


    if (!scrollable) {
      tabsNavPrev.classList.add('hidden')
      tabsNavNext.classList.add('hidden')
    }    

    // if (scrollable) {      
    //   tabsNavNext.classList.remove('hidden')
    // }

    // HIDE SHOW/PREV
    if (scrollable && scrollLeft > 0) {
      tabsNavPrev.classList.remove('hidden')
    } else {
      tabsNavPrev.classList.add('hidden')
    }

    if (scrollable && scrollLeft != scrollEnd) {
      tabsNavNext.classList.remove('hidden')
    } else {
      tabsNavNext.classList.add('hidden')
    }


    console.log(tabsNavScroll.scrollWidth - tabsNavScroll.offsetWidth)    
  }

  // RUN FUNCTION ON LOAD WITH SLIGHT DELAY
  setTimeout(function() {
    checkNavOverflow()
  }, 500)

  // RUN FUNCTION ON RESIZE
  window.addEventListener('resize', checkNavOverflow)  

  tabsNavScroll.addEventListener('scroll', checkNavOverflow)  

  


  // SET THE DEFAULT BUTTON STATES AND APPEND TO TABS NAV
  btns.forEach((btn, index) => {                
    if(index == 0) {
      btn.setAttribute('aria-selected', 'true')
    } else {
      btn.setAttribute('aria-selected', 'false')      
    }    
    tabsNavScroll.append(btn)
  })

  // SET THE DEFAULT PANEL STATES
  panels.forEach((panel, index) => {
    if(index == 0) {
      panel.setAttribute('aria-hidden', 'false')
    } else {
      panel.setAttribute('aria-hidden', 'true')      
    }    
  })

  // TABS FUNCTIONALITY
  btns.forEach((btn) => {                

    btn.addEventListener('click', (e) => {

      // UPDATE BUTTON STATES
      btns.forEach((item) => {
        item.setAttribute('aria-selected', 'false')
      })
      btn.setAttribute('aria-selected', 'true')


      // UPDATE PANEL STATES
      const thisPanelID = btn.getAttribute('aria-controls')
      const thisPanel = document.getElementById(thisPanelID)            
      panels.forEach((panel) => {
        panel.setAttribute('aria-hidden', 'true')
      })      
      thisPanel.setAttribute('aria-hidden', 'false')                              
      

    })

  })

})