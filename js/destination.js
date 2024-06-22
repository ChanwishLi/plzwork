document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle the left button click event
    function handleLeftClick() {
        console.log("Left button clicked");
        // Add your code to handle the left button click event here
        const activeGroup = document.querySelector('.card-group[data-status="active"]');
        let newIndex = parseInt(activeGroup.dataset.index) - 1;
        if (newIndex < 0) {
            newIndex = document.querySelectorAll('.card-group').length - 1;
        }
        switchGroup(newIndex);
    }

    // Function to handle the right button click event
    function handleRightClick() {
        console.log("Right button clicked");
        // Add your code to handle the right button click event here
        const activeGroup = document.querySelector('.card-group[data-status="active"]');
        let newIndex = parseInt(activeGroup.dataset.index) + 1;
        if (newIndex >= document.querySelectorAll('.card-group').length) {
            newIndex = 0;
        }
        switchGroup(newIndex);
    }

    // Function to switch the active group
    function switchGroup(newIndex) {
        const groups = document.querySelectorAll('.card-group');
        groups.forEach(group => {
            group.dataset.status = 'unknown';
        });
        const newActiveGroup = document.querySelector(`.card-group[data-index="${newIndex}"]`);
        newActiveGroup.dataset.status = 'active';

        const texts = document.querySelectorAll('.container');
        texts.forEach(text => {
            text.dataset.status = 'unknown';
        });
        const newActiveText = document.querySelector(`.container[data-index-texts="${newIndex}"]`);
        newActiveText.dataset.status = 'active';
    }

    // Attach the event handlers to the buttons
    document.getElementById('left').addEventListener('click', handleLeftClick);
    document.getElementById('right').addEventListener('click', handleRightClick);

    document.getElementById("check").onclick = function() {
        document.getElementById("all1").style.display = "none";
        document.getElementById("textall0").style.display = "none";
        document.getElementById("textall1").style.display = "block"; 
    };

    document.querySelectorAll('.flag1[data-index="1"]').forEach(flag => {
        flag.addEventListener('click', () => {
            document.getElementById("textall1").style.display = "none";
            document.getElementById("textall2EN").style.display = "block";
        });
    });

    document.querySelectorAll('.flag1[data-index="2"]').forEach(flag => {
        flag.addEventListener('click', () => {
            document.getElementById("textall1").style.display = "none";
            document.getElementById("textall2CN").style.display = "block";
        });
    });

    document.querySelectorAll('.flag1[data-index="3"]').forEach(flag => {
        flag.addEventListener('click', () => {
            document.getElementById("textall1").style.display = "none";
            document.getElementById("textall2TH").style.display = "block";
        });
    });
    
    document.querySelector('#CARD1').addEventListener('mouseover', () => {
        document.querySelector('#CARD2').classList.add('hidden');
        document.querySelector('#CARD3').classList.add('hidden');
        const hoverImagesContainer = document.querySelector('#hoverImagesContainer');
        const hoverImagesContainer2 = document.querySelector('#hoverImagesContainer2');
        hoverImagesContainer.style.opacity = '1';
        hoverImagesContainer.style.visibility = 'visible';
        hoverImagesContainer2.style.opacity = '1';
        hoverImagesContainer2.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer .image-row').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer2 .image-row2').classList.add('slide-down');
    });

    document.querySelector('#CARD1').addEventListener('mouseout', () => {
        document.querySelector('#CARD2').classList.remove('hidden');
        document.querySelector('#CARD3').classList.remove('hidden');
        const hoverImagesContainer = document.querySelector('#hoverImagesContainer');
        const hoverImagesContainer2 = document.querySelector('#hoverImagesContainer2');
        hoverImagesContainer.style.opacity = '0';
        hoverImagesContainer.style.visibility = 'hidden';
        hoverImagesContainer2.style.opacity = '0';
        hoverImagesContainer2.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer .image-row').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer2 .image-row2').classList.remove('slide-down');
    });

    document.querySelector('#CARD3').addEventListener('mouseover', () => {
        document.querySelector('#CARD1').classList.add('hidden');
        document.querySelector('#CARD2').classList.add('hidden');
        const hoverImagesContainer3 = document.querySelector('#hoverImagesContainer3');
        const hoverImagesContainer4 = document.querySelector('#hoverImagesContainer4');
        hoverImagesContainer3.style.opacity = '1';
        hoverImagesContainer3.style.visibility = 'visible';
        hoverImagesContainer4.style.opacity = '1';
        hoverImagesContainer4.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer3 .image-row3').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer4 .image-row4').classList.add('slide-down');
    });

    document.querySelector('#CARD3').addEventListener('mouseout', () => {
        document.querySelector('#CARD2').classList.remove('hidden');
        document.querySelector('#CARD1').classList.remove('hidden');
        const hoverImagesContainer3 = document.querySelector('#hoverImagesContainer3');
        const hoverImagesContainer4 = document.querySelector('#hoverImagesContainer4');
        hoverImagesContainer3.style.opacity = '0';
        hoverImagesContainer3.style.visibility = 'hidden';
        hoverImagesContainer4.style.opacity = '0';
        hoverImagesContainer4.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer3 .image-row3').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer4 .image-row4').classList.remove('slide-down');
    });


    document.querySelector('#CARD2').addEventListener('mouseover', () => {
        document.querySelector('#CARD1').classList.add('hidden');
        document.querySelector('#CARD3').classList.add('hidden');
        const hoverImagesContainer5 = document.querySelector('#hoverImagesContainer5');
        const hoverImagesContainer6 = document.querySelector('#hoverImagesContainer6');
        hoverImagesContainer5.style.opacity = '1';
        hoverImagesContainer5.style.visibility = 'visible';
        hoverImagesContainer6.style.opacity = '1';
        hoverImagesContainer6.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer5 .image-row5').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer6 .image-row6').classList.add('slide-down');
    });

    document.querySelector('#CARD2').addEventListener('mouseout', () => {
        document.querySelector('#CARD3').classList.remove('hidden');
        document.querySelector('#CARD1').classList.remove('hidden');
        const hoverImagesContainer5 = document.querySelector('#hoverImagesContainer5');
        const hoverImagesContainer6 = document.querySelector('#hoverImagesContainer6');
        hoverImagesContainer5.style.opacity = '0';
        hoverImagesContainer5.style.visibility = 'hidden';
        hoverImagesContainer6.style.opacity = '0';
        hoverImagesContainer6.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer5 .image-row5').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer6 .image-row6').classList.remove('slide-down');
    });

    document.querySelector('#CARD4').addEventListener('mouseover', () => {
        document.querySelector('#CARD5').classList.add('hidden');
        document.querySelector('#CARD6').classList.add('hidden');
        const hoverImagesContainer = document.querySelector('#hoverImagesContainer');
        const hoverImagesContainer2 = document.querySelector('#hoverImagesContainer2');
        hoverImagesContainer.style.opacity = '1';
        hoverImagesContainer.style.visibility = 'visible';
        hoverImagesContainer2.style.opacity = '1';
        hoverImagesContainer2.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer .image-row').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer2 .image-row2').classList.add('slide-down');
    });

    document.querySelector('#CARD4').addEventListener('mouseout', () => {
        document.querySelector('#CARD5').classList.remove('hidden');
        document.querySelector('#CARD6').classList.remove('hidden');
        const hoverImagesContainer = document.querySelector('#hoverImagesContainer');
        const hoverImagesContainer2 = document.querySelector('#hoverImagesContainer2');
        hoverImagesContainer.style.opacity = '0';
        hoverImagesContainer.style.visibility = 'hidden';
        hoverImagesContainer2.style.opacity = '0';
        hoverImagesContainer2.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer .image-row').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer2 .image-row2').classList.remove('slide-down');
    });

    document.querySelector('#CARD6').addEventListener('mouseover', () => {
        document.querySelector('#CARD4').classList.add('hidden');
        document.querySelector('#CARD5').classList.add('hidden');
        const hoverImagesContainer3 = document.querySelector('#hoverImagesContainer3');
        const hoverImagesContainer4 = document.querySelector('#hoverImagesContainer4');
        hoverImagesContainer3.style.opacity = '1';
        hoverImagesContainer3.style.visibility = 'visible';
        hoverImagesContainer4.style.opacity = '1';
        hoverImagesContainer4.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer3 .image-row3').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer4 .image-row4').classList.add('slide-down');
    });

    document.querySelector('#CARD6').addEventListener('mouseout', () => {
        document.querySelector('#CARD4').classList.remove('hidden');
        document.querySelector('#CARD5').classList.remove('hidden');
        const hoverImagesContainer3 = document.querySelector('#hoverImagesContainer3');
        const hoverImagesContainer4 = document.querySelector('#hoverImagesContainer4');
        hoverImagesContainer3.style.opacity = '0';
        hoverImagesContainer3.style.visibility = 'hidden';
        hoverImagesContainer4.style.opacity = '0';
        hoverImagesContainer4.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer3 .image-row3').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer4 .image-row4').classList.remove('slide-down');
    });

    document.querySelector('#CARD5').addEventListener('mouseover', () => {
        document.querySelector('#CARD4').classList.add('hidden');
        document.querySelector('#CARD6').classList.add('hidden');
        const hoverImagesContainer5 = document.querySelector('#hoverImagesContainer5');
        const hoverImagesContainer6 = document.querySelector('#hoverImagesContainer6');
        hoverImagesContainer5.style.opacity = '1';
        hoverImagesContainer5.style.visibility = 'visible';
        hoverImagesContainer6.style.opacity = '1';
        hoverImagesContainer6.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer5 .image-row5').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer6 .image-row6').classList.add('slide-down');
    });

    document.querySelector('#CARD5').addEventListener('mouseout', () => {
        document.querySelector('#CARD6').classList.remove('hidden');
        document.querySelector('#CARD4').classList.remove('hidden');
        const hoverImagesContainer5 = document.querySelector('#hoverImagesContainer5');
        const hoverImagesContainer6 = document.querySelector('#hoverImagesContainer6');
        hoverImagesContainer5.style.opacity = '0';
        hoverImagesContainer5.style.visibility = 'hidden';
        hoverImagesContainer6.style.opacity = '0';
        hoverImagesContainer6.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer5 .image-row5').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer6 .image-row6').classList.remove('slide-down');
    });

    document.querySelector('#CARD7').addEventListener('mouseover', () => {
        document.querySelector('#CARD8').classList.add('hidden');
        document.querySelector('#CARD9').classList.add('hidden');
        const hoverImagesContainer = document.querySelector('#hoverImagesContainer');
        const hoverImagesContainer2 = document.querySelector('#hoverImagesContainer2');
        hoverImagesContainer.style.opacity = '1';
        hoverImagesContainer.style.visibility = 'visible';
        hoverImagesContainer2.style.opacity = '1';
        hoverImagesContainer2.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer .image-row').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer2 .image-row2').classList.add('slide-down');
    });

    document.querySelector('#CARD7').addEventListener('mouseout', () => {
        document.querySelector('#CARD8').classList.remove('hidden');
        document.querySelector('#CARD9').classList.remove('hidden');
        const hoverImagesContainer = document.querySelector('#hoverImagesContainer');
        const hoverImagesContainer2 = document.querySelector('#hoverImagesContainer2');
        hoverImagesContainer.style.opacity = '0';
        hoverImagesContainer.style.visibility = 'hidden';
        hoverImagesContainer2.style.opacity = '0';
        hoverImagesContainer2.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer .image-row').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer2 .image-row2').classList.remove('slide-down');
    });

    document.querySelector('#CARD9').addEventListener('mouseover', () => {
        document.querySelector('#CARD7').classList.add('hidden');
        document.querySelector('#CARD8').classList.add('hidden');
        const hoverImagesContainer3 = document.querySelector('#hoverImagesContainer3');
        const hoverImagesContainer4 = document.querySelector('#hoverImagesContainer4');
        hoverImagesContainer3.style.opacity = '1';
        hoverImagesContainer3.style.visibility = 'visible';
        hoverImagesContainer4.style.opacity = '1';
        hoverImagesContainer4.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer3 .image-row3').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer4 .image-row4').classList.add('slide-down');
    });

    document.querySelector('#CARD9').addEventListener('mouseout', () => {
        document.querySelector('#CARD7').classList.remove('hidden');
        document.querySelector('#CARD8').classList.remove('hidden');
        const hoverImagesContainer3 = document.querySelector('#hoverImagesContainer3');
        const hoverImagesContainer4 = document.querySelector('#hoverImagesContainer4');
        hoverImagesContainer3.style.opacity = '0';
        hoverImagesContainer3.style.visibility = 'hidden';
        hoverImagesContainer4.style.opacity = '0';
        hoverImagesContainer4.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer3 .image-row3').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer4 .image-row4').classList.remove('slide-down');
    });


    document.querySelector('#CARD8').addEventListener('mouseover', () => {
        document.querySelector('#CARD7').classList.add('hidden');
        document.querySelector('#CARD9').classList.add('hidden');
        const hoverImagesContainer5 = document.querySelector('#hoverImagesContainer5');
        const hoverImagesContainer6 = document.querySelector('#hoverImagesContainer6');
        hoverImagesContainer5.style.opacity = '1';
        hoverImagesContainer5.style.visibility = 'visible';
        hoverImagesContainer6.style.opacity = '1';
        hoverImagesContainer6.style.visibility = 'visible';
        document.querySelector('#hoverImagesContainer5 .image-row5').classList.add('slide-up');
        document.querySelector('#hoverImagesContainer6 .image-row6').classList.add('slide-down');
    });

    document.querySelector('#CARD8').addEventListener('mouseout', () => {
        document.querySelector('#CARD7').classList.remove('hidden');
        document.querySelector('#CARD9').classList.remove('hidden');
        const hoverImagesContainer5 = document.querySelector('#hoverImagesContainer5');
        const hoverImagesContainer6 = document.querySelector('#hoverImagesContainer6');
        hoverImagesContainer5.style.opacity = '0';
        hoverImagesContainer5.style.visibility = 'hidden';
        hoverImagesContainer6.style.opacity = '0';
        hoverImagesContainer6.style.visibility = 'hidden';
        document.querySelector('#hoverImagesContainer5 .image-row5').classList.remove('slide-up');
        document.querySelector('#hoverImagesContainer6 .image-row6').classList.remove('slide-down');
    });

    document.querySelectorAll('.triptype1').forEach(type => {
        type.addEventListener('click', () => {
            document.getElementById("textall2TH").style.display = "none";
            document.getElementById("textall2CN").style.display = "none";
            document.getElementById("textall2EN").style.display = "none";
        });
    });
});
