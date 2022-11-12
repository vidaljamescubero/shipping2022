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

// block 3
const block3Container = document.querySelector(".shipping2022-block3-container");
const block3 = document.querySelector(".shipping2022-block3");
const block3Height = 2211;

transformBlock(block3Container, block3, block3Height);