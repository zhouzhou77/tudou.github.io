var myChart = echarts.init(document.getElementById('myMap'));

var data = [
    {name: '贵阳', value: ['1994.03-至今', '出生成长的地方，但是没有了🏠']},
    {name: '沈阳', value: ['2011.09-2015.06', '本科四年']},
    {name: '深圳', value: ['2015.06-2017.03', '来了就是深圳人']},
    {name: '北京', value: ['2017.05-2018.09', '北京工作']},
    {name: '齐齐哈尔', value: ['','路过']},
    {name: '上海', value: ['','去过好几次']},
    {name: '汕尾', value: ['','深圳第一任房东阿姨家']},
    {name: '潮州', value: ['','和西瓜嘉燕去吃美食，还有代代']},
    {name: '烟台', value: ['','路过，从大连坐船过去']},
    {name: '抚顺', value: ['','大学期间去过']},
    {name: '汕头', value: ['','和嘉燕去的，住的青旅很好']},
    {name: '东莞', value: ['','找余灵玩']},
    {name: '南宁', value: ['','有一年国庆去一个农场打工换宿']},
    {name: '广州', value: ['','转车以及吃。。']},
    {name: '清远', value: ['','公司组织旅游，第一次漂流']},
    {name: '珠海', value: ['','为了去澳门']},
    {name: '大连', value: ['','大一和小四小凡翘课去看海']},
    {name: '成都', value: ['','大学第一次寒假转车回家']},
    {name: '镇江', value: ['','丹阳出差']},
    {name: '张家界', value: ['','仙人溪农场换宿']},
    {name: '西安', value: ['','旅游']},
    {name: '遵义', value: ['','离家近']},
    {name: '扬州', value: ['','出差顺路去旅游']},
    {name: '潍坊', value: ['','转车']},
    {name: '重庆', value: ['','去过好几个，火锅好辣好好吃']},
    {name: '南京', value: ['','短暂工作了一周，没敢去纪念馆']},
    {name: '本溪', value: ['','小凡的家']},
    {name: '杭州', value: ['','飞机转火车去上海']},
    {name: '鞍山', value: ['','爬了好几次千山和代代的大学']},
    {name: '济南', value: ['','转车，超级热']},
    {name: '天津', value: ['','旅游以及好几次出差']},
    {name: '哈尔滨', value: ['','旅游']},
    {name: '芜湖', value: ['','无为出差']},
    {name: '石家庄', value: ['转机']},
    {name: '长沙', value: ['','转车去参加婚礼']},
    {name: '合肥', value: ['','转车见朋友们']},
    {name: '武汉', value: ['','姐姐的大学，巨热无比']},
    {name: '益阳', value: ['','婚礼']},
    {name: '郑州', value: ['','短暂工作一个月']},
    {name: '漠河', value: ['','20岁生日之旅']},
    {name: '无锡', value: ['','出差']},
    {name: '赤峰', value: ['','银沙湾毕业旅游']},
    {name: '香港', value: ['','旅游和徒步']},
    {name: '澳门', value: ['','旅游']},
    {name: '海参崴', value: ['','旅游']},
    {name: '奥克兰', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '陶朗加', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '惠灵顿', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '基督城', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '皇后镇', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '因弗卡吉尔', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '陶波', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '罗托鲁瓦', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '纳皮尔', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '璜加雷', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '凯里凯里', value: ['2018.11-2020.02','新西兰打工度假']},
    {name: '凯塔亚', value: ['2018.11-2020.02','新西兰打工度假']}

];
var geoCoordMap = {
  阿克苏地区: [80.260604, 41.168779],
  和田地区: [79.922211, 37.114157],
  上海: [121.480237, 31.236305],
  东莞: [113.758231, 23.026997],
  东营: [118.588614, 37.454925],
  中山: [113.399023, 22.522262],
  临汾: [111.526153, 36.094052],
  临沂: [118.36299, 35.110531],
  丹东: [124.362564, 40.00569],
  丽水: [119.929503, 28.472979],
  乌鲁木齐: [87.623314, 43.832806],
  佛山: [113.128432, 23.027707],
  保定: [115.471052, 38.880055],
  兰州: [103.840692, 36.067312],
  包头: [109.846755, 40.663636],
  北京: [116.413554, 39.911013],
  北海: [109.126614, 21.486955],
  南京: [118.802891, 32.064735],
  南宁: [108.373351, 22.823037],
  南昌: [115.864528, 28.687675],
  南通: [120.900301, 31.985237],
  厦门: [118.095915, 24.485821],
  台州: [121.426996, 28.662297],
  合肥: [117.235447, 31.82687],
  呼和浩特: [111.758518, 40.847461],
  咸阳: [108.715712, 34.335599],
  哈尔滨: [126.542417, 45.807782],
  唐山: [118.187036, 39.636673],
  嘉兴: [120.762045, 30.750912],
  大同: [113.306446, 40.082539],
  大连: [121.621391, 38.919345],
  天津: [117.205914, 39.090908],
  太原: [112.55706, 37.876885],
  威海: [122.128245, 37.519322],
  宁波: [121.556686, 29.880177],
  宝鸡: [107.243899, 34.367747],
  宿迁: [118.282062, 33.967686],
  常州: [119.980142, 31.816791],
  广州: [113.270793, 23.135308],
  廊坊: [116.69034, 39.54352],
  延安: [109.496361, 36.591003],
  张家口: [114.894165, 40.830172],
  徐州: [117.29235, 34.210143],
  德州: [116.365825, 37.441313],
  惠州: [114.423348, 23.116409],
  成都: [104.071216, 30.576279],
  扬州: [119.419107, 32.39986],
  承德: [117.969798, 40.957855],
  拉萨: [91.121025, 29.650088],
  无锡: [120.318954, 31.496704],
  日照: [119.533606, 35.422798],
  昆明: [102.839667, 24.885953],
  杭州: [120.161693, 30.280059],
  枣庄: [117.328513, 34.816569],
  柳州: [109.42198, 24.331519],
  株洲: [113.140431, 27.833737],
  武汉: [114.311831, 30.598428],
  汕头: [116.688739, 23.359289],
  江门: [113.088165, 22.584459],
  沈阳: [123.438973, 41.811339],
  沧州: [116.845272, 38.31022],
  河源: [114.707097, 23.749829],
  泉州: [118.682316, 24.880242],
  泰安: [117.094893, 36.205905],
  泰州: [119.932115, 32.4612],
  济南: [117.001319, 36.671627],
  济宁: [116.593852, 35.420269],
  海口: [110.206424, 20.050057],
  淄博: [118.061254, 36.819182],
  淮安: [119.022429, 33.616272],
  深圳: [114.066112, 22.548515],
  清远: [113.062619, 23.688238],
  温州: [120.705869, 28.001095],
  渭南: [109.516739, 34.505687],
  湖州: [120.094566, 30.899015],
  湘潭: [112.950575, 27.83585],
  滨州: [117.9792, 37.388387],
  潍坊: [119.168138, 36.713212],
  烟台: [121.454425, 37.469868],
  玉溪: [102.5537, 24.357512],
  珠海: [113.583235, 22.276392],
  盐城: [120.168187, 33.355301],
  盘锦: [122.077269, 41.125939],
  石家庄: [114.520828, 38.048684],
  福州: [119.302938, 26.080447],
  秦皇岛: [119.606184, 39.941259],
  绍兴: [120.586673, 30.036519],
  聊城: [115.992077, 36.462681],
  肇庆: [112.47177, 23.052984],
  舟山: [122.214339, 29.991092],
  苏州: [120.589613, 31.304566],
  莱芜: [117.683221, 36.219357],
  菏泽: [115.487696, 35.239435],
  营口: [122.241475, 40.672565],
  葫芦岛: [120.843388, 40.717364],
  衡水: [115.676942, 37.745166],
  衢州: [118.880768, 28.941661],
  西宁: [101.784269, 36.623477],
  西安: [108.946306, 34.347436],
  贵阳: [106.636816, 26.652747],
  连云港: [119.229571, 34.602342],
  邢台: [114.510889, 37.076646],
  邯郸: [114.545808, 36.631222],
  郑州: [113.631349, 34.753488],
  鄂尔多斯: [109.787314, 39.61463],
  重庆: [106.557165, 29.570997],
  金华: [119.654027, 29.084455],
  铜川: [108.951558, 34.902957],
  银川: [106.238976, 38.492392],
  镇江: [119.431494, 32.195688],
  长春: [125.33017, 43.82178],
  长沙: [112.945333, 28.233971],
  长治: [113.123046, 36.201585],
  阳泉: [113.587087, 37.86234],
  青岛: [120.389445, 36.072358],
  韶关: [113.603757, 24.816174],
  九江: [116.007993, 29.711328],
  大庆: [125.109727, 46.593216],
  宁德: [119.554701, 26.671748],
  忻州: [112.740804, 38.422382],
  石嘴山: [106.39078, 38.989783],
  池州: [117.497839, 30.67098],
  淮南: [117.006189, 32.631837],
  吐鲁番地区: [89.196029, 42.957303],
  宜昌: [111.292971, 30.697602],
  景德镇: [117.184967, 29.274337],
  安庆: [117.070127, 30.548594],
  怒江傈僳族自治州: [98.863189, 25.823736],
  白城: [122.845302, 45.6254],
  萍乡: [113.86077, 27.62897],
  抚州: [116.364627, 27.953603],
  朝阳: [120.457301, 41.579487],
  海东: [102.003965, 36.406412],
  湘西土家族苗族自治州: [109.745507, 28.317399],
  鹰潭: [117.075765, 28.265879],
  阿拉善盟: [105.735357, 38.857806],
  大阪府: [0, 0],
  鹤岗: [130.304284, 47.356043],
  吴忠: [106.205161, 38.003863],
  石河子: [86.085507, 44.312423],
  开封: [114.313904, 34.802941],
  延边朝鲜族自治州: [129.515602, 42.897211],
  白银: [104.144182, 36.550821],
  吕梁: [111.148086, 37.525476],
  随州: [113.389071, 31.696341],
  雅安: [103.04636, 30.021277],
  平顶山: [113.198935, 33.772051],
  阜新: [121.676518, 42.027983],
  普洱: [100.98114, 22.788486],
  三亚: [109.518646, 18.258217],
  赣州: [114.94126, 25.837179],
  广元: [105.849993, 32.441808],
  锦州: [121.133631, 41.100869],
  南充: [106.117231, 30.843297],
  衡阳: [112.578397, 26.899517],
  齐齐哈尔: [123.924531, 47.360087],
  兴安盟: [122.044544, 46.088444],
  乌海: [106.80185, 39.660154],
  楚雄彝族自治州: [101.534082, 25.051226],
  伊春: [128.84704, 47.733329],
  陇南: [104.928233, 33.406825],
  荆门: [112.205843, 31.041792],
  辽源: [125.150107, 42.8943],
  怀化: [110.008116, 27.575595],
  牡丹江: [129.638976, 44.558647],
  黄南藏族自治州: [102.021495, 35.526125],
  湛江: [110.365494, 21.277163],
  天水: [105.731276, 34.587162],
  黔东南苗族侗族自治州: [107.990602, 26.589858],
  云浮: [112.051045, 22.921154],
  安康: [109.03592, 32.690575],
  日喀则地区: [88.956063, 29.26816],
  海北藏族自治州: [100.907395, 36.960702],
  海西蒙古族藏族自治州: [97.377823, 37.382839],
  吉安: [115.00027, 27.119751],
  黄石: [115.045433, 30.205336],
  宿州: [116.970454, 33.652034],
  茂名: [110.931773, 21.669051],
  阳江: [111.989051, 21.864421],
  信阳: [114.099264, 32.153186],
  三门峡: [111.206832, 34.778442],
  咸宁: [114.328967, 29.847123],
  许昌: [113.858804, 34.041737],
  保山: [99.168373, 25.117882],
  鹤壁: [114.304044, 35.752656],
  运城: [111.013379, 35.032587],
  达州: [107.474504, 31.214347],
  常德: [111.704994, 29.037723],
  酒泉: [98.500427, 39.738615],
  马鞍山: [118.512691, 31.67633],
  南阳: [112.535009, 32.996701],
  邵阳: [111.474133, 27.245167],
  黔南布依族苗族自治州: [107.528663, 26.260586],
  孝感: [113.922962, 30.930712],
  安顺: [105.952622, 26.259904],
  辽阳: [123.243726, 41.274452],
  黔西南布依族苗族自治州: [104.910858, 25.095974],
  克拉玛依: [84.89587, 45.585765],
  庆阳: [107.649305, 35.716096],
  呼伦贝尔: [119.77221, 49.217977],
  六盘水: [104.836786, 26.599086],
  新余: [114.923664, 27.823541],
  七台河: [131.009618, 45.776512],
  商丘: [115.662798, 34.420378],
  漯河: [114.02323, 33.587703],
  乌兰察布: [113.140223, 40.999972],
  潜江: [112.905773, 30.407633],
  定西: [104.631662, 35.587354],
  鸡西: [130.976161, 45.300906],
  汕尾: [115.381693, 22.791322],
  四平: [124.356844, 43.172447],
  西双版纳傣族自治州: [100.803836, 22.013792],
  遂宁: [105.599152, 30.539156],
  商洛: [109.94688, 33.876525],
  海南藏族自治州: [100.626831, 36.292132],
  文山壮族苗族自治州: [104.221606, 23.404187],
  六安: [116.529651, 31.741226],
  张家界: [110.484925, 29.122477],
  潮州: [116.62943, 23.662923],
  蚌埠: [117.395835, 32.921498],
  桂林: [110.296442, 25.279893],
  甘南藏族自治州: [102.917605, 34.98901],
  驻马店: [114.029465, 33.017546],
  林芝地区: [94.368109, 29.654792],
  百色: [106.624969, 23.907845],
  鞍山: [123.000974, 41.114122],
  郴州: [113.021311, 25.776711],
  巴中: [106.753912, 31.872851],
  恩施土家族苗族自治州: [109.494763, 30.277908],
  十堰: [110.80454, 32.635042],
  临沧: [100.10566, 23.914336],
  泸州: [105.449092, 28.877577],
  平凉: [106.671741, 35.549266],
  宣城: [118.765196, 30.946576],
  绵阳: [104.686164, 31.473364],
  佳木斯: [130.32696, 46.806581],
  遵义: [106.933658, 27.731749],
  钦州: [108.66089, 21.985392],
  玉树藏族自治州: [97.01308, 33.011061],
  本溪: [123.773468, 41.299847],
  朔州: [112.438184, 39.33789],
  毕节: [105.333323, 27.408562],
  张掖: [100.456221, 38.932187],
  南平: [118.1843, 26.647662],
  濮阳: [115.035917, 35.767586],
  宜宾: [104.648103, 28.75761],
  铜仁: [109.168558, 27.674903],
  松原: [124.831633, 45.147201],
  漳州: [117.653827, 24.519197],
  梧州: [111.285647, 23.482873],
  洛阳: [112.460033, 34.624376],
  龙岩: [117.023668, 25.081257],
  莆田: [119.014232, 25.45996],
  济源: [112.609314, 35.072867],
  哈密地区: [93.522785, 42.824642],
  昭通: [103.723311, 27.344057],
  大理白族自治州: [100.274223, 25.612206],
  昌吉回族自治州: [87.314822, 44.016923],
  迪庆藏族自治州: [99.70948, 27.825264],
  黑河: [127.535014, 50.251193],
  吉林: [126.556073, 43.843512],
  广安: [106.639772, 30.461708],
  黄山: [118.174807, 30.133213],
  德阳: [104.404319, 31.133105],
  河池: [108.091898, 24.698828],
  益阳: [112.361677, 28.559818],
  通化: [125.946506, 41.733906],
  永州: [111.618703, 26.426612],
  周口: [114.703433, 33.631958],
  梅州: [116.129179, 24.294311],
  锡林郭勒盟: [116.054141, 43.939525],
  固原: [106.24917, 36.021609],
  滁州: [118.323252, 32.308165],
  荆州: [112.24722, 30.340606],
  芜湖: [118.439561, 31.358798],
  襄阳: [112.250093, 32.229169],
  吉隆坡: [0, 0],
  榆林: [109.741195, 38.290886],
  果洛藏族自治州: [100.251341, 34.477207],
  玉林: [110.18743, 22.660656],
  临夏回族自治州: [103.217303, 35.607475],
  鄂州: [114.901557, 30.396522],
  晋中: [112.759375, 37.692757],
  巴音郭楞蒙古自治州: [86.151584, 41.770226],
  澳门: [113.549403, 22.192961],
  内江: [105.065028, 29.585836],
  揭阳: [116.37922, 23.555773],
  通辽: [122.251207, 43.658363],
  阜阳: [115.821389, 32.895879],
  中卫: [105.203332, 37.506058],
  铜陵: [117.818795, 30.950899],
  红河哈尼族彝族自治州: [103.38215, 23.369914],
  曲靖: [103.802685, 25.496328],
  香港: [114.171994, 22.281089],
  汉中: [107.030197, 33.07382],
  乐山: [103.77193, 29.558141],
  新乡: [113.933349, 35.308973],
  晋城: [112.857706, 35.496081],
  巴彦淖尔: [107.394129, 40.749427],
  武威: [102.644524, 37.934078],
  岳阳: [113.135679, 29.363262],
  赤峰: [118.895463, 42.264586],
  白山: [126.431052, 41.94643],
  攀枝花: [101.725262, 26.588109],
  黄冈: [114.878872, 30.459422],
  绥化: [126.975678, 46.658789],
  双鸭山: [131.165442, 46.652966],
  凉山彝族自治州: [102.273965, 27.887685],
  伊犁哈萨克自治州: [81.330697, 43.922815],
  德宏傣族景颇族自治州: [98.591419, 24.438031],
  安阳: [114.3996, 36.103649],
  三明: [117.645742, 26.269683],
  宜春: [114.422683, 27.820089],
  上饶: [117.950028, 28.460864],
  自贡: [104.784891, 29.345379],
  娄底: [112.001082, 27.703196],
  丽江: [100.23357, 26.862521],
  防城港: [108.361138, 21.693439],
  淮北: [116.804878, 33.96064],
  儋州: [109.587145, 19.527081],
  怒江州: [98.863189, 25.823736],
  焦作: [113.248557, 35.221493],
  铁岭: [123.848797, 42.292573],
  抚顺: [123.963595, 41.886078],
  巢湖: [117.88049, 31.608733],
  西双版纳: [100.803836, 22.013792],
  德宏州: [98.591419, 24.438031],
  恩施: [109.485727, 30.30089],
  湘西州: [109.745507, 28.317399],
  西昌: [102.269526, 27.900601],
  阿坝州: [102.231186, 31.905609],
  黔南州: [107.528663, 26.260586],
  黔东南州: [107.990602, 26.589858],
  黔西南州: [104.910858, 25.095974],
  大理州: [100.274223, 25.612206],
  红河州: [103.38215, 23.369914],
  文山州: [104.221606, 23.404187],
  楚雄州: [101.534082, 25.051226],
  迪庆州: [99.70948, 27.825264],
  山南地区: [91.779601, 29.24309],
  那曲地区: [92.0578, 31.482375],
  博尔塔拉蒙古自治州: [82.073064, 44.912168],
  临夏州: [103.217303, 35.607475],
  甘南州: [102.917605, 34.98901],
  格尔木: [94.909745, 36.408588],
  奎屯: [84.90832, 44.432645],
  亳州: [115.7786, 33.8445],
  崇左: [107.3647, 22.3765],
  定安县: [110.3588, 19.6814],
  东方: [108.6518, 19.0953],
  贵港: [109.5989, 23.1115],
  贺州: [111.5666, 24.4035],
  嘉峪关: [98.2891, 39.7731],
  金昌: [102.1880, 38.5200],
  来宾: [109.2214, 23.7503],
  乐东黎族自治县: [109.1730, 18.7502],
  陵水黎族自治县: [110.0375, 18.5060],
  眉山: [103.8485, 30.0754],
  琼海: [110.4921, 19.2396],
  台湾: [120.9605, 23.6978],
  天门: [113.3169, 30.8657],
  屯昌县: [110.1034, 19.3517],
  万宁: [110.3816, 18.8078],
  文昌: [113.8259, 25.8228],
  五指山: [109.5169, 18.7751],
  仙桃: [113.4234, 30.3608],
  资阳: [104.6520, 30.1246],
  漠河: [122.5386, 52.9723],
  海参崴: [131.8869, 43.1198],
  奥克兰: [174.7633, -36.8485],
  陶朗加: [176.1651, -37.6878],
  惠灵顿: [174.7762, -41.2865],
  基督城: [172.6362, -43.5321],
  皇后镇: [168.6626, -45.0312],
  因弗卡吉尔: [168.3538, -46.4132],
  陶波: [176.0702, -38.6857],
  罗托鲁瓦: [176.2497, -38.1368],
  纳皮尔: [176.9120, -39.4928],
  璜加雷: [174.3237, -35.7251],
  凯里凯里: [173.9478, -35.2286],
  凯塔亚: [173.2676, -35.1173]

};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#1540a1',
        borderColor: '#777',
        borderWidth: 1,
        enterable: true,
        formatter: function (params) {
            name = params.name
            time = params.value[2]
            describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + name
                + '</div>'
                + time
                + '<br>'
                + describe;
        }
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#e6e6e6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series : [
        {
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#4d4d4d',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);
