(window["webpackJsonpreact-game"]=window["webpackJsonpreact-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://i.kym-cdn.com/photos/images/newsfeed/000/124/933/1304376955947.png?1305859987"},{"id":2,"image":"https://nypdecider.files.wordpress.com/2018/09/seinfeld-jerry-puffy.jpg?quality=90&strip=all&w=646&h=431&crop=1"},{"id":3,"image":"https://i.pinimg.com/originals/e7/8c/b3/e78cb325bbaca6ce4517fe8e21d7b6ee.png"},{"id":4,"image":"https://thejjgalaxy.files.wordpress.com/2011/11/kramer.png?w=497"},{"id":5,"image":"https://cbsnews3.cbsistatic.com/hub/i/r/2013/05/14/d47592d1-c3c9-11e2-a43e-02911869d855/resize/620x465/8f1e1aeb9bd7a994fdbfb86557a7b233/010_Newman_old.png"},{"id":6,"image":"https://vignette.wikia.nocookie.net/seinfeld/images/5/5b/Jacopo7.jpg/revision/latest?cb=20120204124331"},{"id":7,"image":"https://boygeniusreport.files.wordpress.com/2015/06/susan-seinfeld.jpg?quality=98&strip=all"},{"id":8,"image":"https://vignette.wikia.nocookie.net/seinfeld/images/a/aa/Hernandez.jpg/revision/latest?cb=20120205044738"},{"id":9,"image":"https://i.etsystatic.com/5851351/r/il/9d0f6a/380160499/il_794xN.380160499_gd9j.jpg"},{"id":10,"image":"https://images-na.ssl-images-amazon.com/images/I/41tavYVL5fL.jpg"}]')},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(3),r=a.n(n),s=a(4),o=a(5),l=a(7),m=a(6),d=a(8);a(14);var g=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(15);var h=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickedImg(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))},u=a(1);a(16);var p=function(e){return i.a.createElement("h1",{className:"title"},e.children)};a(17);var f=function(e){return i.a.createElement("header",{className:"userScore"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 col-left"},i.a.createElement("h5",null,e.title)),i.a.createElement("div",{className:"col-md-3 col-right"},i.a.createElement("h6",null,"Current Score: ",e.score)),i.a.createElement("div",{className:"col-md-3 col-right"},i.a.createElement("h6",null,"High Score: ",e.highScore))))};function b(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}return e}var v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={characters:u,score:0,highScore:0,clickedImg:[]},a.clickedImg=function(e){var t=a.state.clickedImg;a.state.score,a.state.highScore;-1===t.indexOf(e)?(t.push(e),console.log(t),a.handleIncrement(),a.increaseHigh(),a.makeShuffle()):(a.state.score,a.setState({score:0,clickedImg:[]}))},a.handleIncrement=function(){a.setState({score:a.state.score+1})},a.increaseHigh=function(){a.state.score>=a.state.highScore&&a.setState({highScore:a.state.score})},a.makeShuffle=function(){a.setState({characters:b(u)})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(p,null,"React Clicky Game!"),i.a.createElement(f,{title:"Try to click on all the characters below without clicking on the same picture twice!",score:this.state.score,highScore:this.state.highScore}),this.state.characters.map((function(t){return i.a.createElement(h,{id:t.id,key:t.id,image:t.image,clickedImg:e.clickedImg})})))}}]),t}(i.a.Component);r.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0a489c77.chunk.js.map