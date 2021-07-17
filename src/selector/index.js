
//check theo hang
const checkLineX = (list, x1, x2, y1, y2) => {
    let min = Math.min(y1, y2);//gia ti nho nhat
    let max = Math.max(y1, y2);//gia tri lon nhat
    if(x1 === x2) {
        for(let i = min; i <= max; i++) {
            if(!list[x1][i].status) {
                return false;//khong di duoc giua 2 diem
            }
        }
        return true;//ddi duoc gia 2 diem
    }
}
//check theo cot
const checkLineY = (list, x1, x2, y1, y2) => {
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

//xet duyet cac duong di theo chieu ngang trong pham vi hcn

const checkRectX = (list, pMin, pMax) => {//kiem tra trong pham vi hcn theo chieu ngang giua 2 diem pMin va pMax
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

//xet duyet cac duong di theo chieu doc trong pham vi hcn
const checkRectY = (list, pMin, pMax) => {
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
//xet mo rong theo chieu ngang
const checkMoreX = (list, type, pMin, pMax) => {
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
//xet mo rong theo chieu doc
const checkMoreY = (list, type, pMin, pMax) => {
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

