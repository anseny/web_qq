function getByClass(clsName,father){
    var fa = father?document.getElementById(father):document;
    var eles = [];
    var cls = fa.getElementsByTagName('*');
    for(var i = 0; i<cls.length;i++){
        if(cls[i].className==clsName){
            eles.push(cls[i]);
        }
    }
    return eles;
}
window.onload = function drag(){
    var biaoTi = getByClass('login_logo_webqq','loginPanel')[0];
    //拖曳
    biaoTi.onmousedown=moves2;
    //关闭
    var closeWaikuan = document.getElementById('ui_boxyClose');
    closeWaikuan.onclick = function () {
        document.getElementById('loginPanel').style.display='none';
      }
    var loginState = document.getElementById('loginState'),
        stateList = document.getElementById('loginStatePanel'),
        stateLi = stateList.getElementsByTagName('li'),
        txt = document.getElementById('login2qq_state_txt'),
        loginStateShow = document.getElementById('loginStateShow');
        //点击状态显示状态栏
    loginState.onclick = function(e){
            e = e||window.event;
            //阻止点击document关闭状态栏（statelist）的冒泡
            if(document.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
            stateList.style.display = 'block';
    }
   for(var i=0;i<stateLi.length;i++){
            //鼠标指向状态栏状态显示背景颜色
            stateLi[i].onmouseover = function(){
                this.style.background = "#567";
            }
            stateLi[i].onmouseout = function(){
                this.style.background = "white";
            }
            //点击状态修改状态文字和图标
            stateLi[i].onclick = function(e){
                e = e || window.event;
                if(e.stopPropagation){
                    e.stopPropagation();
                    }else{
                    e.cancelBubble=true;
                    }
                var id = this.id;
                stateList.style.display='none';
                loginStateShow.className='login-state-show '+id;
                txt.innerHTML = getByClass('stateSelect_text',id)[0].innerHTML;//getByClass返回数组，所以要加[0]
               
            }
        }
        document.onclick = function(e){ 
            stateList.style.display = 'none';
        }
    }

// function moves(){
//     var waiKuan = document.getElementById('loginPanel');
//     document.onmousemove = function(event){
//         event = event||window.event;
//         waiKuan.style.left =event.clientX+'px';
//         waiKuan.style.top =event.clientY+'px'; 
//     }
// }
function moves2(event){
    var waikuan = document.getElementById('loginPanel'),
    event = event||window.event;
    //点击时光标到面板的距离
    disx = event.clientX-waikuan.offsetLeft,
    disy = event.clientY-waikuan.offsetTop;
    //移动
    document.onmousemove = function(event){
        //event = event||window.event;
        //movesgo(event,disx,disy);
        var waikuan = document.getElementById('loginPanel');
        event = event||window.event;
        var l = event.clientX-disx;
        var t =event.clientY-disy;
        // waikuan.style.left = l+'px';
        // waikuan.style.top = t+'px';
        //使移动waikuan在浏览器窗口内
        var wi = document.documentElement.clientWidth||document.body.clientWidth;
        var hi = document.documentElement.clientHeight||document.body.clientHeight;
        var wimax = wi - waikuan.offsetWidth;
        var himax = hi - waikuan.offsetHeight;
        if(l<0){
            l = 0;
        }else if(l>wimax){
            l = wimax;
        }
        if(t<0){
            t = 0;
        }else if(t>himax){
            t = himax;
        }
        waikuan.style.left = l+'px';
        waikuan.style.top = t+'px';
        //document.title = l;
   }
   document.onmouseup = function(){
       document.onmousemove = null;

   }
}
// function movesgo(e,posx,posy){
//     var waiKuan = document.getElementById('loginPanel'),
//     l = e.clientX-posx,
//     t =e.clientY-posy;
//     waiKuan.style.left = l+"px";
//     waiKuan.style.top = t+"px"; 
// }
