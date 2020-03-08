import {request} from "./requeset"

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

//三个对象的数据整合到一个对象中
export class Goods{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.Price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
    } 
}

export class GoodsParm{
    constructor(info,rule){
        //注：image可能没有值（某些商品有值，某些商品没有值）
        this.image=info.images?info.images[0]:'';
        this.infos=info.set;
        this.sizes=rule.tables;
    }
}

export class Shop{
    constructor(ShopInfo){
        this.logo=ShopInfo.shopLogo;
        this.name=ShopInfo.name;
        this.fans=ShopInfo.cFans;
        this.sells=ShopInfo.cSells;
        this.score=ShopInfo.score;
        this.goodsCount=ShopInfo.cGoods
    }
}