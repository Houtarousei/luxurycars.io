const text1_options = [
    "BUGATTI\n CHIRON",
    "BUGATTI\n DIVO",
    "BUGATTI\n VEYRON"
  ];
  const text2_options = [
    "100 km/h | 1,580 hp | 6,000 rpm",
    "100 km/h | 1,580 hp | 6,000 rpm",
    "100 km/h | 1,580 hp | 6,000 rpm"
  
  ];
  const price = [
    "$2.9 MILLION",
    "$5.4 MIILION",
    "$1.9 MILLION"
  
  ];
  const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
  const orig_image_options = 
  [
    'bugatti-l.png','divo-l.png','veyron-l.png'
  ];
  const image_options = 
  [
    'bugatti-l.png','divo-l.png','veyron-l.png'
  ];

 
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionPrevious = document.getElementById("previous-option");
  const optionNext = document.getElementById("next-option");
  const car = document.getElementById('car');
  const one = document.getElementById('one');
  const p = document.getElementById('price');

  
  currentOptionText1.innerText = text1_options[i];
  currentOptionText2.innerText = text2_options[i];
  //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  //mainMenu.style.background = color_options[i];
  
  mainMenu.onmouseover = function()
  {

  }
  var num = 2;
  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  

  b1.onclick = function ()
  {
  
     if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
  
    p.innerHTML = price[i];


    setTimeout(() => 
    {
      car.src = image_options[i];
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    num-=1;
    if(num<1)
    {
      num=3
    }

    
    b2.innerHTML = "0"+(num);
    if(num==1)  b1.innerHTML = "03";
    else
      b1.innerHTML = "0"+(num-1);
    
   

    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    //mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
 
          $('#b-slide').css({
          'margin-left':'-200px',
          'transition':'1s'
    

      })

      setTimeout(() => {
      $('#b-slide').css({
        
          'left':'0px',
          'margin-left':'200px',
          'transition':'0s'
      })
      
  },1000)
      
      setTimeout(() => {
     
      $('#b-slide').css({
       
          'margin-left':'0px',
          'transition':'1s'
      });
  },1100)
      
  }

  b2.onclick = function ()
  {
     i = i + 1;
    i = i % text1_options.length;

    if(num>2)
    {
      num=0

    }

    num+=1;
    b2.innerHTML = "0"+num;
    if(num==1) b1.innerHTML = "03";
    else
    b1.innerHTML = "0"+(num-1);
 

    setTimeout(() => 
    {
      car.src = image_options[i];
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 400);



   
   
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
    p.innerHTML = price[i];

    //mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");
    
    setTimeout(() => 
    {
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
 
          $('#b-slide').css({
          'margin-left':'200px',
          'transition':'1s'
    

      })

      setTimeout(() => {
      $('#b-slide').css({
        
          'left':'0px',
          'margin-left':'-200px',
          'transition':'0s'
      })
      
  },1000)
      
      setTimeout(() => {
     
      $('#b-slide').css({
       
          'margin-left':'0px',
          'transition':'1s'
      });
  },1100)
      
  }








  var bc1 = document.getElementById("cb1");
  var bc2 = document.getElementById("cb2");
  var s = 0;


  function change()
  {
   
    if(s==35)
    {
      text1_options[0] ='LAMBO\nSC18';
      text1_options[1] ='LAMBO\nVENENO';
      text1_options[2] ='LAMBO\nAVENTADOR';
      image_options[0]='lambo-l.png';
      image_options[1]='veneno-l.png';
      image_options[2]='Aventador-l.png';

      setTimeout(() => 
    {
      car.src = image_options[i];
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);

      
    }

    if(s==0)
    {
      text1_options[0] ='BUGGATI\nCHIRON';
      text1_options[1] ='BUGATTI\nDIVO';
      text1_options[2] ='BUGGATI\nVEYRON';
      image_options[0]='bugatti-l.png';
      image_options[1]='divo-l.png';
      image_options[2]='veyron-l.png';

      setTimeout(() => 
    {
      car.src = image_options[i];
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);

      
    }

    if(s==70)
    {
      text1_options[0] ='FERARI\nSF90';
      text1_options[1] ='FERARI\nF8';
      text1_options[2] ='FERARI\nSPIDER';
      image_options[0]='SF90-l.png';
      image_options[1]='f8-l.png';
      image_options[2]='488_spider-l.png';

      setTimeout(() => 
    {
      car.src = image_options[i];
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      //currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);

      
    }
    currentOptionText1.dataset.previousText = text1_options[i];
    currentOptionText2.dataset.previousText = text2_options[i];
  }

  

  bc1.onclick = function ()
  {

      s+=35;
      if(s>70)
      {
          s=70;
      }
      

      console.log(s);
      change(s);
          $('ul').css({
          'transform':' translateY(-'+s+'%)',
          'transition':'1s'
    

      })
  
      
  }

  bc2.onclick = function ()
  {
      if(s<35)
      {

          s=35;
      }
  
          s-=35;
          console.log(s);
          change(s);
      
    
 
          $('ul').css({
          'transform':' translateY(-'+s+'%)',
          'transition':'1s'
    

      })
 
      
  }

 var log = document.getElementById('logo');


log.onclick = function()
{
  window.open('../index.html','_self');
}

var men = document.getElementById('menu');
var about = document.getElementById('about');
var wid =true;



men.onclick = function()
{
  wid = wid ? false : true
  expand(wid);
 
  
}

function expand(ex)
{
  if(ex)
  {
    setTimeout(()=>{
      $('.about').css(
        {
          'width':'30%',
          'opacity':'1',
          'transition':'1s',
          'z-index':'3'
          
        }
      )
      },100);
      

  }
  else
  {

    setTimeout(()=>{
      $('.about').css(
        {
          'width':'0%',
          'opacity':'0',
          'transition':'1s',
          'z-index':'1'
        }
      )
      },100);


  }
}


  



