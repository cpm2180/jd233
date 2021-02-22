# serverless.yml

#组件信息
component: scf # (必选) 组件名称，在该实例中为scf
name: jdscript # (必选) 组件实例名称。

#组件参数配置
inputs:
  name: scf-${name} # 云函数名称，默认为 ${name}-${stage}-${app}
  enableRoleAuth: true # 默认会尝试创建 SCF_QcsRole 角色，如果不需要配置成 false 即可
  src: ./
  handler: index.main_handler #入口
  runtime: Nodejs12.16 # 运行环境 默认 Nodejs10.15
  region: ap-hongkong # 函数所在区域
  description: This is a function in ${app} application.
  memorySize: 128 # 内存大小，单位MB
  timeout: 900 # 超时时间，单位秒
  events: # 触发器
    - timer: #签到
        parameters:
          name: beansign
          cronExpression: "0 0 0 * * * *"
          enable: true
          argument: jd_bean_sign
    - timer: #东东超市兑换奖品 #摇京豆 #京东汽车兑换
        parameters:
          name: blueCoin_clublottery_carexchange
          cronExpression: "0 0 0 * * * *"
          enable: true
          argument: jd_blueCoin&jd_club_lottery&jd_car_exchange
    - timer: #东东农场 #东东萌宠 #口袋书店 #京喜农场 #美丽研究院
        parameters:
          name: fruit_pet_bookshop_jxnc_beauty
          cronExpression: "0 5 6-18/6,8 * * * *"
          enable: true
          argument: jd_fruit&jd_pet&jd_bookshop&jd_jxnc&jd_beauty
    - timer: #宠汪汪喂食 #宠汪汪 #摇钱树 #京东种豆得豆 #京喜工厂 #东东工厂
        parameters:
          name: feedPets_joy_moneyTree_plantBean_dreamFactory_jdfactory
          cronExpression: "0 3 */1 * * * *"
          enable: true
          argument: jd_joy_feedPets&jd_joy&jd_moneyTree&jd_plantBean&jd_dreamFactory&jd_jdfactory
    - timer: #宠汪汪偷好友积分与狗粮 #点点券 #东东小窝
        parameters:
          name: joysteal_necklace_smallhome
          cronExpression: "0 0 0-16/8,20 * * * *"
          enable: true
          argument: jd_joy_steal&jd_necklace&jd_small_home
    - timer: #京东全民开红包 #进店领豆 #取关京东店铺商品 #京东抽奖机 #京东汽车 #京东秒秒币 #小鸽有礼2
        parameters:
          name: redPacket_shop_unsubscribe_lotteryMachine_car_ms_xg
          cronExpression: "0 10 0 * * * *"
          enable: true
          argument: jd_redPacket&jd_shop&jd_unsubscribe&jd_lotteryMachine&jd_car&jd_ms&jd_xgyl
    - timer: #京东天天加速 #天天提鹅
        parameters:
          name: speed_dailyegg
          cronExpression: "0 8 */3 * * * *"
          enable: true
          argument: jd_speed&jd_daily_egg
    - timer: #东东超市
        parameters:
          name: superMarket
          cronExpression: "0 15 */6 * * * *"
          enable: true
          argument: jd_superMarket
    - timer: #京豆变动通知 #疯狂的joy #京东排行榜 #领京豆额外奖励 #京东保价 #闪购盲盒 #女装盲盒
        parameters:
          name: beanchange_crazyjoy_rankingList_beanhome_price_sgmh_nzmh
          cronExpression: "0 30 7 * * * *"
          enable: true
          argument: jd_bean_change&jd_crazy_joy&jd_rankingList&jd_bean_home&jd_price&jd_sgmh&jd_nzmh
    - timer: #金融养猪 #十元街 #京东快递 #京东赚赚 #签到领现金 #京喜签到
        parameters:
          name: pigPet_syj_kd_jdzz_cash_sign
          cronExpression: "0 3 1 * * * *"
          enable: true
          argument: jd_pigPet&jd_syj&jd_kd&jd_jdzz&jd_cash&jx_sign
  environment: #  环境变量
    variables: #  环境变量对象
      AAA: BBB # 不要删除，用来格式化对齐追加的变量的
