(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8jAD":function(e,t,a){"use strict";a("eM6i"),a("a1Th"),a("h7Nl"),a("V+eJ"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("pIFo"),a("KKXr"),a("8+KV"),a("hHhE"),a("rE2o"),a("ioFf"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InlineIcon=t.Icon=void 0;var i,l=(i=a("FdF9"))&&i.__esModule?i:{default:i};function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=0,c=/(-?[0-9.]*[0-9]+[0-9.]*)/g,A=/^-?[0-9.]*[0-9]+[0-9.]*$/g,s=["width","height","inline","hFlip","vFlip","flip","rotate","align","color","box"],d={left:0,top:0,width:16,height:16,rotate:0,hFlip:!1,vFlip:!1};var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t}var t,a,i;return t=e,i=[{key:"splitAttributes",value:function(e){var t={icon:Object.create(null),node:Object.create(null)};return Object.keys(e).forEach((function(a){t[-1===s.indexOf(a)?"node":"icon"][a]=e[a]})),t}},{key:"calculateDimension",value:function(e,t,a){if(1===t)return e;if(a=void 0===a?100:a,"number"==typeof e)return Math.ceil(e*t*a)/a;var i=e.split(c);if(null===i||!i.length)return null;for(var l,n=[],r=i.shift(),o=A.test(r);;){if(o?(l=parseFloat(r),isNaN(l)?n.push(r):n.push(Math.ceil(l*t*a)/a)):n.push(r),void 0===(r=i.shift()))return n.join("");o=!o}}},{key:"replaceIDs",value:function(e){var t,a,i=/\sid="(\S+)"/g,l=[];function n(e,t,a){for(var i=0;-1!==(i=a.indexOf(e,i));)a=a.slice(0,i)+t+a.slice(i+e.length),i+=t.length;return a}for(;t=i.exec(e);)l.push(t[1]);return l.length?(a="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",l.forEach((function(t){var i=a+o;o++,e=n('="'+t+'"','="'+i+'"',e),e=n('="#'+t+'"','="#'+i+'"',e),e=n("(#"+t+")","(#"+i+")",e)})),e):e}}],(a=[{key:"getAttributes",value:function(t){var a=this._item;"object"!==n(t)&&(t=Object.create(null));var i={horizontal:"center",vertical:"middle",slice:!1},l={rotate:a.rotate,hFlip:a.hFlip,vFlip:a.vFlip},r=Object.create(null),o=Object.create(null),c=!0===t.inline||"true"===t.inline||"1"===t.inline,A={left:a.left,top:c?a.inlineTop:a.top,width:a.width,height:c?a.inlineHeight:a.height};if(["hFlip","vFlip"].forEach((function(e){void 0===t[e]||!0!==t[e]&&"true"!==t[e]&&"1"!==t[e]||(l[e]=!l[e])})),void 0!==t.flip&&t.flip.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"horizontal":l.hFlip=!l.hFlip;break;case"vertical":l.vFlip=!l.vFlip}})),void 0!==t.rotate){var s=t.rotate;if("number"==typeof s)l.rotate+=s;else if("string"==typeof s){var d=s.replace(/^-?[0-9.]*/,"");if(""===d)s=parseInt(s),isNaN(s)||(l.rotate+=s);else if(d!==s){var u=!1;switch(d){case"%":u=25;break;case"deg":u=90}u&&(s=parseInt(s.slice(0,s.length-d.length)),isNaN(s)||(l.rotate+=Math.round(s/u)))}}}var f,h=[];switch(l.hFlip?l.vFlip?l.rotate+=2:(h.push("translate("+(A.width+A.left)+" "+(0-A.top)+")"),h.push("scale(-1 1)"),A.top=A.left=0):l.vFlip&&(h.push("translate("+(0-A.left)+" "+(A.height+A.top)+")"),h.push("scale(1 -1)"),A.top=A.left=0),l.rotate%4){case 1:f=A.height/2+A.top,h.unshift("rotate(90 "+f+" "+f+")"),0===A.left&&0===A.top||(f=A.left,A.left=A.top,A.top=f),A.width!==A.height&&(f=A.width,A.width=A.height,A.height=f);break;case 2:h.unshift("rotate(180 "+(A.width/2+A.left)+" "+(A.height/2+A.top)+")");break;case 3:f=A.width/2+A.left,h.unshift("rotate(-90 "+f+" "+f+")"),0===A.left&&0===A.top||(f=A.left,A.left=A.top,A.top=f),A.width!==A.height&&(f=A.width,A.width=A.height,A.height=f)}var p,m,g=t.width?t.width:null,v=t.height?t.height:null;null===g&&null===v&&(v="1em"),null!==g&&null!==v?(p=g,m=v):null!==g?(p=g,m=e.calculateDimension(p,A.height/A.width)):(m=v,p=e.calculateDimension(m,A.width/A.height)),!1!==p&&(o.width="auto"===p?A.width:p),!1!==m&&(o.height="auto"===m?A.height:m),c&&0!==a.verticalAlign&&(r["vertical-align"]=a.verticalAlign+"em"),void 0!==t.align&&t.align.toLowerCase().split(/[\s,]+/).forEach((function(e){switch(e){case"left":case"right":case"center":i.horizontal=e;break;case"top":case"bottom":case"middle":i.vertical=e;break;case"crop":i.slice=!0;break;case"meet":i.slice=!1}})),o.preserveAspectRatio=function(e){var t;switch(e.horizontal){case"left":t="xMin";break;case"right":t="xMax";break;default:t="xMid"}switch(e.vertical){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet"}(i),o.viewBox=A.left+" "+A.top+" "+A.width+" "+A.height;var b=e.replaceIDs(a.body);return void 0!==t.color&&(b=b.replace(/currentColor/g,t.color)),h.length&&(b='<g transform="'+h.join(" ")+'">'+b+"</g>"),!0!==t.box&&"true"!==t.box&&"1"!==t.box||(b+='<rect x="'+A.left+'" y="'+A.top+'" width="'+A.width+'" height="'+A.height+'" fill="rgba(0, 0, 0, 0)" />'),{attributes:o,body:b,style:r}}},{key:"getSVG",value:function(t,a){var i=e.splitAttributes(t),l=this.getAttributes(i.icon),n='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"';return a&&Object.keys(i.node).forEach((function(e){n+=" "+e+'="'+i.node[e]+'"'})),Object.keys(l.attributes).forEach((function(e){n+=" "+e+'="'+l.attributes[e]+'"'})),n+=' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);',Object.keys(l.style).forEach((function(e){n+=" "+e+": "+l.style[e]+";"})),t&&void 0!==t.style&&(n+=t.style),n+='">',n+=l.body+"</svg>"}}])&&r(t.prototype,a),i&&r(t,i),e}();function f(e,t){if("object"!==n(e.icon))return null;var a=u.splitAttributes(e),i=a.icon,r=a.node;delete r.icon,void 0===i.inline&&(i.inline=t);var o=new u(function(e){var t,a=Object.create(null);for(t in d)a[t]=d[t];for(t in e)a[t]=e[t];return void 0===a.inlineTop&&(a.inlineTop=a.top),void 0===a.inlineHeight&&(a.inlineHeight=a.height),void 0===a.verticalAlign&&(a.verticalAlign=a.height%7==0&&a.height%8!=0?-.143:-.125),a}(e.icon)).getAttributes(i),c={transform:"rotate(360deg)"};if(void 0!==o.style["vertical-align"]&&(c.verticalAlign=o.style["vertical-align"]),void 0!==e.style)for(var A in e.style)c[A]=e.style[A];var s,f={xmlns:"http://www.w3.org/2000/svg",focusable:!1,style:c};for(s in r)f[s]=r[s];for(s in o.attributes)f[s]=o.attributes[s];return f.dangerouslySetInnerHTML={__html:o.body},l.default.createElement("svg",f,null)}var h=function(e){return f(e,!1)};t.Icon=h;t.InlineIcon=function(e){return f(e,!0)};var p=h;t.default=p},"9GTS":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"10 Albums of the 2010s","permalink":"/project/albums","updated":"July 05, 2020","description":"Designed a jewel-box-bound book that was printed on a 19th century printing press to highlight the music that helped define the past decade, which was then turned digital with React.","coverimage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQY0wFuAZH+AKqGZLCNa6F4Vb2fdrOZcbGHYruNap94WLaiiraBm7yNn8OxpNKdj6KVjzFxlE95ksHCqNnHkcqxgLeBXgCgd1aheVerhmOxkWyxlG2ba0qzgV+kfFymlHuQfnyXdnyZjYSqeXGgb2UoT2VBXXCvqo7Ap2izj1XAiGcAtZFsupdwsI1qv6iAuJtzsodhuIpouJh3vrKVtaGapniBtJmMqJiPsY+EN2eBP2qDvLicz7l9yax2x5RzAMOfeLiUb8Gkfc6/lcKrf9KtgryRbcOpicCzmruuoLyso8iwoLGZkZ+gnjJsiEmBnMnLsenZqePTpdqzjgCjcU+meleacVClh2OdelfHoXi+lnCnhWatmoOknpCdoJGemo6pko1ranUgUWtJgpnJya7n2Knj06LasY4ApXFOqHxZoHpZkGlKmnVS0rSJtIpnsJFzqZJ/rKKVpLCenaSYl5KQYHiHJFRwU3uMzcyw6Nqq39Kj2rCNcnjPgyUXgQ0AAAAASUVORK5CYII=","aspectRatio":3.3185840707964602,"src":"/static/867bdf4e267214a375fb91004c366394/0382d/albumheadercolor.png","srcSet":"/static/867bdf4e267214a375fb91004c366394/5d43b/albumheadercolor.png 375w,\\n/static/867bdf4e267214a375fb91004c366394/8ef08/albumheadercolor.png 750w,\\n/static/867bdf4e267214a375fb91004c366394/0382d/albumheadercolor.png 1440w","sizes":"(max-width: 1440px) 100vw, 1440px"}}}},"id":"90544059-0c79-5d08-aac1-22e49bf3e252","excerpt":"10 Header 10 Slider\\n10 Slider 10 Figma1\\n10 Figma2 10 Result1\\n10 Result2"}},{"node":{"frontmatter":{"title":"Grow Together","permalink":"/project/adobe","updated":"May 31, 2020","description":"A tablet app for kids to learn about and stay safe during the international pandemic through tending to a virtual garden. Designed for US-college-wide Adobe + Nickelodeon Creative Jam, at which my teammate and I received 6th place out of 145 teams.","coverimage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8UlEQVQY0wHmARn+APuwABT/xQAN6a4AFa6pcEDCr6hg/7wADrqAQSKLXGI805EwG+miHBf/wAAT/7UFFPuvBBT1qwsV9qwKFPqvBRT/wwAS/8ICE//VABH3rgQUAPizHUXBqnWDb5copIGgR8mcmkiT/9cALpxpVnt0S2m6gFRjnoNWZZt8UGunnWpLdP/MADb/uQA9/74AO/+5AD3fnwVFr2UTa3lUFXfmowRDAP+zCGaKoDK/UqZD/0qjVP5Qmi75o6kEj8J9N4h/VGPGzI0igJxpTKeaaE2omWZQqLF4QJHinRhz1pQleeqjDW6abw6OZEwXsYhjEZv7sABpAP+4AIuGjBrOT5Qw/0mnNvtGm0v/i5VQ6uagF5uZZk3Ij19az3tQaeCFV2PZilpf14paXtiEVmPcjFxa1uKcFqDFjAOjxowJpfatAZT/swCRAP+3ALnsnwjDcFkt+2tuMf+GfE/706I71P2wALzyqga/35wVx6FsR+DSlRrJwoslztCTHMrJjyDN05gWx+emC8DsqAm//7cAuP+0ALr+sgC7AP2yAOb/twDk25cO77d2IPrKnDTy+bIC4/+zAOX/tADl/7UA5P+zAOTwqwfn3qIR6uupCufrqQro+bAD5/WtBen6sALn/rIA5v6yAOb/swDmpjj9Cpw640IAAAAASUVORK5CYII=","aspectRatio":3.3185840707964602,"src":"/static/81277ed0a939a3737caf9f34d564245f/0382d/gtheader.png","srcSet":"/static/81277ed0a939a3737caf9f34d564245f/5d43b/gtheader.png 375w,\\n/static/81277ed0a939a3737caf9f34d564245f/8ef08/gtheader.png 750w,\\n/static/81277ed0a939a3737caf9f34d564245f/0382d/gtheader.png 1440w","sizes":"(max-width: 1440px) 100vw, 1440px"}}}},"id":"af774100-37ac-5af8-a3a8-27e3be2cb4d3","excerpt":"GT header Kids Love: We Decided: Learn through doing Opportunity to watch educational videos and complete activities with Nickelodeon characters Surprises and challenges Daily quizzes about Nickelodeon characters and health tips about keeping the household safe Feedback and rewards Earn “seeds” as in-app currency for purchasing plants for the garden; instant response to actions, such as quiz…"}},{"node":{"frontmatter":{"title":"Presidential Hopefuls","permalink":"/project/hopefuls","updated":"November 25, 2019","description":"As a part of The Yale Politic\'s Tech Team, I helped develop this minisite showcasing The Yale Politic\'s features and interviews conducted over the past years about the presidential candidates for the 2020 election.","coverimage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAcqQaBP/xAAYEAADAQEAAAAAAAAAAAAAAAAAASECEf/aAAgBAQABBQKI7lkP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAABAx/9oACAEBAAY/AiL/xAAZEAADAAMAAAAAAAAAAAAAAAAAAREhMWH/2gAIAQEAAT8hyVqj1Dej/9oADAMBAAIAAwAAABCAH//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABYRAAMAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxA1f//EABkQAAMBAQEAAAAAAAAAAAAAAAABEUEhMf/aAAgBAQABPxCvRrBpHpXXg+UXg//Z","aspectRatio":3.3185840707964602,"src":"/static/e34025ff364d2bd5423fdc084089c754/2e3cc/hopefulsheader.jpg","srcSet":"/static/e34025ff364d2bd5423fdc084089c754/da319/hopefulsheader.jpg 375w,\\n/static/e34025ff364d2bd5423fdc084089c754/c7db7/hopefulsheader.jpg 750w,\\n/static/e34025ff364d2bd5423fdc084089c754/2e3cc/hopefulsheader.jpg 1440w","sizes":"(max-width: 1440px) 100vw, 1440px"}}}},"id":"a4f5d15d-563b-5cb6-98c3-a57f4df0e4de","excerpt":"Politic Header Politic Sketches Politic Prototype Politic Final 1 Politic Final 2\\nPolitic Final 2\\nPolitic Final 3"}}]}}}')},LJO1:function(e,t){t.__esModule=!0,t.default={body:'<path d="M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3s-4.1-.8-5.7-2.3z" fill="currentColor"/>',width:512,height:512}},R2Wd:function(e,t){t.__esModule=!0,t.default={body:'<path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z" fill="currentColor"/>',width:512,height:512}},Rlbo:function(e,t,a){"use strict";a("pIFo");var i=a("9GTS"),l=a("FdF9"),n=a("Wbzz"),r=a("9eSz"),o=a.n(r),c=a("8jAD"),A=a("R2Wd"),s=a.n(A),d=a("LJO1"),u=a.n(d);a("yw91");t.a=function(){var e=0,t=function(){var t=document.querySelectorAll(".project-slideritem"),a=t.length;t[e].classList.remove("active"),e<a-1?e++:e=0,t[e].classList.add("active"),console.log(e)},a=function(){var t=document.querySelectorAll(".project-slideritem"),a=t.length;t[e].classList.remove("active"),e>0?e--:e=a-1,t[e].classList.add("active"),console.log(e)},r=i.data;return l.default.createElement("main",{className:"projectfeatured"},l.default.createElement("ul",{className:"slider"},r.allMarkdownRemark.edges.map((function(e,i){return 0===i?l.default.createElement("li",{className:"project-slideritem active",key:e.node.id},l.default.createElement("div",{className:"projectfeatured-mobileflex"},l.default.createElement("div",{className:"imageholder"},l.default.createElement(o.a,{fluid:e.node.frontmatter.coverimage.childImageSharp.fluid,style:{maxHeight:"100%"}})),l.default.createElement("div",{className:"project-controls"},l.default.createElement("div",{className:"project-controls-grid"},l.default.createElement("button",{className:"previous",onClick:a,"aria-label":"previous-project"},l.default.createElement("span",null,l.default.createElement("i",null,l.default.createElement(c.Icon,{icon:s.a})))),l.default.createElement("button",{className:"next",onClick:t,"aria-label":"next-project"},l.default.createElement("span",null,l.default.createElement("i",null,l.default.createElement(c.Icon,{icon:u.a})))))),l.default.createElement("div",{className:"intro"},l.default.createElement(n.Link,{to:e.node.frontmatter.permalink},l.default.createElement("h1",{className:"title"},e.node.frontmatter.title.replace("&#58;",":").replace("&amp;","&"))),l.default.createElement("div",{className:"description"},e.node.frontmatter.description)))):l.default.createElement("li",{className:"project-slideritem",key:e.node.id},l.default.createElement("div",{className:"projectfeatured-mobileflex"},l.default.createElement("div",{className:"imageholder"},l.default.createElement(o.a,{fluid:e.node.frontmatter.coverimage.childImageSharp.fluid,style:{maxHeight:"100%"}})),l.default.createElement("div",{className:"project-controls"},l.default.createElement("div",{className:"project-controls-grid"},l.default.createElement("button",{className:"previous",onClick:a},l.default.createElement("span",null,l.default.createElement("i",null,l.default.createElement(c.Icon,{icon:s.a})))),l.default.createElement("button",{className:"next",onClick:t},l.default.createElement("span",null,l.default.createElement("i",null,l.default.createElement(c.Icon,{icon:u.a})))))),l.default.createElement("div",{className:"intro"},l.default.createElement(n.Link,{to:e.node.frontmatter.permalink},l.default.createElement("h1",{className:"title"},e.node.frontmatter.title.replace("&#58;",":").replace("&amp;","&"))),l.default.createElement("div",{className:"description"},e.node.frontmatter.description))))}))))}},yw91:function(e,t,a){}}]);
//# sourceMappingURL=b7d26b0c0deaeea7de1eef0680d2c692189e1442-2a58d1abfe911b719759.js.map