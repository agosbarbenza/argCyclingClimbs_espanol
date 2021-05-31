window.onload = ()=>{
    displayMenu();
    closeMenu();
    scroll();
};

function displayMenu(){
    const surfaceBtn = document.getElementById('surface-wrapper');
    const subMenu = document.getElementById('sub-menu');
    surfaceBtn.addEventListener('click', ()=>{
        if(subMenu.style.display == 'none' || subMenu.style.display == ''){
            subMenu.style.display = 'block';
        }else{
            subMenu.style.display = 'none';
        };   
    });
    selectHeightTable();
    selectAverageTable();
    selectLengthTable();
    selectElevationTable();
    selectSurfaceTable();
};

function closeMenu(){
    const subMenu = document.getElementById('sub-menu');
    subMenu.addEventListener('mouseleave', ()=>{
        subMenu.style.display = 'none';
    });
};


function selectHeightTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('height-option');
    let option = document.getElementById('sort-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSnxz1u28dW94Mt6dhFRzg2aWUlZ6RYcHeUq2IFu4igu6mQ0RCpTLldqrB6KINYrg/pubhtml?widget=true&amp;headers=false';
        option.innerText = 'Height at finish';

    });
};

function selectAverageTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('gradient-option');
    let option = document.getElementById('sort-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vS7TNX14zSk4_bGCN1gvsbbOZ9wJLvS4JwWMRWC6_ypkOmgfmP_j8U_RLkqCJJRtg/pubhtml?widget=true&amp;headers=false';
        option.innerText = 'Average gradient';
    });
};

function selectLengthTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('length-option');
    let option = document.getElementById('sort-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vRiCjCZDW977WCXPDywnhpoKbUqWO7TRqyKY7o9mVA7zeULpUUT8MhbaFCL_c3NZw/pubhtml?widget=true&amp;headers=false';
        option.innerText = 'Length';
    });
};

function selectElevationTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('elevation-option');
    let option = document.getElementById('sort-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vT9ZbPbKs0rQm9xWpoN67Xek0A_4-WiclgO-Rwlgqts59j6HGEIGDvvBh21PKJQEw/pubhtml?widget=true&amp;headers=false';
        option.innerText = 'Absolute elevation gain';
    });
};

function selectSurfaceTable (){
    const tableFrame = document.getElementById('table-frame');
    const btn = document.getElementById('surface-option');
    let option = document.getElementById('sort-option');

    btn.addEventListener('click', ()=>{
        tableFrame.src='https://docs.google.com/spreadsheets/d/e/2PACX-1vRXjLhxg6ha8bgVEbLPYu1HTG4l2-frdVbUiKZPjxhEWkQ4ruMvuXE9nD12LvvXPA/pubhtml?widget=true&amp;headers=false';
        option.innerText = 'Surface';
    });
    
};

function scroll(){
    const link = document.getElementById('option3');
    link.addEventListener('click', ()=>{
        document.getElementById('criteria-info').scrollIntoView({behavior: "smooth"});
    })
};

