"use strict";!function(){var t,i,s=document.getElementById("web_bg"),e=document.getElementById("content-inner"),n=Cookies.get("opacity")?Cookies.get("opacity"):.5,a=Cookies.get("bg"),o=Cookies.get("animation"),h=Cookies.get("type");a&&(s.style.background=a,s.setAttribute("data-type",h),o&&(s.style.animation=o)),i="--light_bg_color: rgb(255, 255, 255,"+(t=n)+");",t="--dark_bg_color: rgba(18,18,18,"+t+");",e.setAttribute("style",i+t);for(var o=document.getElementById("mobile-sidebar-menus"),r=o.getElementsByClassName("menus_item_child"),l=o.getElementsByClassName("menus-expand"),g=0;g<r.length;g++)r[g].style.display="none",l[g].className+=" menus-closed"}(),function(){function i(t){this.wrap=t.wrap,this.imgList=t.imgList,this.imgNum=this.imgList.length,this.width=t.width||$(this.wrap).width(),this.height=t.height||$(this.wrap).height(),this.isAuto=t.isAuto||!0,this.moveTime=t.moveTime,this.direction=t.direction||"right",this.btnWidth=t.btnWidth,this.btnHeight=t.btnHeight,this.spanWidth=t.spanWidth,this.spanHeight=t.spanHeight,this.spanColor=t.spanColor,this.activeSpanColor=t.activeSpanColor,this.btnBackgroundColor=t.btnBackgroundColor,this.spanRadius=t.spanRadius,this.spanMargin=t.spanMargin,this.flag=!1,this.nowIndex=0,this.createDom(),this.initStyle(),this.bindEvent(),!0===this.isAuto&&this.autoMove()}i.prototype.createDom=function(){var i=$('<ul class="imgList"></ul>'),s=$('<div class="spot"></div>');this.imgList.forEach(function(t){t='<li><a  href=" '+t.a+'target="_blank" "><img src=" '+t.img+' "></a></li>';i.append(t);s.append("<span></span>")});var t=$('<div class="left-btn"><i class="fas fa-angle-left"></i></div>'),e=$('<div class="right-btn"><i class="fas fa-angle-right"></i></div>');this.wrap.append(i).append(t).append(e).append(s)},i.prototype.initStyle=function(){$("*",this.wrap).css({margin:0,padding:0,listStyle:"none"}),$(this.wrap).css({overflow:"hidden",position:"relative"}),$(".imgList",this.wrap).css({width:this.width,height:this.height,position:"relative"}),$(".imgList li",this.wrap).css({width:this.width,height:this.height,position:"absolute",left:0,top:0,display:"none"}).eq(this.nowIndex).css({display:"block"}),$(".imgList li a, .imgList li a img",this.wrap).css({display:"inline-block",width:this.width,height:this.height}),$(".left-btn, .right-btn",this.wrap).css({width:this.btnWidth,height:this.btnHeight,backgroundColor:this.btnBackgroundColor,color:"#fff",textAlign:"center",lineHeight:this.btnHeight+"px",position:"absolute",top:"50%",marginTop:-this.btnHeight/2,cursor:"pointer"}),$(".right-btn",this.wrap).css({right:0}),$(".spot",this.wrap).css({height:this.spanHeight+2*this.spanMargin,position:"absolute",left:"50%",marginLeft:-this.imgNum*(this.spanWidth+2*this.spanMargin)/2,bottom:10}),$(".spot span",this.wrap).css({display:"inline-block",width:this.spanWidth,height:this.spanHeight,margin:this.spanMargin,backgroundColor:this.spanColor,borderRadius:this.spanRadius,cursor:"pointer"}).eq(this.nowIndex).css({backgroundColor:this.activeSpanColor})},i.prototype.bindEvent=function(){var i=this;$(".left-btn",this.wrap).click(function(){i.move("prev")}),$(".right-btn",this.wrap).click(function(){i.move("next")}),$(".spot span").click(function(t){i.move($(this).index())}),$(this.wrap).mouseenter(function(){clearInterval(i.time)})},i.prototype.move=function(t){if(this.flag)return!1;switch(this.flag=!0,t){case"prev":0===this.nowIndex?this.nowIndex=this.imgNum-1:this.nowIndex--;break;case"next":this.nowIndex===this.imgNum-1?this.nowIndex=0:this.nowIndex++;break;default:this.nowIndex=t}var i=this;$(".imgList li",this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function(){i.flag=!1}),$(".spot  span",this.wrap).css({backgroundColor:this.spanColor}).eq(this.nowIndex%this.imgNum).css({backgroundColor:this.activeSpanColor})},i.prototype.autoMove=function(){this.time=setInterval(function(){("left"==this.direction?$(".left-btn",this.wrap):$(".right-btn",this.wrap)).trigger("click")},this.moveTime)},$.fn.extend({slider:function(t){t.wrap=this,new i(t)}})}(),function(){var t=document.getElementsByClassName("full_page");0<t.length&&(t[0].style.backgroundImage='url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg")')}(),$(".toc-link").click(function(t){console.log(this.href)}),$(document).ready(function(){$(".highlight-tools").append('<i class="fas fa-fingerprint fullScreen"></i>'),$(".highlight-tools").delegate(".fullScreen","click",function(){$(this).parent().parent().toggleClass("code-block-fullscreen")})});