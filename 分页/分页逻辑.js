function makePage(total,point,pre){
    //total表示总页数 point选定的那一页页码 pre指point前后各显示几页
    var result = [];//输出分页数组
    var el =  pre*2 +5; //除去"上一页""下一页"按钮后剩余元素个数
    var start = 4+pre; //前面出现"..."临界情况
    var end = total-3-pre; //后面出现"..."临界情况
    var surplus = el -2;//只出现一个"..."时剩下元素个数

    if(total <= el){//能显示所有页码
        return result = [Array.from({length:total},(v,i)=>i+1)];
    }else{//需要"..."
        if(point > end){//只有前面要省略号
            return result = [1,"...",...Array.from({length:surplus},(v,i)=>total-surplus+1+i)];
        }else if(point < start){//只有后面有省略号
            return result = [...Array.from({length:surplus},(v,i)=>i+1),"...",total]
        }else{//前后都有省略号
            return result = [1,"...",...Array.from({length:5},(v,i)=>point-pre+i),"...",total]
        }
    }
}