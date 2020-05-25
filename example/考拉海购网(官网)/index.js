//分类导航栏数据调动
// 以下全部代码用于数据调整测试，仅仅是随机试验，可以不用
function dataTest() {
    var verticalLi = document.getElementsByClassName('vertical')[0].getElementsByTagName('li');
    var verticalImg = document.getElementsByClassName('rightContext')[0].getElementsByTagName('img')
    var leftContextLi = document.getElementsByClassName('leftContext')[0].getElementsByTagName('li');
    for (i in verticalLi) {
        verticalLi[i].onmouseover = function (e) {
            for (i in verticalLi) {
                if (verticalLi[i] === this) {
                    res = i - 10;
                    if (res < 0) {
                        leftContextLi[0].innerText = '护肤';
                        verticalImg[1].src = "./icc1uivj43.jpg";
                        verticalImg[2].src = "./idvqc2kv42.jpg";
                        verticalImg[3].src = "./ii7faa9k34_120_120.jpg";
                        verticalImg[6].src = "./iqmfbh3y97_244_100.jpg";

                    } else {
                        res %= 2;
                        switch (res) {
                            case 0:
                                leftContextLi[0].innerText = '偶数产品';
                                verticalImg[1].src = "./1cj2db4o551_120_120.jpg";
                                verticalImg[2].src = "./igats98t62_120_120.jpg";
                                verticalImg[3].src = "./ii7faa9k34_120_120.jpg";
                                verticalImg[6].src = "./iqmf9t6y71_244_100.jpg"
                                break;
                            case 1:
                                leftContextLi[0].innerText = '结果为奇数';
                                verticalImg[1].src = "./igats98t62_120_120.jpg";
                                verticalImg[2].src = "./ii7faa9k34_120_120.jpg";
                                verticalImg[3].src = "./1c8527h6j15_244_100.jpg";
                                verticalImg[6].src = "./广告.jpg"
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }
    }
}

dataTest();

//------------轮播图-------------
var times = 0;
// 获取轮播图图片对象
const rotationImg = document.getElementsByClassName('RotationChart')[0].getElementsByTagName('img');
// 获取序列条小圆点对象
const bottomListLi = document.getElementsByClassName('bottomList')[0].getElementsByTagName('li');

// 初始值，第一次运行的时候第一张图片显示及底部序列条小圆点标记颜色显示
rotationImg[times].style.opacity = 1;
bottomListLi[times].style.backgroundColor = '#d22147';

function rotation() {
    // 设定计时器
    var roatationChart = setInterval(function () {
        // 当次数大于4次时，数组为4的图片（也就是第5张图片）透明度变为0，数组为0的图片透明度变为1
        if (times >= 4) {
            rotationImg[4].style.opacity = 0;
            rotationImg[0].style.opacity = 1;
            times = 0;
        }
        // 当次数小于4次时，以当前次数为下标的数组的图片透明度变为0，下一次为下标的数组的图片透明度变为1
        else if (times < 4) {
            rotationImg[times].style.opacity = 0;
            rotationImg[++times].style.opacity = 1;
        }
        for (let i = 0; i < bottomListLi.length; i++) {
            bottomListLi[i].style.backgroundColor = 'rgb(255, 255, 255)';
        }
        bottomListLi[times].style.backgroundColor = '#d22147';
    }, 4000)
}

rotation(); //定义函数后并不能启用，所以这里还要写这个函数名字来进行调用，才能运行


// 按钮操控轮播图
// 获取按钮对象
const RotationButtom = document.getElementsByClassName('RotationChart')[0].getElementsByTagName('span');

//底部序列条颜色改变函数，用于让所有序列小圆圈变白色，然后只指定当前次数所在的序列为暗红色
function bottomListLi_Change() {
    for (let i = 0; i < bottomListLi.length; i++) {
        bottomListLi[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
    bottomListLi[times].style.backgroundColor = '#d22147';
}

// RotationButtom[0]表示切换下一张图片
RotationButtom[0].onclick = function () {
    clearInterval(rotationImg);
    rotationImg[times].style.opacity = 0;
    times++;
    // 判断条件，当times递增后的值大于4次时，times归零，让图片从第一张图片开始切
    if (times > 4) {
        times = 0;
    }
    rotationImg[times].style.opacity = 1;
    bottomListLi_Change();
}
// RotationButtom[1]表示切换上一张图片
RotationButtom[1].onclick = function () {
    clearInterval(rotationImg);
    rotationImg[times].style.opacity = 0;
    times--;
    // 判断条件，当times递减后的值小于0次时，times跳到第5次切图,意思就是从第一张跳到最后一张
    if (times < 0) {
        times = 4;
    }
    rotationImg[times].style.opacity = 1;
    bottomListLi_Change();
}

//点击相应的序列条小圆圈后切换到相应的图片
for (let i = 0; i < bottomListLi.length; i++) {
    bottomListLi[i].onclick = function () {
        console.log(i);
        for (let i = 0; i < bottomListLi.length; i++) {
            if (bottomListLi[i] === this) {
                times = i;
                bottomListLi_Change();
                for (let z = 0; z < rotationImg.length; z++) {
                    rotationImg[z].style.opacity = 0;
                }
                rotationImg[times].style.opacity = 1;
                // 这个地方和通过按钮操控切图的原理是一样的，这样做的目的是为了循环切图，而不会跳出循环，产生bug
                if (times >= 4) {
                    times = 0;
                } else {
                    times++;
                }
            }
        }
    }
}

//---------------商品栏部分----------------------
const goodsLi = document.getElementsByClassName('goodsList')[0].getElementsByTagName('li');
for (let i = 0; i < goodsLi.length; i++) {
    goodsLi[i].onmouseover = function () {
        for (let i = 0; i < goodsLi.length; i++) {
            goodsLi[i].style.zIndex = 1;
        }
        this.style.zIndex = 9999;
    }
}

//--------------右侧导航栏部分-------------------
// 获取右侧导航栏对象
const rightNav = document.getElementsByClassName('rightNav')[0];
window.onscroll = function () {
    // scrollTop表示滚动后距离顶端多少
    // 当距离页面顶端大于799px的距离时会出现右侧导航栏，否则右侧导航条会消失
    if (document.documentElement.scrollTop >= 799) {
        rightNav.style.display = "block";
    } else {
        rightNav.style.display = "none";
    }
}

//点击右侧导航栏后被点击的相应li会变暗红色
const rightNavLi = document.querySelectorAll('.rightNav li');
for (let i = 0; i < rightNavLi.length; i++) {
    rightNavLi[i].onclick = function () {
        // 遍历当前所有的右侧导航栏 li ,然后设置为红色
        for (let i = 0; i < rightNavLi.length; i++) {
            rightNavLi[i].style.backgroundColor = '#f03048';
        }
        // 设置所点击的对象底色为红色
        this.style.backgroundColor = 'rgb(175, 36, 52)';
    }
}