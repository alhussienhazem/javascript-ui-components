// 🏗️ Building the navbar structure
let header = document.createElement('header');
let h1 = document.createElement('h1');
let nav = document.createElement('nav');
let ul = document.createElement('ul');
let li = document.createElement('li');
let a = document.createElement('a');
let li2 = document.createElement('li');
let a2 = document.createElement('a');
let btn = document.createElement('button');

// 🔗 Connecting all the pieces together
li.appendChild(a);
ul.appendChild(li);
ul.appendChild(li2);
li2.appendChild(a2);
nav.appendChild(ul);
header.appendChild(h1);
header.appendChild(nav);
header.appendChild(btn);

// 📍 Putting it on the page
document.body.appendChild(header);

// 📝 Adding the text content
let textTitle = document.createTextNode('Raccoon City ');
let textLink = document.createTextNode('Home');
let textLink2 = document.createTextNode('About');
let textBtn = document.createTextNode('Menu');

// 🎯 Putting text into the elements
a.appendChild(textLink);
a2.appendChild(textLink2);
h1.appendChild(textTitle);
btn.appendChild(textBtn);

// 🎨 Styling the header
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
header.style.width = '100%';
header.style.margin = '0';
header.style.padding = '20px 40px';
header.style.backgroundColor = '#282c34';
header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
header.style.position = 'sticky';
header.style.top = '0';
header.style.zIndex = '100';
header.style.boxSizing = 'border-box';

// 🎨 Styling the title
h1.style.color = '#7f848e';

// 🧭 Styling the navigation
nav.style.width = '30%';

ul.style.display = 'flex';
ul.style.textDecoration = 'none';
ul.style.listStyle = 'none';
ul.style.gap = '20px';
ul.style.justifyContent = 'center';

// 🔗 Styling the navigation links
a.style.textDecoration = 'none';
a.style.color = '#7f848e';
a.href = '#';

a2.style.textDecoration = 'none';
a2.style.color = '#7f848e';
a2.href = '#';


// 🎛️ Styling the button
btn.style.backgroundColor = '#282c34';
btn.style.color = '#7f848e';
btn.style.border = '1px solid #7f848e';
btn.style.padding = '8px 12px';
btn.style.cursor = 'pointer';
btn.style.display = "none";
btn.style.width = '100px';
btn.style.borderRadius = "10px";
btn.style.textAlign = "center";
btn.setAttribute("onclick", "Click()");


// 📱 Making it responsive for mobile
if (window.innerWidth < 600) {
    btn.style.display = "block";
    nav.style.display = "none";
}
else{
    btn.style.display = "none";
    nav.style.display = "block";
}

// 🎯 Dropdown state tracker
let open = false;

// 🎬 The magic dropdown function
function Click() {
    if(open == false){
        open = true;
        nav.style.display = "block";
        ul.style.flexDirection = "column";
        ul.style.position = "absolute";
        ul.style.textAlign = "center";
        ul.style.top = "50%";
        ul.style.right = "37px";
        ul.style.transform = "none";
        ul.style.backgroundColor = "#1a1d23";
        ul.style.border = "1px solid #3a3f4b";
        ul.style.borderRadius = "10px";
        ul.style.boxShadow = "0 8px 32px rgba(0,0,0,0.6)";
        ul.style.zIndex = "1000";
        ul.style.padding = "12px 0";
        ul.style.minWidth = "100px";
        ul.style.gap = "0";
        
        // 🎨 Styling the dropdown items
        li.style.padding = "15px 30px";
        li.style.borderBottom = "none";
        li.style.margin = "0";
        li.style.cursor = "pointer";
        li.style.borderRadius = "8px";
        li.style.marginBottom = "4px";
        
        li2.style.padding = "15px 30px";
        li2.style.margin = "0";
        li2.style.cursor = "pointer";
        li2.style.borderRadius = "8px";
        
        // ✨ Styling the dropdown links
        a.style.color = "#7f848e";
        a.style.fontWeight = "400";
        a.style.fontSize = "16px";
        a.style.textShadow = "none";
        a2.style.color = "#7f848e";
        a2.style.fontWeight = "400";
        a2.style.fontSize = "16px";
        a2.style.textShadow = "none";
        
        // 🎭 Adding smooth hover effects
        li.style.transition = "all 0.3s ease";
        li2.style.transition = "all 0.3s ease";
    }
    else{
        open = false;
        nav.style.display = "none";
    }
}


// 🎨 Styling the body
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.backgroundColor = '#1a1d23';
document.body.style.minHeight = '100vh';
document.body.style.boxSizing = 'border-box';
document.body.style.overflowX = 'hidden';

// 🎯 Creating the main content area
let main = document.createElement('main');


// 🃏 Creating individual cards function
function createCard(){
    let div = document.createElement('div');
    let img = document.createElement('img');
    let titleCard = document.createElement('h1');
    let textCard = document.createElement('p');

    // 🔗 Connecting card elements to the main content
    main.appendChild(div);
    div.appendChild(img);
    div.appendChild(titleCard);
    div.appendChild(textCard);



    // 📝 Adding card text content to the card
    let textTitleCard = document.createTextNode('Resident Evil 4 Remake');
    let textTextCard = document.createTextNode('Experience the survival horror masterpiece reimagined with stunning graphics, enhanced gameplay, and a gripping narrative that will keep you on the edge of your seat.');

    titleCard.appendChild(textTitleCard);
    textCard.appendChild(textTextCard);
    
    // 🎨 Styling the card text
    titleCard.style.margin = '0 0 15px 0';
    titleCard.style.fontSize = '24px';
    titleCard.style.fontWeight = '600';
    titleCard.style.color = '#ffffff';
    
    textCard.style.margin = '0';
    textCard.style.fontSize = '16px';
    textCard.style.lineHeight = '1.6';
    textCard.style.color = '#abb2bf';

    // 🖼️ Setting image attributes
    img.setAttribute('src', 're4.jpg');
    img.setAttribute('alt', 'Image');


    // 🎨 Styling the card image
    img.style.width = '100%';
    img.style.height = '200px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '8px';
    img.style.marginBottom = '15px';

    // 🎨 Styling the card container
    div.style.width = '300px';
    div.style.textAlign = 'center';
    div.style.backgroundColor = '#282c34';
    div.style.padding = '25px';
    div.style.borderRadius = '15px';
    div.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
    div.style.margin = '0';
    div.style.color = '#7f848e';
    div.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    

}

// 🎨 Styling the main content area
main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.justifyContent = 'center';
main.style.gap = '30px';
main.style.padding = '40px 20px';
main.style.color = '#7f848e';
main.style.boxSizing = 'border-box';

// 📍 Adding the main content to the page
document.body.appendChild(main);

// 🔄 Generating multiple cards
for (let i = 0; i < 10; i++) {
    createCard();
}