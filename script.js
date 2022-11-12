function transformBlock(OutContianer, InContainer, containerHeight) {
    if (OutContianer.offsetWidth < 1440 & OutContianer.offsetWidth > 768) {
        let transform = OutContianer.offsetWidth / InContainer.offsetWidth;
        let height = transform * containerHeight

        OutContianer.style.cssText = `
              transform:scale(${transform});
              transform-origin: top left;
              height: ${height}px; 
          `
    } else {
        OutContianer.style.cssText = ` 
      `
    }

    window.addEventListener('resize', () => {

        if (OutContianer.offsetWidth < 1440 & OutContianer.offsetWidth > 768) {
            let transform = OutContianer.offsetWidth / InContainer.offsetWidth;
            let height = transform * containerHeight

            OutContianer.style.cssText = `
                  transform:scale(${transform});
                  transform-origin: top left;
                  height: ${height}px; 
              `
        } else {
            OutContianer.style.cssText = ` 
          `
        }
    })

}

// block 2
const block2Container = document.querySelector(".shipping2022-block2-container");
const block2 = document.querySelector(".shipping2022-block2");
const block2Height = 919;

transformBlock(block2Container, block2, block2Height);

// block 2.5
const block2_5Container = document.querySelector(".shipping2022-block2_5-container");
const block2_5 = document.querySelector(".shipping2022-block2_5");
const block2_5Height = 964;

transformBlock(block2_5Container, block2_5, block2_5Height);

// block 3
const block3Container = document.querySelector(".shipping2022-block3-container");
const block3 = document.querySelector(".shipping2022-block3");
const block3Height = 2211;

transformBlock(block3Container, block3, block3Height);

// block 3.5
const block3_5Container = document.querySelector(".shipping2022-block3_5-container");
const block3_5 = document.querySelector(".shipping2022-block3_5");
const block3_5Height = 2008;

transformBlock(block3_5Container, block3_5, block3_5Height);

// block 5
const block5Container = document.querySelector(".shipping2022-block5-container");
const block5 = document.querySelector(".shipping2022-block5");
const block5Height = 797;

transformBlock(block5Container, block5, block5Height);

// block 6
const block6Container = document.querySelector(".shipping2022-block6-container");
const block6 = document.querySelector(".shipping2022-block6");
const block6Height = 285;

transformBlock(block6Container, block6, block6Height);

// FAQ block
const FAQbutton = document.querySelectorAll(".shipping2022-block4-2-1-1");
const FAQcontent = document.querySelectorAll(".shipping2022-block4-2-1-2");
const FAQans = document.querySelectorAll(".shipping2022-block4-2-1-2-ans");
const FAQarrow = document.querySelectorAll(".shipping2022-block4-2-1-1-button");

for (let i = 0; i < FAQbutton.length; i++) {
    FAQbutton[i].addEventListener('click', () => {
        if (FAQbutton[i].classList.contains("FAQclose")) {
            let height = FAQans[i].offsetHeight
    
            FAQbutton[i].style.cssText = ` height: 60px`
            FAQcontent[i].style.cssText = ` height: ${height}px`
            FAQarrow[i].style.cssText = `  transform: rotate(180deg); `
    
            FAQbutton[i].classList.remove("FAQclose")
        } else {
            FAQbutton[i].style.cssText = ``
            FAQcontent[i].style.cssText = ``
            FAQarrow[i].style.cssText = ``
    
            FAQbutton[i].classList.add("FAQclose")
        }
    })
}


