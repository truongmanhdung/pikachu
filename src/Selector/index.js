
let checkHandle = [];
const rows = sessionStorage.getItem("rows");
const cols = sessionStorage.getItem("cols");

// return true la hết đường đi, thuc hien dao mang > va nguoc lai
export const  addSameId = (list) => {
    let flag = true; //Khoi tao mac dinh la het duong di ::!!
    for (let i = 0; i < rows*3; i++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < cols; k++) {
                if (list[j][k].id === i && list[j][k].status === false) {
                    list[j][k].index = j;
                    list[j][k].indexItem = k;
                    checkHandle.push(list[j][k]);
                }
            }
        }
        if(!checkEndRoad(list)) {
            flag = false; // còn đường đi
            break;
        }
        checkHandle = [];
    }
    checkHandle = [];
    return flag; // return het đường đi
}

//return true la het duong di voi object chua cac con co cung id va nguoc lai :::))
export const checkEndRoad = (list) => {
    for(let i = 0; i < checkHandle.length; i++){
        for(let j = i+1; j < checkHandle.length; j++){
            if(checkTwoPoint2(list, checkHandle[i].index, checkHandle[j].index, checkHandle[i].indexItem, checkHandle[j].indexItem, checkHandle[i], checkHandle[j])){
                return false;
            }
        }
    }
    return true;
}

export const checkLineX = (list, x1, x2, y1, y2) => { //check theo hàng
    let min = Math.min(y1, y2);
    let max = Math.max(y1, y2);
    if(x1 === x2) {
        for(let i = min; i <= max; i++) {
            if(!list[x1][i].status) {
                return false;
            }
        }
        return true;
    }
}

export const checkLineY = (list, x1, x2, y1, y2) => {//xét tọa độ y(check theo cột)
    let min = Math.min(x1, x2);
    let max = Math.max(x1, x2);
    if(y1 === y2) {
        for(let i = min; i <= max; i++) {
            if(!list[i][y1].status) {
                return false;
            }
        }
        return true;
    }
}

export const checkRectX = (list, pMin, pMax) => {
    //xét duyệt các đường đi theo chiều ngang phạm vi hcn
    if(pMin.indexItem > pMax.indexItem) {
        [pMin, pMax] = [pMax, pMin];
    }
    for(let y = pMin.indexItem + 1; y < pMax.indexItem; y++) {
        if (
            checkLineX(list, pMin.index, pMin.index, pMin.indexItem, y) &&
            checkLineY(list, pMin.index, pMax.index , y, y) &&
            checkLineX(list, pMax.index, pMax.index, y, pMax.indexItem)
        ) {
            return true;
        }
    }
    return false;
}

export const checkRectY = (list, pMin, pMax) => {
    //xét duyệt các đường đi theo chiều dọc phạm vi hcn
    if(pMin.index > pMax.index) {
        [pMin, pMax] = [pMax, pMin];
    }
    for(let x = pMin.index + 1; x < pMax.index; x++) {
        if (
            checkLineY(list, pMin.index, x, pMin.indexItem, pMin.indexItem) &&
            checkLineX(list, x, x , pMin.indexItem, pMax.indexItem ) &&
            checkLineY(list, x, pMax.index , pMax.indexItem, pMax.indexItem)
        ) {
            return true;
        }
    }
    return false;
}


export const checkMoreX = (list, type, pMin, pMax) => {
    //xet mo rong theo chieu ngang
    if(pMin.indexItem > pMax.indexItem) {
        [pMin, pMax] = [pMax, pMin];
    }
    let y = pMax.indexItem;
    let row = pMin.index;
    if(type === -1){
        y = pMin.indexItem;
        row = pMax.index;
    }
    if(checkLineX(list, row, row, pMin.indexItem, pMax.indexItem)){
        while(list[pMin.index][y].status && list[pMax.index][y].status) {
            if(checkLineY(list, pMin.index, pMax.index, y, y)) {
                return true;
            }
            y += type;
            if (!list[pMin.index][y]) {
                return true;
            }
        }
    }
    return false;
}

//xét mở rộng theo chiều dọc
export const checkMoreY = (list, type, pMin, pMax) => {
    if(pMin.index > pMax.index) {
        [pMin, pMax] = [pMax, pMin];
    }
    let x = pMax.index;
    let col = pMin.indexItem;
    if(type === -1){
        x = pMin.index;
        col = pMax.indexItem;
    }
    if(checkLineY(list, pMin.index, pMax.index, col, col)) {
        while(list[x][pMin.indexItem].status && list[x][pMax.indexItem].status) {
            if(checkLineX(list, x, x, pMin.indexItem, pMax.indexItem)) {
                return true;
            }
            x += type;
            if (!list[x]) {
                return true;
            }
        }
    }
    return false;
}

export const checkTwoPoint = (list, x1, x2, y1, y2, pMin, pMax) => {
    list[x1][y1].status = true;
    list[x2][y2].status = true;
    return checkLineX(list, x1, x2, y1, y2) ||
        checkLineY(list, x1, x2, y1, y2) ||
        checkRectX(list, pMin, pMax) ||
        checkRectY(list, pMin, pMax) ||
        checkMoreX(list, 1, pMin, pMax) ||
        checkMoreX(list, -1, pMin, pMax) ||
        checkMoreY(list, 1, pMin, pMax) ||
        checkMoreY(list, -1, pMin, pMax);
}

export const checkTwoPoint2 = (list, x1, x2, y1, y2, pMin, pMax) => {
    list[x1][y1].status = true;
    list[x2][y2].status = true;
    if (checkLineX(list, x1, x2, y1, y2) ||
        checkLineY(list, x1, x2, y1, y2) ||
        checkRectX(list, pMin, pMax) ||
        checkRectY(list, pMin, pMax) ||
        checkMoreX(list, 1, pMin, pMax) ||
        checkMoreX(list, -1, pMin, pMax) ||
        checkMoreY(list, 1, pMin, pMax) ||
        checkMoreY(list, -1, pMin, pMax)) {
        return true;
    } else {
        list[x1][y1].status = false;
        list[x2][y2].status = false;
        return false;
    }
}
