import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class SearchService extends BaseService {

  constructor() {
    super();
  }

  async search(key) {

    const mockResult = {
      "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
      "facetField":[
        "year",
        "_GL_labeltax_taxonomy",
        "_GL_regiontax_taxonomy",
        "resourceName"
      ],
      "facetResult":{
        "_GL_regiontax_taxonomy":{
          "分类/亚太":3,
          "分类/亚太/中国":3,
          "分类/其它":5,
          "分类":8
        },
        "year":{
          "2018":2,
          "2017":4,
          "2016":6,
          "2015":7,
          "2014":7,
          "2013":6
        },
        "resourceName":{
          "科技":1,
          "投资":1,
          "人文":1,
          "证券":1,
          "月":1,
          "刊":1,
          "管理":2,
          "观察":2,
          "知识":1,
          "中学":1,
          "理财":1,
          "国家":1,
          "投资者":1,
          "大众":1,
          "第一":1,
          "幸福":1,
          "焦点":1,
          "星云":1,
          "书城":1,
          "方圆":2,
          "时代":1,
          "三联":2,
          "顾问":1,
          "报":1,
          "历史":1,
          "周刊":15,
          "时尚":1,
          "邮":1,
          "青年":11,
          "海外":1,
          "生活":2,
          "市场":1,
          "家庭":2,
          "财经":2,
          "世界":1,
          "北京":12
        },
        "_GL_labeltax_taxonomy":{
          "分类/商业/创业":1,
          "分类/财富/理财":1,
          "分类/文化/历史":2,
          "分类/商业/管理":1,
          "分类/文化/人文思想":1,
          "分类/生活/心灵情感":1,
          "分类/财富/股市":2,
          "分类/生活/娱乐时尚":1,
          "分类/社会/中国社会":1,
          "分类/财富":3,
          "分类/文化/艺术":4,
          "分类/生活/生活家居":3,
          "分类/商业":2,
          "分类/文化/书评":3,
          "分类/文化":10,
          "分类/生活":6,
          "分类/社会":1,
          "分类/生活/艺术设计":2,
          "分类/其它":14,
          "分类":32,
          "分类/财富/投资":2
        }
      },
      "gqlQuery":"gold",
      "highLightField":[
        "title",
        "summary"
      ],
      "numFound":32,
      "numOfDoc":20,
      "numReturned":20,
      "preciseSearch":"1",
      "qcAlgorithmAlias":"",
      "queryString":"gold",
      "resultList":[
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fd0f39ac502e0063ae2834",
          "meta":{
            "summary":[
              "何为玫瑰金？ \n 玫瑰金（rose <em>gold</em>）是一种黄金和铜的合金，又称粉色金（pink <em>gold</em>）、红色金（red <em>gold</em>）。由于这种金属曾经在19世纪初期风行于俄罗斯，因而又称俄罗斯金（Russian <em>gold</em>），不过这一术语现在已很少使用。 \n 玫瑰金，多浪漫的名字，单从“玫瑰”两字来看就能引起人们无数美妙的联想。在闪闪发光的黄金饰品与经典高雅的铂金饰品之后，色调柔和迷人的玫瑰金饰品渐"
            ],
            "year":[
              "2015"
            ],
            "author":[
              "周子榆"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/生活/生活家居"
            ],
            "title":[
              "玫瑰金永不凋谢的玫瑰爱情"
            ]
          },
          "score":"16.91186",
          "umekey":"97FA5AB8340FCB78F255FACBEFD7D473"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"5ad18b3f9f54540045add677",
          "meta":{
            "summary":[
              "美国西部曾兴起过一股狂热的淘金浪潮。最后流传出了一句这样的俗语：Don’t dig for <em>gold</em>，sell the shovel。意思是说，那些没日没夜寻找金矿的人没有几个能满载而归的，可是卖锹的商人却因为当时铁锹供不应求而获得了丰厚的利润。 \n 其中有一个叫布瑞南的人赚到了最多的钱，正是靠卖铁锹。他的做法是，先为鲜为人知的金矿大作宣传，吸引了成千上万的淘金人蜂涌而至。而这些淘金人淘金前都要"
            ],
            "year":[
              "2013"
            ],
            "author":[
              "壹读编辑部"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "挖金子的不如卖挖金子工具的"
            ]
          },
          "score":"16.89466",
          "umekey":"E8EF749B5785D65CC3F661D44EA9DBC8"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fcab2d1b69e600589a83fb",
          "meta":{
            "summary":[
              "据韩媒报道，韩美两国于4月22日结束了《韩美原子能协定》修订谈判，这是两国继1973年之后，时隔42年再次达成新的协定，并明确规定了允许韩国对美国产铀进行低浓缩。协定的有效期缩短至20年，且不再包含双方争议的焦点——此前曾明文规定禁止韩国核燃料浓缩及再处理，即不包括所谓的“黄金标准（<em>gold</em> standard）”有关条款。但双方还有很长的路要走，因为协定要想生效，必须正式署名，并通过韩美两国国会这"
            ],
            "year":[
              "2015"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "韩媒：韩美签署新原子能协定 正式署名程序复杂"
            ]
          },
          "score":"16.886576",
          "umekey":"C492DE9974EF4065425DCE41BE38F321"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58f9dbf144d9040069d3dbbd",
          "meta":{
            "summary":[
              "我们日常生活的废料，例如塑料、玻璃、金属、废纸，最后都变成了什么？ \n 荷兰设计师Dirk给出了一种答案。 \n Dirk將旧的塑料玩具、录像带、电脑配件放进大熔炉，就像厨师一样制作出令人注目的当代艺术品——Melting Pot Table 熔炉餐桌。 \n 该作品硬度大于大理石，而且这个世界上不可能存在两个图案相似的Melting Pot Table 。 \n 不过，依照材料来源的不同，大致"
            ],
            "_GL_regiontax_taxonomy":[
              "分类/其它"
            ],
            "year":[
              "2017"
            ],
            "author":[
              "zhongyaoli"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "独一无二  印着永远不可能重复图案的餐桌"
            ]
          },
          "score":"13.344633",
          "umekey":"1CF8E47C599971BA36691B29206DF0D3"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"5afb184f9f545452b2bc0aba",
          "meta":{
            "summary":[
              "Climate change could turn the Arctic Ocean into a high-speed ice superhighway. Chunks of sea ice in the Arctic are becoming thinner as old ice melts. The new ice that's replacing it travels farther an"
            ],
            "_GL_regiontax_taxonomy":[
              "分类/其它"
            ],
            "year":[
              "2016"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "Arctic Ice Travels Fast， Carrying Pollution"
            ]
          },
          "score":"13.152565",
          "umekey":"95FCEF47ED222D791C4C0DD65044B6EE"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"5bcff41a9f5454006669b2e0",
          "meta":{
            "summary":[
              "The article in Time on Feb 5th 2018， National Nightmare， Why Are So Many Americans Angry？ mentions that the mainstream press talk about \"wealth inequality\" when referencing our country’s social proble"
            ],
            "year":[
              "2018"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "双语"
            ]
          },
          "score":"12.887491",
          "umekey":"44839682D1950DA8905AD98A3BDCF982"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fc23821b69e6005896198d",
          "meta":{
            "summary":[
              "个人对发卡这个东西是爱恨交织的，因为它的确是好看，有修饰脸型的功效，可以把头型垫高，把脸拉长，从视觉上缩小脸的面积，当然还有确定风格的装饰功能。Elie Saab F/W15、16高级定制秀场上，模特们每人头上都别着一只发卡，长发像水一样泼洒下来，穿着繁复华丽的裙子，好似艺术家Benjamin Constant画的拜占庭时期皇宫里面慵懒倦怠的淑女们。 \n 黎巴嫩设计师Elie Saab被年轻的红"
            ],
            "_GL_regiontax_taxonomy":[
              "分类/其它"
            ],
            "year":[
              "2015"
            ],
            "author":[
              "张纳"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/文化/艺术"
            ],
            "title":[
              "给这个世界戴上拜占庭的花环"
            ]
          },
          "score":"12.366615",
          "umekey":"49F93C42263FAB486EAD87300B6C8B8B"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fd34cea0bb9f0065c36c8d",
          "meta":{
            "summary":[
              "01 你是怎么平衡特效和故事设定这两条线的？ \n 特效很重要，但这并非观众去电影院看电影的最终目的，他们还是想看一个好故事。就像《泰坦尼克号》，冰山在你面前倒塌，很震撼，但更吸引人的是里面美好的故事，特效需要为故事服务。 \n 02 做导演是否会有一些遗憾？ \n 我很幸运，拍的电影都比较卖座，唯一不如意的是，一些我很喜欢的电影没有拍到，有时候太忙，没有时间同时拍几部自己喜欢的电影，错过了一些机"
            ],
            "year":[
              "2014"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/文化/书评"
            ],
            "title":[
              "布莱特·拉特纳：我是个电影商人"
            ]
          },
          "score":"11.974806",
          "umekey":"ADA8E0F0B7FA6924925B9088B5970DB4"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fe4276da2f60005dd02d79",
          "meta":{
            "summary":[
              "最近，东莞理工学院城市学院5000多名新生被校方要求签订《学生管理与学生自律协议书》，其中一项内容“学生本人对自杀、自伤引起的后果承担责任”引起热议。 \n “自杀免责书”并非高校“免责金牌” \n 田水月 \n http：//blog.sina.com.cn/s/blog_4702bfd20101g10k.html \n 高校与大学生之间签署“自杀免责书”，其实并不少见，不少高校都有类似做法，比"
            ],
            "year":[
              "2013"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/文化/书评"
            ],
            "title":[
              "“自杀免责书”能免责吗"
            ]
          },
          "score":"11.607061",
          "umekey":"8D811B0758EEAAB371F9207F3A511744"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fcf61644d9040069e9a212",
          "meta":{
            "summary":[
              "标题 \n 2011年，当乔纳森（Jonathan Ive）看到谷歌眼镜的时候，他觉得手腕明显比脸部更适合这种和手机配对并具有提醒功能的可穿戴设备。库克也认为它们太“显眼”了，相反，苹果一直把技术“圈”在后台。“这不会在你我之间造成沟通的屏障。如果我收到了一条提示，它会轻轻敲打我的手腕，我可以随意查看是什么事。”库克看着手腕上的Apple Watch，对《纽约客》（New Yorker）的记者说。"
            ],
            "year":[
              "2015"
            ],
            "author":[
              "杨聃"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/商业/管理"
            ],
            "title":[
              "Apple Watch来了"
            ]
          },
          "score":"10.062041",
          "umekey":"6DFB623FD91644B64C29C8D0CAC98BD9"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fdc82e61ff4b00666f65e7",
          "meta":{
            "summary":[
              "金融界“领航中国杯白银帝国争霸赛”即将揭幕 证金贵金属受邀成为指定交易商 \n 由金融界网站倾力打造的国内最大规模贵金属模拟交易大赛——“领航中国杯白银帝国争霸赛”，将于5月12日正式拉开帷幕。本次大赛将历时3个月，历经常规赛、总决赛以及实盘赛3个阶段，并通过专家现场点评、顶级投资顾问全程指导、多方位的媒体宣传等形式全力护航大赛。报名时间为2014年4月15日～5月11日。 \n 此外，大赛主办方"
            ],
            "year":[
              "2014"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "机构动态"
            ]
          },
          "score":"10.042907",
          "umekey":"72719768209CAD0B87F993FCC00610E7"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58faea1cb123db4449085fdc",
          "meta":{
            "summary":[
              "“人们从发现黄金起，就有黄金崇拜” \n 至于黄金崇拜，文明的偶合也好，智慧的撞击也罢，我觉得这是人类文明衍生的必然。 \n 八年前，本刊记者还在另一家媒体实习，跑社会新闻。 \n 那一年的3月17日国际金价触及每盎司1032美元历史高位。在随后三个交易日，金价连续下跌130多美元，创出历史上黄金短期内的最大跌幅。这个纪录并没有保持太久，在其后的几个月内又几次被刷新，几经波折，在十月份跌到681元"
            ],
            "year":[
              "2016"
            ],
            "author":[
              "王诤"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/文化/人文思想"
            ],
            "title":[
              "长大成人惟有金"
            ]
          },
          "score":"10.005718",
          "umekey":"75C07F206AF540843612D825C80A976C"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fb2b005c497d0058f638b5",
          "meta":{
            "summary":[
              "Big Data¡¯s Pain Points \n The concept of big data has been a hot topic in China since 2011， but at present the big data industry in China is still in the exploratory research stage. There are still a"
            ],
            "_GL_regiontax_taxonomy":[
              "分类/其它"
            ],
            "year":[
              "2016"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "Cover Story"
            ]
          },
          "score":"9.788717",
          "umekey":"506E731205019F7656CC56FB7CEE6F8A"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fdf02e44d9040069f15043",
          "meta":{
            "summary":[
              "2014年2月底，瑞士金融经济报（Finanz und Wirtschaft）记者克里斯托夫.吉西格（Christoph Gisiger）采访了霍华德.马克斯（Howard Marks）。以下是部分采访内容。 \n 问：马克斯先生，下周华尔街将庆祝股票熊市结束五周年。回看金融危机时那段黑暗的日子，您有什么想法？ \n 答：人是决定金融市场进程的重要因素，股价就像躁狂的抑郁症患者一样波动。当然，在2"
            ],
            "year":[
              "2014"
            ],
            "author":[
              "陈予燕"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/财富/股市",
              "分类/财富/投资"
            ],
            "title":[
              "霍华德·马克斯：谨慎前行"
            ]
          },
          "score":"9.20312",
          "umekey":"1319968DB26AE4C54DB2AABB0301C314"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"5aca209e7565712a5adb7ad9",
          "meta":{
            "summary":[
              "在好莱坞比佛利山庄的酒馆里，关于詹姆斯·弗兰科的八卦通常是这么聊的：“你说一个演员又写剧本又当导演，还跑去出书、学画画、做艺术展、拿五六个艺术学位，这得有多爱装？”“对，还拍一堆同性恋电影！哎，他到底打算什么时候出柜啊？！” \n 是啊，谁叫他是这个世界上“最具有同性恋气质的异性恋”呢？当然无可否认的是，他也是“最有异性恋气质的同性恋”，他曾半开玩笑地在访谈中说，“我可能是个Gay”。因为，他一大"
            ],
            "year":[
              "2016"
            ],
            "author":[
              "寒一一"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/社会/中国社会",
              "分类/生活/娱乐时尚",
              "分类/文化/艺术"
            ],
            "title":[
              "詹姆斯·弗兰科“下一个安迪·沃霍尔”"
            ]
          },
          "score":"9.20312",
          "umekey":"4A1882944A338C3881B0FE85FDD71196"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"5901727fb123db260cc55d0b",
          "meta":{
            "summary":[
              "资讯点评 \n 2013-1-7 \n 242-243合刊 \n 券商等三类机构获准管理公募基金 \n 中国证监会昨日召开新闻通气会，公布了《资产管理机构开展公募证券投资基金管理业务暂行规定（征求意见稿）》，并向社会公开征求意见。《暂行规定》拟允许符合条件的证券公司、保险资产管理公司、私募证券基金管理机构三类机构直接开展公募基金管理业务。新的《证券投资基金法》为除基金管理公司以外的其他机构开展公募"
            ],
            "year":[
              "2013"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/财富/股市",
              "分类/财富/理财",
              "分类/商业/创业"
            ],
            "title":[
              "基金经理信心指数"
            ]
          },
          "score":"9.20312",
          "umekey":"6CBC74A3CB098CDC70DE2C316FF0290E"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"5a23c99c17d0090063bf9fab",
          "meta":{
            "summary":[
              "短暂的照面后，旧金山在我的心中成了一座雾城。从东部进入，必经海湾大桥，远远的就看到海湾大桥上像打了肥皂泡一样云雾缭绕，开着车，能见度仅有10米不到。因为是山城，从桥上还能看到市中心所在的山头上源源不绝冒出的水气，雾锁金门就更是一绝，那著名的橘红色大桥已经完全被大雾吞噬，只能隐约看到桥高处的一丝艳色。其实，除了雾天中看不清城市，我对这个移民大都市的内部结构，也是如云雾缭绕般迷糊。 \n 淘金梦 \n"
            ],
            "year":[
              "2013"
            ],
            "author":[
              "俞因"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "移民梦 移民泪"
            ]
          },
          "score":"9.093672",
          "umekey":"7CBBB2A2BEF5E3F9DD7698F4E64D1D93"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fc0da9da2f60005dbf6fb8",
          "meta":{
            "summary":[
              "“生命像《圣经》，从希伯来文译成希腊文，从希腊文译成拉丁文，从拉丁文译成英文，从英文译成国语。翠远读它的时候，国语又在她脑子里译成了上海话。那未免有点隔膜。”——张爱玲《封锁》 \n 电影《色·戒》剧照 \n “为虎作伥” \n 2014年，《半生缘》英文版由企鹅经典出版。《华尔街日报》上刊载了一篇评论，“46年之后，英语读者终于能欣赏到张爱玲生前最受欢迎的作品”。那种略带心酸的口气，很难不让人想"
            ],
            "year":[
              "2015"
            ],
            "author":[
              "陈赛"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/文化/书评"
            ],
            "title":[
              "发现与隔膜：张爱玲的洋人读者们"
            ]
          },
          "score":"8.943125",
          "umekey":"2680B8537CB27A6739E73B95C15BE21E"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58fd92438d6d8100589af4e1",
          "meta":{
            "summary":[
              "这个夏天，最热的是世界杯，各国角逐那座由18K纯金铸造的大力神杯。在此期间，跟足球有关的“金饰”、“金钞”也跟着火了起来。黄金从来都是人们渴望拥有的财富。“你曾在伊甸园中，佩戴各样宝石，就是红宝石、蓝宝石、绿宝石……和‘黄金’，又有精美的鼓笛在你那里，都是在你受造之日预备齐全的。”这样的描述也符合马克思所说：“黄金实际上是人类发现的第一种金属”，也成为了人们极力追求的金属。 \n 黄金史就是浓缩的"
            ],
            "year":[
              "2014"
            ],
            "author":[
              "周子榆"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/生活/艺术设计",
              "分类/文化/历史"
            ],
            "title":[
              "黄金 人类发现的第一种金属"
            ]
          },
          "score":"8.943125",
          "umekey":"2ECF5D58361F00FD88E331C916CDED94"
        },
        {
          "collectionName":"6671A13AB54710D932C8F2E51FFE8CC3_huluarticle",
          "collkey":"58faea1c44d9040069daff71",
          "meta":{
            "summary":[
              "“中国男人配不配得上中国女人”这个话题从去年持续到今年，前不久马薇薇新节目首播也开启了此话题。先不谈内在，从外表来看，其实中国男人也在努力提升自己。可能自从几档父子节目的播出，不少已为人父的男人们，希望从“土肥圆”的传统邋遢形象中转变为时尚靓爸。父亲节到来，不妨从最显格调的腕表、配饰着手，给“爸爸”们来一个时尚大改造吧。 \n 编辑推荐 \n 戴表的爷们儿 “爸”气十足 \n 男人为什么要戴表？首"
            ],
            "year":[
              "2016"
            ],
            "author":[
              "周子榆"
            ],
            "_GL_labeltax_taxonomy":[
              "分类/其它"
            ],
            "title":[
              "给爸爸来个时尚大改造"
            ]
          },
          "score":"8.759291",
          "umekey":"00F062211509003D178FF6B95AC2330D"
        }
      ],
      "returnField":[
        "title",
        "collkey",
        "summary",
        "_GL_labeltax_taxonomy",
        "_GL_regiontax_taxonomy",
        "author",
        "year"
      ],
      "startDoc":0,
      "topicAlias":"label"
    };

    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(mockResult);
      }, 500);
    });

    // const url = 'http://47.93.226.51:9090/v1/api/ume/searcher/search';
    //
    // const request = {
    //   collectionName: 'huluarticle',
    //   customerId: '6671A13AB54710D932C8F2E51FFE8CC3',
    //   queryString: key,
    //   facetField: ['year', '_GL_labeltax_taxonomy', '_GL_regiontax_taxonomy', 'resourceName'],
    //   returnField: ['title', 'collkey', 'summary', '_GL_labeltax_taxonomy', '_GL_regiontax_taxonomy', 'author', 'year'],
    //   highLightField: ['title', 'summary'],
    //   preciseSearch: '1',
    //   closeFullSearch: false,
    //   topicAlias: 'label',
    //   isGql: '1',
    //   qcAlgorithmAlias: '',
    //   numOfDoc: 20,
    //   startDoc: 0,
    //   noHighlight: '1'
    // };
    //
    // return await fetch(url, {
    //   method: 'post',
    //   headers: {
    //     accept: 'application/json',
    //   },
    //   body: JSON.stringify(request)
    // }).then(this.checkStatus)
    //   .then(this.parseJson)
    //   .then((result) => {
    //     return result;
    //   });
  }

}

export const searchService = new SearchService();