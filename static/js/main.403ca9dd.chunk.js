(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/beyonce-hero-487073444_copy.jpg?itok=HTsVCEqU"},{id:2,image:"https://www.mercurynews.com/wp-content/uploads/2018/03/beyonce.jpg"},{id:3,image:"https://images-na.ssl-images-amazon.com/images/I/A15dQM39ELL._CR0,0,3840,2880_._SL1000_.jpg"},{id:4,image:"https://scstylecaster.files.wordpress.com/2018/01/beyonce.jpg"},{id:5,image:"https://www.hellomagazine.com/imagenes/fashion/news/2017120858458/beyonce-shopping-in-target/0-283-865/beyonce-shops-at-target-t.jpg"},{id:6,image:"https://www.wellandgood.com/wp-content/uploads/2017/07/News-write-around-features-Beyonce-Soul-Cycle.jpg"},{id:7,image:"https://flavorwire.files.wordpress.com/2013/12/beyonce.png?w=984"},{id:8,image:"https://lh3.googleusercontent.com/xzSTC-P_mX0POVuwjUCuyzNYH-Y0SpJw9nB09ZqW4bJnLFFBGysoZ1SLgIU2nwB9kUeiANZgIqDDRdtVeCNI5Q=s750"},{id:9,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0qBuDx0od75jp0JSs9fEiOFVR_QvTHuicvps3tHzJ-ZnAtyq"},{id:10,image:"https://www.hellomagazine.com/imagenes/celebrities/2018032747354/beyonce-bit-bizarre-story-internet-speculation/0-236-444/beyonce-bitten-t.jpg"},{id:11,image:"https://images.hellogiggles.com/uploads/2017/12/09231710/picture-of-beyonce-natural-hair-photo.jpg"},{id:12,image:"http://image.nola.com/home/nola-media/width600/img/entertainment_impact_music/photo/beyonce-ac69042e15c088c7.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),i=a(4),s=a(5),m=a(7),l=a(6),g=a(8);a(16);var p=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Beyonc\xe9 Memory Game"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("span",{className:"navbar-text"},"Score: ",r.a.createElement("span",{style:{color:"blue"}},e.currentScore)," | Top Score: ",e.topScore)))};a(18);var u=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{onClick:function(){return e.selectedImage(e.id)},alt:"Beyonc\xe9",src:e.image})))};a(20);var d=function(e){return r.a.createElement("div",{className:"row wrapper"},e.children)},h=a(1),f=(a(22),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={images:h,remainingImages:h,currentScore:0,topScore:0},a.shuffleImages=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}},a.checkWin=function(){12===a.state.currentScore&&(alert("You win! Play again."),a.setState({images:h,remainingImages:h,currentScore:0,topScore:a.state.topScore}))},a.selectedImage=function(e){if(void 0===a.state.remainingImages.find(function(t){return t.id===e}))a.setState({images:h,remainingImages:h,currentScore:0,topScore:a.state.currentScore>a.state.topScore?a.state.currentScore:a.state.topScore});else{var t=a.state.remainingImages.filter(function(t){return t.id!==e});11===a.state.currentScore?(alert("You win! Play again."),a.setState({images:h,remainingImages:t,currentScore:0,topScore:12})):a.setState({images:h,remainingImages:t,currentScore:a.state.currentScore+1,topScore:a.state.topScore})}a.shuffleImages(h)},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.shuffleImages(h)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(d,null,r.a.createElement(p,{currentScore:this.state.currentScore,topScore:this.state.topScore}),this.state.images.map(function(t){return r.a.createElement(u,{key:t.id,id:t.id,image:t.image,selectedImage:e.selectedImage})})))}}]),t}(n.Component));a(24);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.403ca9dd.chunk.js.map