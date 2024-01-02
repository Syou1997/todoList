//判斷使用者是否第一次用，如果是就要先輸入使用者名稱
while (localStorage.getItem("userName") === null || localStorage.getItem("userName") === "null" || localStorage.getItem("userName") === "") {
    const userName = prompt("歡迎使用，請輸入您的姓名");
    localStorage.setItem("userName", userName);

    const n = [];
    localStorage.setItem("undownArr", JSON.stringify(n));
    localStorage.setItem("downArr", JSON.stringify(n));
}
//將使用者名稱帶入標題
h1El = document.querySelector("h1");
h1El.innerText = localStorage.getItem("userName") + " 代辦事項";


//未完成事項的array
let undownArr = [];
//取得儲存資料後將內容丟入未完成的array的方法
function throwUndownArr() {
    let undownArrCopy = [];
    undownArrCopy = JSON.parse(localStorage.getItem("undownArr"));
    undownArr = undownArrCopy;
}
throwUndownArr();

//渲染undownArr
function render(length) {
    if (undownArr.length > 0) {
        for (i = 0; i < undownArr.length; i++) {
            //抓出未完成區域的擷點
            let undone_areaEl = document.querySelector(".undone_area");
            //製作新的容器標籤然後加上class
            let newDiv = document.createElement("div");
            newDiv.classList.add("text_frame")
            //製作2個P段落然後加上class，並加入文字
            let pText = document.createElement("p");
            pText.classList.add("text");
            pText.innerText = undownArr[i].text;
            let pTime = document.createElement("p");
            pTime.classList.add("time");
            pTime.innerText = undownArr[i].dateTime;

            //製作完成勾勾按鈕和垃圾桶按鈕然後加上class和type
            let checkBtn = document.createElement("button");
            checkBtn.classList.add("check_btn");
            checkBtn.setAttribute("type", "button");

            let trashBtn = document.createElement("button");
            trashBtn.classList.add("trash_btn");
            trashBtn.setAttribute("type", "button");

            //製作完成勾勾icon和垃圾桶icon然後加上class
            //完成勾勾icon
            let checkIcon = document.createElement("i");
            checkIcon.classList.add("fa-solid");
            checkIcon.classList.add("fa-circle-check");
            checkIcon.classList.add("icon");
            //垃圾桶icon
            let trashIcon = document.createElement("i");
            trashIcon.classList.add("fa-solid");
            trashIcon.classList.add("fa-trash");
            trashIcon.classList.add("icon");

            //將2個icon放入button
            checkBtn.appendChild(checkIcon);
            trashBtn.appendChild(trashIcon);

            //把製作的所有丟到class名為text_frame的div裡面
            newDiv.appendChild(pText);
            newDiv.appendChild(pTime);
            newDiv.appendChild(checkBtn);
            newDiv.appendChild(trashBtn);

            //再把容器丟入undone_area 未完成區域的div裡面
            undone_areaEl.appendChild(newDiv);
        }
    }
}
//先判斷undownArr裡面有沒有東西，如果沒有就不執行渲染undownArr的方法
if (undownArr === null) {
    undownArr = [];
} else {
    render(undownArr.length);
}



//完成事項的array
let downArr = [];

//取得儲存資料後將內容丟入未完成的array的方法
function throwDownArr() {
    let downArrCopy = [];
    downArrCopy = JSON.parse(localStorage.getItem("downArr"));
    downArr = downArrCopy;
}
throwDownArr();

//渲染downArr的方法
function render2(length) {
    if (downArr.length > 0) {
        for (i = 0; i < downArr.length; i++) {
            //抓出完成區域的擷點
            let done_areaEl = document.querySelector(".done_area");

            //製作新的容器標籤然後加上class
            let newDiv = document.createElement("div");
            newDiv.classList.add("text_frame")
            //製作2個P段落然後加上class，並加入文字
            let pText = document.createElement("p");
            pText.classList.add("text");
            pText.innerText = downArr[i].text;
            let pTime = document.createElement("p");
            pTime.classList.add("time");
            pTime.innerText = downArr[i].dateTime;

            //製作垃圾桶按鈕然後加上class和type
            let trashBtn = document.createElement("button");
            trashBtn.classList.add("trash_btn2");
            trashBtn.setAttribute("type", "button");

            //製作垃圾桶icon然後加上class
            //垃圾桶icon
            let trashIcon = document.createElement("i");
            trashIcon.classList.add("fa-solid");
            trashIcon.classList.add("fa-trash");
            trashIcon.classList.add("icon");

            //製作取消完成的按鈕然後加上class和type
            let cancelBtn = document.createElement("button");
            cancelBtn.classList.add("cancel_btn");
            cancelBtn.setAttribute("type", "button");
            //加上取消的Icon
            let cancelIcon = document.createElement("i");
            cancelIcon.classList.add("fa-solid");
            cancelIcon.classList.add("fa-rotate-left");
            cancelIcon.classList.add("icon");

            //將icon放入button
            trashBtn.appendChild(trashIcon);
            cancelBtn.appendChild(cancelIcon);

            //把製作的所有丟到class名為text_frame的div裡面
            newDiv.appendChild(pText);
            newDiv.appendChild(pTime);
            newDiv.appendChild(cancelBtn);
            newDiv.appendChild(trashBtn);


            //再把容器丟入done_area 未完成區域的div裡面
            done_areaEl.appendChild(newDiv);
        }
    }
}
//先判斷undownArr裡面有沒有東西，如果沒有就不執行渲染undownArr的方法
if (downArr === null) {
    undownArr = [];
} else {
    render2(downArr.length);
}

//新增的內容
let info = {
    text: null,
    dateTime: null
};
//取得新增按鈕的元素
const addButton = document.querySelector(".icon_add");

addButton.addEventListener("click", (e) => {
    //製作新項目的方法(給動畫用的)
    function makeFrame() {
        //製作新的元素
        //抓出未完成區域的擷點
        let undone_areaEl = document.querySelector(".undone_area");
        //製作新的容器標籤然後加上class
        let newDiv = document.createElement("div");
        newDiv.classList.add("text_frame")
        //製作2個P段落然後加上class，並加入文字
        let pText = document.createElement("p");
        pText.classList.add("text");
        pText.innerText = info.text;
        let pTime = document.createElement("p");
        pTime.classList.add("time");
        pTime.innerText = info.dateTime;

        //製作完成勾勾按鈕和垃圾桶按鈕然後加上class和type
        let checkBtn = document.createElement("button");
        checkBtn.classList.add("check_btn");
        checkBtn.setAttribute("type", "button");

        let trashBtn = document.createElement("button");
        trashBtn.classList.add("trash_btn");
        trashBtn.setAttribute("type", "button");

        //製作完成勾勾icon和垃圾桶icon然後加上class
        //完成勾勾icon
        let checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-solid");
        checkIcon.classList.add("fa-circle-check");
        checkIcon.classList.add("icon");
        //垃圾桶icon
        let trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid");
        trashIcon.classList.add("fa-trash");
        trashIcon.classList.add("icon");

        //將2個icon放入button
        checkBtn.appendChild(checkIcon);
        trashBtn.appendChild(trashIcon);

        //把製作的所有丟到class名為text_frame的div裡面
        newDiv.appendChild(pText);
        newDiv.appendChild(pTime);
        newDiv.appendChild(checkBtn);
        newDiv.appendChild(trashBtn);

        //再把容器丟入undone_area 未完成區域的div裡面
        undone_areaEl.appendChild(newDiv);

        newDiv.style.animation = "scaleUp 0.5s ease forwards"

        //新建的勾勾按鈕也要有功能
        checkBtn.addEventListener("click", (e) => {
            //取Good印章的元素後加入動畫style
            const goodImgEl = document.querySelector(".good_img");
            goodImgEl.style.animation = "good 1.5s ease-in"

            //1.5秒內鎖住所有勾勾按鈕不讓使用者連續按
            const checkBtnEl = document.querySelectorAll(".check_btn");
            checkBtnEl.forEach((item) => {
                item.disabled = true;
            })

            //移除(修改動畫名稱)good_img的方法+解除勾勾按鈕的鎖定
            function deleteStyle() {
                goodImgEl.style.animation = "none 2s ease-in";

                const checkBtnEl = document.querySelectorAll(".check_btn");
                checkBtnEl.forEach((item) => {
                    item.disabled = false;
                })


            }
            setTimeout(function () {
                deleteStyle();
            }, 1500);

            //將打勾的內容移動到完成的Storage裡面
            //把資料從undownArr裡刪除+放入已完成的downArr
            //抓出刪除的內容
            const deleteText = e.target.parentElement.parentElement.childNodes[0].innerText;
            const deleteDateTime = e.target.parentElement.parentElement.childNodes[1].innerText


            // //判斷要刪除的項目和時間
            undownArr = JSON.parse(localStorage.getItem("undownArr"));
            let newUndownArr = [];
            downArr = JSON.parse(localStorage.getItem("downArr"));
            undownArr.forEach((item) => {

                if (item.text === deleteText && item.dateTime === deleteDateTime) {
                    // //將項目丟到已經完成的Array

                    downArr.push(item);

                } else {
                    newUndownArr.push(item);

                }
            })

            undownArr = newUndownArr;

            //將完成與未完成的陣列存回Storage後渲染
            localStorage.setItem("undownArr", JSON.stringify(undownArr));
            localStorage.setItem("downArr", JSON.stringify(downArr));

            // render(undownArr.length);
            // render2(downArr.length);

            setTimeout(window.location.reload(), 6500);



        })

        //新建的垃圾桶也要有刪除的方法
        trashBtn.addEventListener("click", (e) => {
            //把資料從undownArr裡刪除
            //抓出刪除的內容
            const deleteText = e.target.parentElement.parentElement.childNodes[0].innerText;
            const deleteDateTime = e.target.parentElement.parentElement.childNodes[1].innerText

            //判斷要刪除的項目和時間
            let newUndownArr = [];
            undownArr.forEach((item) => {
                if (item.text === deleteText && item.dateTime === deleteDateTime) {

                } else {
                    newUndownArr.push(item)
                }
            })

            undownArr = newUndownArr;
            console.log("刪除新增按鈕後的undownArr");
            console.log(undownArr);

            //將過濾好的undownArr存進localStorage
            // 先刪除原本資料後再保存到陣列到localStorage
            localStorage.removeItem("undownArr");
            localStorage.setItem("undownArr", JSON.stringify(undownArr));


            //加入要刪除的動畫CSS
            e.target.parentElement.parentElement.style.animation = "scaleDown 0.5s ease forwards";
            e.target.parentElement.parentElement.addEventListener("animationend", () => {
                e.target.remove();
                setTimeout(function () {
                    window.location.reload();
                }, 1);

            })
            //重新渲染畫面


        })
    }
    //抓出input的內容的截點
    const inputInfoEl = document.querySelector(".input_info");
    //抓出input的日期的截點
    const inputDatetimeEl = document.querySelector(".input_datetime");

    //將新增的資訊存成物件
    if (inputInfoEl.value === "") {
        return alert("代辦事項不可空白");
    }
    info.text = inputInfoEl.value;
    if (inputDatetimeEl.value === "") {
        info.dateTime = "未設定";
    } else {
        info.dateTime = inputDatetimeEl.value.replace("T", " ");
    }


    //如果有項目和時間和現有的重複就不能新增一模一樣的
    if (undownArr.length > 0) {
        undownArr = JSON.parse(localStorage.getItem("undownArr"));



        for (i = 0; i < undownArr.length; i++) {
            if (info.text === undownArr[i].text && undownArr[i].dateTime === info.dateTime) {

                return alert("此項目已存在");

            }
            else {
                if (i === undownArr.length - 1) {
                    //將物件丟到站存陣列後再覆蓋掉原本的
                    undownArr.push(info);
                    //先刪除原本資料後再保存到陣列到localStorage
                    localStorage.removeItem("undownArr");
                    localStorage.setItem("undownArr", JSON.stringify(undownArr))
                    // undownArr = JSON.parse(localStorage.getItem("undownArr"));
                    makeFrame();
                    //清空input
                    inputInfoEl.value = null;
                    inputDatetimeEl.value = null;
                    return;
                }


            }
        }


    }
    //連一筆資料都沒有的話就直接存
    else {
        undownArr.push(info);
        localStorage.setItem("undownArr", JSON.stringify(undownArr));
        makeFrame();
        //清空input
        inputInfoEl.value = null;
        inputDatetimeEl.value = null;

    }



});

//取得垃圾桶按鈕的元素
const trashBtnEl = document.querySelectorAll(".trash_btn");
//點擊垃圾桶後縮小
trashBtnEl.forEach((trash) => {
    trash.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.add("remove");
    })
});

//點擊垃圾桶後刪除
trashBtnEl.forEach((trash) => {
    let textFrame = trash.parentElement.parentElement;
    textFrame.addEventListener("transitionend", (e) => {
        e.target.remove();
        //把資料從undownArr裡刪除
        //抓出刪除的內容
        const deleteText = e.target.children[0].innerText;
        const deleteDateTime = e.target.children[1].innerText
        //判斷要刪除的項目和時間
        let newUndownArr = [];
        undownArr.forEach((item) => {
            if (item.text === deleteText && item.dateTime === deleteDateTime) {

            } else {
                newUndownArr.push(item)
            }
        })

        undownArr = newUndownArr;
        //將過濾好的undownArr存進localStorage
        // 先刪除原本資料後再保存到陣列到localStorage
        localStorage.removeItem("undownArr");
        localStorage.setItem("undownArr", JSON.stringify(undownArr));

    })


});


//點擊勾勾按鈕
const checkBtnEl = document.querySelectorAll(".check_btn");
checkBtnEl.forEach((check) => {
    check.addEventListener("click", (e) => {

        //取Good印章的元素後加入動畫style
        const goodImgEl = document.querySelector(".good_img");
        goodImgEl.style.animation = "good 1.5s ease-in"

        //1.5秒內鎖住所有勾勾按鈕不讓使用者連續按
        const checkBtnEl = document.querySelectorAll(".check_btn");
        checkBtnEl.forEach((item) => {
            item.disabled = true;
        })

        //移除(修改動畫名稱)good_img的方法+解除勾勾按鈕的鎖定
        function deleteStyle() {
            goodImgEl.style.animation = "none 2s ease-in";

            const checkBtnEl = document.querySelectorAll(".check_btn");
            checkBtnEl.forEach((item) => {
                item.disabled = false;
            })
        }
        setTimeout(function () {
            deleteStyle();
        }, 1500);

        //將打勾的內容移動到完成的Storage裡面

        //把資料從undownArr裡刪除+放入已完成的downArr
        //抓出刪除的內容
        const deleteText = e.target.parentElement.parentElement.childNodes[0].innerText;
        const deleteDateTime = e.target.parentElement.parentElement.childNodes[1].innerText


        // //判斷要刪除的項目和時間
        undownArr = JSON.parse(localStorage.getItem("undownArr"));
        let newUndownArr = [];
        downArr = JSON.parse(localStorage.getItem("downArr"));
        undownArr.forEach((item) => {
            if (item.text === deleteText && item.dateTime === deleteDateTime) {
                // //將項目丟到已經完成的Array

                downArr.push(item);

            } else {
                newUndownArr.push(item);

            }
        })

        undownArr = newUndownArr;

        //將完成與未完成的陣列存回Storage後渲染
        localStorage.setItem("undownArr", JSON.stringify(undownArr));
        localStorage.setItem("downArr", JSON.stringify(downArr));


        // render(undownArr.length);
        // render2(downArr.length);
        setTimeout(window.location.reload(), 6500);



    })

});



//點擊垃圾桶後刪除(從已完成刪除)
const trashBtn2El = document.querySelectorAll(".trash_btn2");

//點擊垃圾桶後縮小(已完成)
trashBtn2El.forEach((trash) => {
    trash.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.add("remove");
    })
});

//點擊垃圾桶後刪除(已完成)
trashBtn2El.forEach((trash) => {
    let textFrame = trash.parentElement.parentElement;
    textFrame.addEventListener("transitionend", (e) => {
        e.target.remove();
        //把資料從downArr裡刪除
        //抓出刪除的內容
        const deleteText = e.target.children[0].innerText;
        const deleteDateTime = e.target.children[1].innerText
        //判斷要刪除的項目和時間
        let newDownArr = [];
        downArr.forEach((item) => {
            if (item.text === deleteText && item.dateTime === deleteDateTime) {

            } else {
                newDownArr.push(item)
            }
        })

        downArr = newDownArr;
        //將過濾好的undownArr存進localStorage
        // 先刪除原本資料後再保存到陣列到localStorage
        localStorage.removeItem("downArr");
        localStorage.setItem("downArr", JSON.stringify(downArr));

    })


});

//點擊取消按鈕
const cancelBtn = document.querySelectorAll(".cancel_btn");
cancelBtn.forEach((cancel) => {
    cancel.addEventListener("click", (e) => {
        //抓出刪除的內容
        const deleteText = e.target.parentElement.parentElement.childNodes[0].innerText;
        const deleteDateTime = e.target.parentElement.parentElement.childNodes[1].innerText
        console.log(deleteText);
        console.log(deleteDateTime);

        // //判斷要刪除的項目和時間
        downArr = JSON.parse(localStorage.getItem("downArr"));
        let newDownArr = [];
        undownArr = JSON.parse(localStorage.getItem("undownArr"));


        downArr.forEach((item) => {
            if (item.text === deleteText && item.dateTime === deleteDateTime) {
                // //將取消的項目丟到未完成的Array
                undownArr.push(item);

            } else {
                newDownArr.push(item);

            }
        })

        downArr = newDownArr;

        //將完成與未完成的陣列存回Storage後渲染
        localStorage.setItem("undownArr", JSON.stringify(undownArr));
        localStorage.setItem("downArr", JSON.stringify(downArr));

        window.location.reload();


    })
})

//變更使用這名稱
const changeNameEl = document.getElementById("changeName")
changeNameEl.addEventListener("click", () => {

    let yes = confirm("您確定要變更使用者名稱嗎？");
    if (yes) {
        let newName = prompt("請輸入新的使用者名稱");
        localStorage.setItem("userName", newName);
        window.location.reload();
    } else {
        alert("已取消");
    }
    


})
