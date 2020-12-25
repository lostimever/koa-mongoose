# koa-mongoose
后台管理系统服务端

## 使用`mongoimport`导入数据
```bash
$  mongoimport --username=root --password=root --db=dmsmarket --collection=elecmeaterinfos --type=csv --headerline --ignoreBlanks --file /wlf/elecmeaterinfo.csv --authenticationDatabase=admin
# 或者json
$  mongoimport --username=root --password=root --db=dmsmarket --collection=elecmeaterinfos --type=json --jsonArray --file /wlf/elecmeaterinfo.json --authenticationDatabase=admin
```
## 进入Docker容器
```bash
$ sudo docker ps 
$ sudo docker exec -it {容器名称或id} /bin/bash

```

## 创建用户，设置密码

```bash
use admin
db.createUser({user:"admin",pwd:"1234",roles:["root"]})
# 验证
db.auth("admin","1234")
```

## 数据库操作

### 修改字段名称

```bash
## 删除字段名
db.elecusers.update({},{$unset:{'elecnum':''}}, false, true)
## 修改字段名
db.elecusers.update({}, {$rename : {"eunum" : "elecnum"}}, false, true)

db.collection.update(criteria, objNew, upsert, multi)
####参数说明：
# criteria：查询条件
# objNew：update对象和一些更新操作符
# upsert：如果不存在update的记录，是否插入objNew这个新的文档，true为插入，默认为false，不插入。
# multi：默认是false，只更新找到的第一条记录。如果为true，把按条件查询出来的记录全部更新。
```

## [关于kswapd0 CPU占用率高的问题](https://blog.csdn.net/jzz601264258/article/details/105850816)